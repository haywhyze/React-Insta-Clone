import React, { Component } from 'react'

const withAuthenticate = App => 
  class extends Component {
    render() {
      return <App />;
    }
  }

export default withAuthenticate
