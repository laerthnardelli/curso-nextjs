import { createContext, useState } from "react";

type Tema = 'dark' | '';

interface AppContextProps {
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {

    const [tema, setTema] = useState<Tema>('dark');

    function alternarTema() {
        //console.log('alternarTema...');
        setTema(tema === '' ? 'dark' : '');
    }

    return (
        <AppContext.Provider value={{
            tema, //state
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;