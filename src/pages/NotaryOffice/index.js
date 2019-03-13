import React, { Component } from 'react';
import DynamicTitle from '../../components/DynamicTitle/index';
import ProvinceList from './components/ProvinceList';
import { connect } from 'dva';

// const Provinces = [{
//   label: '杭州市',
//   children: [{
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }],
// }, {
//   label: '宁波市',
//   children: [{
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }, {
//     label: '杭州市国立公证处',
//     id: 1,
//   }],
// }];

@connect(({ global }) => ({
  global,
}))
class Index extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'global/fetchOfficeList',
      payload: {},
    });
  }

  render() {
    const { officeList } = this.props.global;
    return (
      <DynamicTitle>
        <ProvinceList province={officeList}/>
      </DynamicTitle>
    );
  }
}

export default Index;
