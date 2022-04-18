const chalk = require ('chalk')
const figlet = require('figlet')
const prompt = require(`prompt-sync`)(); 

figlet('DRAGON BALL Z ', (err, result) =>{
    console.log(err || result)
})
console.clear()
console.log(chalk.bgRedBright.black (``));

console.log() 
const nome = prompt(chalk.bgGreen.black (`Qual é o seu nome Saiyajin?: `).toLocaleLowerCase());
console.log();
console.log(chalk.bgBlue.black (`Vamos conquista as Esferas do Dragon: ${nome}`));
let contador = 1
 
const esferas = prompt(chalk.bgGreen.black ('Vamos atrás das Esferas  ? ').toLocaleLowerCase());

 if ( esferas == 'sim') {
    console.log(chalk.bgGreen.black (`Vamos nesta fantatisca aventura ${nome} Vamos de nuvem voardora nesse desafio! ...`));
    contador++    

 }else{
     console.clear()
    console.log (chalk.bgRedBright.black ('Você é o só verme inutil ' ));
 }

     const nuvem = prompt(chalk.bgGreen.black (`Você pegou sua Nuvem Voardora ? `).toLocaleLowerCase());

 if (nuvem == 'sim') {
   console.log(chalk.bgGreen.black ('Estamos atras da esferas, acho que achamos '));
   contador++ 
      
}else{
    console.clear()
   console.log(chalk.bgRedBright.black(`${nome} está dando mole, chame a nuvem Voadora. `));
}


const nome2 = 'BULMA'
console.log(chalk.bgGreen.black (`Parabéns Saiyajin ${nome}, conseguimos achar as esferas,`));
const achouEsferas = prompt (chalk.bgGreen.black (`${nome2} quis te da um Beijo em troca das esferas,  você resistiu ? ?`).toLocaleLowerCase());

if (achouEsferas == 'sim') {
       console.log(chalk.bgGreen.black (`Parabéns Saiyajin ${nome} você não é fura olho, Vegeta esta orgulhoso de você !` ));
    contador++    
 } else{
    console.clear()
console.log(chalk.bgRedBright.black('Vegeta vai te bater seu fura olho'));
 }
 
 const ressuscitar = prompt (chalk.bgGreen.black (` Shenlong apareceu, você deseja ressuscitar ?` ).toLocaleLowerCase());

 if (ressuscitar== 'sim') {
    console.log(chalk.bgGreen.black (`Parabéns !!! ${nome} você foi ressuscitado  !` ));
 contador++    
} else{
    console.clear()
console.log(chalk.bgRedBright.black('Você desistiu do seu desejo Shenlong foi embora '));

 console.log(chalk.bgRedBright.black (`Sei que fizemos a escolha certa  ${nome2} `));
}

 const sistema = prompt (chalk.bgGreen.black ('Agora que você ressuscitou, vamos treinar para se tornar o mais forte do Universo  ? ').toLocaleLowerCase());
 if (sistema == 'sim') {
    console.log(chalk.bgGreen.black (`Parabéns ${nome} você é um verdadeiro Saiyajin!` ));
 contador++    
} else{
    console.clear()
console.log(chalk.bgRedBright.black(' Infelizmente como VEGETA diz vc é apenas um fraco um inseto'));
}


if (contador==0){
    console.log('Você acha que aqui ninguém sabe que você so quer saber de comer !')
} else if (contador == 1 || contador == 2 ) {
    console.log(`Ainda te falta muito treinamento. `);
} else if (contador == 3) {
    console.log(`Missão dada é missão cumprida, mas ainda te falta disciplina. `);
} else if (contador == 4 ) {
    console.log(`Voce chegou muito perto da missão, ainda te falta pouco para deixar de ser apenas verme. `)
} else {
    console.log(chalk.bgBlue.black(`PARABÉNS ${nome} você  é um verdadeiro Saiyajin `));
}