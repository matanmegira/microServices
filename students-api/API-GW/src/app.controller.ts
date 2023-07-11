import { Controller, Get, Post, Param, Body} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CertificationsService } from './certifications.service';

@Controller()
export class AppController {
  constructor(
        private readonly studentsService: StudentsService,
        private readonly certificationsService: CertificationsService
    ) {}

  @Get('certificates/:studentId') //send id of students as params - DONE
  certificates(@Param('studentId') studentId): string {
    return this.certificationsService.getCertifications();
  }

  @Post('reportsValidation') //send report array as params - DONE
  studentsValidation(@Body() reportsObj): string {
    return this.studentsService.getStudents();
  }

  @Get('attendanceReports/:courseId')
  attendanceReport(@Param('courseId') courseId): string {
    return courseId;
  }
}
