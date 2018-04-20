const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];



const listLanguages = users
.filter(user => user.languages.length > 2)
    .map(user => user.name)
    .map(name => name);
console.log(listLanguages);



const listItems = users
    .map(user => user.email)
    .map(email => email);
console.log(listItems);



const theIds = users.reduce((partialResult, currentValue) =>{
    // return id + currentValue
    partialResult[currentValue.id] = currentValue;
    // console.log(partialResult);
    // console.log(currentValue);
    return partialResult;
    // console.log( id + currentValue);
},{});
console.log(theIds);
/*
result = {
    "1": {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    "2": {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    }
}*/


//function