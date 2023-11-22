function loadData() {
    // create a new request
    const xhr = new XMLHttpRequest();


    // what to do when response arrives
    xhr.onload = function () {
        const container = document.getElementById("demo");
        container.innerHTML = this.responseText;  //this mani eikhane xhr ke bojacce & text ta ke response hisabe ni be
    };

    // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS

    xhr.open("GET", "./data/data.txt");  //link ta amra ekta file er link dichi ,,caile kono server/api er link o di te pari

    // add a request header
    // xhr.setRequestHeader("MY_GF", "JavaScript");

    // send request
    xhr.send();

    // abort
    // xhr.abort();
}
