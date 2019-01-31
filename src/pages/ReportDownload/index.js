import React, { Component } from 'react';
import { Button, List } from 'antd';
import DynamicTitle from '../../components/DynamicTitle/index';
import styles from './index.less';


const data = [{
  title: '全国首家互联网公证处在杭州揭牌',
  time: '2018-12-05',
}, {
  title: '全国首家互联网公证处在杭州揭牌',
  time: '2018-12-05',
}, {
  title: '全国首家互联网公证处在杭州揭牌',
  time: '2018-12-05',
}, {
  title: '全国首家互联网公证处在杭州揭牌',
  time: '2018-12-05',
}];

class Index extends Component {
  render() {
    return (
      <DynamicTitle>
        <div style={{ textAlign: 'right' }}>
          <Button type='primary' icon='cloud-download'>下载本篇附件</Button>
        </div>
        <div style={{ padding: '0 134px' }}>
          <div className={styles['title']}>公证员一般任职上报材料目录</div>
          <div className={styles['desc']}>
            <div>发表时间：2018-12-26 18:32</div>
            <div>来源：浙江公证网</div>
          </div>
          <div className={styles['content']}>
            <p>2月26日-27日，浙江省公证协会信息化建设委员会第二次全体会议在杭州召开。省公证协会会长吕昭华出席会议并讲话，省协会秘书长葛建强主持会议。</p>
            <p>会议学习传达了全国公证行业信息化工作推进会会议精神和《“数字法治、智慧司法”信息化体系建设实施方案》，针对《全国公证行业信息化建设工作推进方案》的内容，就我省公证信息化建设的现状和存在的问题进行了深入探讨。</p>
          </div>
          <div>
            <div className={styles['list-title']}>相关内容</div>
            <List itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={<a href="https://ant.design" style={{ paddingLeft: 18 }}>{item.title}</a>}
                      />
                      <div>{item.time}</div>
                    </List.Item>
                  )}/>
          </div>
        </div>
      </DynamicTitle>
    );
  }
}

export default Index;
