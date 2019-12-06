import React from "react";

// Creating a Titles component
class Titles extends React.Component {

    render() {
        // Uses regular HTML tags to build up a customized and reusable Titles component
        // In App.js, see this component being used!
        return (
            <div>
                <h1 className="title-container__title">Teddy's Weather Scanner </h1>
                <p className="title-container__subtitle"> Let teddy help you find the weather conditions</p>
            </div>
        )
    }
}

export default Titles;
