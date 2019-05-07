import vue from 'vue';
import vuex from 'vuex';
import state from './state.js';
import * as getters from './getter.js';
import mutations from './mutations.js';
import actions from './action.js';
import markstore from '@/vuex/modules/mark.js'
import graduate from '@/vuex/modules/graduate.js'
import test from '@/vuex/modules/test.js'

// 引入 axios


vue.use(vuex);

const debug=process.env.NODE_ENV!=='production';

export default new vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        mark:markstore,
        graduate:graduate,
        test11:test,
    }
})