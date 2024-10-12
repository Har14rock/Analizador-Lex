document.getElementById('analyzeBtn').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value;

    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = JSON.stringify(data.tokens, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
