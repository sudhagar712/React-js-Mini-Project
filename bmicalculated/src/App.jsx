import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi , setBmi] = useState("");
  const [message , setMessage ] = useState("");
   const [color, setColor] = useState("");



const  handleForm = (e) =>{
    e.preventDefault();

    if(weight === 0 || height === 0  ){
        alert('please enter valid weight and Height')
    }

    else{
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        setBmi(bmi.toFixed(1));


        if(bmi<25){
            setMessage('your are UnderWeight')
             setColor("blue");
        }
        else if(bmi>=25 && bmi<30){
              setMessage("your are a healthy weight");
              setColor("green");
        }
        else{
             setMessage( " your are a Over weight");
              setColor("red");
        }
    }

}


const reload = () =>{
    window.location.reload()
}







  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col-12">
          <div
            className="card bg-white shadow-lg  "
            style={{ width: "24rem", height: "28rem" }}
          >
            <div className="card-title text-center fw-bold mt-4 mb-2">
              BMI Calculator
            </div>
            <div className="card-body">
              <form onSubmit={handleForm}>
                <div className="form-group">
                  {/* weight value */}
                  <label className="small ">weight(Kg)</label>
                  <input
                    type="number"
                    className="form-control mt-2 mb-2"
                    placeholder="Enter Your weight value"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />

                  {/* height value  */}
                  <label className="small">Height(cm)</label>
                  <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Enter Your Height value"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />

                  <div className="d-grid mt-3">
                    <button type="submit" className="btn btn-primary mt-2">
                      Submit
                    </button>
                    <button
                      type="submit"
                      onClick={reload}
                      className="btn btn-secondary mt-2"
                    >
                      Reload
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-5 text-center">
                <h6 style={{ color: color }}>Your BMI is: {bmi}</h6>
                <p style={{ color: color }}>{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
