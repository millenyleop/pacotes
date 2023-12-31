  const chalk = require ('chalk');

const rainbowColors = [
    chalk.red('Vermelho'),
    chalk.yellow('Amarelo'),
    chalk.green('Verde'),
    chalk.blue('Azul'),
    chalk.black('Preto'),
];

console.log(chalk.bold('O Chalk é uma biblioteca do Node.js que permite adicionar cores e estilos ao texto no console.'));
console.log(chalk.italic('Com o Chalk, você pode criar mensagens coloridas e estilizadas de forma fácil e rápido.'));
console.log(chalk.underline('Siga o exemplo de texto colorido em arco-íris:'));
console.log(rainbowColors.join(' -> '));
console.log(chalk.inverse('Você pode combinar várias cores e estilos para criar diversas mensagens.'));
console.log(chalk.bgWhite.black('Experimente o Chalk quando quiser que seu texto seja colorido'));

