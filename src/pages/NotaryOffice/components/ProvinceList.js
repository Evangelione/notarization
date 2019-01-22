import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from '../index.less';

class ProvinceList extends Component {
  render() {
    const { province } = this.props;
    return (
      <div style={{ marginTop: 30 }}>
        {province.map((value, index) => {
          return <div key={index} style={{ marginTop: 30 }}>
            <div className={styles['province-label']}>{value.label}</div>
            <Row>
              {value.children.map((value1, index1) => {
                return <Col key={index1} span={4} style={{textAlign: 'center', marginTop: 26}}>
                  <div className='spanHover'>{value1.label}</div>
                </Col>;
              })}
            </Row>
          </div>;
        })}
      </div>
    );
  }
}

export default ProvinceList;
