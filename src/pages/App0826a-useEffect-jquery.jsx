import $ from 'jquery'
import { useEffect } from 'react'
import '../css/App0826a.css'

const App = () => {
    useEffect(() => {
        // 當滑鼠移入圖片時，圖片放大
        // 也可用箭頭函式或命名函式
        // 或是(e)=>{
        // $(e.currentTarget).addClass............
        // }
        $('.zoom').on('mouseover', function() {
            $(this).addClass('imgScale');
        })

        // 當滑鼠離開圖片時，還原圖片
        $('.zoom').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
    }, [])

    return (
        <div>
            <h1>useEffect</h1>
            <h2>JQUERY圖片縮放</h2>
            <a href="#" className='zoom'>
                <img src="./images/p3.jpg" alt="" />
            </a>
        </div>
    )
}

export default App