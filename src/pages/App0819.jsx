// 物件的成員就是"屬性"+"方法"

// 建立子元件-標準寫法
function MyComponent(props) {
    // props.c();  /* return外寫這樣即可 */
    return <>
        <div>hello!標準寫法</div>
        <div>{props.a}</div>
        <div>{props.b}</div>
        {props.c()}
    </>
}
// 簡化寫法
// 物件解構=>{物件成員}
function MyComponent2({a,b,c}) {
    // c();
    return <>
        <div>hello!簡化寫法</div>
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

function MyComponent3({a,b="我是預設值",c}) {
    // c();
    return <>
        <div>hello!預設值</div>
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}


// 父元件
const App0819 = () => {
    return (
        // 呼叫元件
        <>
        <MyComponent a="我是屬性a" b="我是屬性b" c={()=>{console.log("123")}}/>
        <MyComponent2 a="我是屬性2a" b="我是屬性2b" c={()=>{console.log("456")}}/>
        <MyComponent3 a="我是屬性3a" b="@@@" c={()=>{console.log("789")}}/>
        </>
    )
}

export default App0819