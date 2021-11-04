import React, {Component} from 'react';
import axios from "axios";
import Loader from "../Loader/Loader";

class Planets extends Component {
    state = {
        isLoading: true,
        planets: []

    }

    /* //получаем res , из res получаем data и записывем его в movies и меняем isLoading на false*/
    componentDidMount() {
        const {planets} = this.props
        const requests = planets.map(c => axios(c))
        Promise.all(requests).then(res => {
            const names = res.map(r =>r.data.name)
            this.setState({planets: names, isLoading: false})
        })

    }

    render() {
        const {planets,isLoading}=this.state
        /*console.log(characters)*/
        return (
            <div>
                {isLoading && <Loader/>}
                {!isLoading && planets.join(",")}
            </div>

        );
    }
}

export default Planets;