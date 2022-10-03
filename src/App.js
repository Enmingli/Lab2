import './App.css';
import React from 'react';
import { Content } from './Components/content';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



class App extends React.Component {
  render(){
  return (
    //JSX code, import contents from Components
    <Router>
      <div>
         {/* Navbar using bootstrap */}
        <Navbar bg="primary" variant="dark" >
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Imporing Route to call each page */}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Header></Header>}></Route>
          <Route path='/create' element={<Footer></Footer>}></Route>
        </Routes>
      </div>
    </Router>
  );
  }
}

export default App;
