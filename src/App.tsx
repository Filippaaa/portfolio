import './App.css'
import * as Phosphor from '@phosphor-icons/react'
import portrait from './assets/portrait.jpg'

function App() {
  return (
    <main>
      <section className="hero">
        <h1>Filippa Emelie Matilda Steiner</h1>
        <p>Last updated: September 5, 2026</p>


      </section>
      <section>

        <div>
          <span className="underline">LinkedIn</span>
          <span> • </span>
          <span className="underline">GitHub</span>
        </div>

        <p>
          You can reach me via
          <span className="underline">filippa@filippasteiner.com</span>
        </p>
      </section>

      <section>
        <h4>Projects</h4>
        <div className="projects-row">

          <span>2025</span>
          <span>fastily</span>
          <Phosphor.Link size={24} />

          <span>2025</span>
          <span>exercly</span>
          <Phosphor.Link size={24} />

          <span>2023</span>
          <span>foodilicous</span>
          <Phosphor.Link size={24} />

          <span>2023</span>
          <span>Verbb</span>
          <Phosphor.Link size={24} />
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

      <img className="portrait" src={portrait} alt="Filippa Steiner"/>

      <div className="plus-button">
        <Phosphor.Plus size={16} />
      </div>
    </main>
  )
}

export default App