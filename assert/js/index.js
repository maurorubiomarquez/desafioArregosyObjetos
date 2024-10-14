// Datos de las propiedades en venta
const propiedadesVenta = [
    { nombre: 'Casa 1', src: 'assert/img/casa1.jpg', descripcion: 'Hermosa casa', habitaciones: 3, costo: 1200000, smoke: false, pets: true },
    { nombre: 'Casa 2', src: 'assert/img/casa2.jpg', descripcion: 'Moderna casa', habitaciones: 4, costo: 1500000, smoke: true, pets: false },
    { nombre: 'Casa 3', src: 'assert/img/casa3.jpg', descripcion: 'Casa campestre', habitaciones: 5, costo: 2000000, smoke: true, pets: true }
];

// Datos de las propiedades en alquiler
const propiedadesAlquiler = [
    { nombre: 'Apartamento 1', src: 'assert/img/arr1.jpg', descripcion: 'Céntrico', habitaciones: 2, costo: 600000, smoke: false, pets: true },
    { nombre: 'Apartamento 2', src: 'assert/img/arr2.jpg', descripcion: 'Moderno', habitaciones: 3, costo: 550000, smoke: true, pets: false },
    { nombre: 'Apartamento 3', src: 'assert/img/arr3.jpg', descripcion: 'Espacioso', habitaciones: 4, costo: 750000, smoke: true, pets: true }
];

// Función para renderizar las propiedades en el contenedor adecuado
function renderizarPropiedades(contenedorId, propiedades) {
    const contenedor = document.getElementById(contenedorId);
    if (contenedor) { // Asegurarnos de que el contenedor existe
        propiedades.forEach(propiedad => {
            contenedor.innerHTML += `
                <div class="propiedad">
                    <img src="${propiedad.src}" alt="${propiedad.nombre}">
                    <h3>${propiedad.nombre}</h3>
                    <p>${propiedad.descripcion}</p>
                    <p>Habitaciones: ${propiedad.habitaciones}</p>
                    <p>Costo: $${propiedad.costo}</p>
                    <p>Fumar: ${propiedad.smoke ? 'Permitido' : 'Prohibido'}</p>
                    <p>Mascotas: ${propiedad.pets ? 'Permitidas' : 'Prohibidas'}</p>
                </div>
            `;
        });
    } else {
        console.error(`No se encontró el contenedor con id ${contenedorId}`);
    }
}

// Renderizar 3 propiedades en venta y 3 en alquiler
renderizarPropiedades('venta-container', propiedadesVenta.slice(0, 3));
renderizarPropiedades('alquiler-container', propiedadesAlquiler.slice(0, 3));
