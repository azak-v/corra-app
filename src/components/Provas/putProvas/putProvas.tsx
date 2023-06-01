import { useState } from "react";
import { Api } from "../../../services/api";
import IProvas from "../../../types/IProvas";
import sweetalert from "sweetalert";


export default function postProvas(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [DataProgramada, setDataProgramada] = useState("");
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [Tipo, setTipo] = useState("");
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [Peso, setPeso] = useState("");
    
    const onFormSubmit = () => {
        Api.put<IProvas>("/provas", {
            dataProgramada: DataProgramada,
            tipo: Tipo, 
            peso: Number(Peso) 
        })
        .then(() => {
            sweetalert("Prova atualizada com sucesso.");
            window.location.reload();
		})
		.catch((error) => {
            console.log({data: error}) 
            sweetalert('não foi possivel atualizar a prova!')   
         })
    }

    return (
        <div>
            <input type="text" 
            placeholder="Data programada"
            required
            onChange={(evento) =>
                setDataProgramada(evento.target.value)
            }
            />
            <input 
                type="text" 
                placeholder="Digite o tipo da prova"
                required
                onChange={(evento) =>
                    setTipo(evento.target.value)
                }/>
            <input 
                type="text" 
                placeholder="Digite o peso da prova"
                required
                onChange={(evento) =>
                    setPeso(evento.target.value)
                }/>
                <button type="button" onClick={() => onFormSubmit()}>
					Editar Prova
				</button>
        </div>
    )
}

