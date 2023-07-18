const message = 'Global scope';
try {
    const message = 'Local scope!';
    console.log(message);
    // throw new Error('Something wrong!');
    throw 'Something wrong!';
    
} catch (error) {
    // const message = 'Exiting the current progress...!';
    console.error(error);
    console.error(message);
}

console.log('Continue...');
