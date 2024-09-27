import MenuItem from "./menu-item";

export default function MenuList({menu = []}){
  console.log(menu);
  return (
    <div>
      {
        menu.map( item => <MenuItem item={item}/>)
      }
    </div>
  )
}
