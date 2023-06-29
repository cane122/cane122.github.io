window.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.getElementById('text-container');

    fetch('text.txt')
        .then(response => response.text())
        .then(data => {
            const formattedText = formatText(data); 
            textContainer.innerHTML = formattedText;
        })
        .catch(error => {
            textContainer.textContent = 'Error: ' + error;
        });
});

function formatText(text) {
    // Replace line breaks with HTML line breaks
    const formattedText = text.replace(/\n/g, '<br>');
  
    // Add a class and center alignment to the text container
    return `<div class="formatted-text" style="text-align: justify; text-align-last: center;width:32%;margin:0 auto;">${formattedText}</div>`;
  }
  
