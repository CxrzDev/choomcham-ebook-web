"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Accordion, AccordionItem } from "@nextui-org/react";
import { useEffect } from "react";


export default function NavigationBar(props: { current: String }) {
    var currentPage = parseInt(props.current.toString());
    // if (currentPage > 0 || currentPage < 4)
    //     currentPage = 0;
    const activeList = [" ", " ", " ", " "];
    activeList[currentPage] = "shadow-lg shadow-[--pink] bg-[--pink] hover:text-white hover:bg-[--pink]  text-white rounded-lg border-[--pink]";
    useEffect(function mount() {
        function onScroll() {
            const nav = document.getElementById("nav");
            console.log(window.scrollY)
            if (window.scrollY > 50 && !nav?.classList.contains('bg-white/80')) {


                nav?.classList.add("bg-white/80");
                nav?.classList.add("text-black");
                // nav?.classList.remove("text-white");


            } else if (window.scrollY < 100 && nav?.classList.contains('bg-white/80')) {
                nav?.classList.remove("text-black");
                nav?.classList.remove("bg-white/80");
                // nav?.classList.add("text-white");

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
        
        <div className=" z-10 top-0 w-full flex justify-around glass sticky  " id="nav">

            <div className={"navbar px-10 sm:px-20  "}>
                <div className="navbar-start ">


                    <Link href="/">
                        <div className="pr-10"><img src="/images/cropped-logo.png" alt="" />
                            {/* <img src="https://www.choomcham.com/assets/images/4277eb7d.png" className='hidden' alt="" /> */}
                        </div>
                    </Link>
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div> */}


                </div>
                <div className="navbar-center sm:flex  gap-10 hidden ">
                    <ul className=' gap-5 hidden font-medium sm:flex items-center'>

                        {/* <div className={'hover:bg-pink-400/10' + activeList[0] + '  hover:text-[--pink]  rounded-lg px-4 py-2 duration-200 relative group cursor-default'} >
                            <li>Consult & Courses</li>

                            <div className="rounded-2xl  p-5 absolute bg-white/80 w-[200px]  group-hover:text-black glass scale-0 group-hover:scale-100 translate-y-3 duration-200  ">
                                <a href="/service">
                                    <li className="p-3 rounded-xl hover:bg-pink-400/10 w-full hover:text-[--pink] ">Consult</li>
                                </a>
                                <a href="/service/consult">
                                    <li className="p-3 rounded-xl hover:bg-pink-400/10 w-full hover:text-[--pink] ">Courses</li>
                                </a>
                            </div>
                        </div> */}
                        <a className={'hover:bg-pink-400/10' + activeList[0] + '  hover:text-[--pink]  rounded-lg px-4 py-2 duration-200'} href="/courses/3m">
                            <li>3 Minutes Story</li>
                        </a>
                        <a className={'hover:bg-pink-400/10' + activeList[2] + '  hover:text-[--pink]  rounded-lg px-4 py-2 duration-200'} href="/articles">
                            <li>Articles</li>
                        </a>
                        <a className={'hover:bg-pink-400/10' + activeList[1] + '  hover:text-[--pink]  rounded-lg px-4 py-2 duration-200'} href="/testimonials">
                            <li>Testimonials</li>
                        </a>
                        <a className={'hover:bg-pink-400/10' + activeList[3] + '  hover:text-[--pink]  rounded-lg px-4 py-2 duration-200'} href="/about">
                            <li>About us</li>
                        </a>

                    </ul>
                </div>

                {/*?? SIDE BAR PART */}
                <div className="navbar-end drawer drawer-end">
                    {/* <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button> */}
                    <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                    <div className="drawer-content flex items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="drawer-button btn-ghost p-2 duration-150 rounded-md block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><a href="/">Home</a></li>
                            <li><a href="/courses/3ms">3 Minutes Story</a></li>
                            <li><a href="/service">Courses</a></li>
                            <li><a href="/service/consult">Consults</a></li>
                            {/* <li className="text-[12px]">
                                <Accordion >
                                    <AccordionItem key="anchor" aria-label="Consult & Course" className="text-[12px] w-full"  title="Consult & Course">
                                        <li><a href="/service">Couses</a></li>
                                        <li><a href="/service/consult">Consults</a></li>
                                    </AccordionItem>
                                
                                </Accordion>
                            </li> */}

                            <li><a href="/articles">Articles</a></li>
                            <li><a href="/testimonials">Testimonials</a></li>
                            <li><a href="/about">About Us</a></li>
                            {/* <li><a>Analystic</a></li> */}

                            <h4 className="pt-10">Contact us</h4>
                            <div className="grid gap-2 grid-flow-col items-center">
                                <a target="_blank" href="https://lin.ee/5p0JD5t">
                                    <Button isIconOnly={true}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="text-black fill-current" width="24" height="24" viewBox="0 0 50 50">
                                            <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"></path>
                                        </svg>
                                    </Button>
                                </a>
                                <a target="_blank" href="https://youtube.com/channel/UCqiaFEL0g1TAFiK_x7acvRw"><Button isIconOnly={true}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-black"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                                </Button></a>
                                <a target="_blank" href="https://facebook.com/choomchambranding"><Button isIconOnly={true}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-black"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                                </Button></a>
                                <a target="_blank" href="tel:0829429446"><Button >082-9429446</Button></a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        
        </>
        );
}