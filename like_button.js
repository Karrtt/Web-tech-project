//'use strict';


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this product.';
    }

    return (
        <button  onClick={() => this.setState({ liked: true })}>Like!!!
        </button>
      );
  }
}
const domContainer = document.querySelector('#like_button_container');

ReactDOM.render(<LikeButton/>, domContainer);
ReactDOM.render(<LikeButton/>, document.querySelector('#like_button_container1'));
ReactDOM.render(<LikeButton/>, document.querySelector('#like_button_container2'));
ReactDOM.render(<LikeButton/>, document.querySelector('#like_button_container3'));