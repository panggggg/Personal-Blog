import Navbar from "../components/navbar/navbar"
import Image from "next/image"

const Home = () => (
    <div>
        <Navbar></Navbar>
        <div className="p-4 rounded-lg drop-shadow-2xl">
        <div className="bg-gray-50">
        <div className="grid grid-cols-2 pl-4 pr-4 pt-10 pb-10">
            <div className="grid gird-rows2">
                <span className="pl-6">
                    <h1 className="text-2xl font-blog">Latest Blog</h1>
                </span>
                <span>
                    <div className=" p-5 pb-5 pt-5">
                    <div className="bg-white rounded-lg shadow-2xl">
                        <div className="grid grid-cols-2"> 
                        <Image
                            src="/431/074/000/qxkvb26k9TZB9avJjLV-o.jpg"
                            alt="Picture of the author"
                            width="500"
                            height="500"
                        />

                            <h1>text</h1>
                        </div>
                    </div>
                </div>
                </span>
                <span>
                <div className=" p-5 pb-5 pt-5">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                    <h1>This is blog</h1>
                </div>
                 </div>
                </span>
                <span>
                <div className=" p-5 pb-5 pt-5">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                    <h1>This is blog</h1>
                </div>
                 </div>
                </span>
            </div>
            <div className="grid gird-rows-1">
                <span>
                <div className=" p-5 pb-5 pt-5 pl-20">
                <div className="bg-white shadow-2xl">
                    <h1 className="flex justify-center items-center bg-blue-200 text-xl font-blog text-2xl p-3">About</h1>
                    <h1>About</h1>
                </div>
            </div>
                </span>
            </div>
        </div>
    </div>
    </div>
    </div>

)

export default Home