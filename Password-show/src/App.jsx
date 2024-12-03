import React, { useState } from 'react'

const App = () => {

  const [pstatus, setPstatus] = useState(false);
  return (
    <div className='App'>
      <input type={pstatus ? 'Text' : 'password'} />
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? 'Hide' : 'Show'}
      </button>

    </div>
  )
}

export default App