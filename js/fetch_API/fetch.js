import fetch from "node-fetch";

// const response = fetch("https://www.wallhaven.cc");
//
// response
//   .then((resolve) => {
//     return resolve.text();
//   })
//   .then((htmls) => {
//     console.log(htmls);
//   });

const fetchData = async () => {
  const result = await fetch("https://www.wallhaven.cc");
  const htmls = await result.text();
  console.log(htmls);
};

fetchData();
