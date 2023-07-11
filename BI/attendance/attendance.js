function getAttendance(courseId) {
    //should grpc
    return {
        amountOfAttendant: 2,
        reports: [
            {id: 1, status: "attened"},
            {id: 2, status: "sick"},
            {id: 1, status: "attened"}
        ]};
}

module.exports = {getAttendance };