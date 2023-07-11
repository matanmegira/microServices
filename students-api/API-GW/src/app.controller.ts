import { Controller, Get, Post, Param, Body} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CertificationsService } from './certifications.service';
const axios = require('axios');


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

  @Get('attendance/:classId')
  attendanceReport(@Param('classId') classId): string {
    return classId;
  }

  @Post('generateCertificates/:classId')
  async generateCertificates(@Param('classId') classId) {
    console.log(classId);
    const attendanceReports = (await axios.get(`http://localhost:3001/attendance/${classId}`, {})).data;
    console.log("attendanceReports");
    console.log(attendanceReports)

    const policyId = (await axios.get(`http://localhost:3005/policy/${classId}`, {})).data;
    console.log("policyId: " + policyId);
    
    const res = await axios.post('http://localhost:3004/produce', {
        message: {
            policyId,
            attendanceReports: attendanceReports
        }
    })

    return "class validation sent to queue";
  }
  
}
