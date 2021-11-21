import "./styles.css";
import QRCode from "qrcode.react";
import { useState, useEffect } from "react";
import facebook from "../public/facebook.svg";

export default function App() {
  const [cubeFace, setCubeFace] = useState({
    link: ""
  });

  const handleChange = (e) => {
    setCubeFace({ ...cubeFace, [e.target.name]: e.target.value });
  };

  //one issue i'm going to have is passing other types of docs through.

  return (
    <div className="App">
      <h1>Hello QRCode Test</h1>
      <input
        type="text"
        name="link"
        value={cubeFace.link}
        onChange={handleChange}
      />

      <h2>Add a link!</h2>

      {/* <QRCode level="Q" value="https://openbase.com/js/qrcode.react" bgColor="#66CDAA" fgColor="#191970"/>
      {" "} */}
      <QRCode
        level="Q"
        value={cubeFace.link}
        renderAs="svg"
        imageSettings={{
          src: `${facebook}`,
          x: null,
          y: null,
          height: 24,
          width: 24,
          excavate: true
        }}
      />
    </div>
  );
}
