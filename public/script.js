document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});

function fetchData() {
    fetch("https://api.publicapis.org/entries")
        .then(response => response.json())
        .then(data => renderTable(data.entries))
        .catch(error => console.error("Error fetching data:", error));
}

function renderTable(data) {
    let resultBody = document.getElementById("result");
    resultBody.innerHTML = "";

    data.slice(0, 10).forEach((entry, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.API}</td>
            <td>${entry.Category}</td>
            <td><a href="${entry.Link}" target="_blank">Visit</a></td>
        `;

        resultBody.appendChild(row);
    });
}
