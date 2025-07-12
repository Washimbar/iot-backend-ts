import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './modules/notification/notification.module';
import { UsersModule } from './modules/users/users.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { DevicesModule } from './modules/devices/devices.module';
import { ActuatorsModule } from './modules/actuators/actuators.module';
import { SensorsModule } from './modules/sensors/sensors.module';
import { AuthModule } from './modules/auth/auth.module';
import { PermissionsModule } from './modules/permissions/permissions.module';

@Module({
  imports: [
    UsersModule,
    RoomsModule,
    DevicesModule,
    ActuatorsModule,
    SensorsModule,
    AuthModule,
    PermissionsModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
