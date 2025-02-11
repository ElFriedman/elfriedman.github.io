// Fetch the JSON file from the assets folder
fetch("../assets/data/publications.json")
  .then((response) => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch the JSON file");
    }
    return response.json(); // Parse the JSON data
  })
  .then((data) => {
    // Get the container where the titles will be displayed
    const container = document.getElementById("publications");

    // Loop through the array and create <p> elements for each title
    data.forEach((item) => {
      const p = document.createElement("p"); // Create a new <p> element
      p.textContent = item.title; // Set the text content to the title
      container.appendChild(p); // Append the <p> element to the container
    });
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors
  });
