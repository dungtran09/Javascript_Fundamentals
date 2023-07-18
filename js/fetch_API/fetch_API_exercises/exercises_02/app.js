const getObjFromUrl = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const getData = await fetch(url);
  const result = await getData.json();
  console.log(result);
};

getObjFromUrl();
