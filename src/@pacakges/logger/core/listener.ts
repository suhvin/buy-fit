import { PubSubManager } from '../../pub-sub/core';
import { LogEventDefault } from '../@types/default/default-type';

export class LoggerPubSubManager<
  Event extends LogEventDefault = LogEventDefault,
> extends PubSubManager<Event> {
  constructor() {
    super();
  }
}
