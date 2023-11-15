// Group employees according to their department
const employees = [
    { name: 'Steve', department: 'HR', salary: 100 },
    { name: 'Mark', department: 'IT', salary: 300 },
    { name: 'John', department: 'Admin', salary: 100 },
    { name: 'Mary', department: 'HR', salary: 500 },
  ];

//   const groupEmployees = employees.reduce((departmentGroup,employee) => {

//     let department = employee.department
//     if (!departmentGroup[department]){
//         departmentGroup[department] = []
//     }
//     departmentGroup[department].push(employee);
//     return departmentGroup;
    
//   },{})

//   console.log(groupEmployees);


function groupByEmployees(employee) {
    let departmentGroup = {};
    for (i = 0; i < employee.length; i++){
        let groupEmployees = employee[i]
        let department = groupEmployees.department;
        if(!departmentGroup[department]){
            departmentGroup[department] = []
        }
        departmentGroup[department].push(groupEmployees);
    }
    return departmentGroup
}

console.log(groupByEmployees(employees));