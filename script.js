        
        var resposta = "";
        var dicas = 3;
        var dicausada = 0;
        var pronto = 0;
        var escolheu = 0;

        var JustificativaA = ""
        var JustificativaB = ""
        var JustificativaC = ""
        var JustificativaD = ""

        var respostaCerta = ""

        var dicapergunta = ""


function pergunta1(){

    var TextoPergunta = document.getElementById('TextoPergunta');
    var TextoCartaoA = document.getElementById('TextoCartaoA');
    var TextoCartaoB = document.getElementById('TextoCartaoB')
    var TextoCartaoC = document.getElementById('TextoCartaoC')
    var TextoCartaoD = document.getElementById('TextoCartaoD')


    TextoPergunta.textContent = "1. A sociedade feudal era uma sociedade hierarquica. Como se dava essa organização social no feudalismo?";

    TextoCartaoA.textContent = "Se compõe no final do século XV o feudalismo, esse era dividida em 3 classes sociais: O clero composta por membros da igreja católica, sendo a classe social com mais poder da época, a nobreza composta pelos senhores feudais, os cavaleiros e os barões, e o servos, classe mais baixa composta pelos camponeses que trabalhavam na terra dos senhores feudais.";
    TextoCartaoB.textContent = "Se compõe no final do século V o feudalismo, esse era dividida em 3 classes sociais: O clero composta por membros da igreja católica, sendo a classe social com mais poder da época, a nobreza composta pelos senhores feudais, os cavaleiros e os barões, e o servos, classe mais baixa composta pelos camponeses que trabalhavam na terra dos senhores feudais.";
    TextoCartaoC.textContent = "Se compõe no final do século XX o feudalismo, esse era dividida em 3 estados civis: O solteiro tendo como principais membros a igreja católica, os viuvos composta pelos senhores idosos e os casados que compunham a classe mais baixa.";
    TextoCartaoD.textContent = "Se compõe no final do século XV o feudalismo, esse era dividida em 3 classes sociais: O clero composto pelos senhores feudais, sendo a classe social com mais poder da época, a nobreza composta principalmente por membros da igreja católica, e os bárbaros, classe mais baixa composta pelos camponeses que trabalhavam na terra dos senhores feudais.";

    respostaCerta = "B"

        if (resposta == respostaCerta){
            CartaoB.src = 'Imagens/spritesheet_cartões/CartaoBcerto.png'
        }

    JustificativaA = "O feudalismo começou muito antes que no século XV(Quinze)";
    JustificativaB = "Está correto!";
    JustificativaC = "O feudalismo começou muito antes que no século XX(Vinte), e a hierarquia não era dividida por estados civis.";
    JustificativaD = "O feudalismo começou muito antes que no século XV(Quinze), e houve uma troca de papéis entre o clero e a nobreza, além de que os bárbaros não faziam parte desse sistema.";

    dicapergunta = "O feudalismo começou cedo"

}


function pergunta2(){

    var TextoPergunta = document.getElementById('TextoPergunta');
    var TextoCartaoA = document.getElementById('TextoCartaoA');
    var TextoCartaoB = document.getElementById('TextoCartaoB')
    var TextoCartaoC = document.getElementById('TextoCartaoC')
    var TextoCartaoD = document.getElementById('TextoCartaoD')


    TextoPergunta.textContent = "2. O rei Henrique VIII rompeu com a igreja católica. Por que esse rompimento ocorreu?";

    TextoCartaoA.textContent = "O rei Henrique VIII queria se divorciar de sua mulher, Catarina de Aragão, com quem não tinha filhos homens.";
    TextoCartaoB.textContent = "O rei Henrique VIII queria se divorciar de sua mulher, Maria de Médici, com quem não tinha filhos homens.";
    TextoCartaoC.textContent = "O rei Henrique VIII queria se casar com o papa Júlio III, com sua recusa rompeu com o papa e o catolicismo.";
    TextoCartaoD.textContent = "O rei Henrique VII queria se casar com sua pretendente, Catarina, com quem pretendia ter filhos homens.";

    respostaCerta = "A"

    JustificativaA = "Está correto!";
    JustificativaB = "Maria de Médici foi esposa do rei Henrique IV";
    JustificativaC = "O rei Henrique VIII não queria se casar com papa Júlio III.";
    JustificativaD = "Além do rei ser Henrique VII, o erro está no casamento, já que o motivo principal do rompimento foi a vontade de se divorciar.";

    dicapergunta = "Ele não tinha herdeiros"

}

function pergunta3(){

    var TextoPergunta = document.getElementById('TextoPergunta');
    var TextoCartaoA = document.getElementById('TextoCartaoA');
    var TextoCartaoB = document.getElementById('TextoCartaoB')
    var TextoCartaoC = document.getElementById('TextoCartaoC')
    var TextoCartaoD = document.getElementById('TextoCartaoD')


    TextoPergunta.textContent = "3. Jhon Locke dizia que todos homens ao nascer, tinham direitos naturais. Que direitos são esses?";

    TextoCartaoA.textContent = "Direito a morte, a restrição e à invasão.";
    TextoCartaoB.textContent = "Direito a vida, liberdade e ao matrimônio.";
    TextoCartaoC.textContent = "Direito a vida, propriedade e ao patrimônio.";
    TextoCartaoD.textContent = "Direito a vida, liberdade e à propriedade.";

    respostaCerta = "D"

    JustificativaA = "É básicamente o oposto do qué originalmente dito.";
    JustificativaB = "O erro está em 'matrimônio'";
    JustificativaC = "Falta Liberdade";
    JustificativaD = "Está correto!";

    dicapergunta = "Ele queria libertar a burguesia do absolutismo, que colocava todo o poder nas mão do rei"

}

function pergunta4(){

    var TextoPergunta = document.getElementById('TextoPergunta');
    var TextoCartaoA = document.getElementById('TextoCartaoA');
    var TextoCartaoB = document.getElementById('TextoCartaoB')
    var TextoCartaoC = document.getElementById('TextoCartaoC')
    var TextoCartaoD = document.getElementById('TextoCartaoD')


    TextoPergunta.textContent = "4. Das seguintes afirmações assinale a que está INCORRETA em relação ao iluminismo.";

    TextoCartaoA.textContent = "O Iluminismo foi um movimento intelectual que se desenvolveu principalmente no século XVIII.";
    TextoCartaoB.textContent = "O Iluminismo foi um movimento intelectual que promoveu a valorização da razão, da ciência e do progresso.";
    TextoCartaoC.textContent = "O Iluminismo foi um movimento intelectual que promoveu a valorização da religião e da crença.";
    TextoCartaoD.textContent = "O Iluminismo foi um movimento intelectual que promoveu o liberalismo político ";

    respostaCerta = "C"

    JustificativaA = "Está correta, mas nessa questão em especifico não é o que você busca."
    JustificativaB = "Está correta, mas nessa questão em especifico não é o que você busca.";
    JustificativaC = "O iluminismo defendia a importância da razão e a ciência.";
    JustificativaD = "Está correta, mas nessa questão em especifico não é o que você busca.";

    dicapergunta = "O Iluminismo foi um movimento antropocêntrico"

}

function pergunta5(){

    var TextoPergunta = document.getElementById('TextoPergunta');
    var TextoCartaoA = document.getElementById('TextoCartaoA');
    var TextoCartaoB = document.getElementById('TextoCartaoB')
    var TextoCartaoC = document.getElementById('TextoCartaoC')
    var TextoCartaoD = document.getElementById('TextoCartaoD')


    TextoPergunta.textContent = "5. Sobre o Despotismo Esclarecido é correto afirmar que:";

    TextoCartaoA.textContent = "Com  o objetivo de levantar a moral do seu povo para irem para 1° Guerra Mundial implementaram múltiplas reformas. ";
    TextoCartaoB.textContent = "Os monarcas déspotas esclarecidos acreditavam que o poder exercido a eles deveria ser usado para implementar reformas a fim de chegar em um estado de bem-estar social";
    TextoCartaoC.textContent = "Abordavam elementos do absolutismo monárquico com ideias iluministas de racionalização e reforma em pleno século XX.";
    TextoCartaoD.textContent = "O Despotismo Esclarecido, também conhecido como Absolutismo Esclarecido, foi uma forma de governo adotada por alguns monarcas europeias durante o século XVIII.";

    respostaCerta = "D"

    JustificativaA = "O Despotismo Esclaricido aconteceu antes que a 1ª Guerra Mundial.";
    JustificativaB = "Esse não era o real objetivo desses monarcas";
    JustificativaC = "O que descarta essa resposta é a data incorreta";
    JustificativaD = "Está Correto!";

    dicapergunta = "Ele queria manter o poder nas mãos dos reis absolutistas, apenas adicionando ideais iluministas para suprimir possíveis revoltas."

}

function pergunta6(){

    var TextoPergunta = document.getElementById('TextoPergunta');
    var TextoCartaoA = document.getElementById('TextoCartaoA');
    var TextoCartaoB = document.getElementById('TextoCartaoB')
    var TextoCartaoC = document.getElementById('TextoCartaoC')
    var TextoCartaoD = document.getElementById('TextoCartaoD')


    TextoPergunta.textContent = "6. Assinale a alternativa que aborda corretamente a diferença entre colonialismo de povoamento e de exploração.";

    TextoCartaoA.textContent = "O colonialismo de povoamento enfatiza a ocupação e o desenvolvimento da colônia com população permanente, enquanto o colonialismo de exploração concentra-se em extrair sistematicamente mais valor dos trabalhadores daquilo que lhes é dado com uma presença de colonos temporários.";
    TextoCartaoB.textContent = "O colonialismo de povoamento enfatiza a ocupação e o desenvolvimento da colônia com população permanente, enquanto o colonialismo de exploração concentra-se na extração de recursos econômicos com uma presença de colonos temporários.";
    TextoCartaoC.textContent = "A colônia do povoamento concentra-se em ocupar espaços no mercado de perfumes, enquanto a colônia de exploração cultiva e explora diversas flores e plantas como objetivo de confeccionar perfumes.";
    TextoCartaoD.textContent = "O colonialismo de exploração enfatiza a ocupação e o desenvolvimento da colônia com população temporaria, enquanto o colonialismo de povoamento em extrair sistematicamente mais valor dos trabalhadores daquilo que lhes é dado com uma presença de colonos temporários.";

    respostaCerta = "B"

    JustificativaA = "A colonização de exploração servia para principalmente extrair recursos naturais das colonias.";
    JustificativaB = "Está correta!";
    JustificativaC = "As colonizações de povoamento e exploração não tem ligação com o mercado de perfumes.";
    JustificativaD = "A colonização de povoamento enfatizava a ocupação permanente de uma terra a fim de povoa-la enquanto a colonização de exploração servia para principalmente extrair recursos naturais das colonias.";

    dicapergunta = "Os nomes dos tipos de colonização são auto-descritivos"

}

function pergunta7(){

    var TextoPergunta = document.getElementById('TextoPergunta');
    var TextoCartaoA = document.getElementById('TextoCartaoA');
    var TextoCartaoB = document.getElementById('TextoCartaoB')
    var TextoCartaoC = document.getElementById('TextoCartaoC')
    var TextoCartaoD = document.getElementById('TextoCartaoD')


    TextoPergunta.textContent = "7. Uma das propostas para divisão de poderes em um Estado é a divisão entre executivo, legislativo e federativo. Assinale a alternativa que traz o autor dessa divisão.";

    TextoCartaoA.textContent = "Adam Smith";
    TextoCartaoB.textContent = "John Locke";
    TextoCartaoC.textContent = "Montesquieu";
    TextoCartaoD.textContent = "Pabllo Vittar";

    respostaCerta = "B"

    JustificativaA = "Adam Smith é considerado o pai do Capitalismo e não tem envolvimento com a divisão de poderes.";
    JustificativaB = "Está correto!";
    JustificativaC = "Montesquieu tem envolvimento com a divisão de poderes, mas acreditava que o Estado deveria ser dividido em executivo, legislativo e judiciário. ";
    JustificativaD = "Pabllo Vittar é um cantor Brasileiro que não tem envolvimento com a divisão de poderes.";

    dicapergunta = "Lembre-se de federativo"
}

function pergunta8(){

    var TextoPergunta = document.getElementById('TextoPergunta');
    var TextoCartaoA = document.getElementById('TextoCartaoA');
    var TextoCartaoB = document.getElementById('TextoCartaoB')
    var TextoCartaoC = document.getElementById('TextoCartaoC')
    var TextoCartaoD = document.getElementById('TextoCartaoD')


    TextoPergunta.textContent = "8. No Iluminismo o liberalismo era considerado a luz, já o absolutismo as trevas. Por que ocorria um juízo de valor desta forma?";

    TextoCartaoA.textContent = "Pois o Liberalismo valorizaria a liberdade individual, a limitação do poder do Estado e a participação democrática, enquanto o Absolutismo centraliza o poder nas mãos da monarca, sem restrições ou consulta popular.";
    TextoCartaoB.textContent = "Pois o Liberalismo valorizaria a restrição individual, a participação do poder do Estado e a limitação democrática, enquanto o Absolutismo centraliza o poder nas mãos da monarca, sem restrições ou consulta popular.";
    TextoCartaoC.textContent = "Pois o Absolutismo valorizaria a liberdade individual, a limitação do poder do Estado e a participação democrática, enquanto o Liberalismo centraliza o poder nas mãos da monarca, muitas vezes sem restrições ou consulta popular";
    TextoCartaoD.textContent = "Pois o Liberalismo não valorizaria a liberdade individual, a limitação do poder do Estado e a participação democrática, enquanto o Absolutismo descentraliza o poder nas mãos da monarca, sem restrições ou consulta popular";
    
    respostaCerta = "A"

    JustificativaA = "Está correta!";
    JustificativaB = "O liberalismo valorizaria a liberdade.";
    JustificativaC = "Os conceitos de Absolutismo e Liberalismo estão trocados.";
    JustificativaD = "O problema está no 'não'.";

    dicapergunta = "No Absolutismo, o rei detinha todo o poder, então iluministas tinham ideais para descentralizar o poder."

}