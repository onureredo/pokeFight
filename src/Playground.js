import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Pokemon from './Pokemon';

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Playground() {

    const [pokemonA, setPokemonA] = useState([]);
    const [pokemonB, setPokemonB] = useState([]);

    return (
        <div>
            <Container fluid className='foreground'>
                <h2 className='title'>PokeFight</h2>
                <Row className="playground-container">
                    <Col xs="3">
                        <h2>Player A</h2>
                        <Pokemon pokemonId={2} />
                    </Col>
                    <Col xs="4">
                        <button>Fight!</button>
                    </Col>
                    <Col xs="3">
                        <h2>Player B</h2>
                        <Pokemon pokemonId={3} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}