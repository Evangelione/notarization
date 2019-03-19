import React, { Component } from 'react';
import { Form, Input, Row, Col, Select, Button, message } from 'antd';
import { connect } from 'dva';

const Option = Select.Option;


@connect(({ notarization }) => ({
  notarization,
}))
@Form.create()
class SearchForm extends Component {
  state = {
    time: '',
    num: '',
    field: null,
  };
  search = () => {
    const { time, num, field } = this.state;
    if (time === '' || num === '' || field === null) {
      message.error('请输入完整信息后查询');
    } else {
      let effect = this.props.type === 'js' ? 'fetchJS' : 'fetchSD';
      this.props.dispatch({
        type: `notarization/${effect}`,
        payload: {
          year: time,
          bh: num,
          office: field,
        },
      });
      this.props.dispatch({
        type: 'notarization/save',
        payload: {
          searchColumns: this.props.type === 'js' ? 'col1' : 'col2',
        },
      });
    }
  };

  changeField = (value) => {
    this.setState({
      field: value,
    });
  };

  changeTime = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  changeNum = (e) => {
    this.setState({
      num: e.target.value,
    });
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 20 },
      wrapperCol: { span: 20 },
    };
    // const { getFieldDecorator } = this.props.form;
    const { time, num } = this.state;
    const { office } = this.props;
    return (
      <Form layout='vertical'>
        <Row>
          <Col span={10}>
            <Form.Item
              label="年度"
              {...formItemLayout}
            >
              <Input placeholder='填写年度' value={time} onChange={this.changeTime}/>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="证书号"
              {...formItemLayout}
            >
              <Input placeholder="填写证书号" value={num} onChange={this.changeNum}/>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="公证处"
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 15 }}
            >
              <Select placeholder="选择公证处" onChange={this.changeField}>
                {office.map((value, index) => (
                  <Option key={index} value={value.id}>{value.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              style={{ marginTop: 10 }}
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 15 }}
            >
              <Button type='primary' onClick={this.search}>查询</Button>
              <span className='spanHover' style={{ marginLeft: 24, cursor: 'pointer', fontWeight: 'bold' }}>清空</span>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchForm;
