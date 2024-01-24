import { LogEventDetailCreator } from '../creator/log-event-detail-creator';
import { LogAtomCreator } from '../creator/log-atom-creator';
import { LogEventCreator } from '../creator/log-event-creator';
import { LogNamePathCreator } from '../creator/log-name-path-creator';

export type LogEventDetailDefault = LogEventDetailCreator<string, {}, {}, {}>;
export type LogAtomDefault = LogAtomCreator<
  string,
  string,
  string,
  string,
  string
>;
export type LogEventDefault = LogEventCreator<
  LogEventDetailDefault,
  LogAtomDefault
>;
export type LogNamePathDefault = LogNamePathCreator<LogAtomDefault>;
