import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [tabData, setTabData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const responseData = await response.json()

      setTabData(responseData);
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
   
  const handleTab = (index) => {
    setActiveTab(index)
  } 

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {tabData.map(({ company, id }, index) => {
            const isActiveBtn = (activeTab === index) ? 'active-btn': '';
            return (
              <button key={"item-" + id} className={'job-btn ' + isActiveBtn} onClick={() => handleTab(index)}>{company}</button>
            )
          })}
        </div>
        <article key={tabData[activeTab].id} className='job-info'>
          <h3>{tabData[activeTab].title}</h3>
          <h4>{tabData[activeTab].company}</h4>
          <p className='job-date'>{tabData[activeTab].dates}</p>
          {tabData[activeTab].duties.map((duty, id) => {
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
