// Restaurant Data

const Restaurants = [
  {
    image: "third",
    name: "The Foodie's Hub",
    rating: "4.75",
    food_type: "Chinese",
    price_for_two: 221,
    location: "Lodi Gardens",
    distance_from_Customer_house: "6.2",
    offers: 23,
    alcohol: false,
    restaurant_open_time: 20,
    restaurant_close_time: 8,
    Discount: 7,
  },
  {
    image: "fifth",
    name: "Bistro Bliss",
    rating: "4.49",
    food_type: "Japanese",
    price_for_two: 1970,
    location: "Lodi Gardens",
    distance_from_Customer_house: "0.3",
    offers: 20,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
    Discount: 15,
  },
  {
    image: "sixth",
    name: "Spice Symphony",
    rating: "4.82",
    food_type: "Indian",
    price_for_two: 1216,
    location: "Lotus Temple",
    distance_from_Customer_house: "7.3",
    offers: 5,
    alcohol: true,
    restaurant_open_time: 17,
    restaurant_close_time: 5,
    Discount: 9,
  },
  {
    image: "fourth",
    name: "Urban Eatery",
    rating: "2.52",
    food_type: "Mexican",
    price_for_two: 1243,
    location: "Akshardham Temple",
    distance_from_Customer_house: "7.4",
    offers: 11,
    alcohol: false,
    restaurant_open_time: 14,
    restaurant_close_time: 2,
    Discount: 3,
  },
  {
    image: "First",
    name: "Fusion Feast",
    rating: "3.81",
    food_type: "Thai",
    price_for_two: 375,
    location: "Delhi Zoo",
    distance_from_Customer_house: "8.7",
    offers: 19,
    alcohol: false,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
    Discount: 5,
  },
  {
    image: "Eigth",
    name: "Wholesome Cravings",
    rating: "3.65",
    food_type: "Indian",
    price_for_two: 1404,
    location: "Purana Qila",
    distance_from_Customer_house: "9.0",
    offers: 18,
    alcohol: true,
    restaurant_open_time: 21,
    restaurant_close_time: 9,
    Discount: 18,
  },
  {
    image: "sixth",
    name: "The Hungry Fork",
    rating: "5.88",
    food_type: "Indian",
    price_for_two: 1891,
    location: "Purana Qila",
    distance_from_Customer_house: "6.7",
    offers: 2,
    alcohol: false,
    restaurant_open_time: 6,
    restaurant_close_time: 18,
    Discount: 11,
  },
  {
    image: "nine",
    name: "The Hungry Fork",
    rating: "5.32",
    food_type: "Italian",
    price_for_two: 1676,
    location: "Chandni Chowk",
    distance_from_Customer_house: "1.6",
    offers: 4,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
    Discount: 2,
  },
  {
    image: "second",
    name: "The Foodie's Hub",
    rating: "2.70",
    food_type: "Mexican",
    price_for_two: 1680,
    location: "National Museum",
    distance_from_Customer_house: "5.9",
    offers: 30,
    alcohol: true,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
    Discount: 6,
  },
  {
    image: "nine",
    name: "Fusion Feast",
    rating: "1.37",
    food_type: "Chinese",
    price_for_two: 1089,
    location: "Jama Masjid",
    distance_from_Customer_house: "1.2",
    offers: 17,
    alcohol: false,
    restaurant_open_time: 0,
    restaurant_close_time: 12,
    Discount: 8,
  },
  {
    image: "sixth",
    name: "Golden Plate",
    rating: "2.30",
    food_type: "Indian",
    price_for_two: 1298,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "7.8",
    offers: 19,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
    Discount: 14,
  },
  {
    image: "nine",
    name: "The Hungry Fork",
    rating: "2.15",
    food_type: "Chinese",
    price_for_two: 599,
    location: "Akshardham Temple",
    distance_from_Customer_house: "2.3",
    offers: 28,
    alcohol: true,
    restaurant_open_time: 15,
    restaurant_close_time: 3,
    Discount: 0,
  },
  {
    image: "nine",
    name: "Bistro Bliss",
    rating: "2.09",
    food_type: "Indian",
    price_for_two: 249,
    location: "Dilli Haat",
    distance_from_Customer_house: "2.4",
    offers: 9,
    alcohol: false,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
    Discount: 1,
  },
  {
    image: "second",
    name: "Taste Haven",
    rating: "5.00",
    food_type: "Japanese",
    price_for_two: 1302,
    location: "India Gate",
    distance_from_Customer_house: "0.4",
    offers: 6,
    alcohol: false,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
    Discount: 9,
  },
  {
    image: "Eigth",
    name: "Epicurean Escape",
    rating: "1.58",
    food_type: "Thai",
    price_for_two: 817,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "5.1",
    offers: 8,
    alcohol: true,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
    Discount: 17,
  },
  {
    image: "second",
    name: "Fusion Feast",
    rating: "5.65",
    food_type: "Thai",
    price_for_two: 1289,
    location: "Connaught Place",
    distance_from_Customer_house: "4.5",
    offers: 4,
    alcohol: false,
    restaurant_open_time: 16,
    restaurant_close_time: 4,
    Discount: 1,
  },
  {
    image: "tenth",
    name: "Golden Plate",
    rating: "1.76",
    food_type: "Mexican",
    price_for_two: 653,
    location: "Purana Qila",
    distance_from_Customer_house: "3.5",
    offers: 12,
    alcohol: false,
    restaurant_open_time: 19,
    restaurant_close_time: 7,
    Discount: 10,
  },
  {
    image: "second",
    name: "Taste Haven",
    rating: "4.87",
    food_type: "Chinese",
    price_for_two: 1157,
    location: "ISKCON Temple",
    distance_from_Customer_house: "3.1",
    offers: 29,
    alcohol: true,
    restaurant_open_time: 19,
    restaurant_close_time: 7,
    Discount: 7,
  },
  {
    image: "Eigth",
    name: "Bistro Bliss",
    rating: "2.43",
    food_type: "Italian",
    price_for_two: 907,
    location: "ISKCON Temple",
    distance_from_Customer_house: "6.6",
    offers: 24,
    alcohol: true,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
    Discount: 15,
  },
  {
    image: "Eigth",
    name: "Tasty Treats",
    rating: "4.07",
    food_type: "Thai",
    price_for_two: 1911,
    location: "Red Fort",
    distance_from_Customer_house: "2.7",
    offers: 11,
    alcohol: false,
    restaurant_open_time: 13,
    restaurant_close_time: 1,
    Discount: 20,
  },
  {
    image: "seventh",
    name: "Golden Plate",
    rating: "1.17",
    food_type: "Chinese",
    price_for_two: 1903,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "5.7",
    offers: 23,
    alcohol: false,
    restaurant_open_time: 13,
    restaurant_close_time: 1,
    Discount: 17,
  },
  {
    image: "second",
    name: "Spice Symphony",
    rating: "5.14",
    food_type: "Italian",
    price_for_two: 2420,
    location: "Chandni Chowk",
    distance_from_Customer_house: "0.2",
    offers: 12,
    alcohol: false,
    restaurant_open_time: 17,
    restaurant_close_time: 5,
    Discount: 10,
  },
  {
    image: "fifth",
    name: "The Dining Den",
    rating: "3.85",
    food_type: "Chinese",
    price_for_two: 2206,
    location: "Delhi Zoo",
    distance_from_Customer_house: "4.5",
    offers: 9,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
    Discount: 12,
  },
  {
    image: "tenth",
    name: "Savory Spot",
    rating: "1.43",
    food_type: "Chinese",
    price_for_two: 1769,
    location: "Dilli Haat",
    distance_from_Customer_house: "3.7",
    offers: 19,
    alcohol: true,
    restaurant_open_time: 0,
    restaurant_close_time: 12,
    Discount: 7,
  },
  {
    image: "First",
    name: "The Rustic Spoon",
    rating: "2.03",
    food_type: "Mexican",
    price_for_two: 875,
    location: "Jama Masjid",
    distance_from_Customer_house: "1.3",
    offers: 29,
    alcohol: false,
    restaurant_open_time: 11,
    restaurant_close_time: 23,
    Discount: 12,
  },
  {
    image: "sixth",
    name: "Crispy Corner",
    rating: "3.28",
    food_type: "Japanese",
    price_for_two: 1454,
    location: "Jama Masjid",
    distance_from_Customer_house: "2.0",
    offers: 8,
    alcohol: true,
    restaurant_open_time: 1,
    restaurant_close_time: 13,
    Discount: 17,
  },
  {
    image: "fourth",
    name: "Wholesome Cravings",
    rating: "3.01",
    food_type: "Italian",
    price_for_two: 851,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "7.3",
    offers: 19,
    alcohol: false,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
    Discount: 14,
  },
  {
    image: "seventh",
    name: "Urban Eatery",
    rating: "1.06",
    food_type: "Mexican",
    price_for_two: 1947,
    location: "ISKCON Temple",
    distance_from_Customer_house: "6.6",
    offers: 4,
    alcohol: false,
    restaurant_open_time: 11,
    restaurant_close_time: 23,
    Discount: 6,
  },
  {
    image: "fifth",
    name: "Taste Haven",
    rating: "5.26",
    food_type: "Italian",
    price_for_two: 394,
    location: "Jama Masjid",
    distance_from_Customer_house: "1.0",
    offers: 5,
    alcohol: true,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
    Discount: 7,
  },
  {
    image: "seventh",
    name: "Zesty Bites",
    rating: "5.79",
    food_type: "Italian",
    price_for_two: 1720,
    location: "Akshardham Temple",
    distance_from_Customer_house: "7.6",
    offers: 12,
    alcohol: false,
    restaurant_open_time: 8,
    restaurant_close_time: 20,
    Discount: 12,
  },
  {
    image: "third",
    name: "Fusion Feast",
    rating: "5.08",
    food_type: "Chinese",
    price_for_two: 671,
    location: "Dilli Haat",
    distance_from_Customer_house: "1.8",
    offers: 26,
    alcohol: false,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
    Discount: 11,
  },
  {
    image: "second",
    name: "Bistro Bliss",
    rating: "2.55",
    food_type: "Mexican",
    price_for_two: 2141,
    location: "Safdarjung Tomb",
    distance_from_Customer_house: "2.7",
    offers: 4,
    alcohol: true,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
    Discount: 0,
  },
  {
    image: "seventh",
    name: "Bistro Bliss",
    rating: "4.07",
    food_type: "Japanese",
    price_for_two: 1204,
    location: "Khan Market",
    distance_from_Customer_house: "1.4",
    offers: 11,
    alcohol: false,
    restaurant_open_time: 16,
    restaurant_close_time: 4,
    Discount: 2,
  },
  {
    image: "First",
    name: "Golden Plate",
    rating: "4.36",
    food_type: "Chinese",
    price_for_two: 962,
    location: "Purana Qila",
    distance_from_Customer_house: "3.0",
    offers: 28,
    alcohol: true,
    restaurant_open_time: 1,
    restaurant_close_time: 13,
    Discount: 16,
  },
  {
    image: "tenth",
    name: "The Dining Den",
    rating: "2.94",
    food_type: "Mexican",
    price_for_two: 1843,
    location: "Connaught Place",
    distance_from_Customer_house: "2.4",
    offers: 7,
    alcohol: true,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
    Discount: 20,
  },
  {
    image: "fifth",
    name: "Urban Eatery",
    rating: "3.52",
    food_type: "Thai",
    price_for_two: 2294,
    location: "Khan Market",
    distance_from_Customer_house: "5.0",
    offers: 5,
    alcohol: false,
    restaurant_open_time: 16,
    restaurant_close_time: 4,
    Discount: 18,
  },
  {
    image: "fifth",
    name: "Golden Plate",
    rating: "2.32",
    food_type: "Chinese",
    price_for_two: 2448,
    location: "Khan Market",
    distance_from_Customer_house: "5.7",
    offers: 16,
    alcohol: false,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
    Discount: 17,
  },
  {
    image: "First",
    name: "Wholesome Cravings",
    rating: "5.57",
    food_type: "Mexican",
    price_for_two: 2418,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "0.7",
    offers: 23,
    alcohol: false,
    restaurant_open_time: 8,
    restaurant_close_time: 20,
    Discount: 19,
  },
  {
    image: "First",
    name: "Crispy Corner",
    rating: "3.52",
    food_type: "Mexican",
    price_for_two: 2107,
    location: "Khan Market",
    distance_from_Customer_house: "2.8",
    offers: 29,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
    Discount: 16,
  },
  {
    image: "nine",
    name: "Golden Plate",
    rating: "5.41",
    food_type: "Thai",
    price_for_two: 309,
    location: "National Museum",
    distance_from_Customer_house: "5.3",
    offers: 9,
    alcohol: false,
    restaurant_open_time: 14,
    restaurant_close_time: 2,
    Discount: 18,
  },
  {
    image: "nine",
    name: "Bistro Bliss",
    rating: "2.97",
    food_type: "Mexican",
    price_for_two: 2493,
    location: "India Gate",
    distance_from_Customer_house: "1.9",
    offers: 26,
    alcohol: false,
    restaurant_open_time: 20,
    restaurant_close_time: 8,
    Discount: 14,
  },
  {
    image: "fifth",
    name: "The Culinary Table",
    rating: "3.35",
    food_type: "Indian",
    price_for_two: 1816,
    location: "Red Fort",
    distance_from_Customer_house: "4.4",
    offers: 27,
    alcohol: false,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
    Discount: 18,
  },
  {
    image: "seventh",
    name: "Urban Eatery",
    rating: "3.63",
    food_type: "Indian",
    price_for_two: 1866,
    location: "Dilli Haat",
    distance_from_Customer_house: "5.9",
    offers: 10,
    alcohol: false,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
    Discount: 15,
  },
  {
    image: "Eigth",
    name: "Crispy Corner",
    rating: "2.48",
    food_type: "Japanese",
    price_for_two: 676,
    location: "Lotus Temple",
    distance_from_Customer_house: "9.4",
    offers: 7,
    alcohol: false,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
    Discount: 19,
  },
  {
    image: "nine",
    name: "The Culinary Table",
    rating: "3.52",
    food_type: "Indian",
    price_for_two: 2130,
    location: "ISKCON Temple",
    distance_from_Customer_house: "3.4",
    offers: 29,
    alcohol: true,
    restaurant_open_time: 16,
    restaurant_close_time: 4,
    Discount: 0,
  },
  {
    image: "fifth",
    name: "Savory Spot",
    rating: "4.38",
    food_type: "Indian",
    price_for_two: 673,
    location: "Safdarjung Tomb",
    distance_from_Customer_house: "2.1",
    offers: 28,
    alcohol: true,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
    Discount: 18,
  },
  {
    image: "seventh",
    name: "Fusion Feast",
    rating: "3.33",
    food_type: "Italian",
    price_for_two: 1769,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "9.9",
    offers: 22,
    alcohol: false,
    restaurant_open_time: 1,
    restaurant_close_time: 13,
    Discount: 0,
  },
  {
    image: "tenth",
    name: "Savory Spot",
    rating: "2.49",
    food_type: "Japanese",
    price_for_two: 292,
    location: "ISKCON Temple",
    distance_from_Customer_house: "1.4",
    offers: 18,
    alcohol: false,
    restaurant_open_time: 11,
    restaurant_close_time: 23,
    Discount: 4,
  },
  {
    image: "Eigth",
    name: "Savory Spot",
    rating: "3.27",
    food_type: "Chinese",
    price_for_two: 2121,
    location: "Qutub Minar",
    distance_from_Customer_house: "9.6",
    offers: 13,
    alcohol: false,
    restaurant_open_time: 14,
    restaurant_close_time: 2,
    Discount: 16,
  },
  {
    image: "seventh",
    name: "The Foodie's Hub",
    rating: "4.88",
    food_type: "Thai",
    price_for_two: 294,
    location: "Connaught Place",
    distance_from_Customer_house: "3.1",
    offers: 22,
    alcohol: false,
    restaurant_open_time: 10,
    restaurant_close_time: 22,
    Discount: 13,
  },
  {
    image: "third",
    name: "Epicurean Escape",
    rating: "1.58",
    food_type: "Mexican",
    price_for_two: 1141,
    location: "Jama Masjid",
    distance_from_Customer_house: "1.6",
    offers: 27,
    alcohol: false,
    restaurant_open_time: 8,
    restaurant_close_time: 20,
    Discount: 11,
  },
  {
    image: "fifth",
    name: "The Hungry Fork",
    rating: "3.76",
    food_type: "Italian",
    price_for_two: 1542,
    location: "Safdarjung Tomb",
    distance_from_Customer_house: "5.6",
    offers: 25,
    alcohol: false,
    restaurant_open_time: 16,
    restaurant_close_time: 4,
    Discount: 10,
  },
  {
    image: "fourth",
    name: "The Dining Den",
    rating: "4.94",
    food_type: "Mexican",
    price_for_two: 1570,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "5.7",
    offers: 14,
    alcohol: true,
    restaurant_open_time: 5,
    restaurant_close_time: 17,
    Discount: 13,
  },
  {
    image: "second",
    name: "Gourmet Delight",
    rating: "4.35",
    food_type: "Japanese",
    price_for_two: 310,
    location: "Raj Ghat",
    distance_from_Customer_house: "6.1",
    offers: 13,
    alcohol: true,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
    Discount: 9,
  },
  {
    image: "fourth",
    name: "Fusion Feast",
    rating: "5.88",
    food_type: "Indian",
    price_for_two: 1035,
    location: "Delhi Zoo",
    distance_from_Customer_house: "8.5",
    offers: 30,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
    Discount: 3,
  },
  {
    image: "First",
    name: "Flavor Junction",
    rating: "4.34",
    food_type: "Japanese",
    price_for_two: 583,
    location: "Lodi Gardens",
    distance_from_Customer_house: "6.5",
    offers: 0,
    alcohol: true,
    restaurant_open_time: 20,
    restaurant_close_time: 8,
    Discount: 4,
  },
  {
    image: "nine",
    name: "Epicurean Escape",
    rating: "3.78",
    food_type: "Mexican",
    price_for_two: 2043,
    location: "Jama Masjid",
    distance_from_Customer_house: "6.8",
    offers: 8,
    alcohol: false,
    restaurant_open_time: 19,
    restaurant_close_time: 7,
    Discount: 11,
  },
  {
    image: "nine",
    name: "Zesty Bites",
    rating: "1.20",
    food_type: "Indian",
    price_for_two: 758,
    location: "Lodi Gardens",
    distance_from_Customer_house: "1.4",
    offers: 14,
    alcohol: true,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
    Discount: 11,
  },
  {
    image: "nine",
    name: "Crispy Corner",
    rating: "5.74",
    food_type: "Chinese",
    price_for_two: 420,
    location: "Lotus Temple",
    distance_from_Customer_house: "4.2",
    offers: 25,
    alcohol: false,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
    Discount: 10,
  },
  {
    image: "second",
    name: "Bistro Bliss",
    rating: "2.29",
    food_type: "Thai",
    price_for_two: 708,
    location: "Khan Market",
    distance_from_Customer_house: "4.4",
    offers: 29,
    alcohol: false,
    restaurant_open_time: 13,
    restaurant_close_time: 1,
    Discount: 2,
  },
  {
    image: "third",
    name: "The Foodie's Hub",
    rating: "1.74",
    food_type: "Japanese",
    price_for_two: 998,
    location: "National Museum",
    distance_from_Customer_house: "6.3",
    offers: 6,
    alcohol: false,
    restaurant_open_time: 21,
    restaurant_close_time: 9,
    Discount: 17,
  },
  {
    image: "fourth",
    name: "Fusion Feast",
    rating: "4.13",
    food_type: "Indian",
    price_for_two: 1555,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "4.3",
    offers: 24,
    alcohol: false,
    restaurant_open_time: 11,
    restaurant_close_time: 23,
    Discount: 3,
  },
  {
    image: "Eigth",
    name: "Golden Plate",
    rating: "3.17",
    food_type: "Indian",
    price_for_two: 1799,
    location: "Delhi Zoo",
    distance_from_Customer_house: "9.6",
    offers: 0,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
    Discount: 19,
  },
  {
    image: "fourth",
    name: "Savory Spot",
    rating: "1.32",
    food_type: "Italian",
    price_for_two: 1072,
    location: "Raj Ghat",
    distance_from_Customer_house: "5.4",
    offers: 21,
    alcohol: true,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
    Discount: 11,
  },
  {
    image: "fifth",
    name: "Taste Haven",
    rating: "4.90",
    food_type: "Italian",
    price_for_two: 1484,
    location: "ISKCON Temple",
    distance_from_Customer_house: "2.2",
    offers: 6,
    alcohol: false,
    restaurant_open_time: 17,
    restaurant_close_time: 5,
    Discount: 4,
  },
  {
    image: "tenth",
    name: "Spice Symphony",
    rating: "3.39",
    food_type: "Thai",
    price_for_two: 1850,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "6.7",
    offers: 18,
    alcohol: false,
    restaurant_open_time: 15,
    restaurant_close_time: 3,
    Discount: 2,
  },
  {
    image: "third",
    name: "The Dining Den",
    rating: "3.65",
    food_type: "Mexican",
    price_for_two: 972,
    location: "Raj Ghat",
    distance_from_Customer_house: "7.8",
    offers: 13,
    alcohol: false,
    restaurant_open_time: 15,
    restaurant_close_time: 3,
    Discount: 13,
  },
  {
    image: "second",
    name: "Savory Spot",
    rating: "1.10",
    food_type: "Italian",
    price_for_two: 342,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "4.2",
    offers: 13,
    alcohol: true,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
    Discount: 11,
  },
  {
    image: "tenth",
    name: "The Dining Den",
    rating: "3.53",
    food_type: "Mexican",
    price_for_two: 574,
    location: "Red Fort",
    distance_from_Customer_house: "7.5",
    offers: 19,
    alcohol: false,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
    Discount: 19,
  },
  {
    image: "sixth",
    name: "The Foodie's Hub",
    rating: "4.39",
    food_type: "Japanese",
    price_for_two: 1590,
    location: "Lotus Temple",
    distance_from_Customer_house: "8.0",
    offers: 4,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
    Discount: 4,
  },
  {
    image: "Eigth",
    name: "Bistro Bliss",
    rating: "2.26",
    food_type: "Chinese",
    price_for_two: 873,
    location: "National Museum",
    distance_from_Customer_house: "3.1",
    offers: 27,
    alcohol: false,
    restaurant_open_time: 9,
    restaurant_close_time: 21,
    Discount: 16,
  },
  {
    image: "nine",
    name: "Zesty Bites",
    rating: "3.49",
    food_type: "Mexican",
    price_for_two: 948,
    location: "Connaught Place",
    distance_from_Customer_house: "1.0",
    offers: 10,
    alcohol: false,
    restaurant_open_time: 8,
    restaurant_close_time: 20,
    Discount: 10,
  },
  {
    image: "fourth",
    name: "Urban Eatery",
    rating: "2.51",
    food_type: "Chinese",
    price_for_two: 2353,
    location: "India Gate",
    distance_from_Customer_house: "7.8",
    offers: 18,
    alcohol: false,
    restaurant_open_time: 21,
    restaurant_close_time: 9,
    Discount: 9,
  },
  {
    image: "fifth",
    name: "Epicurean Escape",
    rating: "3.45",
    food_type: "Mexican",
    price_for_two: 2351,
    location: "Akshardham Temple",
    distance_from_Customer_house: "0.3",
    offers: 6,
    alcohol: false,
    restaurant_open_time: 0,
    restaurant_close_time: 12,
    Discount: 3,
  },
  {
    image: "First",
    name: "Wholesome Cravings",
    rating: "4.72",
    food_type: "Chinese",
    price_for_two: 2259,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "7.1",
    offers: 3,
    alcohol: true,
    restaurant_open_time: 14,
    restaurant_close_time: 2,
    Discount: 12,
  },
  {
    image: "tenth",
    name: "Fusion Feast",
    rating: "2.28",
    food_type: "Chinese",
    price_for_two: 431,
    location: "Red Fort",
    distance_from_Customer_house: "8.6",
    offers: 4,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
    Discount: 16,
  },
  {
    image: "First",
    name: "Crispy Corner",
    rating: "2.91",
    food_type: "Japanese",
    price_for_two: 1885,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "9.1",
    offers: 24,
    alcohol: true,
    restaurant_open_time: 9,
    restaurant_close_time: 21,
    Discount: 19,
  },
  {
    image: "First",
    name: "Fusion Feast",
    rating: "5.27",
    food_type: "Thai",
    price_for_two: 919,
    location: "Connaught Place",
    distance_from_Customer_house: "8.5",
    offers: 14,
    alcohol: false,
    restaurant_open_time: 0,
    restaurant_close_time: 12,
    Discount: 13,
  },
  {
    image: "nine",
    name: "Savory Spot",
    rating: "2.34",
    food_type: "Mexican",
    price_for_two: 1856,
    location: "Akshardham Temple",
    distance_from_Customer_house: "0.4",
    offers: 4,
    alcohol: true,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
    Discount: 2,
  },
  {
    image: "nine",
    name: "Taste Haven",
    rating: "1.72",
    food_type: "Mexican",
    price_for_two: 2208,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "7.4",
    offers: 2,
    alcohol: true,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
    Discount: 3,
  },
  {
    image: "third",
    name: "The Hungry Fork",
    rating: "2.17",
    food_type: "Japanese",
    price_for_two: 976,
    location: "Dilli Haat",
    distance_from_Customer_house: "0.9",
    offers: 2,
    alcohol: false,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
    Discount: 1,
  },
  {
    image: "Eigth",
    name: "The Hungry Fork",
    rating: "1.47",
    food_type: "Indian",
    price_for_two: 1213,
    location: "Delhi Zoo",
    distance_from_Customer_house: "2.1",
    offers: 5,
    alcohol: true,
    restaurant_open_time: 17,
    restaurant_close_time: 5,
    Discount: 16,
  },
  {
    image: "seventh",
    name: "The Rustic Spoon",
    rating: "4.64",
    food_type: "Japanese",
    price_for_two: 2465,
    location: "Dilli Haat",
    distance_from_Customer_house: "0.1",
    offers: 0,
    alcohol: false,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
    Discount: 7,
  },
  {
    image: "sixth",
    name: "Spice Symphony",
    rating: "2.58",
    food_type: "Italian",
    price_for_two: 865,
    location: "India Gate",
    distance_from_Customer_house: "2.1",
    offers: 19,
    alcohol: false,
    restaurant_open_time: 1,
    restaurant_close_time: 13,
    Discount: 5,
  },
  {
    image: "Eigth",
    name: "Gourmet Delight",
    rating: "1.51",
    food_type: "Thai",
    price_for_two: 2492,
    location: "India Gate",
    distance_from_Customer_house: "9.2",
    offers: 16,
    alcohol: false,
    restaurant_open_time: 17,
    restaurant_close_time: 5,
    Discount: 1,
  },
  {
    image: "sixth",
    name: "Epicurean Escape",
    rating: "3.69",
    food_type: "Mexican",
    price_for_two: 1671,
    location: "Purana Qila",
    distance_from_Customer_house: "1.1",
    offers: 9,
    alcohol: false,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
    Discount: 2,
  },
  {
    image: "fifth",
    name: "Tasty Treats",
    rating: "3.78",
    food_type: "Chinese",
    price_for_two: 1133,
    location: "Delhi Zoo",
    distance_from_Customer_house: "3.7",
    offers: 18,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
    Discount: 11,
  },
  {
    image: "Eigth",
    name: "The Hungry Fork",
    rating: "3.04",
    food_type: "Italian",
    price_for_two: 455,
    location: "Purana Qila",
    distance_from_Customer_house: "3.3",
    offers: 6,
    alcohol: true,
    restaurant_open_time: 9,
    restaurant_close_time: 21,
    Discount: 8,
  },
  {
    image: "fifth",
    name: "The Hungry Fork",
    rating: "3.05",
    food_type: "Italian",
    price_for_two: 2488,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "7.9",
    offers: 10,
    alcohol: false,
    restaurant_open_time: 10,
    restaurant_close_time: 22,
    Discount: 2,
  },
  {
    image: "tenth",
    name: "The Foodie's Hub",
    rating: "2.56",
    food_type: "Chinese",
    price_for_two: 1163,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "2.2",
    offers: 17,
    alcohol: false,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
    Discount: 14,
  },
  {
    image: "seventh",
    name: "The Rustic Spoon",
    rating: "5.47",
    food_type: "Mexican",
    price_for_two: 1185,
    location: "India Gate",
    distance_from_Customer_house: "9.1",
    offers: 24,
    alcohol: false,
    restaurant_open_time: 21,
    restaurant_close_time: 9,
    Discount: 8,
  },
  {
    image: "second",
    name: "Crispy Corner",
    rating: "2.32",
    food_type: "Japanese",
    price_for_two: 728,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "3.7",
    offers: 21,
    alcohol: false,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
    Discount: 7,
  },
  {
    image: "fifth",
    name: "Fusion Feast",
    rating: "4.99",
    food_type: "Japanese",
    price_for_two: 1124,
    location: "ISKCON Temple",
    distance_from_Customer_house: "0.5",
    offers: 11,
    alcohol: false,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
    Discount: 4,
  },
  {
    image: "tenth",
    name: "Flavor Junction",
    rating: "4.71",
    food_type: "Mexican",
    price_for_two: 1446,
    location: "Dilli Haat",
    distance_from_Customer_house: "7.8",
    offers: 28,
    alcohol: false,
    restaurant_open_time: 11,
    restaurant_close_time: 23,
    Discount: 17,
  },
  {
    image: "First",
    name: "The Hungry Fork",
    rating: "1.34",
    food_type: "Chinese",
    price_for_two: 450,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "1.5",
    offers: 20,
    alcohol: false,
    restaurant_open_time: 0,
    restaurant_close_time: 12,
    Discount: 12,
  },
  {
    image: "Eigth",
    name: "The Culinary Table",
    rating: "1.12",
    food_type: "Thai",
    price_for_two: 2184,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "4.9",
    offers: 19,
    alcohol: true,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
    Discount: 12,
  },
  {
    image: "sixth",
    name: "Urban Eatery",
    rating: "1.34",
    food_type: "Japanese",
    price_for_two: 1347,
    location: "Qutub Minar",
    distance_from_Customer_house: "4.1",
    offers: 4,
    alcohol: false,
    restaurant_open_time: 8,
    restaurant_close_time: 20,
    Discount: 5,
  },
  {
    image: "tenth",
    name: "Gourmet Delight",
    rating: "1.56",
    food_type: "Indian",
    price_for_two: 1297,
    location: "Safdarjung Tomb",
    distance_from_Customer_house: "8.6",
    offers: 10,
    alcohol: false,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
    Discount: 12,
  },
  {
    image: "sixth",
    name: "The Culinary Table",
    rating: "3.55",
    food_type: "Italian",
    price_for_two: 1630,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "3.1",
    offers: 25,
    alcohol: false,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
    Discount: 19,
  },
  {
    image: "fourth",
    name: "Savory Spot",
    rating: "1.85",
    food_type: "Indian",
    price_for_two: 1080,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "8.1",
    offers: 14,
    alcohol: true,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
    Discount: 11,
  },
];

// image: "fourth",
// name: "Savory Spot",
// rating: "5.81",
// food_type: "Indian",
// price_for_two: 2385,
// location: "National Museum",
// distance_from_Customer_house: "7.1",
// offers: 7,
// alcohol: false,
// restaurant_open_time: 12,
// restaurant_close_time: 0,
// Discount: 11,

// Selecting Reusable Elements
const root = document.getElementById("root");
const RatingBtn = document.getElementById("Rating");
const Alcohol = document.getElementById("Alcohol");
const Filters = document.getElementById("Filters");
const applyFilter = document.getElementById("applyFilter");
const closeFilter = document.getElementById("closeFilter");
const IsOpen = document.getElementById("Open");
const Offers = document.getElementById("Offers"); // offers

// function which will generate cards
function GenerateCard(RestaurantData) {
  // Create Card Elements

  RestaurantData.forEach((Restaurant) => {
    // div which will content card-image and card-content
    const CardDiv = document.createElement("div");
    CardDiv.classList.add("card");

    // Div for Image and Discount

    const ImgDiscountDiv = document.createElement("div");
    ImgDiscountDiv.classList.add("ImgDiscountDiv");

    // Card-Image
    const Image = document.createElement("IMG");
    Image.src = `Images/${Restaurant.image}.jpeg`;

    // Adding Discount
    const p = document.createElement("p");
    p.classList.add("Discount");
    // p.textContent = "5%"; // Initial
    p.textContent = `Discount ${Restaurant.Discount}%`;

    ImgDiscountDiv.appendChild(Image);
    ImgDiscountDiv.appendChild(p);

    // Card Content

    // div which will store all the div of card content
    const CardContentDiv = document.createElement("div");
    CardContentDiv.classList.add("card-content");

    // Card-Content-Header which will store Restaurant name and Rating
    const CardContentHeader = document.createElement("div");
    CardContentHeader.classList.add("card-header");

    const h3 = document.createElement("h3");
    h3.textContent = Restaurant.name; // store restaurant name

    const Rating = document.createElement("button");
    Rating.classList.add("rating");
    Rating.textContent = `Rating ${Restaurant.rating}`; // store resturant rating

    CardContentHeader.appendChild(h3);
    CardContentHeader.appendChild(Rating);

    // Card-footer-div which will store food type and price
    const CardFooterDiv = document.createElement("div");
    CardFooterDiv.classList.add("card-footer");

    const foodtype = document.createElement("p");
    foodtype.textContent = `${Restaurant.food_type}`; // store foodtype

    const price = document.createElement("p");
    price.textContent = `₹${Restaurant.price_for_two}`; // store price

    CardFooterDiv.appendChild(foodtype);
    CardFooterDiv.appendChild(price);

    // Card-Location-Div which will store location and distance
    const CardLocationDiv = document.createElement("div");
    CardLocationDiv.classList.add("card-location");

    const location = document.createElement("p");
    location.textContent = `${Restaurant.location}`;

    const distance = document.createElement("p");
    distance.textContent = `${Restaurant.distance_from_Customer_house}km`;

    CardLocationDiv.appendChild(location);
    CardLocationDiv.appendChild(distance);

    CardContentDiv.appendChild(CardContentHeader);
    CardContentDiv.appendChild(CardFooterDiv);
    CardContentDiv.appendChild(CardLocationDiv);

    CardDiv.appendChild(ImgDiscountDiv);
    CardDiv.appendChild(CardContentDiv);

    // Select root element to append all cards
    root.appendChild(CardDiv);
  });
}

// Flow of Execution
document.addEventListener("DOMContentLoaded", function (e) {
  GenerateCard(Restaurants); // function call to display all cards
});

// RatingButton
RatingBtn.addEventListener("click", function (e) {
  root.innerHTML = ""; // clear already present cards
  const ResultArr = Restaurants.filter((restaurant) => {
    if (restaurant.rating >= 4.5) {
      return true;
    }
  });

  GenerateCard(ResultArr);
});

// AlcoholButton
Alcohol.addEventListener("click", function (e) {
  root.innerHTML = "";
  const ResultArr = Restaurants.filter((restaurant) => {
    if (restaurant.alcohol) {
      return true;
    }
  });
  GenerateCard(ResultArr);
});

// Filters
Filters.addEventListener("click", function (e) {
  const filterPopup = document.getElementById("filterPopup");
  filterPopup.classList.remove("hidden");
});

// Apply Filter Button of FilterPopUp
applyFilter.addEventListener("click", function (e) {
  //   const SelectedOption = document.querySelector('input["filterOption"]:checked');
  const SelectedOption = document.querySelector(
    'input[name="filterOption"]:checked'
  );

  console.log(SelectedOption);
  console.log(SelectedOption.id);

  if (SelectedOption.id === "sortByRating") {
    // Sort resturant objects acc to rating high to low
    Restaurants.sort(function (a, b) {
      return b.rating - a.rating;
    });
    root.innerHTML = "";
    GenerateCard(Restaurants);
  } else if (SelectedOption.id === "sortHighToLow") {
    // Sort resturant objects acc to price high to low
    Restaurants.sort(function (a, b) {
      return b.price_for_two - a.price_for_two;
    });
    root.innerHTML = "";
    GenerateCard(Restaurants);
  } else if (SelectedOption.id === "costOption") {
    // Sort resturant objects acc to price low to high
    Restaurants.sort(function (a, b) {
      return a.price_for_two - b.price_for_two;
    });
    root.innerHTML = "";
    GenerateCard(Restaurants);
  } else if (SelectedOption.id === "distanceOption") {
    // Sort resturant objects acc to distance
    Restaurants.sort(function (a, b) {
      return a.distance_from_Customer_house - b.distance_from_Customer_house;
    });
    root.innerHTML = "";
    GenerateCard(Restaurants);
  }

  filterPopup.classList.add("hidden");
});

// Cancel Button of FilterPopUp
closeFilter.addEventListener("click", function (e) {
  filterPopup.classList.add("hidden");
});

// click event of OpenNow button of header
/*
IsOpen.addEventListener("click", function (e) {
  const now = new Date();
  const Currhours = now.getHours().toString().padStart(2, "0"); // Get hours (00-23)
  console.log("Current Hr", Currhours);

  const ResultArr = Restaurants.filter((restaurant) => {
    if (
      Currhours >= restaurant.restaurant_open_time ||
      Currhours < restaurant.restaurant_close_time
    ) {
      return true;
    }

    // Logic :- if the currentTime (hr) is greater than the opening hr or the currentTime (hr) is less than the closing hr then the Restaurant is open otherwise it is not

    // It has two flaws

    // Same Day Closing: The restaurant closes on the same day (e.g., opens at 10 AM and closes at 10 PM).
    // Next Day Closing: The restaurant closes after midnight (e.g., opens at 4 PM and closes at 4 AM).

    
  });
  console.log(ResultArr);
  root.innerHTML = " ";
  GenerateCard(ResultArr);
});

*/

IsOpen.addEventListener("click", function (e) {
  const now = new Date();
  const Currhours = now.getHours(); // Get the current hour in 24-hour format
  console.log("Current Hour:", Currhours);

  const ResultArr = Restaurants.filter((restaurant) => {
    const openTime = restaurant.restaurant_open_time;
    const closeTime = restaurant.restaurant_close_time;

    if (openTime < closeTime) {
      // Case 1: Same Day Closing
      return Currhours >= openTime && Currhours < closeTime;
    } else {
      // Case 2: Next Day Closing (closes after midnight)
      return Currhours >= openTime || Currhours < closeTime;
    }
  });

  console.log(ResultArr);
  root.innerHTML = " ";
  GenerateCard(ResultArr);
});

// For Displaying According to Offers

Offers.addEventListener("click", function (e) {
  Restaurants.sort(function (a, b) {
    return b.Discount - a.Discount;
  });
  root.innerHTML = "";
  GenerateCard(Restaurants);
});
