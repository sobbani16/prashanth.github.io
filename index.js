'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'Thanks for clicking me';
    }

    return e(
      'h4',
      { onClick: () => this.setState({ clicked: true }) },
      'Click here to know more about me'
    );
  }
}

const domContainer = document.querySelector("#index_root");
ReactDOM.render(e(LikeButton), domContainer);