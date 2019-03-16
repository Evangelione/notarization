import React, { Component } from 'react';
import { Carousel } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import router from 'umi/router';

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

  goArticle = (id) => {
    router.push({
      pathname: '/article',
      query: {
        module: '轮播新闻',
        articleId: id,
      },
    });
  };

  render() {
    const { carouselMap } = this.props.global;
    return (
      <Carousel autoplay style={{ display: 'inline-block' }} className={styles['carousel']}>
        {carouselMap.map((value, index) => (
          <div key={index} style={{ position: 'relative' }} onClick={this.goArticle.bind(null, value.id)}>
            <img src={`http://118.31.46.146:8080${value.image}`} style={{ width: '100%', height: 360, cursor: 'pointer' }} alt=""/>
            <div className={styles['title']}>
              <div style={{ paddingLeft: 15 }}>{value.title}</div>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default CarouselMap;
