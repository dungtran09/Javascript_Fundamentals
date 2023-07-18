const showData = async () => {
  const url = "https://www.craigslist.org/about";
  const fetchData = await fetch(url);
  const htmls = await fetchData.text();
  console.log(htmls);
};

showData();
