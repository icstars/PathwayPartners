import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmployeeCard from "../Employees/EmployeeCard";
import TestEmployeeGet from "../Employees/TestEmployeeGet";
import BarNav from '../navbar/Navbar';
import { Container } from 'react-bootstrap';
import Table from '../Table/Table';


function StaffDirectory() {


return(
       
    <div>
        
       
        <Container> 
        
           
          <table> <TestEmployeeGet/> </table> 
          
        
        </Container>
        
    </div>
    );
            
}
    



export default StaffDirectory;