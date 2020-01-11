import React from 'react'
import './index.css';
import axios from 'axios';

class MovieNameResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: ""
        }
    }

    componentDidMount() {
        this.populateMovieName();
    }

    populateMovieName() {
        var config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        axios.get("https://prototypeapi20200111100552.azurewebsites.net/api/Prototype/GetLongestMovie").then(result => {
            const response = result.data;
            this.setState({ movie: response });
        })
            .catch(console.log)
    }

    getLongestMovie(movieName) {
        return (<div>{movieName}</div>
        );
    }

    render() {
        let content = this.getLongestMovie(this.state.movie)
        return (
            <div>
                <div className="lblFontStyle">Which of all Star Wars movies has the longest opening crawl?</div>
                <div className="spaceBtwDivs"></div>
                <div id="results" className="search-results" className="txtFontStyle">
                    {content}
                </div>
            </div>
        );
    }
}
export default MovieNameResult;