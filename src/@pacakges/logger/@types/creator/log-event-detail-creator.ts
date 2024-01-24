import { DefaultLogEventEnvironment } from '../type';

export type LogEventDetailCreator<
  EventType extends string,
  EventUser extends Record<string, any>,
  EventProperty extends Record<string, any>,
  EventEnvironment extends Record<string, any>,
> = {
  type: EventType;
  eventUser: EventUser;
  eventProperty: EventProperty;
  eventEnvironment:
    | (EventEnvironment & DefaultLogEventEnvironment)
    | DefaultLogEventEnvironment;
  eventTime: string;
};
