<template>
    <header>
        <nav class="nav">
            <div class="navbar__brand">
                <v-icon name="rocket" class="navbar__icon navbar__icon--logo"></v-icon>
                <router-link to="/" class="navbar__textbrand">What Code</router-link>
            </div>
            <span class="navbar__toggle">
                <v-icon
                    name="menu"
                    @click="navToggleState = !navToggleState"
                    class="navbar__icon navbar__toggle--icon"
                ></v-icon>
            </span>
            
            <ul class="navbar__nav navbar__nav--right" v-if="!isAuthorized">
                <li class="nav__item">
                    <a
                        href="https://github.com/WhatCodeProject"
                        target="_blank"
                        class="nav__link"
                    >
                    </a>
                </li>
                <li class="nav__item">
                    <router-link to="/login" class="nav__link nav__link--rounded">Login</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/register" class="nav__link nav__link--rounded">Sign Up</router-link>
                </li>
            </ul>
        </nav>
        <nav class="snav" v-bind:class="{'snav--shown': navToggleState}">
            <ul class="snav__nav" v-if="!isAuthorized">
                <li @click="this.closeSideNav" class="snav__item">
                    <router-link to="/" class="nav__link">Home</router-link>
                </li>
                <li @click="this.closeSideNav" class="snav__item">
                    <router-link to="/about" class="nav__link">About</router-link>
                </li>
                <li @click="this.closeSideNav" class="snav__item">
                    <router-link to="/login" class="nav__link nav__link--rounded">Login</router-link>
                </li>
                <li @click="this.closeSideNav" class="snav__item">
                    <router-link to="/register" class="nav__link nav__link--rounded">Register</router-link>
                </li>
                <li class="snav__item">
                    <a
                        href="https://github.com/WhatCodeProject"
                        target="_blank"
                        class="nav__link"
                    >
                        <v-icon name="logo-github" class="navbar__icon"></v-icon>
                    </a>
                </li>
            </ul>

            <ul class="snav__nav" v-if="isAuthorized">
                <li @click="this.closeSideNav" class="snav__item">
                    <router-link
                        v-if="Object.keys(user).length > 0"
                        :to="{name: 'UserProfile', params: { handle: user.handle}}"
                        class="nav__link nav__link--rounded"
                    >{{ user.handle }}</router-link>
                </li>
                <li @click="this.closeSideNav" class="snav__item">
                    <button
                        @click.prevent="logout"
                        class="nav__link nav__link--btn nav__link--rounded"
                    >Logout</button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'Navbar',
    components: {
        
    },
    data: function() {
        return {
            navToggleState: false
        };
    },
    computed: {
       
    },
    methods: {
       
    },
    created() {
       
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/navbar.scss';
</style>
