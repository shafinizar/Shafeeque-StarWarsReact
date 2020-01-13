import React from 'react'
import './index.css';
import axios from 'axios';

class CharacterNameResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        this.populateCharacterName();
    }

    populateCharacterName() {
        var config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        axios.get("https://prototypeapi20200111100552.azurewebsites.net/api/Prototype/GetMostAppearedPerson").then(result => {
            const response = result.data;
            this.setState({ characters: response });
        })
            .catch(console.log)
    }

    getCharactersMovie(charactersName) {
        return (
            <table className="centerTableAlign">
                <tbody>
                    {
                        charactersName.map(character => (
                            <tr>
                                <td>{character}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    render() {
        let content = this.getCharactersMovie(this.state.characters)
        return (
            <div>
                <div className="spaceBtwResDivs"></div>
                <div className="lblFontStyle">What character (person) appeared in most of the Star Wars films?</div>
                <div className="spaceBtwDivs"></div>
                <div id="results" className="txtFontStyle">
                    {content}
                </div>
            </div>
        );
    }
}
export default CharacterNameResult;