import React, { Component } from 'react';
import Card from "./Card"
import Nav from "./Nav"
import dogs from "../dogs.json";
import _ from "underscore";

class Game extends Component {
    state = {
        dogs: dogs,
        score: 0,
        highscore: 0
    }

    // renderDogs = () => {
    //     this.state.dogs.map(dog => (
    //         <Card 
    //             name={dog.name}
    //             image={dog.image}
    //             clicked={dog.clicked}
    //             handleClick={this.handleClick}
    //         />
    //     ))
    // }

    handleClick = name => {
        if (this.state.dogs.find(dog => dog.name === name).clicked) {
            
        } else {
            this.setState({
                dogs: this.state.dogs.map(dog => (
                    dog.name === name ? ({...dog, clicked: true}) : dog
                )),
                score: this.state.score + 1
            },this.shuffleDeck)
        }
    }

    shuffleDeck = () => {
        this.setState({
            dogs: _.shuffle(this.state.dogs)
        })
    };
    
    render() {
        return (
            <div>
                <Nav score={this.state.score} highscore={this.state.highscore} />
            <div>
                <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            {
                                this.state.dogs.map(dog => (
                                    <Card 
                                        name={dog.name}
                                        image={dog.image}
                                        clicked={dog.clicked}
                                        handleClick ={this.handleClick}                                   
                                     />
                                ))
                            }
                        </div>
                    <div className="col-3"></div>
                </div>
            </div>
                </div>
            </div>
        )
    }
};

export default Game;