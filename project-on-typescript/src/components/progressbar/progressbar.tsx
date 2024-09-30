import { useEffect, useState, useCallback, useMemo } from "react";

type Product = {
  id: number,
  title: string
}

export default function ProgressBar({ url }: { url: string }) {
  const [data, setData] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string | Error>();
  const [scrollPercent, setScrollPercent] = useState<number>(0)


  const handleScrollPercent = () => {
    console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)
    const scrolledTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    setScrollPercent((scrolledTop / scrollHeight) * 100)
  }

  const fetchData = useCallback(() => {
    console.log("fetched")
    setLoading(true)
    fetch(url)
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(d => {
        setData(d['products'])
        setLoading(false)
      })
      .catch((er: Error) => {
        setLoading(false)
        setError(er)
      })
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    console.log(scrollPercent); // This will log the updated state
  }, [scrollPercent]);
  const memoData = useMemo(() => data, [data])



  useEffect(() => {
    document.addEventListener("scroll", handleScrollPercent);
    return ( () => document.removeEventListener("scroll", handleScrollPercent))
  },[])

  return (

    <div>
      <div style={{position:"fixed", top:"0", width:`100%`, backgroundColor:"lightblue"}}>
        <div style={{width:`${scrollPercent}%`, background:"darkblue", opacity:0.5, height:"100%"}} className="scrolldiv">!</div>
      </div>
      {loading ?
        <h2>Loading..</h2> :
        (error ? <h1>Error occured</h1> : memoData.map(d => <h3 style={{marginTop:"30px"}}>{d.id}. {d.title}</h3>))
      }
    </div>
  )
}
