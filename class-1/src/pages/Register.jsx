import { useState, useEffect } from "react"
import { FaUser } from 'react-icons/fa'

const Register = () => {
    const  [formData, setFormData] = useState ({
        name: '',
        email: '',
        password: '',
        password2: '' //Es para confirmar que el password sea igual y no se les olvide
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, //Copia el estado anterior
            [e.target.name]: e.target.value //agrega estos valores
        }))
    }

    return (
        <>
            <section className="heading">
                <h4> <FaUser/> Register User</h4>
                <p>Please create a user</p>
            </section>
            <section>
                <div className="form">
                    <input type="text" 
                            className="form-control"
                            id='name'
                            name="name"
                            value={name}
                            placeholder="Please write your name"
                            onChange={onChange}
                    />
                </div>
            </section>
        </>
    )
}

export default Register