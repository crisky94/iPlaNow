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
                        <span className="font-medium text-white whitespace-nowrap">Contact</span>
                        <i className="pi pi-send text-white"></i>
                    </button>
                    <button className="p-3 flex items-center justify-center w-22 gap-2 bg-blue-500 shadow-md rounded-md border-none cursor-pointer hover:bg-blue-600 transition duration-200">
                        <span className="font-medium text-white whitespace-nowrap">Reserve</span>
                        <i className="pi pi-thumbs-up-fill text-white"></i>
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
                        <span className="font-medium text-white whitespace-nowrap">Contact</span>
                        <i className="pi pi-send text-white"></i>
                    </button>
                    <button className="p-3 flex items-center justify-center w-22 gap-2 bg-blue-500 shadow-md rounded-md border-none cursor-pointer hover:bg-blue-600 transition duration-200">
                        <span className="font-medium text-white whitespace-nowrap">Reserve</span>
                        <i className="pi pi-thumbs-up-fill text-white"></i>
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
                        <span className="font-medium text-white whitespace-nowrap">Contact</span>
                        <i className="pi pi-send text-white"></i>
                    </button>
                    <button className="p-3 flex items-center justify-center w-22 gap-2 bg-blue-500 shadow-md rounded-md border-none cursor-pointer hover:bg-blue-600 transition duration-200">
                        <span className="font-medium text-white whitespace-nowrap">Reserve</span>
                        <i className="pi pi-thumbs-up-fill text-white"></i>
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

