//your JS code here. If required.
 const statusElement = document.getElementById("status");
    const button = document.getElementById("enterBtn");

    button.addEventListener("click", () => {
      // Replace the <p> with an <h1>
      const h1 = document.createElement("h1");
      h1.textContent = "Entered Metaverse";
      h1.id = "status"; // Preserve ID if needed later
      statusElement.replaceWith(h1);
    });