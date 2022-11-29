import React from "react";
import Card from 'react-bootstrap/Card'


class Cat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        };
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }

    render() {
        return (
            <>
                <Card onClick={this.handleClick}>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Img fluid src={this.props.imageUrl} />
                    <Card.Body>Num of clicks: {this.state.clickCount}</Card.Body>
                </Card>
            </>
        );
    }
}

export default Cat;