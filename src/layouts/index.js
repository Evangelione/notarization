import React, { Component } from 'react';
import { Layout, Button, Input } from 'antd';
import { connect } from 'dva';
import { navBar } from '@/common/constants';
import styles from './index.less';

const Search = Input.Search;

@connect(({ nav }) => ({
  nav,
}))
class Index extends Component {

  mapNavItem = () => {
    const { currentLink } = this.props.nav;
    return navBar.map((value, index) => {
      return <div key={index} className={currentLink === index ? styles['nav-item-active'] : ''}
                  onClick={this.linkClick.bind(null, index)}>{value.label}</div>;
    });
  };

  linkClick = (index) => {
    this.props.dispatch({
      type: 'nav/save',
      payload: {
        currentLink: index,
      },
    });
  };

  render() {
    const { children } = this.props;
    return (
      <Layout>
        {/*页头*/}
        <div className={styles['header']}>
          <div className={styles['header-toolbar']}>
            <div className={styles['header-toolbar-wrapper']}>
              <div>欢迎来到浙江公证网官方网站！</div>
              <div>
                <div>2019年1月12日 星期三</div>
                <Button style={{ marginLeft: 20, borderColor: '#C72D29',color:'#C72D29'}} size='small'>登录</Button>
              </div>
            </div>
          </div>
          <div className={styles['header-banner']}>
            <div className={styles['header-banner-wrapper']}>
              <img src={require('@/assets/images/logo.png')} alt=""/>
              <Search
                placeholder="请输入关键词搜索"
                onSearch={value => console.log(value)}
                enterButton
                style={{ width: 360 }}
                className='search-input'
              />
            </div>
          </div>
          <div className={styles['header-nav']}>
            <div className={styles['header-nav-wrapper']}>
              {this.mapNavItem()}
            </div>
          </div>
        </div>
        {/*内容*/}
        <div className={styles['content']}>
          {children}
        </div>
        {/*页脚*/}
        <div className={styles['footer']}>
          <div>
            地址：杭州市文三路252号伟星大厦20楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮编：310012&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传真：0571-85112963&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话：0571-85112963
          </div>
          <div>
            2011 All rights reserved 浙江公证网版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙ICP备15032864号-1
          </div>
          <div>
            <img src={require('@/assets/images/guohui.png')} alt="" style={{ verticalAlign: 'sub' }}/>
            <span style={{ marginLeft: 8 }}>浙公网安备 33010602005151号</span>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
