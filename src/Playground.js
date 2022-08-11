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
                <Row>
                    <Col>
                        <h2 className='playerTitle'>Player A</h2>
                        {
                            pokemonA.length > 0 ?
                                <Pokemon pokemonId={pokemonA.id} /> :
                                <div className='selectBtn'>
                                    <Link to='/pokemonList'>Choose a Pokemon</Link>
                                </div>
                        }
                    </Col>
                    <Col>
                        <h2 className='playerTitle'>Player B</h2>
                        {
                            pokemonB.length > 0 ?
                                <Pokemon pokemonId={pokemonB.id} /> :
                                <div className='selectBtn'>
                                    <Link to='/pokemonList'>Choose a Pokemon</Link>
                                </div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}