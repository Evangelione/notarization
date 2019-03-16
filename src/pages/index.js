import React, { Component } from 'react';
import CarouselMap from '@/components/CarouselMap/CarouselMap';
import List from '@/components/List/index';
import ListTitle from '@/components/ListTitle/index';
import classnames from 'classnames';
import styles from './index.less';
import { connect } from 'dva';
import router from 'umi/router';

// const ServiceCenter = [{
//   label: '涉台公证书副本查询',
//   icon: 'icon-xinxichaxuncopy',
//   path: '/',
// }, {
//   label: '公证机构',
//   icon: 'icon-jigoukehudaishenhesh',
//   path: '/',
// }, {
//   label: '撤证公告',
//   icon: 'icon-ccgl-chedanguanli-',
//   path: '/',
// }, {
//   label: '办证指南',
//   icon: 'icon-guidecopy',
//   path: '/',
// }, {
//   label: '咨询',
//   icon: 'icon-zixunfuwucopy',
//   path: '/',
// }, {
//   label: '报表下载',
//   icon: 'icon-xiazai_copy',
//   path: '/',
// }];
//
// const links = [{
//   label: '上海公证网',
//   link: '/',
// }, {
//   label: '温州公证网',
//   link: '/',
// }, {
//   label: '福建公证网',
//   link: '/',
// }, {
//   label: '西部公证网',
//   link: '/',
// }, {
//   label: '中国司法部',
//   link: '/',
// }, {
//   label: '中国普法网',
//   link: '/',
// }];

@connect(({ global }) => ({
  global,
}))
class Index extends Component {
  state = {
    currList: [],
    currTitle: '工作动态',
  };

  componentDidMount() {
    // 获取navBar
    this.props.dispatch({
      type: 'global/fetchNavBarList',
      payload: {},
    }).then(() => {
      this.setState({
        currList: this.props.global.threeNavBarList.work,
      });
    });

    // 获取服务中心linkItem
    this.props.dispatch({
      type: 'global/fetchMiddleBar',
      payload: {},
    });

    // 获取友情链接
    this.props.dispatch({
      type: 'global/fetchFriendLink',
      payload: {},
    });

    // 获取外部链接
    this.props.dispatch({
      type: 'global/fetchOutLink',
      payload: {},
    });

    // 获取下面模块文章列表
    this.props.dispatch({
      type: 'global/fetchMainList',
      payload: {},
    });
  }

  changeBarLink = (curr, title) => {
    this.props.dispatch({
      type: 'global/save',
      payload: {
        barLink: curr,
      },
    });
    this.setState({
      currList: this.props.global.threeNavBarList[curr],
      currTitle: title,
    });
  };

  goDynamicList = (path, name, id) => {
    router.push({
      pathname: path,
      query: {
        module: name,
        id,
      },
    });
  };

  openWindow = (url) => {
    window.location.href = `http://${url}`;
  };

  render() {
    const { currList, currTitle } = this.state;
    const { barLink, middleBar, friendLink, outLink, mainList } = this.props.global;
    return (
      <div>
        <div className={styles['container']} style={{ padding: '18px 18px 8px' }}>
          <CarouselMap/>
          <div className={styles['list-box']}>
            <div>
              <div className={barLink === 'work' ? styles['currentLink'] : ''}
                   onClick={this.changeBarLink.bind(null, 'work', '工作动态')}>工作动态
              </div>
              <div className={barLink === 'industry' ? styles['currentLink'] : ''}
                   onClick={this.changeBarLink.bind(null, 'industry', '行业动态')}>行业动态
              </div>
              <div className={barLink === 'notify' ? styles['currentLink'] : ''}
                   onClick={this.changeBarLink.bind(null, 'notify', '通知公告')}>通知公告
              </div>
            </div>
            <List list={currList} title={currTitle}/>
          </div>
        </div>
        <div className={classnames(styles['container'], styles['service-center'])} style={{ marginTop: 24 }}>
          <div style={{ marginLeft: 0 }}>
            服务<br/>中心
          </div>
          {middleBar.map((value, index) => {
            return <div key={index} onClick={this.goDynamicList.bind(null, value.href, value.name, value.id)}>
              {/*<IconFont type={value.icon} style={{ fontSize: 26 }}/>*/}
              <img src={`http://118.31.46.146:8080${value.image}`} style={{ width: 26, height: 26 }} alt=""/>
              <div style={{ width: 70 }}>{value.name}</div>
            </div>;
          })}
        </div>
        {mainList.slice(0, 2).map((value, index) => {
          return <div className={styles['container']} key={index}
                      style={{
                        marginTop: 24,
                        marginLeft: index === 1 ? 24 : 0,
                        width: index === 0 ? 658 : 418,
                        minHeight: 212,
                      }}>
            <ListTitle title={value.category.name} link={true} id={value.category.id}/>
            <List list={value.data.list} title={value.category.name}/>
          </div>;
        })}
        <div className={classnames(styles['container'], styles['image-content'])}
             style={{ marginTop: 24, width: '100%' }}>
          {outLink.map((value, index) => {
            return <div key={index} onClick={this.openWindow.bind(null, value.href)}
                        style={{ marginLeft: index === 0 ? 0 : 14 }}>
              <img src={require('@/assets/images/006bYgeozy7pHERNHmg18&690.jpg')} alt=""/>
              <div>{value.title}</div>
            </div>;
          })}
          {!outLink.length && <div style={{ marginLeft: 0 }}>
            <img src={require('@/assets/images/006bYgeozy7pHERNHmg18&690.jpg')} alt=""/>
            <div>敬请期待</div>
          </div>}
          {/*<div style={{ marginLeft: 0 }}>*/}
          {/*<img src={require('@/assets/images/006bYgeozy7pHERNHmg18&690.jpg')} alt=""/>*/}
          {/*<div>浙江公证服务平台</div>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*<img src={require('@/assets/images/006bYgeozy7pHERNHmg18&690.jpg')} alt=""/>*/}
          {/*<div>涉外公证认证</div>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*<img src={require('@/assets/images/006bYgeozy7pHERNHmg18&690.jpg')} alt=""/>*/}
          {/*<div>敬请期待</div>*/}
          {/*</div>*/}
        </div>
        {mainList.slice(2).map((value, index) => {
          return <div className={styles['container']} key={index}
                      style={{ marginTop: 24, marginLeft: index === 0 ? 0 : 24, width: 350, minHeight: 212 }}>
            <ListTitle title={value.category.name} link={true} id={value.category.id}/>
            <List list={value.data.list} title={value.category.name}/>
          </div>;
        })}

        <div className={styles['container']}
             style={{ marginTop: 24, marginBottom: 24, width: 538, verticalAlign: 'top' }}>
          <ListTitle title={'友情链接'} link={false}/>
          <div style={{ paddingTop: 14 }}>
            {friendLink.map((value, index) => {
              return <a key={index} href={value.href} style={{
                display: 'inline-block',
                marginRight: 48,
                marginTop: 12,
                color: '#4A4A4A',
              }}>{value.title}</a>;
            })}
          </div>
        </div>
        <div className={styles['container']}
             style={{ marginTop: 24, marginLeft: 24, marginBottom: 24, width: 538, height: 160 }}>
          <ListTitle title={'投诉中心'} link={false}/>
          <div style={{ paddingTop: 14 }}>
            <div style={{ display: 'inline-block', marginRight: 48, marginTop: 12 }}>电话：0571-81956940</div>
            <div style={{ display: 'inline-block', marginRight: 48, marginTop: 12 }}>邮箱：zjsgzxhtszx@163.com</div>
            <div style={{ display: 'inline-block', marginRight: 48, marginTop: 12 }}>地址：杭州市文三路252号伟星大厦20楼A座</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
