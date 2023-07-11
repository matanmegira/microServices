// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var attendance_pb = require('./attendance_pb.js');

function serialize_GetClassReportRequest(arg) {
  if (!(arg instanceof attendance_pb.GetClassReportRequest)) {
    throw new Error('Expected argument of type GetClassReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetClassReportRequest(buffer_arg) {
  return attendance_pb.GetClassReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetClassReportResponse(arg) {
  if (!(arg instanceof attendance_pb.GetClassReportResponse)) {
    throw new Error('Expected argument of type GetClassReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetClassReportResponse(buffer_arg) {
  return attendance_pb.GetClassReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AttendanceService = exports.AttendanceService = {
  getClassReport: {
    path: '/AttendanceService/GetClassReport',
    requestStream: false,
    responseStream: false,
    requestType: attendance_pb.GetClassReportRequest,
    responseType: attendance_pb.GetClassReportResponse,
    requestSerialize: serialize_GetClassReportRequest,
    requestDeserialize: deserialize_GetClassReportRequest,
    responseSerialize: serialize_GetClassReportResponse,
    responseDeserialize: deserialize_GetClassReportResponse,
  },
};

exports.AttendanceClient = grpc.makeGenericClientConstructor(AttendanceService);
