const listWords = new Map();

listWords.set('orange', 'qua cam');
listWords.set('cherry', 'qua anh dao');
listWords.set('banana', 'qua chuoi');
listWords.set('apple', 'qua tao');
listWords.set('lemon', 'qua chanh');


for (const word of listWords) {
    console.log(`${word[0]}: ${word[1]}`);
}
