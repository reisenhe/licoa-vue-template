import * as types from './mutation-types'

const mutations = {
    [types.SET_START_DATE](state, startDate) {
        state.startDate = startDate
    },
    [types.SET_END_DATE](state, endDate) {
        state.endDate = endDate
    }
}

export default mutations