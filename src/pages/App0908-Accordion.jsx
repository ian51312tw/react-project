import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { MdBorderColor } from 'react-icons/md'



const App = () => {
    // 作用中變數
    const [activeQuestion, setActiveQuestion] = useState(null)
    // FAQ資料
    const questions = [
        {
            id: 1,
            question: "題目1",
            answer: "答案1",
        },
        {
            id: 2,
            question: "題目2",
            answer: "答案2",
        }, {
            id: 3,
            question: "題目3",
            answer: "答案3",
        }, {
            id: 4,
            question: "題目4",
            answer: "答案4",
        },
    ]
    return (
        < div className='wrap' style={{
            maxWidth: '100vw',
            height: '100vh',
            backgroundColor: "#333",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div className='accordion' style={{
                width: "80%",
                margin: "auto",
                maxWidth: "1400px",
                backgroundColor: "#CCC",
                padding: "8px",
                borderRadius: "5px",
            }}>
                <h2 style={{
                    textAlign: "center",
                    margin: "6px",
                }}>FAQ標題</h2>

                {
                    // 貸出陣列中的資料
                    questions.map((q) => {
                        return (
                            <div key={q.id} style={{ marginBottom: "5px" }}>
                                {/* QAbtn */}
                                <button style={{
                                    width: "100%",
                                    textAlign: "none",
                                    Border:"none",
                                    padding: "4px",
                                    backgroundColor: "#EEE",
                                    display: "flex",
                                    justifyContent: "space-between",

                                }}
                                    onClick={() => {
                                        setActiveQuestion(activeQuestion === q.id ? null : q.id)
                                    }}>

                                    {/* 帶出題目 */}
                                    {q.question}
                                    {/* 加減號icon */}
                                    {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
                                </button>

                                {/* 摺疊動畫 */}
                                <AnimatePresence>
                                    {
                                        activeQuestion === q.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                style={{margin:"5px",color:"#333",fontSize:"14px"}}
                                            >
                                                {/* 答案 */}
                                                {q.answer}
                                            </motion.div>
                                        )
                                    }
                                </AnimatePresence>


                            </div>
                        )
                    })
                }

            </div>

        </div >
    )
}

export default App