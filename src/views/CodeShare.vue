<template>
    <div class="fill-height">
        <v-row class="fill-height">
            <v-col cols="12" class="pa-0 fill-height">
                <codemirror ref="myCm"
                            class="fill-height"
                            v-model="code"
                            @input="sendText"
                            :options="codeOption">
                </codemirror>
            </v-col>
        </v-row>
        <v-snackbar
                top
                :color="color"
                v-model="snackbar"
        >
            {{text}}
            <v-btn
                    outlined
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>


</template>

<script>
    import SockJs from 'sockjs-client'
    import Stomp from 'webstomp-client'
    import axios from 'axios'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/theme/dracula.css'
    import 'codemirror/mode/javascript/javascript'
    import {codemirror} from 'vue-codemirror'
    import {codeOption} from "../utils/codemirror";

    export default {
        name: 'HelloWorld',
        data() {
            return {
                room: {
                    roomName: ' '
                },
                name: 'Member' + Math.floor(Math.random() * 30),
                text: '', // 스낵바
                color: '',
                snackbar: false,
                what: '',
                code: '',
                codeOption: codeOption,
                isConnect: false,
                isWriter: true,
                timeout: null,
                stompClient: null,
                url: 'http://localhost:8080',
            }
        },
        components: {
            codemirror
        },
        methods: {
            connect() {
                let socket = new SockJs(this.url + '/code-share');
                this.stompClient = Stomp.over(socket);
                this.stompClient.connect({}, frame => {
                    this.isConnect = true;
                    this.snackbarSetText('연결 성공.', 'indigo');

                    console.log('Connected: ' + frame);
                    this.stompClient.subscribe(`/subscribe/code/room/${this.$route.params.id}`,
                        message => {
                            let body = JSON.parse(message.body);
                            if (body.type === 'SHARE') {
                                if (body.author === this.name) {
                                    this.code = body.message;
                                } else {
                                    this.isWriter = false;
                                    this.code = body.message;
                                    setTimeout(() => {
                                        this.isWriter = true;
                                    }, 100);
                                }
                            } else {
                                this.$store.commit('SET_JOIN_MEMBERS', body);
                                console.log('JOINED', body);
                            }
                        });

                    this.stompClient.send('/publish/code/join'
                        , JSON.stringify({
                            roomId: this.$route.params.id,
                            author: this.name,
                            type: 'JOIN'
                        }));
                });
            },
            sendText() {
                if (this.isConnect) {
                    if (this.isWriter) {
                        clearTimeout(this.timeout);
                        this.timeout = setTimeout(() => {
                            this.stompClient.send('/publish/code/share',
                                JSON.stringify({
                                    roomId: this.$route.params.id,
                                    message: this.code,
                                    author: this.name,
                                    type: 'SHARE'
                                }));
                        }, 100);
                    }

                } else {
                    this.snackbarSetText('연결이 필요합니다.', 'error');
                }
            },
            snackbarSetText(text, color) {
                this.text = text;
                this.snackbar = true;
                this.color = color;

            }
        },
        created() {
            axios.get(`${this.url}/api/rooms/${this.$route.params.id}`)
                .then(res => {
                    this.room = res.data;
                    this.connect();
                })
                .catch(e => console.log(e));
        },
        beforeDestroy() {
            this.stompClient.send('/publish/code/disconnect'
                , JSON.stringify({
                    roomId: this.$route.params.id,
                    author: this.name,
                    type: 'JOIN'
                }));
        },
        destroyed() {
            this.stompClient.disconnect();
        },
    }
    ;
</script>

<style>
    .cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {
        height: 100% !important;
    }
</style>