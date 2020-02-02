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
    }
};

const actions = {};

export default {state, mutations, actions, getters}
