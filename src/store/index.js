import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const state = {
    userInfo: {
        name: '渴死的鱼',
        avar: '~img/test/avi.jpg',
        tel: '185611332353'
    }
}
const mutations = {
    CHANGE_USERINFO: (state, userInfo) => {
        state.userInfo = userInfo;
    }
}

const actions = {
    changeUserInfo: ({ commit }, userInfo) => {
        commit('CHANGE_USERINFO', userInfo);
    }
}
const getters = {
    getUserInfo: (state, userInfo = {}) => {
        return state.tel
    }
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store