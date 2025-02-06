import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function TestEmployeeGet() {
  const [employeeList, setEmployeeList] = useState([]); // Store employee data
  const [searchQuery, setSearchQuery] = useState(""); // Store search input
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const employeesPerPage = 5; // Number of employees per page

  useEffect(() => {
    async function getAllEmployees() {
      try {
        let response = await fetch("http://localhost:3000/employees");
        let employees = await response.json();
        setEmployeeList(employees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }
    getAllEmployees();
  }, []);

  // Filter employees based on search query
  const filteredEmployees = employeeList.filter((employee) =>
    `${employee.first_name} ${employee.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Pagination: Get employees for current page
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <h1>Employees!</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search employees..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{
          padding: "8px",
          marginBottom: "10px",
          width: "50%",
          display: "block",
          margin: "auto",
        }}
      />

      {/* Employee Table */}
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>
                {employee.first_name} {employee.last_name}
              </td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Buttons */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {Math.ceil(filteredEmployees.length / employeesPerPage)}
        </span>
        <button
          disabled={currentPage >= Math.ceil(filteredEmployees.length / employeesPerPage)}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default TestEmployeeGet;

