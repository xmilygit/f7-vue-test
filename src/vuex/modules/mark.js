import axios from 'axios'
const state={
    marktest:'test is ok',
    // showpreloader:false,
    // termSaveed=false,
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
    // setSaveTerm(state,val){
    //     state.termSaveed=val;
    // }
};
const actions = {
    //添加学期信息
    async termAdd({commit},term){
        commit('ChangeShowPreloader',true,{root:true})
        axios.post("/sys/mark/termAdd/",term)
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
            //通知父状态关闭preloader
            //通知父状态对话框显示
            commit('Dialog', errdialog,{root:true})
        })
        //commit('test',null,{root:true})//根
        //commit('test')//自己
        //commit('test11/test')无法实现，得通过父域来实现中介再去调用另一个兄弟
    }
};
const getters = {

};
const methods={
    termAdd_cb(res,commit){
        if (res.data.error) {
            let errdialog = {
                status: true,
                title: "出错了",
                message: '错误' + res.data.message
            }
            //关闭加载器
            //commit('ChangeShowPreloader', false);
            //commit('Dialog', errdialog)
            //commit('test')
                       
            return;
        }
    },
};
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}