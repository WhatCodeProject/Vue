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
                <router-link to="/" class="btn btn--anim btn--danger">Start Cooperation</router-link>
                <router-link to="/register" class="btn btn--anim btn--info">Register Now</router-link>
                <div class="section__graphic"> 
                    <img src="@/assets/img/undraw_group_chat_v059.svg" alt />
                </div>
            </div>

            <v-row
            cols="7"
            align-center> 
            <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
            >
            <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            >
            <v-sheet
                :color="colors[i]"
                height="100%"
            >
                <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
            <div class="display-3">{{ slide }} Slide</div>
            </v-row>
            </v-sheet>
            </v-carousel-item>
            </v-carousel>
            </v-row>
        </section>
    </div>
</template>

<script>
import Typed from 'typed.js';

export default {
    name: 'Home',
    props: [],
    components: {},
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
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
