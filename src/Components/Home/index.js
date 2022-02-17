import styled from 'styled-components';
import quarto1 from '../Imagens/quarto1.jpg';

const Home = ()=>{
    return(
        <>
        <ImagemQuarto src ={quarto1}/>
        </>
    );
}

export default Home;

const ImagemQuarto = styled.img`
width: 100vw;
height: 92vh;

`;