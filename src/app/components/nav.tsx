'use client'
import Link from 'next/link'
import { useEffect } from 'react'

function Navbar() {
    const actStyl = " active px-5 py-1 rounded-full  bg-black  shadow-xl"
    const norStyl = "hover:bg-white/50 rounded-full py-1 px-5 hover:shadow-xl   duration-150"


    const header = 'duration-300 navbar  bg-white drop-shadow-md  flex justify-between px-20 sticky top-0 w-full py-3  z-[100] '

    useEffect(function mount() {
        function onScroll() {
            const nav = document.getElementById("nav");

            if (window.scrollY > 50 && !nav?.classList.contains('bg-white')) {


                nav?.classList.add("bg-white");
                nav?.classList.remove("text-white");


            } else if (window.scrollY < 50 && nav?.classList.contains('bg-white')) {

                nav?.classList.remove("bg-white");
                nav?.classList.add("text-white");

            }
        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
        mount()
    },[]);

    return (
        <>
            {/* <div className="mt-5 bg-white"> </div> */}
            <div id='nav' className={header}>

                <nav id="sidebar">
                    <Link href="/">
                        <div className="pr-10"><img src="https://blog.choomcham.com/wp-content/uploads/2021/09/cropped-logo.png" alt="" />
                            <img src="https://www.choomcham.com/assets/images/4277eb7d.png" className='hidden' alt="" /></div>
                    </Link>
                    <ul className='duration-150 gap-5 hidden sm:flex items-center'>
                        <Link className='hover:text-pink-600' href="/">
                            <li>Home</li>
                        </Link>
                        <Link className='hover:text-pink-600' href="/service">
                            <li>Services</li>
                        </Link>
                        <Link className='hover:text-pink-600' href="/works">
                            <li>Our Works</li>
                        </Link>
                        <Link className='hover:text-pink-600' href="/blog">
                            <li>Content</li>
                        </Link>
                        <Link className='hover:text-pink-600' href="/about">
                            <li>About us</li>
                        </Link>
                        <Link className='bg-pink-600  rounded-md drop-shadow-sm font-semibold hover:bg-pink-500 duration-150 p-2 text-white' href="/Analytics">
                            <li>Analytics</li>
                        </Link>
                    </ul>
                </nav>
                <div className="sm:grid gap-3 hidden grid-flow-col">
                    <Link target="_blank" href="https://lin.ee/5p0JD5t"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="text-black fill-current" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"></path>
                    </svg></Link>
                    <Link target="_blank" href="https://youtube.com/channel/UCqiaFEL0g1TAFiK_x7acvRw"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-black"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                    <Link target="_blank" href="https://facebook.com/choomchambranding"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-black"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    <Link target="_blank" href="tel:0829429446">082-9429446</Link>
                </div>

                <div className='sm:hidden group w-6 h-6'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                    <ul className='duration-150 gap-5 group-hover:grid hover:grid hidden bg-white w-full py-3 px-3 top-[3rem] left-0 absolute'>
                        <Link className='hover:text-pink-600' href="/">
                            <li>Home</li>
                        </Link>
                        <Link className='hover:text-pink-600' href="/service">
                            <li>Services</li>
                        </Link>
                        <Link className='hover:text-pink-600' href="/works">
                            <li>Our Works</li>
                        </Link>
                        <Link className='hover:text-pink-600' href="/blog">
                            <li>Content</li>
                        </Link>
                        <Link className='hover:text-pink-600' href="/about">
                            <li>About us</li>
                        </Link>
                        <Link className='bg-pink-600  rounded-md drop-shadow-sm font-semibold hover:bg-pink-500 duration-150 p-2 text-white' href="/Analytics">
                            <li>Analytics</li>
                        </Link>
                        <li className="flex gap-2 py-5 sm:hidden ">
                            <Link target="_blank" href="https://lin.ee/5p0JD5t"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="text-black fill-current" width="24" height="24" viewBox="0 0 50 50">
                                <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"></path>
                            </svg></Link>
                            <Link target="_blank" href="https://youtube.com/channel/UCqiaFEL0g1TAFiK_x7acvRw"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-black"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                            <Link target="_blank" href="https://facebook.com/choomchambranding"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-black"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                            <Link target="_blank" href="tel:0829429446">082-9429446</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Navbar