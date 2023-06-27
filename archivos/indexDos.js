const fs = require('fs/promises');
const axios = require('axios');

const obtenerYGuardarDatos = async (url, archivo) => {
  try {
    const { data } = await axios.get(url);
    await fs.writeFile(archivo, JSON.stringify(data));
    console.log(`Datos guardados en ${archivo}`);
    return data;
  } catch (error) {
    console.error(`Error al obtener los datos de ${url}:`, error.message);
    return null;
  }
};

const leerDatosUsers = async () => {
  const url = 'https://random-data-api.com/api/v2/users?size=2&is_xml=true';
  const archivo = 'archivos/datosUsers.json';
  const data = await obtenerYGuardarDatos(url, archivo);
  console.log(data);
};

const leerAddress = async () => {
  const url = 'https://random-data-api.com/api/v2/addresses';
  const archivo = 'archivos/datosAddress.json';
  const data = await obtenerYGuardarDatos(url, archivo);
  console.log(data);
};

const leerBeers = async () => {
  const url = 'https://random-data-api.com/api/v2/beers';
  const archivo = 'archivos/datosBeers.json';
  const data = await obtenerYGuardarDatos(url, archivo);
  console.log(data);
};

(async () => {
  await leerDatosUsers();
  await leerAddress();
  await leerBeers();
})();