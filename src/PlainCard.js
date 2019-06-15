import React, { Component } from 'react';
import { Card, CardBody, Container, Row } from 'reactstrap';

export class PlainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            english: this.props.english,
            phonetic: this.props.phonetic,
            spanish: this.props.spanish,
            audio: this.props.audio
        }
    }

    render() {
        return (
            <Card>
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

