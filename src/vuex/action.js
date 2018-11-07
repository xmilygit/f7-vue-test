export default{
    EditAccFromListById({commit},account,id){
        commit('EditAccFromListById',account,id);
    },
    DeleAccFromListById({commit},id){
        commit('DeleAccFromListById',id);
    },
    AddAccToList({commit},account){
        commit('AddAccToList',account)
    }
}