/*
  Converts an array of names (in string form) into a readable form.

  ['name 1', 'name 2', 'name 3'] -> 'name 1, name 2, and name 3'
*/
function createNameString(names) {
  if (names.length === 0) return ""; // No names provided
  if (names.length === 1) return names[0]; // Only one name

  // If there are two or more names, join them with commas and add ", and" before the last one.
  return names.slice(0, -1).join(", ") + ", and " + names[names.length - 1];
}

fetch("../assets/data/publications.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch the JSON file");
    }
    return response.json();
  })
  .then((data) => {
    // Get the container where the publications info will be displayed
    const container = document.getElementById("publications");

    // Add the info from each publication to the container
    data.forEach((publication) => {
      // If the publication entry isn't empty
      if (Object.keys(publication).length !== 0) {
        // Create a div for this particular publication
        const publicationDiv = document.createElement("div");
        publicationDiv.classList.add("publication");

        /*
          Check for info in the publication entry and add the existing details to new divs
        */

        if (publication?.title) {
          const titleDiv = document.createElement("div");
          titleDiv.innerHTML = `<b>${publication.title}</b>`;
          publicationDiv.appendChild(titleDiv);
        }

        if (publication?.authors?.length && publication?.authors?.length !== 0) {
          const authorsDiv = document.createElement("div");
          authorsDiv.innerHTML = "with " + createNameString(publication.authors);
          publicationDiv.appendChild(authorsDiv);
        }

        if (publication?.conference?.fullName) {
          const conferenceDiv = document.createElement("div");
          conferenceDiv.innerHTML = "in " + publication.conference.fullName;
          if (publication?.conference?.abbreviatedName) {
            conferenceDiv.innerHTML += ` <b>(${publication.conference.abbreviatedName})</b>`;
          }
          // if (publication?.conference?.year) {
          //   conferenceDiv.innerHTML += `, ${publication.conference.year}`;
          // }

          conferenceDiv.innerHTML += ".";
          publicationDiv.appendChild(conferenceDiv);
        }

        if (publication?.emphNote) {
          const emphNoteDiv = document.createElement("div");
          emphNoteDiv.innerHTML = `<b>${publication.emphNote}</b>`;
          publicationDiv.appendChild(emphNoteDiv);
        }

        if (publication?.note) {
          const noteDiv = document.createElement("div");
          noteDiv.innerHTML = publication.note;
          publicationDiv.appendChild(noteDiv);
        }

        if (publication?.links) {
          const linksDiv = document.createElement("div");
          linksDiv.innerHTML += "[";
          publication.links.forEach((linkTuple) => {
            const link = document.createElement("a");
            link.innerHTML = `${linkTuple[0]}`;
            link.href = linkTuple[1];
            linksDiv.appendChild(link);
            linksDiv.innerHTML += "], [";
          });
          linksDiv.innerHTML = linksDiv.innerHTML.substring(0, linksDiv.innerHTML.length - 4);
          linksDiv.innerHTML += "]";
          publicationDiv.appendChild(linksDiv);
        }

        // Done getting/formatting this publication's info. Add it to the container.
        container.appendChild(publicationDiv);
      }
    });

    // Load MathJax (after all elements are created)
    window.MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
      },
      loader: { load: ["input/tex", "output/chtml"] },
      chtml: { scale: 1 },
    };

    (function () {
      var script = document.createElement("script");
      script.src = "./js/MathJax/tex-chtml.js";
      script.async = true;
      document.head.appendChild(script);
    })();
  })
  .catch((error) => {
    console.error(error); // Handle any errors
  });
