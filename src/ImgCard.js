import React, { Component } from 'react';
import { Card, CardImg, CardBody, Container, Row } from 'reactstrap';

export class ImgCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image : this.props.image,
            alt : this.props.alt,
            english : this.props.english,
            phonetic : this.props.phonetic,
            spanish : this.props.spanish,
            audio : this.props.audio
        }
    }

    render() {
        return (
            <Card>
                <CardImg style={{ width: '80%', height: '50vh', 'marginLeft': 'auto', 'marginRight': 'auto' }} src={this.state.image} alt={this.state.alt} />
                <CardBody>
                    <Container>
                        <Row>
                            <b>{this.state.english}</b>
                        </Row>
                        <Row>
                            {this.state.phonetic}
                        </Row>
                        <Row>
                            <i>{this.state.spanish}</i>
                        </Row>
                        <audio controls>
                            <source src={this.state.audio} type='audio/mp3'></source>
                        </audio>
                    </Container>
                </CardBody>
            </Card>
        )
    }

}

