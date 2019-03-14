import React, { Component } from 'react';
import { IconFont } from '@/common/constants';
import styles from './index.less';
import router from 'umi/router';

class Index extends Component {

  goDynamicList = (path, name, id) => {
    router.push({
      pathname: path,
      query: {
        module: name,
        id,
      },
    });
  };

  render() {
    const { title, link, id } = this.props;
    return (
      <div style={{ position: 'relative' }}>
        <div className={styles['title']}>{title}</div>
        {link ? <div className={styles['more']} onClick={this.goDynamicList.bind(null, '/dynamicList', title, id)}>
          <span style={{ fontSize: 15, cursor: 'pointer', marginRight: 6 }}>更多</span>
          <IconFont type='icon-icongengduocopy'/>
        </div> : null}
      </div>
    );
  }
}

export default Index;
