//first array is dresses and secound array is shoes
const data = [
  {
    category: "shoes",
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    data: [
      {
        title: "Stylish blue shoe",
        imageUrl:
          "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80",
        price:  "25$",
        id: 1,
      },
      {
        title: "Nude boots",
        imageUrl:
          "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        price: "55$",
        id: 2,
      },
      {
        title: "running shoes",
        imageUrl:
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: "55$",
        id: 3,
      },
    ],
  },

  {
    category: "dresses",
    imageUrl:
      "https://images.unsplash.com/photo-1595156210483-560123baba96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    data: [
      {
        title: "Dott dress",
        imageUrl:
          "https://images.unsplash.com/photo-1528812969535-4bcefc071532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBkcmVzc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        price: "25$",
        id: 20,
      },
      {
        title: "Red dress",
        imageUrl:
          "https://images.unsplash.com/photo-1633077705107-8f53a004218f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
        price: "25$",
        id: 21,
      },
      {
        title: "Indian Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1614098097306-c67b8020c04e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBkcmVzc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        price: "35$",
        id: 22,
      },
    ],
  },

  {
    category: "coats",
    imageUrl:
      "https://images.unsplash.com/photo-1514313996915-89d3aff2b79e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
    data: [
      {
        title: "Beautiful Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        price: "25$",
        id: 40,
      },
      {
        title: "Red Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1591900947067-851789555ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: "45$",
        id: 41,
      },
      {
        title: "Warm Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1545912193-41b5212f30ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: "55$",
        id: 42,
      },
    ],
  },

  {
    category: "jewelry",
    imageUrl:
      "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    data: [
      {
        title: "moon nickles",
        imageUrl:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: "5$",
        id: 60,
      },
      {
        title: "stylish rings",
        imageUrl:
          "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: "5$",
        id: 61,
      },
      {
        title: "pink rings",
        imageUrl:
          "https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: "5$",
        id: 62,
      },
    ],
  },
];

export default data;
