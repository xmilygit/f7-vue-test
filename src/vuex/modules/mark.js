import axios from 'axios'
const state = {
    marktest: 'test is ok',
    termSaveed: false,
    termlist: [],
};
const mutations = {
    test(state) {
        alert('这是子组件的test')
    },
    //设置学期列表
    setTermList(state, val) {
        state.termlist = val
    },
};
const actions = {
    //添加学期信息
    async termAdd({ commit }, term) {
        commit('ChangeShowPreloader', true, { root: true })
        axios.post("/sys/mark/termAdd/", { 'term': term })
            .then(function (res) {
                methods.termAdd_cb(res, commit)
            })
            .catch(function (err) {
                commit('ChangeShowPreloader', false, { root: true })
                console.log("系统出错，" + err);
                //测试改进
                commit('setAsyncResult', {
                    show:true,
                    error: true,
                    message: "错误：服务器未执行操作（" + err + "）",
                    title: '系统出错',
                    result: '',
                    from: '添加学期'
                }, { root: true })
            })
    },
    //获取所有学期列表
    async getTermList({ commit }) {
        commit('ChangeShowPreloader', true, { root: true })
        axios.get('/sys/mark/gettermlist/')
            .then(function (res) {
                methods.getTermList_cb(res, commit)
            })
            .catch(function (err) {
                commit('ChangeShowPreloader', false, { root: true })
                console.log("系统出错，" + err);
                commit('setAsyncResult', {
                    show:true,
                    error: true,
                    message: "错误：服务器未执行操作（" + err + "）",
                    title: '系统出错',
                    result: '',
                    from: '获取学期列表'
                }, { root: true })
            })
    },
    //删除学期
    async delterm({ commit }, { id, term }) {
        commit('ChangeShowPreloader', true, { root: true })
        axios.get('/sys/mark/delterm/?id=' + id + '&term=' + term)
            .then(function (res) {
                methods.delterm_cb(res, commit)
            })
            .catch(function (err) {
                commit('ChangeShowPreloader', false, { root: true })
                console.log("系统出错，" + err);
                commit('setAsyncResult', {
                    show:true,
                    error: true,
                    message: "错误：服务器未执行操作（" + err + "）",
                    title: '系统出错',
                    result: '',
                    from: '删除学期'
                }, { root: true })
            })
    },
    //更新学期数据
    async editterm({ commit }, term) {
        commit('ChangeShowPreloader', true, { root: true })
        axios.post('/sys/mark/termEdit/', { term: term })
            .then(function (res) {
                methods.editterm_cb(res, commit)
            })
            .catch(function (err) {
                commit('ChangeShowPreloader', false, { root: true })
                console.log("系统出错，" + err);
                commit('setAsyncResult', {
                    show:true,
                    error: true,
                    message: "错误：服务器未执行操作（" + err + "）",
                    title: '系统出错',
                    result: '',
                    from: '更新学期'
                }, { root: true })
            })
    }
};
const getters = {

};
const methods = {
    termAdd_cb(res, commit) {
        commit('ChangeShowPreloader', false, { root: true })
        if (res.data.error) {
            commit('setAsyncResult', {
                show:true,
                error: true,
                message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                title: '出错了',
                result: '',
                from: '添加学期回调'
            }, { root: true })
            return;
        }
        commit('setAsyncResult', {
            show:true,
            error: false,
            message: "保存成功",
            title: '提示',
            result: res.data,
            from: '添加学期回调'
        }, { root: true })
    },
    getTermList_cb(res, commit) {
        commit('ChangeShowPreloader', false, { root: true })
        if (res.data.error) {
            commit('setAsyncResult', {
                show:true,
                error: true,
                message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                title: '出错了',
                result: '',
                from: '获取学期列表回调'
            }, { root: true })
            return;
        }
        commit('setTermList', res.data.result)
    },
    delterm_cb(res, commit) {
        commit('ChangeShowPreloader', false, { root: true })
        if (res.data.error) {
            commit('setAsyncResult', {
                show:true,
                error: true,
                message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                title: '出错了',
                result: '',
                from: '删除学期回调'
            }, { root: true })
            return;
        }
        commit('setAsyncResult', {
            show:true,
            error: false,
            message: "删除成功!",
            title: '提示',
            result: res.data,
            from: '删除学期回调'
        }, { root: true })
     },
    editterm_cb(res, commit) {
        commit('ChangeShowPreloader', false, { root: true })
        if (res.data.error) {
            commit('setAsyncResult', {
                show:true,
                error: true,
                message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                title: '出错了',
                result: '',
                from: '更新学期回调'
            }, { root: true })
            return;
        }
        commit('setAsyncResult', {
            show:true,
            error: false,
            message: "更新成功!",
            title: '提示',
            result: res.data,
            from: '更新学期回调'
        }, { root: true })
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}