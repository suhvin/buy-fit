import { LogAtomDefault } from '../default/default-type';

export type LogNamePathCreator<
  T extends LogAtomDefault,
  Glue extends string = '_',
> = {
  eventName: `${T['feature']}${Glue}${T['target']}${Glue}${T['action']}`;
  eventNameTuple: readonly [T['feature'], T['target'], T['action']];
  eventPath: `${T['feature']}${Glue}${T['page']}${Glue}${T['at']}${Glue}${T['target']}`;
  eventPathTuple: readonly [T['feature'], T['page'], T['at'], T['target']];
};
