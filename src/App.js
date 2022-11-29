import catArray from "./data.json";
import Cat from "./components/cat.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <Container>
      <Row lg={5} xs={2} sm={3} md={4}  >
        {catArray.map(catInfo => (
          <Col key={catInfo.id} >
            <Cat name={catInfo.name} imageUrl={catInfo.url} />
          </Col>))}
      </Row>
    </Container>
  );
}

export default App;
