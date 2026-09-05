import './App.css'
import portrait from './assets/portrait.jpg'
import { useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import BuildInfo from './components/PlusInfo.tsx'
import { SquareArrowOutUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
    const [darkMode, setDarkMode] = useState(false)
    const [language, setLanguage] = useState<'en' | 'de' | 'sv'>('en')
    const [buildInfoOpen, setBuildInfoOpen] = useState(false)

    return (
        <main className={`${darkMode ? 'dark' : ''} mt-[100px] mb-5`}>

            <section>
                <div className="flex w-full items-center justify-between">
                    <h1 className="page-title">
                        Filippa Emelie Matilda Steiner
                    </h1>

                    <LanguageSelector
                        language={language}
                        setLanguage={setLanguage}
                    />
                </div>

                <p className="my-0">Zurich, Switzerland</p>
                <p className="-mt-1">Last updated: September 5, 2026</p>
            </section>

            <section className="mt-2 mb-0">
                <p className="m-0 text-black leading-snug">
                    I am currently pursuing my Bachelor’s in Computer Science at ETH Zürich.
                </p>

                <p className="m-0 text-black leading-snug">
                    I’m interested in both technology and research. I love working on anything that seems meaningful, interesting, or exciting.
                </p>

                <p className="m-0 text-black leading-snug">
                    I'm fond of driven people who have a vision for what they want to create.
                </p>
            </section>

            <section className="mt-4">
                <p className="m-0 leading-tight text-black">
                    You can reach me via{' '}
                    <a
                        href="mailto:filippa@filippasteiner.com"
                        className="underline text-black"
                    >
                        filippa@filippasteiner.com
                    </a>

                    <span className="text-black">, or elsewhere: </span>

                    <a
                        href="https://www.linkedin.com/in/filippasteiner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-black"
                    >
                        LinkedIn
                    </a>

                    <span>, </span>

                    <a
                        href="https://github.com/Filippaaa.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-black"
                    >
                        GitHub
                    </a>

                    <span className="text-black">.</span>
                </p>
            </section>

            <section className="mt-4 mb-2">
                <h4 className="section-title">Projects</h4>

                <div>
                    <Link
                        to="/fastily"
                        className="grid grid-cols-[80px_200px_1fr_auto]"
                    >
                        <span>2025</span>
                        <span>fastily</span>
                        <span>iOS App</span>
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </Link>

                    <Link
                        to="/exercly"
                        className="grid grid-cols-[80px_200px_1fr_auto]"
                    >
                        <span>2025</span>
                        <span>exercly</span>
                        <span>Web App</span>
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </Link>

                    <Link
                        to="/foodilicous"
                        className="grid grid-cols-[80px_200px_1fr_auto]"
                    >
                        <span>2023</span>
                        <span>foodilicous</span>
                        <span>iOS App</span>
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </Link>

                    <Link
                        to="/verbb"
                        className="grid grid-cols-[80px_200px_1fr_auto]"
                    >
                        <span>2023</span>
                        <span>Verbb</span>
                        <span>iOS App</span>
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </Link>
                </div>
            </section>

            <section className="mt-4 mb-2">
                <h4 className="section-title">Student Associations</h4>

                <div className="grid grid-cols-[80px_200px_1fr_auto]">
                    <span>2026</span>
                    <span>ETH Entrepreneur Club</span>
                    <span>Incoming Member</span>
                    <a
                        href="https://www.entrepreneur-club.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </a>
                </div>

                <div className="grid grid-cols-[80px_200px_1fr_auto]">
                    <span>2026</span>
                    <span>NSVZ</span>
                    <span>Founder</span>
                    <a
                        href="https://nsvz.ch/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </a>
                </div>

                <div className="grid grid-cols-[80px_200px_1fr_auto]">
                    <span>2026</span>
                    <span>ESN</span>
                    <span>Member of the Finance Committee</span>
                    <a
                        href="https://zurich.esn.ch/w/team"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </a>
                </div>
            </section>

            <section className="mt-4 mb-2">
                <h4 className="section-title">Education</h4>

                <div className="grid grid-cols-[80px_200px_1fr_auto]">
                    <span>2027</span>
                    <span>LTH</span>
                    <span>Exchange Semester</span>
                    <a
                        href="https://www.lth.se/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </a>
                </div>

                <div className="grid grid-cols-[80px_200px_1fr_auto]">
                    <span>2024</span>
                    <span>ETH Zürich</span>
                    <span>BSc in Computer Science</span>
                    <a
                        href="https://ethz.ch/en.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </a>
                </div>

                <div className="grid grid-cols-[80px_200px_1fr_auto]">
                    <span>2020</span>
                    <span>I.E.S Victoria Kent</span>
                    <span>Study Year Abroad</span>
                    <a
                        href="https://www.iesvictoriakentmarbella.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </a>
                </div>

                <div className="grid grid-cols-[80px_200px_1fr_auto]">
                    <span>2018</span>
                    <span>KSZ</span>
                    <span>Swiss Matura</span>
                    <a
                        href="https://ksz.ch/de"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SquareArrowOutUpRight size={14} strokeWidth={1.5} />
                    </a>
                </div>
            </section>

            <img
                className="portrait mt-4 mb-2"
                src={portrait}
                alt="Filippa Steiner"
            />

            <BuildInfo
                open={buildInfoOpen}
                setOpen={setBuildInfoOpen}
            />

        </main>
    )
}

export default Home