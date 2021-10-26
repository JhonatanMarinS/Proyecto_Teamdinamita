import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function InterRegis (){
    return(
            <body>
                    <p>
                        Para poder registrarse complete el siguiente formulario:
                    </p>
                <form class="formulario">
                    <h2></h2>
                    <h1>Datos Personales</h1>
                    <h3></h3>
                    <FontAwesomeIcon className="icon" icon={ faUser}/>
                        <div class="contenedor">
                            <div class="input-contenedor"> 
                                <label for="name" id="name-label">Nombre*:</label>
                                <input type="text" placeholder="Nombre"
                                oninvalid="this.setCustomValidity('Tienes que ingresar el nombre completo!')" oninput="this.setCustomValidity('')"
                                required /> 
                            </div>
                            <div class="input-contenedor"> 
                                <label for="name" id="name-label">Apellidos*:</label>
                                <input type="text" placeholder="Apellidos"
                                oninvalid="this.setCustomValidity('Tienes que ingresar el Apellido completo!')" oninput="this.setCustomValidity('')"
                                required /> 
                            </div>
                            <div class="input-contenedor">
                                <label for="name" id="name-label">Telefono*:</label>
                                <input type="text" placeholder="Telefono"
                                oninvalid="this.setCustomValidity('Tienes que ingresar un Telefono!')" oninput="this.setCustomValidity('')"
                                required />  
                            </div>
                            <div class="input-contenedor"> 
                                <label for="name" id="name-label">Fecha de nacimiento*:</label>
                                <input type="date" placeholder = "Fecha de Nacimiento"
                                oninvalid="this.setCustomValidity('Tienes que ingresar su Fecha de Nacimiento!')" oninput="this.setCustomValidity('')"
                                required />  
                            </div>
                            <div class="input-contenedor"> 
                                <label for="name" id="name-label">País:</label>
                                <input type="text" placeholder="País"
                                oninvalid="this.setCustomValidity('Tienes que ingresar un País!')" oninput="this.setCustomValidity('')"
                                required /> 
                            </div>
                            <div class="input-contenedor"> 
                                <label for="name" id="name-label">Correo Electronico*:</label>
                                <input type="text" placeholder="Correo Electronico"
                                oninvalid="this.setCustomValidity('Tienes que ingresar un Correo Electronico!')" oninput="this.setCustomValidity('')"
                                required />  
                            </div>
                            <a class= "button" href="IntMaeProd_V01.html"  target="_blank">Ingresar</a>
                    

                        </div>
                   
                </form>
            </body>
    )
}
    
export default InterRegis;
