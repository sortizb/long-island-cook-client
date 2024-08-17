import React from "react";

export class SlideContent extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='slide-container'>
                <img src={this.props.image} alt={this.props.alt} />
                <div className='slide-content'>
                    <h3 className="slide-title">{this.props.title}</h3>
                    <p className="slide-text">{this.props.text}</p>
                    <button className="slide-button">BOOK AN APPOINTMENT</button>
                </div>
            </div>
        );
    }
}