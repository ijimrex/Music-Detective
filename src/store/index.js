/**
 * Created by leijin on 3/21/17.
 */
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
  count: 1
}
const mutations = {
  INCREMENT (state) {
    state.count++
  }
}
export default new Vuex.Store({
  state,
  mutations
})
