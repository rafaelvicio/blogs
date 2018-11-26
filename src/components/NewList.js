import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/post";

class NewList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    console.log(this.props);
  }

  render() {
    return <div>NewList</div>;
  }
}

export default connect(
  null,
  { fetchPosts: fetchPosts }
)(NewList);
