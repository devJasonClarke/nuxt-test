export const state = () => ({
  all: [
    {
      id: "jason",
      title: "Get them Bwoy",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quam autem corporis molestias. Asperiores consequatur illo, adipisci minus accusantium, quod, voluptates animi fugit atque nobis ut eos? Corrupti, nam facere! "
    },
    {
      id: "leroy",
      title: "run jhonny run",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quam autem corporis molestias. Asperiores consequatur illo, adipisci minus accusantium, quod, voluptates animi fugit atque nobis ut eos? Corrupti, nam facere! "
    },
    {
      id: "genna",
      title: "night nurse",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quam autem corporis molestias. Asperiores consequatur illo, adipisci minus accusantium, quod, voluptates animi fugit atque nobis ut eos? Corrupti, nam facere! "
    },
    {
      id: "bops",
      title: "Shara Drasner",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quam autem corporis molestias. Asperiores consequatur illo, adipisci minus accusantium, quod, voluptates animi fugit atque nobis ut eos? Corrupti, nam facere! "
    }
  ],
  counter: 0
});

export const getters = {
  getPosts: state => state.all,
  count: state => state.counter
};
export const actions = {
  addOne({ commit }) {
    commit("ADD_ONE");
  },
  list({commit}){
    
    commit('LIST_IT')
  }
};

export const mutations = {
  ADD_ONE: state => (state.counter += 23)
};
