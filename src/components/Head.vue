<template>
  <div class="hello">
      dsfdsf
  </div>
</template>

<script>
export default {
    name: 'Head',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    created: function () {
        console.log(111);
        /* this.axios.get().then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        }); */
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 1200px;
  height: 100px;
  background: #ccc;
}
</style>
