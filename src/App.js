import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [tabData, setTabData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const responseData = await response.json()

      setTabData(responseData);
      setActiveTab(responseData[0]);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>loading...</h1>
      </div>
    )
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          <button className='job-btn'>{activeTab.company}</button>
          <button className='job-btn'>{activeTab.company}</button>
          <button className='job-btn'>{activeTab.company}</button>
        </div>
        <article key={activeTab.id} className='job-info'>
          <h3>{activeTab.title}</h3>
          <h4>{activeTab.company}</h4>
          <p className='job-date'>{activeTab.dates}</p>

          {activeTab.duties.map((duty, id) => {
            return (
              <div key={id} className='job-desc'>
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type='button' className='btn'>more info</button>
    </section>
  );

}

export default App
