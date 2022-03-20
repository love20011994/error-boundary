import React, { Component } from 'react';

export class Err1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError executed');
        console.log(error);
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log('componentDidCatch executed');
        console.log(error);
        console.log(info);
    }
    render() {
        if (this.state.hasError) {
            return <div><img src='https://image.freepik.com/free-vector/error-page-page-found-something-went-wrong-template-design-error-message_219593-25.jpg' /></div>;
        } else {
            return this.props.children
        }

    }
}

export default Err1;
