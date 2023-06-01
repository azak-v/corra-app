import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    height: 100%;
`

export const AsideContainer = styled.aside`
    width: 30%;
    background-color: #2A1E47;
    padding: 20px;
    height:100vh;
`

export const PerfilInfoContainer = styled.div`
    display: flex;
    background-color: #211834;
    border-radius: 10px;
    padding: 10px;
`

export const FotoPerfil = styled.img`
    width:8em;
    height: 8em;
    border-radius: 500px;
    border:4px solid purple;
`

export const InfoPerfil = styled.div`
    margin: auto 13px;
`

export const NomePerfil = styled.p`
    font-size: 25px;
    color: #e1e1e6;
`

export const MaisInfoPerfil = styled.div`
    margin-left: 1em;
    border-left: 2px solid rgb(130, 28, 225);
    padding-left: 10px;
`

export const EmailPerfil = styled.p`
    font-size: 13px;
    color: #e1e1e6;
`

export const ArticleContainer = styled.article`
    margin: 4% 4%;
    width: 50%;
`

export const ArticleTitle = styled.h1`
    color: #f4f4fa;
    font-family: 'Quicksand', sans-serif;
`

export const CardProva = styled.div`
    margin-bottom: 4%;
    margin-left: 4%;
    padding: 5%;
    padding-top: 2%;
    border-radius: 20px;
    background: #291d44;
    box-shadow:  12px 12px 23px #120d1f,
                 -12px -12px 23px #120d1f;  
`

export const CardProvaHeader = styled.div`
    font-size: 18px;
    padding-left: 2%;    
    border-left:3px solid rgb(130, 28, 225);
`

export const CardProvaInfo = styled.div`
    display: flex;
    margin-top: 4%;
`

export const CardProvaTipos = styled.div`
    width: 50%;
`

export const CardProvaDatas = styled.div`
    width: 50%;
    text-align: right;
    margin-right: 5%;
`
