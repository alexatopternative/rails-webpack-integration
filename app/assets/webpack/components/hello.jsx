import React from 'react';
import ReactDOM from 'react-dom';

export function hello (element, state) {
  ReactDOM.render(<Hello {...state} />, element);
}

const Hello = React.createClass({
  propTypes: {
    translations: React.PropTypes.shape({
      hello: React.PropTypes.string.isRequired,
      helloWorld: React.PropTypes.string.isRequired
    })
  },

  getInitialState () {
    return {
      hello: false
    };
  },

  onHello () {
    this.setState({ hello: true });
    setTimeout(() => this.setState({ hello: false }), 1000);
  },

  render () {
    return (
      <div>
        <h1><img src={require('../images/logo.png')} /></h1>
        <button onClick={this.onHello}>{this.props.translations.hello}</button>
        {this.renderHello()}
      </div>
    );
  },

  renderHello () {
    if (this.state.hello) {
      return <h1>{this.props.translations.helloWorld}</h1>;
    }
  }
});
