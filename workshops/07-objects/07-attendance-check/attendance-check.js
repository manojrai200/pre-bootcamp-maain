let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
function attendanceCheck(day) {

    debugger;
    let present = [];

    for (let i = 0; i < classRoom.length; i++) {
        let studentObj = classRoom[i];
        let name = Object.keys(studentObj)[0];
        let attendance = studentObj[name];
                for (let j = 0; j < attendance.length; j++) {
                    if (attendance[j][day] === true) {
                        present.push(name);
                        break;
                    }
    }
  }

  return present;
}


console.log(attendanceCheck('Friday'));
