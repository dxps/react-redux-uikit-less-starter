import React, { Component } from "react";
import Header from "./components/header";

import style from "./styles/app.less";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
                <Header />
                <section className={style.content}>
                    {this.props.children}
                </section>
            </div>
        );
    }

}
