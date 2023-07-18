class WordCounter {
  constructor(inputText) {
    this.inputText = inputText;
    this.inputText.addEventListener("input", () => {
      this.count();
    });
  }

  count() {
    // console.log(this);
    let wordStat = this.getWordStat(this.inputText.value.trim());
    this.emitWord(wordStat);
  }

  getWordStat(str) {
    let matches = str.match(/\S+/g);
    return {
      characters: str.length,
      words: matches ? matches.length : 0,
    };
  }

  emitWord(wordStat) {
    let counterEvent = new CustomEvent("count", {
      bubbles: true,
      cancelable: true,
      detail: {
        wordStat,
      },
    });
    this.inputText.dispatchEvent(counterEvent);
  }
}
