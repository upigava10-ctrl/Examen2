import { useState, useEffect } from 'react'
import './App.css';
import Card from './components/Cards/Card.jsx';
import { getCountries, pageCountries, totalPages } from './services/CountriesApiService';

function App() {
  const [status, setStatus] = useState(false);
  const [paises, setPaises] = useState([]);
  const [pagina, setPagina]= useState(1);

  
  const cambio =()=> {
    if (status) {
      setStatus(false);
    }else{
      setStatus(true)
    }
  }
  useEffect(() => {
    const cargarPaises = async () => {
      const resultado = await getCountries();
      setPaises(resultado);
    };
    
    cargarPaises();
  }, [status]);
  
  let paisesPagina=pageCountries(paises,pagina);

  return (
    <section className='seccionPrincipal'>
      <div className='Botones'>
        <button className='btn' onClick={cambio}>Country card</button>
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
