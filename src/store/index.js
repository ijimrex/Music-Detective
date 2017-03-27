/**
 * Created by leijin on 3/21/17.
 */
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
  option:"",
  keywords:""
}
const mutations = {
  UPDATE (state,op) {
    // console.log("in store")
    state.option=op.k;
    state.keywords=op.d;
    console.log(state.keywords)
    // console.log(op.d)

  }
}
const actions= {
  UPDATE (context) {
    context.commit('UPDATE')
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
