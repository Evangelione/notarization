export default {
  namespace: 'nav',
  state: {
    currentLink: 0,
    currentPopover: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    * login({ payload: { form } }, { call }) {
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
