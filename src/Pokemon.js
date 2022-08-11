import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar';

import NoThumbnail from './resources/image/no-thumbnail.jpg';
import Sword from './resources/image/sword.png';
import Shield from './resources/image/shield.png';
import Pokeball from './resources/image/pokeball.png';
import Speed from './resources/image/speed.png';

import { useEffect, useState } from "react";

export default function Pokemon({ pokemonId }) {

    const getPokemonImage = async () => {
        const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`);
        if (response.status !== 200) {
            throw new Error("cannot fetch the data");
        } else {
            return response.blob();
        }
    }

    const getPokemonData = async () => {
        const response = await fetch(`https://wbs-group-two-pokefight.herokuapp.com/pokemon/${pokemonId}`);
        if (response.status !== 200) {
            throw new Error("cannot fetch the data");
        } else {
            return response.json();
        }
    }

    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        getPokemonImage().then(data => setPokemonImage(URL.createObjectURL(data)));
        getPokemonData().then(data => setPokemonData(data));
    }, []);

    console.log(pokemonData)
    console.log(pokemonImage)

    return (
        <div>
            <Container className="pokemon-container">
                <Row>
                    <Col className="stat">
                        <Image className="poke-image" src={pokemonImage.length > 0 ? pokemonImage : null} />
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="pokemon-name">{pokemonData.length !== 0? pokemonData.name.english : null}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="stat">
                        <Image className="card-icons" src={Pokeball} />
                        <progress className="range" value={pokemonData.length !== 0? pokemonData.base.HP : null} max="100"></progress>
                        <p className="stat-number">{pokemonData.length !== 0? pokemonData.base.HP : null}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="stat">
                        <Image className="card-icons" src={Sword} />
                        <progress className="range" value={pokemonData.length !== 0? pokemonData.base.Attack : null} max="100"></progress>
                        <p className="stat-number">{pokemonData.length !== 0? pokemonData.base.Attack : null}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="stat">
                        <Image className="card-icons" src={Shield} />
                        <progress className="range" value={pokemonData.length !== 0? pokemonData.base.Defense : null} max="100"></progress>
                        <p className="stat-number">{pokemonData.length !== 0? pokemonData.base.Defense : null}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="stat">
                        <Image className="card-icons" src={Speed} />
                        <progress className="range" value={pokemonData.length !== 0? pokemonData.base.Speed : null} max="100"></progress>
                        <p className="stat-number">{pokemonData.length !== 0? pokemonData.base.Speed : null}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}