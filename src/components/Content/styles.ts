import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    height: 100%;
`

export const AsideContainer = styled.aside`
    width: 30%;
    background-color: #2A1E47;
    padding: 20px;
`

export const PerfilInfoContainer = styled.div`
    display: flex;
    background-color: #211834;
    border-radius: 10px;
    padding: 30px 30px 30px 30px;
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
    padding-bottom: 10px;

    span{
        font-weight: bold;
    }
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
    width: 100%;
`

export const ArticleTitle = styled.h1`
    color: #f4f4fa;
    font-family: 'Quicksand', sans-serif;
`

export const ProvasContent = styled.div`
    margin-top: 10px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`


