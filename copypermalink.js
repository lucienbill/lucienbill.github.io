var timerID = null
  function copyToClipboard() {
    const copyLink = document.getElementById("copyPermalink");

    // Copy the link
    navigator.clipboard.writeText(copyLink.getAttribute("permalink"));

    // Notify the user that "copy" is done
    copyLink.innerHTML = "✔ (copié)";

    // Cancel the timer if it exists
    if (timerID !== null)
    {
        clearTimeout(timerID);
    }
    
    // Set a timer to reset the button to "copy" after a while
    timerID = setTimeout(
        () => {
          copyLink.innerHTML = "📄";
        }
        , 5000
    )
  }