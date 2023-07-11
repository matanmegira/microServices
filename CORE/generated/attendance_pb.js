// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_GetClassReportRequest(arg) {
  if (!(arg instanceof proto.GetClassReportRequest)) {
    throw new Error('Expected argument of type GetClassReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetClassReportRequest(buffer_arg) {
  return proto.GetClassReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetClassReportResponse(arg) {
  if (!(arg instanceof proto.GetClassReportResponse)) {
    throw new Error('Expected argument of type GetClassReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetClassReportResponse(buffer_arg) {
  return proto.GetClassReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StudentAttendance(arg) {
  if (!(arg instanceof proto.StudentAttendance)) {
    throw new Error('Expected argument of type StudentAttendance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StudentAttendance(buffer_arg) {
  return proto.StudentAttendance.deserializeBinary(new Uint8Array(buffer_arg));
}


var proto = {};
proto.AttendanceService = require('./attendance_grpc_pb.js');

if (grpc.util) {
  grpc.util.lazyLoadProtoFile(proto, null);
}

if (grpc.web) {
  grpc.web.Error = grpc.Error;
  grpc.web.Status = grpc.Status;
  grpc.web.metadata = grpc.Metadata;
}

module.exports = proto;
