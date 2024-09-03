/* This function will check for the user's input and based on that will either hide or display a particular row */

function filter() {
    let value = document.getElementById("searchInput").value.toUpperCase();
    let names = document.getElementById("dinos");
    let rows = names.getElementsByTagName("tr");

    for (i = 0; i < rows.length; i++) {
        let column = rows[i].getElementsByTagName("td")[0];
        let language = column.textContent;
    
        rows[i].style.display = language.toUpperCase().indexOf(value) > -1 ? "" : "none";

            // This is basiclly the long version
            /* if (language.toUpperCase().indexOf(value) > -1) {     // This checks is the users input matches any of the text in the "td" elements
                rows[i].style.display = ""; // Keeps the row visible if the value is found.
            } else {
                rows[i].style.display = "none"; // Hides the row if the value is not found.
            } */
    }    
}
document.getElementById("searchInput").addEventListener("keyup", filter);