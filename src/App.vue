<template>
    <v-app>
        <NavBar/>
        <v-content style="padding-top: 24px">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import NavBar from "./views/NavBar";

    export default {
        name: 'App',

        components: {
            NavBar,
        },
    };
</script>

<style>
    a{
        color: white !important;
        text-decoration: none;
    }
</style>
