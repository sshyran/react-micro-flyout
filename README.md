# react-micro-flyout

A react component that provides minimum feature for flyout (like as tooltip, popup, balloon UI).

## Install

```
$ npm install --save react-micro-flyout
```

## Example

```javascript
import React from 'react';
import Flyout from 'react-micro-flyout';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <button onClick={() => this.setState({ open: true })}>Open</button>

        <Flyout
          style={{ width: "100px", border: '1px solid gray', position: 'absolute', top: '20px' }}
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}>
          <p>some contents</p>
        </Flyout>
      </div>
    );
  }
}
```

## License

MIT
