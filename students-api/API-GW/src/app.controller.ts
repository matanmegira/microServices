import { Controller, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CertificationsService } from './certifications.service';

@Controller()
export class AppController {
  constructor(
        private readonly studentsService: StudentsService,
        private readonly certificationsService: CertificationsService
    ) {}

  @Get('certificates')
  certificates(): string {
    return this.certificationsService.getCertifications();
  }

  @Get('studentsValidation')
  studentsValidation(): string {
    return this.studentsService.getStudents();
  }

  @Get('attendanceReport/:courseId')
  attendanceReport(@Param('courseId') courseId): string {
    return courseId;
  }
}
