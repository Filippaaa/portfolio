import './App.css'

function App(){
  return (
    <main>
      <section className="hero">
      <h1>Filippa Emelie Matilda Steiner</h1>
      <p>Last updated: September 5, 2026</p>
      <p>[About me]</p>
      </section>


      <section>
        <h4>Projects</h4>
      </section>

      <section class="education">
        <h4>Education</h4>

        <div class="education-row">
          <span>ETH Zürich</span>
          <span>BSc in Computer Science</span>
        </div>

        <div class="education-row">
          <span>LTH</span>
           <span>Exchange Semester</span>
        </div>

       <div className="education-row">
           <span>KSZ</span>
           <span>Swiss Matura</span>
       </div>

        <div className="education-row">
           <span>I.E.S Victoria Kent</span>
           <span>Study Year Abroad</span>
       </div>
      </section>



    </main>
  )
}

export default App