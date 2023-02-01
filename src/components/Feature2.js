import './Feature2.css';
import React, { Component } from 'react'

class Feature2 extends Component {
    render() {
        return (
            <div className='feature-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Feature2;