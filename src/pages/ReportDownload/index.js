import React, { Component } from 'react';
import { Button, List } from 'antd';
import DynamicTitle from '../../components/DynamicTitle/index';
import styles from './index.less';
import { connect } from 'dva';
import listStyles from '@/components/List/index.less';
import router from 'umi/router';


// const data = [{
//   title: '全国首家互联网公证处在杭州揭牌',
//   time: '2018-12-05',
// }, {
//   title: '全国首家互联网公证处在杭州揭牌',
//   time: '2018-12-05',
// }, {
//   title: '全国首家互联网公证处在杭州揭牌',
//   time: '2018-12-05',
// }, {
//   title: '全国首家互联网公证处在杭州揭牌',
//   time: '2018-12-05',
// }];

@connect(({ global }) => ({
  global,
}))
class Index extends Component {
  componentWillMount() {
    const { articleId } = this.props.location.query;
    this.props.dispatch({
      type: 'global/fetchArticle',
      payload: {
        id: articleId,
      },
    });
  }

  goArticle = (id) => {
    router.replace({
      pathname: '/article',
      query: {
        module: '相关内容',
        articleId: id,
      },
    });
    this.props.dispatch({
      type: 'global/fetchArticle',
      payload: {
        id,
      },
    });
  };

  downLoadFile = (fileStr) => {
    let fileArr = fileStr.split('|');
    fileArr.map((value => {
      debugger
      if (value === '') return false;
      let aLink = document.createElement('a');
      aLink.download = '';
      aLink.href = value;
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
      return true;
    }));
  };

  render() {
    const { article } = this.props.global;
    return (
      <DynamicTitle>
        <div style={{ textAlign: 'right' }}>
          {article.files ? <Button type='primary' icon='cloud-download'
                                   onClick={this.downLoadFile.bind(null, article.files)}>下载本篇附件</Button> : null}
        </div>
        <div style={{ padding: '0 134px' }}>
          <div className={styles['title']}>{article.title}</div>
          <div className={styles['desc']}>
            <div>发表时间：{article.createDate}</div>
            <div>来源：{article.user && article.user.name}</div>
          </div>
          <div className={styles['content']}
               dangerouslySetInnerHTML={{ __html: article.articleData && article.articleData.content }}/>
          <div>
            <div className={styles['list-title']}>相关内容</div>
            <List itemLayout="horizontal"
                  dataSource={article.relationList}
                  renderItem={item => {
                    return <List.Item onClick={this.goArticle.bind(null, item[1])}>
                      <List.Item.Meta
                        title={<div className={listStyles['list-item']} style={{ paddingLeft: 18 }}>{item[2]}</div>}/>
                      <div>{item[3]}</div>
                    </List.Item>;
                  }}/>
          </div>
        </div>
      </DynamicTitle>
    );
  }
}

export default Index;
