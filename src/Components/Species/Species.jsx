import React, {Component} from 'react';
import axios from "axios";
import Loader from "../Loader/Loader";
import './Species.css';

class Species extends Component {
    state = {
        isLoading: true,
        species: []
    }

    componentDidMount() {
        const {species} = this.props;
        const requests=species.map(c => axios(c))
        //получаем все значениия по ключу language
        Promise.all(requests).then(res=>{
            const names=res.map(r=>r.data.language)
            this.setState({species: names,isLoading: false})
        })
    }

    render() {
        const {species,isLoading} = this.state;
        return (
            <div className="spices">
                {isLoading && <Loader/>}
                {!isLoading && species.join(',')}
            </div>
        );
    }
}

export default Species;