import { useState } from "react"
export const AddCategory = ({onNewCategory}) => {
const [imputValue, setImputValue] = useState("")
const onImputChange = (e) =>{
    console.log(e.target.value)
    setImputValue(e.target.value)
}
const handleSubmit = (e) =>{
    e.preventDefault()
    if(imputValue.trim().length <= 1) return
    onNewCategory((imputValue.trim()))
    setImputValue("")
}

  return (
    <form onSubmit={handleSubmit} >
         <input
          type="text"
          placeholder="Buscar Gifs"
          value={imputValue}
         onChange={ onImputChange}
    />
   </form>
   
  )
}
