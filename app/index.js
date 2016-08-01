
import './main.scss';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';
import Vue from 'vue';
import Home from './view/home.vue';

module.exports = new Vue({
  el:'body',
  components: { Home }
});

// module.exports = Vue.extend({
//   el(){
//     return 'body'
//   },
//   components() {
//     return Home
//   }
// });
// module.exports = Vue.extend({
//   el: function () {
//     return '#home'
//   },
//   data: function () {
//     return {
//       name: 'CJH'
//     }
//   },
//   computed: {},
//   ready: function () {
//     alert('welcome');
//   },
//   attached: function () {},
//   methods: {},
//   components: {}
// });
// class Index extends Vue {
//   constructor(){
//     var props = {
//       el: '#Index',
//       data: {
//         name: 'cjh'
//       },
//       components: {
//         Home
//       }
//     }
//     super(props)
//   }
// }
// console.log(Index);
// module.exports = Index;
// module.exports = Home;

// module.exports = new Vue({
//   el: 'body',
//   components: { Home }
// })
// let app = document.createElement('div');
// const myPromise = Promise.resolve(42);
//
// myPromise.then((number) => {
//   $('body').append('<p>promise result is'
//   +number + ' now is ' + moment().format() + '</p>');
// });
//
// app.innerHTML = '<h1> Hello world it </h>';
// document.body.appendChild(app);
// app.appendChild(generateText());
