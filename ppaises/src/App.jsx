import { useState, useEffect } from 'react'
import './App.css';
import Card from './components/Cards/Card.jsx';
import { getCountries } from './services/CountriesApiService';

function App() {
  const [status, setStatus] = useState(false);
  const [paises, setPaises] = useState([]);

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
      console.log(resultado[0])
      console.log(status)
    };
    
    cargarPaises();
  }, [status]);
 

  return (
    <>
      <button onClick={cambio}>Country card</button>
      {paises.map((pais,index)=>{
        return <Card  key={index} country={pais}/>
          }
        )
      }

      {/* paisesPagina.map(getCountries => <div key={pais.cca3}>{pais.name.common}</div>) */}
{/*   
      <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>Anterior</button>
      <button onClick={() => setPagina(pagina + 1)} disabled={pagina * itemsPorPagina >= allPaises.length}>Siguiente</button> */}
    </>
    
    
  )
}

export default App
