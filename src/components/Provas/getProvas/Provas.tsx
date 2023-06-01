import IProvas from "../../../types/IProvas";
import { CardProva, CardProvaDatas, CardProvaHeader, CardProvaInfo, CardProvaTipos } from "./styles";

interface ProvaProps {
	prova: IProvas;
}

const Categoria = ({ prova }: ProvaProps) => {
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
                            <p>Tipo da prova: {prova.tipo}</p>
                        </CardProvaTipos>
            
                        <CardProvaDatas>     
                            <span style={{color: "rgb(152, 100, 201)"}}>Data</span>
                            <p>Data da prova: {prova.dataProgramada}</p>
                        </CardProvaDatas>

                        <CardProvaDatas>     
                            <span style={{color: "rgb(152, 100, 201)"}}>Data</span>
                            <p>peso: {prova.peso}</p>
                        </CardProvaDatas>
                    </CardProvaInfo>
                </div>
            </CardProva>
					</>
				
	);
};

export default Categoria;