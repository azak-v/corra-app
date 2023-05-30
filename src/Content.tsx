import styled from "styled-components";



const ContentContainer = styled.div`
    display: flex;
    height: 100%;
`

const AsideContainer = styled.aside`
    width: 30%;
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

const InfoPerfil = styled.div`
    margin: auto 13px;
`

const NomePerfil = styled.p`
    font-size: 25px;
    color: #e1e1e6;
`

const MaisInfoPerfil = styled.div`
    margin-left: 1em;
    border-left: 2px solid rgb(130, 28, 225);
    padding-left: 10px;
`

const EmailPerfil = styled.p`
    font-size: 13px;
    color: #e1e1e6;
`

const ArticleContainer = styled.article`
    margin: 4% 4%;
    width: 50%;
`

const ArticleTitle = styled.h1`
    color: #f4f4fa;
    font-family: 'Quicksand', sans-serif;
`

const CardProva = styled.div`
    margin-bottom: 4%;
    margin-left: 4%;
    padding: 5%;
    padding-top: 2%;
    border-radius: 20px;
    background: #291d44;
    box-shadow:  12px 12px 23px #120d1f,
                 -12px -12px 23px #120d1f;  
`

const CardProvaHeader = styled.div`
    font-size: 18px;
    padding-left: 2%;    
    border-left:3px solid rgb(130, 28, 225);
`

const CardProvaInfo = styled.div`
    display: flex;
    margin-top: 4%;
`

const CardProvaTipos = styled.div`
    width: 50%;
`

const CardProvaDatas = styled.div`
    width: 50%;
    text-align: right;
    margin-right: 5%;
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

                <InfoPerfil>
                    <NomePerfil>Victor Principe</NomePerfil>
                    <MaisInfoPerfil>
                        <span>525.3265/02</span> <span style={{color: 'rgb(130, 28, 225)'}}>/RA</span>
                        <p> <span style={{color: 'rgb(130, 28, 225)' }}> 3º </span>Ciclo</p>
                       <EmailPerfil>victorprincipe@fatec.sp.gov.br</EmailPerfil>
                    </MaisInfoPerfil>
                </InfoPerfil>

            </PerfilInfoContainer>
        </AsideContainer>

        <ArticleContainer>
            <ArticleTitle>Calendário de avalialções</ArticleTitle>
            <hr/>
            <br/>
            <CardProva>
                <div>
                    <CardProvaHeader>
                        <h3 style={{color: "rgb(152, 100, 201)"}}>Nome da materia</h3>
                        <p >Turma ID</p>
                    </CardProvaHeader>

                    <CardProvaInfo>
                        <CardProvaTipos>
                            <span style={{color: "rgb(152, 100, 201)"}}>Tipo</span>
                            <p>Remoto no Teams</p>
                        </CardProvaTipos>
            
                        <CardProvaDatas>     
                            <span style={{color: "rgb(152, 100, 201)"}}>Data</span>
                            <p>13/04/23</p>
                        </CardProvaDatas>
                    </CardProvaInfo>
                </div>
            </CardProva>
        
        </ArticleContainer>    
    </ContentContainer>
  )
}
