import { Controller, Get, Param, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CertificationsService } from './certifications.service';
const axios = require('axios');


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

  @Post('generateCertificates')
  async generateCertificates(@Param('classId') classId) {
    const attendanceReports = await axios.get('http://localhost:3001/attendance', {
        params: {
            classId
        }
    });

    const policyId = await axios.get('http://localhost:3001/policy', {
        params: {
            classId
        }
    });

    const res = await axios({
        method: 'post',
        url:'http://localhost:3002/publish',
        params:{
            message: {
                policyId,
                attendanceReports
            }
        }
    });

    return true;
  }
  
}
