import React, { Component } from 'react'

const withAuthenticate = FirstComponent => SecondComponent =>
  class extends Component {
    constructor() {
      super();

      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      localStorage.username && this.setState({
        loggedIn: true,
      })
    }

    render() {
      return this.state.loggedIn ? <FirstComponent /> : <SecondComponent />;
    }
  }

export default withAuthenticate
