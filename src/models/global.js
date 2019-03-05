// import { navBar, popoverItem } from '../common/constants';
import * as globalServices from '../services/global';
import { message } from 'antd';

export default {
  namespace: 'global',
  state: {
    currentLink: 0,
    currentPopover: '',
    barLink: 'work',
    navBar: [],
    article: {},
    dynamicList: [],
    dynamicPage: 1,
    dynamicTotal: 0,
    carouselMap: [],
    threeNavBarList: [],
    middleBar: [],
    friendLink: [],
    outLink: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // navBar.some((value, index) => {
        //   if (pathname === '/') {
        //     dispatch({
        //       type: 'save', payload: {
        //         currentLink: 0,
        //       },
        //     });
        //     return true;
        //   } else if (value.label === query.module) {
        //     dispatch({
        //       type: 'save', payload: {
        //         currentLink: index,
        //       },
        //     });
        //     return true;
        //   } else {
        //     popoverItem.some((value1, index1) => {
        //       if (value1.path === pathname) {
        //         dispatch({
        //           type: 'save', payload: {
        //             currentLink: 1,
        //             currentPopover: index1,
        //           },
        //         });
        //         return true;
        //       }
        //       return false;
        //     });
        //   }
        //   return false;
        // });
      });
    },
  },

  effects: {
    * login({ payload: { form } }, { call }) {
    },
    * fetchNavBar({ payload }, { call, put }) {
      const { data } = yield call(globalServices.fetchNavBar);
      if (parseInt(data.code, 10) === 1) {
        data.data.unshift({
          name: '首页',
          path: '/',
        });
        yield put({
          type: 'save',
          payload: {
            navBar: data.data,
          },
        });
      } else {
        message.error(data.message);
      }
    },
    * fetchArticle({ payload: { id } }, { call, put }) {
      const { data } = yield call(globalServices.fetchArticle, id);
      if (parseInt(data.code, 10) === 1) {
        yield put({
          type: 'save',
          payload: {
            article: data.data,
          },
        });
      } else {
        message.error(data.message);
      }
    },
    * fetchDynamicList({ payload: { pageNo = 1, id } }, { call, put }) {
      const { data } = yield call(globalServices.fetchDynamicList, { pageNo, id });
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            dynamicList: data.data.list,
            dynamicPage: parseInt(pageNo, 10),
            dynamicTotal: parseInt(data.data.count, 10),
          },
        })
        :
        message.error(data.message);
    },
    * searchList({ payload: { pageNo = 1, keyword } }, { call, put }) {
      const { data } = yield call(globalServices.searchList, { pageNo, keyword });
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            dynamicList: data.data.list,
            dynamicPage: parseInt(pageNo, 10),
            dynamicTotal: parseInt(data.data.count, 10),
          },
        })
        :
        message.error(data.message);
    },
    * fetchCarouselMap({ payload }, { call, put }) {
      const { data } = yield call(globalServices.fetchCarouselMap);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            carouselMap: data.data.list,
          },
        })
        :
        message.error(data.message);
    },
    * fetchNavBarList({ payload }, { call, put }) {
      const { data } = yield call(globalServices.fetchNavBarList);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            threeNavBarList: data.data,
          },
        })
        :
        message.error(data.message);
    },
    * fetchMiddleBar({ payload }, { call, put }) {
      const { data } = yield call(globalServices.fetchMiddleBar);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            middleBar: data.data,
          },
        })
        :
        message.error(data.message);
    },
    * fetchFriendLink({ payload }, { call, put }) {
      const { data } = yield call(globalServices.fetchFriendLink);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            friendLink: data.data.list,
          },
        })
        :
        message.error(data.message);
    },
    * fetchOutLink({ payload }, { call, put }) {
      const { data } = yield call(globalServices.fetchOutLink);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            outLink: data.data.list,
          },
        })
        :
        message.error(data.message);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
