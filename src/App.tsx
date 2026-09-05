import './App.css'
import * as Phosphor from '@phosphor-icons/react'
import portrait from './assets/portrait.jpg'
import { useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import BuildInfo from './components/PlusInfo.tsx'
import { SquareArrowOutUpRight } from 'lucide-react'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState<'en' | 'de' | 'sv'>('en')
  const [buildInfoOpen, setBuildInfoOpen] = useState(false)

  return (
    <main className={`${darkMode ? 'dark' : ''} mt-[100px] mb-5`}>

      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>

      <section>
        <div className="flex w-full items-center justify-between">
          <h1>Filippa Emelie Matilda Steiner</h1>
          <LanguageSelector
            language={language}
            setLanguage={setLanguage}
          />
        </div>
        <p>Last updated: September 5, 2026</p>
      </section>
      <section>

        <p className="my-[10px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo nec lorem tincidunt efficitur. Vivamus euismod, nisl vel tincidunt tincidunt, nibh erat feugiat ipsum, vitae fermentum mi urna at lectus.

          Praesent euismod, sapien non facilisis consequat, justo augue tincidunt libero, vitae consequat nisl lorem sed neque. Curabitur ullamcorper, lacus at tincidunt malesuada, erat lorem commodo arcu, at interdum sapien justo non erat.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

        </p>

        <p className="text-black">
          You can reach me via{' '}
          <span className="underline text-black">filippa@filippasteiner.com</span>
        </p>


        <div>
          <span className="text-black">
            Elsewhere{' '}
          </span>
          <span className="underline text-black">LinkedIn</span>
          <span>, </span>
          <span className="underline text-black">GitHub</span>
        </div>
      </section>



      <section>
        <h4 className="font-semibold">Projects</h4>
        
        <div>
          <div className="grid grid-cols-[80px_200px_1fr_auto]">
            <span>2025</span>
            <span class="text-black">fastily</span>
            <span className="text-black">iOS App</span>
            <Phosphor.Link size={14} />
          </div>

          <div className="grid grid-cols-[80px_200px_1fr_auto]">
            <span>2025</span>
            <span class="text-black">exercly</span>
             <span className="text-black">Web App</span>
            <Phosphor.Link size={14} />
          </div>

          <div className="grid grid-cols-[80px_200px_1fr_auto]">
            <span>2023</span>
            <span class="text-black">foodilicous</span>
             <span className="text-black">iOS App</span>
            <Phosphor.Link size={14} />
          </div>

          <div className="grid grid-cols-[80px_200px_1fr_auto]">
            <span>2023</span>
            <span class="text-black">Verbb</span>
            <span className="text-black">iOS App</span>
            <Phosphor.Link size={14} />
          </div>
        </div>
      </section>

      <section>
        <h4 className="font-semibold">Student Associations</h4>


        <div className="grid grid-cols-[80px_200px_1fr_auto]">
          <span>2026</span>
          <span className="text-black">ETH Entrepreneur Club</span>
          <span className="text-black">Incoming Member</span>
          <a
            href="https://www.entrepreneur-club.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight size={14} strokeWidth={1.5}/>
          </a>
        </div>


        <div className="grid grid-cols-[80px_200px_1fr_auto]">
          <span>2026</span>
          <span className="text-black">NSVZ</span>
          <span className="text-black">Founder</span>
          <a
            href="https://nsvz.ch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight size={14} strokeWidth={1.5}/>
          </a>
        </div>


        <div className="grid grid-cols-[80px_200px_1fr_auto]">
          <span>2026</span>
          <span className="text-black">ESN</span>
          <span className="text-black">Member of the Finance Committee</span>
          <a
            href="https://zurich.esn.ch/w/team"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight size={14} strokeWidth={1.5}/>
          </a>
        </div>
      </section>


      <section>
        <h4 className="font-semibold">Education</h4>

        <div className="grid grid-cols-[80px_200px_1fr_auto]">
          <span>2024</span>
          <span className="text-black">ETH Zürich</span>
          <span className="text-black">BSc in Computer Science</span>
          <a
            href="https://ethz.ch/en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight size={14} strokeWidth={1.5}/>
          </a>
        </div>

        <div className="grid grid-cols-[80px_200px_1fr_auto]">
          <span>2027</span>
          <span className="text-black">LTH</span>
          <span className="text-black">Exchange Semester</span>
          <a
            href="https://www.lth.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight size={14} strokeWidth={1.5}/>
          </a>
        </div>

        <div className="grid grid-cols-[80px_200px_1fr_auto]">
          <span>2018</span>
          <span className="text-black">KSZ</span>
          <span className="text-black">Swiss Matura</span>
          <a
            href="https://ksz.ch/de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight size={14} strokeWidth={1.5}/>
          </a>
        </div>

        <div className="grid grid-cols-[80px_200px_1fr_auto]">
          <span>2020</span>
          <span className="text-black">I.E.S Victoria Kent</span>
          <span className="text-black">Study Year Abroad</span>
          <a
            href="https://www.iesvictoriakentmarbella.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight size={14} strokeWidth={1.5}/>
          </a>
        </div>
      </section>

      <img className="portrait mt-6" src={portrait} alt="Filippa Steiner" />

      <BuildInfo
        open={buildInfoOpen}
        setOpen={setBuildInfoOpen}
      />
    </main>
  )
}

export default App