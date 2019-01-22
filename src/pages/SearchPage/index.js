import React, { Component } from 'react';
import DynamicTitle from '../../components/DynamicTitle/index';
import List from '@/components/List/index';
import { list3 } from '@/common/constants';

class Index extends Component {
  render() {
    return (
      <DynamicTitle>
        {list3.length !== 0 ?
          <List list={list3} hasLine={5}/>
          :
          <div style={{minHeight: 500}}>
            <img src={require('../../assets/images/wusousuojieguo.png')} alt=""/>
          </div>}
      </DynamicTitle>
    );
  }
}

export default Index;
