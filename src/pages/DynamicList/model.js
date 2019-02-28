import { message } from 'antd';
import * as supplierService from './service';

export default {
  namespace: 'dynamic',
  state: {
    dynamicList: [],
    dynamicPage: 1,
    dynamicTotal: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
      });
    },
  },

  effects: {
    * fetchDynamicList({ payload: { pageNo = 1, id } }, { call, put }) {
      const { data } = yield call(supplierService.fetchDynamicList, { pageNo, id });
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            dynamicList: data.data,
            dynamicPage: parseInt(pageNo, 10),
            dynamicTotal: parseInt(data.data.total, 10),
          },
        })
        :
        message.error(data.msg);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
