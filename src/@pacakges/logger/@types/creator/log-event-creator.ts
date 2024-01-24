import { LogAtomDefault, LogEventDetailDefault } from '../default/default-type';
import { LogNamePathCreator } from './log-name-path-creator';

export type LogEventCreator<
  T extends LogEventDetailDefault,
  A extends LogAtomDefault,
  Glue extends string = string,
> = T & {
  eventName: LogNamePathCreator<A, Glue>['eventName'];
  eventPath: LogNamePathCreator<A, Glue>['eventPath'];
};
