import styled from "styled-components";

const Container = styled.header`
display: flex;
background-color: #110F17;
-webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
-moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
box-shadow: 0 3px 5px rgba(21, 23, 26, 0.423);
border-bottom: 1px solid rgb(43, 43, 43);
`

const Logo = styled.div`
width: 50%;
width: auto;
display: flex;
align-items: center;
padding: 1%;
`

const NomeContainer = styled.div`
text-align: right;
width:100%;
color:white;
`

export const Navbar = () => {
  return (
    <Container>
        <Logo> 
            <img id="logo" src="../images/fatec_logo.png" alt="logo do site"/>
        </Logo>
        
        <NomeContainer>
            <img src="https://siga.cps.sp.gov.br/aluno/Resources/LogoPs.png" alt="logo da instituição"/>
            <p>Nome da faculdade de Cidade</p>
            <p>Nome do curso - Status - Periodo</p>
        </NomeContainer>
    </Container>
  )
}
