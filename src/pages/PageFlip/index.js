import React, { Component } from 'react';
import PageFlip from '@/common/page-flip';
import { connect } from 'dva';

@connect(({ global }) => ({
  global,
}))
class Index extends Component {
  componentDidMount() {
    const { articleId } = this.props.location.query;
    console.log(articleId);
    this.props.dispatch({
      type: 'global/fetchQK',
      payload: {
        articleId,
      },
    }).then(() => {
      const { qkImages } = this.props.global;
      new PageFlip('#pageFlip', qkImages);
    });
  }

  render() {
    return (
      <div>
        <div id='pageFlip' style={{ width: '100%' }}/>
      </div>
    );
  }
}

export default Index;
