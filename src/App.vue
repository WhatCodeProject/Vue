<template>
    <v-app>
        <!-- <NewNav/> -->
        <!-- <Sidebar/> -->
        <TopNav/>
        <TeamRoom/>
        <v-content style="padding-top: 24px">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import NewNav from "./views/NewNav";
    import TopNav from "./views/TopNav";
    import TeamRoom from "./views/TeamRoom";
    export default {
        name: 'App',

        components: {
            NewNav,
            TopNav,
            TeamRoom,
        },
    };
</script>

<style scoped>
    a{
        color: white !important;
        text-decoration: none;
    }
</style>
