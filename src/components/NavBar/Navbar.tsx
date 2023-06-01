import { Container, Logo, NomeContainer } from "./styles"

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
