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
    id: "doro-wat",
    name: "Doro Wat",
    description: "Spicy chicken stew served with hard-boiled eggs",
    price: 16.99,
    image: "/images/doro-wat.jpg",
    category: "main-dishes"
  },
  {
    id: "kitfo",
    name: "Kitfo",
    description: "Minced raw beef seasoned with spices and served with collard greens",
    price: 15.99,
    image: "/images/kitfo.jpg",
    category: "main-dishes"
  },
  {
    id: "tibs",
    name: "Tibs",
    description: "Sautéed meat (beef, lamb, or chicken) with spices and vegetables",
    price: 14.99,
    image: "/images/tibs.jpg",
    category: "main-dishes"
  },
  {
    id: "shiro-wat",
    name: "Shiro Wat",
    description: "Ground chickpeas or lentils cooked with spices, often served with injera",
    price: 12.99,
    image: "/images/shiro-wat.jpg",
    category: "main-dishes",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "gomen",
    name: "Gomen",
    description: "Stewed collard greens flavored with garlic and spices",
    price: 11.99,
    image: "/images/gomen.jpg",
    category: "main-dishes",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "sambusas",
    name: "Sambusas",
    description: "Fried or baked pastries filled with lentils, meat, or vegetables",
    price: 6.99,
    image: "/images/sambusas.jpg",
    category: "appetizers",
    dietary: {
      vegetarian: true
    }
  },
  {
    id: "azifa",
    name: "Azifa",
    description: "Green lentil salad with onions, tomatoes, and a lemon dressing",
    price: 7.99,
    image: "/images/azifa.jpg",
    category: "appetizers",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "foul-medames",
    name: "Foul Medames",
    description: "Spiced fava bean stew, often served with bread",
    price: 8.99,
    image: "/images/foul-medames.jpg",
    category: "appetizers",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "berbere-cauliflower",
    name: "Berbere-Spiced Cauliflower",
    description: "Cauliflower florets sautéed with Ethiopian spices",
    price: 7.99,
    image: "/images/berbere-cauliflower.jpg",
    category: "appetizers",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "tej",
    name: "Tej",
    description: "Traditional Ethiopian honey wine, often homemade",
    price: 8.99,
    image: "/images/tej.jpg",
    category: "beverages"
  },
  {
    id: "t-ej",
    name: "T'ej",
    description: "Spiced coffee, served with a side of popcorn",
    price: 4.99,
    image: "/images/t-ej.jpg",
    category: "beverages",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "ethiopian-coffee",
    name: "Ethiopian Coffee",
    description: "Brewed in a traditional jebena and served with sugar",
    price: 3.99,
    image: "/images/ethiopian-coffee.jpg",
    category: "beverages",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "ambo",
    name: "Ambo",
    description: "Sparkling mineral water, popular in Ethiopian dining",
    price: 2.99,
    image: "/images/ambo.jpg",
    category: "beverages",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  }
] 