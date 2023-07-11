// attendanceService.js

const attendance_pb = require('./generated/attendance_pb');

async function getClassReport(call, callback) {
  const classId = call.request.class_id;
console.log(classId);
  // Create a sample hardcoded response for testing
  const sampleAttendance = [
    { userId: 1, status: 'Present' },
    { userId: 2, status: 'Absent' },
    { userId: 3, status: 'Present' },
  ];

  // Convert the sampleAttendance to gRPC response message format
  const classReport = sampleAttendance.map(({ userId, status }) => {
    const studentAttendance = new attendance_pb.StudentAttendance();
    studentAttendance.setStudentId(userId);
    studentAttendance.setStatus(status);
    return studentAttendance;
  });

  // Create the gRPC response message
  const response = new attendance_pb.GetClassReportResponse();
  response.setStudentAttendanceList(classReport);

  // Send the response back to the client
  callback(null, response);
}

module.exports = {
  getClassReport,
};