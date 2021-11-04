import React, {Component} from 'react';
import Characters from "../Characters/Characters";
import Planets from "../Planets/Planets";
import Species from "../Species/Species";



class Movie extends Component {
    state = {
        expanded: false
    }
    render() {
        const {movie}=this.props

        return (

                <li>
                    <div>
                        name : {movie.name}
                        {!this.state.expanded && <button onClick={this.expandMovie}>Детальнее....</button>}
                    </div>
                    {this.state.expanded && <div> Персонажи/characters : <Characters characters={movie.characters}/></div>}
                    {this.state.expanded && <div> Директор/director : {movie.director}</div>}
                    {this.state.expanded &&  <div> Эпизод/episodeId:  {movie.episodeId}</div>}
                    {this.state.expanded && <div> Титры/openingCrawl : {movie.openingCrawl}</div>}
                    {this.state.expanded && <div> Планеты/planets : <Planets planets={movie.planets}/></div>}
                    {this.state.expanded && <div>Продюсер/producer : {movie.producer}</div>}
                    {this.state.expanded && <div>Дата выпуска / releaseDate : {movie.releaseDate}</div>}
                    {this.state.expanded && <div> Spices language : <Species species={movie.species}/></div>}

                </li>
        );
    }
    expandMovie = () => this.setState({expanded:true})
}

export default Movie;