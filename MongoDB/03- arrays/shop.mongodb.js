use('shopDB');
db.products.drop();
db.createCollection("products");
db.products.insertOne({ product_name: "table", product_color: "red", product_price: 1250, product_weight: 0.75 })
db.products.insertMany([
    { product_name: "chair", product_color: "brown", product_price: 550, product_weight: 0.95 },
    { product_name: "closet", product_color: "white", product_price: 2250, product_weight: 0.65 }
])
db.products.insertOne({ product_name: "bed", product_color: "white", product_price: 3000, date_of_man: "20/12/2020" })
db.products.insertOne({ product_name: "oven", product_color: "black", product_price: 1500, date_of_man: "20/12/2019" })
db.products.insertOne({ product_name: "cheese", product_price: 25, product_components: ["milk", "shuger", "solt"] })
db.products.insertOne({ product_name: "yogurt", product_price: 15, product_components: ["milk", "shuger", "solt"] })
db.products.insertOne({ product_name: "yellow_cheese", product_category: "dairy", product_price: 25, product_components: ["milk", "shuger", "solt"] })
db.products.insertOne({ product_name: "apple", product_category: "fruits", product_price: 25, product_weight: 0.75 })
db.products.insertOne({ product_name: "pear", product_category: "fruits", product_price: 25, product_weight: 0.85 })
db.products.insertOne({ product_name: "banana", product_category: "fruits", product_price: 25, product_weight: 0.55 })
db.products.insertOne({ product_name: "strawberry", product_category: "fruits", product_price: 30, product_weight: 0.65 })
db.products.insertOne({ product_name: "tomato", product_category: "vegetables", product_price: 25, product_weight: 0.75 })
db.products.insertOne({ product_name: "onion", product_category: "vegetables", product_price: 15 })
db.products.insertOne({ product_name: "cucumber", product_category: "vegetables", product_price: 25 })
db.products.insertOne({ product_name: "pepper", product_category: "vegetables", product_price: 25 })


