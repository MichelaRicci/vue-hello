console.log('Vue Ok', Vue);

const app  = Vue.createApp({
  data() {
    return {
      text: 'Ciao Ciao!',

      src: 'img/image.jpeg',
    }
  },
});

app.mount('#root');