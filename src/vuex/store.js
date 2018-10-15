import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

//需要维护的状态
const state={
    notes:[],
    activeNote:{},
    show:''
};

const mutations={
    //初始化state
    init_store(state,data){
        state.notes=data.notes,
        state.show-data.show;
        state.activeNote=data.activeNote;
    },
    //新增笔记
    new_note(state){
        var newnote={
            id:+new Date(),
            title:'',
            content:'',
            favorite:false
        };
        state.notes.push(newnote);
        state.activeNote=newnote;
    },
    //修改笔记
    edit_note(state,note){
        state.activeNote=note;
        //修改原始数据
        for(var i=0;i<state.notes.length;i++){
            if(state.notes[i].id===note.id){
                state.notes[i]=note;
                break;
            }
        }
    },
    //删除笔记
    delete_note(state){
        state.notes.$remove(state.activeNote);
        state.activeNote=state.notes[0]||{}
    },
    //切换笔记的收藏与取消收藏
    toggle_favorite(state){
        state.activeNote.favorite=!state.activeNote.favorite;
    },
    //切换显示数据列表类型：全部 or 收藏
    set_show_all(state,show){
        state.show=show;
        //切换数据展示，需要同步更新activeNote
        if(show==='favorite'){
            state.activeNote=state.notes.filter(note=>note.favorite)[0]
        }else{
            state.activeNote=state.notes[0]||{};
        }
    },
    //设置当前激活的笔记
    set_active_note(state,note){
        state.activeNote=note;
    }
};

export default new vuex.Store({
    state,
    mutations
});