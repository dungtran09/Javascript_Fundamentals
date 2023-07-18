const createDB = () => {
  let storage = ["Banana", "Strawberries", "Grape", "Mango"];

  const insertItemsToDB = (item) => {
    storage.push(item);
    console.log(storage);
  };
  const clearDB = () => {
    storage = [];
    console.log(storage);
  };
  return [insertItemsToDB, clearDB];
};

const createDBObj = createDB();

const [add, clear] = createDBObj;

add("Waterlemon");
add("Cherry");

clear();
