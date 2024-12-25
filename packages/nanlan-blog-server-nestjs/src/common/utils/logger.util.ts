import { Logger } from '@nestjs/common';

export class LoggerUtil extends Logger {
  error(message: string, trace?: string, context?: string) {
    super.error(`❌ ${message}`, trace, context || this.context);
  }

  warn(message: string, context?: string) {
    super.warn(`⚠️ ${message}`, context || this.context);
  }

  log(message: string, context?: string) {
    super.log(`✅ ${message}`, context || this.context);
  }

  debug(message: string, context?: string) {
    super.debug(`🔍 ${message}`, context || this.context);
  }

  verbose(message: string, context?: string) {
    super.verbose(`📝 ${message}`, context || this.context);
  }
}
