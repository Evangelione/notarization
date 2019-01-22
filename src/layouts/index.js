import React, { Component } from 'react';
import { Layout, Button, Input, Popover, LocaleProvider } from 'antd';
import classnames from 'classnames';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { connect } from 'dva';
import router from 'umi/router';
import { navBar, popoverItem } from '@/common/constants';
import styles from './index.less';

moment.locale('zh-cn');
const Search = Input.Search;

@connect(({ nav }) => ({
  nav,
}))
class Index extends Component {

  mapNavItem = () => {
    const { currentLink, currentPopover } = this.props.nav;
    const content = (
      <div>
        {popoverItem.map((value, index) => {
          return <div key={index}
                      className={currentPopover === index ? classnames(styles['popoverItem'], styles['popoverItem-active']) : styles['popoverItem']}
                      onClick={this.popoverClick.bind(null, index, value.label, value.path)}>{value.label}</div>;
        })}
      </div>
    );
    return navBar.map((value, index) => {
      if (value.label === '服务中心') {
        return <Popover placement="bottomLeft" trigger="click" key={index} content={content}>
          <div className={currentLink === index ? styles['nav-item-active'] : ''}
               onClick={this.linkClick.bind(null, index, value.label, value.path)}>
            {value.label}
          </div>
        </Popover>;
      }
      return <div key={index} className={currentLink === index ? styles['nav-item-active'] : ''}
                  onClick={this.linkClick.bind(null, index, value.label, value.path)}>{value.label}</div>;
    });
  };

  linkClick = (index, label, path) => {

    this.props.dispatch({
      type: 'nav/save',
      payload: {
        currentLink: index,
        currentPopover: label === '服务中心' ? this.props.nav.currentPopover : null,
      },
    });
    if (label === '服务中心') return false;
    router.push({
      pathname: path,
      query: {
        module: label,
      },
    });
  };

  popoverClick = (index, label, path) => {
    this.props.dispatch({
      type: 'nav/save',
      payload: {
        currentPopover: index,
      },
    });
    router.push({
      pathname: path,
      query: {
        module: label,
      },
    });
  };

  goSearchPage = (value) => {
    router.push({
      pathname: '/searchPage',
      query: {
        module: '搜索',
        find_str: value,
      },
    });
  };

  render() {
    const { children } = this.props;
    return (
      <LocaleProvider locale={zh_CN}>
        <Layout>
          {/*页头*/}
          <div className={styles['header']}>
            <div className={styles['header-toolbar']}>
              <div className={styles['header-toolbar-wrapper']}>
                <div>欢迎来到浙江公证网官方网站！</div>
                <div>
                  <div>2019年1月12日 星期三</div>
                  <Button style={{ marginLeft: 20, borderColor: '#C72D29', color: '#C72D29' }} size='small'>登录</Button>
                </div>
              </div>
            </div>
            <div className={styles['header-banner']}>
              <div className={styles['header-banner-wrapper']}>
                <img src={require('@/assets/images/logo.png')} alt=""/>
                <Search
                  placeholder="请输入关键词搜索"
                  onSearch={this.goSearchPage}
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
      </LocaleProvider>

    );
  }
}

export default Index;
