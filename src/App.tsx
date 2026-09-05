import './App.css'

function App() {
  return (
    <main>
      <section className="hero">
        <h1>Filippa Emelie Matilda Steiner</h1>
        <p>Last updated: September 5, 2026</p>


      </section>
      <section>

        <p>You can reach me via <span className="underline">LinkedIn</span></p>
      </section>

      <section>
        <h4>Projects</h4>
        <div className="projects-row">
          
          <span>2025</span>
          <span>fastily</span>
          <span>Icon</span>

          <span>2025</span>
          <span>exercly</span>
          <span>Icon</span>

          <span>2023</span>
          <span>foodilicous</span>
          <span>Icon</span>

          <span>2023</span>
          <span>Verbb</span>
          <span>Icon</span>
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
    </main>
  )
}

export default App