import React, { Component } from 'react';
import DynamicTitle from '../../components/DynamicTitle/index';

class Index extends Component {
  render() {
    const { module } = this.props.location.query;
    return (
      <DynamicTitle>
        {module}
      </DynamicTitle>
    );
  }
}

export default Index;
