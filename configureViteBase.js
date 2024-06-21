import fs from 'fs';

const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
const viteConfigPath = 'vite.config.js';

// Leitura do conteúdo do arquivo vite.config.js
fs.readFile(viteConfigPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo vite.config.js:', err);
    process.exit(1);
  }

  // Substituição da linha 'base: ""' pela configuração apropriada
  const result = data.replace(/base: ""/, `base: "/${repoName}/"`);

  // Escrita do conteúdo atualizado no arquivo vite.config.js
  fs.writeFile(viteConfigPath, result, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo vite.config.js:', err);
      process.exit(1);
    }
    console.log('A configuração base foi adicionada ao arquivo vite.config.js.');
  });
});