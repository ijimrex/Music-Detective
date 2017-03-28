/**
 * Created by leijin on 3/21/17.
 */
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
  option:"",
  keywords:"",
  url:"",
  info:""

}
const mutations = {
  UPDATE (state,op) {
    // console.log("in store")
    state.option=op.k;
    state.keywords=op.d;
    // console.log(state.keywords)
    // console.log(op.d)

  },
  Maintain(url,info){
    state.url=url;
    state.info=info

  }
}
const actions= {
  UPDATE (context) {
    context.commit('UPDATE')
  },
  Maintain(context){
    context.commit('Maintain')
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
