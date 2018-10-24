import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        uid: null
    },
    mutations: {
        update_log_state (state, { uid }) {
            state.uid = uid;
        },
        delete_log_state (state, { uid }) {
            state.uid = null;
        }   
    },
    actions: {
        logIn (context, { uid }){
            context.commit('update_log_state', { uid });
        },
        logOut(context, { uid }){
            context.commit('delete_log_state', { uid })
        }
    }
});