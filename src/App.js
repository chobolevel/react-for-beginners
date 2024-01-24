import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import MovieDetail from './routes/movie/Detail'
import SeriesDetail from './routes/series/Detail'
import MovieList from './routes/movie/List'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import NotFound from './components/error/NotFound'
import './styles/init.css'
import './styles/styles.css'
import { useState, useEffect } from 'react'

function App() {
  const [isTop, setIsTop] = useState(true)
  const handleScroll = (e) => {
    if (window.scrollY > 0) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <Header isTop={isTop} />
      <Routes>
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/series/:id" element={<SeriesDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div id="preview-modal-wrapper"></div>
      <Footer />
    </>
  )
}

export default App
