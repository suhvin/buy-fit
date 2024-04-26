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
  props: { eventTuple: [Feature, Page, At, Target, Action] };
  logEvent: {
    eventName: `${Feature}${Glue}${Target}${Glue}${Action}`;
    eventPath: `${Feature}${Glue}${Page}${Glue}${At}${Glue}${Target}`;
  } & AnotherObj;
  logEventParam: { eventTuple: [Feature, Page, At, Target, Action] } & AnotherObj;
};
export type DefaultLogEventType = LogEventCreator<string, string, string, string, string, { type: string }, "_">;
