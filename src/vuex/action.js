import axios from 'axios'
import state from "./state";

export default{
    EditAccFromListById({commit},account,id){
        commit('EditAccFromListById',account,id);
    },
    DeleAccFromListById({commit},id){
        commit('DeleAccFromListById',id);
    },
    AddAccToList({commit},account){
        commit('AddAccToList',account)
    },
    GetAccList({commit},query){
        if(!state.allowInfinite) return;
        commit('ChangeAllowInfinite',false);
        axios({
            method:'POST',
            url:'/sys/search',
            data:{
                pagesize:query.pagesize,
                keyword:query.search,
                lastid:state.lastid
            }
        })
        .then(function(res){
          let records = res.data.result.recordset;
          let recordsCount = res.data.result.count;
          if (!res.data.error) {
            if (records.length != 0) {
              commit('SetLastId',records[records.length - 1]._id)
              commit('GetAccList',records)
              if(state.AccList.length>=recordsCount){
                  commit('ChangeShowPreloader',false);
                  commit('ChangeAllowInfinite',false);
              }
              console.log(
                "找到" + recordsCount + "记录,当前记录数：" + state.AccList.length
              );

            } else {
                let errdialog={
                    status:true,
                    title:"提示",
                    message:'未找到任何相关记录'
                }
                commit('Dialog',errdialog)
              //app.dialog.alert("未找到任何相关记录", "提示");
              //self.$$("#preloader").hide();
              return;
            }
          } else {
            let errdialog={
                status:true,
                title:"出错了",
                message:'错误'+ res.data.message
            }
            commit('Dialog',errdialog)
            //app.dialog.alert("错误：" + res.data.message, "出错了1");
            //console.log(res.data.message);
          }
          //self.allowInfinite = true;
          commit('ChangeAllowInfinite',true);
        })
        .catch(function(err){
            console.log("catch到的错误，"+err);
            let errdialog={
                status:true,
                title:'系统出错',
                message:'错误：'+err
            }
            commit('Dialog',errdialog);
            commit('ChangeAllowInfinite',true);
        })
    }
}