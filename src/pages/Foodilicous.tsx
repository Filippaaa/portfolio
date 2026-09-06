import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import Logo from '../assets/foodilicous/Logo.png'
import Explore from '../assets/foodilicous/Explore.jpg'
import Collections from '../assets/foodilicous/Collections.jpg'
import Porridge from '../assets/foodilicous/Porridge.jpg'
import Profile from '../assets/foodilicous/Profile.jpg'
import Upload from '../assets/foodilicous/Upload.jpg'
import Breakfasts from '../assets/foodilicous/Breakfasts.jpg'

function Foodilicous() {
    return (
        <div className="relative mt-[100px] mb-5">
            <Link
                to="/"
                className="absolute -left-12 top-1"
            >
                <ArrowLeft size={18} strokeWidth={1.5} />
            </Link>

            <h1 className="page-title">foodilicous</h1>

            <section className="my-2">
                <div className="flex gap-1">
                    <h5 className="m-0 text-black font-semibold text-[14px]">About:</h5>
                    <p className="m-0 text-black">
                        An iOS app for sharing, discovering and organizing recipes.
                    </p>
                </div>

                <div className="flex gap-1">
                    <h5 className="m-0 text-black font-semibold text-[14px]">Technologies:</h5>
                    <p className="m-0 text-black">Swift, SwiftUI, Firebase</p>
                </div>

                <div className="flex gap-1">
                    <h5 className="m-0 text-black font-semibold text-[14px]">Timeline:</h5>
                    <p className="m-0 text-black">2023–Present</p>
                </div>
            </section>

            <div className="columns-2 gap-4 my-4">
                <img className="mb-4 border border-gray-200 w-full" src={Logo} alt="fastily" />
                <img className="mb-4 border border-gray-200 w-full" src={Explore} alt="fastily" />
                 <img className="mb-4 border border-gray-200 w-full" src={Collections} alt="fastily" />
                  <img className="mb-4 border border-gray-200 w-full" src={Breakfasts} alt="fastily" />
                  <img className="mb-4 border border-gray-200 w-full" src={Porridge} alt="fastily" />
                  <img className="mb-4 border border-gray-200 w-full" src={Upload} alt="fastily" />
                  <img className="mb-4 border border-gray-200 w-full" src={Profile} alt="fastily" />
            </div>
        </div>
    )
}

export default Foodilicous