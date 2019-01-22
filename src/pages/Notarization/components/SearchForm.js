import React, { Component } from 'react';
import { Form, Input, Row, Col, Select, Button } from 'antd';

const Option = Select.Option;

@Form.create()
class SearchForm extends Component {
  render() {
    const formItemLayout = {
      labelCol: { span: 20 },
      wrapperCol: { span: 20 },
    };
    // const { getFieldDecorator } = this.props.form;
    return (
      <Form layout='vertical'>
        <Row>
          <Col span={10}>
            <Form.Item
              label="年度"
              {...formItemLayout}
            >
              <Select placeholder="选择年度">
                <Option value='1'>1</Option>
                <Option value='3'>2</Option>
                <Option value='2'>3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="证书号"
              {...formItemLayout}
            >
              <Input placeholder="填写证书号"/>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="公证处"
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 15 }}
            >
              <Select placeholder="选择年度">
                <Option value='1'>1</Option>
                <Option value='3'>2</Option>
                <Option value='2'>3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              style={{marginTop:10}}
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 15 }}
            >
              <Button type='primary'>查询</Button>
              <span className='spanHover' style={{marginLeft: 24, cursor: 'pointer', fontWeight: 'bold'}}>清空</span>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchForm;
