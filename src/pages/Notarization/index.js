import React, { Component } from 'react';
import { Table } from 'antd';
import SearchForm from './components/SearchForm';
import DynamicTitle from '../../components/DynamicTitle/index';
import styles from './index.less';

const columns = [{
  title: '寄出日期',
  dataIndex: 'time',
  key: 'time',
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '公证书编号',
  dataIndex: 'code',
  key: 'code',
}, {
  title: '年度',
  key: 'year',
  dataIndex: 'year',
}, {
  title: '公证处',
  key: 'office',
  dataIndex: 'office',
}, {
  title: '公证人',
  key: 'man',
  dataIndex: 'man',
}, {
  title: '公证项目',
  key: 'project',
  dataIndex: 'project',
}, {
  title: '递送方式',
  key: 'type',
  dataIndex: 'type',
}, {
  title: '备注',
  key: 'remarks',
  dataIndex: 'remarks',
}];

const data = [{
  key: '1',
  time: '2019-02-03',
  name: 'John Brown',
  code: 4432436767,
  year: 2019,
  office: '杭州市国立公证处',
  man: '妄人',
  project: '外资',
  type: '快递',
  remarks: '无'
}, {
  key: '2',
  time: '2019-02-03',
  name: 'John Brown',
  code: 4432436767,
  year: 2019,
  office: '杭州市国立公证处',
  man: '妄人',
  project: '外资',
  type: '快递',
  remarks: '无'
}, {
  key: '3',
  time: '2019-02-03',
  name: 'John Brown',
  code: 4432436767,
  year: 2019,
  office: '杭州市国立公证处',
  man: '妄人',
  project: '外资',
  type: '快递',
  remarks: '无'
}];

class Index extends Component {
  render() {
    return (
      <DynamicTitle>
        <div className={styles['search-box']}>
          <div>
            <div>寄送查询</div>
            <div>
              <SearchForm/>
            </div>
          </div>
          <div style={{marginLeft: 55}}>
            <div>收到查询</div>
            <div>
              <SearchForm/>
            </div>
          </div>
        </div>
        <div style={{borderTop: '1px solid #9b9b9b'}}>
          <Table dataSource={data} columns={columns}/>
        </div>
      </DynamicTitle>
    );
  }
}

export default Index;
