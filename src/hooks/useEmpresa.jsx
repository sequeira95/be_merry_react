import { useState, useEffect } from 'react'
import { getDataEmpresa } from '../service/getDataEmpresa'
export function useEmpresa(){
  const [empresa, setEmpresa] = useState([])
  const getEmpresa = () =>{
    getDataEmpresa().then(empresa => setEmpresa(empresa))
  }
  useEffect(getEmpresa,[])
  return {empresa}
}