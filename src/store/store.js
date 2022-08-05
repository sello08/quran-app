import { createStore } from 'vuex'
 

export default  createStore({


  state: {
      selectedChapterId:null,
      isShowing: false,
      lang:"en",
      
    },
  mutations: {
      updateChapterId(state, payload){
        state.selectedChapterId = payload
      },
      updateIsShowing(state){
        state.isShowing = !state.isShowing
      },
      updateLang(state, payload){
        state.lang = payload
      },
    }
})

