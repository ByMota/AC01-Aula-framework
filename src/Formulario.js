import './Formulario'
import React from 'react';
import { Link } from "react-router-dom";

export default function Formulario(){
    return (
        <div>
            <h1>Formulário</h1>
            <forms>
              <label>Nome</label>
              <input></input>
              <br></br>
            </forms>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}
