import React from 'react'

function Rou() {
  return (
    <div>
             <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Text/>}></Route>
          <Route path="/Cards" element={<Cards/>}> </Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
      
      </Router>
    </div>
  )
}

export default Rou