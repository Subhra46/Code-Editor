const languageSelect = document.getElementById('languageSelect');
const codeInput = document.getElementById('codeInput');
const outputFrame = document.getElementById('outputFrame');
const runButton = document.getElementById('runButton');

runButton.addEventListener('click', () => {
    const selectedLanguage = languageSelect.value;
    const code = codeInput.value;
    
   
    executeCode(code, selectedLanguage);
});

function executeCode(code, language) {
    
    const apiUrl = 'YOUR_API_URL';

    
    const formData = new FormData();
    formData.append('code', code);
    formData.append('language', language);

    
    fetch(apiUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
       
        outputFrame.contentDocument.body.innerHTML = '<pre>' + data.output + '</pre>';
    })
    .catch(error => {
        console.error('Error:', error);
        outputFrame.contentDocument.body.innerHTML = '<pre>An error occurred while executing the code.</pre>';
    });
}