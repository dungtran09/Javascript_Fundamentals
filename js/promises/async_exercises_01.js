const fetchPokemon = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(getData());
            reject(new Error('Can not get data from API'));
        }, ms);
    });
};


function getData() {
    return {name: 'Pikachu', power: 20};
}

console.log('Program started.');

// const fetch = async () => { 
//     try {
//         await fetchPokemon(2000)
//         .then((result) => {
//             console.log(result);
//         })
//         .catch((error) => {
//             console.log(`${error}`);
//         });
//     } catch (error) {
//         console.log(`${err.name},: ${error.message}`); 
//     }
// }
    
const fetch = async () => {
    try {
        const result = await fetchPokemon(2000);
        console.log(result);
    } catch (error) {
        console.log(error.name,':' , error.message);   
    }
}

fetch();
console.log('Program execute remainder....');
