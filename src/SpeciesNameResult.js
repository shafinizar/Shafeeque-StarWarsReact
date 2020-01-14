import React from 'react'
import './index.css';
import axios from 'axios';

class SpeciesNameResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            species: []
        }
    }

    componentDidMount() {
        this.populateName();
    }

    populateName() {
        var config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        axios.get("https://prototypeapi20200111100552.azurewebsites.net/api/Prototype/GetSpecies").then(result => {
            const response = result.data;
            this.setState({ species: response });                      
        })
            .catch(console.log)
    }

    getSpecies(speciesList) {
        return (           
            <table className="centerTableAlign">
                <tbody>
                    {
                        speciesList.map(species => (                            
                            <tr>
                                <td className="tdRight">{species.speciesName}</td>
                                <td className="tdLeft">({species.numberOfCharacter})</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    render() {
        let content = this.getSpecies(this.state.species)
        return (
            <div>
                <div className="spaceBtwResDivs"></div>
                <div className="lblFontStyle">What species appeared in the most
number of Star Wars films?</div>
                <div className="spaceBtwDivs"></div>
                <div id="results" className="txtFontStyle">
                    {content}
                </div>
            </div>
        );
    }
}
export default SpeciesNameResult;