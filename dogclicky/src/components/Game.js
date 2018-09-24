import React, { Component } from 'react';
import Card from "./Card"
import Nav from "./Nav"
import dogs from "../dogs.json";
import _ from "underscore";

class Game extends Component {
    state = {
        dogArray: dogs,
        score: 0,
        highscore: 0
    }

    handleClick = name => {
        if (this.state.dogArray.find(dog => dog.name === name).clicked) {
            alert("You clicked the same card twice. Game Over!")
            this.setState({
                highscore: this.state.score > this.state.highscore ? this.state.score : this.state.highscore,
                score: 0,
                dogArray: dogs 
            });
            this.shuffleDeck();
        } else {
            this.setState({
                dogArray: this.state.dogArray.map(dog => (
                    dog.name === name ? ({...dog, clicked: true}) : dog
                )),
                score: this.state.score + 1
            },this.shuffleDeck)
        }
    }

    shuffleDeck = () => {
        this.setState({
            dogArray: _.shuffle(this.state.dogArray)
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
                                this.state.dogArray.map(dog => (
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