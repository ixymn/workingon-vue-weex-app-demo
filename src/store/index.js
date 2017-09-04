import Vuex from 'vuex'
import { STORE_LOGIN_INFO } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    user:{
      state:"",
      key:"sfdfdf",
    }
  },

  getters: {


  },
  mutations: {
    [STORE_LOGIN_INFO](state, info) {
      console.log(info);
      state.user.key = info.key
    }
  }
})

export default store
