// server.js

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const attendanceService = require('./attendanceService');

// Load the gRPC service definition
const packageDefinition = protoLoader.loadSync('attendance.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const attendanceProto = grpc.loadPackageDefinition(packageDefinition).AttendanceService;

function main() {
  const server = new grpc.Server();
  server.addService(attendanceProto.service, { GetClassReport: attendanceService.getClassReport });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('gRPC server started on port 50051');
}

main();
