console.log('Vue Ok', Vue);

const app  = Vue.createApp({
  data() {
    return {
      text: 'Ciao Ciao!',
    
    }
  },
});

app.mount('#root')