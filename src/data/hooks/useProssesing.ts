import { useCallback, useState } from 'react'

export default function useProssesing() {
  const [processing, setProcessing] = useState<boolean>(false)
  
  const initProcess = useCallback(function () {
    setProcessing(true)
  }, [])

  const endProcess = useCallback(function () {
    setProcessing(false)
  }, [])

  return {    
    processing,
    initProcess,
    endProcess,
  }
  
}
