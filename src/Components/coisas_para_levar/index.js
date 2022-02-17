import styled from 'styled-components';
import frutas1 from '../Imagens/frutas1.jpg';

const Coisas_para_levar = ()=>{
    return(
        <>
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Praia ou lugares quentes
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">- Roupas de banho;
      - Toalhas;
      - Regatas ou camisas de manga curta;
      - Shorts/bermudas;
      - Uma calça para emergências;
      - Um casaco(podendo ser fino ou grosso) para emergências;
      - Chinelo
      - Sapato do seu interesse(tênis, sandália, etc);
      - Capinha a prova d'água(se tiver);
      - Óculos escuros;
      - Meias. <code></code></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Neve ou lugares frios
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">- Casacos(um fino e pelo menos um grosso);
      - Botas ou um sapato grosso;
      - Blusas de manga comprida;
      - Calças;
      - Luvas, cachecol, gorro e entre outros. <code></code> </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Coisas extras para levar
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">- Protetor solar;
      - Creme pra cabelo;
      - Hidratante;
      - Uma bolsa de mão(se não estiver carregando uma já);
      - Protetor labial;
      - Fones de ouvido;
      - Chicletes ou balas;
      - Escova de cabelo;
      - Escova de dente;
      - Roupas íntimas
      - Prendedor de cabelo;
      - Pasta de dente;
      - Cartão de crédito e dinheiro;
      - Entre outros.<code></code> </div>
    </div>
  </div>
</div>
        <ImagemFrutas src ={frutas1}/>
        </>
    );
}

export default Coisas_para_levar;

const ImagemFrutas = styled.img`
width: 100vw;
height: 92vh;

`;