import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const MailBoxForm = () => {
    const [formData, setFormData]= useState({
        owner:'',
        size:''
    })

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const newMailbox = await axios.post(import.meta.env.VITE_API_URL, formData)
            navigate('/mailboxes')
        } catch (error) {
            console.log(error)
        }
    }

    function handleChange(event){
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    useEffect(()=>{console.log(formData)},[formData])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="owner">Owner:</label>
            <input onChange={handleChange} value={formData.owner} name='owner' id='owner' type="text" />

            <label htmlFor="size">Size:</label>
            <input onChange={handleChange} value={formData.size} name='size' id='size' type="text" />

            <button>Create Mailbox</button>
        </form>
    </div>
  );
};

export default MailBoxForm;
