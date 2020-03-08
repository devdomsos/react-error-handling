import  React, {Component } from 'react';


export default class ErrorBoundaries extends Component {

    state = {
        hasError: false
    };

    componentDidCatch () {
        this.setState(
            { hasError: true }
        );
    }

    render () {
        if (this.state.hasError) {
           return <h2> Oh noes! Something went really wrong here!</h2>
        }
         return this.props.children;
    }
}