export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "main-dishes" | "appetizers" | "beverages"
  dietary?: {
    vegetarian?: boolean
    vegan?: boolean
    glutenFree?: boolean
  }
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Pad Thai",
    description: "Classic Thai stir-fried rice noodles with tofu, peanuts, and tamarind sauce",
    price: 450,
    image: "/images/pad-thai.jpg",
    category: "main-dishes",
    dietary: {
      vegetarian: true,
      vegan: true
    }
  },
  {
    id: "2",
    name: "Ramen",
    description: "Japanese wheat noodles in rich broth with chashu pork, egg, and vegetables",
    price: 550,
    image: "/images/ramen.jpg",
    category: "main-dishes"
  },
  {
    id: "3",
    name: "Pho",
    description: "Vietnamese rice noodles in beef broth with herbs and bean sprouts",
    price: 500,
    image: "/images/pho.jpg",
    category: "main-dishes"
  },
  {
    id: "4",
    name: "Lo Mein",
    description: "Chinese egg noodles stir-fried with vegetables and choice of protein",
    price: 400,
    image: "/images/lo-mein.jpg",
    category: "main-dishes",
    dietary: {
      vegetarian: true
    }
  },
  {
    id: "5",
    name: "Vegetable Stir Fry Noodles",
    description: "Mixed vegetables with rice noodles in savory sauce",
    price: 350,
    image: "/images/veg-stir-fry.jpg",
    category: "main-dishes",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "6",
    name: "Spring Rolls",
    description: "Fresh rice paper rolls with vegetables and herbs",
    price: 180,
    image: "/images/spring-rolls.jpg",
    category: "appetizers",
    dietary: {
      vegetarian: true,
      vegan: true
    }
  },
  {
    id: "7",
    name: "Dumplings",
    description: "Steamed or fried dumplings with vegetable filling",
    price: 200,
    image: "/images/dumplings.jpg",
    category: "appetizers",
    dietary: {
      vegetarian: true
    }
  },
  {
    id: "8",
    name: "Edamame",
    description: "Steamed soybeans with sea salt",
    price: 150,
    image: "/images/edamame.jpg",
    category: "appetizers",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "9",
    name: "Seaweed Salad",
    description: "Fresh seaweed with sesame dressing",
    price: 180,
    image: "/images/seaweed-salad.jpg",
    category: "appetizers",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "10",
    name: "Green Tea",
    description: "Traditional Japanese green tea",
    price: 80,
    image: "/images/green-tea.jpg",
    category: "beverages",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "11",
    name: "Thai Iced Tea",
    description: "Sweetened black tea with condensed milk",
    price: 100,
    image: "/images/thai-tea.jpg",
    category: "beverages",
    dietary: {
      vegetarian: true
    }
  },
  {
    id: "12",
    name: "Bubble Tea",
    description: "Milk tea with tapioca pearls",
    price: 150,
    image: "/images/bubble-tea.jpg",
    category: "beverages",
    dietary: {
      vegetarian: true
    }
  },
  {
    id: "13",
    name: "Fresh Coconut Water",
    description: "Natural coconut water served in the shell",
    price: 120,
    image: "/images/coconut.jpg",
    category: "beverages",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  }
] 