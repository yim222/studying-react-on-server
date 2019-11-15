'use strict';

class LikeButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this. - outer component';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  } 
}

let domContainer5 = document.querySelector('#aaa');
ReactDOM.render(<LikeButton2 />, domContainer5);
