import logo from './assets/enchanted_book.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Enchantment Calculator
        </h1>
        <Container fluid="md">
          <Row>
            <Col>
              <p>Rework Count</p>
              <div class="d-inline-flex">
                <Button variant="primary">-</Button>
                <Form.Control type="input" size="sm"/>
                <Button variant="primary">+</Button>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                Target
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Tool</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <p>Rework Count</p>
              <div class="d-inline-flex">
                <Button variant="primary">-</Button>
                <Form.Control type="input" size="sm"/>
                <Button variant="primary">+</Button>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sacrifice
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Tool</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Book</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>

      </header>
    </div>
  );
}

export default App;
