import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Med from './Med'
import Login from '../login/Login'

export default function Me() {

    const [data, setData] = useState([{ email: 'Admin', password: '123456' }])

    const [logined, setLogined] = useState(false)

    const [name, setName] = useState('')
    const [Pass, setPass] = useState('')

    function onLogin(email,password) {
        setLogined(!logined)
        setName(email)
        setPass(password)
    }

    function onRegister(email, password) {
        setData((old) => [...old, { email: email, password: password }])
    }

    console.log('data', data)

    return (
        <>
            {logined ? <Med onLogin={onLogin} name={name} Pass={Pass} /> : <Login onLogin={onLogin} data={data} setLogined={setLogined} onRegister={onRegister} />}
        </>
    )
}
