import './App.css'
import * as Phosphor from '@phosphor-icons/react'
import portrait from './assets/portrait.jpg'
import { useState } from 'react'
import LanguageSelector from './components/LanguageSelector'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState<'en' | 'de' | 'sv'>('en')
  return (
    <main className={darkMode ? 'dark' : ''}>

      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>

      <section className="hero">
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

        <p className="my-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo nec lorem tincidunt efficitur. Vivamus euismod, nisl vel tincidunt tincidunt, nibh erat feugiat ipsum, vitae fermentum mi urna at lectus.

          Praesent euismod, sapien non facilisis consequat, justo augue tincidunt libero, vitae consequat nisl lorem sed neque. Curabitur ullamcorper, lacus at tincidunt malesuada, erat lorem commodo arcu, at interdum sapien justo non erat.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

        </p>

        <p>
          You can reach me via{' '}
          <span className="underline">filippa@filippasteiner.com</span>
        </p>


        <div>
          <span>
            Elsewhere{' '}
          </span>
          <span className="underline">LinkedIn</span>
          <span>, </span>
          <span className="underline">GitHub</span>
        </div>
      </section>



      <section>
        <h4>Projects</h4>
        <div className="projects-row">

          <span>2025</span>
          <span>fastily</span>
          <Phosphor.Link size={14} />

          <span>2025</span>
          <span>exercly</span>
          <Phosphor.Link size={14} />

          <span>2023</span>
          <span>foodilicous</span>
          <Phosphor.Link size={14} />

          <span>2023</span>
          <span>Verbb</span>
          <Phosphor.Link size={14} />
        </div>

      </section>

      <section>
        <h4>Student Associations</h4>


        <div className="student-associations-row">
          <span>2026</span>
          <span>ETH Entrepreneur Club</span>
          <span>Incoming Member</span>


          <span>2026</span>
          <span>NSVZ</span>
          <span>Founder</span>


          <span>2026</span>
          <span>ESN</span>
          <span>Member of the Finance Committee</span>

        </div>


      </section>


      <section className="education">
        <h4>Education</h4>

        <div className="education-row">
          <span>2024-2028</span>
          <span>ETH Zürich</span>
          <span>BSc in Computer Science</span>
        </div>

        <div className="education-row">
          <span>2027-2027</span>
          <span>LTH</span>
          <span>Exchange Semester</span>
        </div>

        <div className="education-row">
          <span>2018-2024</span>
          <span>KSZ</span>
          <span>Swiss Matura</span>
        </div>

        <div className="education-row">
          <span>2020-2021</span>
          <span>I.E.S Victoria Kent</span>
          <span>Study Year Abroad</span>
        </div>
      </section>

      <img className="portrait" src={portrait} alt="Filippa Steiner" />

      <div className="plus-button">
        <Phosphor.Plus size={16} />
      </div>
    </main>
  )
}

export default App