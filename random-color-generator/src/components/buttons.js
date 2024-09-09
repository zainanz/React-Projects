import {useState} from "react";
import styles from "./button.module.css"
export default function Button() {
  const [hexColor, setHexColor] = useState();
  const [rgbColor, setRgbColor] = useState();
  const [color, setColor] = useState("");

  const rgbGenerator = () => {
    return Math.floor(Math.random() * 256);
  }
  const HexClickHandler = () => {
    setHexColor(true);
    setRgbColor(false);
  }
  const RGBClickHandler = () => {
    setHexColor(false);
    setRgbColor(true);
  }
  const ColorGenerator = () => {
    console.log(color);
    console.log(rgbGenerator());
    const HexConvertor = (color) => {
      return color.toString(16);
    }
    rgbColor ? console.log("rgb") : console.log("hex")
    rgbColor ? setColor( `rgb(${rgbGenerator()}, ${rgbGenerator()}, ${rgbGenerator()})` ) : setColor(`#${HexConvertor(rgbGenerator())}${HexConvertor(rgbGenerator())}${HexConvertor(rgbGenerator())}`)

  }
  return (
    <div className={styles.container} style={{backgroundColor: color, height: '100vh'}}>
      <div>
        <button onClick={HexClickHandler}>
          Create HEX Color
        </button>
        <button onClick={RGBClickHandler}>
          Create RGB Color
        </button>
        <button onClick={ColorGenerator}>
          Generate Random Color
        </button>
      </div>
      <h1>
        { color }
      </h1>
    </div>
  )

}
