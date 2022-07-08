
import { GitItem } from "./GitItem"
import { useFecthGifs } from "./hooks/useFecthGifs"

export const GifGrid = ({category}) => {
const {images , isLoading}= useFecthGifs(category)


    
  return (
    <>
  <h3> {category} </h3>
  {
    isLoading && (<h2>Cargando.....</h2>)
  }
  <div className="card-grid" >
   {images.map((e)=>
   <GitItem key={e.id}
   
    {...e} />
    //usa el operador spred para exparsir las props , osea de esta manera manda todos las propiedades que tiene e
    //y las puede desestructurar el el otro componente sin tener que mandar e.title , e.id etc
    
   )}
  </div>
    </>
  )
}
