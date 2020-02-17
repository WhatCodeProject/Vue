const state = {
    isInCodeRoom: false,
    joinMembers:[]
};

const getters = {};

const mutations = {
    IN_CODE_ROOM(state){
        state.isInCodeRoom = true;
    },
    SET_JOIN_MEMBERS(state, joinMembers){
        state.joinMembers = joinMembers;
    },
    CLEAR_JOIN_MEMBERS(state){
        state.joinMembers = [];
    }
};

const actions = {};

export default {state, mutations, actions, getters}
