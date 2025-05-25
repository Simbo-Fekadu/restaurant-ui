export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "burgers" | "sides" | "drinks" | "desserts"
  dietary?: {
    vegetarian?: boolean
    vegan?: boolean
    glutenFree?: boolean
  }
}

export const menuItems: MenuItem[] = [
  {
    id: "classic-burger",
    name: "Classic Burger",
    description: "100% Angus beef patty with lettuce, tomato, onion, and our special sauce",
    price: 12.99,
    image: "/images/classic.jpg",
    category: "burgers"
  },
  {
    id: "cheese-lover",
    name: "Cheese Lover's Dream",
    description: "Double patty with four types of cheese, caramelized onions, and bacon",
    price: 15.99,
    image: "/images/cheese.jpg",
    category: "burgers"
  },
  {
    id: "veggie-delight",
    name: "Veggie Delight",
    description: "Plant-based patty with avocado, sprouts, and vegan mayo",
    price: 13.99,
    image: "/images/veggie.jpg",
    category: "burgers",
    dietary: {
      vegetarian: true,
      vegan: true
    }
  },
  {
    id: "spicy-jalapeno",
    name: "Spicy Jalapeño",
    description: "Pepper jack cheese, fresh jalapeños, chipotle mayo, and crispy onions",
    price: 14.99,
    image: "/images/spicy.jpg",
    category: "burgers"
  },
  {
    id: "fries",
    name: "Classic Fries",
    description: "Crispy golden fries with our signature seasoning",
    price: 4.99,
    image: "/images/menu/fries.jpg",
    category: "sides",
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    description: "Beer-battered onion rings with ranch dipping sauce",
    price: 5.99,
    image: "/images/menu/onion-rings.jpg",
    category: "sides",
    dietary: {
      vegetarian: true
    }
  },
  {
    id: "milkshake",
    name: "Classic Milkshake",
    description: "Hand-spun vanilla, chocolate, or strawberry milkshake",
    price: 6.99,
    image: "/images/menu/milkshake.jpg",
    category: "drinks",
    dietary: {
      vegetarian: true
    }
  },
  {
    id: "brownie",
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie with vanilla ice cream",
    price: 7.99,
    image: "/images/menu/brownie.jpg",
    category: "desserts",
    dietary: {
      vegetarian: true
    }
  }
] 