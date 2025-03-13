"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function MyForm() {
    const [recaptchaVerified, setRecaptchaVerified] = useState(false);

    const handleRecaptcha = (token: string | null) => {
        if (token) {
            setRecaptchaVerified(true);
        } else {
            setRecaptchaVerified(false);
        }
    };

    const detectedBot = () => {
        alert("Bot detected");
        setRecaptchaVerified(false);
    };

    return (
        <form target="_blank" action={recaptchaVerified ? "https://docs.google.com/forms/d/e/1FAIpQLSeRYMnp4m1rpF8_zMBq__VOgWqi5qSbnZk8B0MeQt5KJAMjRw/formResponse" : ""} className="grid gap-5 px-10 pb-10">
            <div className="grid grid-flow-col gap-5">
                <div>
                    <label htmlFor="name">ชื่อ</label>
                    <input required type="text" id="name" name="entry.2006373774" className="input input-bordered input-md w-full bg-white" placeholder="กรอกชื่อ" />
                </div>
                <div>
                    <label htmlFor="tel">เบอร์โทร</label>
                    <input required type="text" id="tel" name="entry.1817569432" className="input input-bordered input-md w-full bg-white" placeholder="กรอกเบอร์โทรศัพท์" />
                </div>
            </div>
            <div>
                <label htmlFor="email">อีเมล์</label>
                <input required type="text" id="email" name="entry.659431789" className="input input-bordered input-md w-full bg-white" placeholder="กรอกอีเมล์" />
            </div>
            <div>
                <label htmlFor="bussines">ชื่อองค์กร/ธุรกิจที่คุณทำอยู่</label>
                <input required type="text" id="bussines" name="entry.1305396878" className="input input-bordered input-md w-full bg-white" placeholder="กรอกชื่อองค์กร/ธุรกิจที่คุณทำอยู่" />
            </div>
            <div>
                <label htmlFor="fb">Facebook / fanpage</label>
                <input required type="text" id="fb" name="entry.2063738074" className="input input-bordered input-md w-full bg-white" placeholder="กรอกFacebook / fanpage" />
            </div>
            <div>
                <label htmlFor="trouble">ปัญหาที่อยากระบาย</label>
                <textarea id="trouble" rows={5} name="entry.1456771675" className="input input-bordered input-md w-full bg-white" placeholder="ระบุ"></textarea>
            </div>
            <input type="text" onChange={() => detectedBot()} name="bot_field" style={{ display: "none" }} />

            {/* Google reCAPTCHA */}
            <div className="flex justify-center my-3">
                <ReCAPTCHA
                    sitekey="6LeMgvMqAAAAAL9BRkfTy1oh5RMs2y0xbwShHLVt"
                    onChange={handleRecaptcha}
                />
            </div>

            <button type="submit" className="btn bg-primary" disabled={!recaptchaVerified}>
                ลงทะเบียน
            </button>
        </form>
    );
}
