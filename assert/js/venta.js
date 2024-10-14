// Datos de las propiedades en venta (debe ser el mismo arreglo que en index.js)
const propiedadesVenta = [
    { nombre: 'Casa 1', src: './assert/img/casa1.jpg', descripcion: 'Hermosa casa', habitaciones: 3, costo: 1200000, smoke: false, pets: true },
    { nombre: 'Casa 2', src: './assert/img/casa2.jpg', descripcion: 'Moderna casa', habitaciones: 4, costo: 1509000, smoke: true, pets: false },
    { nombre: 'Casa 3', src: './assert/img/casa3.jpg', descripcion: 'Casa campestre', habitaciones: 5, costo: 2050000, smoke: true, pets: true }
];

// Función para renderizar propiedades
function renderizarPropiedades(contenedorId, propiedades) {
    const contenedor = document.getElementById(contenedorId);
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
}

// Llamada a la función para renderizar todas las propiedades en venta
renderizarPropiedades('venta-container', propiedadesVenta);
