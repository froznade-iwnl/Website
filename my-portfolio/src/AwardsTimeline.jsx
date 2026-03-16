import * as React from 'react'

const AWARDS = [
  {
    year: 2025,
    items: [
      "[National Level] Distinction — International Mathematical Modelling Challenge (Singapore)",
      "[National Level] Participant — Cyberthon 2025",
      "[School Level] Best in H1 Malay Subject",
    ],
  },
  {
    year: 2024,
    items: [
      "[National Level] Bronze Medal — 27th National Olympiad in Informatics (NOI)",
      "[School Level] Victorian Going the Extra Mile (VGEM) Award",
    ],
  },
  {
    year: 2023,
    items: [
      "[National Level] Finalist — Splash Awards 2023",
      "[National Level] Outstanding Delegate — National Youth Environment Conference",
      "[National Level] Bronze Medal — 26th National Olympiad in Informatics (NOI)",
    ],
  },
  {
    year: 2022,
    items: [
      "[National Level] Silver — National Malay Oratorical Competition",
      "[National Level] Accomplishment Award — Digital for Life Youth Awards",
      "[National Level] 1st Prize — Singapore Mathematical Society Essay Competition",
      "[National Level] Bronze Award — Singapore Physics League",
      "[National Level] Participant — Singapore Junior Physics Olympiad",
      "[School Level] Participant — Singapore Mathematical Olympiad (Round 1)",
      "[Programme] Graduate — Swift Accelerator Programme 2022",
    ],
  },
]

// function AwardsTimeline() {
//   return (
//     <section className="awards" id="awards">
//       <div className="container">
//         <div className="section-head">
//           <h1 className="section-kicker">Awards</h1>
//           <h2 className="section-title">Things I've participated in.</h2>
//           {/* <p className="eyebrow">Year | Award</p> */}
//         </div>

//         <div className="awards-table">
//           {AWARDS.map((entry) => (
//             <div key={entry.year} className="awards-row">
//               <div className="awards-year">{entry.year}</div>
//               <div className="awards-items">
//                 {entry.items.map((item, index) => (
//                   <><h3 key={`${entry.year}-${index}`} className="awards-item">
//                     {item}
//                   </h3></>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

function AwardsTimeline() {
  const parseAward = (item) => {
    const match = item.match(/^\[(.*?)\]\s*(.*)$/)
    return {
      level: match ? match[1] : null,
      title: match ? match[2] : item,
    }
  }

  const levels = React.useMemo(() => {
    const allLevels = AWARDS.flatMap((entry) =>
      entry.items.map((item) => parseAward(item).level).filter(Boolean)
    )
    return ['All', ...Array.from(new Set(allLevels))]
  }, [])

  const [activeLevel, setActiveLevel] = React.useState('All')
  const [tableKey, setTableKey] = React.useState(0)

  const filteredAwards = React.useMemo(() => {
    if (activeLevel === 'All') return AWARDS
    return AWARDS.map((entry) => ({
      ...entry,
      items: entry.items.filter((item) => parseAward(item).level === activeLevel),
    })).filter((entry) => entry.items.length > 0)
  }, [activeLevel])

  return (
    <section className="awards" id="awards">
      <div className="container">
        <div className="section-head">
          <h1 className="section-kicker">My Achievements</h1>
          <p className='eyebrow'>Here are some of the competitions I've participated in</p>
        </div>

        <div className="projects-filter awards-filter">
          <span className="filter-label">Filter by level</span>
          <div className="filter-chips">
            {levels.map((level) => (
              <button
                key={level}
                className={`filter-chip ${activeLevel === level ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  setActiveLevel(level)
                  setTableKey((prev) => prev + 1)
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <table className="awards-table awards-table-animate" key={tableKey}>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Award</th>
              <th scope="col">Level</th>
            </tr>
          </thead>
          <tbody>
            {filteredAwards.map((entry, groupIndex) => {
              const middleIndex = Math.floor((entry.items.length - 1) / 2)
              return entry.items.map((item, index) => {
                const { level, title } = parseAward(item)
                return (
                  <tr
                    key={`${entry.year}-${index}`}
                    className={index === 0 && groupIndex > 0 ? 'awards-group-start' : ''}
                  >
                    <td className={`awards-year ${index === middleIndex ? '' : 'awards-year--empty'}`}>
                      {index === middleIndex ? entry.year : '—'}
                    </td>
                    <td className="award-title">{title}</td>
                    <td className="award-level-cell">{level || '—'}</td>
                  </tr>
                )
              })
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AwardsTimeline
