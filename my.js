function testGS() {
    
    var url = "https://script.google.com/macros/s/AKfycbwsKKB6PeqqeeMlBEnyuiEozeOdtJkzHgc8SjJ2V4XPfNo7fJwbuu4eWXOYdL7VPYrCOQ/exec";
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

document.getElementById("btn").addEventListener('click', testGS());