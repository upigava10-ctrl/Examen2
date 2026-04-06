import axios from 'axios'

const URL ='https://restcountries.com/v3.1/all?fields=name,capital,currencies'

export const getCountries = async ()=>{
    const url=`${URL}`;

    try{
    const response = await axios.get(url);

    const data ={
        mensaje:"Petición exitosa",
        data: response.data
    }

    console.log(data);
    // console.log(Array.isArray(response.data))
    console.log(response.data.length)
    return response.data
    }
    catch(error){
        const data ={
        mensaje:"Hubo error",
        data: error
    }
     console.log(data)
     
    }
}
export const pageCountries = (paises, pagina, paisesPorPagina = 12) => {
  const inicio = (pagina - 1) * paisesPorPagina
  const fin = inicio + paisesPorPagina
  return paises.slice(inicio, fin)
}

export const totalPages = (paises, paisesPorPagina = 12) => {
  return Math.ceil(paises.length / paisesPorPagina)
}