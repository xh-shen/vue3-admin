/*
 * @Author: shen
 * @Date: 2021-01-31 23:09:42
 * @LastEditors: shen
 * @LastEditTime: 2021-02-03 08:30:08
 * @Description:
 */
import { Module } from 'vuex'
import { TagsViewState, VisitedViews } from '../types'
import { local } from '@/utils/storage'
import {
  ADD_VISITED_VIEW,
  ADD_CACHED_VIEW,
  DEL_VISITED_VIEW,
  DEL_CACHED_VIEW,
  UPDATE_VISITED_VIEW,
  DEL_ALL_CACHED_VIEWS,
  DEL_ALL_VISITED_VIEWS,
  DEL_OTHERS_CACHED_VIEWS,
  DEL_OTHERS_VISITED_VIEWS,
} from '../constants'

const defaultCached = ['Dashboard']

const setLocalViews = (views: any) => {
  local.set(
    'tagsList',
    views.map((item: any) => ({ ...item })),
  )
}

const state: TagsViewState = {
  visitedViews: local.get<VisitedViews[]>('tagsList') || [],
  cachedViews: defaultCached,
}

const tagsView: Module<TagsViewState, unknown> = {
  namespaced: true,
  state,
  actions: {
    addView({ dispatch }, view) {
      dispatch('addVisitedView', view)
      dispatch('addCachedView', view)
    },
    addVisitedView({ commit }, view) {
      commit(ADD_VISITED_VIEW, view)
    },
    addCachedView({ commit }, view) {
      commit(ADD_CACHED_VIEW, view)
    },
    delView({ dispatch, state }, view) {
      return new Promise((resolve) => {
        dispatch('delVisitedView', view)
        dispatch('delCachedView', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews],
        })
      })
    },
    delVisitedView({ commit, state }, view) {
      return new Promise((resolve) => {
        commit(DEL_VISITED_VIEW, view)
        resolve([...state.visitedViews])
      })
    },
    delCachedView({ commit, state }, view) {
      return new Promise((resolve) => {
        commit(DEL_CACHED_VIEW, view)
        resolve([...state.cachedViews])
      })
    },
    delOthersViews({ dispatch, state }, view) {
      return new Promise((resolve) => {
        dispatch('delOthersVisitedViews', view)
        dispatch('delOthersCachedViews', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews],
        })
      })
    },
    delOthersVisitedViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit(DEL_OTHERS_VISITED_VIEWS, view)
        resolve([...state.visitedViews])
      })
    },
    delOthersCachedViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit(DEL_OTHERS_CACHED_VIEWS, view)
        resolve([...state.cachedViews])
      })
    },

    delAllViews({ dispatch, state }, view) {
      return new Promise((resolve) => {
        dispatch('delAllVisitedViews', view)
        dispatch('delAllCachedViews', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews],
        })
      })
    },
    delAllVisitedViews({ commit, state }) {
      return new Promise((resolve) => {
        commit(DEL_ALL_VISITED_VIEWS)
        resolve([...state.visitedViews])
      })
    },
    delAllCachedViews({ commit, state }) {
      return new Promise((resolve) => {
        commit(DEL_ALL_CACHED_VIEWS)
        resolve([...state.cachedViews])
      })
    },

    updateVisitedView({ commit }, view) {
      commit(UPDATE_VISITED_VIEW, view)
    },
  },
  mutations: {
    [ADD_VISITED_VIEW](state: TagsViewState, view) {
      if (state.visitedViews.some((v) => v.path === view.path)) return
      state.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta?.title || 'no-name',
        }),
      )
      setLocalViews(state.visitedViews)
    },
    [ADD_CACHED_VIEW]: (state, view) => {
      if (state.cachedViews.includes(view.name)) return
      if (view.meta?.keepAlive) {
        state.cachedViews.push(view.name)
      }
    },
    [DEL_VISITED_VIEW]: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
      setLocalViews(state.visitedViews)
    },
    [DEL_CACHED_VIEW]: (state, view) => {
      const index = state.cachedViews.indexOf(view.name)
      index > -1 && state.cachedViews.splice(index, 1)
    },
    [DEL_OTHERS_VISITED_VIEWS]: (state, view) => {
      state.visitedViews = state.visitedViews.filter((v) => {
        return v.path === view.path
      })
      setLocalViews(state.visitedViews)
    },
    [DEL_OTHERS_CACHED_VIEWS]: (state, view) => {
      const index = state.cachedViews.indexOf(view.name)
      if (index > -1) {
        state.cachedViews = state.cachedViews.slice(index, index + 1)
      } else {
        state.cachedViews = []
      }
    },

    [DEL_ALL_VISITED_VIEWS]: (state) => {
      state.visitedViews = []
      setLocalViews(state.visitedViews)
    },
    [DEL_ALL_CACHED_VIEWS]: (state) => {
      state.cachedViews = defaultCached
    },

    [UPDATE_VISITED_VIEW]: (state, view) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
      setLocalViews(state.visitedViews)
    },
  },
}

export default tagsView
