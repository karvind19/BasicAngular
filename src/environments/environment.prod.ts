import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  assessment_api_url: '',
  logging: {
    serverLoggingUrl: '/api/logs',
    level: NgxLoggerLevel.ERROR,
    serverLogLevel: NgxLoggerLevel.ERROR
  }
};

