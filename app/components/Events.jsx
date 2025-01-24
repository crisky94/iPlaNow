import "primeicons/primeicons.css";


export default function Events() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--style-bg)] gap-4">

            <div className="p-2 rounded-xl bg-[var(--style-cards-fancy-bg)] border border-[rgba(255,255,255,0.1)] bg-blend-normal color-dodge w-[300px]">
                <div className="content rounded-md">
                    <div
                        className="content-image bg-cover bg-no-repeat bg-center relative h-[244px]"
                        style={{
                            backgroundImage: 'url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/fancy.jpg")',
                        }}
                    >
                        {/* <div className="rating mt-2 rounded-md absolute ml-2 p-2 flex items-center gap-2 bg-black bg-opacity-20 w-32 backdrop-blur-[27px]">
        <span className="text-white">★</span> 
        <span className="text-white">★</span> 
        <span className="text-white">★</span> 
        <span className="text-white">★</span> 
        <span className="text-gray-600">★</span> 
        
        </div> */}
                    </div>
                    <div className="content-info mt-2 rounded-md bg-white bg-opacity-10 shadow-md py-1 backdrop-blur-[27px]">
                        <div className="flex items-center justify-between py-2 px-3">
                            <span className="font-medium text-white">Prime Coffee Shop</span>
                            <i className="pi pi-verified text-white"></i>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 gap-2">
                            <div className="flex items-center gap-2">
                                <i className="pi pi-star-fill text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Cold Brew</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="pi pi-star-fill text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">10:00 - 17:00</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 gap-2">
                            <div className="flex items-center justify-center gap-1 border-r border-surface-border pr-2">
                                <i className="pi pi-bolt text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Charge</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 border-r border-surface-border px-2">
                                <i className="pi pi-wifi text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Wifi</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 pl-2">
                                <i className="pi pi-book text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Library</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-2 gap-2">
                        <button className="p-3 flex items-center justify-center w-28 gap-2 rounded-md bg-white bg-opacity-10 shadow-md border-none cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-200 backdrop-blur-[27px]">
                            <span className="font-medium text-white whitespace-nowrap">Info</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.7533 17.2467 2.5 12 2.5C6.7533 2.5 2.5 6.7533 2.5 12C2.5 17.2467 6.7533 21.5 12 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.0053 17.2778V10.9445" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.9562 7.44263H11.9651" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>                       </button>
                        <button className="p-3 flex items-center justify-center w-22 gap-2 bg-blue-500 shadow-md rounded-md border-none cursor-pointer hover:bg-blue-600 transition duration-200">
                            <span className="font-medium text-white whitespace-nowrap">Reserve</span>
                            <span className="material-symbols-outlined">
                                calendar_add_on
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-2 rounded-xl bg-[var(--style-cards-fancy-bg)] border border-[rgba(255,255,255,0.1)] bg-blend-normal color-dodge w-[300px]">
                <div className="content rounded-md">
                    <div
                        className="content-image bg-cover bg-no-repeat bg-center relative h-[244px]"
                        style={{
                            backgroundImage: 'url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/fancy.jpg")',
                        }}
                    >
                        {/* <div className="rating mt-2 rounded-md absolute ml-2 p-2 flex items-center gap-2 bg-black bg-opacity-20 w-32 backdrop-blur-[27px]">
        <span className="text-white">★</span> 
        <span className="text-white">★</span> 
        <span className="text-white">★</span> 
        <span className="text-white">★</span> 
        <span className="text-gray-600">★</span> 
        
        </div> */}
                    </div>
                    <div className="content-info mt-2 rounded-md bg-white bg-opacity-10 shadow-md py-1 backdrop-blur-[27px]">
                        <div className="flex items-center justify-between py-2 px-3">
                            <span className="font-medium text-white">Prime Coffee Shop</span>
                            <i className="pi pi-verified text-white"></i>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 gap-2">
                            <div className="flex items-center gap-2">
                                <i className="pi pi-star-fill text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Cold Brew</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="pi pi-star-fill text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">10:00 - 17:00</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 gap-2">
                            <div className="flex items-center justify-center gap-1 border-r border-surface-border pr-2">
                                <i className="pi pi-bolt text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Charge</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 border-r border-surface-border px-2">
                                <i className="pi pi-wifi text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Wifi</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 pl-2">
                                <i className="pi pi-book text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Library</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-2 gap-2">
                        <button className="p-3 flex items-center justify-center w-28 gap-2 rounded-md bg-white bg-opacity-10 shadow-md border-none cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-200 backdrop-blur-[27px]">
                            <span className="font-medium text-white whitespace-nowrap">Info</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.7533 17.2467 2.5 12 2.5C6.7533 2.5 2.5 6.7533 2.5 12C2.5 17.2467 6.7533 21.5 12 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.0053 17.2778V10.9445" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.9562 7.44263H11.9651" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>                       </button>
                        <button className="p-3 flex items-center justify-center w-22 gap-2 bg-blue-500 shadow-md rounded-md border-none cursor-pointer hover:bg-blue-600 transition duration-200">
                            <span className="font-medium text-white whitespace-nowrap">Reserve</span>
                            <span className="material-symbols-outlined">
                                calendar_add_on
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-2 rounded-xl bg-[var(--style-cards-fancy-bg)] border border-[rgba(255,255,255,0.1)] bg-blend-normal color-dodge w-[300px]">
                <div className="content rounded-md">
                    <div
                        className="content-image bg-cover bg-no-repeat bg-center relative h-[244px]"
                        style={{
                            backgroundImage: 'url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/fancy.jpg")',
                        }}
                    >
                        {/* <div className="rating mt-2 rounded-md absolute ml-2 p-2 flex items-center gap-2 bg-black bg-opacity-20 w-32 backdrop-blur-[27px]">
        <span className="text-white">★</span> 
        <span className="text-white">★</span> 
        <span className="text-white">★</span> 
        <span className="text-white">★</span> 
        <span className="text-gray-600">★</span> 
        
        </div> */}
                    </div>
                    <div className="content-info mt-2 rounded-md bg-white bg-opacity-10 shadow-md py-1 backdrop-blur-[27px]">
                        <div className="flex items-center justify-between py-2 px-3">
                            <span className="font-medium text-white">Prime Coffee Shop</span>
                            <i className="pi pi-verified text-white"></i>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 gap-2">
                            <div className="flex items-center gap-2">
                                <i className="pi pi-star-fill text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Cold Brew</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="pi pi-star-fill text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">10:00 - 17:00</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 gap-2">
                            <div className="flex items-center justify-center gap-1 border-r border-surface-border pr-2">
                                <i className="pi pi-bolt text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Charge</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 border-r border-surface-border px-2">
                                <i className="pi pi-wifi text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Wifi</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 pl-2">
                                <i className="pi pi-book text-white"></i>
                                <span className="text-sm text-white whitespace-nowrap">Library</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-2 gap-2">
                        <button className="p-3 flex items-center justify-center w-28 gap-2 rounded-md bg-white bg-opacity-10 shadow-md border-none cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-200 backdrop-blur-[27px]">
                            <span className="font-medium text-white whitespace-nowrap">Info</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.7533 17.2467 2.5 12 2.5C6.7533 2.5 2.5 6.7533 2.5 12C2.5 17.2467 6.7533 21.5 12 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.0053 17.2778V10.9445" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.9562 7.44263H11.9651" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>                       </button>
                        <button className="p-3 flex items-center justify-center w-22 gap-2 bg-blue-500 shadow-md rounded-md border-none cursor-pointer hover:bg-blue-600 transition duration-200">
                            <span className="font-medium text-white whitespace-nowrap">Reserve</span>
                            <span className="material-symbols-outlined">
                                calendar_add_on
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

