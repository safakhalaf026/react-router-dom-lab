import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import NavBar from './components/Navbar/Navbar'
import MailBoxDetails from './pages/MailboxDetails/MailboxDetails'
import MailBoxForm from './pages/MailboxForm/MailboxForm'
import MailboxList from './pages/MailboxList/MailboxList'

function App() {

  return (
    <>
    <div>
      <NavBar/>
      <h1>MailBoxes</h1>
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>}/>
        <Route path="/mailboxes" element={	<MailboxList />}/>
        <Route path="/new-mailbox" element={<MailBoxForm />}/>
        {/* <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />}/> */}
      </Routes>
    </div>
    </>
  )
}

export default App
