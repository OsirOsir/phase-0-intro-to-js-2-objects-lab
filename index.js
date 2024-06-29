// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee
}

function deleteFromEmployeeByKey(employee, key){
  const deleteEmployee = { ...employee}; 
  delete deleteEmployee[key];
  return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee
}

// let employee = {
//   name: 'Alice',
//   age: 30,
//   role: 'Manager'
// };
// destructivelyDeleteFromEmployeeByKey(employee, 'age');

// console.log(employee);