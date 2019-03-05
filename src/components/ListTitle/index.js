import React, { Component } from 'react';
import { IconFont } from '@/common/constants';
import styles from './index.less';

class Index extends Component {
  render() {
    const { title, link } = this.props;
    return (
      <div style={{ position: 'relative' }}>
        <div className={styles['title']}>{title}</div>
        {link ? <div className={styles['more']}>
          <span style={{ fontSize: 15, cursor: 'pointer', marginRight: 6 }}>更多</span>
          <IconFont type='icon-icongengduocopy'/>
        </div> : null}
      </div>
    );
  }
}

export default Index;
