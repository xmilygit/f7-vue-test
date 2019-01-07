import axios from 'axios'
const state={
    marktest:'test is ok'
};
const mutations = {
    // termAdd(state){

    // }
    test(state){
        alert('这是子组件的test')
    }
};
const actions = {
    //添加学期信息
    termAdd({commit},term){
        // axios.post("/sys/mark/termAdd/",term)
        // .then(termAdd_cb)
        // .catch(function(err){
        //     console.log("catch到的错误，" + err);
        // })
        commit('test',null,{root:true})//根
        commit('test')//自己
        //commit('test11/test')无法实现，得通过父域来实现中介再去调用另一个兄弟
    }
};
const getters = {

};
const methods={
    termAdd_cb(res){

    }
};
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}