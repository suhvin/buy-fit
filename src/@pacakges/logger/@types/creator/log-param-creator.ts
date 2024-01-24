import { LogAtomDefault, LogEventDetailDefault } from '../default/default-type';
import { LoggerService } from '../../core/service';

export type LogParamCreator<
  Service extends LoggerService<LogEventDetailDefault, LogAtomDefault>,
> = Parameters<Service['createLogEvent']>['0'];
