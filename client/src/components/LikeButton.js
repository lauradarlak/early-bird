import React, { Component } from 'react';
import { Button } from "reactstrap";

export default class LikeButton extends Component {

  constructor(props) {
    super()

    this.state = {
      counter: 0
    }
  }

  increaseLike = () => {
    const newCount = this.state.counter + 1
    this.setState({
      counter: newCount

    })
  }

  render() {
    return(
        <Button onClick={this.increaseLike}>{this.state.counter}</Button>
    )
  }

}
