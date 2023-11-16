import React, {useState, useEffect} from 'react'

export default function Buildings({buildingName}) {
  const [price, setPrice] = useState(1)
  const [cps, setCPS] = useState(1)

  const [rate, setRate] = useState()

  const calcRate = (price, cps) => {
    return cps / price * 1000000
  }

  useEffect(() => {
    setRate(calcRate(price, cps))
  }, [price, cps])

  return (
    <div>
      <h2>{buildingName}</h2>
      <label>Price 
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
      </label>
      <label>Cookies Per Second 
        <input type="number" value={cps} onChange={(e) => setCPS(e.target.value)}/>
      </label>
      <label>Cookies Per Dollar: {rate}</label>
    </div>
  )
}
