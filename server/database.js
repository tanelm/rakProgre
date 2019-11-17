const mongoose = require("mongoose");
const Item = require("./item.model.js");
const databaseMock = require("./database.mock.js");

const DB_URL = `${process.env.DB_URL}`;

const connect = () => {
    return mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("Database access successful");
        //deleteAllItems();
        migrate();
    });
};

function migrate(){ // async, can't know when all are saved
    Item.count({}, (err, countNo) => {
        if(err) throw err;
        if(countNo > 0) {
            console.log("Items already exist in mongodb");
            return;
        }
        saveAllItems();
    });
}

function deleteAllItems(){
    Item.deleteMany({}, (err, doc) => {
        console.log("err", err, "doc", doc);
    });
}

function saveAllItems(){
    console.log("Migration started");
    const items = databaseMock.getItems();
    items.forEach(item => {
        const document = new Item(item);
        document.save ((err) => {
            if(err){
                console.log(err);
                throw new Error("Item save error");
            }
            console.log("Save successful");
        });
    });
    console.log("items", items);
}

module.exports = {
    connect,
};