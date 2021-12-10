import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [tabData, setTabData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const response = await fetch(url);
      const responseData = await response.json()

      setTabData(responseData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    console.log(111)
    return (
      <div className='loading'>
        <h1>loading...</h1>
      </div>
    )
  }

  return(1)

}

export default App
