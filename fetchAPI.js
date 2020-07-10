// async and await
const getData = async() => {
    const getResponse = await fetch('anzanaoo.json');
    if(getResponse.status !== 200){
        throw new Error('Cannot fetch the data');
    }
    const myData = await getResponse.json();
    return myData;

};

getData()
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err.message);
});







// fetch('anzana.json').then(response => {
//     console.log("promise resolved: ");
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("promise rejected: ",err);
// })