const sampleProduct= [
    {
      "productid": "W001",
      "name": "Casual Cotton T-Shirt",
      "description": "Comfortable and breathable cotton T-shirt for everyday wear.",
      "category": "Tops",
      "color": "White",
      "size": "S, M, L, XL",
      "image": {
        "url": "https://example.com/images/casual_tshirt.jpg",
        "alt_text": "Casual Cotton T-Shirt"
      }
    },
    {
      "productid": "W002",
      "name": "Slim Fit Jeans",
      "description": "Stylish slim-fit jeans made with high-quality denim.",
      "category": "Bottoms",
      "color": "Dark Blue",
      "size": "28, 30, 32, 34",
      "image": {
        "url": "https://example.com/images/slim_fit_jeans.jpg",
        "alt_text": "Slim Fit Jeans"
      }
    },
    {
      "productid": "W003",
      "name": "Floral Print Maxi Dress",
      "description": "Elegant maxi dress with a vibrant floral print, perfect for summer.",
      "category": "Dresses",
      "color": "Pink/Floral",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/floral_maxi_dress.jpg",
        "alt_text": "Floral Print Maxi Dress"
      }
    },
    {
      "productid": "W004",
      "name": "V-neck Sweater",
      "description": "Cozy V-neck sweater made from a soft wool blend, ideal for chilly days.",
      "category": "Sweaters",
      "color": "Beige",
      "size": "M, L, XL",
      "image": {
        "url": "https://example.com/images/vneck_sweater.jpg",
        "alt_text": "V-neck Sweater"
      }
    },
    {
      "productid": "W005",
      "name": "High Waist Leggings",
      "description": "Stretchy high-waist leggings that provide a comfortable fit for any activity.",
      "category": "Bottoms",
      "color": "Black",
      "size": "S, M, L, XL",
      "image": {
        "url": "https://example.com/images/highwaist_leggings.jpg",
        "alt_text": "High Waist Leggings"
      }
    },
    {
      "productid": "W006",
      "name": "A-Line Skirt",
      "description": "Flattering A-line skirt with a sleek and elegant silhouette.",
      "category": "Skirts",
      "color": "Navy Blue",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/aline_skirt.jpg",
        "alt_text": "A-Line Skirt"
      }
    },
    {
      "productid": "W007",
      "name": "Peacoat Jacket",
      "description": "Classic double-breasted peacoat for a stylish winter look.",
      "category": "Outerwear",
      "color": "Camel",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/peacoat_jacket.jpg",
        "alt_text": "Peacoat Jacket"
      }
    },
    {
      "productid": "W008",
      "name": "Lace Trim Camisole",
      "description": "Delicate camisole with lace trim, perfect for layering or lounging.",
      "category": "Tops",
      "color": "Black",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/lace_camisole.jpg",
        "alt_text": "Lace Trim Camisole"
      }
    },
    {
      "productid": "W009",
      "name": "Button-Down Shirt",
      "description": "Classic button-down shirt made from soft cotton, perfect for office wear.",
      "category": "Tops",
      "color": "White",
      "size": "S, M, L, XL",
      "image": {
        "url": "https://example.com/images/button_shirt.jpg",
        "alt_text": "Button-Down Shirt"
      }
    },
    {
      "productid": "W010",
      "name": "Bodycon Dress",
      "description": "Form-fitting bodycon dress that accentuates your curves.",
      "category": "Dresses",
      "color": "Red",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/bodycon_dress.jpg",
        "alt_text": "Bodycon Dress"
      }
    },
    {
      "productid": "W011",
      "name": "Chiffon Blouse",
      "description": "Light and airy chiffon blouse with delicate detailing.",
      "category": "Tops",
      "color": "Soft Pink",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/chiffon_blouse.jpg",
        "alt_text": "Chiffon Blouse"
      }
    },
    {
      "productid": "W012",
      "name": "Pencil Skirt",
      "description": "Sophisticated pencil skirt with a flattering cut, perfect for work or formal occasions.",
      "category": "Skirts",
      "color": "Black",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/pencil_skirt.jpg",
        "alt_text": "Pencil Skirt"
      }
    },
    {
      "productid": "W013",
      "name": "Jogger Pants",
      "description": "Comfortable and casual jogger pants with elastic cuffs at the ankles.",
      "category": "Bottoms",
      "color": "Grey",
      "size": "S, M, L, XL",
      "image": {
        "url": "https://example.com/images/jogger_pants.jpg",
        "alt_text": "Jogger Pants"
      }
    },
    {
      "productid": "W014",
      "name": "Sweatshirt Hoodie",
      "description": "Cozy sweatshirt hoodie with a front pocket, ideal for casual days.",
      "category": "Sweaters",
      "color": "Dark Grey",
      "size": "M, L, XL",
      "image": {
        "url": "https://example.com/images/sweatshirt_hoodie.jpg",
        "alt_text": "Sweatshirt Hoodie"
      }
    },
    {
      "productid": "W015",
      "name": "Knit Cardigan",
      "description": "Soft knit cardigan with button closure, perfect for layering.",
      "category": "Sweaters",
      "color": "Light Blue",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/knit_cardigan.jpg",
        "alt_text": "Knit Cardigan"
      }
    },
    {
      "productid": "W016",
      "name": "Teddy Coat",
      "description": "Warm and fuzzy teddy coat, perfect for colder weather.",
      "category": "Outerwear",
      "color": "Brown",
      "size": "M, L",
      "image": {
        "url": "https://example.com/images/teddy_coat.jpg",
        "alt_text": "Teddy Coat"
      }
    },
    {
      "productid": "W017",
      "name": "Denim Jacket",
      "description": "Classic denim jacket with button front, a timeless piece for every wardrobe.",
      "category": "Outerwear",
      "color": "Light Blue",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/denim_jacket.jpg",
        "alt_text": "Denim Jacket"
      }
    },
    {
      "productid": "W018",
      "name": "Pleated Midi Skirt",
      "description": "Elegant pleated midi skirt with a flowy design for a feminine look.",
      "category": "Skirts",
      "color": "Black",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/pleated_midi_skirt.jpg",
        "alt_text": "Pleated Midi Skirt"
      }
    },
    {
      "productid": "W019",
      "name": "Wide Leg Pants",
      "description": "Comfortable wide-leg pants with an elegant drape, perfect for casual or formal looks.",
      "category": "Bottoms",
      "color": "Beige",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/wide_leg_pants.jpg",
        "alt_text": "Wide Leg Pants"
      }
    },
    {
      "productid": "W020",
      "name": "Tank Top",
      "description": "Simple and versatile tank top in soft cotton fabric.",
      "category": "Tops",
      "color": "Grey",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/tank_top.jpg",
        "alt_text": "Tank Top"
      }
    },
    {
      "productid": "W021",
      "name": "V-neck Dress",
      "description": "Chic V-neck dress with a flattering fit for evening wear.",
      "category": "Dresses",
      "color": "Navy",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/vneck_dress.jpg",
        "alt_text": "V-neck Dress"
      }
    },
    {
      "productid": "W022",
      "name": "Off-the-Shoulder Top",
      "description": "Flirty off-the-shoulder top with a relaxed fit, great for casual outings.",
      "category": "Tops",
      "color": "Lavender",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/off_the_shoulder_top.jpg",
        "alt_text": "Off-the-Shoulder Top"
      }
    },
    {
      "productid": "W023",
      "name": "Puffer Jacket",
      "description": "Warm and insulated puffer jacket for outdoor adventures.",
      "category": "Outerwear",
      "color": "Olive Green",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/puffer_jacket.jpg",
        "alt_text": "Puffer Jacket"
      }
    },
    {
      "productid": "W024",
      "name": "Ruffled Sleeve Top",
      "description": "Trendy top with ruffled sleeves for a fun and fashionable look.",
      "category": "Tops",
      "color": "Red",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/ruffled_sleeve_top.jpg",
        "alt_text": "Ruffled Sleeve Top"
      }
    },
    {
      "productid": "W025",
      "name": "Shirt Dress",
      "description": "Classic shirt dress made from lightweight cotton, perfect for a relaxed style.",
      "category": "Dresses",
      "color": "White",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/shirt_dress.jpg",
        "alt_text": "Shirt Dress"
      }
    },
    {
      "productid": "W026",
      "name": "Parka Coat",
      "description": "Warm and stylish parka coat with fur-lined hood, great for winter.",
      "category": "Outerwear",
      "color": "Dark Grey",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/parka_coat.jpg",
        "alt_text": "Parka Coat"
      }
    },
    {
      "productid": "W027",
      "name": "Sweater Dress",
      "description": "Cozy sweater dress with a ribbed knit, perfect for fall and winter.",
      "category": "Dresses",
      "color": "Charcoal",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/sweater_dress.jpg",
        "alt_text": "Sweater Dress"
      }
    },
    {
      "productid": "W028",
      "name": "Tie-Front Blouse",
      "description": "Elegant blouse with a tie-front detail, ideal for office or casual outings.",
      "category": "Tops",
      "color": "Blush Pink",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/tie_front_blouse.jpg",
        "alt_text": "Tie-Front Blouse"
      }
    },
    {
      "productid": "W029",
      "name": "Cotton Jumpsuit",
      "description": "Relaxed-fit cotton jumpsuit with a cinched waist for a flattering look.",
      "category": "Dresses",
      "color": "Black",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/cotton_jumpsuit.jpg",
        "alt_text": "Cotton Jumpsuit"
      }
    },
    {
      "productid": "W030",
      "name": "Blazer Jacket",
      "description": "Tailored blazer jacket perfect for formal events or professional wear.",
      "category": "Outerwear",
      "color": "Black",
      "size": "S, M, L",
      "image": {
        "url": "https://example.com/images/blazer_jacket.jpg",
        "alt_text": "Blazer Jacket"
      }
    }
  ];

  module.exports= sampleProduct;
  