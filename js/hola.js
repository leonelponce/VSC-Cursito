// Función para sumar dos números
function sumar(a, b) {
    return a + b; // Error intencional: debería ser a + b
}

// Función de prueba
function pruebaSumar() {
    try {
        const num1 = 5;
        const num2 = 3;
        console.log('Número 1:', num1);
        console.log('Número 2:', num2);
        const resultado = sumar(num1, num2);
        console.log('La suma de los números es:', resultado);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Llamada a la función de prueba
pruebaSumar();

