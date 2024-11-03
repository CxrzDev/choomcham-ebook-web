import { Button, Input } from "@nextui-org/react"
import Link from "next/link"

function Footer() {
  return (
    <>
      <section className="px-10 py-5  bg-zinc-100 font-bold">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="grid gap-3">
            <img className="lg:w-[150px] w-[25vw]" src="/images/sticker6.png" alt="choomcham logo" />
            {/* <div className="text-3xl font-bold">ตัวจริง ต้องมีที่ยืน</div> */}
            <div className="flex gap-2">
              <a target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[--green]" href="https://lin.ee/5p0JD5t"><img width="24" height="24" className="text-white" src="https://elvira.co.th/wp-content/uploads/2016/02/line-icon.png" alt="linelogo" /></a>
              <a target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[--green]" href="https://youtube.com/channel/UCqiaFEL0g1TAFiK_x7acvRw"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
              <a target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[--green]" href="https://facebook.com/choomchambranding"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
          </div>
          <div className="">
            <div className="text-sm py-4 text-[--dark-blue]">Quick Link</div>
            <ul>
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="/">
                <li>Home</li>
              </Link>
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="/courses/3ms">
                <li>3 Minutes Story</li>
              </Link>
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="/about">
                <li>About us</li>
              </Link>
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="#">
                <li>Testimonials</li>
              </Link>
            </ul>
          </div>
          <div className="">
            <div className="text-sm py-4 text-[--dark-blue]">Services</div>
            <ul>
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="#entrepreneur-desktop">
                <li>Entrepreneur</li>
              </Link>
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="#service-desktop">
                <li>Production Service</li>
              </Link>
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="#online-courses-desktop">
                <li>Online Courses</li>
              </Link>
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="#business-brief-desktop">
                <li>Business Brief</li>
              </Link>
            </ul>
          </div>
          <div className="">
            <div className="text-sm py-4 text-[--dark-blue]">About Us</div>
            <ul>
           
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="/about">
                <li>About Founder</li>
              </Link>
              <Link className="hover:decoration-[--pink] decoration-transparent underline duration-150" href="/service/consult">
                <li>Consult</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[--dark-blue] text-white font-bold">
        <div className="text-sm px-10 py-2 text-center">Copyright © 2024 ชุ่มฉ่ำ branding.</div>
      </section>
    </>
  )
  return (
    <div className="relative w-100 overflow-x-clip overflow-y-visible py-2 lg:px-10 px-3  bg-zinc-200 ">
      {/* <div className="divider"></div> */}
      <div className="footer lg:p-10  ">
        <aside>
          <img width="150" src="/icon.svg" alt="choomcham logo" />
          <div className="text-3xl font-bold">ตัวจริง ต้องมีที่ยืน</div>

        </aside>
        <div>
          <div className=" text-[--dark-blue] font-bold text-xl">More from Choomcham branding</div>
          <div className="grid gap-3 text-[14px]">
            <a target="_blank" className="hover:underline" href="https://blog.choomcham.com/">Blog</a>
            <a target="_blank" className="hover:underline" href="https://blog.choomcham.com/category/testimonials/">Testimonials</a>
            <a className="hover:underline" href="/aboutus">About Us</a>
          </div>
        </div>
        <div className="grid gap-4">
          {/* <div>
            <div className="text-[--dark-blue] font-bold text-xl">Let&quot;s Stay connectd</div>
            <p>ลงทะเบียนเพื่อรับข้อเสนอกับชุ่มฉ่ำ</p>
            <div className="flex gap-2 items-end justify-center">
              <Input
                className="ring-2 ring-black/50 rounded-xl"
                type="email"
                placeholder="Your email"
                labelPlacement="outside"

              /><Button className=" bg-[--yellow] text-black/50 text-lg px-10 font-bold" >Submit</Button>
            </div>
          </div> */}

          <div>
            <div className=" text-[--dark-blue] font-bold text-xl">Follow us</div>
            <div className="grid grid-flow-col gap-4">
              <a target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[--green]" href="https://lin.ee/5p0JD5t"><img width="24" height="24" className="text-white" src="https://elvira.co.th/wp-content/uploads/2016/02/line-icon.png" alt="linelogo" /></a>
              <a target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[--green]" href="https://youtube.com/channel/UCqiaFEL0g1TAFiK_x7acvRw"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
              <a target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[--green]" href="https://facebook.com/choomchambranding"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
          </div>
        </div>
        {/* <svg id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 absolute w-[200vw] left-0  bottom-[-10px] -z-10">
          <path d="M 0,700 L 0,131 C 156.53333333333336,161.93333333333334 313.0666666666667,192.86666666666665 467,178 C 620.9333333333333,163.13333333333335 772.2666666666667,102.46666666666667 934,87 C 1095.7333333333333,71.53333333333333 1267.8666666666668,101.26666666666667 1440,131 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="#7bdcb5" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0 xl:hidden md:block"></path>
          <path d="M 0,700 L 0,306 C 201.06666666666666,280.26666666666665 402.1333333333333,254.5333333333333 554,271 C 705.8666666666667,287.4666666666667 808.5333333333333,346.1333333333334 948,359 C 1087.4666666666667,371.8666666666666 1263.7333333333333,338.9333333333333 1440,306 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="#7bdcb5" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1 "></path>
          <path d="M 0,700 L 0,481 C 111.86666666666667,489.66666666666663 223.73333333333335,498.3333333333333 396,491 C 568.2666666666667,483.6666666666667 800.9333333333334,460.33333333333337 985,456 C 1169.0666666666666,451.66666666666663 1304.5333333333333,466.3333333333333 1440,481 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="#7bdcb5" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
        </svg> */}
      </div>
      <div className="px-10 text-sm text-black/70"> <p>Copyright © 2024 ชุ่มฉ่ำ branding.</p></div>
    </div>
  )
}

export default Footer