const Cart =({props,results,removeItem,upScanState})=>{
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
      <div className='container p-4 fixed-bottom text-center'>
        <button className='btn btn-success' onClick={()=>(upScanState(true))}>scan</button>
      </div>
      </div>
        </>
    )
  }
  export default Cart