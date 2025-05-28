"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "am"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.title": "Sweet Dreams Bakery",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.orderNow": "Order Now",
    "nav.cart": "Cart",

    // Menu items
    "menu.weddingCakes": "Wedding Cakes",
    "menu.birthdayCakes": "Birthday Cakes",
    "menu.cupcakes": "Cupcakes",
    "menu.customOrders": "Custom Orders",

    // Hero section
    "hero.badge": "Fresh Daily",
    "hero.title": "Delicious Cakes Made with Love",
    "hero.description":
      "From custom wedding cakes to birthday celebrations, we create beautiful and delicious cakes for every special occasion.",
    "hero.viewMenu": "View Our Menu",
    "hero.customOrders": "Custom Orders",

    // Cake menu
    "cakeMenu.title": "Our Delicious Cakes",
    "cakeMenu.subtitle": "Handcrafted with the finest ingredients for your special moments",
    "cakeMenu.popular": "Popular",
    "cakeMenu.addToCart": "Add to Cart",
    "cakeMenu.viewFullMenu": "View Full Menu",

    // Cake names and descriptions
    "cake.chocolate.name": "Classic Chocolate Cake",
    "cake.chocolate.description": "Rich chocolate sponge with chocolate ganache and fresh berries",
    "cake.vanilla.name": "Vanilla Bean Wedding Cake",
    "cake.vanilla.description": "Three-tier vanilla cake with buttercream roses and gold accents",
    "cake.redVelvet.name": "Red Velvet Delight",
    "cake.redVelvet.description": "Moist red velvet with cream cheese frosting and white chocolate shavings",
    "cake.lemon.name": "Lemon Raspberry Cake",
    "cake.lemon.description": "Light lemon sponge with raspberry filling and lemon buttercream",
    "cake.strawberry.name": "Strawberry Shortcake",
    "cake.strawberry.description": "Fresh strawberries with vanilla sponge and whipped cream",
    "cake.tiramisu.name": "Tiramisu Cake",
    "cake.tiramisu.description": "Coffee-soaked ladyfingers with mascarpone and cocoa dusting",

    // Categories
    "category.birthday": "Birthday",
    "category.wedding": "Wedding",
    "category.special": "Special",

    // Order page
    "order.title": "Place Your Order",
    "order.subtitle": "Choose how you'd like to order your delicious cakes",
    "order.backToHome": "Back to Home",
    "order.emailOrder": "Email Order",
    "order.emailTitle": "Order via Gmail",
    "order.emailDescription": "Send us an email with your cake order details",
    "order.directContact": "Direct Contact",
    "order.directTitle": "Contact Us Directly",
    "order.directDescription": "Speak with our team directly for personalized service",
    "order.sendEmail": "Send Email Order",
    "order.viewContact": "View Contact Options",

    // Contact details
    "contact.title": "Contact Us Directly",
    "contact.subtitle": "Choose your preferred way to reach us",
    "contact.backToOrder": "Back to Order Options",
    "contact.callUs": "Call Us",
    "contact.callDescription": "Speak directly with our team",
    "contact.callNow": "Call Now",
    "contact.facebook": "Facebook Messenger",
    "contact.facebookDescription": "Message us on Facebook",
    "contact.telegram": "Telegram",
    "contact.telegramDescription": "Chat with us on Telegram",

    // About section
    "about.badge": "About Us",
    "about.title": "Baking Dreams Since 1995",
    "about.description":
      "Sweet Dreams Bakery has been creating memorable moments through our delicious cakes for over 25 years. Our master bakers use only the finest ingredients to craft each cake with love and attention to detail.",
    "about.awardWinning": "Award Winning",
    "about.bestBakery": "Best Bakery 2023",
    "about.freshDaily": "Fresh Daily",
    "about.madeEveryMorning": "Made every morning",
    "about.happyCustomers": "10,000+ Happy",
    "about.satisfiedCustomers": "Satisfied customers",
    "about.madeWithLove": "Made with Love",
    "about.everySingleCake": "Every single cake",
  },
  am: {
    // Navigation
    "nav.title": "ጣፋጭ ሕልሞች ዳቦ ቤት",
    "nav.menu": "ምናሌ",
    "nav.about": "ስለ እኛ",
    "nav.contact": "ያግኙን",
    "nav.orderNow": "አሁን ይዘዙ",
    "nav.cart": "ጋሪ",

    // Menu items
    "menu.weddingCakes": "የሰርግ ኬኮች",
    "menu.birthdayCakes": "የልደት ኬኮች",
    "menu.cupcakes": "ካፕኬኮች",
    "menu.customOrders": "ልዩ ትዕዛዞች",

    // Hero section
    "hero.badge": "በየቀኑ ትኩስ",
    "hero.title": "በፍቅር የተሰሩ ጣፋጭ ኬኮች",
    "hero.description": "ከልዩ የሰርግ ኬኮች እስከ የልደት በዓላት፣ ለእያንዳንዱ ልዩ አጋጣሚ ቆንጆ እና ጣፋጭ ኬኮችን እንሰራለን።",
    "hero.viewMenu": "ምናሌያችንን ይመልከቱ",
    "hero.customOrders": "ልዩ ትዕዛዞች",

    // Cake menu
    "cakeMenu.title": "የእኛ ጣፋጭ ኬኮች",
    "cakeMenu.subtitle": "ለልዩ ጊዜያትዎ በምርጥ ንጥረ ነገሮች በእጅ የተሰሩ",
    "cakeMenu.popular": "ተወዳጅ",
    "cakeMenu.addToCart": "ወደ ጋሪ ይጨምሩ",
    "cakeMenu.viewFullMenu": "ሙሉ ምናሌ ይመልከቱ",

    // Cake names and descriptions
    "cake.chocolate.name": "ክላሲክ ቸኮሌት ኬክ",
    "cake.chocolate.description": "ከቸኮሌት ጋናሽ እና ትኩስ ቤሪዎች ጋር የበለጸገ ቸኮሌት ስፖንጅ",
    "cake.vanilla.name": "ቫኒላ ቢን የሰርግ ኬክ",
    "cake.vanilla.description": "ከቅቤ ክሬም ጽጌረዳዎች እና የወርቅ ማስዋቢያዎች ጋር ሶስት ደረጃ ቫኒላ ኬክ",
    "cake.redVelvet.name": "ቀይ ቬልቬት ደስታ",
    "cake.redVelvet.description": "ከክሬም ቺዝ ፍሮስቲንግ እና ነጭ ቸኮሌት ሼቪንግስ ጋር እርጥብ ቀይ ቬልቬት",
    "cake.lemon.name": "ሎሚ ራዝቤሪ ኬክ",
    "cake.lemon.description": "ከራዝቤሪ መሙላት እና ሎሚ ቅቤ ክሬም ጋር ቀላል ሎሚ ስፖንጅ",
    "cake.strawberry.name": "ስትሮቤሪ ሾርትኬክ",
    "cake.strawberry.description": "ከቫኒላ ስፖንጅ እና ተወተወ ክሬም ጋር ትኩስ ስትሮቤሪዎች",
    "cake.tiramisu.name": "ቲራሚሱ ኬክ",
    "cake.tiramisu.description": "ከማስካርፖን እና ኮኮዋ ዱስቲንግ ጋር በቡና የተጠጣ ሌዲፊንገርስ",

    // Categories
    "category.birthday": "ልደት",
    "category.wedding": "ሰርግ",
    "category.special": "ልዩ",

    // Order page
    "order.title": "ትዕዛዝዎን ያስቀምጡ",
    "order.subtitle": "ጣፋጭ ኬኮችዎን እንዴት መዘዝ እንደሚፈልጉ ይምረጡ",
    "order.backToHome": "ወደ ቤት ተመለስ",
    "order.emailOrder": "በኢሜል ዝዘዝ",
    "order.emailTitle": "በጂሜል ዝዘዝ",
    "order.emailDescription": "የኬክ ትዕዛዝ ዝርዝሮችዎን በኢሜል ይላኩልን",
    "order.directContact": "ቀጥተኛ ግንኙነት",
    "order.directTitle": "በቀጥታ ያግኙን",
    "order.directDescription": "ለግል አገልግሎት ከቡድናችን ጋር በቀጥታ ይነጋገሩ",
    "order.sendEmail": "የኢሜል ትዕዛዝ ላክ",
    "order.viewContact": "የመገናኛ አማራጮችን ይመልከቱ",

    // Contact details
    "contact.title": "በቀጥታ ያግኙን",
    "contact.subtitle": "የሚመርጡትን የመገናኛ መንገድ ይምረጡ",
    "contact.backToOrder": "ወደ ትዕዛዝ አማራጮች ተመለስ",
    "contact.callUs": "ይደውሉልን",
    "contact.callDescription": "ከቡድናችን ጋር በቀጥታ ይነጋገሩ",
    "contact.callNow": "አሁን ይደውሉ",
    "contact.facebook": "ፌስቡክ መሴንጀር",
    "contact.facebookDescription": "በፌስቡክ መልእክት ይላኩልን",
    "contact.telegram": "ቴሌግራም",
    "contact.telegramDescription": "በቴሌግራም ይወያዩ",

    // About section
    "about.badge": "ስለ እኛ",
    "about.title": "ከ1995 ጀምሮ ሕልሞችን እንጋግራለን",
    "about.description":
      "ጣፋጭ ሕልሞች ዳቦ ቤት ለ25 ዓመታት በላይ በጣፋጭ ኬኮቻችን የማይረሳ ጊዜያትን እየፈጠረ ነው። የእኛ ዋና ዳቦ ሰሪዎች እያንዳንዱን ኬክ በፍቅር እና በትኩረት ለመስራት ምርጥ ንጥረ ነገሮችን ብቻ ይጠቀማሉ።",
    "about.awardWinning": "ሽልማት አሸናፊ",
    "about.bestBakery": "ምርጥ ዳቦ ቤት 2023",
    "about.freshDaily": "በየቀኑ ትኩስ",
    "about.madeEveryMorning": "በየጠዋቱ የተሰራ",
    "about.happyCustomers": "10,000+ ደስተኛ",
    "about.satisfiedCustomers": "የረኩ ደንበኞች",
    "about.madeWithLove": "በፍቅር የተሰራ",
    "about.everySingleCake": "እያንዳንዱ ኬክ",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "am")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
