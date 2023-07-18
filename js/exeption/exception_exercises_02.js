try {
    console.log('Started Program.');
    throw new Error('Oh oh');
} catch (error) {
    console.log(error);
}

console.log('Program completed.');
