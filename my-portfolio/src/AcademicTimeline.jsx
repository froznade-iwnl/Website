const ACADEMICS = [
  {
    id: 'jc',
    years: '2024-2025',
    name: 'Victoria Junior College',
    note: 'Admission through DSA, took Computing, Mathematics, Physics in H2 level.',
    logoUrl: 'https://victoriajc.moe.edu.sg/images/VJCCrest.png',
    link: 'https://www.victoriajc.moe.edu.sg/',
  },
  {
    id: 'ss',
    years: '2022-2023',
    name: 'Clementi Town Secondary School',
    note: 'Joined in Sec 3. Outside of the compulsory subjects, I took Additional Mathematics, Physics, and Principles of Accounting.',
    logoUrl: 'https://www.diveanalytics.com/wp-content/uploads/2024/04/ctss.png',
    link: 'https://clementitownsec.moe.edu.sg/',
  },
  {
    id: 'ss',
    years: '2018-2021',
    name: 'SMP Al Hikmah Kota Surabaya',
    note: 'Studied under the Indonesian K13 System.',
    logoUrl: 'https://www.alhikmahsby.sch.id/assets/al-hikmah-logo.png',
    link: 'https://smp.alhikmahsby.sch.id/',
  },
  {
    id: 'ps',
    years: '2012-2018',
    name: 'SDIT At-Taqwa Surabaya',
    note: '',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmIQzUaMo64oTNw7If-E-sEt2hsU5gZwoFA5zBMbJq9kUdHM--Tv6YWKh5w4I7OUghX-znYrTikeX27dS-wtejMbNjrDsg&s&ec=121584914',
    link: 'https://sditattaqwasby.sch.id/',
  },
]

function AcademicTimeline() {
  return (
    <section className="academics" id="academics">
      <div className="container">
        {/* <div className="section-head">
          <h1 className="section-kicker">My Education</h1>
          <p className="eyebrow">Where I pursued my education</p>
        </div> */}

        <div className="academics-track">
          {ACADEMICS.map((item) => (
            <a
              key={item.id}
              className="academics-card"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="academics-logo">
                <img src={item.logoUrl} alt={`${item.name} logo`} />
              </div>
              <span className="academics-years">{item.years}</span>
              <h3 className="academics-name">{item.name}</h3>
              {/* <p className="academics-note">{item.note}</p> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicTimeline
