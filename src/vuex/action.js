function makeAction(type){
    return({dispatch},...args)=>dispatch(type,...args);
}

const initNote={
    id:+new Date(),
    title:'我的笔记',
    content:'第一篇笔记内容',
    favorite:false
};

//模拟初始化数据
const initData={
    show:'all',
    notes:[initNote],
    activeNote:initNote
};

export const initStore=({dispatch})=>{
    dispatch('INIT_STORE',initDatta);
};

//更新当前activeNote对象
export const updateActiveNote=makeAction('set_active_note');

//添加一个note对象
export const newNote=makeAction('new_note');

//删除一个note对象
export const deleteNote=makeAction('delete_note');
export const toggleFavorite=makeAction('toggle_favorite');
export const editNote=makeAction('edit_note');

//更新列表展示
export const updateShow=makeAction('set_show_all');