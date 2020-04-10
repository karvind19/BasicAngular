// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  assessment_api_url: '',
  logging: {
    serverLoggingUrl: '/api/logs',
    level: NgxLoggerLevel.ERROR,
    serverLogLevel: NgxLoggerLevel.ERROR
  }
};

