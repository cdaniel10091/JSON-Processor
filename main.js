const dataOption = document.querySelectorAll('.data-option');
const textArea = document.getElementById('writeDataInput');
const fileInput = document.getElementById('uploadFileInput');

dataOption.forEach((elem) => {
  if (elem.getAttribute('data-option') === 'write-data') {
    textArea.style.display = 'flex';
    fileInput.style.display = 'none';
    elem.classList.add('active');
  }

  elem.addEventListener('click', (e) => {
    e.preventDefault();

    const option = e.target.getAttribute('data-option');

    dataOption.forEach((item) => {
      if (item !== elem) {
        item.classList.remove('active');
      }
    });

    if (option === 'write-data') {
      textArea.style.display = 'flex';
      fileInput.style.display = 'none';
      elem.classList.add('active');
    } else if (option === 'upload-file') {
      textArea.style.display = 'none';
      fileInput.style.display = 'flex';
      elem.classList.add('active');
    }
  });
});

const writeDataResult = document.querySelector('.write-data-result');

writeDataResult.style.display = 'none';

textArea.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    e.target.value = e.target.value.substring(0, start) + '\t' + e.target.value.substring(end);
    e.target.selectionStart = e.target.selectionEnd = start + 1;
  }
});

textArea.addEventListener('input', (e) => {
  const jsonOutput = document.getElementById('jsonOutput');

  if (e.target.value !== null || e.target.value !== '' || e.target.value !== undefined || e.target.value !== ' ') {
    writeDataResult.style.display = 'block';
  } else {
    writeDataResult.style.display = 'none';
  }

  try {
    const parsedJson = JSON.parse(e.target.value);
    jsonOutput.innerHTML = JSON.stringify(parsedJson, null, 2);
  } catch (error) {
    jsonOutput.innerHTML = error.message;
  }
});

const fileInfo = document.querySelector('.file-info');
const fileInfoName = document.querySelector('[data-value="file-name"] strong');
const fileInfoSize = document.querySelector('[data-value="file-size"] strong');
const loading = document.querySelector('.loading');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  fileInfoName.innerHTML = file.name;
  
  if (((file.size / 1024).toFixed(2) / 1024).toFixed(2) >= 1024) { // TODO: Not supported!
    fileInfoSize.innerHTML = `${((file.size / 1024).toFixed(2) / 1024).toFixed(2)} GB`;
  } else if ((file.size / 1024).toFixed(2) >= 1024) {
    fileInfoSize.innerHTML = `${((file.size / 1024).toFixed(2) / 1024).toFixed(2)} MB`;
  } else if (file.size >= 1024) {
    fileInfoSize.innerHTML = `${(file.size / 1024).toFixed(2)} KB`;
  } else {
    fileInfoSize.innerHTML = `${file.size} B`;
  }

  reader.onload = (e) => {
    const jsonOutput = document.getElementById('jsonOutput');
    const result = e.target.result;

    try {
      const parsedJson = JSON.parse(result);
      jsonOutput.innerHTML = JSON.stringify(parsedJson, null, 2);
    } catch (error) {
      jsonOutput.innerHTML = error.message;
    }

    fileInfo.classList.add('visible');
    loading.style.display = 'none';
  };

  reader.readAsText(file);
  fileInfo.classList.remove('visible');
  loading.style.display = 'block';
});
