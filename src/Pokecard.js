import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render(){
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return(
      <div className="Pokecard">
        <h2 className="Pokecard-title">{this.props.name}</h2>
        <img className="Pokecard-image" src={imgSrc}  alt={this.props.name} />
        <p className="Pokecard-data">Type: {this.props.type}</p>
        <p className="Pokecard-data">Experience: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;