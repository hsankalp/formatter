import React, { useState } from "react";
import "../styles/Validator.css";
import ErrorAlert from "./ErrorAlert";

const Validator = () => {
  const [json, setJson] = useState("");
  const [isValid, setIsValid] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    setJson(e.target.value);
  };

  const handleClick = textToValidate => {
    try {
      const json = JSON.parse(textToValidate);
      setJson(JSON.stringify(json, null, 4));
      setIsValid(true);
    } catch (err) {
      setIsValid(false);
      setError(err.toString());
    }
  };

  const handleSampleClick = () => {
    const json = {
      hello: "world"
    };
    setJson(JSON.stringify(json, null, 4));
    setIsValid(true);
  };

  const handleClearClick = () => {
    setJson("");
    setIsValid("");
  };

  const handleSaveClick = json => {
    const element = document.createElement("a");
    const file = new Blob([json], {
      type: "application/json"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myJSON.json";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <h3 className="m-4">JSON Validator: </h3>

      <textarea
        id="json"
        value={json}
        spellCheck="false"
        onChange={handleChange}
        className="form-control mt-2 mb-2 mr-3"
        rows="2"
      ></textarea>

      <button
        onClick={() => handleClick(json)}
        className="btn btn-dark m-2"
        disabled={!json}
      >
        Format JSON
      </button>

      <button onClick={handleSampleClick} className="btn btn-dark m-2">
        Sample JSON
      </button>

      {json && isValid && (
        <button
          onClick={() => handleSaveClick(json)}
          className="btn btn-dark m-2"
        >
          Save JSON
        </button>
      )}

      <button onClick={handleClearClick} className="btn btn-danger m-2">
        Clear
      </button>

      {isValid !== "" && <ErrorAlert isValid={isValid} error={error} />}
    </>
  );
};

export default Validator;
