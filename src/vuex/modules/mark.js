import axios from 'axios'
const state={
    marktest:'test is ok',
    // showpreloader:false,
    termSaveed:false,
    termlist:[]
};
const mutations = {
    // termAdd(state){

    // }
    test(state){
        alert('这是子组件的test')
    },
    //设置loading图标显示变量
    // setShowPreloader(state,val){
    //     state.showpreloader=val
    // },
    //设置学期保存操作状态
    setSaveTerm(state,val){
        state.termSaveed=val;
    },
    //设置学期列表
    setTermList(state,val){
        state.termlist=val
    }
};
const actions = {
    //添加学期信息
    async termAdd({commit},term){
        commit('ChangeShowPreloader',true,{root:true})
        axios.post("/sys/mark/termAdd/",{'term':term})
        .then(function(res){
            methods.termAdd_cb(res,commit)
        })
        .catch(function(err){
            commit('ChangeShowPreloader',false,{root:true})
            console.log("系统出错，" + err);
            let errdialog = {
                status: true,
                title: "系统出错",
                message: '错误' + err
            }
            //通知父状态对话框显示
            commit('ChangeDialog', errdialog,{root:true})
        })
        //commit('test',null,{root:true})//根
        //commit('test')//自己
        //commit('test11/test')无法实现，得通过父域来实现中介再去调用另一个兄弟
    },
    //获取所有学期列表
    async getTermList({commit}){
        commit('ChangeShowPreloader',true,{root:true})
        axios.get('/sys/mark/gettermlist/')
        .then(function(res){
            methods.getTermList_cb(res,commit)
        })
        .catch(function(err){
            commit('ChangeShowPreloader',false,{root:true})
            console.log("系统出错，" + err);
            let errdialog = {
                status: true,
                title: "系统出错",
                message: '错误' + err
            }
            //通知父状态对话框显示
            commit('ChangeDialog', errdialog,{root:true})
        })
    },
    //删除学期
    async delterm({commit},{id,term}){
        commit('ChangeShowPreloader',true,{root:true})
        axios.get('/sys/mark/delterm/?id='+id+'&term='+term)
        .then(function(res){
            methods.delterm_cb(res,commit)
        })
        .catch(function(err){
            commit('ChangeShowPreloader',false,{root:true})
            console.log("系统出错，" + err);
            let errdialog = {
                status: true,
                title: "系统出错",
                message: '错误' + err
            }
            //通知父状态对话框显示
            commit('ChangeDialog', errdialog,{root:true})
        })
    },
    //更新学期数据
    async editterm({commit},term){
        commit('ChangeShowPreloader',true,{root:true})
        axios.post('/sys/mark/termEdit/',{term:term})
        .then(function(res){
            methods.editterm_cb(res,commit)
        })
        .catch(function(err){
            commit('ChangeShowPreloader',false,{root:true})
            console.log("系统出错，" + err);
            let errdialog = {
                status: true,
                title: "系统出错",
                message: '错误' + err
            }
            //通知父状态对话框显示
            commit('ChangeDialog', errdialog,{root:true})
        })
    }
};
const getters = {

};
const methods={
    termAdd_cb(res,commit){
        commit('ChangeShowPreloader',false,{root:true})
        if (res.data.error) {
            let errdialog = {
                status: true,
                title: "出错了",
                message: '错误' + res.data.message
            }
            commit('ChangeDialog', errdialog,{root:true})
            return;
        }
        commit('ChangeDialog', {
            status:true,
            title:'提示',
            message:'保存成功!'            
        },{root:true})
    },
    getTermList_cb(res,commit){
        commit('ChangeShowPreloader',false,{root:true})
        if (res.data.error) {
            let errdialog = {
                status: true,
                title: "出错了",
                message: '错误' + res.data.message
            }
            commit('ChangeDialog', errdialog,{root:true})
            return;
        }
        commit('setTermList',res.data.result)
    },
    delterm_cb(res,commit){
        commit('ChangeShowPreloader',false,{root:true})
        if (res.data.error) {
            let errdialog = {
                status: true,
                title: "出错了",
                message: '错误' + res.data.message
            }
            commit('ChangeDialog', errdialog,{root:true})
            return;
        }
        commit('ChangeDialog', {
            status:true,
            title:'提示',
            message:'删除成功!'            
        },{root:true})
    },
    editterm_cb(res,commit){
        commit('ChangeShowPreloader',false,{root:true})
        if (res.data.error) {
            let errdialog = {
                status: true,
                title: "出错了",
                message: '错误' + res.data.message
            }
            commit('ChangeDialog', errdialog,{root:true})
            return;
        }
        commit('ChangeDialog', {
            status:true,
            title:'提示',
            message:'更新成功!'            
        },{root:true})
    }
};
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}