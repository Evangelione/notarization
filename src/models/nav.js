import { navBar, popoverItem } from '../common/constants';

export default {
  namespace: 'nav',
  state: {
    currentLink: 0,
    currentPopover: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        navBar.some((value, index) => {
          if (pathname === '/') {
            dispatch({
              type: 'save', payload: {
                currentLink: 0,
              },
            });
            return true;
          } else if (value.label === query.module) {
            dispatch({
              type: 'save', payload: {
                currentLink: index,
              },
            });
            return true;
          } else {
            popoverItem.some((value1, index1) => {
              if (value1.path === pathname) {
                dispatch({
                  type: 'save', payload: {
                    currentLink: 1,
                    currentPopover: index1,
                  },
                });
                return true;
              }
              return false;
            });
          }
          return false;
        });
      });
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
