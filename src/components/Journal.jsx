import { useState } from 'react'
import entry1 from './entries/entry1.js';
import entry2 from './entries/entry2.js';
import entry3 from './entries/entry3.js';
import entry4 from './entries/entry4.js';
import entry5 from './entries/entry5.js';
import entry6 from './entries/entry6.js';
import entry7 from './entries/entry7.js';
import entry8 from './entries/entry8.js';
import bullet from "../images/_sealdeal_.gif";



const Journal = () => {

  const entries = [entry1,entry2,entry3,entry4,entry5,entry6,entry7,entry8];

  const [page, setPage] = useState({});
  
  return(
    <div className="book">
      <ul>
        {entries.map((entry, index)=>(
          <li className="entry" key={entry[0].split(' ')[0]+index}>
            <h3 onClick={()=>setPage(entry)}>
              {<img src={bullet} alt="bullet" />}
              {entry[0].toLowerCase()}
              </h3>
          </li>
        ))}
      </ul>
      <div className="page">
          {Object.keys(page).map((p, index)=> (
            <p key={p+index}>
              {page[p]}
            </p>
          ))}
      </div>
    </div>
  )
}

export default Journal