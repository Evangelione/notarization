import React, { Component } from 'react';
import { Table } from 'antd';
import SearchForm from './components/SearchForm';
import DynamicTitle from '../../components/DynamicTitle/index';
import styles from './index.less';
import { connect } from 'dva';

const columns = [{
  title: '函号',
  dataIndex: 'hh',
  key: 'hh',
}, {
  title: '寄出日期',
  dataIndex: 'jsDate',
  key: 'jsDate',
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '公证员',
  key: 'gzUser',
  dataIndex: 'gzUser',
}, {
  title: '公证处',
  key: 'company',
  dataIndex: 'company',
  render: (text, record) => {
    return record.company.name;
  },
}, {
  title: '编号',
  dataIndex: 'bh',
  key: 'bh',
}, {
  title: '公证日期',
  key: 'year',
  dataIndex: 'year',
}, {
  title: '类别',
  key: 'leibie',
  dataIndex: 'leibie',
}, {
  title: '水印号',
  key: 'syh',
  dataIndex: 'syh',
}, {
  title: '寄送方式',
  key: 'jsWay',
  dataIndex: 'jsWay',
}, {
  title: '页数',
  key: 'ys',
  dataIndex: 'ys',
}];

const columns2 = [{
  title: '函号',
  dataIndex: 'hh',
  key: 'hh',
}, {
  title: '寄送日期',
  dataIndex: 'jsDate',
  key: 'jsDate',
}, {
  title: '公证处',
  key: 'company',
  dataIndex: 'company',
  render: (text, record) => {
    return record.company.name;
  },
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '类别',
  key: 'leibie',
  dataIndex: 'leibie',
}, {
  title: '公证书编号',
  dataIndex: 'bh',
  key: 'bh',
}, {
  title: '出证日期',
  key: 'year',
  dataIndex: 'year',
}, {
  title: '编号',
  key: 'bh2',
  dataIndex: 'bh2',
}];


// const data = [{
//   key: '1',
//   time: '2019-02-03',
//   name: 'John Brown',
//   code: 4432436767,
//   year: 2019,
//   office: '杭州市国立公证处',
//   man: '妄人',
//   project: '外资',
//   type: '快递',
//   remarks: '无',
// }, {
//   key: '2',
//   time: '2019-02-03',
//   name: 'John Brown',
//   code: 4432436767,
//   year: 2019,
//   office: '杭州市国立公证处',
//   man: '妄人',
//   project: '外资',
//   type: '快递',
//   remarks: '无',
// }, {
//   key: '3',
//   time: '2019-02-03',
//   name: 'John Brown',
//   code: 4432436767,
//   year: 2019,
//   office: '杭州市国立公证处',
//   man: '妄人',
//   project: '外资',
//   type: '快递',
//   remarks: '无',
// }];

@connect(({ notarization }) => ({
  notarization,
}))
class Index extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'notarization/fetchNotarizationList',
      payload: {},
    });
  }

  render() {
    const { searchList, notarizationList, searchColumns } = this.props.notarization;
    return (
      <DynamicTitle>
        <div className={styles['search-box']}>
          <div>
            <div>寄送查询</div>
            <div>
              <SearchForm type='js' office={notarizationList}/>
            </div>
          </div>
          <div style={{ marginLeft: 55 }}>
            <div>收到查询</div>
            <div>
              <SearchForm type='sd' office={notarizationList}/>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #9b9b9b' }}>
          <Table dataSource={searchList} columns={searchColumns === 'col1' ? columns : columns2}/>

        </div>
      </DynamicTitle>
    );
  }
}

export default Index;
