export default{
    test(state){
        alert('调用父mutaions成功')
    },
    EditAccFromListById(state,account,id){
        ;
    },
    DeleAccFromListById(state,id){
        ;
    },
    AddAccToList(state,account){
        ;
    },
    GetAccList(state,list){
        state.AccList=state.AccList.concat(list);
    },
    ClearAccList(state){
        state.AccList=[];
    },
    RestLastId(state){
        state.lastid='';
    },
    SetLastId(state,id){
        state.lastid=id;
    },
    ChangeAllowInfinite(state,value){
        state.allowInfinite=value;
    },
    ChangeShowPreloader(state,value){
        state.showPreloader=value;
    },
    Dialog(state,dialog){
        state.dialog=dialog;
    }
}