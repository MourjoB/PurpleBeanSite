export const categoryStructure = {
  'Flavoured Coffee': [],
  'Plain Coffee': ['Spray Dried', 'Agglomerated', 'Freeze Dried'],
  'Premix': {
    'Tea Premix': ['Cafe Premix', 'Vending Machine Premix'],
    'Coffee Premix': ['Cafe Premix', 'Vending Machine Premix']
  },
  'Coffee Beans': {
    'Green Beans': ['Arabica Cherry', 'Arabica Plantation','Robusta Cherry', 'Robusta Plantation'],
    'Roasted Beans': ['Arabica Cherry', 'Arabica Plantation','Robusta Cherry', 'Robusta Plantation'],
  },
  'Tea': {
    'Instant Tea': [],
    'Iced Tea': [],
    'Amrutuleya': [],
    'CTC Tea': [],
    'Flavoured Tea': [],
    'Tea Extract': [ 'Green','Black']
  },
  'Crystal Coffee': [],
  'Others': [],
};

export const products = [
  
  // {
  //   id: 1,
  //   name: 'Premium Vanilla Coffee',
  //   category: 'Flavoured Coffee',
  //   description: 'Rich vanilla-flavored coffee blend with aromatic beans',
  //   detailedDescription: 'Our Premium Vanilla Coffee combines the finest Arabica beans with natural vanilla extracts to create a smooth, aromatic blend perfect for cafes and restaurants. Each batch is carefully roasted to bring out the perfect balance of coffee richness and vanilla sweetness.',
  //   image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
  //   features: ['100% Arabica Beans', 'Natural Vanilla Extract', 'Medium Roast', 'Bulk Packaging Available'],
  //   rating: 4.9,
  //   price: 'From ₹450/kg',
  //   specifications: {
  //     'Bean Type': '100% Arabica',
  //     'Roast Level': 'Medium',
  //     'Flavor Profile': 'Vanilla, Smooth',
  //     'Packaging': '1kg, 5kg, 25kg',
  //     'Shelf Life': '12 months'
  //   }
  // },

  // {
  //   id: 1,
  //   name: 'Cafe Latte',
  //   category: 'Flavoured Coffee',
  //   description: 'Smooth and creamy latte blend for a classic café experience',
  //   detailedDescription: 'Our Cafe Latte blend features a perfect mix of rich Arabica coffee and creamy flavor for that timeless café taste. Ideal for cafés, restaurants, and instant beverage solutions, it delivers barista-style flavor in every cup.',
  //   image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
  //   features: ['100% Arabica Beans', 'Creamy Milk Blend', 'Medium Roast', 'Bulk Packaging Available'],
  //   rating: 4.8,
  //   price: 'From ₹450/kg',
  //   specifications: {
  //     'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
  //     'Flavor Profile': 'Creamy, Smooth, Rich',
  //     'Packaging': 'CUSTOM',
  //     'Shelf Life': '12 months'
  //   }
  // },
  // {
  //   id: 2,
  //   name: 'Butterscotch Flavoured Coffee',
  //   category: 'Flavoured Coffee',
  //   description: 'A rich, buttery coffee infused with sweet butterscotch flavor',
  //   detailedDescription: 'This Butterscotch Flavoured Coffee offers a luscious combination of rich coffee and sweet, buttery butterscotch flavor. Perfect for indulgent coffee breaks and dessert-inspired menus.',
  //   image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
  //   features: ['100% Arabica Beans', 'Natural Butterscotch Flavor', 'Medium Roast', 'Bulk Packaging Available'],
  //   rating: 4.9,
  //   price: 'From ₹450/kg',
  //   specifications: {
  //     'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
  //     'Flavor Profile': 'Butterscotch, Sweet, Buttery',
  //     'Packaging': 'CUSTOM',
  //     'Shelf Life': '12 months'
  //   }
  // },
  {
    id: 3,
    name: 'Peppermint Flavoured Coffee',
    category: 'Flavoured Coffee',
    description: 'Refreshing peppermint-infused coffee with a cooling finish',
    detailedDescription: 'Our Peppermint Flavoured Coffee delivers a refreshing minty twist to your daily brew. Crafted with premium Arabica beans and natural peppermint, it’s a bold and invigorating experience.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['100% Arabica Beans', 'Natural Peppermint Flavor', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.7,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Minty, Refreshing, Bold',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 4,
    name: 'Strawberry Cheesecake Coffee',
    category: 'Flavoured Coffee',
    description: 'Dessert-inspired coffee with strawberry and creamy cheesecake notes',
    detailedDescription: 'Enjoy a decadent cup with our Strawberry Cheesecake Coffee. This unique blend combines the fruity sweetness of strawberries with the rich taste of cheesecake for a dessert-like coffee treat.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['100% Arabica Beans', 'Strawberry Cheesecake Flavor', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.9,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Fruity, Creamy, Dessert-Inspired',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 5,
    name: 'Vodka Flavoured Coffee | Non Alcoholic',
    category: 'Flavoured Coffee',
    description: 'A bold coffee with the essence of vodka — completely non-alcoholic',
    detailedDescription: 'Our Vodka Flavoured Coffee gives a unique and bold taste of vodka without alcohol. A daring and elegant choice for those who enjoy adventurous flavor profiles in their coffee.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['100% Arabica Beans', 'Vodka-Inspired Flavor', 'Non-Alcoholic', 'Bulk Packaging Available'],
    rating: 4.8,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Vodka-Inspired, Smooth, Bold',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 6,
    name: 'Rum Flavoured Coffee | Non Alcoholic',
    category: 'Flavoured Coffee',
    description: 'Non-alcoholic rum-flavored coffee with deep caramel notes',
    detailedDescription: 'Enjoy the exotic richness of rum in our Non-Alcoholic Rum Flavoured Coffee. This blend delivers warm, sweet, and spiced flavors perfect for indulgent sipping without any alcohol.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['100% Arabica Beans', 'Rum Flavor (Non-Alcoholic)', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.8,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Caramel, Spiced, Rum-Inspired',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 7,
    name: 'Brandy Flavoured Coffee | Non Alcoholic',
    category: 'Flavoured Coffee',
    description: 'Elegant brandy-flavored coffee without alcohol',
    detailedDescription: 'Brandy Flavoured Coffee offers a refined and mature flavor, reminiscent of aged brandy but entirely alcohol-free. Ideal for premium hospitality environments and connoisseurs.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['100% Arabica Beans', 'Brandy Flavor (Non-Alcoholic)', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.9,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Warm, Aged, Brandy-Inspired',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 8,
    name: 'Beer Flavoured Coffee | Non Alcoholic',
    category: 'Flavoured Coffee',
    description: 'Unique coffee with a hint of beer-inspired taste — zero alcohol',
    detailedDescription: 'This Beer Flavoured Coffee is a one-of-a-kind blend, offering subtle notes of hops and malt, bringing a craft beer essence to your cup — all without alcohol. Great for novelty cafés and adventurous menus.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['100% Arabica Beans', 'Beer-Inspired Flavor', 'Non-Alcoholic', 'Bulk Packaging Available'],
    rating: 4.7,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Hoppy, Malty, Beer-Inspired',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
   {
    id: 9,
    name: 'Cold Coffee Premix',
    category: 'Flavoured Coffee',
    description: 'Instant cold coffee premix with a rich creamy taste',
    detailedDescription: 'Our Cold Coffee Premix is a quick and delicious solution for refreshing beverages. Perfectly balanced with premium coffee and milk solids, this premix delivers the classic cold coffee taste instantly.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['Instant Ready Mix', 'Creamy Texture', 'No Brewing Required', 'Bulk Packaging Available'],
    rating: 4.8,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Cold, Creamy, Rich',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 10,
    name: 'Vanilla Flavoured Coffee',
    category: 'Flavoured Coffee',
    description: 'Smooth vanilla coffee blend for a rich, aromatic experience',
    detailedDescription: 'Vanilla Flavoured Coffee blends the sweetness of vanilla with robust coffee to create a soothing and delightful beverage. Ideal for dessert menus, cafés, and vending machines.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['Smooth Vanilla Flavor', 'Aromatic Blend', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.9,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Sweet, Vanilla, Smooth',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 11,
    name: 'Hazelnut Coffee',
    category: 'Flavoured Coffee',
    description: 'Nutty hazelnut-flavored coffee for a gourmet brew',
    detailedDescription: 'Hazelnut Coffee offers a creamy, nutty flavor paired with high-quality coffee. It’s a favorite among gourmet coffee lovers and makes an excellent option for café menus.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['Hazelnut Essence', 'Rich Body', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.8,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Nutty, Creamy, Gourmet',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 12,
    name: 'Chocolate Coffee',
    category: 'Flavoured Coffee',
    description: 'A delightful fusion of chocolate and premium coffee',
    detailedDescription: 'Our Chocolate Coffee is crafted to bring out a balanced taste of rich cocoa and bold coffee, making it a perfect beverage for dessert lovers and café menus.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['Chocolate Infusion', 'Bold Cocoa Taste', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.9,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Chocolatey, Rich, Bold',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 13,
    name: 'Cappuccino Coffee',
    category: 'Flavoured Coffee',
    description: 'Classic cappuccino flavor with creamy foam essence',
    detailedDescription: 'Cappuccino Coffee delivers the signature blend of bold coffee and creamy milk foam. A café-style coffee in an instant form, perfect for vending, cafés, and hotels.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['Creamy Cappuccino Flavor', 'Rich Foam Layer', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.7,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Milky, Bold, Smooth',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 14,
    name: 'Mocha Coffee',
    category: 'Flavoured Coffee',
    description: 'Chocolate-coffee fusion with a smooth and velvety finish',
    detailedDescription: 'Mocha Coffee is the perfect mix of coffee and cocoa, offering a slightly sweet yet full-bodied beverage. Great for cafes and those who love chocolate undertones in their coffee.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['Chocolate & Coffee Blend', 'Smooth Finish', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.8,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Mocha, Rich, Chocolatey',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 15,
    name: 'Super Strong Coffee',
    category: 'Flavoured Coffee',
    description: 'Intensely strong coffee for the boldest palates',
    detailedDescription: 'Our Super Strong Coffee is crafted for those who enjoy intense, highly caffeinated brews. Designed to deliver a powerful kick and deep coffee notes with every sip.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['High Caffeine Content', 'Bold Roast', 'Deep Flavor', 'Bulk Packaging Available'],
    rating: 4.9,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Bold, Robust, Intense',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 16,
    name: 'Caramel Flavoured Coffee',
    category: 'Flavoured Coffee',
    description: 'Smooth caramel-blended coffee with a rich, sweet aroma',
    detailedDescription: 'This Caramel Flavoured Coffee is a sweet indulgence, blending smooth caramel flavor with expertly roasted coffee beans. A great fit for dessert menus or premium vending offerings.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['Caramel Essence', 'Smooth Finish', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.8,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Sweet, Creamy, Caramel',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 17,
    name: 'Strawberry Flavoured Coffee',
    category: 'Flavoured Coffee',
    description: 'Fruity strawberry notes paired with rich coffee',
    detailedDescription: 'Strawberry Flavoured Coffee brings together juicy strawberry flavor with a medium-bodied coffee base, creating a fun and fruity option for cafes and novelty menus.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['Strawberry Aroma', 'Fruity Finish', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.7,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Fruity, Sweet, Refreshing',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 18,
    name: 'Mango Flavoured Coffee',
    category: 'Flavoured Coffee',
    description: 'Tropical mango infused coffee for an exotic brew',
    detailedDescription: 'Mango Flavoured Coffee offers a refreshing tropical twist to traditional coffee. A creative and exotic beverage perfect for novelty and seasonal café menus.',
    image: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    features: ['Mango Essence', 'Tropical Notes', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.6,
    price: 'From ₹450/kg',
    specifications: {
      'Variant': 'Strong Inst. Powder, Extra Strong Inst. Powder',
      'Flavor Profile': 'Tropical, Sweet, Fruity',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },

  // {
  //   id: 19,
  //   name: 'Classic NDC',
  //   category: 'NDC',
  //   description: 'Non-Dairy Creamer powder for coffee applications',
  //   detailedDescription: 'Our Classic NDC is a high-quality non-dairy creamer specifically formulated for coffee applications. It provides excellent whitening, smooth texture, and enhanced mouthfeel to coffee beverages.',
  //   image: 'https://images.pexels.com/photos/4117625/pexels-photo-4117625.jpeg',
  //   features: ['Non-Dairy', 'Excellent Whitening', 'Smooth Texture', 'Coffee Optimized'],
  //   rating: 4.4,
  //   price: 'From ₹240/kg',
  //   specifications: {
  //     'Type': 'Non-Dairy Creamer',
  //     'Solubility': 'Instantly Soluble',
  //     'Protein': '2-4%',
  //     'Packaging': 'CUSTOM',
  //     'Shelf Life': '24 months'
  //   }
  // },
  // {
  //   id: 20,
  //   name: 'Premium NDC',
  //   category: 'NDC',
  //   description: 'Premium grade non-dairy creamer with rich texture',
  //   detailedDescription: 'Our Premium NDC is crafted to deliver a creamier mouthfeel and richer body. Designed for premium coffee blends and vending applications requiring top-quality whiteners.',
  //   image: 'https://images.pexels.com/photos/4117625/pexels-photo-4117625.jpeg',
  //   features: ['High Quality', 'Smooth Mouthfeel', 'Enhanced Creaminess', 'Vending Friendly'],
  //   rating: 4.6,
  //   price: 'From ₹240/kg',
  //   specifications: {
  //     'Type': 'Non-Dairy Creamer',
  //     'Solubility': 'Instantly Soluble',
  //     'Protein': '2-4%',
  //     'Packaging': 'CUSTOM',
  //     'Shelf Life': '24 months'
  //   }
  // },
  // {
  //   id: 21,
  //   name: 'Budget NDC',
  //   category: 'NDC',
  //   description: 'Cost-effective non-dairy creamer for mass use',
  //   detailedDescription: 'Budget NDC is formulated to offer reliable performance in coffee applications at a competitive price point. A popular choice for high-volume vending and institutional use.',
  //   image: 'https://images.pexels.com/photos/4117625/pexels-photo-4117625.jpeg',
  //   features: ['Economical', 'Instant Mix', 'Good Whitening', 'Bulk Friendly'],
  //   rating: 4.2,
  //   price: 'From ₹240/kg',
  //   specifications: {
  //     'Type': 'Non-Dairy Creamer',
  //     'Solubility': 'Instantly Soluble',
  //     'Protein': '2-4%',
  //     'Packaging': 'CUSTOM',
  //     'Shelf Life': '24 months'
  //   }
  // },
  // {
  //   id: 22,
  //   name: 'High Protein NDC',
  //   category: 'NDC',
  //   description: 'Protein-enriched non-dairy creamer for functional use',
  //   detailedDescription: 'This High Protein NDC variant is enriched with added protein content, providing additional nutritional benefits without compromising on solubility and mouthfeel.',
  //   image: 'https://images.pexels.com/photos/4117625/pexels-photo-4117625.jpeg',
  //   features: ['Added Protein', 'Nutritional Boost', 'Smooth Consistency', 'Functional Use'],
  //   rating: 4.5,
  //   price: 'From ₹240/kg',
  //   specifications: {
  //     'Type': 'Non-Dairy Creamer',
  //     'Solubility': 'Instantly Soluble',
  //     'Protein': '4-6%',
  //     'Packaging': 'CUSTOM',
  //     'Shelf Life': '24 months'
  //   }
  // },
  {
    id: 25,
    name: 'Kadak Chai / Plain Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Strong and traditional plain tea premix',
    detailedDescription: 'Our Kadak Chai Premix delivers the classic strong flavor loved across India. It’s formulated for quick preparation in vending machines and cafes, offering consistency in every cup.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Strong Flavor', 'Easy Brewing', 'Ideal for Vending', 'Consistent Taste'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 26,
    name: 'Elaichi Chai / Cardamom Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Cardamom-flavored aromatic chai premix',
    detailedDescription: 'Elaichi Chai Premix blends the soothing fragrance of cardamom with rich tea to provide a refreshing and aromatic beverage ideal for hospitality and offices.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Cardamom Aroma', '3-in-1 Formula', 'Quick Serve', 'Rich Taste'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Cardamom Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 27,
    name: 'Adrak / Ginger Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Spicy ginger tea premix for bold flavor lovers',
    detailedDescription: 'Our Adrak Chai Premix is infused with ginger extract to deliver a bold, spicy flavor perfect for invigorating your senses and boosting energy throughout the day.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Ginger Infused', 'Bold Flavor', 'Ready in Seconds', 'Cafe-Grade Quality'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Ginger Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 28,
    name: 'Masala Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Spiced Indian masala tea premix blend',
    detailedDescription: 'Masala Chai Premix brings together a harmonious mix of Indian spices like clove, cinnamon, and cardamom for a flavorful and energizing tea experience.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Indian Spices', 'Rich Aroma', 'Instant Preparation', 'Spiced Warmth'],
    rating: 4.8,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Masala Spices',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 29,
    name: 'Gujrati Masala Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Traditional Gujrati-style spicy masala tea premix',
    detailedDescription: 'Experience the authentic flavors of Gujarat with this regional masala chai premix — a perfect balance of spice and tea for true chai lovers.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Gujrati Spice Blend', 'Instantly Brewable', 'Strong Flavor', 'Regional Taste'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Regional Spices',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 30,
    name: 'Hyderabadi Masala Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Hyderabadi-style spiced chai premix',
    detailedDescription: 'This Hyderabadi Masala Chai Premix offers a deep, spiced flavor profile representative of Hyderabad’s rich culinary heritage, perfect for tea enthusiasts seeking something special.',

    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',    features: ['Bold Spices', 'Regional Specialty', 'Quick Serve', 'Robust Taste'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Masala Flavoring',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 31,
    name: 'Parsi Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Light, sweetened Parsi-style tea premix',
    detailedDescription: 'Our Parsi Chai Premix is crafted to deliver a lighter tea experience with subtle sweetness and a unique taste profile ideal for niche tea cafes and homes.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Subtle Sweetness', 'Unique Flavor', 'Parsi-Style Blend', 'Light Aroma'],
    rating: 4.3,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 32,
    name: 'Bombay Cutting Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Street-style Bombay cutting chai premix',
    detailedDescription: 'This Cutting Chai Premix captures the bold punch of Mumbai’s iconic tea stalls in every cup, with a strong and stimulating tea experience.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Mumbai Street Style', 'Strong Flavor', 'Quick Serve', 'Authentic Experience'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 33,
    name: 'Puneri Amruttulya Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Traditional Puneri Amruttulya style tea premix',
    detailedDescription: 'Our Puneri Amruttulya Chai brings the richness of milk tea served in Pune’s iconic Amruttulya style. It’s a thick, satisfying tea blend made easy for modern preparation.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Milky and Rich', 'Pune Specialty', 'Instant Premix', 'Full-Bodied Flavor'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 34,
    name: 'Gud Basundi Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Jaggery-flavored rich basundi-style tea premix',
    detailedDescription: 'Our Gud Basundi Chai Premix blends the richness of basundi (sweetened milk) with natural jaggery flavor, offering a wholesome and traditional tea experience.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Jaggery Based', 'Basundi Flavor', 'Traditional Taste', 'Easy to Prepare'],
    rating: 4.4,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Jaggery, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 35,
    name: 'Sugar Basundi Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Sweetened basundi-style milk tea premix',
    detailedDescription: 'Sugar Basundi Chai is a rich and sweetened tea premix inspired by the Indian dessert Basundi, offering a creamy indulgent flavor perfect for evening tea times.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Creamy Flavor', 'Sweetened Basundi Notes', 'Instant Brew', 'Traditional Sweet Taste'],
    rating: 4.3,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 36,
    name: 'Pudina Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Refreshing mint-flavored tea premix',
    detailedDescription: 'Our Pudina Chai Premix brings a refreshing twist to traditional tea with natural mint flavor that soothes the palate and enhances the overall tea-drinking experience.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Mint Infused', 'Cooling Taste', 'Digestive Benefits', 'Quick Brew'],
    rating: 4.2,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Mint Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 37,
    name: 'Kesar / Zaffran Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Premium saffron-infused tea premix',
    detailedDescription: 'Kesar Chai Premix is a luxurious blend infused with the rich aroma and taste of real saffron, delivering a regal tea experience loved in upscale cafes and homes.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Saffron Infused', 'Royal Aroma', 'Premium Blend', 'Instant Preparation'],
    rating: 4.8,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Saffron Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 38,
    name: 'Irani Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Classic Irani-style thick tea premix',
    detailedDescription: 'Inspired by the iconic Irani cafés, this premix is creamy and strong, offering the authentic thick tea taste loved in Hyderabad and Mumbai tea houses.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Thick & Creamy', 'Authentic Irani Flavor', 'Easy to Serve', 'Retro Café Style'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 39,
    name: 'Chocolate Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Chocolate-flavored tea premix',
    detailedDescription: 'Our Chocolate Tea Premix offers a delightful fusion of rich cocoa and strong tea, perfect for customers who enjoy a chocolaty twist in their tea.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Cocoa Infused', 'Unique Taste', 'Dessert-Like Blend', 'Quick Brew'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Cocoa Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 40,
    name: 'Paan Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Unique paan-flavored tea premix',
    detailedDescription: 'Paan Tea Premix blends the traditional flavor of betel leaves (paan) with tea to create a refreshing and novel beverage experience ideal for experimentation and niche markets.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Paan Flavored', 'Refreshing & Bold', 'Creative Fusion', 'Easy Preparation'],
    rating: 4.2,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Paan Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 41,
    name: 'Gulkand Paan Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Rose gulkand-infused paan chai premix',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',    detailedDescription: 'A royal fusion of rose petal preserve (gulkand) and paan flavors, this Gulkand Paan Chai Premix brings a soothing floral aroma and exotic taste to your tea menu.',
    features: ['Gulkand Fusion', 'Floral Aroma', 'Specialty Tea', 'Instant Serve'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Gulkand Paan Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 42,
    name: 'Rose Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Floral rose-flavored tea premix',
    detailedDescription: 'Rose Tea Premix is delicately infused with natural rose flavor, providing a soothing and fragrant cup perfect for unwinding and relaxing moments.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Natural Rose Essence', 'Fragrant & Light', 'Floral Taste', 'Easy to Brew'],
    rating: 4.3,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Rose Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 43,
    name: 'Rum Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Rum-flavored non-alcoholic tea premix',
    detailedDescription: 'Our Rum Tea Premix captures the essence of classic rum flavor in a non-alcoholic tea, delivering a warm and indulgent drink for sophisticated palates.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Non-Alcoholic Rum Flavor', 'Warm Taste', 'Elegant Profile', 'Fast Brewing'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Rum Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 44,
    name: 'Gud Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Traditional jaggery-based chai premix',
    detailedDescription: 'Gud Chai brings the wholesome sweetness of jaggery to your cup. A comforting tea premix that offers a traditional taste with a healthful twist.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Jaggery Sweetened', 'Natural Ingredients', 'Rich Flavor', 'Ready to Use'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Jaggery, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 45,
    name: 'Caramel Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Sweet caramel flavored tea premix',
    detailedDescription: 'Caramel Tea offers a luxurious blend of sweet caramel essence with smooth tea, perfect for cafes and lounges.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Caramel Infused', 'Creamy Texture', 'Easy Brewing', 'Delightfully Sweet'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Caramel, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 46,
    name: 'Butterscotch Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Smooth butterscotch flavored tea premix',
    detailedDescription: 'Butterscotch Tea is a creamy and buttery tea variant, offering an indulgent twist to your regular tea experience.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Buttery Sweetness', 'Rich Aroma', 'Instant Preparation', 'Unique Flavor'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Butterscotch, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 47,
    name: 'Vanilla Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Soothing vanilla flavored tea premix',
    detailedDescription: 'Vanilla Tea delivers a mellow and comforting flavor, crafted for those who enjoy subtle sweet notes in their brew.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Mild Vanilla Notes', 'Aromatic Blend', 'Quick Brewing', 'Elegant Taste'],
    rating: 4.4,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Vanilla, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 48,
    name: 'Tulsi Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Herbal Tulsi infused tea premix',
    detailedDescription: 'Tulsi Tea is infused with holy basil for a rejuvenating and immunity-boosting tea experience, perfect for health-conscious consumers.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Immunity Booster', 'Herbal Flavor', 'Natural Tulsi Extract', 'Quick Preparation'],
    rating: 4.8,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Tulsi Extract, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 49,
    name: 'Lemon (No Milk) Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Refreshing lemon tea premix without milk',
    detailedDescription: 'Lemon Tea (No Milk) offers a tangy and invigorating tea option, perfect for detox routines and summer refreshments.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['No Milk', 'Tangy Lemon Taste', 'Detox Friendly', 'Quick Brew'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Lemon Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 50,
    name: 'Black (No Milk) Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Bold black tea premix without milk',
    detailedDescription: 'Black Tea (No Milk) is a strong and pure tea variant, appreciated by tea lovers who enjoy robust flavors and minimal ingredients.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['No Milk', 'Bold Flavor', 'Simple Ingredients', 'Quick Serve'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 51,
    name: 'Masala Black (No Milk) Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Spicy masala tea premix without milk',
    detailedDescription: 'Masala Black Tea (No Milk) delivers the rich taste of Indian spices blended into robust black tea — all without milk.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Spiced Blend', 'No Milk', 'Authentic Masala', 'Instant Brew'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Masala Spices',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 52,
    name: 'Whiskey Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Flavored tea premix with whiskey essence',
    detailedDescription: 'Whiskey Tea offers a unique and sophisticated tea experience with the aroma and taste of whiskey — all non-alcoholic.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Non-Alcoholic', 'Bold Taste', 'Whiskey Aroma', 'Easy Preparation'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Whiskey Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 53,
    name: 'Vodka Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Vodka flavored tea premix for bold sips',
    detailedDescription: 'Vodka Tea brings a playful and bold twist to your tea break with its signature vodka flavor profile — alcohol-free.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Vodka Essence', 'Non-Alcoholic', 'Fun & Flavorful', 'Quick Prep'],
    rating: 4.4,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Vodka Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 54,
    name: 'Brandy Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Brandy inspired flavored tea premix',
    detailedDescription: 'Brandy Tea is a cozy blend with the warm notes of brandy flavor, great for creating a premium tea experience — without any alcohol.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Brandy Notes', 'Warm Flavor', 'No Alcohol', 'Cafe Ready'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Brandy Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 55,
    name: 'Beer Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Unique beer-flavored tea premix',
    detailedDescription: 'Beer Tea is a one-of-a-kind tea offering that delivers the nostalgic flavor of beer in a non-alcoholic, cafe-friendly tea format.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Beer Inspired', 'Non-Alcoholic', 'Refreshing Profile', 'Quick to Serve'],
    rating: 4.3,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Beer Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 56,
    name: 'Kadak Chai / Plain Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Strong and traditional plain tea premix',
    detailedDescription: 'Our Kadak Chai Premix delivers the classic strong flavor loved across India. It’s formulated for quick preparation in vending machines and cafes, offering consistency in every cup.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Strong Flavor', 'Easy Brewing', 'Ideal for Vending', 'Consistent Taste'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 57,
    name: 'Elaichi Chai / Cardamom Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Cardamom-flavored aromatic chai premix',
    detailedDescription: 'Elaichi Chai Premix blends the soothing fragrance of cardamom with rich tea to provide a refreshing and aromatic beverage ideal for hospitality and offices.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Cardamom Aroma', '3-in-1 Formula', 'Quick Serve', 'Rich Taste'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Cardamom Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 58,
    name: 'Adrak / Ginger Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Spicy ginger tea premix for bold flavor lovers',
    detailedDescription: 'Our Adrak Chai Premix is infused with ginger extract to deliver a bold, spicy flavor perfect for invigorating your senses and boosting energy throughout the day.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Ginger Infused', 'Bold Flavor', 'Ready in Seconds', 'Cafe-Grade Quality'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Ginger Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 59,
    name: 'Masala Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Spiced Indian masala tea premix blend',
    detailedDescription: 'Masala Chai Premix brings together a harmonious mix of Indian spices like clove, cinnamon, and cardamom for a flavorful and energizing tea experience.',
    features: ['Indian Spices', 'Rich Aroma', 'Instant Preparation', 'Spiced Warmth'],
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    rating: 4.8,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Masala Spices',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 60,
    name: 'Gujrati Masala Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Traditional Gujrati-style spicy masala tea premix',
    detailedDescription: 'Experience the authentic flavors of Gujarat with this regional masala chai premix — a perfect balance of spice and tea for true chai lovers.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Gujrati Spice Blend', 'Instantly Brewable', 'Strong Flavor', 'Regional Taste'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Regional Spices',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 61,
    name: 'Hyderabadi Masala Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Hyderabadi-style spiced chai premix',
    detailedDescription: 'This Hyderabadi Masala Chai Premix offers a deep, spiced flavor profile representative of Hyderabad’s rich culinary heritage, perfect for tea enthusiasts seeking something special.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Bold Spices', 'Regional Specialty', 'Quick Serve', 'Robust Taste'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Masala Flavoring',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 62,
    name: 'Parsi Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Light, sweetened Parsi-style tea premix',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',    detailedDescription: 'Our Parsi Chai Premix is crafted to deliver a lighter tea experience with subtle sweetness and a unique taste profile ideal for niche tea cafes and homes.',
    features: ['Subtle Sweetness', 'Unique Flavor', 'Parsi-Style Blend', 'Light Aroma'],
    rating: 4.3,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 63,
    name: 'Bombay Cutting Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Street-style Bombay cutting chai premix',
    detailedDescription: 'This Cutting Chai Premix captures the bold punch of Mumbai’s iconic tea stalls in every cup, with a strong and stimulating tea experience.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Mumbai Street Style', 'Strong Flavor', 'Quick Serve', 'Authentic Experience'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 64,
    name: 'Puneri Amruttulya Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Traditional Puneri Amruttulya style tea premix',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',    detailedDescription: 'Our Puneri Amruttulya Chai brings the richness of milk tea served in Pune’s iconic Amruttulya style. It’s a thick, satisfying tea blend made easy for modern preparation.',
    features: ['Milky and Rich', 'Pune Specialty', 'Instant Premix', 'Full-Bodied Flavor'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 65,
    name: 'Gud Basundi Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Jaggery-flavored rich basundi-style tea premix',
    detailedDescription: 'Our Gud Basundi Chai Premix blends the richness of basundi (sweetened milk) with natural jaggery flavor, offering a wholesome and traditional tea experience.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',    
    features: ['Jaggery Based', 'Basundi Flavor', 'Traditional Taste', 'Easy to Prepare'],
    rating: 4.4,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Jaggery, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 66,
    name: 'Sugar Basundi Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Sweetened basundi-style milk tea premix',
    detailedDescription: 'Sugar Basundi Chai is a rich and sweetened tea premix inspired by the Indian dessert Basundi, offering a creamy indulgent flavor perfect for evening tea times.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Creamy Flavor', 'Sweetened Basundi Notes', 'Instant Brew', 'Traditional Sweet Taste'],
    rating: 4.3,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 67,
    name: 'Pudina Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Refreshing mint-flavored tea premix',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',    
    detailedDescription: 'Our Pudina Chai Premix brings a refreshing twist to traditional tea with natural mint flavor that soothes the palate and enhances the overall tea-drinking experience.',
    features: ['Mint Infused', 'Cooling Taste', 'Digestive Benefits', 'Quick Brew'],
    rating: 4.2,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Mint Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 68,
    name: 'Kesar / Zaffran Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Premium saffron-infused tea premix',
    detailedDescription: 'Kesar Chai Premix is a luxurious blend infused with the rich aroma and taste of real saffron, delivering a regal tea experience loved in upscale cafes and homes.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Saffron Infused', 'Royal Aroma', 'Premium Blend', 'Instant Preparation'],
    rating: 4.8,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Saffron Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 69,
    name: 'Irani Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Classic Irani-style thick tea premix',
    detailedDescription: 'Inspired by the iconic Irani cafés, this premix is creamy and strong, offering the authentic thick tea taste loved in Hyderabad and Mumbai tea houses.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Thick & Creamy', 'Authentic Irani Flavor', 'Easy to Serve', 'Retro Café Style'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 70,
    name: 'Chocolate Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Chocolate-flavored tea premix',
    detailedDescription: 'Our Chocolate Tea Premix offers a delightful fusion of rich cocoa and strong tea, perfect for customers who enjoy a chocolaty twist in their tea.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Cocoa Infused', 'Unique Taste', 'Dessert-Like Blend', 'Quick Brew'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Cocoa Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 71,
    name: 'Paan Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Unique paan-flavored tea premix',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',    detailedDescription: 'Paan Tea Premix blends the traditional flavor of betel leaves (paan) with tea to create a refreshing and novel beverage experience ideal for experimentation and niche markets.',
    features: ['Paan Flavored', 'Refreshing & Bold', 'Creative Fusion', 'Easy Preparation'],
    rating: 4.2,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Paan Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 72,
    name: 'Gulkand Paan Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Rose gulkand-infused paan chai premix',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Gulkand Fusion', 'Floral Aroma', 'Specialty Tea', 'Instant Serve'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Gulkand Paan Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 73,
    name: 'Rose Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Floral rose-flavored tea premix',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',    detailedDescription: 'Rose Tea Premix is delicately infused with natural rose flavor, providing a soothing and fragrant cup perfect for unwinding and relaxing moments.',
    features: ['Natural Rose Essence', 'Fragrant & Light', 'Floral Taste', 'Easy to Brew'],
    rating: 4.3,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Rose Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 74,
    name: 'Rum Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Rum-flavored non-alcoholic tea premix',
    detailedDescription: 'Our Rum Tea Premix captures the essence of classic rum flavor in a non-alcoholic tea, delivering a warm and indulgent drink for sophisticated palates.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Non-Alcoholic Rum Flavor', 'Warm Taste', 'Elegant Profile', 'Fast Brewing'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer, Rum Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 75,
    name: 'Gud Chai',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Traditional jaggery-based chai premix',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',   
    detailedDescription: 'Gud Chai brings the wholesome sweetness of jaggery to your cup. A comforting tea premix that offers a traditional taste with a healthful twist.',
    features: ['Jaggery Sweetened', 'Natural Ingredients', 'Rich Flavor', 'Ready to Use'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Jaggery, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 76,
    name: 'Caramel Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Sweet caramel flavored tea premix',
    detailedDescription: 'Caramel Tea offers a luxurious blend of sweet caramel essence with smooth tea, perfect for cafes and lounges.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Caramel Infused', 'Creamy Texture', 'Easy Brewing', 'Delightfully Sweet'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Caramel, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 77,
    name: 'Butterscotch Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Smooth butterscotch flavored tea premix',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',    
    detailedDescription: 'Butterscotch Tea is a creamy and buttery tea variant, offering an indulgent twist to your regular tea experience.',
    features: ['Buttery Sweetness', 'Rich Aroma', 'Instant Preparation', 'Unique Flavor'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Butterscotch, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 78,
    name: 'Vanilla Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Soothing vanilla flavored tea premix',
    detailedDescription: 'Vanilla Tea delivers a mellow and comforting flavor, crafted for those who enjoy subtle sweet notes in their brew.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Mild Vanilla Notes', 'Aromatic Blend', 'Quick Brewing', 'Elegant Taste'],
    rating: 4.4,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Vanilla, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 79,
    name: 'Tulsi Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Herbal Tulsi infused tea premix',
    detailedDescription: 'Tulsi Tea is infused with holy basil for a rejuvenating and immunity-boosting tea experience, perfect for health-conscious consumers.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Immunity Booster', 'Herbal Flavor', 'Natural Tulsi Extract', 'Quick Preparation'],
    rating: 4.8,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Tulsi Extract, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 80,
    name: 'Lemon (No Milk) Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Refreshing lemon tea premix without milk',
    detailedDescription: 'Lemon Tea (No Milk) offers a tangy and invigorating tea option, perfect for detox routines and summer refreshments.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['No Milk', 'Tangy Lemon Taste', 'Detox Friendly', 'Quick Brew'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Lemon Flavor',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 81,
    name: 'Black (No Milk) Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Bold black tea premix without milk',
    detailedDescription: 'Black Tea (No Milk) is a strong and pure tea variant, appreciated by tea lovers who enjoy robust flavors and minimal ingredients.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['No Milk', 'Bold Flavor', 'Simple Ingredients', 'Quick Serve'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 82,
    name: 'Masala Black (No Milk) Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Spicy masala tea premix without milk',
    detailedDescription: 'Masala Black Tea (No Milk) delivers the rich taste of Indian spices blended into robust black tea — all without milk.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Spiced Blend', 'No Milk', 'Authentic Masala', 'Instant Brew'],
    rating: 4.7,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Masala Spices',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 83,
    name: 'Whiskey Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Flavored tea premix with whiskey essence',
    detailedDescription: 'Whiskey Tea offers a unique and sophisticated tea experience with the aroma and taste of whiskey — all non-alcoholic.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Non-Alcoholic', 'Bold Taste', 'Whiskey Aroma', 'Easy Preparation'],
    rating: 4.5,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Whiskey Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 84,
    name: 'Vodka Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Vodka flavored tea premix for bold sips',
    detailedDescription: 'Vodka Tea brings a playful and bold twist to your tea break with its signature vodka flavor profile — alcohol-free.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Vodka Essence', 'Non-Alcoholic', 'Fun & Flavorful', 'Quick Prep'],
    rating: 4.4,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Vodka Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 85,
    name: 'Brandy Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Brandy inspired flavored tea premix',
    detailedDescription: 'Brandy Tea is a cozy blend with the warm notes of brandy flavor, great for creating a premium tea experience — without any alcohol.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Brandy Notes', 'Warm Flavor', 'No Alcohol', 'Cafe Ready'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Brandy Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 86,
    name: 'Beer Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Unique beer-flavored tea premix',
    detailedDescription: 'Beer Tea is a one-of-a-kind tea offering that delivers the nostalgic flavor of beer in a non-alcoholic, cafe-friendly tea format.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Beer Inspired', 'Non-Alcoholic', 'Refreshing Profile', 'Quick to Serve'],
    rating: 4.3,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Beer Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 87,
    name: 'Plain Strong Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Robust and bold tea premix for a strong cup of chai.',
    detailedDescription: 'Our Plain Strong Tea premix delivers a powerful and energizing tea experience. Made for those who prefer a bold, no-nonsense chai, this blend is ideal for office vending, tea stalls, and bulk tea solutions.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Bold Taste', 'Instant Preparation', 'Strong Brew', 'Bulk Packaging Available'],
    rating: 4.5,
    price: 'From ₹220/kg',
    specifications: {
      'Components': 'Tea, Sugar, Brandy Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 88,
    name: 'Strong Coffee',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Intense coffee premix for those who crave a strong caffeine kick.',
    detailedDescription: 'Our Strong Coffee blend is crafted for coffee lovers who prefer a richer, more robust flavor. Perfect for cafes, vending machines, and bulk use, this blend delivers consistent quality and taste.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Instant Coffee', 'Extra Caffeine Boost', 'Medium-Dark Roast', 'Bulk Supply'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Brandy Flavor, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 89,
    name: 'Special- Cardamom Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Premium cardamom tea premix with a rich and aromatic twist.',
    detailedDescription: 'Special-Cardamom Tea is an elevated version of classic elaichi chai. It uses high-quality cardamom flavoring for a luxurious and fragrant tea experience ideal for gourmet tea services.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Premium Elaichi Flavor', 'Rich Aroma', 'Instant Chai', 'Bulk Packs Available'],
    rating: 4.7,
    price: 'From ₹260/kg',
    specifications: {
      'Flavor Profile': 'Fragrant, Sweet, Spicy',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 90,
    name: 'Special- Ginger Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Enhanced ginger tea premix with extra punch and warmth.',
    detailedDescription: 'Special-Ginger Tea offers a spicier and deeper ginger flavor compared to standard blends. Perfect for winter servings and health-conscious drinkers looking for strong ginger notes.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Strong Ginger Kick', 'Warming Effect', 'Health Boosting', 'Instant Mix'],
    rating: 4.6,
    price: 'From ₹255/kg',
    specifications: {
      'Flavor Profile': 'Spicy, Strong, Zesty',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 91,
    name: 'Special- Masala Tea',
    category: 'Premix',
    subSubcategory: 'Tea-Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Rich masala tea premix with enhanced spice blend for chai lovers.',
    detailedDescription:
      'Special-Masala Tea combines a potent mix of traditional Indian spices for a chai that’s deeper and more flavorful. Designed for tea connoisseurs who enjoy layered spice profiles.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/KM/LT/UO/5215417/shutterstock-210365299-1-500x500.jpeg',
    features: ['Extra Spices', 'Authentic Masala Chai Taste', 'Instant Preparation', 'Bulk Friendly'],
    rating: 4.6,
    price: 'From ₹265/kg',
    specifications: {
      'Flavor Profile': 'Spicy, Warm, Traditional',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 92,
    name: 'Plain Strong Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Robust and bold tea premix for a strong cup of chai.',
    detailedDescription:'Our Plain Strong Tea premix delivers a powerful and energizing tea experience. Made for those who prefer a bold, no-nonsense chai, this blend is ideal for office vending, tea stalls, and bulk tea solutions.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Bold Taste', 'Instant Preparation', 'Strong Brew', 'Bulk Packaging Available'],
    rating: 4.5,
    price: 'From ₹220/kg',
    specifications: {
      'Flavor Profile': 'Strong, Bold, Traditional',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 93,
    name: 'Strong Coffee',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Intense coffee premix for those who crave a strong caffeine kick.',
    detailedDescription: 'Our Strong Coffee blend is crafted for coffee lovers who prefer a richer, more robust flavor. Perfect for cafes, vending machines, and bulk use, this blend delivers consistent quality and taste.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Instant Coffee', 'Extra Caffeine Boost', 'Medium-Dark Roast', 'Bulk Supply'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Type': 'Coffee Premix',
      'Flavor Profile': 'Strong, Intense, Roasted',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 94,
    name: 'Special- Cardamom Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Premium cardamom tea premix with a rich and aromatic twist.',
    detailedDescription: 'Special-Cardamom Tea is an elevated version of classic elaichi chai. It uses high-quality cardamom flavoring for a luxurious and fragrant tea experience ideal for gourmet tea services.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Premium Elaichi Flavor', 'Rich Aroma', 'Instant Chai', 'Bulk Packs Available'],
    rating: 4.7,
    price: 'From ₹260/kg',
    specifications: {
      'Flavor Profile': 'Fragrant, Sweet, Spicy',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 95,
    name: 'Special- Ginger Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Enhanced ginger tea premix with extra punch and warmth.',
    detailedDescription: 'Special-Ginger Tea offers a spicier and deeper ginger flavor compared to standard blends. Perfect for winter servings and health-conscious drinkers looking for strong ginger notes.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Strong Ginger Kick', 'Warming Effect', 'Health Boosting', 'Instant Mix'],
    rating: 4.6,
    price: 'From ₹255/kg',
    specifications: {
      'Flavor Profile': 'Spicy, Strong, Zesty',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 96,
    name: 'Special- Masala Tea',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: 'Rich masala tea premix with enhanced spice blend for chai lovers.',
    detailedDescription: 'Special-Masala Tea combines a potent mix of traditional Indian spices for a chai that’s deeper and more flavorful. Designed for tea connoisseurs who enjoy layered spice profiles.',
    image: 'https://img.freepik.com/free-photo/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface_9975-124635.jpg?semt=ais_hybrid&w=740',
    features: ['Extra Spices', 'Authentic Masala Chai Taste', 'Instant Preparation', 'Bulk Friendly'],
    rating: 4.6,
    price: 'From ₹265/kg',
    specifications: {
      'Flavor Profile': 'Spicy, Warm, Traditional',
      'Packaging': 'CUSTOM',
      'Shelf Life': '12 months'
    }
  },
  {
  id: 97,
  name: 'Strong Coffee - Plain',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Bold and robust plain coffee premix for intense flavor',
  detailedDescription: 'Our Strong Coffee - Plain offers a powerful and rich coffee flavor designed for true coffee lovers. Suitable for hot, cold, and frappe beverages, it’s perfect for vending and HoReCa setups.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Strong Flavor', 'Multipurpose Use', 'Easy Preparation', 'Commercial Grade'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 98,
  name: 'Turkish Hazelnut',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Exotic Turkish hazelnut coffee blend premix',
  detailedDescription: 'Enjoy the nutty richness of Turkish Hazelnut in this convenient premix. Designed for hot and cold beverages, it offers a premium café experience with every sip.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Hazelnut Aroma', 'Easy Brewing', 'Premium Experience'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Hazelnut Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 99,
  name: 'Cadbury Chocolate',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Chocolatey delight coffee premix with Cadbury tones',
  detailedDescription: 'Indulge in chocolate-infused coffee with our Cadbury Chocolate premix. Balanced with creamer and sugar for a comforting treat across hot and cold formats.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Chocolate Blend', 'Comforting Taste', 'For All Seasons'],
  rating: 4.5,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Cadbury Chocolate Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 100,
  name: 'Belgian Chocolate',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Luxurious Belgian chocolate infused coffee premix',
  detailedDescription: 'Made with Belgian chocolate essence, this premix delivers a premium, rich flavor. Ideal for cafés offering gourmet beverages in hot and frappe options.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Premium Belgian Chocolate', 'Gourmet Style', 'For Hot and Frappe'],
  rating: 4.8,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Belgian Chocolate Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 101,
  name: 'Dark Chocolate Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Bittersweet dark chocolate coffee experience',
  detailedDescription: 'Perfect for dark chocolate lovers, this premix combines bold coffee with the deep richness of cocoa. Great for hot or chilled applications.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Bittersweet Taste', 'Cocoa-Rich Blend', 'Ideal for Cafés'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Dark Chocolate, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 102,
  name: 'Vanilla Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Smooth and aromatic vanilla flavored coffee premix',
  detailedDescription: 'This Vanilla Coffee premix delivers a delightful fusion of coffee and natural vanilla flavor. It’s perfect for both hot and cold beverages, providing a sweet, creamy, and smooth experience.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Vanilla Aroma', 'Smooth Blend', 'Multi-Serve Format'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Vanilla Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 103,
  name: 'Cappuccino Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Classic cappuccino premix with creamy foam texture',
  detailedDescription: 'Our Cappuccino Coffee premix creates a rich, creamy cup with a signature foamy top. Ideal for vending machines and instant café-style service in hot or frappe formats.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Creamy Foam', 'Authentic Cappuccino Flavor', 'Ready Instantly'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 104,
  name: 'Cafe Latte Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Light-bodied latte coffee premix with milk essence',
  detailedDescription: 'Our Cafe Latte Coffee premix offers a smooth and mellow coffee with just the right hint of milk flavor. Perfect for morning brews and chilled lattes.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Mild Coffee', 'Smooth Body', 'Milk-Infused Taste'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Milk Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 105,
  name: 'Ginger Ale Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Unique blend of ginger ale and coffee for a spicy twist',
  detailedDescription: 'This innovative Ginger Ale Coffee premix brings together the warmth of ginger with classic coffee flavor. Best served hot for a soothing effect or cold for a zesty twist.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Spicy-Ginger Flavor', 'Comforting Aroma', 'Versatile Beverage'],
  rating: 4.5,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Ginger Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 106,
  name: 'Cardamom Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Traditional cardamom infused coffee premix',
  detailedDescription: 'This Cardamom Coffee premix offers the perfect balance of spice and smoothness. Cardamom’s warm aroma pairs delightfully with coffee for a unique café-style experience.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Spiced with Cardamom', 'Café Style Taste', 'Hot or Cold Use'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Cardamom Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 107,
  name: 'Butterscotch Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Sweet and creamy butterscotch flavored coffee premix',
  detailedDescription: 'Our Butterscotch Coffee premix combines rich coffee with the delightful sweetness of butterscotch. It’s a treat for anyone who enjoys dessert-inspired beverages, perfect for both hot and frappe-style drinks.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Sweet Butterscotch Flavor', 'Cafe Style Drink', 'Quick & Convenient'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Butterscotch Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 108,
  name: 'Mint Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Refreshing mint-flavored coffee premix',
  detailedDescription: 'Enjoy a cooling coffee experience with our Mint Coffee premix. The bold flavor of coffee is uplifted with natural mint essence, ideal for chilled frappes and summer specials.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Minty Fresh', 'Chilled Coffee Delight', 'Hot or Cold Preparation'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Mint Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 109,
  name: 'Choco Orange Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Zesty orange blended with rich chocolate coffee',
  detailedDescription: 'Our Choco Orange Coffee is a fusion of zesty citrus and chocolatey coffee. Perfect for cafes that want to offer a unique gourmet flavor in both hot and cold styles.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Zesty Orange', 'Chocolate Hints', 'Signature Blend'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Chocolate & Orange Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 110,
  name: 'Strawberry Cheesecake Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Dessert-inspired strawberry cheesecake coffee premix',
  detailedDescription: 'Indulge in a cafe-style dessert beverage with our Strawberry Cheesecake Coffee premix. It combines creamy cheesecake notes with a fruity strawberry finish for a unique gourmet coffee.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Dessert-Inspired', 'Fruity & Creamy', 'Unique Flavor'],
  rating: 4.8,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Strawberry Cheesecake Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 111,
  name: 'Mocha Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Classic mocha blend of coffee and cocoa',
  detailedDescription: 'This Mocha Coffee premix offers a harmonious blend of rich coffee and chocolate cocoa. A café essential that caters to chocolate coffee lovers for both warm and chilled drinks.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Chocolate + Coffee', 'Smooth & Creamy', 'Fast Preparation'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Cocoa Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 112,
  name: 'Super Strong Coffee - Plain',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'High-intensity strong coffee premix for true coffee lovers',
  detailedDescription: 'Formulated for those who enjoy a bold and intense coffee experience, our Super Strong Coffee premix delivers an extra caffeine kick with a full-bodied flavor. Ideal for all-day energy.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Extra Caffeine', 'Bold Flavor', 'Café Grade Strength'],
  rating: 4.8,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Strong Coffee Blend, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 113,
  name: 'Choco-Vanilla Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Delicious coffee premix with hints of chocolate and vanilla',
  detailedDescription: 'Choco-Vanilla Coffee is a luxurious coffee premix blending creamy vanilla and decadent chocolate. A perfect choice for cafes seeking unique flavor profiles.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Vanilla-Chocolate Fusion', 'Dessert-Inspired', 'Instant Café-Style'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Chocolate & Vanilla Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 114,
  name: 'Choco Hazelnut Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Gourmet blend of chocolate and hazelnut infused coffee',
  detailedDescription: 'This gourmet Choco Hazelnut Coffee premix combines smooth chocolate with nutty hazelnut notes, offering a unique and rich flavor ideal for high-end beverage menus.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Nutty & Chocolatey', 'Rich Gourmet Taste', 'Easy to Prepare'],
  rating: 4.9,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Hazelnut & Cocoa Flavors, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 115,
  name: 'Caramel Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Smooth caramel flavored coffee premix for indulgent sips',
  detailedDescription: 'Enjoy the smooth sweetness of caramel perfectly blended with rich coffee in this instant café-style premix. Loved by customers who prefer milder, sweet coffee notes.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Sweet & Smooth', 'Perfect for Frappes', 'Customer Favorite'],
  rating: 4.8,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Caramel Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 116,
  name: 'SPL Cold Coffee Premix',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Special cold coffee premix designed for iced and frappé drinks',
  detailedDescription: 'SPL Cold Coffee Premix is crafted for cold beverage lovers. It dissolves perfectly in cold water or milk, delivering a smooth and creamy café-style cold coffee or frappé instantly.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Cold Soluble', 'Frappé Ready', 'Rich & Creamy'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Sugar, Creamer',
    'Applications': 'Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 117,
  name: 'Rum Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Non-alcoholic rum flavored coffee premix',
  detailedDescription: 'This unique Rum Coffee Premix offers the warmth and aroma of rum without the alcohol, blending beautifully with coffee to create an indulgent beverage for every season.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Rum Flavor', 'Non-Alcoholic', 'Unique Café Experience'],
  rating: 4.5,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Rum Flavoring, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 118,
  name: 'Whiskey Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Bold non-alcoholic whiskey infused coffee premix',
  detailedDescription: 'Enjoy the deep, smoky flavor of whiskey in this non-alcoholic coffee premix. Designed for connoisseurs who love strong flavors, this drink is a standout on any café menu.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Whiskey Aroma', 'Alcohol-Free', 'Bold & Robust'],
  rating: 4.4,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Whiskey Flavoring, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 119,
  name: 'Vodka Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Chilled vodka flavored coffee premix without alcohol',
  detailedDescription: 'Vodka Coffee Premix is a trendy café beverage that replicates the clean, crisp notes of vodka in a rich coffee base. Non-alcoholic and refreshing, it’s perfect for cold brews and frappés.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Vodka Essence', 'Refreshing Cold Blend', 'Alcohol-Free'],
  rating: 4.3,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Vodka Flavoring, Sugar, Creamer',
    'Applications': 'Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 120,
  name: 'Beer Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Unique beer flavored coffee for bold beverage innovation',
  detailedDescription: 'Beer Coffee Premix blends roasted coffee with malty beer-like notes. Alcohol-free and adventurous, it’s a fantastic pick for innovative cafes and experimental coffee menus.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Beer-Like Taste', 'Non-Alcoholic', 'Innovative Drink Option'],
  rating: 4.2,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Beer Flavoring, Sugar, Creamer',
    'Applications': 'Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 121,
  name: 'Brandy Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Cafe Premix',
  description: 'Rich brandy flavored coffee premix without alcohol',
  detailedDescription: 'Brandy Coffee Premix is crafted for those who enjoy deep, warm flavors in their coffee. This non-alcoholic blend delivers smooth brandy notes with creamy coffee richness.',
  image: 'https://angelinos.com/cdn/shop/articles/How_Much_Milk_Coffee_in_a_Cappuccino.jpg?v=1701189122',
  features: ['Warm Brandy Aroma', 'Smooth Finish', 'Zero Alcohol'],
  rating: 4.4,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Brandy Flavoring, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 122,
  name: 'Strong Coffee - Plain',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Bold and robust plain coffee premix for intense flavor',
  detailedDescription: 'Our Strong Coffee - Plain offers a powerful and rich coffee flavor designed for true coffee lovers. Suitable for hot, cold, and frappe beverages, it’s perfect for vending and HoReCa setups.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Strong Flavor', 'Multipurpose Use', 'Easy Preparation', 'Commercial Grade'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 123,
  name: 'Turkish Hazelnut',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Exotic Turkish hazelnut coffee blend premix',
  detailedDescription: 'Enjoy the nutty richness of Turkish Hazelnut in this convenient premix. Designed for hot and cold beverages, it offers a premium café experience with every sip.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Hazelnut Aroma', 'Easy Brewing', 'Premium Experience'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Hazelnut Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 124,
  name: 'Cadbury Chocolate',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Chocolatey delight coffee premix with Cadbury tones',
  detailedDescription: 'Indulge in chocolate-infused coffee with our Cadbury Chocolate premix. Balanced with creamer and sugar for a comforting treat across hot and cold formats.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Chocolate Blend', 'Comforting Taste', 'For All Seasons'],
  rating: 4.5,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Cadbury Chocolate Flavor, Sugar, Creamer',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 125,
  name: 'Belgian Chocolate',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Luxurious Belgian chocolate infused coffee premix',
  detailedDescription: 'Made with Belgian chocolate essence, this premix delivers a premium, rich flavor. Ideal for cafés offering gourmet beverages in hot and frappe options.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Premium Belgian Chocolate', 'Gourmet Style', 'For Hot and Frappe'],
  rating: 4.8,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Belgian Chocolate Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 126,
  name: 'Dark Chocolate Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Bittersweet dark chocolate coffee experience',
  detailedDescription: 'Perfect for dark chocolate lovers, this premix combines bold coffee with the deep richness of cocoa. Great for hot or chilled applications.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Bittersweet Taste', 'Cocoa-Rich Blend', 'Ideal for Cafés'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Dark Chocolate, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 127,
  name: 'Vanilla Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Smooth and aromatic vanilla flavored coffee premix',
  detailedDescription: 'This Vanilla Coffee premix delivers a delightful fusion of coffee and natural vanilla flavor. It’s perfect for both hot and cold beverages, providing a sweet, creamy, and smooth experience.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Vanilla Aroma', 'Smooth Blend', 'Multi-Serve Format'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 128,
  name: 'Cappuccino Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Classic cappuccino premix with creamy foam texture',
  detailedDescription: 'Our Cappuccino Coffee premix creates a rich, creamy cup with a signature foamy top. Ideal for vending machines and instant café-style service in hot or frappe formats.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Creamy Foam', 'Authentic Cappuccino Flavor', 'Ready Instantly'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 129,
  name: 'Cafe Latte Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Light-bodied latte coffee premix with milk essence',
  detailedDescription: 'Our Cafe Latte Coffee premix offers a smooth and mellow coffee with just the right hint of milk flavor. Perfect for morning brews and chilled lattes.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Mild Coffee', 'Smooth Body', 'Milk-Infused Taste'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 130,
  name: 'Ginger Ale Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Unique blend of ginger ale and coffee for a spicy twist',
  detailedDescription: 'This innovative Ginger Ale Coffee premix brings together the warmth of ginger with classic coffee flavor. Best served hot for a soothing effect or cold for a zesty twist.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Spicy-Ginger Flavor', 'Comforting Aroma', 'Versatile Beverage'],
  rating: 4.5,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 131,
  name: 'Cardamom Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Traditional cardamom infused coffee premix',
  detailedDescription: 'This Cardamom Coffee premix offers the perfect balance of spice and smoothness. Cardamom’s warm aroma pairs delightfully with coffee for a unique café-style experience.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Spiced with Cardamom', 'Café Style Taste', 'Hot or Cold Use'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 132,
  name: 'Butterscotch Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Sweet and creamy butterscotch flavored coffee premix',
  detailedDescription: 'Our Butterscotch Coffee premix combines rich coffee with the delightful sweetness of butterscotch. It’s a treat for anyone who enjoys dessert-inspired beverages, perfect for both hot and frappe-style drinks.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Sweet Butterscotch Flavor', 'Cafe Style Drink', 'Quick & Convenient'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 133,
  name: 'Mint Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Refreshing mint-flavored coffee premix',
  detailedDescription: 'Enjoy a cooling coffee experience with our Mint Coffee premix. The bold flavor of coffee is uplifted with natural mint essence, ideal for chilled frappes and summer specials.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Minty Fresh', 'Chilled Coffee Delight', 'Hot or Cold Preparation'],
  rating: 4.6,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 134,
  name: 'Choco Orange Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Zesty orange blended with rich chocolate coffee',
  detailedDescription: 'Our Choco Orange Coffee is a fusion of zesty citrus and chocolatey coffee. Perfect for cafes that want to offer a unique gourmet flavor in both hot and cold styles.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Zesty Orange', 'Chocolate Hints', 'Signature Blend'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 135,
  name: 'Strawberry Cheesecake Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Dessert-inspired strawberry cheesecake coffee premix',
  detailedDescription: 'Indulge in a cafe-style dessert beverage with our Strawberry Cheesecake Coffee premix. It combines creamy cheesecake notes with a fruity strawberry finish for a unique gourmet coffee.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Dessert-Inspired', 'Fruity & Creamy', 'Unique Flavor'],
  rating: 4.8,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 136,
  name: 'Mocha Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Classic mocha blend of coffee and cocoa',
  detailedDescription: 'This Mocha Coffee premix offers a harmonious blend of rich coffee and chocolate cocoa. A café essential that caters to chocolate coffee lovers for both warm and chilled drinks.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Chocolate + Coffee', 'Smooth & Creamy', 'Fast Preparation'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 137,
  name: 'Super Strong Coffee - Plain',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'High-intensity strong coffee premix for true coffee lovers',
  detailedDescription: 'Formulated for those who enjoy a bold and intense coffee experience, our Super Strong Coffee premix delivers an extra caffeine kick with a full-bodied flavor. Ideal for all-day energy.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Extra Caffeine', 'Bold Flavor', 'Café Grade Strength'],
  rating: 4.8,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 138,
  name: 'Choco-Vanilla Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Delicious coffee premix with hints of chocolate and vanilla',
  detailedDescription: 'Choco-Vanilla Coffee is a luxurious coffee premix blending creamy vanilla and decadent chocolate. A perfect choice for cafes seeking unique flavor profiles.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Vanilla-Chocolate Fusion', 'Dessert-Inspired', 'Instant Café-Style'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 139,
  name: 'Choco Hazelnut Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Gourmet blend of chocolate and hazelnut infused coffee',
  detailedDescription: 'This gourmet Choco Hazelnut Coffee premix combines smooth chocolate with nutty hazelnut notes, offering a unique and rich flavor ideal for high-end beverage menus.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Nutty & Chocolatey', 'Rich Gourmet Taste', 'Easy to Prepare'],
  rating: 4.9,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 140,
  name: 'Caramel Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Smooth caramel flavored coffee premix for indulgent sips',
  detailedDescription: 'Enjoy the smooth sweetness of caramel perfectly blended with rich coffee in this instant café-style premix. Loved by customers who prefer milder, sweet coffee notes.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Sweet & Smooth', 'Perfect for Frappes', 'Customer Favorite'],
  rating: 4.8,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 141,
  name: 'SPL Cold Coffee Premix',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Special cold coffee premix designed for iced and frappé drinks',
  detailedDescription: 'SPL Cold Coffee Premix is crafted for cold beverage lovers. It dissolves perfectly in cold water or milk, delivering a smooth and creamy café-style cold coffee or frappé instantly.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Cold Soluble', 'Frappé Ready', 'Rich & Creamy'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 142,
  name: 'Rum Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Non-alcoholic rum flavored coffee premix',
  detailedDescription: 'This unique Rum Coffee Premix offers the warmth and aroma of rum without the alcohol, blending beautifully with coffee to create an indulgent beverage for every season.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Rum Flavor', 'Non-Alcoholic', 'Unique Café Experience'],
  rating: 4.5,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 143,
  name: 'Whiskey Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Bold non-alcoholic whiskey infused coffee premix',
  detailedDescription: 'Enjoy the deep, smoky flavor of whiskey in this non-alcoholic coffee premix. Designed for connoisseurs who love strong flavors, this drink is a standout on any café menu.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Whiskey Aroma', 'Alcohol-Free', 'Bold & Robust'],
  rating: 4.4,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 144,
  name: 'Vodka Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Chilled vodka flavored coffee premix without alcohol',
  detailedDescription: 'Vodka Coffee Premix is a trendy café beverage that replicates the clean, crisp notes of vodka in a rich coffee base. Non-alcoholic and refreshing, it’s perfect for cold brews and frappés.',
  image: 'hhttps://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Vodka Essence', 'Refreshing Cold Blend', 'Alcohol-Free'],
  rating: 4.3,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 145,
  name: 'Beer Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Unique beer flavored coffee for bold beverage innovation',
  detailedDescription: 'Beer Coffee Premix blends roasted coffee with malty beer-like notes. Alcohol-free and adventurous, it’s a fantastic pick for innovative cafes and experimental coffee menus.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Beer-Like Taste', 'Non-Alcoholic', 'Innovative Drink Option'],
  rating: 4.2,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 146,
  name: 'Brandy Coffee',
  category: 'Premix',
  subcategory: 'Coffee Premix',
  subSubcategory: 'Vending Machine Premix',
  description: 'Rich brandy flavored coffee premix without alcohol',
  detailedDescription: 'Brandy Coffee Premix is crafted for those who enjoy deep, warm flavors in their coffee. This non-alcoholic blend delivers smooth brandy notes with creamy coffee richness.',
  image: 'https://twistyindia.com/cdn/shop/files/close-up-coffee-powder-beans.png?v=1716197189&width=1946',
  features: ['Warm Brandy Aroma', 'Smooth Finish', 'Zero Alcohol'],
  rating: 4.4,
  price: 'From ₹320/kg',
  specifications: {
    'Components': 'Coffee, Flavor, Creamer, Sugar',
    'Applications': 'Hot, Cold, Frappe',
    'Serving Size': '15-20g per cup',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 147,
  name: '100% Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  description: 'High-quality spray dried instant coffee powder',
  detailedDescription: 'Our Spray Dried Coffee is produced using advanced spray drying technology to preserve the natural coffee aroma and flavor. Perfect for instant coffee preparations and industrial applications.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Instant Solubility', 'Rich Aroma', 'Long Shelf Life', 'Industrial Grade'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Strong',
    'Process': 'Spray Dried',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 148,
  name: '80:20 Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  description: 'High-quality spray dried instant coffee powder',
  detailedDescription: 'Our Spray Dried Coffee is produced using advanced spray drying technology to preserve the natural coffee aroma and flavor. Perfect for instant coffee preparations and industrial applications.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Instant Solubility', 'Rich Aroma', 'Long Shelf Life', 'Industrial Grade'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Strong',
    'Process': 'Spray Dried',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 149,
  name: '70:30 Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  description: 'High-quality spray dried instant coffee powder',
  detailedDescription: 'Our Spray Dried Coffee is produced using advanced spray drying technology to preserve the natural coffee aroma and flavor. Perfect for instant coffee preparations and industrial applications.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Instant Solubility', 'Rich Aroma', 'Long Shelf Life', 'Industrial Grade'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Strong',
    'Process': 'Spray Dried',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 150,
  name: '60:40 Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  description: 'High-quality spray dried instant coffee powder',
  detailedDescription: 'Our Spray Dried Coffee is produced using advanced spray drying technology to preserve the natural coffee aroma and flavor. Perfect for instant coffee preparations and industrial applications.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Instant Solubility', 'Rich Aroma', 'Long Shelf Life', 'Industrial Grade'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Strong',
    'Process': 'Spray Dried',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 151,
  name: '53:47 Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  description: 'High-quality spray dried instant coffee powder',
  detailedDescription: 'Our Spray Dried Coffee is produced using advanced spray drying technology to preserve the natural coffee aroma and flavor. Perfect for instant coffee preparations and industrial applications.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Instant Solubility', 'Rich Aroma', 'Long Shelf Life', 'Industrial Grade'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Strong',
    'Process': 'Spray Dried',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 152,
  name: 'Extra Strong 100% Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  subSubcategory: null,
  description: 'Extra strong spray dried instant coffee blend',
  detailedDescription: 'This Extra Strong variant of spray dried coffee delivers a bolder, more robust flavor profile designed for coffee lovers who prefer an intense caffeine kick.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Extra Strong Blend', 'Spray Dried Process', 'High Solubility', 'Strong Aroma'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Moisture Content': 'Max 5%',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  },
  
},
{
  id: 153,
  name: 'Extra Strong 80:20 Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  subSubcategory: null,
  description: 'Extra strong spray dried instant coffee blend',
  detailedDescription: 'This Extra Strong variant of spray dried coffee delivers a bolder, more robust flavor profile designed for coffee lovers who prefer an intense caffeine kick.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Extra Strong Blend', 'Spray Dried Process', 'High Solubility', 'Strong Aroma'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Process': 'Spray Dried',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  },
},
{
  id: 154,
  name: 'Extra Strong 70:30 Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  subSubcategory: null,
  description: 'Extra strong spray dried instant coffee blend',
  detailedDescription: 'This Extra Strong variant of spray dried coffee delivers a bolder, more robust flavor profile designed for coffee lovers who prefer an intense caffeine kick.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Extra Strong Blend', 'Spray Dried Process', 'High Solubility', 'Strong Aroma'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Process': 'Spray Dried',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  },
},
{
  id: 155,
  name: 'Extra Strong 60:40 Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  subSubcategory: null,
  description: 'Extra strong spray dried instant coffee blend',
  detailedDescription: 'This Extra Strong variant of spray dried coffee delivers a bolder, more robust flavor profile designed for coffee lovers who prefer an intense caffeine kick.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Extra Strong Blend', 'Spray Dried Process', 'High Solubility', 'Strong Aroma'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Process': 'Spray Dried',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  },
  
},
{
  id: 156,
  name: 'Extra Strong 53:47 Spray Dried Coffee',
  category: 'Plain Coffee',
  subcategory: 'Spray Dried',
  subSubcategory: null,
  description: 'Extra strong spray dried instant coffee blend',
  detailedDescription: 'This Extra Strong variant of spray dried coffee delivers a bolder, more robust flavor profile designed for coffee lovers who prefer an intense caffeine kick.',
  image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  features: ['Extra Strong Blend', 'Spray Dried Process', 'High Solubility', 'Strong Aroma'],
  rating: 4.8,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Process': 'Spray Dried',
    'Solubility': '99.5%',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }, 
},
{
  id: 157,
  name: '100% Agglomerated Coffee',
  category: 'Plain Coffee',
  subcategory: 'Agglomerated',
  description: 'Pure 100% agglomerated instant coffee for rich flavor',
  detailedDescription: 'This 100% agglomerated coffee offers strong aroma, smooth texture, and quick solubility — ideal for premium applications.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/AL/LU/WU/152980179/agglomerated-instant-pure-coffee-powder.jpg',
  features: ['Pure Coffee', 'Fast Solubility', 'Rich Flavor'],
  rating: 4.8,
  price: 'From ₹440/kg',
  specifications: {
    'Variant': 'Strong',
    'Process': 'Agglomerated',
    'Solubility': '99.5%',
    'Caffeine Content': '3.0% ± 0.2%',
    'Shelf Life': '12 months',
    'Packaging': 'CUSTOM'
  }
},
{
  id: 158,
  name: '80:20 Agglomerated Coffee',
  category: 'Plain Coffee',
  subcategory: 'Agglomerated',
  description: '80:20 blend of agglomerated coffee for balanced strength and smoothness',
  detailedDescription: 'This blend offers the richness of coffee with slight sweetness and balance, suitable for commercial use.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/AL/LU/WU/152980179/agglomerated-instant-pure-coffee-powder.jpg',
  features: ['Balanced Strength', 'Quick Dissolve', 'Commercial Grade'],
  rating: 4.7,
  price: 'From ₹420/kg',
  specifications: {
    'Variant': 'Strong',
    'Process': 'Agglomerated',
    'Solubility': '99%',
    'Caffeine Content': '2.7% ± 0.2%',
    'Shelf Life': '12 months',
    'Packaging': 'CUSTOM'
  }
},
{
  id: 159,
  name: '70:30 Agglomerated Coffee',
  category: 'Plain Coffee',
  subcategory: 'Agglomerated',
  description: '70:30 blend for deeper taste with creamy mouthfeel',
  detailedDescription: 'Offers strong taste and traditional body, ideal for vending and HoReCa needs.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/AL/LU/WU/152980179/agglomerated-instant-pure-coffee-powder.jpg',
  features: ['Rich Body', 'Consistent Granules', 'Traditionally Loved'],
  rating: 4.6,
  price: 'From ₹400/kg',
  specifications: {
    'Variant': 'Strong',
    'Process': 'Agglomerated',
    'Solubility': '98.5%',
    'Shelf Life': '12 months',
    'Packaging': 'CUSTOM'
  }
},
{
  id: 160,
  name: '60:40 Agglomerated Coffee',
  category: 'Plain Coffee',
  subcategory: 'Agglomerated',
  description: '60:40 economical blend with strong flavor and volume',
  detailedDescription: 'Affordable and robust — this blend is excellent for high-volume consumption and institutional use.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/AL/LU/WU/152980179/agglomerated-instant-pure-coffee-powder.jpg',
  features: ['Cost Effective', 'Great Volume', 'Mild Bitterness'],
  rating: 4.5,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Strong',
    'Process': 'Agglomerated',
    'Solubility': '98%',
    'Shelf Life': '12 months',
    'Packaging': 'CUSTOM'
  }
},
{
  id: 161,
  name: 'Extra Strong 100% Agglomerated Coffee',
  category: 'Plain Coffee',
  subcategory: 'Agglomerated',
  description: 'Extra strong 100% blend for the boldest agglomerated coffee',
  detailedDescription: 'Pure coffee with bold character and deep aroma. Best suited for premium clients and coffee connoisseurs.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/AL/LU/WU/152980179/agglomerated-instant-pure-coffee-powder.jpg',
  features: ['High Strength', 'Pure Coffee', 'Instant Aroma'],
  rating: 4.9,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Process': 'Agglomerated',
    'Solubility': '99.5%',
    'Shelf Life': '12 months',
    'Packaging': 'CUSTOM'
  }
},
{
  id: 162,
  name: 'Extra Strong 80:20 Agglomerated Coffee',
  category: 'Plain Coffee',
  subcategory: 'Agglomerated',
  description: 'Bold 80:20 extra strong blend with premium finish',
  detailedDescription: 'This extra strong mix is designed to pack a punch with a slightly sweet finish. Ideal for hotels and cafés.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/AL/LU/WU/152980179/agglomerated-instant-pure-coffee-powder.jpg',
  features: ['Bold Flavor', 'High Strength', 'Premium Granules'],
  rating: 4.8,
  price: 'From ₹440/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Process': 'Agglomerated',
    'Solubility': '99%',
    'Shelf Life': '12 months',
    'Packaging': 'CUSTOM'
  }
},
{
  id: 163,
  name: 'Extra Strong 70:30 Agglomerated Coffee',
  category: 'Plain Coffee',
  subcategory: 'Agglomerated',
  description: 'Robust 70:30 extra strong blend for classic taste seekers',
  detailedDescription: 'Ideal for traditional markets, this blend balances boldness and texture perfectly.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/AL/LU/WU/152980179/agglomerated-instant-pure-coffee-powder.jpg',
  features: ['Classic Taste', 'Full Body', 'HoReCa Grade'],
  rating: 4.7,
  price: 'From ₹420/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Process': 'Agglomerated',
    'Solubility': '98.5%',
    'Shelf Life': '12 months',
    'Packaging': 'CUSTOM'
  }
},
{
  id: 164,
  name: 'Extra Strong 60:40 Agglomerated Coffee',
  category: 'Plain Coffee',
  subcategory: 'Agglomerated',
  description: 'Balanced and bold 60:40 extra strong agglomerated coffee',
  detailedDescription: 'Affordable strength with full-bodied character, suitable for foodservice and vending.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/AL/LU/WU/152980179/agglomerated-instant-pure-coffee-powder.jpg',
  features: ['Economical Strength', 'Quick Mix', 'Traditional Blend'],
  rating: 4.6,
  price: 'From ₹400/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Process': 'Agglomerated',
    'Solubility': '98%',
    'Shelf Life': '12 months',
    'Packaging': 'CUSTOM'
  }
},
{
  id: 165,
  name: '100% ARABICA - AAA',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'Top-grade Arabica Cherry AAA green beans for specialty roasting',
  detailedDescription: 'Arabica Cherry AAA beans are the highest grade, offering uniform size, clean appearance, and a mild yet complex flavor profile ideal for specialty coffee blends.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/VL/EO/QQ/46954279/arabica-cherry-a-green-coffee-bean-500x500.jpg',
  features: ['Grade AAA', 'Mild & Complex Flavor', 'Washed/Unwashed Options'],
  rating: 4.8,
  price: 'From ₹510/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Natural/Dry',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 166,
  name: '100% ARABICA - AA',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'Premium AA Arabica Cherry beans with balanced flavor and body',
  detailedDescription: 'Arabica Cherry AA beans are slightly smaller than AAA but still maintain a rich aroma and excellent flavor, great for medium roasts and house blends.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/VL/EO/QQ/46954279/arabica-cherry-a-green-coffee-bean-500x500.jpg',
  features: ['Grade AA', 'Balanced Profile', 'High Demand Export Grade'],
  rating: 4.7,
  price: 'From ₹490/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Natural',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 167,
  name: '100% ARABICA - A',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'Arabica Cherry A grade for budget-friendly specialty blends',
  detailedDescription: 'This A grade Arabica Cherry bean offers reliable quality and smoothness, suitable for value-based roasters and instant coffee extraction.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/VL/EO/QQ/46954279/arabica-cherry-a-green-coffee-bean-500x500.jpg',
  features: ['Grade A', 'Good Roasting Performance', 'Economical Specialty Bean'],
  rating: 4.5,
  price: 'From ₹470/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Natural/Sun-Dried',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 168,
  name: '100% ARABICA - B',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'Mid-grade Arabica Cherry B for blended roasts and soluble coffee',
  detailedDescription: 'Arabica Cherry B grade is commonly used for commercial blends, offering good solubility and base flavor ideal for large-scale production.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/VL/EO/QQ/46954279/arabica-cherry-a-green-coffee-bean-500x500.jpg',
  features: ['Grade B', 'Soluble Friendly', 'Reliable Supply'],
  rating: 4.3,
  price: 'From ₹440/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Natural',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 169,
  name: '100% ARABICA - PB',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'Peaberry Arabica Cherry for sweet, concentrated brews',
  detailedDescription: 'Peaberry beans are round, rare, and known for producing sweeter, brighter cups. Arabica PB is a specialty variant used in premium coffee houses.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/VL/EO/QQ/46954279/arabica-cherry-a-green-coffee-bean-500x500.jpg',
  features: ['Peaberry Grade', 'Rare Bean', 'Bright Cup Profile'],
  rating: 4.9,
  price: 'From ₹530/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Natural or Washed',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 170,
  name: '100% ARABICA - C',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'C-grade Arabica Cherry for bulk use and blends',
  detailedDescription: 'Arabica C grade is an economical option for use in blended and instant applications where cost-effectiveness is key.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/VL/EO/QQ/46954279/arabica-cherry-a-green-coffee-bean-500x500.jpg',
  features: ['Grade C', 'Budget-Friendly', 'High Availability'],
  rating: 4.2,
  price: 'From ₹420/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Natural',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 171,
  name: '100% ARABICA - AAA',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'Top-tier Arabica Plantation AAA beans with exceptional uniformity',
  detailedDescription: 'Arabica Plantation AAA represents the finest selection of large, uniform beans with superior aroma and complexity — ideal for gourmet blends.',
  image: 'https://cdn-cms.f-static.net/ready_uploads/media/4692756/normal_5e92928ff3244.jpg',
  features: ['Grade AAA', 'Highly Uniform Beans', 'Complex Flavor'],
  rating: 4.9,
  price: 'From ₹530/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Washed',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 172,
  name: '100% ARABICA - AA',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'High-grade AA Arabica Plantation beans for refined brews',
  detailedDescription: 'Arabica Plantation AA beans offer great size and a well-rounded flavor with medium acidity — ideal for café-style blends.',
  image: 'https://cdn-cms.f-static.net/ready_uploads/media/4692756/normal_5e92928ff3244.jpg',
  features: ['Grade AA', 'Medium Acidity', 'Smooth Profile'],
  rating: 4.8,
  price: 'From ₹510/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Washed',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 173,
  name: '100% ARABICA - A',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'Arabica A grade for versatile brewing and balanced taste',
  detailedDescription: 'Arabica Plantation A grade beans are slightly smaller but provide a consistent and mild flavor perfect for mid-range blends.',
  image: 'https://cdn-cms.f-static.net/ready_uploads/media/4692756/normal_5e92928ff3244.jpg',
  features: ['Grade A', 'Balanced Flavor', 'Ideal for Mid-Roasts'],
  rating: 4.6,
  price: 'From ₹490/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light',
    'Processing': 'Washed',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 174,
  name: '100% ARABICA - B',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'B grade Arabica Plantation for commercial applications',
  detailedDescription: 'Arabica B grade is ideal for budget-friendly brews and soluble coffee applications while retaining clean aroma and base flavors.',
  image: 'https://cdn-cms.f-static.net/ready_uploads/media/4692756/normal_5e92928ff3244.jpg',
  features: ['Grade B', 'Commercial Use', 'Smooth Base Notes'],
  rating: 4.4,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Washed',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 175,
  name: '100% ARABICA - PB',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'Premium peaberry Arabica Plantation for bright and fruity brews',
  detailedDescription: 'Arabica Plantation PB (Peaberry) beans are round, dense, and known for their concentrated flavor — perfect for single-origin specialty offerings.',
  image: 'https://cdn-cms.f-static.net/ready_uploads/media/4692756/normal_5e92928ff3244.jpg',
  features: ['Peaberry Grade', 'Bright & Fruity', 'Specialty Single Origin'],
  rating: 4.9,
  price: 'From ₹550/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Washed',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 176,
  name: '100% ARABICA - C',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'Economical Arabica Plantation C for blending and extract',
  detailedDescription: 'Arabica C grade is used in bulk blends, extracts, and vending pre-mixes. Good availability and consistent flavor.',
  image: 'https://cdn-cms.f-static.net/ready_uploads/media/4692756/normal_5e92928ff3244.jpg',
  features: ['Grade C', 'Budget Bean', 'Vending Ready'],
  rating: 4.2,
  price: 'From ₹430/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Processing': 'Washed',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 177, 
  name: '100% ARABICA - AAA', 
  category: 'Coffee Beans', 
  subcategory: 'Green Beans', 
  subSubcategory: 'Arabica Cherry', 
  description: 'Premium AAA grade Arabica Cherry beans with high aroma and flavor.',
  detailedDescription:
    'Sourced from the finest estates, our AAA Arabica Cherry beans are top-grade and carefully sorted for size and quality. Perfect for specialty roasters and high-end cafes.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/ZC/SU/HG/43277858/decaffinated-coffee-500x500.jpg',
  features: ['Top Grade', 'High Aroma', 'Even Roasting', 'Specialty Use'],
  rating: 4.9,
  price: 'From ₹480/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 178, 
  name: '100% ARABICA - AA', 
  category: 'Coffee Beans', 
  subcategory: 'Green Beans', 
  subSubcategory: 'Arabica Cherry', 
  description: 'Grade AA Arabica Cherry beans with balanced profile.',
  detailedDescription:
    'Arabica Cherry AA beans are known for their balanced flavor, ideal for medium roast profiles. Suitable for premium blends.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/ZC/SU/HG/43277858/decaffinated-coffee-500x500.jpg',
  features: ['Balanced Flavor', 'Medium Roast', 'Smooth Finish'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 179, 
  name: '100% ARABICA - A', 
  category: 'Coffee Beans', 
  subcategory: 'Green Beans', 
  subSubcategory: 'Arabica Cherry', 
  description: 'Arabica A grade beans ideal for consistent roasting.',
  detailedDescription:
    'Arabica A offers a great balance between quality and cost. Suitable for retail blends and café-style brews.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/ZC/SU/HG/43277858/decaffinated-coffee-500x500.jpg',
  features: ['Consistent Roast', 'Balanced Cup', 'Cost Effective'],
  rating: 4.6,
  price: 'From ₹440/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 180, 
  name: '100% ARABICA - B', 
  category: 'Coffee Beans', 
  subcategory: 'Green Beans', 
  subSubcategory: 'Arabica Cherry', 
  description: 'Grade B Arabica Cherry beans for budget-friendly brewing.',
  detailedDescription:
    'A more economical grade of Arabica that still delivers a pleasing cup, especially in blends or mass-market use.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/ZC/SU/HG/43277858/decaffinated-coffee-500x500.jpg',
  features: ['Economical', 'Good for Blends', 'Mild Aroma'],
  rating: 4.4,
  price: 'From ₹400/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 181, 
  name: '100% ARABICA - PB', 
  category: 'Coffee Beans', 
  subcategory: 'Green Beans', 
  subSubcategory: 'Arabica Cherry', 
  description: 'Peaberry Arabica Cherry beans for a unique flavor profile.',
  detailedDescription:
    'Peaberry beans are round and dense, offering a more concentrated flavor. Excellent for niche and specialty brews.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/ZC/SU/HG/43277858/decaffinated-coffee-500x500.jpg',
  features: ['Peaberry Shape', 'Richer Taste', 'Specialty Roasting'],
  rating: 4.7,
  price: 'From ₹490/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 182, 
  name: '100% ARABICA - C', 
  category: 'Coffee Beans', 
  subcategory: 'Green Beans', 
  subSubcategory: 'Arabica Cherry', 
  description: 'C grade Arabica Cherry beans for large scale use.',
  detailedDescription:
    'A commercial-grade Arabica for bulk brewing, vending, or price-sensitive blends. Still retains the charm of Arabica.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/ZC/SU/HG/43277858/decaffinated-coffee-500x500.jpg',
  features: ['Budget Friendly', 'Bulk Supply', 'Fair Quality'],
  rating: 4.2,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 183,
  name: '100% ROBUSTA - AAA',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'High-grade AAA Robusta Cherry green beans for strong flavor and body.',
  detailedDescription: 'Robusta Cherry AAA beans are meticulously graded for their large size and uniform quality, offering bold taste and high caffeine.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380859936/VU/AT/HK/34750758/coffee-3-500x500.jpg',
  features: ['High Caffeine', 'Strong Body', 'Uniform Size'],
  rating: 4.7,
  price: 'From ₹265/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 184,
  name: '100% ROBUSTA - AA',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'Premium AA-grade Robusta Cherry beans with rich aroma and consistency.',
  detailedDescription: 'Sourced from the finest Robusta farms, AA beans are known for their medium to large size, rich aroma, and clean cup.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380859936/VU/AT/HK/34750758/coffee-3-500x500.jpg',
  features: ['Rich Aroma', 'Good Screen Size', 'Balanced Cup'],
  rating: 4.6,
  price: 'From ₹255/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 185,
  name: '100% ROBUSTA - A',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'Robusta Cherry A-grade beans for commercial blending and boldness.',
  detailedDescription: 'A-grade Robusta Cherry offers a strong flavor profile suitable for blends and bulk consumption with reliable cup consistency.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380859936/VU/AT/HK/34750758/coffee-3-500x500.jpg',
  features: ['Robust Flavor', 'Perfect for Blends', 'Affordable'],
  rating: 4.5,
  price: 'From ₹240/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 186,
  name: '100% ROBUSTA - B',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'Economical Robusta Cherry B-grade coffee beans for instant blends.',
  detailedDescription: 'Robusta B-grade beans are commonly used for instant coffee or low-cost blends. They retain a strong flavor with acceptable screen size.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380859936/VU/AT/HK/34750758/coffee-3-500x500.jpg',
  features: ['Economical', 'Strong Kick', 'Bulk Friendly'],
  rating: 4.3,
  price: 'From ₹225/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 187,
  name: '100% ROBUSTA - PB',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'Robusta Cherry PB (Peaberry) beans with concentrated flavor and aroma.',
  detailedDescription: 'Peaberry beans are rounder and denser, delivering a more focused and richer taste ideal for specialty brews.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/ZC/SU/HG/43277858/decaffinated-coffee-500x500.jpg',
  features: ['Peaberry Quality', 'Rich & Round Taste', 'Specialty Use'],
  rating: 4.8,
  price: 'From ₹275/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 188,
  name: '100% ROBUSTA - C',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'Entry-level Robusta Cherry C-grade beans for basic use or reprocessing.',
  detailedDescription: 'These beans are typically used in low-end blends or for industrial applications where price takes priority over cup quality.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/ZC/SU/HG/43277858/decaffinated-coffee-500x500.jpg',
  features: ['Low Cost', 'Utility Grade', 'Reprocessing Use'],
  rating: 4.1,
  price: 'From ₹210/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 189,
  name: '100% ROBUSTA - AAA',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'Top-tier AAA Robusta Plantation beans with intense body and boldness.',
  detailedDescription: 'Robusta Plantation AAA beans offer consistent size, high caffeine, and superior cup quality, sourced from select estates.',
  image: 'https://coffeebeansindo.id/wp-content/uploads/2022/08/Kopi-Robusta-Hijau-Grade-A.png',
  features: ['Estate Grown', 'High Caffeine', 'Premium Screen Size'],
  rating: 4.8,
  price: 'From ₹270/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 190,
  name: '100% ROBUSTA - AA',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'Smooth and strong AA-grade Robusta Plantation beans.',
  detailedDescription: 'AA Robusta beans are medium-large in size with excellent roast performance and a rich, earthy cup.',
  image: 'https://coffeebeansindo.id/wp-content/uploads/2022/08/Kopi-Robusta-Hijau-Grade-A.png',
  features: ['Consistent Roast', 'Rich Earthy Cup', 'Estate Grade'],
  rating: 4.7,
  price: 'From ₹260/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 191,
  name: '100% ROBUSTA - A',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'Robusta Plantation A-grade beans for solid performance in blends.',
  detailedDescription: 'Balanced and strong, these beans are commonly used in blends requiring body and affordability.',
  image: 'https://coffeebeansindo.id/wp-content/uploads/2022/08/Kopi-Robusta-Hijau-Grade-A.png',
  features: ['Reliable Cup', 'Good for Blends', 'Estate Cultivated'],
  rating: 4.6,
  price: 'From ₹245/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 192,
  name: '100% ROBUSTA - B',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'Cost-effective Robusta Plantation B-grade beans.',
  detailedDescription: 'With smaller screen size but strong character, B-grade plantation beans are suited for commercial applications.',
  image: 'https://coffeebeansindo.id/wp-content/uploads/2022/08/Kopi-Robusta-Hijau-Grade-A.png',
  features: ['Commercial Grade', 'Strong Flavor', 'Estate Source'],
  rating: 4.4,
  price: 'From ₹230/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 193,
  name: '100% ROBUSTA - PB',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'Specialty Robusta Plantation Peaberry (PB) beans.',
  detailedDescription: 'These rare peaberry beans are prized for their round shape and punchy profile — ideal for premium roast profiles.',
  image: 'https://coffeebeansindo.id/wp-content/uploads/2022/08/Kopi-Robusta-Hijau-Grade-A.png',
  features: ['Peaberry Selection', 'Round Beans', 'Concentrated Flavor'],
  rating: 4.9,
  price: 'From ₹280/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 194,
  name: '100% ROBUSTA - C',
  category: 'Coffee Beans',
  subcategory: 'Green Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'Basic Robusta Plantation C-grade beans for industrial use.',
  detailedDescription: 'Budget-friendly beans with irregular screen sizes, mainly used in low-cost blends or soluble production.',
  image: 'https://coffeebeansindo.id/wp-content/uploads/2022/08/Kopi-Robusta-Hijau-Grade-A.png',
  features: ['Low Grade', 'Soluble Coffee Base', 'Affordable'],
  rating: 4.2,
  price: 'From ₹215/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 195,
  name: '100% ARABICA - AAA',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'High-quality AAA Arabica Cherry roasted beans with rich aroma and fruity notes.',
  detailedDescription: 'Arabica Cherry AAA roasted beans deliver a premium brew with complex flavor, floral notes, and low acidity, perfect for gourmet coffee.',
  image: 'https://www.coffee-spirit.maxicoffee.uk/wp-content/uploads/2023/09/coffee-beans-1-600x460.jpg',
  features: ['Floral Notes', 'Low Acidity', 'Premium Roast'],
  rating: 4.9,
  price: 'From ₹580/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 196,
  name: '100% ARABICA - AA',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'AA-grade Arabica Cherry beans for a smooth, aromatic roast.',
  detailedDescription: 'Roasted Arabica AA beans offer a great balance of body and acidity, ideal for French press and pour-over methods.',
  image: 'https://www.coffee-spirit.maxicoffee.uk/wp-content/uploads/2023/09/coffee-beans-1-600x460.jpg',
  features: ['Smooth Finish', 'Balanced Body', 'Versatile Use'],
  rating: 4.8,
  price: 'From ₹560/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 197,
  name: '100% ARABICA - A',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'Roasted Arabica A beans for consistent and flavorful coffee.',
  detailedDescription: 'These beans deliver a clean cup with mild sweetness and are suitable for both espresso and drip brews.',
  image: 'https://www.coffee-spirit.maxicoffee.uk/wp-content/uploads/2023/09/coffee-beans-1-600x460.jpg',
  features: ['Mild Sweetness', 'Clean Cup', 'All-Rounder'],
  rating: 4.7,
  price: 'From ₹540/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id:  198,
  name: '100% ARABICA - B',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'B-grade Arabica Cherry roasted beans, economical and flavorful.',
  detailedDescription: 'B-grade roasted Arabica offers reliable taste at a lower price point — suitable for blends and foodservice.',
  image: 'https://www.coffee-spirit.maxicoffee.uk/wp-content/uploads/2023/09/coffee-beans-1-600x460.jpg',
  features: ['Cost Effective', 'Reliable Flavor', 'Blending Ready'],
  rating: 4.5,
  price: 'From ₹510/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 199,
  name: '100% ARABICA - PB',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'Arabica Cherry Peaberry roasted beans with unique and intense flavor.',
  detailedDescription: 'Peaberry beans offer a concentrated flavor profile with brighter acidity and are great for specialty coffee formats.',
  image: 'https://www.coffee-spirit.maxicoffee.uk/wp-content/uploads/2023/09/coffee-beans-1-600x460.jpg',
  features: ['Peaberry Selection', 'Bright Acidity', 'Specialty Grade'],
  rating: 4.9,
  price: 'From ₹590/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 2000,
  name: '100% ARABICA - C',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Cherry',
  description: 'Budget-friendly C-grade roasted Arabica Cherry beans.',
  detailedDescription: 'Lower-screen beans suitable for mass roasting or value-focused offerings while still retaining Arabica character.',
  image: 'https://www.coffee-spirit.maxicoffee.uk/wp-content/uploads/2023/09/coffee-beans-1-600x460.jpg',
  features: ['Low Cost', 'Basic Arabica Profile', 'Bulk Use'],
  rating: 4.3,
  price: 'From ₹495/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 201,
  name: '100% ARABICA - AAA',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'Estate-grown AAA Arabica Plantation beans, rich in floral and citrus notes.',
  detailedDescription: 'Arabica Plantation AAA beans are the pinnacle of specialty coffee, ideal for filter and black coffee enthusiasts.',
  image: 'https://4.imimg.com/data4/DB/EO/MY-29045197/organic-coffee-bean-500x500.jpg',
  features: ['Estate Quality', 'Floral-Citrus Notes', 'Clean Finish'],
  rating: 4.9,
  price: 'From ₹600/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 202,
  name: '100% ARABICA - AA',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'Balanced and smooth AA Arabica Plantation roasted beans.',
  detailedDescription: 'Perfect for espresso and specialty blends, offering a rich crema and balanced acidity.',
  image: 'https://4.imimg.com/data4/DB/EO/MY-29045197/organic-coffee-bean-500x500.jpg',
  features: ['Balanced Roast', 'Good Body', 'Versatile Cup'],
  rating: 4.8,
  price: 'From ₹580/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 203,
  name: '100% ARABICA - A',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'A-grade Arabica Plantation roasted beans with consistent flavor.',
  detailedDescription: 'These beans are a great all-rounder, suitable for cafés, vending, and retail packs.',
  image: 'https://4.imimg.com/data4/DB/EO/MY-29045197/organic-coffee-bean-500x500.jpg',
  features: ['Café Friendly', 'Medium Acidity', 'Consistent Roast'],
  rating: 4.6,
  price: 'From ₹555/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 204,
  name: '100% ARABICA - B',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'B-grade Arabica Plantation beans offering value and aroma.',
  detailedDescription: 'Slightly lower-grade beans still offering the signature Arabica taste at a more affordable price.',
  image: 'https://4.imimg.com/data4/DB/EO/MY-29045197/organic-coffee-bean-500x500.jpg',
  features: ['Value Friendly', 'Good Aroma', 'Mild Roast'],
  rating: 4.5,
  price: 'From ₹520/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 205,
  name: '100% ARABICA - PB',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'Peaberry Arabica Plantation beans for a vibrant and rich cup.',
  detailedDescription: 'Single bean per cherry means more density and complex flavor — ideal for elite brewing.',
  image: 'https://4.imimg.com/data4/DB/EO/MY-29045197/organic-coffee-bean-500x500.jpg',
  features: ['Dense Beans', 'Elite Flavor Profile', 'Peaberry Type'],
  rating: 4.9,
  price: 'From ₹610/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 206,
  name: '100% ARABICA - C',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Arabica Plantation',
  description: 'C-grade Arabica Plantation beans for mass market use.',
  detailedDescription: 'Used in economy blends or re-roasting applications while retaining a hint of Arabica origin.',
  image: 'https://4.imimg.com/data4/DB/EO/MY-29045197/organic-coffee-bean-500x500.jpg',
  features: ['Budget-Friendly', 'Reprocessing Use', 'Arabica Character'],
  rating: 4.2,
  price: 'From ₹480/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 207,
  name: '100% ROBUSTA - AAA',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'Top-tier AAA Robusta Cherry roasted beans with bold body and high strength.',
  detailedDescription: 'AAA-grade Robusta Cherry beans deliver intense flavor, strong caffeine kick, and a rich crema, perfect for strong espresso blends.',
  image: 'https://image.made-in-china.com/2f0j00rgyqJbTnblzt/Low-MOQ-Yunnan-Plantation-Arabica-Coffee-Beans-for-Blending-Espresso-Coffee.webp',
  features: ['High Caffeine', 'Thick Crema', 'Full Body'],
  rating: 4.8,
  price: 'From ₹480/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 208,
  name: '100% ROBUSTA - AA',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'AA-grade roasted Robusta Cherry beans for balanced strength and value.',
  detailedDescription: 'This grade balances strength and affordability, making it ideal for commercial blends and vending use.',
  image: 'https://image.made-in-china.com/2f0j00rgyqJbTnblzt/Low-MOQ-Yunnan-Plantation-Arabica-Coffee-Beans-for-Blending-Espresso-Coffee.webp',
  features: ['Balanced Strength', 'Commercial Grade', 'Good Aroma'],
  rating: 4.6,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 209,
  name: '100% ROBUSTA - A',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'Affordable A-grade Robusta Cherry roasted beans for strong blends.',
  detailedDescription: 'Robusta A beans are reliable for high-volume usage in blends needing strong character and solid crema.',
  image: 'https://image.made-in-china.com/2f0j00rgyqJbTnblzt/Low-MOQ-Yunnan-Plantation-Arabica-Coffee-Beans-for-Blending-Espresso-Coffee.webp',
  features: ['Strong Roast', 'Good Crema', 'Bulk Friendly'],
  rating: 4.5,
  price: 'From ₹440/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 210,
  name: '100% ARABICA - B',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'Unexpected Arabica B entry under Robusta Cherry – offers mellow finish in dark roast.',
  detailedDescription: 'Though categorized under Robusta Cherry, this Arabica B roast provides a smoother body and lighter profile suitable for cross-blending.',
  image: 'https://image.made-in-china.com/2f0j00rgyqJbTnblzt/Low-MOQ-Yunnan-Plantation-Arabica-Coffee-Beans-for-Blending-Espresso-Coffee.webp',
  features: ['Soft Body', 'Lower Bitterness', 'Blend Friendly'],
  rating: 4.4,
  price: 'From ₹470/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 211,
  name: '100% ROBUSTA - PB',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'Peaberry Robusta Cherry beans with intense and focused flavor.',
  detailedDescription: 'Roasted Robusta PB beans are denser and more flavorful, providing a punchy profile for specialty espresso.',
  image: 'https://image.made-in-china.com/2f0j00rgyqJbTnblzt/Low-MOQ-Yunnan-Plantation-Arabica-Coffee-Beans-for-Blending-Espresso-Coffee.webp',
  features: ['Peaberry Type', 'Punchy Taste', 'Specialty Roast'],
  rating: 4.8,
  price: 'From ₹495/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 212,
  name: '100% ROBUSTA - C',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Cherry',
  description: 'C-grade Robusta Cherry roasted beans for price-conscious applications.',
  detailedDescription: 'Ideal for economy blends or reprocessing, this grade offers value with acceptable strength.',
  image: 'https://image.made-in-china.com/2f0j00rgyqJbTnblzt/Low-MOQ-Yunnan-Plantation-Arabica-Coffee-Beans-for-Blending-Espresso-Coffee.webp',
  features: ['Low-Cost', 'Utility Grade', 'Consistent Supply'],
  rating: 4.2,
  price: 'From ₹420/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 213,
  name: '100% ROBUSTA - AAA',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'AAA Robusta Plantation roasted beans for rich, creamy, and bold espresso.',
  detailedDescription: 'Estate-grown Robusta AAA beans deliver thick crema, bold character, and long-lasting aftertaste.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/341655843/LQ/ID/DU/143067805/roasted-coffee-beans-robusta-cherry-aaa-500x500.jpg',
  features: ['Estate Quality', 'Bold Taste', 'Thick Crema'],
  rating: 4.9,
  price: 'From ₹490/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 214,
  name: '100% ROBUSTA - AA',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'AA Robusta Plantation beans roasted for commercial coffee formats.',
  detailedDescription: 'AA-grade beans offer reliability, great crema, and a full-bodied profile for high-traffic environments.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/341655843/LQ/ID/DU/143067805/roasted-coffee-beans-robusta-cherry-aaa-500x500.jpg',
  features: ['Reliable Roast', 'Full Body', 'Vending Friendly'],
  rating: 4.7,
  price: 'From ₹470/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 215,
  name: '100% ROBUSTA - A',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'A-grade Robusta Plantation beans with balanced roast and great volume.',
  detailedDescription: 'Roasted to deliver an even body and a nutty finish, this grade is widely used in budget blends.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/341655843/LQ/ID/DU/143067805/roasted-coffee-beans-robusta-cherry-aaa-500x500.jpg',
  features: ['Nutty Finish', 'Strong Base', 'Budget Fit'],
  rating: 4.5,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 216,
  name: '100% ARABICA - B',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'Arabica B beans under Robusta Plantation category for custom blends.',
  detailedDescription: 'An unusual inclusion of Arabica under Robusta subcategory, these B-grade beans help in softening strong Robusta-dominant blends.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/341655843/LQ/ID/DU/143067805/roasted-coffee-beans-robusta-cherry-aaa-500x500.jpg',
  features: ['Soft Blend', 'Low Bitterness', 'Custom Blending'],
  rating: 4.3,
  price: 'From ₹470/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 217,
  name: '100% ROBUSTA - PB',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'Robusta Peaberry Plantation beans for bold and exotic espresso.',
  detailedDescription: 'Peaberry beans from plantation regions deliver extra body and aromatic oils for deep, punchy espresso.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/341655843/LQ/ID/DU/143067805/roasted-coffee-beans-robusta-cherry-aaa-500x500.jpg',
  features: ['Peaberry Type', 'Aromatic Oils', 'Exotic Roast'],
  rating: 4.9,
  price: 'From ₹500/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 218,
  name: '100% ROBUSTA - C',
  category: 'Coffee Beans',
  subcategory: 'Roasted Beans',
  subSubcategory: 'Robusta Plantation',
  description: 'C-grade Robusta Plantation beans for economy-focused applications.',
  detailedDescription: 'C-grade roasted Robusta beans provide a solid base for low-cost blends and reprocessing.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/341655843/LQ/ID/DU/143067805/roasted-coffee-beans-robusta-cherry-aaa-500x500.jpg',
  features: ['Bulk Friendly', 'Low Price', 'Base Material'],
  rating: 4.1,
  price: 'From ₹430/kg',
  specifications: {
    'Variant': 'Dark,Mild,Light', 
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 219,
  name: 'Green Tea',
  category: 'Tea',
  subcategory: 'Instant Tea',
  description: 'Light, soothing, and rejuvenating instant green tea.',
  detailedDescription: 'Our Instant Green Tea is a wellness-forward brew crafted for those who seek calm, clarity, and convenience. With its light vegetal flavor and gentle aroma, it dissolves instantly — ideal for office pantries, travel kits, and health-conscious cafés.',
  image: 'https://img.taste.com.au/vX-dJiiL/w1200-h630-cfill/taste/2025/05/green-tea-211210-1.jpg',
  features: ['Antioxidant Rich', 'Quick Dissolve', 'Clean Taste', 'Low Caffeine'],
  rating: 4.9,
  price: 'From ₹340/kg',
  specifications: {
    'Variant': 'Light, Wellness',
    'Appeal': 'Health-conscious, corporate & spa service use',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id:220,
  name: 'Black Tea',
  category: 'Tea',
  subcategory: 'Instant Tea',
  description: 'Robust and bold instant black tea for classic tea drinkers.',
  detailedDescription: 'Our Instant Black Tea offers the timeless strength and aroma of traditional black tea in a quick-dissolve format. Whether served hot or cold, it delivers deep flavor and rich color instantly — perfect for offices, vending machines, and everyday sippers.',
  image: 'https://thedailyguardian.com/wp-content/uploads/2024/09/360_F_308200475_G0NDeL0Ep3KqpbntrAJEifYv2qvqxfK4.jpg',
  features: ['Quick Brew', 'Deep Color', 'Classic Aroma', 'Perfect for Hot & Cold Use'],
  rating: 4.9,
  price: 'From ₹320/kg',
  specifications: {
    'Variant': 'Strong, Regular',
    'Appeal': 'Classic tea lovers & vending partners',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 221,
  name: 'Regular Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Classic regular iced tea perfect for all-day refreshment.',
  detailedDescription: 'Our Regular Iced Tea delivers a smooth and balanced tea experience, ideal for summer sipping or pairing with meals.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Refreshing Flavor', 'Hydrating', 'All-Season Favorite', 'Easy Mix'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Refreshing for summer',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 222,
  name: 'Lemon Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Tangy and zesty lemon iced tea for a citrus kick.',
  detailedDescription: 'Our Lemon Iced Tea combines black tea with lemony zest to energize and cool you down in one go.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Citrus Freshness', 'Instant Energy', 'Chilled Ready'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Zesty and energizing',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 223,
  name: 'Peach Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Juicy and aromatic peach iced tea for a fruity twist.',
  detailedDescription: 'Delicious and mellow, our Peach Iced Tea gives a smooth, fruity punch — perfect for relaxing or entertaining.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Fruity Aroma', 'Smooth Taste', 'Cafe-Style Experience'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Youth-friendly and fruity',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 224,
  name: 'Watermelon Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Cool and refreshing watermelon iced tea.',
  detailedDescription: 'Beat the heat with our Watermelon Iced Tea — a sweet and cooling beverage for hot days.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Sweet Profile', 'Hydrating', 'Great for Parties'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Summer must-have',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 225,
  name: 'Pineapple Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Tropical pineapple twist to classic iced tea.',
  detailedDescription: 'This tropical delight fuses sweet pineapple flavor with premium tea for an exotic chilled experience.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Tropical Flavor', 'Sweet and Tart', 'Instant Chill'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Tropical escape in a sip',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 226,
  name: 'Raw Mango Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Tangy raw mango iced tea with a nostalgic kick.',
  detailedDescription: 'Inspired by Indian summers, this tangy raw mango iced tea gives a bold and refreshing kick.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Desi Flavor', 'Tangy & Zingy', 'Youth Favorite'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Local summer vibes',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 227,
  name: 'Orange Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Zesty orange iced tea with a citrus burst.',
  detailedDescription: 'Our Orange Iced Tea brings the tang of fresh orange paired with black tea for a rejuvenating cold drink.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Citrusy Kick', 'Tangy & Refreshing', 'High Energy'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Citrus lovers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 228,
  name: 'Green Apple Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Crisp green apple iced tea with a tangy twist.',
  detailedDescription: 'A tart yet smooth blend, Green Apple Iced Tea is loved for its vibrant profile and chill factor.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Tangy Freshness', 'Vibrant Color', 'Youth Favorite'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Cool & energetic',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 229,
  name: 'Blueberry Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Smooth blueberry iced tea with sweet undertones.',
  detailedDescription: 'Our Blueberry Iced Tea blends dark berry notes with black tea for a mellow, refreshing drink.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Berry Sweetness', 'Deep Color', 'Cafe-Style Experience'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Modern & smooth',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 230,
  name: 'Strawberry Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Strawberry infused iced tea for a fruity splash.',
  detailedDescription: 'Sweet and slightly tart, our Strawberry Iced Tea is a crowd-pleaser for all ages.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Fruity & Light', 'Vibrant Pink Hue', 'Refreshing Anytime'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Fun & fruity',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 231,
  name: 'Lime Mint Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Cool lime-mint combo for ultra-refreshing iced tea.',
  detailedDescription: 'A perfect fusion of minty chill and citrusy tang, ideal for summer sipping or post-meal refreshment.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Minty Chill', 'Zesty Lime', 'Digestive Friendly'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Fresh & cooling',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 232,
  name: 'Lemon Orange Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Citrus duo lemon-orange iced tea.',
  detailedDescription: 'Double citrus goodness in one glass – our Lemon Orange Iced Tea is tangy, bold, and uniquely refreshing.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Dual Citrus', 'Bold Flavors', 'Energizing'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Tangy & energizing',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 233,
  name: 'Beer Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Bold iced tea with a fun, beer-inspired twist.',
  detailedDescription: 'Mocktail-style Beer Iced Tea mimics the malty base and chill of a brew — without the alcohol.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Unique Flavor', 'Zero Alcohol', 'Mocktail Style'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Youth & parties',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 234,
  name: 'Whiskey Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Whiskey-flavored iced tea for bold drinkers.',
  detailedDescription: 'The flavor of a smoky whiskey infused into a cooling tea – bold and unforgettable.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Mocktail Innovation', 'Smoky & Cool', 'Bold Appeal'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Bold & experimental',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 235,
  name: 'Vodka Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Vodka-flavored iced tea for mocktail lovers.',
  detailedDescription: 'Crafted to mimic the sharp punch of vodka in a smooth iced tea format. No alcohol, all attitude.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Mocktail Vibes', 'Sharp Finish', 'Zero Alcohol'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Trendy & edgy',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 236,
  name: 'Rum Iced Tea',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Rum-inspired iced tea with warm, spicy undertones.',
  detailedDescription: 'Rich and spicy without alcohol – Rum Iced Tea is perfect for cozy evenings or mocktail nights.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Warm Notes', 'Mocktail Taste', 'Zero Proof'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Adults & mocktail fans',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 237,
  name: 'Instant Lemonade',
  category: 'Tea',
  subcategory: 'Iced Tea',
  description: 'Zesty and refreshing instant lemonade mix.',
  detailedDescription: 'A bright and tangy lemonade designed for instant preparation — perfect for hydration and refreshment on hot days.',
  image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3367-iced-tea.jpg',
  features: ['Instant Mix', 'Lemon Zest', 'Cooling Effect', 'No Brewing Required'],
  rating: 4.8,
  price: 'From ₹450/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Appeal': 'Summer refresher for all ages',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 238,
  name: 'Plain',
  category: 'Tea',
  subcategory: 'Amrutuleya',
  description: 'Classic plain amrutulya tea with a traditional Indian touch.',
  detailedDescription: 'This timeless blend reflects the authentic taste of street-side Indian chai — bold, milky, and aromatic. A staple for tea lovers who prefer no frills and full flavor.',
  image: 'https://t3.ftcdn.net/jpg/01/06/14/76/360_F_106147605_xmXfzxpraUtLQZkwTYWhjIJc0dkBkN8Y.jpg',
  features: ['Milky Body', 'Street-style Taste', 'Everyday Favorite'],
  rating: 4.7,
  price: 'From ₹320/kg',
  specifications: {
    'Variant': 'Strong, Regular',
    'Appeal': 'Daily chai drinkers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 239,
  name: 'Puneri',
  category: 'Tea',
  subcategory: 'Amrutuleya',
  description: 'Special Puneri-style tea with strong spices and bold aroma.',
  detailedDescription: 'Inspired by Pune’s love for full-bodied, spiced tea, this blend packs a punch with every sip. Ideal for those who love their tea thick and aromatic.',
  image: 'https://t3.ftcdn.net/jpg/01/06/14/76/360_F_106147605_xmXfzxpraUtLQZkwTYWhjIJc0dkBkN8Y.jpg',
  features: ['Bold Flavor', 'Spicy Aroma', 'Thick Texture'],
  rating: 4.8,
  price: 'From ₹330/kg',
  specifications: {
    'Variant': 'Extra Strong',
    'Appeal': 'Spice lovers & Punekars',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 240,
  name: 'Jaggery',
  category: 'Tea',
  subcategory: 'Amrutuleya',
  description: 'Healthy jaggery-based tea with natural sweetness.',
  detailedDescription: 'A wellness-oriented twist to regular tea — sweetened with jaggery instead of sugar. Perfect for those seeking a healthier and earthy chai experience.',
  image: 'https://t3.ftcdn.net/jpg/01/06/14/76/360_F_106147605_xmXfzxpraUtLQZkwTYWhjIJc0dkBkN8Y.jpg',
  features: ['No Refined Sugar', 'Warm Notes', 'Ayurvedic Appeal'],
  rating: 4.9,
  price: 'From ₹340/kg',
  specifications: {
    'Variant': 'Mild, Natural Sweetness',
    'Appeal': 'Health-conscious & traditionalists',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 241,
  name: 'Chai-Masala',
  category: 'Tea',
  subcategory: 'Amrutuleya',
  description: 'Masala-infused tea for that punch of Indian spices.',
  detailedDescription: 'Infused with clove, ginger, cardamom, and pepper — our Chai-Masala blend delivers warmth, boldness, and tradition in every sip.',
  image: 'https://t3.ftcdn.net/jpg/01/06/14/76/360_F_106147605_xmXfzxpraUtLQZkwTYWhjIJc0dkBkN8Y.jpg',
  features: ['Spice-Loaded', 'Warming Effect', 'Authentic Indian Taste'],
  rating: 4.8,
  price: 'From ₹340/kg',
  specifications: {
    'Variant': 'Strong & Spicy',
    'Appeal': 'Masala chai lovers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 242,
  name: 'Kesar',
  category: 'Tea',
  subcategory: 'Amrutuleya',
  description: 'Saffron-infused luxury chai with a royal twist.',
  detailedDescription: 'Premium blend of tea and real kesar (saffron) for a rich, indulgent cup. Perfect for special occasions or luxurious café menus.',
  image: 'https://t3.ftcdn.net/jpg/01/06/14/76/360_F_106147605_xmXfzxpraUtLQZkwTYWhjIJc0dkBkN8Y.jpg',
  features: ['Royal Aroma', 'Luxury Appeal', 'Special Occasions'],
  rating: 4.9,
  price: 'From ₹380/kg',
  specifications: {
    'Variant': 'Mild, Fragrant',
    'Appeal': 'Festive & premium segment',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 243,
  name: 'Elaichi',
  category: 'Tea',
  subcategory: 'Amrutuleya',
  description: 'Cardamom-flavored tea with aromatic freshness.',
  detailedDescription: 'A crowd favorite, our Elaichi Tea is infused with premium cardamom for a soothing, sweet aroma and delightful aftertaste.',
  image: 'https://t3.ftcdn.net/jpg/01/06/14/76/360_F_106147605_xmXfzxpraUtLQZkwTYWhjIJc0dkBkN8Y.jpg',
  features: ['Soothing Aroma', 'Mild Sweetness', 'Daily Favorite'],
  rating: 4.8,
  price: 'From ₹340/kg',
  specifications: {
    'Variant': 'Aromatic, Mild',
    'Appeal': 'Everyone from kids to elders',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 244,
  name: 'Basundi',
  category: 'Tea',
  subcategory: 'Amrutuleya',
  description: 'Dessert-inspired tea with sweet basundi flavor.',
  detailedDescription: 'For those who like their chai creamy and rich, Basundi Tea offers a dessert-like indulgence with hints of saffron, milk, and cardamom.',
  image: 'https://t3.ftcdn.net/jpg/01/06/14/76/360_F_106147605_xmXfzxpraUtLQZkwTYWhjIJc0dkBkN8Y.jpg',
  features: ['Milky Sweetness', 'Dessert Twist', 'Cafe-Style'],
  rating: 4.9,
  price: 'From ₹360/kg',
  specifications: {
    'Variant': 'Sweet & Creamy',
    'Appeal': 'Dessert lovers & cafés',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 245,
  name: 'BOP',
  category: 'Tea',
  subcategory: 'CTC Tea',
  description: 'Broken Orange Pekoe (BOP) grade for a strong and brisk brew.',
  detailedDescription: 'BOP is one of the most popular CTC tea grades, offering a perfect balance of color, strength, and aroma for daily consumption.',
  image: 'https://media.istockphoto.com/id/185100288/photo/cup-of-tea-with-a-teaspoon.jpg?s=612x612&w=0&k=20&c=xqyS3DwEtet7OI44ziFxpHKVWkMqVYk028J8KxIi_34=',
  features: ['Strong Liquor', 'Daily Use', 'Balanced Astringency'],
  rating: 4.7,
  price: 'From ₹240/kg',
  specifications: {
    'Variant': 'CTC Grade BOP',
    'Consumer Appeal': 'Households, Offices',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 246,
  name: 'BP',
  category: 'Tea',
  subcategory: 'CTC Tea',
  description: 'Broken Pekoe (BP) grade for a richer and more malty cup.',
  detailedDescription: 'BP is slightly larger than BOP and known for its deep color and malty flavor. Ideal for milk-based tea lovers.',
  image: 'https://media.istockphoto.com/id/185100288/photo/cup-of-tea-with-a-teaspoon.jpg?s=612x612&w=0&k=20&c=xqyS3DwEtet7OI44ziFxpHKVWkMqVYk028J8KxIi_34=',
  features: ['Malty Flavor', 'Deep Color', 'Great with Milk'],
  rating: 4.8,
  price: 'From ₹250/kg',
  specifications: {
    'Variant': 'CTC Grade BP',
    'Consumer Appeal': 'Tea stalls, Milk tea consumers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 247,
  name: 'OF',
  category: 'Tea',
  subcategory: 'CTC Tea',
  description: 'Orange Fannings (OF) for faster brew and stronger infusion.',
  detailedDescription: 'OF grade tea brews quickly and gives a sharp, brisk flavor. Preferred by quick-service setups and vending solutions.',
  image: 'https://media.istockphoto.com/id/185100288/photo/cup-of-tea-with-a-teaspoon.jpg?s=612x612&w=0&k=20&c=xqyS3DwEtet7OI44ziFxpHKVWkMqVYk028J8KxIi_34=',
  features: ['Quick Brew', 'Brisk Taste', 'Strong Infusion'],
  rating: 4.6,
  price: 'From ₹230/kg',
  specifications: {
    'Variant': 'CTC Grade OF',
    'Consumer Appeal': 'Quick-service setups',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 248,
  name: 'PD',
  category: 'Tea',
  subcategory: 'CTC Tea',
  description: 'Pekoe Dust (PD) grade for intense strength and deep liquor.',
  detailedDescription: 'PD is known for its fine granules and is widely used in hotels and tea stalls for strong, cost-effective cups.',
  image: 'https://media.istockphoto.com/id/185100288/photo/cup-of-tea-with-a-teaspoon.jpg?s=612x612&w=0&k=20&c=xqyS3DwEtet7OI44ziFxpHKVWkMqVYk028J8KxIi_34=',
  features: ['Extra Strong', 'Deep Color', 'High Yield'],
  rating: 4.7,
  price: 'From ₹220/kg',
  specifications: {
    'Variant': 'CTC Grade PD',
    'Consumer Appeal': 'Hotels, Dhabas',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 249,
  name: 'RD',
  category: 'Tea',
  subcategory: 'CTC Tea',
  description: 'Red Dust (RD) for vibrant color and aggressive strength.',
  detailedDescription: 'Red Dust CTC tea offers a sharp punch and dark liquor — ideal for heavy tea drinkers and low-cost applications.',
  image: 'https://media.istockphoto.com/id/185100288/photo/cup-of-tea-with-a-teaspoon.jpg?s=612x612&w=0&k=20&c=xqyS3DwEtet7OI44ziFxpHKVWkMqVYk028J8KxIi_34=',
  features: ['Dark Brew', 'Intense Strength', 'Budget Friendly'],
  rating: 4.5,
  price: 'From ₹210/kg',
  specifications: {
    'Variant': 'CTC Grade RD',
    'Consumer Appeal': 'Mass market, Vending',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 250,
  name: 'D (Dust)',
  category: 'Tea',
  subcategory: 'CTC Tea',
  description: 'Fine Dust grade for fast brewing and maximum strength.',
  detailedDescription: 'This ultra-fine grade produces a super strong brew almost instantly. Highly suited for premix and vending blends.',
  image: 'https://media.istockphoto.com/id/185100288/photo/cup-of-tea-with-a-teaspoon.jpg?s=612x612&w=0&k=20&c=xqyS3DwEtet7OI44ziFxpHKVWkMqVYk028J8KxIi_34=',
  features: ['Ultra Fine', 'High Caffeine Hit', 'Quick Infusion'],
  rating: 4.6,
  price: 'From ₹200/kg',
  specifications: {
    'Variant': 'CTC Grade Dust',
    'Consumer Appeal': 'Premix manufacturers, Institutional buyers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 251,
  name: 'CWS',
  category: 'Tea',
  subcategory: 'Tea Extract',
  subSubcategory: 'Green',
  description: 'Cold water soluble green tea extract for health blends.',
  detailedDescription: 'Our Green Tea Extract (CWS) instantly dissolves in cold beverages and retains maximum antioxidants. Ideal for health drinks, RTDs, and supplements.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/298120947/UG/BH/AV/8725392/green-tea-extract.jpeg',
  features: ['Cold Soluble', 'Antioxidant Rich', 'Low Caffeine'],
  rating: 4.8,
  price: 'From ₹600/kg',
  specifications: {
    'Variant': 'CWS',
    'Applications': 'Health drinks, Beverages',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 252,
  name: 'HWS',
  category: 'Tea',
  subcategory: 'Tea Extract',
  subSubcategory: 'Green',
  description: 'Hot water soluble green tea extract for instant formulations.',
  detailedDescription: 'Green Tea Extract (HWS) delivers excellent solubility in hot applications such as soups, broths, and hot teas. High in EGCG and antioxidants.',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/298120947/UG/BH/AV/8725392/green-tea-extract.jpeg',
  features: ['Hot Soluble', 'High EGCG', 'Nutraceutical Grade'],
  rating: 4.9,
  price: 'From ₹620/kg',
  specifications: {
    'Variant': 'HWS',
    'Applications': 'Soups, Supplements, Instant Tea',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 253,
  name: 'CWS',
  category: 'Tea',
  subcategory: 'Tea Extract',
  subSubcategory: 'Black',
  description: 'Cold water soluble black tea extract with rich color and flavor.',
  detailedDescription: 'This black tea CWS extract dissolves instantly in cold beverages while delivering a full-bodied tea flavor. Excellent for iced teas and functional drinks.',
  image: 'https://images.contentstack.io/v3/assets/bltf1dd6317cb2088d3/blt61c6d42b901f951c/66aaf6e5cfbd23e8187d9267/Black_Tea_Extract_(Fermented_Camellia_Sinensis).jpg',
  features: ['Cold Soluble', 'Rich Color', 'Natural Polyphenols'],
  rating: 4.7,
  price: 'From ₹580/kg',
  specifications: {
    'Variant': 'CWS',
    'Applications': 'RTDs, Iced Tea, Energy Blends',
    'Packaging': 'CUSTOM',
    'Shelf Life': '18 months'
  }
},
{
  id: 254,
  name: 'HWS',
  category: 'Tea',
  subcategory: 'Tea Extract',
  subSubcategory: 'Black',
  description: 'Hot water soluble black tea extract with classic strength.',
  detailedDescription: 'Optimized for hot beverages and infusions, Black Tea HWS extract is robust and ideal for instant teas and soups.',
  image: 'https://images.contentstack.io/v3/assets/bltf1dd6317cb2088d3/blt61c6d42b901f951c/66aaf6e5cfbd23e8187d9267/Black_Tea_Extract_(Fermented_Camellia_Sinensis).jpg',
  features: ['Hot Soluble', 'Classic Strength', 'Instant Format'],
  rating: 4.8,
  price: 'From ₹590/kg',
  specifications: {
    'Variant': 'HWS',
    'Applications': 'Instant Tea, Premix Blends',
    'Packaging': 'CUSTOM',
    'Shelf Life': '18 months'
  }
},
{
  id: 255,
  name: 'Gud Wali Chai (Jaggery Tea)',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Traditional jaggery-infused tea for earthy sweetness.',
  detailedDescription: 'Gud Wali Chai brings the richness of jaggery with a deep desi flavor profile that comforts and energizes.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Naturally Sweet', 'Immunity Boosting', 'No Refined Sugar'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Traditional & wellness seekers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 256,
  name: 'Ginger Tea / Adrak Chai',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Spicy ginger blend for warmth and digestion.',
  detailedDescription: 'Our Adrak Chai is packed with natural ginger flavor and known to soothe throats and energize the body.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Digestive Aid', 'Strong Aroma', 'Winter Favourite'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Everyday health seekers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 257,
  name: 'Butterscotch Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Rich, dessert-like butterscotch-flavored tea.',
  detailedDescription: 'This sweet and creamy blend is perfect for indulgent tea moments and pairs well with milk.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Sweet Aroma', 'Cafe Style', 'Unique Flavour'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Dessert tea lovers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 258,
  name: 'Vanilla Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Smooth and creamy vanilla-flavored black tea.',
  detailedDescription: 'Vanilla Tea offers a mellow, relaxing cup ideal for evenings or as a luxurious milk tea option.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Calming', 'Naturally Sweet', 'Aromatic'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Soothing & gentle',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 259,
  name: 'Pineapple Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Tropical pineapple twist to your cup of tea.',
  detailedDescription: 'Pineapple Tea adds a sweet, fruity zing — perfect served cold or hot.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Tropical Taste', 'Exotic Blend', 'Versatile Use'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Tropical tea fans',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 260,
  name: 'Rose Tea / Gulab Chai',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Delicate rose-infused tea with floral aroma.',
  detailedDescription: 'Gulab Chai is a fragrant experience — soothing, elegant, and perfect for relaxing rituals.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Floral Aroma', 'Stress Relieving', 'Elegant'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Premium wellness segment',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 261,
  name: 'Lemon Grass Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Herbal lemongrass infusion for freshness and clarity.',
  detailedDescription: 'Lemon Grass Tea is packed with antioxidants and a mild citrus profile, making it great for detox and daily clarity.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Citrusy Freshness', 'Detox Friendly', 'Zero Caffeine'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Detox & clarity',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 262,
  name: 'Strawberry Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Fruity and vibrant strawberry-flavored tea.',
  detailedDescription: 'Enjoy the sweet and tangy notes of strawberries in this aromatic, berry-forward tea blend.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Berry Aroma', 'Youth Appeal', 'Vibrant Taste'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Young & fruity lovers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 263,
  name: 'Raspberry Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Tart and fruity raspberry-infused tea.',
  detailedDescription: 'This tea delivers a punch of flavor with subtle tartness — great as a refreshing iced or hot option.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Tart Taste', 'Bright Red Hue', 'Iced or Hot'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Fruity and punchy profiles',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 264,
  name: 'Chocolate Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Decadent chocolate tea for dessert-like indulgence.',
  detailedDescription: 'A chocolate lover’s dream — this tea offers a bold cocoa note paired with smooth black tea.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Cocoa Rich', 'Creamy Taste', 'Cafe Style'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Dessert beverage fans',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 265,
  name: 'Orange Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Citrusy orange tea with a zesty profile.',
  detailedDescription: 'Zingy and bold, Orange Tea adds citrus cheer to your day. Enjoy hot or iced.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Vitamin C Boost', 'Zesty Profile', 'Bright Liquor'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Citrus tea lovers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 266,
  name: 'Mixed Berry Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'A blend of berries in one delicious tea.',
  detailedDescription: 'Strawberries, raspberries, and blueberries blend into a symphony of fruity flavors in this vibrant tea.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Multi-Berry Blend', 'Aromatic & Tart', 'Rich in Color'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Fruity & fun segment',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 267,
  name: 'Coconut Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Exotic coconut tea with creamy tropical notes.',
  detailedDescription: 'Tropical indulgence in a cup — this coconut tea delivers a creamy mouthfeel and subtle sweetness.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Tropical Twist', 'Smooth Texture', 'Sweet Finish'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Extra Strong',
    'Consumer Appeal': 'Exotic tea lovers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 268,
  name: 'Caramel Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Smooth and buttery caramel-infused tea.',
  detailedDescription: 'Caramel Tea blends sweet, rich caramel notes with strong tea for a cozy, dessert-like cup — perfect as a treat.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Buttery Taste', 'Creamy Finish', 'Great With Milk'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Mild',
    'Consumer Appeal': 'Dessert tea lovers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 269,
  name: 'Blueberry Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Fruity blueberry flavored tea with a tangy-sweet edge.',
  detailedDescription: 'This tea delivers bright blueberry flavor that’s great served both hot and iced. A favorite among young audiences.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Berry Flavor', 'Sweet & Tangy', 'Youthful Vibe'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong, Mild',
    'Consumer Appeal': 'Fruity & fun',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 270,
  name: 'Banana Tea',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Mild and unique banana flavored tea.',
  detailedDescription: 'Banana Tea is mellow and soothing — perfect for those who enjoy soft, tropical undertones in their brew.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Tropical Vibes', 'Mild Sweetness', 'Novelty Flavor'],
  rating: 4.7,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Mild',
    'Consumer Appeal': 'Novelty drinkers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 271,
  name: 'Tandoori Chai',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Smoky and earthy clay pot-style chai.',
  detailedDescription: 'Tandoori Chai brings a rustic, smoky flavor inspired by traditional kulhad-brewed roadside tea stalls.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Smoky Aroma', 'Earthy Taste', 'Kulhad-Style Experience'],
  rating: 4.9,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong',
    'Consumer Appeal': 'Desi and nostalgic',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 272,
  name: 'Lemon Chai',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Zesty lemon twist to traditional milk chai.',
  detailedDescription: 'Lemon Chai is a bright and energizing drink that adds citrus sharpness to a soothing black tea base.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Zesty Kick', 'Morning Favorite', 'Hot or Iced'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Mild, Strong',
    'Consumer Appeal': 'Fresh and vibrant drinkers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 273,
  name: 'Coffee Chai',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Fusion of bold tea with coffee notes.',
  detailedDescription: 'Coffee Chai combines the richness of coffee with the structure of chai — a powerful, aromatic blend for adventurous palates.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Tea-Coffee Fusion', 'Bold & Robust', 'Unique Profile'],
  rating: 4.7,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong',
    'Consumer Appeal': 'Coffee converts & explorers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 274,
  name: 'Sweet Almond Chai (Badam Chai)',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Nutty almond-flavored chai with sweet notes.',
  detailedDescription: 'Badam Chai offers the richness of almonds blended into a classic milk tea base — comforting and luxurious.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Nutty Flavor', 'Milk Tea Friendly', 'Rich & Aromatic'],
  rating: 4.9,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Mild, Strong',
    'Consumer Appeal': 'Premium milk chai segment',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 275,
  name: 'Irani Chai Masala',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Creamy and strong Irani-style masala chai.',
  detailedDescription: 'Inspired by Hyderabad’s iconic cafés, Irani Chai Masala is thick, spiced, and sweet — a cult classic.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Thick & Spiced', 'Cafe-Style', 'Creamy Finish'],
  rating: 4.9,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong',
    'Consumer Appeal': 'Spiced tea fans & café lovers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 276,
  name: 'Basundi Chai',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Milk-rich Basundi flavored chai with dessert vibes.',
  detailedDescription: 'This tea mimics the flavor of Basundi — thickened milk dessert — in a sweet, indulgent chai format.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Milky & Sweet', 'Dessert Profile', 'Gujarati Inspired'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Mild, Rich',
    'Consumer Appeal': 'Dessert-style tea drinkers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 277,
  name: 'Beer Flavoured Tea | Non Alcoholic',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Bold beer-inspired tea — fun, fizzy, and non-alcoholic.',
  detailedDescription: 'A playful take on mocktail tea. Beer Flavoured Tea is a carbonated-style drink base with malty tea infusion.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Mocktail Inspired', 'Non-Alcoholic', 'Party-Friendly'],
  rating: 4.7,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Mild',
    'Consumer Appeal': 'Youth & experimental drinkers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 278,
  name: 'Vodka Flavoured Tea | Non Alcoholic',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Vodka-style tea flavor without the alcohol.',
  detailedDescription: 'A classy, bold, and edgy mocktail tea — vodka notes infused into a cold or hot tea base for unique sipping.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Bold Edge', 'Zero Proof', 'Premium Mocktail Base'],
  rating: 4.7,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Strong',
    'Consumer Appeal': 'Mocktail lovers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 279,
  name: 'Whisky Flavoured Tea | Non Alcoholic',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Smoky and mature whisky-style tea.',
  detailedDescription: 'Whisky Flavoured Tea is crafted for those who enjoy the deep, oaky character of whisky — minus the alcohol.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Smoky Finish', 'Zero Alcohol', 'Evening Favorite'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Mild',
    'Consumer Appeal': 'Grown-up mocktail market',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 280,
  name: 'Rum Flavoured Tea | Non Alcoholic',
  category: 'Tea',
  subcategory: 'Flavoured Tea',
  description: 'Rum-inspired mocktail tea for warm spice lovers.',
  detailedDescription: 'A deep, warm, and slightly spiced blend that captures rum character in a non-alcoholic tea format.',
  image: 'https://fairviewadc.com/wp-content/uploads/2024/03/herbal-teas-healing.jpg',
  features: ['Warm Spice', 'Mocktail Feel', 'Comforting'],
  rating: 4.8,
  price: 'From ₹460/kg',
  specifications: {
    'Variant': 'Mild, Spiced',
    'Consumer Appeal': 'Novelty seekers & winter sippers',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 281,
  name: 'NDC',
  category: 'Others',
  description: 'Non-Dairy Creamer for vending and premix applications.',
  detailedDescription: 'NDC (Non-Dairy Creamer) is a high-solubility whitener used widely in tea and coffee premixes. Offers creamy texture without dairy content.',
  image: 'https://image.made-in-china.com/2f0j00HFraogOCAlum/Fat-Filled-Milk-Powder-Dry-Milk-Powder.webp',
  features: ['Lactose-Free', 'High Solubility', 'Smooth Mouthfeel'],
  rating: 4.7,
  price: 'From ₹200/kg',
  specifications: {
    'Applications': 'Premix, Vending',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 282,
  name: 'Dairy Whiteners',
  category: 'Others',
  description: 'Milk-based whitener for rich and creamy tea or coffee.',
  detailedDescription: 'Dairy Whitener enhances the taste and color of tea and coffee, offering convenience and shelf stability in bulk formats.',
  image: 'https://img.freepik.com/premium-photo/abstract-white-powder-steel-spoon_488220-61362.jpg',
  features: ['Rich Creaminess', 'Instant Mix', 'Long Shelf Life'],
  rating: 4.8,
  price: 'From ₹240/kg',
  specifications: {
    'Applications': 'Vending, Premix, Daily Use',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 283,
  name: 'Chicory',
  category: 'Others',
  description: 'Roasted chicory powder for blending with coffee.',
  detailedDescription: 'Chicory is used to mellow coffee blends, adding body and depth. It is a popular ingredient in South Indian and French-style coffees.',
  image: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147582967/images/6af2afc-d628-5aac-fece-2e33af77a4e2_chicory-root-coffee-06.jpg',
  features: ['Natural Additive', 'Dark Roast', 'Caffeine-Free'],
  rating: 4.6,
  price: 'From ₹180/kg',
  specifications: {
    'Applications': 'Coffee Blending, Health Drinks',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},
{
  id: 284,
  name: 'Jaggery Powder',
  category: 'Others',
  description: 'Natural powdered jaggery for healthy sweetening.',
  detailedDescription: 'This finely powdered jaggery is chemical-free and unrefined — ideal as a substitute for white sugar in beverages and cooking.',
  image: 'https://goodfood.ae/cdn/shop/files/JAGGERYPOWDER.jpg?v=1690434248',
  features: ['Unrefined', 'Iron Rich', 'Healthy Sugar Substitute'],
  rating: 4.8,
  price: 'From ₹160/kg',
  specifications: {
    'Applications': 'Tea, Coffee, Indian Cuisine',
    'Packaging': 'CUSTOM',
    'Shelf Life': '12 months'
  }
},

  

  // {
  //   id: 2,
  //   name: 'Spray Dried Coffee',
  //   category: 'Plain Coffee',
  //   subcategory: 'Spray Dried',
  //   description: 'High-quality spray dried instant coffee powder',
  //   detailedDescription: 'Our Spray Dried Coffee is produced using advanced spray drying technology to preserve the natural coffee aroma and flavor. Perfect for instant coffee preparations and industrial applications.',
  //   image: 'https://www.blueberryagro.com/wp-content/uploads/2020/09/ratio6x5-600.jpg',
  //   features: ['Instant Solubility', 'Rich Aroma', 'Long Shelf Life', 'Industrial Grade'],
  //   rating: 4.8,
  //   price: 'From ₹380/kg',
  //   specifications: {
  //     'Process': 'Spray Dried',
  //     'Solubility': '99.5%',
  //     'Packaging': 'CUSTOM',
  //     'Shelf Life': '12 months'
  //   }
  // },

  // {
  //   id: 3,
  //   name: 'Agglomerated Coffee',
  //   category: 'Plain Coffee',
  //   subcategory: 'Agglomerated',
  //   description: 'Premium agglomerated instant coffee with enhanced solubility',
  //   detailedDescription: 'Our Agglomerated Coffee undergoes a special agglomeration process that creates larger, more porous granules for superior solubility and flavor release. Ideal for premium instant coffee products.',
  //   image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg',
  //   features: ['Enhanced Solubility', 'Premium Quality', 'Uniform Granules', 'Superior Flavor'],
  //   rating: 4.7,
  //   price: 'From ₹420/kg',
  //   specifications: {
  //     'Variant': 'Regular',
  //     'Process': 'Agglomerated',
  //     'Packaging': 'CUSTOM',
  //     'Shelf Life': '24 months'
  //   }
  // },
  // {
  //   id: 4,
  //   name: 'Freeze Dried Coffee',
  //   category: 'Plain Coffee',
  //   subcategory: 'Freeze Dried',
  //   description: 'Premium freeze-dried coffee with exceptional flavor retention',
  //   detailedDescription: 'Our Freeze Dried Coffee is processed using advanced freeze-drying technology that preserves the original coffee flavor and aroma better than any other method. This premium product offers the closest taste to freshly brewed coffee.',
  //   image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg',
  //   features: ['Superior Flavor', 'Freeze Dried Process', 'Premium Quality', 'Excellent Aroma'],
  //   rating: 4.9,
  //   price: 'From ₹650/kg',
  //   specifications: {
  //     'Process': 'Freeze Dried',
  //     'Moisture Content': 'Max 4%',
  //     'Flavor Retention': '95%+',
  //     'Packaging': '10kg, 25kg',
  //     'Shelf Life': '36 months'
  //   }
  // },
  // {
  //   id: 5,
  //   name: 'Tea Cafe Premix',
  //   category: 'Premix',
  //   subcategory: 'Tea Premix',
  //   subSubcategory: 'Cafe Premix',
  //   description: '3-in-1 tea premix for cafes and restaurants',
  //   detailedDescription: 'Our Tea Cafe Premix is a perfectly balanced blend of tea, sugar, and creamer designed specifically for commercial use. Just add hot water for a consistent, delicious cup every time.',
  //   image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg',
  //   features: ['3-in-1 Formula', 'Consistent Quality', 'Easy Preparation', 'Commercial Grade'],
  //   rating: 4.6,
  //   price: 'From ₹320/kg',
  //   specifications: {
  //     'Components': 'Tea, Sugar, Creamer',
  //     'Preparation': 'Just add hot water',
  //     'Serving Size': '15-20g per cup',
  //     'Packaging': '1kg, 25kg',
  //     'Shelf Life': '12 months'
  //   }
  // },
  // {
  //   id: 6,
  //   name: 'Coffee Vending Machine Premix',
  //   category: 'Premix',
  //   subcategory: 'Coffee Premix',
  //   subSubcategory: 'Vending Machine Premix',
  //   description: 'Specially formulated coffee premix for vending machines',
  //   detailedDescription: 'Our Coffee Vending Machine Premix is engineered for optimal performance in automatic vending machines. It dissolves completely and consistently, ensuring every cup meets quality standards.',
  //   image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg',
  //   features: ['Vending Optimized', 'Complete Dissolution', 'Consistent Taste', 'Machine Compatible'],
  //   rating: 4.5,
  //   price: 'From ₹280/kg',
  //   specifications: {
  //     'Formulation': 'Vending Machine Specific',
  //     'Dissolution Time': '< 30 seconds',
  //     'Particle Size': 'Fine mesh',
  //     'Packaging': '25kg bags',
  //     'Shelf Life': '18 months'
  //   }
  // },
  // {
  //   id: 7,
  //   name: 'Premium Green Coffee Beans',
  //   category: 'Coffee Beans',
  //   subcategory: 'Green Beans',
  //   description: 'Premium green coffee beans for roasting',
  //   detailedDescription: 'Sourced from the finest coffee estates, our Premium Green Coffee Beans are perfect for custom roasting. High-quality beans with excellent flavor potential.',
  //   image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
  //   features: ['Premium Grade', 'Custom Roasting', 'High Quality', 'Traceable Source'],
  //   rating: 4.8,
  //   price: 'From ₹450/kg',
  //   specifications: {
  //     'Bean Type': '100% Arabica',
  //     'Grade': 'AA/AAA',
  //     'Processing': 'Washed/Natural',
  //     'Packaging': '60kg jute bags',
  //     'Shelf Life': '12 months'
  //   }
  // },
  // {
  //   id: 8,
  //   name: 'Arabia Cherry Roasted Beans',
  //   category: 'Coffee Beans',
  //   subcategory: 'Roasted Beans',
  //   subSubcategory: 'Arabia Cherry',
  //   description: 'Premium Arabia Cherry roasted coffee beans',
  //   detailedDescription: 'Our Arabia Cherry roasted beans offer exceptional flavor with fruity and wine-like characteristics. Perfect for specialty coffee applications.',
  //   image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
  //   features: ['Arabia Cherry Variety', 'Fruity Notes', 'Premium Roast', 'Specialty Grade'],
  //   rating: 4.9,
  //   price: 'From ₹650/kg',
  //   specifications: {
  //     'Bean Type': 'Arabia Cherry',
  //     'Roast Level': 'Medium',
  //     'Flavor Profile': 'Fruity, Wine-like',
  //     'Packaging': '1kg, 5kg bags',
  //     'Shelf Life': '6 months'
  //   }
  // },
  // {
  //   id: 9,
  //   name: 'NDC Milk Powder',
  //   category: 'NDC',
  //   description: 'Non-Dairy Creamer powder for coffee applications',
  //   detailedDescription: 'Our NDC Milk Powder is a high-quality non-dairy creamer specifically formulated for coffee applications. It provides excellent whitening, smooth texture, and enhanced mouthfeel to coffee beverages.',
  //   image: 'https://images.pexels.com/photos/4117625/pexels-photo-4117625.jpeg',
  //   features: ['Non-Dairy', 'Excellent Whitening', 'Smooth Texture', 'Coffee Optimized'],
  //   rating: 4.4,
  //   price: 'From ₹240/kg',
  //   specifications: {
  //     'Type': 'Non-Dairy Creamer',
  //     'Fat Content': '28-32%',
  //     'Protein': '2-4%',
  //     'Packaging': '25kg bags',
  //     'Shelf Life': '24 months'
  //   }
  // },
  // {
  //   id: 10,
  //   name: 'Instant Tea Block',
  //   category: 'Tea',
  //   subcategory: 'Instant Tea',
  //   subSubcategory: 'Block',
  //   description: 'High-quality instant tea in block form',
  //   detailedDescription: 'Our Instant Tea Block provides rich tea flavor in a convenient block format. Perfect for commercial tea preparations.',
  //   image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  //   features: ['Instant Preparation', 'Rich Flavor', 'Block Format', 'Commercial Grade'],
  //   rating: 4.7,
  //   price: 'From ₹180/kg',
  //   specifications: {
  //     'Form': 'Block',
  //     'Solubility': 'Instant',
  //     'Caffeine': '40-50mg per cup',
  //     'Packaging': '5kg, 20kg blocks',
  //     'Shelf Life': '24 months'
  //   }
  // },
  // {
  //   id: 11,
  //   name: 'Amrutuleya Puneri Tea',
  //   category: 'Tea',
  //   subcategory: 'Amrutuleya',
  //   subSubcategory: 'Puneri',
  //   description: 'Traditional Puneri style Amrutuleya tea blend',
  //   detailedDescription: 'Our Amrutuleya Puneri Tea is a traditional blend that captures the authentic taste of Pune-style tea. Rich in flavor and aroma.',
  //   image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  //   features: ['Traditional Recipe', 'Puneri Style', 'Rich Aroma', 'Authentic Taste'],
  //   rating: 4.8,
  //   price: 'From ₹220/kg',
  //   specifications: {
  //     'Style': 'Puneri Traditional',
  //     'Blend': 'Tea with spices',
  //     'Origin': 'Maharashtra',
  //     'Packaging': '1kg, 10kg',
  //     'Shelf Life': '18 months'
  //   }
  // },
  // {
  //   id: 12,
  //   name: 'CTC Tea BOP Grade',
  //   category: 'Tea',
  //   subcategory: 'CTC Tea',
  //   subSubcategory: 'BOP',
  //   description: 'Premium CTC Tea Broken Orange Pekoe grade',
  //   detailedDescription: 'Our CTC Tea BOP Grade offers superior quality with excellent color and flavor. Perfect for commercial tea service.',
  //   image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  //   features: ['BOP Grade', 'Strong Color', 'Rich Flavor', 'Premium Quality'],
  //   rating: 4.6,
  //   price: 'From ₹200/kg',
  //   specifications: {
  //     'Grade': 'BOP (Broken Orange Pekoe)',
  //     'Process': 'CTC',
  //     'Color': 'Strong',
  //     'Packaging': '20kg boxes',
  //     'Shelf Life': '24 months'
  //   }
  // },
  {
    id: 200,
    name: 'Crystal Coffee',
    category: 'Crystal Coffee',
    description: 'Revolutionary crystal coffee with enhanced clarity and taste',
    detailedDescription: 'Our new Crystal Coffee represents a breakthrough in coffee processing technology. Using advanced crystallization techniques, we create coffee crystals that dissolve instantly while maintaining exceptional clarity and pure coffee taste.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/023/513/862/small_2x/hot-coffee-cup-with-coffee-beans-wallpaper-coffee-photo.jpg',
    features: ['Crystal Clear', 'Instant Dissolution', 'Pure Taste', 'Innovative Technology'],
    rating: 4.9,
    price: 'From ₹580/kg',
    isNew: true,
    specifications: {
      'Process': 'Advanced Crystallization',
      'Clarity': 'Crystal Clear',
      'Dissolution': 'Instant',
      'Packaging': '500g, 5kg',
      'Shelf Life': '24 months'
    }
  },
];

export const categories = Object.keys(categoryStructure);

// Filter function similar to the example you provided
export const filterItems = (items, query) => {
  if (!query) return items;
  
  const lowerQuery = query.toLowerCase();
  
  return items.filter(item => {
    // Check if query matches product name
    if (item.name.toLowerCase().includes(lowerQuery)) {
      return true;
    }
    
    // Check if query matches product description
    if (item.description.toLowerCase().includes(lowerQuery)) {
      return true;
    }
    
    // Check if query matches category
    if (item.category.toLowerCase().includes(lowerQuery)) {
      return true;
    }
    
    // Check if query matches subcategory
    if (item.subcategory && item.subcategory.toLowerCase().includes(lowerQuery)) {
      return true;
    }
    
    // Check if query matches sub-subcategory
    if (item.subSubcategory && item.subSubcategory.toLowerCase().includes(lowerQuery)) {
      return true;
    }
    
    return false;
  });
};

// Helper function to flatten nested category structure
export const getFlatCategoryStructure = () => {
  const flatStructure = {};
  
  Object.keys(categoryStructure).forEach(category => {
    const subcategories = categoryStructure[category];
    
    if (Array.isArray(subcategories)) {
      flatStructure[category] = subcategories;
    } else if (typeof subcategories === 'object') {
      flatStructure[category] = Object.keys(subcategories);
      
      // Add sub-subcategories
      Object.keys(subcategories).forEach(subcat => {
        if (Array.isArray(subcategories[subcat])) {
          flatStructure[`${category}-${subcat}`] = subcategories[subcat];
        }
      });
    } else {
      flatStructure[category] = [];
    }
  });
  
  return flatStructure;
};

// API-like functions
export const getProducts = () => products;
export const getCategories = () => categories;
export const getCategoryStructure = () => categoryStructure;
export const getProductsByCategory = (category) => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};
export const getProductsBySubcategory = (subcategory) => {
  return products.filter(product => product.subcategory === subcategory);
};
export const searchProducts = (searchTerm) => {
  return filterItems(products, searchTerm);
};