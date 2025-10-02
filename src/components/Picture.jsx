import "../css/picture.css"

const Picture = () => {
    return (
        <div className="search">
            <p>圖片標題</p>
            <div className="imgContainer">
                <img src="./images/p1.jpg" alt="" />
            </div>
            <p>
                Download Image:
                <a href="#" target="_blank">Click Here</a>
            </p>
        </div>
    )
}

export default Picture