<template>
    <div id="app-7">
    </div>
</template>

<script>
export default {
    name: 'App',
    provide: function () {
        return {
            getMap: this.getMap
        };
    },
    data () {
        return {
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ],
            test: { id: 2, text: '随便其它什么人吃的东西' }
        };
    },
    created: function () {
        console.log(this.Test);
    },
    methods: {
        show: function () {
            this.$refs.test.msg();
        },
        getMap: function () {
            return '这是app根组件的getmap返回的数据';
        }
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
