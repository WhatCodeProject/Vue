<template>
    <v-container>
        <v-app-bar
                app
                color=#40b09b
                dense

        >
            <v-app-bar-nav-icon class="white--text" @click.stop="navDrawer = !navDrawer"/>

            <v-toolbar-title class="mr-12 align-center">
                <span class="title white--text font-weight-bold">
                    <router-link to="/">WhatCode</router-link>
                </span>
            </v-toolbar-title>
            <v-spacer/>

            <v-btn to="/register" depressed class="mr-4" color="white" outlined>Sign Up</v-btn>
            <v-btn to="/login" depressed color="white" outlined>
                Login
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer
                v-model="navDrawer"
                :color="color"
                :expand-on-hover="expandOnHover"
                :mini-variant="false"
                :right="right"
                dark
                app
        >
            <v-list
                    dense
                    nav
                    class="py-0"
            >
                <v-list-item two-line :class="miniVariant && 'px-0'">
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/men/81.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Application</v-list-item-title>
                        <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>

                <v-list-item
                        class="mt-4"
                        link
                        @click="save"
                >
                    <v-list-item-action>
                        <v-icon color="grey darken-1">save</v-icon>
                    </v-list-item-action>
                    <v-list-item-title class="grey--text text--darken-1">Save Code</v-list-item-title>
                </v-list-item>

                <v-list-item link @click="settings">
                    <v-list-item-action>
                        <v-icon color="grey darken-1">mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-title class="grey--text text--darken-1">Settings</v-list-item-title>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-action>
                        <v-icon color="grey darken-1">mdi-send</v-icon>
                    </v-list-item-action>
                    <v-list-item-title class="grey--text text--darken-1">Share Code</v-list-item-title>
                </v-list-item>

            </v-list>
            <v-divider/>

            <div v-if="isInCodeRoom">
                <div class="text-center">
                    <h3 class="mt-4 white--text font-weight-bold text--darken-1">접속 유저</h3>
                </div>
                <v-list>
                    <v-list-item
                            v-for="item in joinMembers"
                            :key="item"
                            link
                    >
                        <v-list-item-avatar>
                            <img
                                    :src="`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`"
                                    alt=""
                            >
                        </v-list-item-avatar>

                        <v-list-item-title v-text="item"/>
                        <v-icon color="green">mdi-circle</v-icon>
                    </v-list-item>
                </v-list>
            </div>
        </v-navigation-drawer>


    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                drawer: true,
                navDrawer: true,
                items: [
                    {title: 'Add Channels', icon: 'add'},
                    {title: 'Messanger', icon: 'chat'},
                ],
                color: '#40b09b',
                colors: [
                    'primary',
                    'blue',
                    'success',
                    'red',
                    'teal',
                ],
                right: false,
                miniVariant: false,
                expandOnHover: false,
                background: false,
            }
        },
        computed: {
            isInCodeRoom() {
                return this.$store.state.common.isInCodeRoom;
            },
            joinMembers() {
                return this.$store.state.common.joinMembers;
            }
        },
        methods: {
            save() {
                alert("Save Code");
            },
            settings() {
            },
        },
    }
</script>