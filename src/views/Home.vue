<template>
    <div class="page home">
        <hr color="white">
        <section class="section section__landing">
            <div class="section__heading">
                <span class="section__title"></span>
            </div>
            <div class="section__content public">
                <p
                    class="section__lead"
                >Realtime co-op application created by Vue and Spring Boot.
                Create A Room, Join a Room, Chat with people!
                </p>
                <router-link to="/" class="btn btn--anim btn--danger">Cooperation</router-link>
                <router-link to="/register" class="btn btn--anim btn--info">Register Now</router-link>
                <div class="section__graphic">
                    <img src="@/assets/img/undraw_group_chat_v059.svg" alt />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Typed from 'typed.js';

export default {
    name: 'Home',
    props: [],
    components: {},
    mounted() {
        let options = {
            strings: [
                'Experience Realtime Cooperation',
                'Connect And Chat with Friends'
            ],
            typeSpeed: 100,
            loop: true
        };

        new Typed('.section__title', options);
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base.scss';
</style>
