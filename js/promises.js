function wait(number) {
    const otherPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve()
        }, number);

    });
    return otherPromise;
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function getLastCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": ''}})
        .then(response => response.json())
        .then((events) => console.log(events[0].created_at));
        // .then(events => console.log(events));



}

getLastCommit('Monicacholico');


// ==================== PROMISES EXERCISES RESOLVED BY LUIS ======================================

// const wait = miliseconds => {
//         return new Promise((resolve, reject) =>{
//             setTimeout(() =>){
//             resolve();
//             }, miliseconds;
//         });
//
// };
//
// wait(1000).then(() => console.log("you'll see this after 1 second"));
//
//
// const request = fetch('https://api.github.com/users/:username/events',{headers: {Authorization: 'token '}
// });
// request
//
//     .then(response => response.json())
//     .then(events => console.log(events[0].created_at))
//     ;
//
//     request.catch(error => console.log(error));
