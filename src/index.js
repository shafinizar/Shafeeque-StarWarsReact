import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import logo from './Star_Wars_Logo.svg.png';
import MovieNameResult from './MovieNameResult'
import CharacterNameResult from './CharacterNameResult'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showResults: false }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        const { showResults } = this.state;
        this.setState({ showResults: !showResults });
    }

    render() {
        let btn_class = this.state.showResults ? "button-style-result" : "button-style";
        return (
            <div className="centerAlign">
                <div className="spaceBtwResDivs"></div>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="spaceBtwResDivs"></div>
                <div className="spaceBtwDivs"></div>
                <div> <input type="submit" value="Do. Or do not. There is no try." onClick={this.handleToggleClick} className={btn_class} /></div>               
                <div className="spaceBtwResDivs"></div>
                <div className="spaceBtwDivs"></div>
                {this.state.showResults ? <div><MovieNameResult /> <CharacterNameResult /></div> : null}
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'))
