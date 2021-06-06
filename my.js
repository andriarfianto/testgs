function testGS() {

    var url = "https://script.google.com/macros/s/AKfycbwsKKB6PeqqeeMlBEnyuiEozeOdtJkzHgc8SjJ2V4XPfNo7fJwbuu4eWXOYdL7VPYrCOQ/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

function addGS() {

    var url = "https://script.google.com/macros/s/AKfycbxdZZ5STIKmNzhpwRAPHvQU3JVEkDSDMI_OoS1EsYayPCYAmXNzBMTVXoqcAyvFIR4/exec";

    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name: "Doe"}) // body data type must match "Content-Type" header
    })
}

document.getElementById("btn2").addEventListener('click', addGS());
document.getElementById("btn").addEventListener('click', testGS());
