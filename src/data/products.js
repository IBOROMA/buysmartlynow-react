
export const products = [
    // --- ELECTRONICS (10 items) ---
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        category: 'Electronics',
        oldPrice: '₦1,800,000',
        newPrice: '₦1,550,000',
        price: '₦1,550,000',
        discount: '15%',
        image: 'https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?auto=format&fit=crop&q=80&w=800',
        description: 'Titanium design, A17 Pro chip, 48MP Main camera, and USB-C.',
        rating: 4.8,
        reviews: 120,
        retailers: [
            { name: 'Amazon', price: '₦1,550,000', url: '#' },
            { name: 'Jumia', price: '₦1,600,000', url: '#' },
            { name: 'Konga', price: '₦1,580,000', url: '#' }
        ]
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        category: 'Electronics',
        oldPrice: '₦1,900,000',
        newPrice: '₦1,650,000',
        price: '₦1,650,000',
        discount: '15%',
        image: 'https://images.unsplash.com/photo-1705585174953-9b2aa8afc174?auto=format&fit=crop&q=80&w=800',
        description: 'Galaxy AI is here. Epic titanium design. Note-worthy built-in S Pen.',
        rating: 4.9,
        reviews: 85,
        retailers: [
            { name: 'Samsung Store', price: '₦1,650,000', url: '#' },
            { name: 'Slot', price: '₦1,700,000', url: '#' },
            { name: 'Jumia', price: '₦1,680,000', url: '#' }
        ]
    },
    {
        id: 3,
        name: 'Sony WH-1000XM5',
        category: 'Electronics',
        oldPrice: '₦450,000',
        newPrice: '₦380,000',
        price: '₦380,000',
        discount: '15%',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400&h=400',
        description: 'Industry-leading noise cancellation, crystal clear hands-free calling.',
        rating: 4.7,
        reviews: 210,
        retailers: [
            { name: 'Sony', price: '₦380,000', url: '#' },
            { name: 'Amazon', price: '₦400,000', url: '#' }
        ]
    },
    {
        id: 4,
        name: 'MacBook Air M2',
        category: 'Electronics',
        oldPrice: '₦1,300,000',
        newPrice: '₦1,150,000',
        price: '₦1,150,000',
        discount: '12%',
        image: 'https://images.unsplash.com/photo-1659135890064-d57187f0946c?auto=format&fit=crop&q=80&w=800',
        description: 'Supercharged by M2. Strikingly thin design. Fast, efficient, and silent.',
        rating: 4.8,
        reviews: 95,
        retailers: [
            { name: 'Apple', price: '₦1,150,000', url: '#' },
            { name: 'Slot', price: '₦1,200,000', url: '#' }
        ]
    },
    {
        id: 101,
        name: 'Apple Watch Series 9',
        category: 'Electronics',
        oldPrice: '₦400,000',
        newPrice: '₦350,000',
        price: '₦350,000',
        discount: '12%',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800',
        description: 'Smarter. Brighter. Mightier. The most powerful chip in Apple Watch ever.',
        rating: 4.7,
        reviews: 150,
        retailers: [
            { name: 'Apple', price: '₦350,000', url: '#' },
            { name: 'Jumia', price: '₦360,000', url: '#' }
        ]
    },
    {
        id: 102,
        name: 'Dell XPS 13',
        category: 'Electronics',
        oldPrice: '₦1,600,000',
        newPrice: '₦1,400,000',
        price: '₦1,400,000',
        discount: '12%',
        image: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=800',
        description: 'Our smallest 13-inch laptop features a borderless display and long battery life.',
        rating: 4.6,
        reviews: 80,
        retailers: [
            { name: 'Dell', price: '₦1,400,000', url: '#' },
            { name: 'Amazon', price: '₦1,420,000', url: '#' }
        ]
    },
    {
        id: 103,
        name: 'LG C3 OLED TV (55")',
        category: 'Electronics',
        oldPrice: '₦1,200,000',
        newPrice: '₦950,000',
        price: '₦950,000',
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800',
        description: 'The advanced LG OLED evo C-Series is better than ever.',
        rating: 4.9,
        reviews: 65,
        retailers: [
            { name: 'LG Store', price: '₦950,000', url: '#' },
            { name: 'Slot', price: '₦980,000', url: '#' }
        ]
    },
    {
        id: 104,
        name: 'PlayStation 5 Slim',
        category: 'Electronics',
        oldPrice: '₦650,000',
        newPrice: '₦550,000',
        price: '₦550,000',
        discount: '15%',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800',
        description: 'Experience lightning-fast loading with an ultra-high speed SSD.',
        rating: 4.9,
        reviews: 300,
        retailers: [
            { name: 'Sony', price: '₦550,000', url: '#' },
            { name: 'Jumia', price: '₦570,000', url: '#' }
        ]
    },
    {
        id: 105,
        name: 'GoPro Hero 12',
        category: 'Electronics',
        oldPrice: '₦450,000',
        newPrice: '₦380,000',
        price: '₦380,000',
        discount: '15%',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800',
        description: 'Unbelievable image quality, even better HyperSmooth video stabilization.',
        rating: 4.7,
        reviews: 45,
        retailers: [
            { name: 'GoPro', price: '₦380,000', url: '#' },
            { name: 'Amazon', price: '₦390,000', url: '#' }
        ]
    },
    {
        id: 106,
        name: 'Canon EOS R50',
        category: 'Electronics',
        oldPrice: '₦850,000',
        newPrice: '₦750,000',
        price: '₦750,000',
        discount: '11%',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
        description: 'A compact mirrorless camera for content creators.',
        rating: 4.8,
        reviews: 30,
        retailers: [
            { name: 'Canon', price: '₦750,000', url: '#' },
            { name: 'B&H', price: '₦760,000', url: '#' }
        ]
    },

    // --- FASHION (10 items) ---
    {
        id: 5,
        name: 'Nike Air Max 270',
        category: 'Fashion',
        oldPrice: '₦120,000',
        newPrice: '₦85,000',
        price: '₦85,000',
        discount: '30%',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400&h=400',
        description: 'Legendary Air comfort. Sleek, sporty design for everyday wear.',
        rating: 4.5,
        reviews: 320,
        retailers: [
            { name: 'Nike Shop', price: '₦85,000', url: '#' },
            { name: 'FootLocker', price: '₦95,000', url: '#' }
        ]
    },
    {
        id: 201,
        name: 'Adidas Ultraboost Light',
        category: 'Fashion',
        oldPrice: '₦130,000',
        newPrice: '₦95,000',
        price: '₦95,000',
        discount: '27%',
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=800',
        description: 'Lightest Ultraboost ever. Epic energy in every stride.',
        rating: 4.7,
        reviews: 210,
        retailers: [
            { name: 'Adidas', price: '₦95,000', url: '#' },
            { name: 'Zalando', price: '₦100,000', url: '#' }
        ]
    },
    {
        id: 202,
        name: 'Levi\'s 501 Original Jeans',
        category: 'Fashion',
        oldPrice: '₦50,000',
        newPrice: '₦35,000',
        price: '₦35,000',
        discount: '30%',
        image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=800',
        description: 'The blueprint for every pair of jeans in existence.',
        rating: 4.6,
        reviews: 400,
        retailers: [
            { name: 'Levi\'s', price: '₦35,000', url: '#' },
            { name: 'Amazon', price: '₦38,000', url: '#' }
        ]
    },
    {
        id: 203,
        name: 'Ray-Ban Aviator Classic',
        category: 'Fashion',
        oldPrice: '₦150,000',
        newPrice: '₦110,000',
        price: '₦110,000',
        discount: '26%',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
        description: 'Timeless style, authenticity and freedom of expression.',
        rating: 4.8,
        reviews: 180,
        retailers: [
            { name: 'Ray-Ban', price: '₦110,000', url: '#' },
            { name: 'Sunglass Hut', price: '₦115,000', url: '#' }
        ]
    },
    {
        id: 204,
        name: 'Zara Oversized Blazer',
        category: 'Fashion',
        oldPrice: '₦60,000',
        newPrice: '₦45,000',
        price: '₦45,000',
        discount: '25%',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
        description: 'Tailored blazer with lapel collar and long sleeves.',
        rating: 4.5,
        reviews: 120,
        retailers: [
            { name: 'Zara', price: '₦45,000', url: '#' },
            { name: 'ASOS', price: '₦48,000', url: '#' }
        ]
    },
    {
        id: 205,
        name: 'Gucci Leather Belt',
        category: 'Fashion',
        oldPrice: '₦450,000',
        newPrice: '₦380,000',
        price: '₦380,000',
        discount: '15%',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
        description: 'Double G buckle leather belt.',
        rating: 4.9,
        reviews: 80,
        retailers: [
            { name: 'Gucci', price: '₦380,000', url: '#' },
            { name: 'Farfetch', price: '₦390,000', url: '#' }
        ]
    },
    {
        id: 206,
        name: 'H&M Cotton Hoodie',
        category: 'Fashion',
        oldPrice: '₦20,000',
        newPrice: '₦15,000',
        price: '₦15,000',
        discount: '25%',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800',
        description: 'Relaxed-fit sweatshirt hoodie in cotton-blend fabric.',
        rating: 4.4,
        reviews: 500,
        retailers: [
            { name: 'H&M', price: '₦15,000', url: '#' },
            { name: 'Jumia', price: '₦17,000', url: '#' }
        ]
    },
    {
        id: 207,
        name: 'Timberland Premium Boots',
        category: 'Fashion',
        oldPrice: '₦180,000',
        newPrice: '₦140,000',
        price: '₦140,000',
        discount: '22%',
        image: 'https://images.unsplash.com/photo-1520639888713-78db11c5dd59?auto=format&fit=crop&q=80&w=800',
        description: 'The original yellow boot. Waterproof and durable.',
        rating: 4.8,
        reviews: 300,
        retailers: [
            { name: 'Timberland', price: '₦140,000', url: '#' },
            { name: 'FootLocker', price: '₦145,000', url: '#' }
        ]
    },
    {
        id: 208,
        name: 'Calvin Klein Boxer Briefs',
        category: 'Fashion',
        oldPrice: '₦30,000',
        newPrice: '₦22,000',
        price: '₦22,000',
        discount: '26%',
        image: 'https://images.unsplash.com/photo-1583001809873-a226752040ee?auto=format&fit=crop&q=80&w=800',
        description: 'Cotton stretch multipack boxer briefs.',
        rating: 4.7,
        reviews: 600,
        retailers: [
            { name: 'CK', price: '₦22,000', url: '#' },
            { name: 'Amazon', price: '₦24,000', url: '#' }
        ]
    },
    {
        id: 209,
        name: 'Michael Kors Tote Bag',
        category: 'Fashion',
        oldPrice: '₦250,000',
        newPrice: '₦190,000',
        price: '₦190,000',
        discount: '24%',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
        description: 'Saffiano leather top-zip tote.',
        rating: 4.7,
        reviews: 90,
        retailers: [
            { name: 'Michael Kors', price: '₦190,000', url: '#' },
            { name: 'Macy\'s', price: '₦200,000', url: '#' }
        ]
    },

    // --- TRAVEL (10 items) ---
    {
        id: 6,
        name: 'Dubai Luxury Package',
        category: 'Travel',
        oldPrice: '₦2,500,000',
        newPrice: '₦1,900,000',
        price: '₦1,900,000',
        discount: '24%',
        image: 'https://images.unsplash.com/photo-1607520564398-ce8b632b4c4d?auto=format&fit=crop&q=80&w=800',
        description: '5 Days, 4 Nights usage of 5-star hotel, desert safari, and city tour.',
        rating: 4.9,
        reviews: 45,
        retailers: [
            { name: 'Wakanow', price: '₦1,900,000', url: '#' },
            { name: 'TravelBeta', price: '₦1,950,000', url: '#' }
        ]
    },
    {
        id: 301,
        name: 'Maldives Honeymoon Special',
        category: 'Travel',
        oldPrice: '₦3,500,000',
        newPrice: '₦2,800,000',
        price: '₦2,800,000',
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=800',
        description: '7 Days in an overwater villa with all-inclusive meal plan.',
        rating: 5.0,
        reviews: 30,
        retailers: [
            { name: 'TravelStart', price: '₦2,800,000', url: '#' },
            { name: 'Wakanow', price: '₦2,900,000', url: '#' }
        ]
    },
    {
        id: 302,
        name: 'Paris City Break',
        category: 'Travel',
        oldPrice: '₦1,800,000',
        newPrice: '₦1,400,000',
        price: '₦1,400,000',
        discount: '22%',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
        description: '4 Days in Paris attempting to see the Eiffel Tower and Louvre.',
        rating: 4.8,
        reviews: 60,
        retailers: [
            { name: 'Booking.com', price: '₦1,400,000', url: '#' },
            { name: 'Expedia', price: '₦1,450,000', url: '#' }
        ]
    },
    {
        id: 303,
        name: 'Zanzibar Beach Retreat',
        category: 'Travel',
        oldPrice: '₦1,200,000',
        newPrice: '₦950,000',
        price: '₦950,000',
        discount: '21%',
        image: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&q=80&w=800',
        description: 'Relax on the white sands of Nungwi beach. 5 Days.',
        rating: 4.7,
        reviews: 80,
        retailers: [
            { name: 'TravelBeta', price: '₦950,000', url: '#' },
            { name: 'Jumia Travel', price: '₦980,000', url: '#' }
        ]
    },
    {
        id: 304,
        name: 'London Explorer',
        category: 'Travel',
        oldPrice: '₦1,500,000',
        newPrice: '₦1,250,000',
        price: '₦1,250,000',
        discount: '16%',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
        description: 'Experience the history and culture of London. 5 Days.',
        rating: 4.6,
        reviews: 55,
        retailers: [
            { name: 'British Airways', price: '₦1,250,000', url: '#' },
            { name: 'Virgin Atlantic', price: '₦1,300,000', url: '#' }
        ]
    },
    {
        id: 305,
        name: 'New York City Adventure',
        category: 'Travel',
        oldPrice: '₦2,200,000',
        newPrice: '₦1,850,000',
        price: '₦1,850,000',
        discount: '16%',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?auto=format&fit=crop&q=80&w=800',
        description: 'The city that never sleeps. Times Square, Central Park, and more.',
        rating: 4.8,
        reviews: 70,
        retailers: [
            { name: 'Delta', price: '₦1,850,000', url: '#' },
            { name: 'United', price: '₦1,900,000', url: '#' }
        ]
    },
    {
        id: 306,
        name: 'Cape Town Getaway',
        category: 'Travel',
        oldPrice: '₦1,100,000',
        newPrice: '₦850,000',
        price: '₦850,000',
        discount: '23%',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800',
        description: 'Table Mountain, Robben Island, and wine tours.',
        rating: 4.7,
        reviews: 50,
        retailers: [
            { name: 'SAA', price: '₦850,000', url: '#' },
            { name: 'TravelStart', price: '₦880,000', url: '#' }
        ]
    },
    {
        id: 307,
        name: 'Tokyo Cultural Tour',
        category: 'Travel',
        oldPrice: '₦3,000,000',
        newPrice: '₦2,600,000',
        price: '₦2,600,000',
        discount: '13%',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=800',
        description: 'A mix of traditional and ultra-modern in Japan\'s capital.',
        rating: 4.9,
        reviews: 40,
        retailers: [
            { name: 'Japan Airlines', price: '₦2,600,000', url: '#' },
            { name: 'ANA', price: '₦2,650,000', url: '#' }
        ]
    },
    {
        id: 308,
        name: 'Santorini Sunset Cruise',
        category: 'Travel',
        oldPrice: '₦2,100,000',
        newPrice: '₦1,700,000',
        price: '₦1,700,000',
        discount: '19%',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
        description: 'Breathtaking views and romantic atmosphere in Greece.',
        rating: 4.8,
        reviews: 35,
        retailers: [
            { name: 'Booking.com', price: '₦1,700,000', url: '#' },
            { name: 'Expedia', price: '₦1,750,000', url: '#' }
        ]
    },
    {
        id: 309,
        name: 'Safari in Kenya',
        category: 'Travel',
        oldPrice: '₦1,400,000',
        newPrice: '₦1,100,000',
        price: '₦1,100,000',
        discount: '21%',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
        description: 'Witness the Big Five in Maasai Mara National Reserve.',
        rating: 4.9,
        reviews: 65,
        retailers: [
            { name: 'Kenya Airways', price: '₦1,100,000', url: '#' },
            { name: 'Wakanow', price: '₦1,150,000', url: '#' }
        ]
    },

    // --- HOME (10 items) ---
    {
        id: 7,
        name: 'Modern Coffee Table',
        category: 'Home',
        oldPrice: '₦150,000',
        newPrice: '₦95,000',
        price: '₦95,000',
        discount: '35%',
        image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=400&h=400',
        description: 'Minimalist design, solid wood construction, perfect for modern living rooms.',
        rating: 4.6,
        reviews: 60,
        retailers: [
            { name: 'IKEA', price: '₦95,000', url: '#' },
            { name: 'HomeDepot', price: '₦100,000', url: '#' }
        ]
    },
    {
        id: 401,
        name: 'Ergonomic Office Chair',
        category: 'Home',
        oldPrice: '₦200,000',
        newPrice: '₦150,000',
        price: '₦150,000',
        discount: '25%',
        image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
        description: 'High-back mesh chair with lumbar support for long work hours.',
        rating: 4.7,
        reviews: 120,
        retailers: [
            { name: 'Amazon', price: '₦150,000', url: '#' },
            { name: 'IKEA', price: '₦160,000', url: '#' }
        ]
    },
    {
        id: 402,
        name: 'Smart LED Bulb (4-Pack)',
        category: 'Home',
        oldPrice: '₦40,000',
        newPrice: '₦25,000',
        price: '₦25,000',
        discount: '37%',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
        description: 'App controlled, color changing, voice assistant compatible.',
        rating: 4.5,
        reviews: 200,
        retailers: [
            { name: 'Phillips Hue', price: '₦25,000', url: '#' },
            { name: 'Amazon', price: '₦28,000', url: '#' }
        ]
    },
    {
        id: 403,
        name: 'Non-Stick Cookware Set',
        category: 'Home',
        oldPrice: '₦120,000',
        newPrice: '₦80,000',
        price: '₦80,000',
        discount: '33%',
        image: 'https://images.unsplash.com/photo-1584990347449-a060b6db5cc1?auto=format&fit=crop&q=80&w=800',
        description: '10-piece set, durable aluminum, induction compatible.',
        rating: 4.8,
        reviews: 90,
        retailers: [
            { name: 'Tefal', price: '₦80,000', url: '#' },
            { name: 'Jumia', price: '₦85,000', url: '#' }
        ]
    },
    {
        id: 404,
        name: 'Robot Vacuum Cleaner',
        category: 'Home',
        oldPrice: '₦350,000',
        newPrice: '₦280,000',
        price: '₦280,000',
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=800',
        description: 'Self-charging robot vacuum for pet hair and hard floors.',
        rating: 4.6,
        reviews: 150,
        retailers: [
            { name: 'iRobot', price: '₦280,000', url: '#' },
            { name: 'Amazon', price: '₦290,000', url: '#' }
        ]
    },
    {
        id: 405,
        name: 'Queen Size Memory Foam Mattress',
        category: 'Home',
        oldPrice: '₦450,000',
        newPrice: '₦350,000',
        price: '₦350,000',
        discount: '22%',
        image: 'https://images.unsplash.com/photo-1505693416388-b03463784065?auto=format&fit=crop&q=80&w=800',
        description: '10-inch cooling gel memory foam mattress for pressure relief.',
        rating: 4.7,
        reviews: 80,
        retailers: [
            { name: 'Mouka Foam', price: '₦350,000', url: '#' },
            { name: 'Jumia', price: '₦360,000', url: '#' }
        ]
    },
    {
        id: 406,
        name: 'Standing Desk Converter',
        category: 'Home',
        oldPrice: '₦90,000',
        newPrice: '₦65,000',
        price: '₦65,000',
        discount: '27%',
        image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800',
        description: 'Adjustable height sit-stand desk riser for dual monitors.',
        rating: 4.5,
        reviews: 55,
        retailers: [
            { name: 'Amazon', price: '₦65,000', url: '#' },
            { name: 'Jumia', price: '₦70,000', url: '#' }
        ]
    },
    {
        id: 407,
        name: 'Indoor Plant Pot Set',
        category: 'Home',
        oldPrice: '₦30,000',
        newPrice: '₦20,000',
        price: '₦20,000',
        discount: '33%',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800',
        description: 'Set of 3 ceramic planters with drainage holes.',
        rating: 4.8,
        reviews: 110,
        retailers: [
            { name: 'Garden Center', price: '₦20,000', url: '#' },
            { name: 'Jumia', price: '₦22,000', url: '#' }
        ]
    },
    {
        id: 408,
        name: 'Air Purifier',
        category: 'Home',
        oldPrice: '₦180,000',
        newPrice: '₦140,000',
        price: '₦140,000',
        discount: '22%',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800',
        description: 'HEPA filter air purifier for allegies and smoke.',
        rating: 4.6,
        reviews: 75,
        retailers: [
            { name: 'Coway', price: '₦140,000', url: '#' },
            { name: 'Amazon', price: '₦145,000', url: '#' }
        ]
    },
    {
        id: 409,
        name: 'Blender 1000W',
        category: 'Home',
        oldPrice: '₦70,000',
        newPrice: '₦50,000',
        price: '₦50,000',
        discount: '28%',
        image: 'https://images.unsplash.com/photo-1570222094114-28a9d88a2b64?auto=format&fit=crop&q=80&w=800',
        description: 'Professional countertop blender for smoothies and ice.',
        rating: 4.7,
        reviews: 200,
        retailers: [
            { name: 'Binatone', price: '₦50,000', url: '#' },
            { name: 'Kenwood', price: '₦55,000', url: '#' }
        ]
    },

    // --- BEAUTY (10 items) ---
    {
        id: 8,
        name: 'Skincare Essentials Set',
        category: 'Beauty',
        oldPrice: '₦50,000',
        newPrice: '₦35,000',
        price: '₦35,000',
        discount: '30%',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400&h=400',
        description: 'Complete daily routine for glowing, healthy skin. Organic ingredients.',
        rating: 4.8,
        reviews: 150,
        retailers: [
            { name: 'Sephora', price: '₦35,000', url: '#' },
            { name: 'Ulta', price: '₦38,000', url: '#' }
        ]
    },
    {
        id: 501,
        name: 'Matte Lipstick Trio',
        category: 'Beauty',
        oldPrice: '₦25,000',
        newPrice: '₦18,000',
        price: '₦18,000',
        discount: '28%',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
        description: 'Long-wearing matte lipstick in three flattering shades.',
        rating: 4.6,
        reviews: 90,
        retailers: [
            { name: 'MAC', price: '₦18,000', url: '#' },
            { name: 'Sephora', price: '₦20,000', url: '#' }
        ]
    },
    {
        id: 502,
        name: 'Vitamin C Serum',
        category: 'Beauty',
        oldPrice: '₦35,000',
        newPrice: '₦28,000',
        price: '₦28,000',
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
        description: 'Brightening serum for even skin tone and radiance.',
        rating: 4.8,
        reviews: 200,
        retailers: [
            { name: 'The Ordinary', price: '₦28,000', url: '#' },
            { name: 'Jumia', price: '₦30,000', url: '#' }
        ]
    },
    {
        id: 503,
        name: 'Volumizing Mascara',
        category: 'Beauty',
        oldPrice: '₦15,000',
        newPrice: '₦10,000',
        price: '₦10,000',
        discount: '33%',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
        description: 'Instant volume and length without clumps.',
        rating: 4.5,
        reviews: 300,
        retailers: [
            { name: 'Maybelline', price: '₦10,000', url: '#' },
            { name: 'Boots', price: '₦12,000', url: '#' }
        ]
    },
    {
        id: 504,
        name: 'Designer Fragrance (50ml)',
        category: 'Beauty',
        oldPrice: '₦80,000',
        newPrice: '₦65,000',
        price: '₦65,000',
        discount: '19%',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
        description: 'Floral and woody notes for a sophisticated scent.',
        rating: 4.7,
        reviews: 120,
        retailers: [
            { name: 'Essenza', price: '₦65,000', url: '#' },
            { name: 'Fragrance Shop', price: '₦68,000', url: '#' }
        ]
    },
    {
        id: 505,
        name: 'Hydrating Face Cream',
        category: 'Beauty',
        oldPrice: '₦40,000',
        newPrice: '₦32,000',
        price: '₦32,000',
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800',
        description: 'Rich moisturizing cream with hyaluronic acid.',
        rating: 4.6,
        reviews: 85,
        retailers: [
            { name: 'CeraVe', price: '₦32,000', url: '#' },
            { name: 'Jumia', price: '₦34,000', url: '#' }
        ]
    },
    {
        id: 506,
        name: 'Makeup Brush Set',
        category: 'Beauty',
        oldPrice: '₦20,000',
        newPrice: '₦12,000',
        price: '₦12,000',
        discount: '40%',
        image: 'https://images.unsplash.com/photo-1627384113972-f4c98944948a?auto=format&fit=crop&q=80&w=800',
        description: '10-piece professional synthetic brush set.',
        rating: 4.5,
        reviews: 200,
        retailers: [
            { name: 'Real Techniques', price: '₦12,000', url: '#' },
            { name: 'Amazon', price: '₦14,000', url: '#' }
        ]
    },
    {
        id: 507,
        name: 'Hair Dryer Professional',
        category: 'Beauty',
        oldPrice: '₦60,000',
        newPrice: '₦45,000',
        price: '₦45,000',
        discount: '25%',
        image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&q=80&w=800',
        description: 'Fast drying with ionic technology for less frizz.',
        rating: 4.8,
        reviews: 110,
        retailers: [
            { name: 'Dyson', price: '₦45,000', url: '#' },
            { name: 'Slot', price: '₦48,000', url: '#' }
        ]
    },
    {
        id: 508,
        name: 'Clay Face Mask',
        category: 'Beauty',
        oldPrice: '₦12,000',
        newPrice: '₦8,000',
        price: '₦8,000',
        discount: '33%',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800',
        description: 'Deep cleansing clay mask for pore reduction.',
        rating: 4.6,
        reviews: 300,
        retailers: [
            { name: 'Innisfree', price: '₦8,000', url: '#' },
            { name: 'Jumia', price: '₦9,000', url: '#' }
        ]
    },
    {
        id: 509,
        name: 'Nail Polish Set',
        category: 'Beauty',
        oldPrice: '₦18,000',
        newPrice: '₦14,000',
        price: '₦14,000',
        discount: '22%',
        image: 'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=800',
        description: 'Set of 5 gel-effect nail polishes.',
        rating: 4.4,
        reviews: 80,
        retailers: [
            { name: 'OPI', price: '₦14,000', url: '#' },
            { name: 'Amazon', price: '₦15,000', url: '#' }
        ]
    }
];
