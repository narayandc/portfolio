
import React, { Component } from 'react';
import Home from './Home/Index';
import Professional from './Professional';
import ContactForm from './ContactForm';
import Footer from './Footer';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Home />
                <Professional />
                <ContactForm />
                <Footer />
            </>
        );
    }
}

export default Index;
