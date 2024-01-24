export type EventName<Event> = Event extends string ? Event : never;

export type EventProperty<Prop> = Prop extends Record<string, any> ? Prop : never;

export type EventCreator<T = EventName<string>, P = EventProperty<{}>> = P & {
  type: T;
};

export type EventHandler<Event extends EventCreator<string, {}> = EventCreator<string, {}>> = (event: Event) => void;

export type EventHandlersMap<Event extends EventCreator<string, {}> = EventCreator<string, {}>> = {
  [K in Event["type"]]?: Array<EventHandler<Event>>;
};
