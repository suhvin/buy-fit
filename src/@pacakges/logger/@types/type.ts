export type LogEventProperty<EventProp extends Record<string, any> = {}> =
  EventProp;

export type LogEventEnvironment<Environment extends Record<string, any> = {}> =
  Environment;

export type DefaultLogEventEnvironment = {
  device: 'ios' | 'android' | 'web' | 'unknown';
  environment: 'development' | 'production' | 'test';
};
export type LogEventUser<User extends Record<string, any> = {}> = User;
