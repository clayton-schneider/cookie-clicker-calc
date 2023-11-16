import { useState } from 'react'
import Building from './component/Building'

import './App.css'

function App() {

  const buildings = ['Cursor', 'Grandma', 'Farm', 'Mine', 
                      'Factory', 'Bank', 'Temple', 'Wizard Tower', 'Shipment', 'Alchemy Lab', 'Portal'
                    ]

  return (
    <div className="App">
      {buildings.map(building => <Building buildingName={building} key={building}/>)}
    </div>
  )
}

export default App
