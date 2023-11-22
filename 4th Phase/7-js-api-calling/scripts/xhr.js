console.clear();

// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()


const makeRequest = (method, url, data) => {

    return new Promise((resolve, reject) => { //pora process ta ke ekta promise er modde reke di che
        const xhr = new XMLHttpRequest();  //made korteche
        xhr.open(method, url); //open korche


        xhr.setRequestHeader('Content-Type', 'application/json'); //ei golo constant

        xhr.onload = () => { //data load
            let data = xhr.response;
            console.log(JSON.parse(data))
        }

        xhr.onerror = () => {
            console.log('error is here');
        }

        xhr.send(JSON.stringify(data)); //data ta ke send korteche and stringify er maddome data json format e convert korteche
    });
}


const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res))
}

getData();
// const sendData = () => {
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {  //req type and link ,,ey link ta amra make kora fake api theke nichi
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }
// const updateData = () => {
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         id: 1,
//         title: 'fooMA',
//         body: 'barMA',
//         userId: 1,
//     });
// }
// const updateSingleData = () => {
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {  //patch er maddome single kono kicu ke update korte parbo

//         title: 'This is changed',

//     });
// }
// const deleteData = () => {
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
// }
// deleteData();