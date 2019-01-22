import React, { Component } from 'react';
import { Button } from 'antd';
import DynamicTitle from '../../components/DynamicTitle/index';
import { IconFont } from '@/common/constants';
import styles from './index.less';

const AdvisoryList = [{
  question: '为什么杭州市余杭公证处有两个地址',
  answers: '浙江省公证协会会员代表大会是协会的最高权力机关，每五年举行一次。理事会是全省会员代表大会常设机构，每年召开一次。常务理事会在理事会闭会期间行使理事会职权。',
  useful: '123',
  time: '2019-02-02',
  link: false,
}, {
  question: '为什么杭州市余杭公证处有两个地址',
  answers: '浙江省公证协会会员代表大会是协会的最高权力机关，每五年举行一次。理事会是全省会员代表大会常设机构，每年召开一次。常务理事会在理事会闭会期间行使理事会职权。',
  useful: '123',
  time: '2019-02-02',
  link: false,
}, {
  question: '为什么杭州市余杭公证处有两个地址',
  answers: '浙江省公证协会会员代表大会是协会的最高权力机关，每五年举行一次。理事会是全省会员代表大会常设机构，每年召开一次。常务理事会在理事会闭会期间行使理事会职权。',
  useful: '123',
  time: '2019-02-02',
  link: false,
}, {
  question: '为什么杭州市余杭公证处有两个地址',
  answers: '浙江省公证协会会员代表大会是协会的最高权力机关，每五年举行一次。理事会是全省会员代表大会常设机构，每年召开一次。常务理事会在理事会闭会期间行使理事会职权。',
  useful: '123',
  time: '2019-02-02',
  link: false,
}];


class Index extends Component {
  render() {
    return (
      <div>
        <DynamicTitle>
          <div style={{textAlign: 'right', marginTop: 20}}>
            <Button type='primary'>我要咨询</Button>
          </div>
        </DynamicTitle>
        <div style={{ marginTop: 24 }}>
          {AdvisoryList.map((value, index) => {
            return <div className={styles['question-box']} key={index}>
              <div className={styles['question']}><span style={{ fontSize: 34 }}>Q. </span>{value.question}</div>
              <div className={styles['answers']}>
                <div><span style={{ fontSize: 34, color: '#000' }}>A. </span>{value.answers}</div>
              </div>
              <div className={styles['extend']}>
                <div style={{ marginRight: 44 }}><IconFont type='icon-dianzan_'
                                                           style={{ marginRight: 8, cursor: 'pointer' }}/>{value.useful}
                </div>
                <div><IconFont type='icon-shijian_' style={{ marginRight: 8 }}/>{value.time}</div>
              </div>
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default Index;
