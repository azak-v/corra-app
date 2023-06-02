import styled from "styled-components";

export const PutProva = styled.div`
    background-color: #000;
    padding: 30px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 20px 20px 20px 20px;
    border-radius: 10px;
    box-shadow: 0 0 0px 1px rgba(255, 255, 255, 1);
    
    p{
        font-family: Courier New, monospace	;
    }
    `

export const InputForm = styled.input`
    background-color: rgb(42, 30, 71);
    color: #fff;
    margin: 10px 10px 10px 10px;
    height: 50px;
    padding-left: 10px;
    border-radius: 10px;
    width: 600px;
    font-family: Courier New, monospace	;

    ::placeholder{
        color: #fff;
        font-weight: bold;
        font-family: Courier New, monospace	;
    }
`

export const BotaoAdicionar = styled.button`
    background-color: rgb(42, 30, 71);
    &:hover{
        background-color:  rgb(152, 100, 201);
    }
    
    &.disabled{
        background-color: grey;
    }
    p{
        color: #fff;
        font-weight: bold;
    }
    border-radius: 10px;
    height: 50px;
    width: 620px;


`