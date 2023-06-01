import { useEffect } from "react";
import { useProvas } from "../../Contexts/ProvasContext";
import { ArticleContainer, ArticleTitle, AsideContainer, ContentContainer, EmailPerfil, FotoPerfil, InfoPerfil, MaisInfoPerfil, NomePerfil, PerfilInfoContainer } from "./styles"
import Provas from "../Provas/getProvas/Provas";
import PostProvas from "../Provas/postProvas/PostProvas";
import PutProvas from "../Provas/putProvas/putProvas";


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
            <ArticleTitle>Calendário de avaliações</ArticleTitle>
            <hr/>
            <br/>
           <PostProvas />
           <PutProvas />
            {allProvas?.map((item) => (
					<Provas prova={item} key={item.id} />
				))}
        </ArticleContainer>    
    </ContentContainer>
  )
}
