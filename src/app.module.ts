import { UpdateModule } from './modules/update/update.module';
import { SharedModule } from './modules/shared/shared.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionFilterHttp } from './core/filter/exception_http.filter';

@Module({
  imports: [UpdateModule, SharedModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ExceptionFilterHttp,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
