import styled from "styled-components";

const ContentContainer = styled.div`
    display: flex;
    height: 100%;
`
const AsideContainer = styled.aside`
    width: 20%;
    background-color: #2A1E47;
    padding: 20px;
    height:100vh;
`

const PerfilInfoContainer = styled.div`
    display: flex;
    background-color: #211834;
    border-radius: 10px;
    padding: 10px;
`

const FotoPerfil = styled.img`
    width:8em;
    height: 8em;
    border-radius: 500px;
    border:4px solid purple;
`

export const Content = () => {
  return (
    <ContentContainer>
        <AsideContainer>
            <PerfilInfoContainer>
                <div>
                    <FotoPerfil 
                    src="https://media.licdn.com/dms/image/D4E03AQGUbw7hkjq0rg/profile-displayphoto-shrink_800_800/0/1670509950722?e=1687996800&v=beta&t=f1Kmrwy4b9Zp4PDXG5QrS8Q9IzbHHq9ig1Dp2GTwd9c"
                    alt="Foto de perfil"
                    />
                </div>
                <div id="aluno-info">
                    <p id="nome-aluno">Victor Principe</p>
                    <div id="maisinfo-aluno">
                        <span>525.3265/02</span> <span style={{color: 'rgb(130, 28, 225)'}}>/RA</span>
                        <p> <span style={{color: 'rgb(130, 28, 225)' }}> 3º </span>Ciclo</p>
                        <p id="email-aluno">victorprincipe@fatec.sp.gov.br</p>
                    </div>
                </div>
            </PerfilInfoContainer>
        </AsideContainer>
    </ContentContainer>
  )
}
