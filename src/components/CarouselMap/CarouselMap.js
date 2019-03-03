import React, { Component } from 'react';
import { Carousel } from 'antd';
import styles from './index.less';
import { connect } from 'dva';

@connect(({ global }) => ({
  global,
}))
class CarouselMap extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'global/fetchCarouselMap',
      payload: {},
    });
  }

  onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  render() {
    const { carouselMap } = this.props.global;
    return (
      <Carousel afterChange={this.onChange} autoplay style={{ display: 'inline-block' }} className={styles['carousel']}>
        {carouselMap.map((value, index) => (
          <div key={index}>
            <img src={`http://118.31.46.146:8080${value.image}`} style={{ width: '100%', height: 360 }} alt=""/>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default CarouselMap;
