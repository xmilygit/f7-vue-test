import axios from 'axios'
import state from "./state";
//axios.defaults.withCredentials = true
export default {
    EditAccFromListById({ commit }, account, id) {
        commit('EditAccFromListById', account, id);
    },
    DeleAccFromListById({ commit }, id) {
        commit('DeleAccFromListById', id);
    },
    AddAccToList({ commit }, account) {
        commit('AddAccToList', account)
    },
    test({ commit }) {
        axios({
            method: 'GET',
            url: '/sys/cookies?username=111&password=111',
        })
            .then(function (res) {
                console.log(res.data)
                sessionStorage.setItem('token', res.data.token);
            })
    },
    async GetAccList({ commit }, query) {
        if (!state.allowInfinite) return;
        commit('ChangeAllowInfinite', false);
        try {
            let res = await axios.post('/sys/search', {
                data: {
                    pagesize: query.pagesize,
                    keyword: query.search,
                    lastid: state.lastid
                }
            })
            if (res.data.error) {
                let errdialog = {
                    status: true,
                    title: "出错了",
                    message: '错误' + res.data.message
                }
                commit('ChangeShowPreloader', false);
                commit('ChangeDialog', errdialog)
                commit('ChangeAllowInfinite', true);
                return;
            }
            let records = res.data.result.recordset;
            let recordsCount = res.data.result.count;
            if (recordsCount == 0) {
                let errdialog = {
                    status: true,
                    title: "提示",
                    message: '未找到任何相关记录'
                }
                commit('ChangeShowPreloader', false);
                commit('ChangeDialog', errdialog)
                commit('ChangeAllowInfinite', true);
                return;
            }

            commit('SetLastId', records[records.length - 1]._id)
            commit('GetAccList', records)
            commit('ChangeAllowInfinite', true);
            if (state.AccList.length >= recordsCount) {
                commit('ChangeShowPreloader', false);
                commit('ChangeAllowInfinite', false);
            }
            console.log(
                "找到" + recordsCount + "记录,当前记录数：" + state.AccList.length
            );
        } catch (err) {
            console.log("catch到的错误，" + err);
            let errdialog = {
                status: true,
                title: '系统出错',
                message: '错误：' + err
            }
            commit('ChangeDialog', errdialog);
            commit('ChangeAllowInfinite', true);
        }
    }
}