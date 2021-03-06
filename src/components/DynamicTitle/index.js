import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import withRouter from 'umi/withRouter';
import Link from 'umi/link';
import styles from './index.less';
import { connect } from 'dva';

@connect(({ global }) => ({
  global,
}))
class Index extends Component {
  render() {
    const { location, children } = this.props;
    const { module } = location.query;
    const breadcrumbNameMap = {
      '/dynamicList': `${module}`,
      '/notarization': `${module}`,
      '/notaryOffice': `${module}`,
      '/revokeCertificate': `${module}`,
      '/certificateGuide': `${module}`,
      '/advisory': `${module}`,
      '/reportDownload': `${module}`,
      '/searchPage': `${module}`,
      '/article': `${module}`,
      '/notaryOffice/OfficeInfo': '公证机构详情',
      '/pageFlip': `${module}`,
    };
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url + `?module=${module}`}>
            {breadcrumbNameMap[url]}
          </Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <Link to={`/?module=首页`}>首页</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
      <div className={styles['dynamic-container']}>
        <div className={styles['dynamic-nav']} style={{ marginBottom: 10 }}>
          <div className={styles['dynamic-title']}>
            {module}
          </div>
          <div className={styles['dynamic-breadcrumb']}>
            您的位置：
            <Breadcrumb style={{ display: 'inline-block', marginLeft: 5 }}>
              {breadcrumbItems}
            </Breadcrumb>
          </div>
        </div>
        {children}
      </div>
    );
  }
}

export default withRouter(Index);
