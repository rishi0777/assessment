import { ToastContainer} from 'react-toastify';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Components/Login/Login'
import Root from './Components/Users/Root/Root'
import Rishi from './Components/Users/Rishi/Rishi'

import Update from './Components/Content/Update/Update'
import Create from './Components/Content/Create/Create'

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Container>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login/root" element={<Root />}/>
          <Route path="/login/rishi" element={<Rishi />}/>

          <Route path="/addEmployee" element={<Create />}/>
          <Route path="/updateEmployee" element={<Update />}/>
        </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

