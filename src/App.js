import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div>
      <Container fluid className='foreground'>
        <h2 className='title'>PokeFight</h2>
        <Row>
          <Col>
            <div className='selectBtn'>
              <Link to='/playground'>Start the game</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

