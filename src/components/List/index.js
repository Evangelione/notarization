import React, { Component } from 'react';
import styles from './index.less';
import router from 'umi/router';
import withRouter from 'umi/withRouter';

class Index extends Component {

  goArticle = (id) => {
    const { module } = this.props.location.query;
    router.push({
      pathname: '/article',
      query: {
        module,
        articleId: id,
      },
    });
  };

  render() {
    const { list, hasLine } = this.props;
    return (
      <div style={{ display: 'inline-block', width: '100%' }}>
        {list.map((value, index) => {
          if (!!index && (index + 1) % hasLine === 0) {
            return <div key={index} onClick={this.goArticle.bind(null, value.id)}>
              <div className={styles['list-item']}>
                <div>{value.title}</div>
                <div>[{value.updateDate}]</div>
              </div>
              <div className={styles['dashed-line']}/>
            </div>;
          }
          return <div key={index} className={styles['list-item']} onClick={this.goArticle.bind(null, value.id)}>
            <div>{value.title}</div>
            <div>[{value.updateDate}]</div>
          </div>;
        })}
      </div>
    );
  }
}

export default withRouter(Index);
