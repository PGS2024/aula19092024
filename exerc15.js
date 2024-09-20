let array = ["iniciar", "processar", "parar", "quarto", "quinto"];
let i = 0;

do {
    console.log(array[i]);
    i++;
} while (i < array.length && array[i - 1] !== "parar");