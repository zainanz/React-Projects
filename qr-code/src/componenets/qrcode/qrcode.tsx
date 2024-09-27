import { useState, useRef } from "react"
import QRCode from "react-qr-code";


export default function GenerateQRCode(){
  const qr = useRef<null | HTMLDivElement>(null)
  const [input, setInput] = useState<string>("hi");
  const [qrValue, setQRValue] = useState<string>("");
  const [downloadLink, setDownloadLink] = useState("")
  const setQrCode = (): void =>{
    setQRValue(input)
    setInput("");
  }
  const downloadQR = () => {
    console.log(qr.current)
    const svg = qr.current?.querySelector("#id");
    console.log("hello world")
    console.log(svg)
    if (svg) {
      const data = new XMLSerializer().serializeToString(svg);
      const blob = new Blob([data], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      setDownloadLink(url)
      console.log(downloadLink)
    } else {
      console.error("Content cannot be null.")
    }
  }
  return (
    <div style={{backgroundColor:"lightblue", height: '100vh', width:'100vw',display:'flex', flexDirection:"column", marginTop:'50px', justifyContent:'center', alignItems: 'center'} }>
      <div style={{margin:'30px', display:'flex', alignItems:'center'}}>
      <input placeholder="www.example.com" style={{width:'20rem', fontSize:"15px", height:'3rem', marginRight: "5px", borderRadius:"10px"}} type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button style={{width:'5rem', height:'3rem'}} onClick={ () => setQrCode()}>Generate</button>
      </div>
      <div >
      {
        !qrValue ? ""
        :
        <div onClick={downloadQR} ref={qr} style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
          <QRCode value={qrValue}/>
          <a style={{width:'100%', height:"30px", display:"flex", alignItems:"center", textDecoration:"none",justifyContent:"center", borderRadius:"10px", backgroundColor:"white"}}download href={downloadLink} id="id">Download QR Code</a>
        </div>
      }
      </div>
    </div>
  )
}
