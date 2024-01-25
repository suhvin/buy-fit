import { LogEventCreator } from "../@types/creator/log-event-creator";
import { LogAtomDefault, LogEventDetailDefault } from "../@types/default/default-type";
import { LogNamePathCreator } from "../@types/creator/log-name-path-creator";
import { DeviceHelper } from "../../device-helper/core";
/**
 *
 *
 * GENERIC의 순서
 * Feature , Page , At , Target, Action, Glue
 * Glue는 선택값이며 기본값은 "_"입니다.
 *
 * @template EventDetail - 로그 이벤트의 유저, 환경 등을 나타냅니다 .
 * @template LogAtom - 로그이벤트의 각 구성요소들을 의미합니다.
 * @template Glue - 로그 이벤트의 각 요소를 연결하는 구분자로 사용되는 문자열 타입입니다. 기본값은 '_' 입니다.
 *
 * @param {Glue} [config.defaultOptions.glue] - 로그 이벤트 요소를 연결할 때 사용할 구분자입니다.
 *

 */
export class LoggerService<
  EventDetail extends LogEventDetailDefault,
  LogAtom extends LogAtomDefault,
  Glue extends string = "_",
> {
  private glue: Glue;
  constructor(config?: {
    defaultOptions?: {
      glue?: Glue;
    };
  }) {
    this.glue = config?.defaultOptions?.glue ?? ("_" as Glue);
  }

  nameTupleToString(tuple: LogNamePathCreator<LogAtom, Glue>["eventNameTuple"]) {
    return tuple.join(this.glue) as LogNamePathCreator<LogAtom, Glue>["eventName"];
  }

  pathTupleToString(tuple: LogNamePathCreator<LogAtom, Glue>["eventPathTuple"]) {
    return tuple.join(this.glue) as LogNamePathCreator<LogAtom, Glue>["eventPath"];
  }

  nameStringToTuple(eventName: LogNamePathCreator<LogAtom, Glue>["eventName"]) {
    return eventName.split(this.glue) as unknown as LogNamePathCreator<LogAtom, Glue>["eventNameTuple"];
  }

  pathStringToTuple(eventPath: LogNamePathCreator<LogAtom, Glue>["eventPath"]) {
    return eventPath.split(this.glue) as unknown as LogNamePathCreator<LogAtom, Glue>["eventPathTuple"];
  }
  protected createLogEnvironment(envObj?: Omit<EventDetail["eventEnvironment"], "device" | "environment">) {
    const deviceHelper = new DeviceHelper();
    const device = deviceHelper.getDevice();
    const environment = process.env.NODE_ENV;
    if (!envObj) {
      return { device, environment };
    }
    return {
      device,
      environment,
      ...envObj,
    };
  }
  createLogEvent(event: {
    type: EventDetail["type"];
    eventProperty?: EventDetail["eventProperty"];
    eventName: LogNamePathCreator<LogAtom, Glue>["eventNameTuple"];
    eventPath: LogNamePathCreator<LogAtom, Glue>["eventPathTuple"];
    eventUser: EventDetail["eventUser"];
    eventEnvironment?: EventDetail["eventEnvironment"];
  }): LogEventCreator<EventDetail, LogAtom> {
    const eventEnvironment = this.createLogEnvironment(event.eventEnvironment);
    const eventProperty = event.eventProperty ?? {};
    const eventTime = new Date().toISOString();
    const eventName = this.nameTupleToString(event.eventName);
    const eventPath = this.pathTupleToString(event.eventPath);
    return {
      eventEnvironment,
      eventProperty,
      eventTime,
      eventName,
      eventPath,
      type: event.type,
      eventUser: event.eventUser,
    } as LogEventCreator<EventDetail, LogAtom>;
  }
}
