"use client"

import Footer from "../components/footer";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
const quizs = [
    { question: 'Something here' },
    { question: 'Something here 2' },
    { question: 'Something here 3' },
    { question: 'Something here 4' },
    { question: 'Something here 5' },
    { question: 'Something here 6' },
]

function SwotTest() {
    return <>
        <Navbar current={""}/>
        {/* <div className="w-full h-[35rem]  relative overflow-hidden">
            <div className="w-[120rem] bg-pink-600 h-[60rem] absolute -top-[25rem] rounded-b-full -z-[10]"></div>
            <h1 className="p-10 text-3xl">Analytic your bussiness</h1>
        </div> */}

        <div className="work sm:p-32 p-10 text-white">

            <div>ชุ่มฉ่ำ แบรนดิ้ง</div>
            {/* top */}
            <motion.div initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }} className="mb-10">
                <h1 className="text-3xl sm:text-5xl thai pb-5">Analytics</h1>
                <div className="text-md thai py-3 px-3 w-80 text-center bg-[#D33666] rounded-full">Analztic your bussiness</div>
                <br />

            </motion.div>



        </div>

        <form className="card bg-white py-5 items-center">

            {quizs.map((quiz, key) => <>
                <div className="flex flex-col  justify-center items-center" key={key}>

                    <div className="text-3xl py-4 font-bold">{quiz.question}</div>
                    <div className="flex gap-4 justify-items-center items-center sm:flex-row flex-col">
                        <div className=" text-xl sm:block hidden">Disagree</div>
                        <ul className="flex items-center gap-3  sm:gap-10 ">
                            <li>
                                <input type="radio" name={"amount" + key} className="peer hidden" id={key + "r1"} value="1" />
                                <label htmlFor={key + "r1"} className="sm:w-14 w-12 h-12 sm:h-14 block border-yellow-500 border-2 rounded-full peer-checked:bg-yellow-500"></label>
                            </li>

                            <li>
                                <input type="radio" name={"amount" + key} className="sm:w-12 w-6 h-6 sm:h-12  accent-yellow-500  peer hidden" id={key + "r2"} value="2" />
                                <label htmlFor={key + "r2"} className="sm:w-12 w-8 h-8 sm:h-12 block  border-yellow-500 border-2 rounded-full peer-checked:bg-yellow-500"></label>
                            </li>

                            <li>
                                <input type="radio" name={"amount" + key} className="sm:w-10 w-6 h-6 sm:h-10  accent-yellow-500  peer hidden" id={key + "r3"} value="3" />
                                <label htmlFor={key + "r3"} className="sm:w-10 w-6 h-6 sm:h-10 block  border-yellow-500 border-2 rounded-full peer-checked:bg-yellow-500"></label>
                            </li>

                            <li>
                                <input type="radio" name={"amount" + key} className="sm:w-8 w-6 h-6 sm:h-8  accent-slate-500 peer hidden" id={key + "r4"} value="4" />
                                <label htmlFor={key + "r4"} className="sm:w-8 w-4 h-4 sm:h-8 block  border-slate-500 border-2 rounded-full peer-checked:bg-slate-500"></label></li>

                            <li>
                                <input type="radio" name={"amount" + key} className="sm:w-10 w-6 h-6 sm:h-10  accent-green-600 peer hidden" id={key + "r5"} value="5" />
                                <label htmlFor={key + "r5"} className="sm:w-10 w-6 h-6 sm:h-10 block  border-green-500 border-2 rounded-full peer-checked:bg-green-500"></label></li>

                            <li>
                                <input type="radio" name={"amount" + key} className="sm:w-12 w-6 h-6 sm:h-12  accent-green-600 peer hidden" id={key + "r6"} value="6" />
                                <label htmlFor={key + "r6"} className="sm:w-12 w-8 h-8 sm:h-12 block  border-green-500 border-2 rounded-full peer-checked:bg-green-500"></label></li>

                            <li>
                                <input type="radio" name={"amount" + key} className="sm:w-14 w-6 h-6 sm:h-14 accent-green-600 peer hidden" id={key + "r7"} value="7" />
                                <label htmlFor={key + "r7"} className="sm:w-14 w-12 h-12 sm:h-14 block  border-green-500 border-2 rounded-full peer-checked:bg-green-500"></label></li>

                        </ul>
                        <div className=" text-xl sm:block hidden">Agree</div>
                        <div className=" text-md sm:hidden w-full grid grid-cols-2">
                            <div className="">Disagree</div>
                            <div className="text-right">Agree</div>
                        </div>

                    </div>
                    <div className="divider py-10 px-44"></div>
                </div>


            </>)}
            <button type="button" className="btn-success text-white btn w-1/2">Send</button>
        </form>


        <Footer />
    </>
}

export default SwotTest; 