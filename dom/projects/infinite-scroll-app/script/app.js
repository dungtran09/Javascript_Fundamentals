(function () {
  const quotesEl = document.querySelector(".quotes");
  const loaderEl = document.querySelector(".loader");
  console.log(quotesEl);
  console.log(loaderEl);

  // to get quotes from API
  const getQuotes = async (page, limit) => {
    const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`An error occured ${response.status}`);
    }

    return response.json();
  };

  // console.log(getQuotes(1, 10));

  // to show quotes
  const showQuotes = (quotes) => {
    quotes.forEach((quote) => {
      const quoteEl = document.createElement("blockquote");
      quoteEl.classList.add("quote");
      quoteEl.innerHTML = `<span>${quote.id})</span>
                          ${quote.quote}
                          <footer>${quote.author}</footer>`;
      quotesEl.appendChild(quoteEl);
    });
  };

  // hidden and show loading  indicator
  const hidenLoader = () => {
    loaderEl.classList.remove("show");
  };

  const showLoader = () => {
    loaderEl.classList.add("show");
  };

  let currentPage = 1;
  const limit = 10;
  let total = 0;

  // to check if has more page or not when fetch API
  const hasMoreQuotes = (page, limit, total) => {
    const startIndex = (page - 1) * (limit + 1);
    return total === 0 || startIndex < total;
  };

  // to load quotes
  const loadQuotes = async (page, limit) => {
    showLoader();

    setTimeout(async () => {
      try {
        // if has more quotes then continue fetch
        if (hasMoreQuotes(page, limit, total)) {
          const response = await getQuotes(page, limit);
          showQuotes(response.data);
          total = response.total;
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        hidenLoader();
      }
    }, 500);
  };

  window.addEventListener(
    "scroll",
    () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 5 &&
        hasMoreQuotes(currentPage, limit, total)
      ) {
        currentPage++;
        loadQuotes(currentPage, limit);
      }
    },
    { passive: true }
  );

  // initial
  loadQuotes(currentPage, limit);
})();
