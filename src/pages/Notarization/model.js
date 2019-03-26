// import { navBar, popoverItem } from '../common/constants';
import * as notarizationServices from './services';
import { message } from 'antd';

export default {
  namespace: 'notarization',
  state: {
    searchList: [],
    notarizationList: [],
    searchColumns: 'col1',
    areaList: [],
    areaList2: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
      });
    },
  },

  effects: {
    * fetchJS({ payload: { year, bh, office, area } }, { call, put }) {
      const { data } = yield call(notarizationServices.fetchJS, year, bh, office, area);
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
    * fetchSD({ payload: { year, bh, office, area } }, { call, put }) {
      const { data } = yield call(notarizationServices.fetchSD, year, bh, office, area);
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
    * fetchNotarizationList({ payload: { area } }, { call, put }) {
      const { data } = yield call(notarizationServices.fetchNotarizationList2, area);
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
    * fetchAreaList({ payload: { leibie } }, { call, put }) {
      const { data } = yield call(notarizationServices.fetchAreaList, leibie);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            areaList: data.data,
          },
        })
        :
        message.error(data.message);
    },
    * fetchAreaList2({ payload: { leibie } }, { call, put }) {
      const { data } = yield call(notarizationServices.fetchAreaList, leibie);
      parseInt(data.code, 10) === 1 ?
        yield put({
          type: 'save',
          payload: {
            areaList2: data.data,
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
