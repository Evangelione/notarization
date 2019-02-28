// import { navBar, popoverItem } from '../common/constants';
import * as globalServices from '../services/global';
import { message } from 'antd';

export default {
  namespace: 'global',
  state: {
    currentLink: 0,
    currentPopover: '',
    navBar: [],
    article: {},
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
        message.error(data.msg);
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
        message.error(data.msg);
      }
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
