import React, { useState } from 'react';
import MyTable from './components/SpreadSheet'
import AddForm from './components/InputForm'
import './App.css'

function App() {
  const [data, setData] = useState([
    {
      jobLink: 'Link',
      companyName: 'A',
      jobTitle: 'B',
      dateApplied: '05/28/25',
      status: 'Pending',
      followUpDate: '06/15/25',
      notes: '. . .',
    },
  ]);

  return (
    <>
    <div>
      <div className='Title'>Ami's Job Quest</div>
      <AddForm setData={setData} />
      <MyTable data={data} />
    </div>
    </>
  )
}

export default App
