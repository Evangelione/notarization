import React, { Component } from 'react';
import { Carousel } from 'antd';
import styles from './index.less';

class CarouselMap extends Component {

  onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  render() {
    return (
      <Carousel afterChange={this.onChange} autoplay style={{display: 'inline-block'}} className={styles['carousel']}>
        <div>
          <img src={require('@/assets/images/006bYgeozy7pHERVUC3df&690.jpg')} style={{width: '100%',height:360}} alt=""/>
        </div>
        <div>
          <img src={require('@/assets/images/006bYgeozy7pHERNHmg18&690.jpg')} style={{width: '100%',height:360}} alt=""/>
        </div>
        <div>
          <img src={require('@/assets/images/231855basa2bkay3yv3jsg.jpg')} style={{width: '100%',height:360}} alt=""/>
        </div>
      </Carousel>
    );
  }
}

export default CarouselMap;
