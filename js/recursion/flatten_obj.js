const obj = {
  id: "SE2154",
  name: "Doe John",
  isAdmin: true,
  address: {
    country: "USA",
    city: "Washington DC",
    street: null,
  },
};

console.log(obj);

const flatten = (obj) => {
  let newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value != null) {
      const flattened = flatten(value);

      newObj = { ...newObj, ...flattened };
      return newObj;
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
};

console.log(flatten(obj));
