import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Alert } from "../components/Alert";
import { Link } from "wouter";
import { BUTTON_VARIANTS, Button } from "../components/Button";


export const Login = () => {
  const {loginRequest, isError, message ,clearErrorMessage} = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div
      className="container-fluid vh-100 "
      style={{ backgroundColor: "#4cbcbf" }}
    >
      <div className="row h-100 ">
        <div className="col-12 col-md-8 offset-md-2 d-flex align-items-center ">
          <div className="card mb-3 p-1">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  className="img-fluid rounded-start"
                  src={require("../assets/cover_tiny.jpg")}
                  width="100%"
                  alt="cover"
                />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body text-center">
                  <h5 className="card-title">Bienvenido</h5>
                  <p className="form-text">
                    Comenzá a administrar tu presupuesto personal.
                  </p>
                  <p className="demo__text">¡Esta es una demostración sin base de datos. Por lo tanto algunas funciones no estarán disponibles.</p>
             
                  <form className="d-flex flex-column mb-4" onClick={clearErrorMessage}>
                    <div className="mb-3">
                    <input type="text" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control"/>
                    </div>
                    <div className="mb-3">
                    <input type="password" value={password} placeholder="Contraseña" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" />
                    </div>
                    <Button type="submit" size="normal" handle={async(e)=>{
                                                              e.preventDefault();
                                                              await loginRequest({email ,password});
                                                              }} text="Ingresar"/>
                  </form>
                  {message && <Alert message={message} isError={isError}/>}
                  <Link href="/register" onClick={clearErrorMessage}>¿No tienes un usuario? ¡Registrate aquí!</Link>  
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
