import axios from "@nuxtjs/axios";

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
  counter: 0,
  list: {}
});

export const getters = {
  getPosts: state => state.all,
  count: state => state.counter,
  list: state => state.list
};
export const actions = {
  addOne({ commit }) {
    commit("ADD_ONE");
  },
 async list({ commit }) {
    let j = await this.$axios.get("https://jsonplaceholder.typicode.com/posts/12");
    commit("LIST_IT", j);
  }
};

export const mutations = {
  ADD_ONE: state => (state.counter += 23),
  LIST_IT: (state,j) => state.list = j.data
};
