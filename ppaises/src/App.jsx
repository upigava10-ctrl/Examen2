import { useState, useEffect } from 'react'
import './App.css';
import Card from './components/Cards/Card.jsx';
import { getCountries, pageCountries, totalPages } from './services/CountriesApiService';

function App() {
  const [paises, setPaises] = useState([]);
  const [pagina, setPagina]= useState(1);


  useEffect(() => {
    const cargarPaises = async () => {
      try {
        const resultado = await getCountries();
        alert('Cargando datos')
        setPaises(resultado);}
      catch(error){
        const data ={
        mensaje:"Hubo error al cargar los paises",
        data: error
        }
        console.log(data)
        alert(data.mensaje)
        }
  };
  
  cargarPaises();
}, []);
  
  let paisesPagina=pageCountries(paises,pagina);

  return (
    <section className='seccionPrincipal'>
      <div className='Botones'>
        <button className='btn' onClick={getCountries}>Paises</button>
        <button className='btn' onClick={() => {setPagina(pagina - 1)}} disabled={pagina===1} >Anterior</button>
        <button className='btn' onClick={() => {setPagina(pagina + 1)}}
          disabled ={pagina>totalPages(paises)}>Siguiente</button> 
      </div>

      <div className='Tarjetas'>
        {paisesPagina.map((pais,index)=>{
          return <Card  key={index} country={pais}/>
            }
          )
        }
      </div>
    </section>
    
    
  )
}

export default App
