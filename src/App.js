import "./styles.css";
import QRCode from "qrcode.react";
import { useState, useEffect } from "react";

export default function App() {
  const [cubeFace, setCubeFace] = useState({
    link: ""
  });

  const handleChange = (e) => {
    setCubeFace({ ...cubeFace, [e.target.name]: e.target.value });
  };

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
      <QRCode level="Q" value={cubeFace.link} />
    </div>
  );
}
