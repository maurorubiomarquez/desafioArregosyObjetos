// Datos de las propiedades en alquiler (debe ser el mismo arreglo que en index.js)
const propiedadesAlquiler = [
    { nombre: 'Apartamento 1', src: './assert/img/arr1.jpg', descripcion: 'Céntrico', habitaciones: 2, costo: 400000, smoke: false, pets: true },
    { nombre: 'Apartamento 2', src: './assert/img/arr2.jpg', descripcion: 'Moderno', habitaciones: 3, costo: 800000, smoke: true, pets: false },
    { nombre: 'Apartamento 3', src: './assert/img/arr3.jpg', descripcion: 'Espacioso', habitaciones: 4, costo: 1200000, smoke: true, pets: true }
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

// Llamada a la función para renderizar todas las propiedades en alquiler
renderizarPropiedades('alquiler-container', propiedadesAlquiler);
