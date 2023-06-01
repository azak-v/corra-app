import { ReactNode, createContext, useContext, useState } from "react";
import IProvas from "../types/IProvas";
import { Api } from "../services/api";

export function useProvas() {
	const contextoProvas = useContext(ProvasContext);
	return contextoProvas;
}

interface ProvasProviderProps {
	children: ReactNode;
}

export interface ProvasContext {
	getProvas: () => void;
	allProvas: IProvas[];
	setAllProvas: React.Dispatch<React.SetStateAction<IProvas[]>>;
}

const ProvasContext = createContext({} as ProvasContext);
ProvasContext.displayName = "Provas Context";

export function ProvasProvider({ children }: ProvasProviderProps) {
	const [allProvas, setAllProvas] = useState<IProvas[]>([]);

	async function getProvas() {
		return new Promise(() => {
			Api.get<IProvas[]>("/provas")
				.then((resposta: any) => {
					setAllProvas(resposta.data);
				})
				.catch((error: any) => {
					console.log(error);
				});
		});
	}

	return (
		<ProvasContext.Provider
			value={{
				getProvas,
				allProvas,
				setAllProvas
			}}
		>
			{children}
		</ProvasContext.Provider>
	);
}