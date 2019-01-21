import React, { Component } from 'react';
import { Pagination } from 'antd';
import DynamicTitle from '../../components/DynamicTitle/index';
import List from '@/components/List/index';
import { list3 } from '@/common/constants';

class Index extends Component {
  render() {
    return (
      <DynamicTitle>
        <List list={list3} hasLine={5}/>
        <Pagination showQuickJumper defaultCurrent={2} total={500} style={{ marginTop: 30, marginBottom: 5 }}/>
      </DynamicTitle>
    );
  }
}

export default Index;
