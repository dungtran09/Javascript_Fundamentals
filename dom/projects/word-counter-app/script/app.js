const inputText = document.querySelector("#text");
const statElem = document.querySelector("#stat");

new WordCounter(inputText);
const render = (event) => {
  statElem.innerHTML = `<p>Your are written <span class="hightlight">${event.detail.wordStat.words}</span> 
    and <span class="hightlight">${event.detail.wordStat.characters} characters</span>.</p>`;
};

inputText.addEventListener("count", render);
