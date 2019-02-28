import React, { Component } from 'react';
import { Pagination } from 'antd';
import { connect } from 'dva';
import DynamicTitle from '../../components/DynamicTitle/index';
import List from '@/components/List/index';
// import { list3 } from '@/common/constants';

@connect(({ dynamic }) => ({
  dynamic,
}))
class Index extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'dynamic/fetchDynamicList',
      payload: {
        id: this.props.location.query.id,
      },
    });
  }

  pageChange = (page) => {
    this.props.dispatch({
      type: 'dynamic/fetchDynamicList',
      payload: {
        id: this.props.location.query.id,
        pageNo: page,
      },
    });
  };

  render() {
    const { dynamicList, dynamicPage, dynamicTotal } = this.props.dynamic;
    return (
      <DynamicTitle>
        <List list={dynamicList} hasLine={5}/>
        <Pagination showQuickJumper defaultCurrent={dynamicPage} total={dynamicTotal} onChange={this.pageChange}
                    style={{ marginTop: 30, marginBottom: 5 }}/>
      </DynamicTitle>
    );
  }
}

export default Index;
