
const fs = require('fs/promises');
const axios = require('axios');

const numeroAzar = (numeroMaximo) => Math.floor(Math.random() * numeroMaximo - 1);

const obtenerPokemon  = async () => {
    const datos = await fs.readFile('archivos/datosPokeapi.txt');
    const arrayDatos = JSON.parse(datos);

    const numeroArray = Math.abs(numeroAzar(arrayDatos.length));

    const valorBusqueda = arrayDatos[numeroArray];

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${valorBusqueda}`);

    console.log(data);
}

obtenerPokemon();