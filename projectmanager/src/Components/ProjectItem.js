import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    console.log(this.props);

    return (
      // Only one element is permitted at top-level
      <li className="">
        <b>{ this.props.project.title }</b>: { this.props.project.category }
      </li>
    );
  }
}

export default ProjectItem;
