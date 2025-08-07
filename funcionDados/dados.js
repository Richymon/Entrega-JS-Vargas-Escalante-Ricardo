//Aviso al usuario
function aviso() {
    console.log(`Se mostró el aviso inicial. Para abrir la función escribe "elegirDado()"`);
    alert(`Para poder ver el historial de sus tiradas y movimientos, debe usar la consola (F12) y dar clic en "Consola". Si cierra la función de los dados, puede volver a abrirla escribiendo en la consola "elegirDado()" (sin comillas y respetando mayúsculas).`);
}

//función del dado
function tirarDado(numCaras) {
    return Math.floor(Math.random() * numCaras) + 1;
}

//dados válidos
const dadosValidos = [4, 6, 8, 10, 12, 20];

//cuántos tipos de dados quiere tirar
function elegirDado() {
    let numTipos
    do {
        console.log("¿Cuántos tipos de dados quiere tirar? Hay 6 tipos diferentes: 🎲4, 🎲6, 🎲8, 🎲10, 🎲12 y 🎲20 caras.");
        numTipos = prompt("¿Cuántos tipos de dados quiere tirar? Hay 6 tipos diferentes: 🎲4, 🎲6, 🎲8, 🎲10, 🎲12 y 🎲20 caras.");
        if (numTipos === null) {
            console.log(`❌ Canceló la tirada de dados. Para activarla de nuevo escriba en la consola "elegirDado()"`);
            alert(`❌ Canceló la tirada de dados. Para activarla de nuevo escriba en la consola "elegirDado()"`);
            return;
        }

        numTipos = parseInt(numTipos); //convierte el string en number

        if (isNaN(numTipos) || numTipos < 1 || numTipos > 6) {
            console.log("❌ Valor inválido. Solo se aceptan números del 1 al 6.");
            alert("❌ Valor inválido. Solo se aceptan números del 1 al 6.");
        }
    }
    while (isNaN(numTipos) || numTipos < 1 || numTipos > 6);

    //Guía en la consola
    console.log(`Quiere tirar ${numTipos} tipos de dados 🎲`);

    //variables de interaccion
    let resultados = [];
    let suma = 0;
    let resumen = [];

    //preguntar al usuario que dado tirar
    for (let iNumTipos = 0; iNumTipos < numTipos; iNumTipos++) {
        let caras, cantidad;

        do {
            console.log("Elige el dado que quiera tirar. 🎲4, 🎲6, 🎲8, 🎲10, 🎲12, 🎲20.");
            caras = prompt("Elige el dado que quiera tirar. 🎲4, 🎲6, 🎲8, 🎲10, 🎲12, 🎲20.");
            //cancelar tirada de dados
            if (caras === null) {
                console.log(`❌ Canceló la tirada de dados. Para activarla de nuevo escriba en la consola "elegirDado()"`);
                alert(`❌ Canceló la tirada de dados. Para activarla de nuevo escriba en la consola "elegirDado()"`);
                return;
            }

            caras = parseInt(caras); //convierte string a number

            //si el usuario escribe un número que no esta en el array
            if (!dadosValidos.includes(caras)) {
                console.log("❌ Dado no válido. Solo se pueden usar los siguientes valores: 4, 6, 8, 10, 12, 20.");
                alert("❌ Dado no válido. Solo se pueden usar los siguientes valores: 4, 6, 8, 10, 12, 20.");
            }
        }
        while (!dadosValidos.includes(caras));

        //Guía en la consola
        console.log(`Desea tirar un dado de ${caras} caras. 🎲`);

        //cuántos dados vas a tirar
        let numDados;

        do {
            console.log(`¿Cuántos dados d${caras} quiere tirar?`);
            numDados = prompt(`¿Cuántos dados d${caras} quiere tirar?`);

            if (numDados === null) {
                console.log(`❌ Canceló la tirada de dados. Para activarla de nuevo escriba en la consola "elegirDado()"`);
                alert(`❌ Canceló la tirada de dados. Para activarla de nuevo escriba en la consola "elegirDado()"`);
                return;
            }

            numDados = parseInt(numDados); //convierte de string a number

            if (isNaN(numDados) || numDados < 1) {
                console.log("❌ Cantidad inválida. Debe ser un número mayor a 0.");
                alert("❌ Cantidad inválida. Debe ser un número mayor a 0.");
            }
        }
        while (isNaN(numDados) || numDados < 1);

        //Guía en la consola
        console.log(`Desea tirar ${numDados}d${caras} 🎲`);

        //Resultado de la tirada del dado
        let tiradas = [];
        for (let iNumDados = 0; iNumDados < numDados; iNumDados++) {
            const conclusion = tirarDado(caras);
            tiradas.push(conclusion);
            suma += conclusion;
        }
        resultados.push(`Tiró 🎲 ${numDados}d${caras}, Salió: ${tiradas.join(" - ")}`);
        resumen.push(...tiradas);
        console.log(`Tiró 🎲 ${numDados}d${caras}, Salió: ${tiradas.join(" - ")}`);
    }
    //mostrar el resultado final
    console.log(`Resumen de la Tirada 📜\n${resultados.join("\n")}\n -Suma total: ${suma}`);
    alert(`${resultados.join("\n")}\n Suma total: ${suma}`);

    //Quiere tirar de nuevo los dados?
    console.log("Quiere tirar de nuevo los dados? 🎲")
    if (confirm("Quiere tirar de nuevo los dados? 🎲")) {
        console.log(`Ha decidido hacer otra tirada.`);
        elegirDado();
    } else {
        console.log(`❌ Canceló la tirada de dados. Para activarla de nuevo escriba en la consola "elegirDado()"`);
        alert(`❌ Canceló la tirada de dados. Para activarla de nuevo escriba en la consola "elegirDado()"`);
    }
}

//LLamar al cargar la página
window.onload = function () {
    aviso();
    elegirDado();
};