import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

function talk () {
	let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}

class Talker extends React.Component {
  talk () {
	let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}

  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
