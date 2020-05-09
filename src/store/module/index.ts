
import { Module, GetterTree, MutationTree, ActionTree } from 'vuex'
import { UserState } from './types'
import { RootState } from '../rootTypes'



const state: UserState = {
  firstName: ''
}

const getters: GetterTree<UserState, RootState> = {
  fullName(state): string {
    return state.firstName
  }
}

const mutations: MutationTree<UserState> = {
  changeMobile(state, mobile: string) {
    state.firstName = mobile
  }
}

const actions: ActionTree<UserState, RootState> = {
  changeAction({ commit }, str: string) {
    commit('changeMobile', str)
  }
}


const namespaced = true
export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
export default state
