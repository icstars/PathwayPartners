import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard.jsx";

function TestEmployeeGet() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    async function getAllEmployees() {
      let response = await fetch("http://localhost:3000/employees");
      let employees = await response.json();
      setEmployeeList(employees); // Store raw data instead of JSX elements
    }
    getAllEmployees();
  }, []);

  return (
    <>
      <h1>Employees!</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee, index) => (
            <tr key={index}>
              <td>
                {employee.first_name} {employee.last_name}
              </td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TestEmployeeGet;
