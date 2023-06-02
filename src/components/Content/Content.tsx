import { useEffect } from "react";
import { useProvas } from "../../Contexts/ProvasContext";
import { ArticleContainer, ArticleTitle, Container, AsideContainer, ContentContainer, EmailPerfil, FotoPerfil, InfoPerfil, MaisInfoPerfil, NomePerfil, PerfilInfoContainer, ProvasContent } from "./styles"
import Provas from "../Provas/getProvas/Provas";
import PostProvas from "../Provas/postProvas/PostProvas";

export const Content = () => {
    const {allProvas, getProvas} = useProvas(); 

    useEffect(() => {
		getProvas(); 
	}, []);

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
                    <NomePerfil>
                        <span>Professor: </span> Victor Principe
                    </NomePerfil>
                    <MaisInfoPerfil>
                        <span>525.3265/02</span> <span style={{color: 'rgb(130, 28, 225)'}}>/ID</span>
                        <p> <span style={{color: 'rgb(130, 28, 225)' }}> Materia Responsável:  </span>Progamação com Arduínos</p>
                       <EmailPerfil>victorprincipe@fatec.sp.gov.br</EmailPerfil>
                    </MaisInfoPerfil>
                </InfoPerfil>

            </PerfilInfoContainer>
        </AsideContainer>
        <Container>
        <PostProvas />
        <ArticleContainer>
            <ArticleTitle>Calendário de avaliações</ArticleTitle>
            <hr/>
            <br/>
           {allProvas?.length > 0 ? 
           <ProvasContent>
            {allProvas?.map((item) => (
                <div>
					<Provas prova={item} key={item.id} />
                    
                </div>
				))}
           </ProvasContent>
            : <ProvasContent>Não há nada para mostrar</ProvasContent>}
        </ArticleContainer>    
        </Container>
    </ContentContainer>
  )
}
