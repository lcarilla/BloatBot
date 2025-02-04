import { DataBaseModule } from './database.module';
import { EntitiesModule } from './entities/entities.module';
import { MessageModule } from './message/message.module';
import { Module } from '@nestjs/common';
import { UtilModule } from './util/util.module';

@Module({
  imports: [DataBaseModule, EntitiesModule, MessageModule],
})
export class AppModule { }
