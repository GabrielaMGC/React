import React from "react";
import './NavBar.css';
import aviao from '../Imagens/aviao.png'
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark navbar-site">
        <div class="container-fluid">
          <Aviao src={aviao}/>
          <Link to="/" class="Pagina_inicial">Início</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link to="/coisas_para_levar" class="nav-link active" >Coisas para levar</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Melhores hotéis</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mais itens
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Viagens curtas</a></li>
                  <li><a class="dropdown-item" href="#">Viagens longas</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Aeroportos</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active">Preços atuais</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2 pesquisar" type="search" placeholder="Pesquisar..." aria-label="Search"/>
              <button class="btn btn-outline-dark" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    )
}






  
export default Navbar;

const Aviao = styled.img`
    widht: 25px;
    height: 25px;
`;