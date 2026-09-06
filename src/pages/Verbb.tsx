import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import logo from '../assets/Verbb/Logo.png'
import image1 from '../assets/Verbb/Image1.jpg'
import image2 from '../assets/Verbb/Image2.jpg'
import image3 from '../assets/Verbb/Image3.jpg'

function Verbb() {
    return (
        <div className="relative mt-[100px] mb-5">
            <Link
                to="/"
                className="absolute -left-12 top-1"
            >
                <ArrowLeft size={18} strokeWidth={1.5} />
            </Link>

            <h1 className="page-title">Verbb</h1>

            <section className="my-2">
                <div className="flex gap-1">
                    <h5 className="m-0 text-black font-semibold text-[14px]">About:</h5>
                    <p className="m-0 text-black">
                        An iOS app for learning Spanish verbs and practicing their conjugation.
                    </p>
                </div>

                <div className="flex gap-1">
                    <h5 className="m-0 text-black font-semibold text-[14px]">Technologies:</h5>
                    <p className="m-0 text-black">Swift, SwiftUI, Firebase</p>
                </div>

                <div className="flex gap-1">
                    <h5 className="m-0 text-black font-semibold text-[14px]">Timeline:</h5>
                    <p className="m-0 text-black">2023–2024</p>
                </div>
            </section>

            {/*
            <p className="text-justify text-black my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet diam semper tempor tincidunt. Proin ligula odio, congue a eros id, laoreet viverra mauris. Nullam sed elit eu orci euismod semper at at erat. Aliquam at sem urna. Fusce maximus scelerisque augue, a dignissim sapien varius sit amet. Donec gravida metus ac mollis cursus. Pellentesque molestie, mauris at mattis interdum, lectus metus accumsan sapien, sed fringilla leo lorem sed ex. Ut quis placerat dolor. Phasellus nec nisl sed lectus hendrerit malesuada.
            </p>
            */}

            <div className="columns-2 gap-4 my-4">
                 <img className="mb-4 border border-gray-200 w-full" src={logo} alt="Verbb" />
                <img className="mb-4 border border-gray-200 w-full" src={image1} alt="Verbb" />
                <img className="mb-4 border border-gray-200 w-full" src={image2} alt="Verbb" />
                <img className="mb-4 border border-gray-200 w-full" src={image3} alt="Verbb" />
            </div>
        </div>
    )
}

export default Verbb