const categories = {1: 'Dirt', 2: 'Tools', 3: 'Feed', 4: 'Plants', 5: 'Ducks', 6: 'Seeds'}

const inventory = [
  {
    product_name: "Sand",
    category_id: 1,
    sku: "FNG654P3XN",
    sale_price: "1",
    sale_quantity: "1oz",
    cost: "0.4",
    stock_quantity: "300lbs",
    prev_order_date: "2020-08-08"
  },
  {
    product_name: "Clay",
    category_id: 1,
    sku: "FNGG54P4XK",
    sale_price: "1",
    sale_quantity: "1oz",
    cost: "0.4",
    stock_quantity: "175lb",
    prev_order_date: "2020-08-08"
  },
  {
    product_name: "Gravel",
    category_id: 1,
    sku: "FNG654PON",
    sale_price: "1.5",
    sale_quantity: "1oz",
    cost: "0.6",
    stock_quantity: "500lbs",
    prev_order_date: "2020-06-01"
  },
  {
    product_name: "Manure",
    category_id: 1,
    sku: "FNG654OIUN",
    sale_price: "2",
    sale_quantity: "1oz",
    cost: "1",
    stock_quantity: "1000lbs",
    prev_order_date: "2020-10-15"
  },
  {
    product_name: "Screwdriver",
    category_id: 2,
    sku: "TIU544OYTN",
    sale_price: "10",
    sale_quantity: "1",
    cost: "1",
    stock_quantity: "5",
    prev_order_date: "2020-11-01"
  },
  {
    product_name: "Hammer",
    category_id: 2,
    sku: "TIU544OYYY",
    sale_price: "25",
    sale_quantity: "1",
    cost: "10",
    stock_quantity: "10",
    prev_order_date: "2020-11-01"
  },
  {
    product_name: "4in Wood Nail",
    category_id: 2,
    sku: "TIH544OYTT",
    sale_price: "0.75",
    sale_quantity: "1",
    cost: "0.20",
    stock_quantity: "200",
    prev_order_date: "2020-10-01"
  },
  {
    product_name: "3in Wood Screw",
    category_id: 2,
    sku: "TIH543ORTN",
    sale_price: "0.80",
    sale_quantity: "1",
    cost: "0.30",
    stock_quantity: "300",
    prev_order_date: "2020-10-01"
  },
  {
    product_name: "Tape Measure",
    category_id: 2,
    sku: "TIU544RRER",
    sale_price: "15",
    sale_quantity: "1",
    cost: "6",
    stock_quantity: "10",
    prev_order_date: "2020-11-01"
  },
  {
    product_name: "Chicken Wire",
    category_id: 2,
    sku: "TIU5446545",
    sale_price: "3",
    sale_quantity: "1ft",
    cost: "0.75",
    stock_quantity: "1000ft",
    prev_order_date: "2020-6-01"
  },
  {
    product_name: "Deer Corn",
    category_id: 3,
    sku: "REW77UUWP5",
    sale_price: "10",
    sale_quantity: "1lbs",
    cost: "5",
    stock_quantity: "500lbs",
    prev_order_date: "2020-09-01"
  },
  {
    product_name: "Hay Bushel",
    category_id: 3,
    sku: "REW77YYTP",
    sale_price: "5",
    sale_quantity: "5lbs",
    cost: "2",
    stock_quantity: "545lbs",
    prev_order_date: "2020-07-01"
  },
  {
    product_name: "Bird Seed",
    category_id: 3,
    sku: "REW37NNBM",
    sale_price: "7",
    sale_quantity: "3lbs",
    cost: "3",
    stock_quantity: "45lbs",
    prev_order_date: "2020-08-01"
  },
  {
    product_name: "Grain Pellets",
    category_id: 3,
    sku: "REW37TTUW",
    sale_price: "10",
    sale_quantity: "4lbs",
    cost: "3",
    stock_quantity: "175lbs",
    prev_order_date: "2020-08-01"
  },
  {
    product_name: "Dried Fruit & Grain",
    category_id: 3,
    sku: "REW37TTOP",
    sale_price: "10",
    sale_quantity: "4lbs",
    cost: "3",
    stock_quantity: "275lbs",
    prev_order_date: "2020-08-01"
  },
  {
    product_name: "Salt Lick",
    category_id: 3,
    sku: "REW37TTOP",
    sale_price: "20",
    sale_quantity: "10lbs",
    cost: "1",
    stock_quantity: "15",
    prev_order_date: "2020-09-01"
  },
  {
    product_name: "Grass Pellets",
    category_id: 3,
    sku: "REW37TTOP",
    sale_price: "10",
    sale_quantity: "7lbs",
    cost: "6",
    stock_quantity: "300lbs",
    prev_order_date: "2020-08-01"
  },
  {
    product_name: "Tulips",
    category_id: 4,
    sku: "DSD30UUIP",
    sale_price: "25",
    sale_quantity: "1 Planter",
    cost: "5",
    stock_quantity: "14",
    prev_order_date: "2020-05-10"
  },
  {
    product_name: "Mint",
    category_id: 4,
    sku: "DSD30UTRRE",
    sale_price: "20",
    sale_quantity: "1 Planter",
    cost: "6",
    stock_quantity: "15",
    prev_order_date: "2020-05-10"
  },
  {
    product_name: "Tomato Plant",
    category_id: 4,
    sku: "DSD50UUTTM",
    sale_price: "30",
    sale_quantity: "1 Planter",
    cost: "12",
    stock_quantity: "3",
    prev_order_date: "2020-05-10"
  },
  {
    product_name: "Yellow Bulb",
    category_id: 4,
    sku: "DSD60UYTMP",
    sale_price: "10",
    sale_quantity: "1 Planter",
    cost: "3",
    stock_quantity: "45",
    prev_order_date: "2020-05-10"
  },
  {
    product_name: "Yellow Duck",
    category_id: 5,
    sku: "BHB60UOERE",
    sale_price: "10",
    sale_quantity: "1 Duckling",
    cost: "3",
    stock_quantity: "15",
    prev_order_date: "2020-12-01"
  },
  {
    product_name: "Strawberry",
    category_id: 6,
    sku: "VGH89YYTE",
    sale_price: "1",
    sale_quantity: "1 Packet",
    cost: "0.30",
    stock_quantity: "20",
    prev_order_date: "2020-09-01"
  },
  {
    product_name: "Carrot",
    category_id: 6,
    sku: "VGH79UUMN",
    sale_price: "1",
    sale_quantity: "1 Packet",
    cost: "0.30",
    stock_quantity: "20",
    prev_order_date: "2020-09-01"
  },
  {
    product_name: "Watermelon",
    category_id: 6,
    sku: "VGH89YTMN",
    sale_price: "1",
    sale_quantity: "1 Packet",
    cost: "0.30",
    stock_quantity: "20",
    prev_order_date: "2020-09-01"
  },
  {
    product_name: "Pumpkin",
    category_id: 6,
    sku: "VGH89HHJM",
    sale_price: "1",
    sale_quantity: "1 Packet",
    cost: "0.30",
    stock_quantity: "20",
    prev_order_date: "2020-09-01"
  },
  {
    product_name: "Squash",
    category_id: 6,
    sku: "VGH87GGHJ",
    sale_price: "1",
    sale_quantity: "1 Packet",
    cost: "0.30",
    stock_quantity: "20",
    prev_order_date: "2020-09-01"
  },
  {
    product_name: "Cucumber",
    category_id: 6,
    sku: "VGH87IIOP",
    sale_price: "1",
    sale_quantity: "1 Packet",
    cost: "0.30",
    stock_quantity: "25",
    prev_order_date: "2020-09-01"
  },
  {
    product_name: "Zucchini",
    category_id: 6,
    sku: "VGH87YGFD",
    sale_price: "1",
    sale_quantity: "1 Packet",
    cost: "0.30",
    stock_quantity: "30",
    prev_order_date: "2020-09-01"
  }
]

const december_orders = [
  {
    product_sku: "VGH87YGFD",
    amount: "3",
    total_sale_price: "4.10",
    purchase_date_time: "2020-12-01 08:11:00"
  },
  {
    product_sku: "TIU544RRER",
    amount: "1",
    total_sale_price: "17",
    purchase_date_time: "2020-12-02 10:11:00"
  },
  {
    product_sku: "REW77UUWP5",
    amount: "20lbs",
    total_sale_price: "205.67",
    purchase_date_time: "2020-12-04 07:30:00"
  }
]

const november_orders = [
  {
    product_sku: "FNG654OIUN",
    amount: "20lbs",
    total_sale_price: "35.46",
    purchase_date_time: "2020-11-04 13:40:00"
  }
]

const store = {
  name: "Pete Appleseed's Feed and Farm Garden Shop",
  address: "140 Red Clay Rd, Macon GA 31207",
  inventory,
  product_categories: categories,
  orders: {
    december: december_orders,
    november: november_orders,
    october: november_orders,
    september: november_orders,
    august: november_orders,
    july: november_orders
  }
}