import axios from 'axios'
const state={
    marktest:'test is ok',
    showpreloader:false,
    termSaveed=false,
};
const mutations = {
    // termAdd(state){

    // }
    test(state){
        alert('这是子组件的test')
    },
    //设置loading图标显示变量
    setShowPreloader(state,val){
        state.showpreloader=val
    },
    //设置
};
const actions = {
    //添加学期信息
    async termAdd({commit},term){
        axios.post("/sys/mark/termAdd/",term)
        .then(function(res){
            methods.termAdd_cb(res,commit)
        })
        .catch(function(err){
            console.log("catch到的错误，" + err);
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
    }
};
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}