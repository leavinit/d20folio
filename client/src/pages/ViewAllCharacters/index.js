import React from 'react';
import {Col,Row,Container,Jumbotron} from 'reactstrap'

export default class ViewAllCharacters extends React.Component{
    state ={
        characters :[{
            "name": "Del'ri",
            "imageUrl": "https://i.pinimg.com/originals/92/1b/b2/921bb2b9cfaee0fb768cfb08be6f38be.jpg",
            "race": "Elf",
            "class": "Mystic",
            "level": 1,
            "STR": 8,
            "DEX": 14,
            "CON": 11,
            "INT": 18,
            "WIS": 15,
            "CHA": 12,
            "equipment": []
        },
        {
            "name": "Cain",
            "imageUrl": "https://i.pinimg.com/originals/d5/b4/fb/d5b4fb920d7f27ae22209ee2a83f1e80.jpg",
            "race": "Human",
            "class": "Rogue",
            "level": 1,
            "STR": 13,
            "DEX": 17,
            "CON": 14,
            "INT": 15,
            "WIS": 16,
            "CHA": 15,
            "equipment": []
        },
        {
            "name": "Vigli",
            "imageUrl": "https://vignette.wikia.nocookie.net/kingofkatanova/images/5/52/Dwarf_Warrior.jpg/revision/latest?cb=20160426195958",
            "race": "Dwarf",
            "class": "Warrior",
            "level": 1,
            "STR": 18,
            "DEX": 11,
            "CON": 17,
            "INT": 8,
            "WIS": 11,
            "CHA": 9,
            "equipment": []
        },
        {
            "name": "Zirani",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e0mig7zWh62FmIuujZWExTb5x81BKqXiz9v9Otk8Yv6pxQCY",
            "race": "Elf",
            "class": "Warrior",
            "level": 1,
            "STR": 15,
            "DEX": 18,
            "CON": 13,
            "INT": 12,
            "WIS": 16,
            "CHA": 13,
            "equipment": []
        },
        {
            "name": "Fariz",
            "imageUrl": "https://live.staticflickr.com/5174/5415327544_1faa6ff276_z.jpg",
            "race": "Dwarf",
            "class": "Mystic",
            "level": 1,
            "STR": 12,
            "DEX": 12,
            "CON": 15,
            "INT": 15,
            "WIS": 12,
            "CHA": 17,
            "equipment": []
        },
        {
            "name": "Beverly",
            "imageUrl": "https://i.pinimg.com/originals/05/b3/99/05b399f96dbe3f26607b19f7293bbe94.png",
            "race": "Human",
            "class": "Warrior",
            "level": 1,
            "STR": 14,
            "DEX": 14,
            "CON": 15,
            "INT": 11,
            "WIS": 13,
            "CHA": 14,
            "equipment": []
        }]
    }
    componentDidMount(){

    }
    render(){
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Jumbotron>
                            <h1>Welcome to D20Folio!</h1>
                            <p>Here are all the characters:</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {
                        this.state.characters.map((character, id)=>(
                            <div>
                                {character.name}
                                <img src={character.imageUrl} alt=""/>
                            </div>
                        ))
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}