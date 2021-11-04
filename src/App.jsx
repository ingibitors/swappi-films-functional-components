import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Loader from "./Components/Loader/Loader";
import MovieList from "./Components/MovieList/MovieList";

class App extends Component  {
    state={
        isLoading:true,
        movies:[],
        currency:[]
    }
    /* //получаем res , из res получаем data и записывем его в movies и меняем isLoading на false*/
    componentDidMount() {
        axios("https://ajax.test-danit.com/api/swapi/films")
            .then(res=>this.setState({movies:res.data,isLoading:false}))
       /* axios("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
            .then(res=>this.setState({currency:res.data,isLoading:false}))*/

    }
    render() {
        return (
            <div className="App">
                {this.state.isLoading && <Loader/>}
               <MovieList movies={this.state.movies} />
            </div>
        );
    }
}
export default App;
