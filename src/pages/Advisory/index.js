import React, {Component} from 'react';
import {Button, Modal, Input, Pagination} from 'antd';
import DynamicTitle from '../../components/DynamicTitle/index';
import {IconFont} from '@/common/constants';
import styles from './index.less';
import {connect} from 'dva';

const TextArea = Input.TextArea;

// const AdvisoryList = [{
//   question: '为什么杭州市余杭公证处有两个地址',
//   answers: '浙江省公证协会会员代表大会是协会的最高权力机关，每五年举行一次。理事会是全省会员代表大会常设机构，每年召开一次。常务理事会在理事会闭会期间行使理事会职权。',
//   useful: '123',
//   time: '2019-02-02',
//   link: false,
// }, {
//   question: '为什么杭州市余杭公证处有两个地址',
//   answers: '浙江省公证协会会员代表大会是协会的最高权力机关，每五年举行一次。理事会是全省会员代表大会常设机构，每年召开一次。常务理事会在理事会闭会期间行使理事会职权。',
//   useful: '123',
//   time: '2019-02-02',
//   link: false,
// }, {
//   question: '为什么杭州市余杭公证处有两个地址',
//   answers: '浙江省公证协会会员代表大会是协会的最高权力机关，每五年举行一次。理事会是全省会员代表大会常设机构，每年召开一次。常务理事会在理事会闭会期间行使理事会职权。',
//   useful: '123',
//   time: '2019-02-02',
//   link: false,
// }, {
//   question: '为什么杭州市余杭公证处有两个地址',
//   answers: '浙江省公证协会会员代表大会是协会的最高权力机关，每五年举行一次。理事会是全省会员代表大会常设机构，每年召开一次。常务理事会在理事会闭会期间行使理事会职权。',
//   useful: '123',
//   time: '2019-02-02',
//   link: false,
// }];

@connect(({advisory}) => ({
  advisory,
}))
class Index extends Component {
  state = {
    visible: false,
    advisoryContent: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'advisory/fetchAdvisoryList',
      payload: {},
    });
  }

  showModal = (e) => {
    e && e.stopPropagation();
    this.setState({
      visible: true,
      advisoryContent: '',
    });
  };

  hideModal = (e) => {
    e && e.stopPropagation();
    this.setState({
      visible: false,
      advisoryContent: '',
    });
  };

  pageChange = (page) => {
    this.props.dispatch({
      type: 'advisory/fetchAdvisoryList',
      payload: {
        pageNo: page,
      },
    });
  };
  changeAdvisoryContent = (e) => {
    this.setState({
      advisoryContent: e.target.value,
    });
  };

  postAdvisory = () => {
    this.props.dispatch({
      type: 'advisory/postAdvisory',
      payload: {
        value: this.state.advisoryContent,
      },
    }).then(() => {
      this.hideModal();
    });
  };

  useful = (id) => {
    this.props.dispatch({
      type: 'advisory/useful',
      payload: {
        id,
      },
    }).then(() => {
      this.props.dispatch({
        type: 'advisory/fetchAdvisoryList',
        payload: {
          pageNo: this.props.advisory.advisoryPage,
        },
      });
    });
  };

  render() {
    const {visible, advisoryContent} = this.state;
    const {advisoryList, advisoryPage, advisoryTotal} = this.props.advisory;
    return (
      <div>
        <DynamicTitle>
          <div style={{textAlign: 'right', marginTop: 20}}>
            <Button type='primary' onClick={this.showModal}>我要咨询</Button>
          </div>
        </DynamicTitle>
        <div style={{marginTop: 24}}>
          {advisoryList.map((value, index) => {
            return <div className={styles['question-box']} key={index}>
              <div className={styles['question']}><span style={{fontSize: 34}}>Q. </span>{value.content}</div>
              <div className={styles['answers']}>
                <div><span style={{fontSize: 34, color: '#000'}}>A. </span>{value.reContent}</div>
              </div>
              <div className={styles['extend']}>
                <div style={{marginRight: 44, cursor: 'pointer'}} onClick={this.useful.bind(null, value.id)}>
                  <IconFont type='icon-dianzan_' style={{marginRight: 8, cursor: 'pointer'}}/>{value.zan}
                </div>
                <div><IconFont type='icon-shijian_' style={{marginRight: 8}}/>{value.createDate}</div>
              </div>
            </div>;
          })}
        </div>
        <div style={{textAlign: 'center', marginBottom: 30}}>
          <Pagination showQuickJumper defaultCurrent={advisoryPage} defaultPageSize={20} total={advisoryTotal}
                      onChange={this.pageChange}
                      style={{marginTop: 30, marginBottom: 5}}/>
        </div>
        <Modal
          visible={visible}
          footer={null}
          style={{textAlign: 'center'}}
          onCancel={this.hideModal}>
          <div style={{fontSize: 24, textAlign: 'center', marginBottom: 30}}>咨询</div>
          <TextArea placeholder='请输入你要咨询的内容' style={{height: 135}} value={advisoryContent}
                    onChange={this.changeAdvisoryContent}/>
          <Button type='primary' style={{marginTop: 30, textAlign: 'center'}} onClick={this.postAdvisory}>咨询</Button>
        </Modal>
      </div>
    );
  }
}

export default Index;
