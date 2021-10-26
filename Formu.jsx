function Formu (){
    return(
            <body>
                <form class="formulario">
                    <p class="centrado">
                        <h1></h1>
                        <h2></h2>
                        <img src="https://www.semana.com/resizer/a7zdk3tDM5ZmhPJf4KxbcphCloo=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/PGI44RONDBFNDO2WFDBBQFFABQ.jpg"></img>
                    </p>
                    <div class="contenedor">
                        <p>
                            Para poder ingresar al sistema se debe validar sus credenciales en el siguiente formulario:
                        </p>
                        <div class="input-contenedor"> 
                            <i class="fas fa-envelope icon"></i>
                            <input type="text" placeholder="Digite su Gmail" 
                            oninvalid="this.setCustomValidity('Tienes que ingresar su Gmail!')" oninput="this.setCustomValidity('')"
                            required /> 
                        </div>
                        <div class="input-contenedor"> 
                            <i class="fas fa-key icon"></i>
                            <input type="password" placeholder="Digite su Contrasena" 
                            oninvalid="this.setCustomValidity('Tienes que ingresar su Contrasena!')" oninput="this.setCustomValidity('')"
                            required /> 
                        </div>
                        <a class= "button" href="indexsiguiente.html"  target="_blank"> Ingresar</a>
                        <p style="margin-left: 50px;">¿No tienes cuenta? <a class= "link" href="Inter_Regis.html">Registrate</a>
                        </p>
                    </div>

                </form>
            </body>

    )
}

export default Formu;
