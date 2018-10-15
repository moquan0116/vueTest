<template>
    <div>
        <p>{{ fullName }}</p>
        <p>
            <input placeholder="我是todo组件的input" ref="input">
        </p>
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: ['todo'],
    inject: ['getMap'],
    data () {
        return {
            message: 'Hello',
            firstName: 'Foo',
            lastName: 'Bar'
        };
    },
    created: function () {
        this.fullName = 'John Doeaa';
        console.log(1111);
        console.log(this.getMap());
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('');
        },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (newValue) {
                let names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    },
    methods: {
        focus: function () {
            this.$refs.input.focus();
        },
        msg: function () {
            alert('todo');
        }
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName;
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
