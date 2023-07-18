for (let index = 1; index <= 10 ; index++) {
    try {
        if (index == 5) {
            throw 'Boom!';
        }
        console.log(`Index: ${index}`);
    } catch (error) {
        console.error(`I got a error at here (index: ${index}) : ${error}`);
    }
}
