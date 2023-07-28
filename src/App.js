import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'

const App = () =>{
  
  const [progress, setProgress] = useState(0)
  const [pageSize, setPageSize] = useState(5)

    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route exact path='/home' element={<News setProgress={setProgress}  key='home' pageSize={pageSize} country='in' />} />
            <Route exact path='/business' element={<News setProgress={setProgress}key='business' pageSize={pageSize} country='in' category='business' />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />} />
            <Route exact path='/general' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general' />} />
            <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country='in' category='health' />} />
            <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country='in' category='science' />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country='in' category='sports' />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} key='technnology' pageSize={pageSize} country='in' category='technology' />} />
          </Routes>
        </Router>

      </>
    )
  }

export default App