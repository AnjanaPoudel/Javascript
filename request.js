
const loadData = (resource) => {

    return new Promise( (resolve,reject) => {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener('readystatechange',() => {
    if(xhttp.readyState === 4 && xhttp.status === 200){
    const data = JSON.parse(xhttp.responseText);
    resolve(data);
    }
    else if(xhttp.readyState === 4){
    reject('couldnot find the source');
    }
        });
    
        xhttp.open('GET',resource);
        xhttp.send();
    });
   
};

loadData('JSON.json').then(data => {
    console.log("Promise1 resolved: ",data);
    return loadData('anzana.json');
}).then(data => {
    console.log("Promise 2 resolved: ",data);
    return loadData('anoop.json');
}).then(data => {
    console.log("Promise 3 resolved: ",data);
}).catch(err => {
    console.log("Promise rejected: ",err);
});

// loadData((err,data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

// const getSomething = () => {
//     return new Promise((resolve,reject) => {
// resolve('request resolved');
// // reject('request rejected');
//     })
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
// console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });