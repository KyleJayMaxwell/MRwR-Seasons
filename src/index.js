import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);

        // only time to do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // update state by calling setState
                this.setState({ lat: position.coords.latitude });
            },
            (error) => {
                this.setState({ errorMessage: error.message });
            }
        );
    }

    // Have to define render
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }
        return <div>Loading</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);