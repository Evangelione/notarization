import React, { Component } from 'react';
import styles from './index.less';

class Index extends Component {
  render() {
    const { list, hasLine } = this.props;
    return (
      <div style={{ display: 'inline-block', width: '100%' }}>
        {list.map((value, index) => {
          if (!!index && (index + 1) % hasLine === 0) {
            return <div key={index}>
              <div className={styles['list-item']}>
                <div>{value.label}</div>
                <div>[{value.time}]</div>
              </div>
              <div className={styles['dashed-line']}/>
            </div>;
          }
          return <div className={styles['list-item']} key={index}>
            <div>{value.label}</div>
            <div>[{value.time}]</div>
          </div>;
        })}
      </div>
    );
  }
}

export default Index;
