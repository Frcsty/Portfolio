var app = new Vue({
  el: '#app',
  data: {
    showMessage: false;
    message: 'Hello Vue.js!'
  },
  methods: {
    showProjects: function () {
      this.showMessage = true;
    }
  }
})
