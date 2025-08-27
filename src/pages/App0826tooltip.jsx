import $ from 'jquery'
import { useEffect } from 'react'
import '../css/App0826tooltip.css'
import GG from'../assets/react.svg'

const App = () => {
    useEffect(() => {
        $('a:has(.ttpShow)').on('mouseover',function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
        }).on('mousemove',function (e) {
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
        }).on('mouseout',function () {
            $('#ttpPanel').remove();
        })
    }, [])
    return (
        <div className="wrap">
            <h1>Tooltip</h1>
            <p>Lorem ipsum dolor sit amet
                <a href="#">consectetur
                    <span className="ttpShow">dolorius內容說明....</span>
                </a>
                adipisicing elit. Accusantium alias nisi vel rerum iste commodi
                <a href="#">
                    <img src={GG} alt="" />
                <span className="ttpShow">alsjkdlkasjdljalksdjalkjdslksjl</span>
                </a> error dolor, ad, sapiente libero,
                odio expedita non quibusdam tempora debitis saepe illum voluptatibus.
            </p>
        </div>
    )
}

export default App