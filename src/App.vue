<template>
    <v-app>
        <NewNav
                v-if="this.$route.path !== '/home'"
        />
        <v-content>
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
    a {
        color: white !important;
        text-decoration: none;
    }

    .container {
        padding-top: 0;
        padding-bottom: 0;
    }
</style>
