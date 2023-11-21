import { useState } from 'react'

export default function useProssesing() {
  const [processing, setProcessing] = useState<boolean>(false)
  
  const initProcess = () =>{
    setProcessing(true)
  }

  const endProcess = () =>{
    setProcessing(false)
  }
  return {    
    processing,
    initProcess,
    endProcess,
  }
  
}
