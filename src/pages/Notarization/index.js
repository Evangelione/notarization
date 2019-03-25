import React, { Component } from 'react';
import { Table } from 'antd';
import SearchForm from './components/SearchForm';
import DynamicTitle from '../../components/DynamicTitle/index';
import styles from './index.less';
import { connect } from 'dva';

const columns = [{
  title: '函号',
  dataIndex: 'hanhao',
  key: 'hanhao',
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
  key: 'gzDate',
  dataIndex: 'gzDate',
}, {
  title: '类别',
  key: 'leibie',
  dataIndex: 'leibie',
}, {
  title: '水印号',
  key: 'watermark',
  dataIndex: 'watermark',
}, {
  title: '寄送方式',
  key: 'jsWay',
  dataIndex: 'jsWay',
}, {
  title: '页数',
  key: 'pagination',
  dataIndex: 'pagination',
}];

const columns2 = [{
  title: '函号',
  dataIndex: 'hanhao',
  key: 'hanhao',
}, {
  title: '寄送日期',
  dataIndex: 'sdDate',
  key: 'sdDate',
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
  key: 'gzDate',
  dataIndex: 'gzDate',
}, {
  title: '编号',
  key: 'no',
  dataIndex: 'no',
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
      type: 'notarization/fetchAreaList',
      payload: {},
    });
  }

  render() {
    const { searchList, searchColumns, areaList } = this.props.notarization;
    return (
      <DynamicTitle>
        <div className={styles['search-box']}>
          <div>
            <div>寄送查询</div>
            <div>
              <SearchForm type='js' area={areaList}/>
            </div>
          </div>
          <div style={{ marginLeft: 55 }}>
            <div>收到查询</div>
            <div>
              <SearchForm type='sd' area={areaList}/>
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
