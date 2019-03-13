import React, { Component } from 'react';
import { connect } from 'dva';
import DynamicTitle from '@/components/DynamicTitle/index';
// import { List } from 'antd/lib/list';
import styles from '@/pages/ReportDownload/index.less';

@connect(({ global }) => ({
  global,
}))
class OfficeInfo extends Component {

  componentDidMount() {
    console.log(this.props.location.query.id);
    this.props.dispatch({
      type: 'global/fetchOfficeInfo',
      payload: {
        id: this.props.location.query.id,
      },
    });
  }

  render() {
    const { officeInfo } = this.props.global;
    console.log(officeInfo);
    return (
      <DynamicTitle>
        <div style={{ padding: '0 134px' }}>
          <div className={styles['title']}>{officeInfo.office.name}</div>
          <div className={styles['desc']}>
            <div>执业证号：{officeInfo.office.code}</div>
            <div>办公场所：{officeInfo.office.area && officeInfo.office.area.name}</div>
          </div>
          <div>负责人： {officeInfo.office.master || '暂无'}</div>
          <div>电话： {officeInfo.office.phone || '暂无'}</div>
          <div>传真： {officeInfo.office.fax || '暂无'}</div>
          <div>邮编： {officeInfo.office.zipCode || '暂无'}</div>
          <div style={{ marginTop: 20 }}>公证员：
            {officeInfo.users.map((value, index) => {
              return <span key={index}>{value.name}</span>;
            })}</div>
        </div>
      </DynamicTitle>
    );
  }
}

export default OfficeInfo;
