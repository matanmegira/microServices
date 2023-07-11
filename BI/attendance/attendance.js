function getAttendance(courseId) {
    //should grpc
    return {
        amountOfAttendant: 2,
        reports: [
            {studentId: 1, status: "attened"},
            {studentId: 2, status: "sick"},
            {studentId: 1, status: "attened"}
        ]};
}

module.exports = {getAttendance };