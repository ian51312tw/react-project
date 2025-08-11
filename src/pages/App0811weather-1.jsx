// import React from 'react'
import { useEffect } from 'react';
import '../css/App0811weather-1.css'    /* react icons要去終端機安裝 */
import { FaUmbrella } from "react-icons/fa";
import axios from 'axios';

const App = () => {
    useEffect(()=>{
        // 非同步取資料
        (async()=>{
            // 取得json資料 public中的json檔    
            const data=await axios.get('./json/F-C0032-001.json');
            // 檢查是否連上json
            console.log(data.data.cwaopendata.dataset);
        
            // 取得src中的json檔

        })();
    },[])

    return (
        <>
            <h2>36小時天氣預報筆記</h2>
            <div className='cards'>
                <div className='card'>
                    <div className='card-header'>台北市</div>
                    <div className='item'>
                        <div className='card-body'>
                            <div className='date'>11日</div>
                            <div className='time'>上午6:00 <br />~ <br />下午6:00<br /></div>
                            <div className='weatherPic'>    {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                                <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" /></div>
                            <div className='weatherName'>晴午後短暫雷陣雨</div>
                            <div className='rain'><FaUmbrella />80%</div>
                        </div>
                        <div className='card-body'>
                            <div className='date'>11日</div>
                            <div className='time'>上午6:00 <br />~ <br />下午6:00<br /></div>
                            <div className='weatherPic'>    {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                                <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" /></div>
                            <div className='weatherName'>晴午後短暫雷陣雨</div>
                            <div className='rain'><FaUmbrella />80%</div>
                        </div>
                        <div className='card-body'>
                            <div className='date'>11日</div>
                            <div className='time'>上午6:00 <br />~ <br />下午6:00<br /></div>
                            <div className='weatherPic'>    {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                                <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" /></div>
                            <div className='weatherName'>晴午後短暫雷陣雨</div>
                            <div className='rain'><FaUmbrella />80%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-header'>新北市</div>
                <div className='card-body'>
                    <div className='date'>11日</div>
                    <div className='time'>上午6:00 <br />~ <br />下午6:00<br /></div>
                    <div className='weatherPic'>    {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                        <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" /></div>
                    <div className='weatherName'>晴午後短暫雷陣雨</div>
                    <div className='rain'><FaUmbrella />80%</div>
                </div>
            </div>
        </>
    )
}

export default App