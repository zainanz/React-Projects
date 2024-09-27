import { useState } from "react"
import "./menu.css"
import MenuList from "./menu-list"
export default function MenuItem({item}){
  const [childHidden, setChildHidden] = useState(true);
  const toggleChild = () => {
    setChildHidden( prev => prev ? false : true);
  }
  return (
  <div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
    <h3>{item.label}</h3> <span onClick={toggleChild}> {item.hasOwnProperty('children') ? (childHidden ?  "+" : "-") : ""} </span>
    <div className={ childHidden ? "hidechild" : null }>
        <MenuList menu={item.children}/>
    </div>
  </div>
)
}
