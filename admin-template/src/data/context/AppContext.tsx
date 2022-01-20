import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | '';

interface AppContextProps {
    //tema?: Tema
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
    
    //const [tema, setTema] = useState<Tema>('dark');
    const [tema, setTema] = useState('dark');

    function alternarTema() {
        //console.log('alternarTema...');
        const novoTema = tema === '' ? 'dark' : '';
        setTema(novoTema);
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo);
    }, [])

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