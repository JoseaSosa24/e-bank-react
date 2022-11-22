import React from 'react'
import { Button } from './components/Button';
import { Img } from './components/Img';
import { Input } from './components/Input';
import './Login.css'

export const Login = () => {

    return (

        <main className=''>
            <Img />
            <section className='contendor-formulario' id=''>
                <form className='form-login' id=''>
                    <Input 
                        id= 'usuario'
                        name= 'usuario'
                        type= 'text'
                        placeholder= 'Digite su usuario'
                     />
                    <Input
                            id= 'contrasena'
                            name= 'contrasena'
                            type= 'password'
                            placeholder= 'Digite su contraseña'
                    />
                    <Button />
                </form>
            </section>

        </main>
    )
}
