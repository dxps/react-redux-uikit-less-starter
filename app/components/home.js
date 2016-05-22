import React, { Component } from 'react';
import { Link } from 'react-router';

// export default () => {
//     <div>Home</div>
// }

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Home<br/>
            </div>
        );
    }

}