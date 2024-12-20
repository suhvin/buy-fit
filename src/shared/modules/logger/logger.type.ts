import type { LogEventCreator } from './core';
import type { PubSubEventHandler } from '../pub-sub/core';

export const glue = '_' as const;
export type GLUE = typeof glue;

export type FEATURE = 'quokka';
export type PAGE = 'home';
export type AT = 'toast';
export type TARGET = 'toast';
export type ACTION = 'click';
// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type EVENT_OBJECT = {};
export type QuokkaLogEvent = LogEventCreator<FEATURE, PAGE, AT, TARGET, ACTION, EVENT_OBJECT, GLUE>;
export type LogObject = { type: 'LOG_EVENT' };
export type MergedQuokkaLogEvent = QuokkaLogEvent['logEvent'] & LogObject;
export type QuokkaLogEventHandler = PubSubEventHandler<MergedQuokkaLogEvent>;
