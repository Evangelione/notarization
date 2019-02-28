import React, { Component } from 'react';
import { List } from 'antd';
import DynamicTitle from '../../components/DynamicTitle/index';
import { connect } from 'dva';
import styles from '@/pages/ReportDownload/index.less';

const data = [{
  title: '全国首家互联网公证处在杭州揭牌',
  time: '2018-12-05',
}, {
  title: '全国首家互联网公证处在杭州揭牌',
  time: '2018-12-05',
}, {
  title: '全国首家互联网公证处在杭州揭牌',
  time: '2018-12-05',
}, {
  title: '全国首家互联网公证处在杭州揭牌',
  time: '2018-12-05',
}];

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

  render() {
    const { article } = this.props.global;
    return (
      <DynamicTitle>
        <div style={{ padding: '0 134px' }}>
          <div className={styles['title']}>{article.title}</div>
          <div className={styles['desc']}>
            <div>发表时间：{article.createDate}</div>
            <div>来源：{article.user && article.user.name}</div>
          </div>
          <div className={styles['content']}>
            <p>{article.articleData && article.articleData.content}</p>
          </div>
          <div>
            <div className={styles['list-title']}>相关内容</div>
            <List itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={<a href="https://ant.design" style={{ paddingLeft: 18 }}>{item.title}</a>}
                      />
                      <div>{item.time}</div>
                    </List.Item>
                  )}/>
          </div>
        </div>
      </DynamicTitle>
    );
  }
}

export default Index;
