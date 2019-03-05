// import { navBar, popoverItem } from '../common/constants';
import * as notarizationServices from './services';
import { message } from 'antd';

export default {
  namespace: 'notarization',
  state: {
    searchList: [],
    notarizationList: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
      });
    },
  },

  effects: {
    * fetchJS({ payload: { year, bh, office } }, { call, put }) {
      const { data } = yield call(notarizationServices.fetchJS, year, bh, office);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            searchList: data.data.list,
          },
        })
        :
        message.error(data.message);
    },
    * fetchSD({ payload: { year, bh, office } }, { call }) {
      yield call(notarizationServices.fetchSD, year, bh, office);
      // parseInt(data.code, 10) === 1 ?
      //   message.success(data.message)
      //   :
      //   message.error(data.message);
    },
    * fetchNotarizationList({ payload }, { call, put }) {
      const { data } = yield call(notarizationServices.fetchNotarizationList);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            notarizationList: data.data,
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
