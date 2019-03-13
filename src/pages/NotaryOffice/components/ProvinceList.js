import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from '../index.less';
import router from 'umi/router';

class ProvinceList extends Component {

  goOfficeInfo = (id) => {
    router.push({
      pathname: '/notaryOffice/OfficeInfo',
      query: {
        module: '公证机构',
        id,
      },
    });
  };

  render() {
    const { province } = this.props;
    return (
      <div style={{ marginTop: 30 }}>
        {province.map((value, index) => {
          if (value.officeList.length === 0) {
            return null;
          }
          return <div key={index} style={{ marginTop: 30 }}>
            <div className={styles['province-label']}>{value.name}</div>
            <Row>
              {value.officeList.map((value1, index1) => {
                return <Col key={index1} span={4} style={{ textAlign: 'center', marginTop: 26 }}>
                  <div className='spanHover' onClick={this.goOfficeInfo.bind(null, value1.id)}>{value1.name}</div>
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
