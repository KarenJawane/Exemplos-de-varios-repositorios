function A(){
    console.log("A - Voce chamou o procedimento A?")

}

function B(){
    console.log("B - procedimento B presente, chamou?")
    C();
}

function C(){
    console.log("C - oi soi o procedimento C, o B me chamou aqui")

}
function D(){
    console.log("D - sou o procedimento D e chamo todo mundo veja:")
    A();
    B();
    
}

A();
B();
D();