import React from 'react';
import API from '../../util/api'
import {Button, Input, Form, FormGroup, Label, Col, Row, Jumbotron, Container} from 'reactstrap'

export default class EditCharacter extends React.Component{
    state= {
        name : "",
        imageUrl: "",
        STR: "0",
        DEX: "0",
        CON: "0",
        INT: "0",
        WIS: "0",
        CHAR: "0"
    }
    handleInput= field => event => {
        const {value} = event.target;
        this.setState (
            {
                [field] : value
            }
        )
    }
    submitCharacterCreation= ()=>{
        const newChar= {
            name : this.state.name,
            imageUrl: this.state.imageUrl,
            STR: this.state.STR,
            DEX: this.state.DEX,
            CON: this.state.CON,
            INT: this.state.INT,
            WIS: this.state.WIS,
            CHAR: this.state.CHAR
        }
        API.createCharacter()
            .then( () => this.clearForm())

    }
    clearForm = ()=>{}
    render(){
        return(
            this.props.new?
            <Container>
                <Jumbotron><h1>Create a New Character</h1></Jumbotron>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Character Name</Label>
                            <Input 
                                name="name" 
                                value= {this.state.name}
                                onChange={this.handleInput("name")}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Image Url</Label>
                            <Input 
                                name="name" 
                                value= {this.state.imageUrl}
                                onChange={this.handleInput("imageUrl")}
                            />
                        </FormGroup>
                        <img alt="" src={this.state.imageUrl} className="img-fluid img-thumbnail"/>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <FormGroup>
                                <Label>Strength</Label>
                                <Input 
                                    name="name" 
                                    value= {this.state.STR}
                                    onChange={this.handleInput("STR")}
                                    type="number"
                                    min="3" max="18"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Dexterity</Label>
                                <Input 
                                    name="name" 
                                    value= {this.state.DEX}
                                    onChange={this.handleInput("DEX")}
                                    type="number"
                                    min="3" max="18"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Constitution</Label>
                                <Input 
                                    name="name" 
                                    value= {this.state.CON}
                                    onChange={this.handleInput("CON")}
                                    type="number"
                                    min="3" max="18"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Intelligence</Label>
                                <Input 
                                    name="name" 
                                    value= {this.state.INT}
                                    onChange={this.handleInput("INT")}
                                    type="number"
                                    min="3" max="18"
                            />
                            </FormGroup>
                            <FormGroup>
                                <Label>Wisdom</Label>
                                <Input 
                                    name="name" 
                                    value= {this.state.WIS}
                                    onChange={this.handleInput("WIS")}
                                    type="number"
                                    min="3" max="18"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Charisma</Label>
                                <Input 
                                    name="name" 
                                    value= {this.state.CHAR}
                                    onChange={this.handleInput("CHAR")}
                                    type="number"
                                    min="3" max="18"
                                />
                            </FormGroup>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Button onClick={this.submitCharacterCreation}>
                                    Create Character
                                </Button>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
            : null
        )
    }
}