import "./cards.css";
import Card from "../card-component/card"
import {useState, useEffect} from "react"


export default function RenderCards({url, initialLimit = 10}){
  const [currentItems, setCurrentItems] = useState(initialLimit);
  const [error, setHasError] = useState(null);
  const [items, setItems] = useState([]);


  const retrieveData = (data) => {
    const newItems = data.products.map( item => (
     {imageUrl: item.images[0], description: item.title})
    )
    console.log(newItems);
    if(items.length === 0){
      setItems(prev => [...newItems])
    } else {
      setItems(prev => [...prev, ...newItems])
    }
    console.log(items);
  }

  const fetchData = (link = `${url}${initialLimit}`) => {
    try {
      console.log("Trying to retrieve data from the url")
      fetch(link)
      .then(response => response.json())
      .then(data => {
        retrieveData(data)
      })
    } catch (error) {
      setHasError(true);
    }
  }

  useEffect( () => fetchData(), []);
  const handleLoadMore = () => {
    setCurrentItems(prev => prev+initialLimit);
    const link = `${url}${initialLimit}&skip=${currentItems}`;
    fetchData(link)
  }

  if(error) return <div>Sorry, we encountered an error. Please try again later.</div>

  return (
    <div>
      <div className="cards-wrapper">
        {
          items.map( item => <Card imageUrl={item.imageUrl} description={ item.description}/> )
        }
      </div>
      <button onClick={handleLoadMore} className="load-more">Load more</button>
    </div>
  )
}
