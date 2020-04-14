// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  assessment_api_url: 'https://hn.algolia.com/api/v1/search_by_date?tags=story',
  logging: {
    serverLoggingUrl: '/api/logs',
    level: NgxLoggerLevel.ERROR,
    serverLogLevel: NgxLoggerLevel.ERROR
  }
};

