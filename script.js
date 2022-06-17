function exibeMensagem (msg){
    console.log(msg)
}

exibeMensagem("Hello World!")

function nomeCompleto (nome){
    console.log(nome)
}

nomeCompleto("David Henrique da S. Araujo")

function sobreVoce (nome,idade,gostoMusical) {
    console.log("Olá "+nome+", você tem "+idade+" e curte muito ouvir "+gostoMusical+"!")
}

sobreVoce("David", 28, "Rock")

function seuGosto(filme,musica){
    console.log("Seu filme favorito é "+filme+" junto da música "+musica+"!")
}

seuGosto("V de Vingança","Everybody Wants To Rule The World")

function triplicaNumero(numero){
    return console.log(numero*3)
}

triplicaNumero(7)