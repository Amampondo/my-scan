import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Cart";

export const BarcodeScanner = () => {
  const [results, setResults] = useState({});
  const [scan,setScan] = useState(true)

  const { ref } = useZxing({
    onDecodeResult(result) {
      handleScan(result.getText())
    },
    paused:(!scan),
  });

  function handleScan(result){
    
    setResults((values)=>({...values,[result]:"R 10.99"}))
    setScan(false)
  }

  function removeItem(item){
    setResults((values)=>{

      const vals = {...values}
      delete vals[item]
      return vals
    })
  }

  function handleBack(){
    setScan(false)
  }

  const scanner=(ref)=>{
    return(
        <>
        <div className='container-md p-4 text-start'>
          <button className='btn btn-primary' onClick={handleBack}>Cart</button>
        </div>
          <video ref={ref} className="img-fluid"/>
        </>
    )
  }

  function upScanState(state){
    setScan(state)
  }

  useEffect(()=>{const hello=()=>{
    return false
  }
  },[scan])

  return (
    <>
    {
        (scan)?scanner(ref)
        :<Cart results={results} upScanState={upScanState} removeItem={removeItem}/>
      }
    </>
  );
}