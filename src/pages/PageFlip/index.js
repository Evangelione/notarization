import React, { Component } from 'react';
import PageFlip from '@/common/page-flip';
import { connect } from 'dva';
import DynamicTitle from '@/components/DynamicTitle/index';
import styles from '@/pages/ReportDownload/index.less';

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
    const { title, createDate, userName } = this.props.location.query;
    return (
      <DynamicTitle>
        <div className={styles['title']}>{title}</div>
        <div className={styles['desc']}>
          <div>发表时间：{createDate}</div>
          <div>来源：{userName}</div>
        </div>
        <div id='pageFlip' style={{ width: '100%', height: 700 }}/>
      </DynamicTitle>
    );
  }
}

export default Index;
