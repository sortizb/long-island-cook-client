import React from "react";

export class Navbar extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className='nav-bar fadeInDelayed animation--delay'>
                <ul>
                    <li><a href="#home" className={"" + (this.props.isInDark ? "dark-font" : "light-font")}>Home</a></li>
                    <li><a href="#food-types" className={"" + (this.props.isInDark ? "dark-font" : "light-font")}>Food Types</a></li>
                    <li><a href="#about" className={"" + (this.props.isInDark ? "dark-font" : "light-font")}>About Us</a></li>
                    <li><a href="#about" className={"" + (this.props.isInDark ? "dark-font" : "light-font")}>Contact Us</a></li>
                </ul>
            </nav>
        );
    }

}