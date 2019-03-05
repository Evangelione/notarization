import React, { Component } from 'react';
import { List } from 'antd';
import DynamicTitle from '../../components/DynamicTitle/index';
import { connect } from 'dva';
import styles from '@/pages/ReportDownload/index.less';
import router from 'umi/router';
import listStyles from '@/components/List/index.less';

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
                  dataSource={article.relationList}
                  renderItem={item => {
                    return <List.Item onClick={this.goArticle.bind(null, item[1])}>
                      <List.Item.Meta title={<div className={listStyles['list-item']} style={{ paddingLeft: 18 }}>{item[2]}</div>}/>
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
