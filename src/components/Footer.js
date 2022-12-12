import React, { Component } from 'react';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitorCount: 0,
      requestCount: 0
    };
  }
  componentDidMount() {
    fetch("https://ru1vep5kyg.execute-api.us-east-1.amazonaws.com/Prod/get" )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ requestCount: result.requests, visitorCount: result.visitors })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <p>Visitors count: {this.state.visitorCount}</p>
          <p>Requests count (including non-browser requests): {this.state.requestCount}</p>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}