const form = document.querySelector('#jsonForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fileInput = document.querySelector('#dataFile');
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const jsonData = JSON.parse(reader.result);
    fetch('process.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData)
    })
    .then(response => response.text())
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
  };
  
  reader.readAsText(file);
});