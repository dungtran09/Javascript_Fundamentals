const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve({ data: {name: 'ACE', admin: true} });
        }, 3000);
    });
};


const login = (user) => {
    if (user.admin === true) {
        console.log('Succsessfully logged in!');
    } else {
        console.log('Failed  login!');
    }
}

console.log('Program started.');

const user = async () => {
    const result = await fetchUser();
    login(result.data);
};

user();

console.log('Program continue excute remainder....');
