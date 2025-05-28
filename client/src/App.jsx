import React, { useState } from 'react';
import MyTable from './components/SpreadSheet'
import AddForm from './components/InputForm'
import './App.css'

function App() {
  const [data, setData] = useState([
    {
      companyName: 'A',
      jobTitle: 'B',
      dateApplied: '05/27/25',
      status: 'Submitted',
      jobLink: 'Link',
      followUpDate: '06/15/25',
      notes: 'XYZ',
    },
  ]);

  return (
    <>
    <div>
      <AddForm setData={setData} />
      <MyTable data={data} />
    </div>
    </>
  )
}

export default App
