import React, {Component} from 'react';
import axios from "axios";
import Loader from "../Loader/Loader";

class Characters extends Component {
    state = {
        isLoading: true,
        characters: [],

    }

    /* //получаем res , из res получаем data и записывем его в movies и меняем isLoading на false*/
    componentDidMount() {
        const {characters} = this.props
        const requests = characters.map(c => axios(c))
        Promise.all(requests).then(res => {
            const names = res.map(r =>r.data.name)
            this.setState({characters: names, isLoading: false})
        })

    }

    render() {
        const {characters,isLoading}=this.state
        /*console.log(characters)*/
        return (
            <div>
                {isLoading && <Loader/>}
                {!isLoading && characters.join(",")}
            </div>

        );
    }
}

export default Characters;