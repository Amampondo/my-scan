import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import 'bootstrap/dist/css/bootstrap.min.css';

export const BarcodeScanner = () => {
  const [results, setResults] = useState({});
  const [scan,setScan] = useState(true)

  const { ref } = useZxing({
    onDecodeResult(result) {
      handleScan(result.getText())
    },
  });

  function handleScan(result){
    
    setResults((values)=>({...values,[result]:"R 10.99"}))
  }

  function removeItem(item){
    setResults((values)=>{

      const vals = {...values}
      delete vals[item]
      return vals
    })
  }

  const shoppingList =(results)=>{
    return(
        <>
        <div className="container-fluid">
        <div className="container text-center p-4">
            <h1>Your Cart</h1>
        </div>
        <div className="container">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(results).map((key)=>{
                            return(
                                <tr>
                                    <th>{key}</th>
                                    <th>{results[key]}</th>
                                    <th><button className="btn btn-danger" onClick={()=>removeItem(key)}>Del</button></th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      <div className='container p-4 fixed-bottom'>
        <button className='btn btn-success' onClick={()=>(setScan(true))}>scan</button>
      </div>
      </div>
        </>
    )
  }

  const scanner=(ref)=>{
    return(
        <>
        <div className='container-md p-4 text-start'>
          <button className='btn btn-primary' onClick={()=>(setScan(false))}>Cart</button>
        </div>
          <video ref={ref} className="img-fluid"/>
        </>
    )
  }

  useEffect(()=>{const hello=()=>{
    return false
  }
  },[scan])

  return (
    <>
    {
        ( scan)?scanner(ref)
        :shoppingList(results)
    }
    </>
  );
}