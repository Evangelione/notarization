import React, { Component } from 'react';
import DynamicTitle from '../../components/DynamicTitle/index';
import ProvinceList from './components/ProvinceList';

const Provinces = [{
  label: '杭州市',
  children: [{
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }],
}, {
  label: '宁波市',
  children: [{
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }, {
    label: '杭州市国立公证处',
    id: 1,
  }],
}];

class Index extends Component {
  render() {
    return (
      <DynamicTitle>
        <ProvinceList province={Provinces}/>
      </DynamicTitle>
    );
  }
}

export default Index;
