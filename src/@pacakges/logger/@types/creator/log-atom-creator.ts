export type LogAtomCreator<
  Feature extends string,
  Page extends string,
  At extends string,
  Target extends string,
  Action extends string,
> = {
  feature: Feature;
  page: Page;
  at: At;
  target: Target;
  action: Action;
};
