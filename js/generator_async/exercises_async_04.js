const generatorCharactorFromAnString = async function * (sentence) {
    const vowel = 'AEIOU';
    let newSentence = '';
    for (const charactor of sentence) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                if (vowel.includes(charactor.toUpperCase())) {
                    resolve(newSentence += '*' + ' ');
                } else {
                    resolve(newSentence += charactor.toUpperCase() + ' ');
                }
            }, 100);
        })
    }
}

let sentence = 'Monkeys are the coolest animal!';

const createGeneratorCharactorFromAnStringObject = generatorCharactorFromAnString(sentence);

const showCharactor = async () => {
    for await (const charactor of createGeneratorCharactorFromAnStringObject) {
        console.log(charactor);
    }
}
showCharactor();
