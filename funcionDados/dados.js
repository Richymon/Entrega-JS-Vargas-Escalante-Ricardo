//Aviso al ususario
function aviso() {
    console.log(`Se mostro el aviso inicial. Para abrir la funcion escribe "elegirDado()"`);
    alert(`Para poder ver el historial de sus tiradas y sus movimientos, debes usar la consola apretando F12 y dando clic donde dice consola. Si cierra la funcion de los dados puede volver a abrirla escribiendo en la consola "eligirDado()" sin las comillas y respetando las mayusculas.`);
}

//funcion del dado
function tirarDado(numCaras) {
    return Math.floor(Math.random() * numCaras) + 1;
}

//dados validos
const dadosValidos = [4, 6, 8, 10, 12, 20];

//cuantos tipos de dados quiere tirar
function elegirDado() {
    let numTipos
    do {
        console.log("¿Cuantos tipos de dados quiere tirar? Hay 6 tipos de dados diferentes. Tenemos dados con 🎲4, 🎲6, 🎲8, 🎲10, 🎲12 y 🎲20 caras.");
        numTipos = prompt("¿Cuantos tipos de dados quiere tirar? Hay 6 tipos de dados diferentes. Tenemos dados con 🎲4, 🎲6, 🎲8, 🎲10, 🎲12 y 🎲20 caras.");
        if (numTipos === null) {
            console.log(`❌ Cancelaste la tirada de dados. Para activarla de nuevo escribe en la consola "elegirDado()"`);
            alert(`❌ Cancelaste la tirada de dados. Para activarla de nuevo escribe en la consola "elegirDado()"`);
            return;
        }

        numTipos = parseInt(numTipos); //comvierte el string en number

        if (isNaN(numTipos) || numTipos < 1 || numTipos > 6) {
            console.log("❌ Valor inválido. Solo se aceptan números del 1 al 6.");
            alert("❌ Valor inválido. Solo se aceptan números del 1 al 6.");
        }
    }
    while (isNaN(numTipos) || numTipos < 1 || numTipos > 6);

    //Guia en la consola
    console.log(`Quieres tirar ${numTipos} tipos de dados 🎲`);

    //variables de interaccion
    let resultados = [];
    let suma = 0;
    let resumen = [];

    //preguntar al usuario que dado tirar
    for (let iNumTipos = 0; iNumTipos < numTipos; iNumTipos++) {
        let caras, cantidad;

        do {
            console.log("Elige el dado que quieras tirar. 🎲4, 🎲6, 🎲8, 🎲10, 🎲12, 🎲20.");
            caras = prompt("Elige el dado que quieras tirar. 🎲4, 🎲6, 🎲8, 🎲10, 🎲12, 🎲20.");
            //cancelar tirada de dados
            if (caras === null) {
                console.log(`❌ Cancelaste la tirada de dados. Para activarla de nuevo escribe en la consola "elegirDado()"`);
                alert(`❌ Cancelaste la tirada de dados. Para activarla de nuevo escribe en la consola "elegirDado()"`);
                return;
            }

            caras = parseInt(caras); //comvierte string a number

            //si el usuario escribe un numero que no esta en el array
            if (!dadosValidos.includes(caras)) {
                console.log("❌ Dado no válido. Solo se puede usar los siguientes valores: 4, 6, 8, 10, 12, 20.");
                alert("❌ Dado no válido. Solo se puede usar los siguientes valores: 4, 6, 8, 10, 12, 20.");
            }
        }
        while (!dadosValidos.includes(caras));

        //Guia en la consola
        console.log(`Deseas tirar un dado de ${caras} caras. 🎲`);

        //cuantos dados vas a tirar
        let numDados;

        do {
            console.log(`¿Cuantos dados d${caras} quieres tirar?`);
            numDados = prompt(`¿Cuantos dados d${caras} quieres tirar?`);

            if (numDados === null) {
                console.log(`❌ Cancelaste la tirada de dados. Para activarla de nuevo escribe en la consola "elegirDado()"`);
                alert(`❌ Cancelaste la tirada de dados. Para activarla de nuevo escribe en la consola "elegirDado()"`);
                return;
            }

            numDados = parseInt(numDados); //cambiar de string a number

            if (isNaN(numDados) || numDados < 1) {
                console.log("❌ Cantidad inválida. Debe ser un número mayor a 0.");
                alert("❌ Cantidad inválida. Debe ser un número mayor a 0.");
            }
        }
        while (isNaN(numDados) || numDados < 1);

        //Guia en la consola
        console.log(`Deseas tirar ${numDados}d${caras} 🎲`);

        //Resultado de la tirada del dado
        let tiradas = [];
        for (let iNumDados = 0; iNumDados < numDados; iNumDados++) {
            const conclusion = tirarDado(caras);
            tiradas.push(conclusion);
            suma += conclusion;
        }
        resultados.push(`Tiraste 🎲 ${numDados}d${caras}, Salio: ${tiradas.join(" - ")}`);
        resumen.push(...tiradas);
        console.log(`Tiraste 🎲 ${numDados}d${caras}, Salio: ${tiradas.join(" - ")}`);
    }
    //mostrar el resultado final
    console.log(`Resumen de la Tirada 📜\n${resultados.join("\n")}\n -Suma total: ${suma}`);
    alert(`${resultados.join("\n")}\n Suma total: ${suma}`);

    //Quieres tirar de nuevo los dados?
    console.log("Quieres tirar de nuevo los dados? 🎲")
    if (confirm("Quieres tirar de nuevo los dados? 🎲")) {
        console.log(`Has decidido hacer otra tirada.`);
        elegirDado();
    } else {
        console.log(`❌ Cancelaste la tirada de dados. Para activarla de nuevo escribe en la consola "elegirDado()"`);
        alert(`❌ Cancelaste la tirada de dados. Para activarla de nuevo escribe en la consola "elegirDado()"`);
    }
}

//LLamar al cargar windows
window.onload = function () {
    aviso();
    elegirDado();
};