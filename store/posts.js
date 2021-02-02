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
  ]
});

export const getters = {
  getPosts: (state)=> state.all
}