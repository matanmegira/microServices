import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StudentsService } from './students.service';
import { CertificationsService } from './certifications.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [StudentsService, CertificationsService],
})
export class AppModule {}
