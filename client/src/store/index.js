import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + 'api/',
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    bugs: [],
    openBugs: [],
    closedBugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    setBugs(state, payload) {
      state.bugs = payload
    },
    setOpenBugs(state, payload) {
      state.openBugs = payload
    },
    setClosedBugs(state, payload) {
      state.closedBugs = payload
    },
    setActiveBug(state, payload) {
      state.activeBug = payload
    },
    setNotes(state, payload) {
      state.notes = payload
    }
  },
  actions: {
    async getBugs({ commit, dispatch, state }) {
      try {
        let bugs = await api.get(`/bugs`)
        commit('setBugs', bugs.data)
        return state.bugs
      } catch (error) {
        console.error(error)
      }
    },
    async create({ commit, dispatch }, payload) {
      try {
        let res = await api.post('bugs', payload)
        dispatch('getBugs')
      } catch (error) {
        console.error(error)
      }
    }
  },
  // modules: {}
})
