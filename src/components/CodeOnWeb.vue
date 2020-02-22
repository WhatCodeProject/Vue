<template>
    <v-container
            style="max-width: 700px"
            class="pa-5"
    >
        <div class="mx-auto">
            <v-btn v-if="!isConnect" @click="connect"
                   text color="red" outlined class="mx-3">연결시작
            </v-btn>
            <div v-else>
                <v-btn @click="disConnect"
                       text color="blue" outlined class="mx-3 ">연결해지
                </v-btn>
            </div>
        </div>
        <div>

            <v-row>
                <v-col cols="12">
                    <v-textarea
                            v-model="value"
                            outlined
                            name="input-7-4"
                            class="mt-5"
                            label="코드를 입력하세요"
                            placeholder="..."
                            @keyup="sendText(value)"
                            type="text"
                    />
                </v-col>
                <v-col cols="12">
                    <codemirror ref="myCm"
                                v-model="code"
                                @input="log"
                                :options="cmOptions">
                    </codemirror>
                </v-col>
            </v-row>
        </div>
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
    </v-container>
</template>

<script>
    import SockJs from 'sockjs-client'
    import Stomp from 'webstomp-client'

    import 'codemirror/lib/codemirror.css'
    import 'codemirror/lib/codemirror'
    import 'codemirror/theme/dracula.css'
    import 'codemirror/mode/xml/xml.js'
    import 'codemirror/mode/javascript/javascript'
    import 'codemirror/mode/jsx/jsx'
    import 'codemirror/addon/hint/javascript-hint'
    import 'codemirror/addon/selection/active-line'
    import 'codemirror/addon/edit/matchbrackets'
    
    import {codemirror} from 'vue-codemirror'
    
    export default {
        name: 'CodeonWeb',
        data() {
            return {
                text: '',
                value: '',
                color: '',
                what: '',
                code: 'const a = 10',
                isConnect: false,
                snackbar: false,
                stompClient: null,
                stompClientWhat: null,
                url: 'http://localhost:8080',
                getTest: '',
                cmOptions: {
                    tabSize: 4,
                    mode:'javascript',
                    theme: 'dracula',
                    lineNumbers: true,
                    styleActiveLine: true,
                    matchBrackets: true,
                    line: true,
                }

            }
        },
        components:{
            codemirror
        },
        methods: {
            connect() {
                let socket = new SockJs(this.url + '/gs-guide-websocket');
                this.stompClient = Stomp.over(socket);
                this.stompClient.connect({}, frame => {
                    this.changeIsConnect()
                    console.log('Connected: ' + frame);
                    this.stompClient.subscribe('/topic/greetings', message => {
                        console.log(message);
                        this.setText(JSON.parse(message.body).content)
                    });

                });

                // let socketWhat = new SockJs(this.url + '/whatCodeTest');
                // this.stompClientWhat = Stomp.over(socketWhat);
                // this.stompClientWhat.connect({}, frame => {
                //         this.changeIsConnect();
                //         this.snackbarSetText('연결 완료', 'black');
                //         console.log('Connected: ' + frame);
                //         this.stompClientWhat.subscribe('/topic/whatcode', message => {
                //                 console.log(message);
                //                 this.setTextWhat(JSON.parse(message.body).content)
                //             }
                //         );
                //     }
                // )
                ;
            },
            log(){
                console.log(this.code)
                console.log(JSON.stringify(this.code))
            },
            disConnect() {
                if (this.stompClient !== null) {
                    this.stompClient.disconnect();
                    this.changeIsConnect();
                    this.snackbarSetText('연결 해제 완료', 'black');
                    console.log("Disconnected");
                }
            }
            ,
            sendTextWhat(value) {
                this.stompClient.send('/app/hello/whatcode', JSON.stringify({'name': value}),);
            }
            ,
            sendText(value) {
                if (this.isConnect) {
                    this.stompClient.send('/app/hello', JSON.stringify({'name': value}),);
                } else {
                    this.snackbarSetText('연결이 필요합니다.', 'error');
                }
            }
            ,
            changeIsConnect() {
                this.isConnect = !this.isConnect;
            }
            ,
            setText(message) {
                console.log('setText')
                this.value = message;
            }
            ,
            setTextWhat(message) {
                console.log('setTextWhat')
                this.what = message;
            }
            ,
            snackbarSetText(text, color) {
                this.text = text;
                this.snackbar = true;
                this.color = color;
            }
        },
        created() {
            this.connect();
        }
    }
    ;

</script>