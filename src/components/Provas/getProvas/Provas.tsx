import sweetalert from "sweetalert";
import { Api } from "../../../services/api";
import IProvas from "../../../types/IProvas";
import { AtualizarProva, BotaoEditar, BotaoExcluir, CardProva, CardProvaDatas, CardProvaHeader, CardProvaInfo, CardProvaTipos, EditarProva } from "./styles";
import { useContext, useEffect, useState } from "react";


interface ProvaProps {
	prova: IProvas | any;
}

const Prova = ({ prova }: ProvaProps) => {
    const [DataProgramada, setDataProgramada] = useState("");
	const [Tipo, setTipo] = useState("");
	const [Peso, setPeso] = useState("");
    const [isFormValid, setIsFormValid] = useState(false); 

    const onFormSubmit = () => {
        Api.put<IProvas>(`/provas/${prova?.id}`, {
            dataProgramada: DataProgramada,
            tipo: Tipo, 
            peso: Number(Peso),
            idTurma: prova.turmaId
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

    const excluir = (provaExcluida: IProvas) => {
      if (provaExcluida?.id) {
        Api.delete(`provas/${provaExcluida.id}`)
          .then(() => {
            sweetalert("prova excluída com sucesso!");
            window.location.reload();
          })
          .catch((error) => {
            console.log("Erro ao excluir prova:", error);
          });
      }
    };

    const checkFormValidity = () => {
        if (DataProgramada && Tipo && Peso) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    useEffect(() => {
        checkFormValidity();
    }, [DataProgramada, Tipo, Peso, checkFormValidity]);

	return (
		<>
                        <CardProva>
                <div>
                    <CardProvaHeader>
                        <h3 style={{color: "rgb(152, 100, 201)"}}>Nome da materia</h3>
                        <p >Turma ID : {prova.turmaId}</p>
                    </CardProvaHeader>

                    <CardProvaInfo>
                        <CardProvaTipos>
                            <span style={{color: "rgb(152, 100, 201)"}}>Tipo</span>
                            <p>{prova.tipo}</p>
                        </CardProvaTipos>
            
                        <CardProvaDatas>     
                            <span style={{color: "rgb(152, 100, 201)"}}>Data</span>
                            <p>{prova.dataProgramada}</p>
                        </CardProvaDatas>

                        <CardProvaDatas>     
                            <span style={{color: "rgb(152, 100, 201)"}}>Peso</span>
                            <p>{prova.peso}</p>
                            <p>{prova.id}</p>
                        </CardProvaDatas>

                        <CardProvaDatas>     
                            <span style={{color: "rgb(152, 100, 201)"}}>Id</span>
                            <p>{prova.id}</p>
                        </CardProvaDatas>
                    </CardProvaInfo>
                    <AtualizarProva>
                        <p>Atualizar Dados da Prova</p>
                        <EditarProva type="text" 
                        placeholder="Data programada"
                        required
                        onChange={(evento) =>
                            setDataProgramada(evento.target.value)
                        }
                        />
                        <EditarProva 
                            type="text" 
                            placeholder="Digite o tipo da prova"
                            required
                            onChange={(evento) =>
                                setTipo(evento.target.value)
                            }/>
                        <EditarProva 
                            type="text" 
                            placeholder="Digite o peso da prova"
                            required
                            onChange={(evento) =>
                                setPeso(evento.target.value)
                            }/>
                            <BotaoEditar 
                                type="button" 
                                onClick={() => onFormSubmit()}
                                className={isFormValid ? "" : "disabled"}
                                disabled={!isFormValid}>
                                Editar Prova
                            </BotaoEditar>
                    </AtualizarProva>
                    <BotaoExcluir onClick={() => excluir(prova)}>Excluir prova</BotaoExcluir>
                </div>
            </CardProva>
					</>
				
	);
};

export default Prova;