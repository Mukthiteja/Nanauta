import React from 'react'
import samosa from '../assets/samosa.jpg'; 

export default function Card() {
  return (
    <>
    <div
        className="card mt-3 "
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img className=""src={samosa} alt="Nanauta" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick</p>
          <div className="container w-100">
            <select name="" id="" className="m-2 h-100 bg-light rounded">
              {Array.from(Array(6), (e,i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select name="hi" id="" className="m-2 h-100 h-100 bg-light rounded">
                  <option  value="hello">
                    half
                  </option>
                <option value="he">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div></>
  )
}
