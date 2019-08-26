import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contracts: [
      {id: 1, date: '15.05.2019', type: 'Оказание услуг', money: '531 000 руб'},
      {id: 2, date: '16.10.2017', type: 'Договор подряда', money: '1 000 руб'}
    ],
  },
  mutations: {

  },
  actions: {

  }
})
