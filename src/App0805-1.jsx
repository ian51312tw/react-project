import './css/App0805-1.css'    /* 外部檔案要導入要放在最上部，css副檔名一定要打，jsx的話要打不打皆可(建議打) */
/* 可用ctrl+左鍵直接連結到外部檔案，以確認路徑沒問題 */

function App() {
    // 一般變數
    const dogName = "健仔"
    // 屬性名稱變數
    const myClassName = "myClass"
    // 方法
    function myClick() {
        alert('我是按鈕1');
    }

    return ( /* 資料處理可在return之前 */
        <>
            {/* return只能傳一個標籤，若內部有兩個物件要回傳，可以建立一個空標籤放入內
        如此就會被判定為一個空標籤物件，這個做法稱之為Fragment */}
            {/* for=htmlFor class=className*/}
            {/* 直接呼叫js的語法 例如alert 會立即被執行，要綁訂在事件(函數)下面 */}
            <div>
                <p style={{fontSize:"64px"}} className={myClassName}>姓名：{dogName}</p>
                {/* 行內樣式需要兩層大括號，並且會比外部檔案優先採用 */}
                <button type="button" onClick={myClick}>按鈕1</button>
                <button type="button" onClick={()=>{
                    alert('我是按鈕2');
                }}>按鈕2</button>
            </div>
        </>
    )
}
export default App;