export type PubSubEvent<EventContent extends Record<string, any> & { type: string }> = EventContent;

export type DefaultPubSubEvent = PubSubEvent<{ type: string }>;

export type PubSubEventHandler<T extends DefaultPubSubEvent> = (event: T) => void;

export type PubSubEventHandlersMaps<Event extends DefaultPubSubEvent> = {
  [K in Event["type"]]?: Array<PubSubEventHandler<Extract<Event, { type: K }>>>;
};

export class PubSubManager<Event extends DefaultPubSubEvent> {
  private subscribers: {
    [eventType in Event["type"]]?: Array<PubSubEventHandler<Event>>;
  } = {};

  subscribe<K extends Event["type"]>(eventType: K, handler: PubSubEventHandler<Extract<Event, { type: K }>>) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType]?.push(handler as PubSubEventHandler<Event>);
  }

  unsubscribe<K extends Event["type"]>(eventType: K, handler: PubSubEventHandler<Extract<Event, { type: K }>>) {
    const handlers = this.subscribers[eventType];
    if (handlers) {
      this.subscribers[eventType] = handlers.filter((h) => h !== handler);
    }
  }

  publish(event: Event) {
    const handlers = this.subscribers?.[event?.type as unknown as Event["type"]] || [];

    handlers.forEach((handler) => handler(event));
  }

  initiate(handlerObject: PubSubEventHandlersMaps<Event>) {
    const entries = Object.entries(handlerObject) as [Event["type"], PubSubEventHandlersMaps<Event>[Event["type"]]][];
    entries.forEach(([eventType, handlers]) => {
      handlers?.forEach((handler) => {
        this.subscribe(eventType, handler);
      });
    });
  }

  initialize() {
    this.subscribers = {};
  }
}
