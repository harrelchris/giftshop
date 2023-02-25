import React, {useRef, useState} from "react";

export default function Reports() {
  const [type, setType] = useState("inventory");
  const fileRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const file = fileRef.current.files[0];

    console.log(type)
    console.log(file)
  }

  return (
    <>
      <div className="container">
        <h1>Reports</h1>
        <form className="w-25" onSubmit={handleSubmit}>
          <h3>Type</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="type-inventory"
              checked={type === "inventory"}
              onChange={() => setType("inventory")}
            />
            <label
              className="form-check-label"
              htmlFor="type-inventory"
            >Inventory</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="type-revenue"
              checked={type === "revenue"}
              onChange={() => setType("revenue")}
            />
            <label
              className="form-check-label"
              htmlFor="type-revenue"
            >Revenue</label>
          </div>
          <h3>File</h3>
          <div className="mb-3">
            <input
              className="form-control"
              type="file"
              id="file"
              name="file"
              ref={fileRef}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >Submit</button>
        </form>
      </div>
    </>
  );
}
