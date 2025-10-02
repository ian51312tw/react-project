import Search from "../components/Search"
import Picture from "../components/Picture"
import { useState } from "react"

const Home = () => {
  // 文字方塊
  const [input, setInput] = useState('');
  // 取出目前資料
  const [data, setData] = useState(null);
  // 目前頁數
  const [page, setPage] = useState(1);
  // 目前查詢的內容
  const [curSearch, setCurSearch] = useState('');
  // api key
  const auth = "LWEVGSYzY5fjr6xsBVxfE4p482U8U8Sx6sOCyzlsloW9QYSHcNXphdbA"
  // 精選照片連結
  const intialURL = "https://api.pexels.com/v1/curated?per_page=15&per_page=1"
  // 關鍵字搜尋的連結
  const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}per_page=15&per_page=1`

  // 取得圖片資料
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    取得資料
    const photoData = await dataFetch.json();
    setData(photosData, photos);
  }

  // 網頁一進

  return (
    <div>
      {/* 搜尋列 */}
      <Search />
      {/* 顯示圖片 */}
      <div className="pictures">
        <Picture />
      </div>
      {/* 更多 */}
      <div className="morePictures">
        <button> Load More</button>
      </div>
    </div>
  )
}

export default Home