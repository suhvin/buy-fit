import { EventCreator, EventHandler, EventHandlersMap } from "./type";

export class PubSubManager<Event extends EventCreator<string, {}>> {
  private subscribers: {
    [eventType in Event["type"]]?: Array<EventHandler<Event>>;
  } = {};

  subscribe(eventType: Event["type"], handler: EventHandler<Event>) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType]?.push(handler);
  }

  unsubscribe(eventType: Event["type"], handler: EventHandler<Event>) {
    const handlers = this.subscribers[eventType];
    if (handlers) {
      this.subscribers[eventType] = handlers.filter((h) => h !== handler);
    }
  }

  publish(event: Event) {
    const handlers = this.subscribers?.[event?.type as unknown as Event["type"]] || [];

    handlers.forEach((handler) => handler(event));
  }

  initiate(handlerObject: EventHandlersMap<Event>) {
    const entries = Object.entries(handlerObject) as [Event["type"], EventHandlersMap<Event>[Event["type"]]][];
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
