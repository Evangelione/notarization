import React, { Component } from 'react';
import { Pagination } from 'antd';
import { connect } from 'dva';
import DynamicTitle from '../../components/DynamicTitle/index';
import List from '@/components/List/index';

// import { list3 } from '@/common/constants';

@connect(({ global }) => ({
  global,
}))
class Index extends Component {

  componentDidMount() {
    this.props.location.query.find_str ?
      this.props.dispatch({
        type: 'global/searchList',
        payload: {
          keyword: this.props.location.query.find_str,
        },
      }) : this.props.dispatch({
        type: 'global/fetchDynamicList',
        payload: {
          id: this.props.location.query.id,
        },
      });
  }

  fetchDynamicList = (page) => {
    this.props.dispatch({
      type: 'global/fetchDynamicList',
      payload: {
        id: this.props.location.query.id,
        page,
      },
    });
  };

  searchList = (page) => {
    this.props.dispatch({
      type: 'global/searchList',
      payload: {
        keyword: this.props.location.query.find_str,
        page,
      },
    });
  };

  pageChange = (page) => {
    this.props.location.query.module === '搜索列表' ? this.searchList(page) : this.fetchDynamicList(page);
  };

  render() {
    const { dynamicList, dynamicPage, dynamicTotal } = this.props.global;
    return (
      <DynamicTitle>
        <List list={dynamicList} hasLine={5}/>
        {dynamicTotal ?
          <Pagination showQuickJumper defaultCurrent={dynamicPage} total={dynamicTotal} onChange={this.pageChange}
                      style={{ marginTop: 30, marginBottom: 5 }}/> : null}

      </DynamicTitle>
    );
  }
}

export default Index;
