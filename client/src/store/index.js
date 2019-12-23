import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + 'api',
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
        let bugs = await api.get('/bugs')
        commit('setBugs', bugs.data)
      } catch (error) {
        console.error(error)
      }
    },
    async create({ commit, dispatch }, payload) {
      try {
        let res = await api.post('/bugs', payload)
        dispatch('getBugs')
      } catch (error) {
        console.error(error)
      }
    },
    async getById({ commit, dispatch }, payload) {
      try {
        let res = await api.get('/bugs/' + payload)
        if (res) {
          commit('setActiveBug', res.data)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async edit({ commit, dispatch }, payload) {
      try {
        await api.put('/bugs/' + payload, this.state.activeBug)
        dispatch('getById', payload)
      } catch (error) {
        console.error(error)
      }
    },
    async delete({ commit, dispatch }, payload) {
      try {
        await api.delete('/bugs/' + payload)
      } catch (error) {
        console.error(error)
      }
    },
    async getNotes({ commit, dispatch }, payload) {
      try {
        let res = await api.get('/bugs/' + payload + '/notes')
        commit('setNotes', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createNote({ commit, dispatch }, payload) {
      try {
        await api.post('/notes', payload)
        dispatch('getNotes', payload.bug)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteNote({ dispatch }, note) {
      try {
        await api.delete('/notes/' + note.id)
        dispatch("getNotes", note.bugId)
      } catch (error) {
        console.error(error)
      }
    }
  },
  // modules: {}
})
