import { ArticleContainer, ArticleTitle, AsideContainer, CardProva, CardProvaDatas, CardProvaHeader, CardProvaInfo, CardProvaTipos, ContentContainer, EmailPerfil, FotoPerfil, InfoPerfil, MaisInfoPerfil, NomePerfil, PerfilInfoContainer } from "./styles"


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
