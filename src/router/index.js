import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld1 from '@/components/HelloWorld1';
import HelloWorld from '@/components/HelloWorld';
import Watch from '@/components/Watch';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/hello',
            name: 'HelloWorld1',
            component: HelloWorld1
        },
        {
            path: '/watch',
            name: 'Watch',
            component: Watch
        }
    ]
});
