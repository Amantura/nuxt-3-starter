/* eslint-disable no-undef */

const appSTATE = {
  asideVisible: false
}

export const {
  state,
  getter,
  mutation
} = createStore('app', appSTATE)

export const asideVisible = getter('getAsideVisible', state => state.asideVisible)

export const setAsideVisible = mutation('setAsideVisible', (state, payload) => {
  state.asideVisible = payload
})