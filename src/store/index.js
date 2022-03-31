import { createStore } from 'vuex'

export default createStore({
  //Informacion que se muestra o maneja dentro de la App (Variables,cambios de informacion, etc)
  state: {
    contador: 0
  },
  //Metodos de entrada para recuperar la información del state
  getters: {
    cuadrado(state){
      return state.contador * state.contador;
    }
  },
  //Para hacer modificaciones dentro de la información del estado
  mutations: { //Usar commit para llamar informacion
    subirContador(state, random) {
      state.contador += random;
    },
    bajarContador(state,random) {
      state.contador -=random;
    }
  },
  //Misma función que las mutaciones, solo que las acciones si pueden tener código async (Ej. Recuperar info de un API)
  actions: { //usar dispatch para llamar informacion 
    async subirContador({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("subirContador",results)
    },
    async bajarContador({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("bajarContador",results)
    }
  },
  //Condicionales de navegación
  modules: {
  }
})
