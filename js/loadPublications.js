function formatNames(names) {
  if (names.length === 0) return ""; // If the array is empty, return an empty string.

  if (names.length === 1) return names[0]; // If there's only one name, return it.

  // If there are two or more names, join them with commas and add ", and" before the last one.
  return names.slice(0, -1).join(", ") + ", and " + names[names.length - 1];
}

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

    data.forEach((publication) => {
      if (Object.keys(publication).length !== 0) {
        const publicationDiv = document.createElement("div");
        publicationDiv.classList.add("publication");

        if (publication?.title) {
          const titleDiv = document.createElement("div");
          titleDiv.innerHTML = `<b>${publication.title}</b>`;
          publicationDiv.appendChild(titleDiv);
        }
        if (publication?.authors?.length && publication?.authors?.length !== 0) {
          const authorsDiv = document.createElement("div");
          authorsDiv.innerHTML = "with " + formatNames(publication.authors);
          publicationDiv.appendChild(authorsDiv);
        }
        if (publication?.conference?.fullName) {
          const conferenceDiv = document.createElement("div");
          conferenceDiv.innerHTML = "in " + publication.conference.fullName;
          if (publication?.conference?.abbreviatedName) {
            conferenceDiv.innerHTML += ` <b>[${publication.conference.abbreviatedName}]</b>`;
          }
          if (publication?.conference?.year) {
            conferenceDiv.innerHTML += `, ${publication.conference.year}`;
          }

          conferenceDiv.innerHTML += ".";
          publicationDiv.appendChild(conferenceDiv);
        }

        container.appendChild(publicationDiv);
      }
    });

    // Load MathJax (after all elements are created)
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "./js/MathJax/tex-chtml.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors
  });
