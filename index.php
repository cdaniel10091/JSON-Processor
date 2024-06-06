<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JSON Processor</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <main id="main">
    <h1>JSON Processor</h1>
  
    <form action="#" method="post" id="jsonForm">
      <menu class="menu-options">
        <li>
          <button class="data-option" data-option="write-data">Escrever json</button>
        </li>
        <li>
          <button class="data-option" data-option="upload-file">Fazer upload de um arquivo</button>
        </li>
      </menu>
      <div class="options">
        <div id="writeDataInput">
          <textarea name="dataText" id="dataText" cols="30" rows="10"></textarea>
          <div class="write-data-result">
            <h2>Resultado:</h2>
            <pre id="jsonOutput"></pre>
          </div>
        </div>
        <div id="uploadFileInput" class="input-file">
          <input type="file" name="dataFile" id="dataFile">
          <label for="dataFile">Escolher arquivo</label>
          <div class="loading">
            <span>Carregando...</span>
          </div>
          <div class="file-info">
            <span data-value="file-name">Nome do arquivo: <strong>arquivo.json</strong></span>
            <span data-value="file-size">Tamanho: <strong>1.5 MB</strong></span>
          </div>
        </div>
      </div>
      <button class="btn-primary" type="submit">Process</button>
    </form>
  </main>

  <script src="main.js"></script>
  <script src="script.js"></script>
</body>
</html>