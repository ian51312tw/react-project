import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'

const MyApp = () => {
    return (
        <div className="wrap">
            {/* 選單 */}
            <Nav />
            <hr />
            <Routes>
                {/* 首頁 */}
                <Route path='/' element={<Home />}></Route>
                {/* About */}
                <Route path='/about' element={<About />}></Route>
                {/* News */}
                <Route path='/news' element={<News />}></Route>
            </Routes>
            {/* 內容區 */}
            <Footer />
        </div>
    )
}

export default MyApp