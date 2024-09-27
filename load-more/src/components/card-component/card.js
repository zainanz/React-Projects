import "./card.css"

const defaultPicture = "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
const defaultDescription = "There's no description for this product"
export default function Card({imageUrl = defaultPicture, description = defaultDescription}){
  return (
    <div className="card-wrapper">
      <img src={imageUrl} className="card-image">
      </img>
      <span>
        {description}
      </span>
    </div>
  )
}
