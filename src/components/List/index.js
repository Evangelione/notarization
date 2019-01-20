import React, { Component } from 'react';
import styles from './index.less'
class Index extends Component {
  render() {
    const {list} = this.props
    return (
      <div style={{ display: 'inline-block',width:'100%' }}>
        {list.map((value, index) => {
          return <div className={styles['list-item']} key={index}>
            <div>{value.label}</div>
            <div>[{value.time}]</div>
          </div>
        })}
      </div>
    );
  }
}

export default Index;
