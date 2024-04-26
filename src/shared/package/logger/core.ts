export type LogEventCreator<
  Feature extends string,
  Page extends string,
  At extends string,
  Target extends string,
  Action extends string,
  AnotherObj extends Record<string, unknown>,
  Glue extends string = "_",
> = {
  feature: Feature;
  page: Page;
  at: At;
  target: Target;
  action: Action;
  glue: Glue;
  eventTuple: [Feature, Page, At, Target, Action];
  eventName: `${Feature}${Glue}${Target}${Glue}${Action}`;
  eventNameTuple: readonly [Feature, Target, Action];
  eventPath: `${Feature}${Glue}${Page}${Glue}${At}${Glue}${Target}`;
  eventPathTuple: readonly [Feature, Page, At, Target];
  eventProperty: {
    eventPath: `${Feature}${Glue}${Page}${Glue}${At}${Glue}${Target}`;
  } & AnotherObj;
  props: { eventTuple: [Feature, Page, At, Target, Action]; eventProperty: AnotherObj };
  logEvent: {
    eventName: `${Feature}${Glue}${Target}${Glue}${Action}`;
  } & {
    eventProperty: {
      eventPath: `${Feature}${Glue}${Page}${Glue}${At}${Glue}${Target}`;
    } & AnotherObj;
  };
  logEventParam: [[Feature, Page, At, Target, Action], AnotherObj | undefined];
};
export type DefaultLogEventType = LogEventCreator<string, string, string, string, string, Record<string, unknown>, "_">;

class Logger<T extends DefaultLogEventType = DefaultLogEventType> {
  constructor(private repository: { create: (...arg: unknown[]) => void }) {}
  async log(name: T["logEventParam"][0], prop: T["logEventParam"][1]) {
    this.repository.create()
  }
}
