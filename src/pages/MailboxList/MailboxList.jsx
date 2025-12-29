import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router'

const MailboxList = () => {
    const [mailboxes, setMailboxes] = useState([])
    async function getMailboxList(){
        try {
            const MailboxList = await axios.get(`${import.meta.env.VITE_API_URL}/mailboxes`)
            setMailboxes(MailboxList.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getMailboxList()
    },[])
  return (
    <div>
    {mailboxes.map((eachMailbox)=>
        <div key={eachMailbox._id}>
                <p>{eachMailbox.owner}</p>
            <Link to={`/mailboxes/${eachMailbox._id}`}>See Mailbox Details</Link>
        </div>
    )}
    </div>
  );
};

export default MailboxList;
