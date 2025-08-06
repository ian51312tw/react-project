import '../css/App0806-1.css'
// import React from 'react'

const App = () => {
    // 資料抽離
    const photos = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1652123747730-2d229930fddd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '漂亮',
            desc: "^^",
            btnName: '下載',
            btnURL: 'https://images.unsplash.com/photo-1652123747730-2d229930fddd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        photo2: {
            imgURL: 'https://images.unsplash.com/photo-1651792441498-3978c293434e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '這表情也不錯',
            desc: '@@',
            btnName: '下載',
            btnURL: 'https://images.unsplash.com/photo-1651792441498-3978c293434e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        photo3: {
            imgURL: 'https://images.unsplash.com/photo-1651793058237-e81b8e2a0304?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '愛她',
            desc: '><',
            btnName: '下載',
            btnURL: 'https://images.unsplash.com/photo-1651793058237-e81b8e2a0304?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    }
    return (
        <>
            <div className='container'>
                <div className="card">
                    <img src={photos.photo1.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                    </div>
                </div>
                <div className="card">
                    <img src={photos.photo2.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                    </div>
                </div>
                <div className="card">
                    <img src={photos.photo3.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                    </div>
                </div>
            </div>
            <div  className='underContainer'>
                <img className='underImage' src="https://images.unsplash.com/photo-1653586050249-908669be7d37?q=80&w=727&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </>
    )
}

export default App;