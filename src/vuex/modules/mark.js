import axios from 'axios'
import { stat } from 'fs';
const state = {
    marktest: 'test is ok',
    termSaveed: false,
    termlist: [],
    teachersubject: [],
    allteacher: [],
};
const mutations = {
    test(state) {
        alert('这是子组件的test')
    },
    //设置学期列表
    setTermList(state, val) {
        state.termlist = val
    },
    //设置学科任教教师列表
    setTeacherSubject(state, val) {
        state.teachersubject = val
    },
    //设置所有教师列表
    setTeacherList(state, val) {
        state.allteacher = val;
    },
    //更改学期列表中指定索引的数据
    setTermListByIndex(state,{termname:termname,subject:subject,index:index}){
        state.termlist[index].term=termname;
        state.termlist[index].subject=subject;
    }
}
const actions = {
    //添加学期信息
    async termAdd({ commit }, term) {
        commit('ChangeShowPreloader', true, { root: true })
        try {
            let res = await axios.post("/sys/mark/termAdd/", { 'term': term })
            commit('ChangeShowPreloader', false, { root: true })
            if (res.data.error) {
                commit('setAsyncResult', {
                    show: true,
                    error: true,
                    message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                    title: '出错了',
                    result: '',
                    from: '添加学期回调'
                }, { root: true })
                return;
            }
            commit('setAsyncResult', {
                show: true,
                error: false,
                message: "保存成功",
                title: '提示',
                result: res.data,
                from: '添加学期回调'
            }, { root: true })
        } catch (err) {
            commit('ChangeShowPreloader', false, { root: true })
            console.log("系统出错，" + err);
            //测试改进
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器未执行操作（" + err + "）",
                title: '系统出错',
                result: '',
                from: '添加学期'
            }, { root: true })
        }
    },
    //获取所有学期列表
    async getTermList({ commit }) {
        commit('ChangeShowPreloader', true, { root: true })
        try {
            let res = await axios.get('/sys/mark/gettermlist/')
            commit('ChangeShowPreloader', false, { root: true })
            if (res.data.error) {
                commit('setAsyncResult', {
                    show: true,
                    error: true,
                    message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                    title: '出错了',
                    result: '',
                    from: '获取学期列表回调'
                }, { root: true })
                return;
            }
            commit('setTermList', res.data.result)
        } catch (err) {
            commit('ChangeShowPreloader', false, { root: true })
            console.log("系统出错，" + err);
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器未执行操作（" + err + "）",
                title: '系统出错',
                result: '',
                from: '获取学期列表'
            }, { root: true })
        }
    },
    //删除学期
    async delterm({ commit }, { id, term }) {
        commit('ChangeShowPreloader', true, { root: true })
        try {
            let res = await axios.get('/sys/mark/delterm/?id=' + id + '&term=' + term)
            commit('ChangeShowPreloader', false, { root: true })
            if (res.data.error) {
                commit('setAsyncResult', {
                    show: true,
                    error: true,
                    message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                    title: '出错了',
                    result: '',
                    from: '删除学期回调'
                }, { root: true })
                return;
            }
            commit('setAsyncResult', {
                show: true,
                error: false,
                message: "删除成功！",
                title: '提示',
                result: '',
                from: '删除学期回调'
            }, { root: true })
        } catch (err) {
            commit('ChangeShowPreloader', false, { root: true })
            console.log("系统出错，" + err);
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器未执行操作（" + err + "）",
                title: '系统出错',
                result: '',
                from: '删除学期'
            }, { root: true })
        }
    },
    //更新学期数据
    async editterm({ commit }, term) {
        commit('ChangeShowPreloader', true, { root: true })
        try {
            term['delsubject']=methods.returnDel(term.oldsubject,term.subject.split('\n'));
            term['newsubject']=methods.returnDel(term.subject.split('\n'),term.oldsubject)
            let message='保存成功！';
            if (term.delsubject.length > 0)
                message += "[" + term.delsubject.join(',') + "]这些学科已经从教师任教中移除!";
            if (term.newsubject.length > 0)
                message += "[" + term.newsubject.join(',') + "]这些是新增学科，请注意设置任教教师!"
            let res = await axios.post('/sys/mark/termEdit/', { term: term })
            commit('ChangeShowPreloader', false, { root: true })
            if (res.data.error) {
                commit('setAsyncResult', {
                    show: true,
                    error: true,
                    message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                    title: '出错了',
                    result: '',
                    from: '更新学期回调'
                }, { root: true })
                return;
            }
            commit('setAsyncResult', {
                show: true,
                error: false,
                message: message,
                title: '提示',
                result: res.data,
                from: '编辑学期回调'
            }, { root: true })
            commit('setTermListByIndex',{termname:term.term,subject:term.subject.split('\n'),index:term.itemindex})
            //alert(methods.returnDel(term.oldsubject,term.subject.split('\n'))+"学科已经删除")
            //alert(methods.returnDel(term.subject.split('\n'),term.oldsubject)+"是新增的学科")
        } catch (err) {
            commit('ChangeShowPreloader', false, { root: true })
            console.log("系统出错，" + err);
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器未执行操作（" + err + "）",
                title: '系统出错',
                result: '',
                from: '更新学期'
            }, { root: true })
        }
    },
    //根据学科返回任课教师列表
    async getTeacherBySubject({ commit }, { subject, term }) {
        commit('ChangeShowPreloader', true, { root: true })
        try {
            let res = await axios.get('/sys/mark/getTeacherBySubject/?subject=' + subject + '&term=' + term)
            commit('ChangeShowPreloader', false, { root: true })
            if (res.data.error) {
                commit('setAsyncResult', {
                    show: true,
                    error: true,
                    message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                    title: '出错了',
                    result: '',
                    from: '获取学科任课教师回调'
                }, { root: true })
                return;
            }
            commit('setTeacherSubject', res.data.result)
        } catch (err) {
            commit('ChangeShowPreloader', false, { root: true })
            console.log("系统出错，" + err);
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器未执行操作（" + err + "）",
                title: '系统出错',
                result: '',
                from: '获取学科任课教师'
            }, { root: true })
        }
    },
    //获取所有教师列表
    async getAllTeacher({ commit }) {
        commit('ChangeShowPreloader', true, { root: true })
        try {
            let res = await axios.get('/sys/mark/getAllTeacher/')
            commit('ChangeShowPreloader', false, { root: true })
            if (res.data.error) {
                commit('setAsyncResult', {
                    show: true,
                    error: true,
                    message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                    title: '出错了',
                    result: '',
                    from: '获取所有教师回调'
                }, { root: true })
                return;
            }
            commit('setTeacherList', res.data.result)
        } catch (err) {
            commit('ChangeShowPreloader', false, { root: true })
            console.log("系统出错，" + err);
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器未执行操作（" + err + "）",
                title: '系统出错',
                result: '',
                from: '获取所有教师'
            }, { root: true })
        }
    },

    //重置并初始化指定学期的任教信息
    async resetAllTeaching({commit},term){
        commit('ChangeShowPreloader', true, { root: true })
        try {
            let res = await axios.get('/sys/mark/resetAllTeaching/?term='+term)
            commit('ChangeShowPreloader', false, { root: true })
            if (res.data.error) {
                commit('setAsyncResult', {
                    show: true,
                    error: true,
                    message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                    title: '出错了',
                    result: '',
                    from: '获取所有教师回调'
                }, { root: true })
                return;
            }
            commit('setAsyncResult', {
                show: true,
                error: false,
                message: "重置成功",
                title: '提示',
                result: res.data,
                from: '重置学期任教信息回调'
            }, { root: true })
        }catch(err){
            commit('ChangeShowPreloader', false, { root: true })
            console.log("系统出错，" + err);
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器未执行操作（" + err + "）",
                title: '系统出错',
                result: '',
                from: '重置学期任教信息回调'
            }, { root: true })
        }
    },

    //设置学科任教教师
    async setTeachingSubject({commit},teachinginfo){
        commit('ChangeShowPreloader', true, { root: true })
        try {
            let res = await axios.post('/sys/mark/setTeachingSubject/',{teachinginfo:teachinginfo})
            commit('ChangeShowPreloader', false, { root: true })
            if (res.data.error) {
                commit('setAsyncResult', {
                    show: true,
                    error: true,
                    message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                    title: '出错了',
                    result: '',
                    from: '设置学科任教教师时出错'
                }, { root: true })
                return;
            }
            commit('setAsyncResult', {
                show: true,
                error: false,
                message: "设置成功",
                title: '提示',
                result: res.data,
                from: '设置学科任教教师回调'
            }, { root: true })
        } catch (err) {
            commit('ChangeShowPreloader', false, { root: true })
            console.log("系统出错，" + err);
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器未执行操作（" + err + "）",
                title: '系统出错',
                result: '',
                from: '设置学科任教教师时出错'
            }, { root: true })
        }
    }
};
const getters = {

};
const methods = {
    //数组A不在数组B里的值
    returnDel(a, b) {
        return a.filter((s) => {
            return b.indexOf(s) == -1
        })
    }
    /*
    termAdd_cb(res, commit) {
        commit('ChangeShowPreloader', false, { root: true })
        if (res.data.error) {
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                title: '出错了',
                result: '',
                from: '添加学期回调'
            }, { root: true })
            return;
        }
        commit('setAsyncResult', {
            show: true,
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
                show: true,
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
                show: true,
                error: true,
                message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                title: '出错了',
                result: '',
                from: '删除学期回调'
            }, { root: true })
            return;
        }
        commit('setAsyncResult', {
            show: true,
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
                show: true,
                error: true,
                message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                title: '出错了',
                result: '',
                from: '更新学期回调'
            }, { root: true })
            return;
        }
        commit('setAsyncResult', {
            show: true,
            error: false,
            message: "更新成功!",
            title: '提示',
            result: res.data,
            from: '更新学期回调'
        }, { root: true })
    },
    getTeacherBySubject_cb(res, commit) {
        commit('ChangeShowPreloader', false, { root: true })
        if (res.data.error) {
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                title: '出错了',
                result: '',
                from: '获取学科任课教师回调'
            }, { root: true })
            return;
        }
        commit('setTeacherSubject', res.data.result)
    },
    getAllTeacher_cb(res, commit) {
        commit('ChangeShowPreloader', false, { root: true })
        if (res.data.error) {
            commit('setAsyncResult', {
                show: true,
                error: true,
                message: "错误：服务器执行了操作，但出错了。（" + res.data.message + "）",
                title: '出错了',
                result: '',
                from: '获取所有教师回调'
            }, { root: true })
            return;
        }
        commit('setTeacherList', res.data.result)
    }
    */
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}