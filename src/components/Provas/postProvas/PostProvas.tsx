import { useEffect, useState } from "react";
import { Api } from "../../../services/api";
import IProvas from "../../../types/IProvas";
import sweetalert from "sweetalert";
import { BotaoAdicionar, InputForm, PutProva } from "./styles";
// import { format } from "date-fns";

export default function PostProvas(){
    const [DataProgramada, setDataProgramada] = useState("");
	const [Tipo, setTipo] = useState("");
	const [Peso, setPeso] = useState("");
	const [Turma, setTurma] = useState("");
    const [isFormValid, setIsFormValid] = useState(false); 
    // const dataProgramadaFormatted = format(new Date(DataProgramada), "yyyy-MM-dd");

    const onFormSubmit = () => {
        Api.post<IProvas>("/provas", {
            dataProgramada: DataProgramada,
            tipo: Tipo, 
            peso: Number(Peso), 
            turmaId: Number(Turma)
        })
        .then(() => {
            sweetalert("Prova cadastrada com sucesso.");
            window.location.reload();
		})
		.catch((error) => {
            console.log({data: error}) 
            sweetalert('não foi possivel cadastrar a prova!')   
         })
    }

      const checkFormValidity = () => {
        if (DataProgramada && Tipo && Peso && Turma) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    useEffect(() => {
        checkFormValidity();
    }, [DataProgramada, Tipo, Peso, Turma, checkFormValidity]);


    return (
        <PutProva>
            <p>Formulário de Cadastro de Prova</p>
            <InputForm type="text" 
            placeholder="Data programada"
            required
            onChange={(evento) =>
                setDataProgramada(evento.target.value)
            }
            />
            <InputForm 
                type="text" 
                placeholder="Digite o tipo da prova"
                required
                onChange={(evento) =>
                    setTipo(evento.target.value)
                }/>
            <InputForm 
                type="text" 
                placeholder="Digite o peso da prova"
                required
                onChange={(evento) =>
                    setPeso(evento.target.value)
                }/>
            <InputForm 
                type="text" 
                placeholder="Digite a turma"
                required 
                onChange={(evento) =>
                    setTurma(evento.target.value)
                }/>
                <BotaoAdicionar 
                    type="button" 
                    onClick={() => onFormSubmit()}  
                    className={isFormValid ? "" : "disabled"}
                    disabled={!isFormValid}
                >
					<p>Adicionar Prova</p>
				</BotaoAdicionar>
        </PutProva>
    )
}

