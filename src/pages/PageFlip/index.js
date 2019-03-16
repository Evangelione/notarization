import React, { Component } from 'react';
import PageFlip from '@/common/page-flip';

class Index extends Component {

  componentDidMount() {
    new PageFlip('#pageFlip', ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552716714648&di=9ee205bb328a0f95e427ef85ed58168d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F28a4962c297205e0868cdb45bb527e2bc5319f08f019-l7N1A3_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552716714648&di=9918e1e53eda0b786381883c8dabad0b&imgtype=0&src=http%3A%2F%2Fwww.xugongping.com%2Fwp-content%2Fuploads%2F2016%2F10%2F19300001317260131176866103067_950.jpg']);
  }

  render() {
    return (
      <div>
        <div id='pageFlip' style={{ width: '100%'}}/>
      </div>
    );
  }
}

export default Index;
