import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import NoThumbnail from './resources/image/no-thumbnail.jpg';

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

    const [pokemonImage, setPokemonImage] = useState([]);

    useEffect(() => {
        getPokemonImage().then(data => setPokemonImage(URL.createObjectURL(data)));
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image src={pokemonImage.length > 0 ? pokemonImage : NoThumbnail} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}