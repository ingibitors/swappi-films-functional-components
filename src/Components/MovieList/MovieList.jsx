import React, {Component} from 'react';
import Movie from "../Movie/Movie";

class MovieList extends Component {
    render() {
        const {movies} = this.props;
        const moviesList = movies.map(x=> <Movie movie={x} key={x.id}/>);
        return (
            <div>
                <ol>
                    {moviesList}
                </ol>
            </div>
        );
    }
}

export default MovieList;