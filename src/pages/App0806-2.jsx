
import Card from '../components/Card';
import '../css/App0806-1.css'
// import React from 'react'

// 建立卡片元件
const App = () => {
    // 資料抽離
    const arrPhotos = [ /* 陣列須給ID，編號不能重複 */
        {
            id: 1,
            imgURL: 'https://images.unsplash.com/photo-1652123747730-2d229930fddd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '漂亮',
            desc: "^^",
            btnName: '下載',
            btnURL: 'https://images.unsplash.com/photo-1652123747730-2d229930fddd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            imgURL: 'https://images.unsplash.com/photo-1651792441498-3978c293434e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '這表情也不錯',
            desc: '@@',
            btnName: '下載',
            btnURL: 'https://images.unsplash.com/photo-1651792441498-3978c293434e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            imgURL: 'https://images.unsplash.com/photo-1651793058237-e81b8e2a0304?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '愛她',
            desc: '><',
            btnName: '下載',
            btnURL: 'https://images.unsplash.com/photo-1651793058237-e81b8e2a0304?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    ]
    // const photos = {
    //     photo1: {
    //         imgURL: 'https://images.unsplash.com/photo-1652123747730-2d229930fddd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         title: '漂亮',
    //         desc: "^^",
    //         btnName: '下載',
    //         btnURL: 'https://images.unsplash.com/photo-1652123747730-2d229930fddd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     },
    //     photo2: {
    //         imgURL: 'https://images.unsplash.com/photo-1651792441498-3978c293434e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         title: '這表情也不錯',
    //         desc: '@@',
    //         btnName: '下載',
    //         btnURL: 'https://images.unsplash.com/photo-1651792441498-3978c293434e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     },
    //     photo3: {
    //         imgURL: 'https://images.unsplash.com/photo-1651793058237-e81b8e2a0304?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         title: '愛她',
    //         desc: '><',
    //         btnName: '下載',
    //         btnURL: 'https://images.unsplash.com/photo-1651793058237-e81b8e2a0304?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     }
    // }

    return (
        <>
            <div className='container'>
                {arrPhotos.map((photos) => {
                    return (
                        <Card
                            key={photos.id}
                            imgURL={photos.imgURL}
                            title={photos.title}
                            desc={photos.desc}
                            btnName={photos.btnName}
                            btnURL={photos.btnURL}
                        ></Card>
                    )
                })
                }
            </div>
            <div className='underContainer'>
                <img style={{ border: "3px solid pink" }} className='underImage' src="https://images.unsplash.com/photo-1653586050249-908669be7d37?q=80&w=727&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </>
    )
}

export default App;