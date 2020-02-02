<template>
    <div class="fill-height">
        <v-row class="fill-height" align="center" justify="center">

            <v-card
                    width="400"
                    class="ma-auto"
            >
                <v-toolbar
                        color="deep-purple accent-4"
                        dark
                >
                    <v-spacer/>
                    <v-toolbar-title>Code Rooms</v-toolbar-title>
                    <v-spacer/>

                </v-toolbar>

                <v-list subheader class="pa-3">

                    <div v-if="rooms.length !== 0">
                        <v-list-item
                                v-for="room in rooms"
                                :key="room.id"
                                @click=""
                        >
                            <v-list-item-content>
                                <h3 class="font-weight-bold">{{room.roomName}}</h3>
                            </v-list-item-content>

                            <v-list-item-icon>
                                <v-btn outlined color="indigo" @click="moveToRoom(room)">입장</v-btn>
                            </v-list-item-icon>
                        </v-list-item>
                    </div>
                </v-list>
            </v-card>
        </v-row>
    </div>
</template>

<script>
    import axios from 'axios';
    import {router} from "../routes/route";

    export default {
        name: "Rooms",
        data() {
            return {
                rooms: [],
                url: 'http://localhost:8080',
            }
        },
        methods: {
            moveToRoom(room) {
                router.push(`/room/${room.roomId}`);
                this.$store.commit('IN_CODE_ROOM');
            }
        },
        created() {
            axios.get(`${this.url}/api/rooms`)
                .then(response => this.rooms = response.data)
                .catch(error => console.log(error));

        },

    }
</script>

<style scoped>

</style>