import styled from "styled-components";

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

export const BotaoExcluir = styled.button`
    border-radius: 5px;
    padding: 10px 10px 10px 10px;
    margin-top: 10px;
    background-color: #b90e0a;
    border: none;
    color: #fff;
    font-weight: bold;

    &:hover{
        background-color: #000;
    }
    `

    export const AtualizarProva = styled.div`
        background-color: #000;
        margin-top: 20px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 10px 10px 10px;

        p{
            font-family: Courier New, monospace	;
        }
    `

export const EditarProva = styled.input`
    background-color: rgb(42, 30, 71);
    color: #fff;
    margin: 10px 10px 10px 10px;
    height: 50px;
    padding-left: 10px;
    border-radius: 10px;
    width: 500px;
    font-family: Courier New, monospace	;

    ::placeholder{
        color: #fff;
        font-weight: bold;
        font-family: Courier New, monospace	;
    }
`

export const BotaoEditar = styled.button`
        background-color: rgb(42, 30, 71);
    &:hover{
        background-color:  rgb(152, 100, 201);
    }
    
    &.disabled{
        background-color: grey;
        color: #fff;
    }
    p{
        color: #fff;
        font-weight: bold;
    }
    border-radius: 10px;
    height: 50px;
    width: 510px;
    margin-bottom: 10px;

`