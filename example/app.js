import React from 'react';
import ReactDOM from 'react-dom';
import Flyout from '../lib/flyout';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <button onClick={() => this.setState({ open: true })}>click me</button>

        <Flyout
          style={{ width: "100px", border: '1px solid gray', position: 'absolute', top: '20px' }}
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}>
          <ul>
            <li>foo</li>
            <li>bar</li>
            <li>baz</li>
          </ul>
        </Flyout>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('app'));
