import sweetalert from "sweetalert";
import { Api } from "../../../services/api";
import IProvas from "../../../types/IProvas";
import { CardProva, CardProvaDatas, CardProvaHeader, CardProvaInfo, CardProvaTipos } from "./styles";


interface ProvaProps {
	prova: IProvas | any;
}

const Categoria = ({ prova }: ProvaProps) => {
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
                    <button onClick={() => excluir(prova)}>Excluir prova</button>
                </div>
            </CardProva>
					</>
				
	);
};

export default Categoria;