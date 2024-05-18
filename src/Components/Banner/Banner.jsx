import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>

            <div className=' border col-span-2'>
                <div className="carousel w-full h-[450px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/mtkHxTd/vb1.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/FWSS4pR/vb5.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/x1ywcWp/vb2.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/w6nkR5t/vb3.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/S5bb5sy/vb4.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' border col-span-1 p-5 bg-gray-100'>
                <h1 className="text-3xl text-center font-semibold ">Upcoming Campaigns</h1>
                <Marquee>
                1. NEXTZEN LIMITED 2. DATASOFT SYSTEMS BANGLADESH LIMITED 3. BJIT LIMITED 4. ENOSIS SOLUTIONS KAZ SOFTWARE
                5. CEFALO BANGLADESH LTDCEFALO BANGLADESH LTD 5. CEFALO BANGLADESH LTD 6. TIGERIT BANGLADESH LTD.
                </Marquee>
                <div>
                    <h1 className='text-3xl text-center font-semibold mt-20'>OUR HAPPY CLIENT</h1>
                <Marquee className=''>
                1. NEXTZEN LIMITED 2. DATASOFT SYSTEMS BANGLADESH LIMITED 3. BJIT LIMITED 4. ENOSIS SOLUTIONS KAZ SOFTWARE
                5. CEFALO BANGLADESH LTDCEFALO BANGLADESH LTD 5. CEFALO BANGLADESH LTD 6. TIGERIT BANGLADESH LTD.
                </Marquee>
                </div>
            </div>
        </div>


    );
};

export default Banner;