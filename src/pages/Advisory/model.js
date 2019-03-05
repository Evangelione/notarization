// import { navBar, popoverItem } from '../common/constants';
import * as advisoryServices from './services';
import { message } from 'antd';

export default {
  namespace: 'advisory',
  state: {
    advisoryList: [],
    advisoryPage: 1,
    advisoryTotal: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
      });
    },
  },

  effects: {
    * fetchAdvisoryList({ payload: { pageNo = 1 } }, { call, put }) {
      const { data } = yield call(advisoryServices.fetchAdvisoryList, pageNo);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            advisoryList: data.data.list,
            advisoryPage: parseInt(pageNo, 10),
            advisoryTotal: parseInt(data.data.count, 10),
          },
        })
        :
        message.error(data.message);
    },
    * postAdvisory({ payload: { value } }, { call, put }) {
      const { data } = yield call(advisoryServices.postAdvisory, value);
      parseInt(data.code, 10) === 1 ?
        message.success(data.message)
        :
        message.error(data.message);
    },
    * useful({ payload: { id } }, { call, put }) {
      const { data } = yield call(advisoryServices.useful, id);
      parseInt(data.code, 10) === 1 ?
        message.success(data.message)
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
