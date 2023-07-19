// Get the form element and add a submit event listener
document.getElementById("post-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form inputs
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open("POST", "/add_post", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Define the data to send in the request body
    var data = JSON.stringify({ "title": title, "description": description });

    // Set up the callback function to handle the response
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Request was successful
            console.log(xhr.responseText); // You can do something with the response here
            // Refresh the page or update the UI as needed
            window.location.reload();
        } else {
            // Request failed
            console.error("Error:", xhr.status, xhr.statusText);
        }
    };

    // Send the request
    xhr.send(data);
});
