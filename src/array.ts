interface pizza {
  id: number;
  name: string;
  image: string;
  desc: string;
  price: number;
}

let pizzas: pizza[] = [
  {
    id: 1,
    name: "Chicago Pizza",
    image: "/images/chicago-pizza.jpg",
    desc: "The pan in which it is baked gives the pizza its characteristically high edge which provides ample space for large amounts of cheese and a chunky tomato sauce.",
    price: 9,
  },
  {
    id: 2,
    name: "Neapolitan Pizza",
    image: "/images/neapolitan-pizza.jpg",
    desc: "This style of pizza is prepared with simple and fresh ingredients: a basic dough, raw tomatoes, fresh mozzarella cheese, fresh basil, and olive oil. A fantastic original pizza.",
    price: 7,
  },
  {
    id: 3,
    name: "New York Pizza",
    image: "/images/ny-pizza.jpg",
    desc: "New York-style pizza has slices that are large and wide with a thin crust that is foldable yet crispy. It is traditionally topped with tomato sauce and mozzarella cheese.",
    price: 8,
  },
  {
    id: 4,
    name: "Sicilian Pizza",
    image: "/images/sicilian-pizza.jpg",
    desc: "Sicilian pizza is pizza prepared in a manner that originated in Sicily, Italy. Sicilian pizza is also known as sfincione or focaccia with toppings. A great tasteful pizza all around.",
    price: 9,
  },
];

export default pizzas;
