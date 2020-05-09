import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './rootTypes'
import { user } from './module/index'


Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    user
  }
}

export default new Vuex.Store<RootState>(store)
