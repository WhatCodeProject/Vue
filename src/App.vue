<template>
    <v-app>
        <NewNav/>
        <v-content style="padding-top: 24px">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import NewNav from "./views/NewNav";

    export default {
        name: 'App',

        components: {
            NewNav,
        },
    };
</script>

<style>
    a{
        color: white !important;
        text-decoration: none;
    }
</style>
