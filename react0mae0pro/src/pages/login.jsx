import {Link} from 'react-router-dom'
import imagen from 'media/loginIMG.png'
import React from 'react'

const Login=() => {
    return(
        <form className="formulario">
            <p className="centrado">
                <h1></h1>
                <img src={imagen}/>
            </p>
                <div className="contenedor">
                    <p>
                        Para poder ingresar al sistema se debe validar sus credenciales en el siguiente formulario
                    </p>
                    <div className="input-contenedor"> 
                        <i className="fas fa-envelope icon"></i>
                        <input type="text" placeholder="Digite su Gmail" 
                        oninvalid="this.setCustomValidity('Tienes que ingresar su Gmail!')" oninput="this.setCustomValidity('')"
                        required /> 
                    </div>
                    <div className="input-contenedor"> 
                        <i className="fas fa-key icon"></i>
                        <input type="password" placeholder="Digite su Contrasena" 
                        oninvalid="this.setCustomValidity('Tienes que ingresar su Contrasena!')" oninput="this.setCustomValidity('')"
                        required /> 
                    </div>
                    <a className= "button" href="IntMaeProd_V01.html"  target="_blank"> Ingresar</a>
                    <p style="margin-left: 50px;">¿No tienes cuenta? <a className= "link" href="Inter_Regis.html">Registrate</a>
                    </p>
                </div>
            
        </form>
    )
}