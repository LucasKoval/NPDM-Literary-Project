// Obtén la fecha y hora actual
const currentDate = new Date();

// Define las fechas y horas relevantes para tus bloques de contenido
const fechaHoraBloque1 = new Date('2024-04-10T10:00:00'); // Ejemplo: 10 de abril de 2024 a las 10:00 AM
const fechaHoraBloque2 = new Date('2024-04-15T15:30:00'); // Ejemplo: 15 de abril de 2024 a las 3:30 PM

// Decide qué bloque de contenido mostrar
let bloqueAMostrar = '';

if (currentDate < fechaHoraBloque1) {
   bloqueAMostrar = 'bloque1';
} else if (currentDate < fechaHoraBloque2) {
   bloqueAMostrar = 'bloque2';
} else {
   bloqueAMostrar = 'bloque3';
}

// Renderiza el contenido correspondiente en tu HTML
// (puedes usar condicionales o componentes de Next.js)
