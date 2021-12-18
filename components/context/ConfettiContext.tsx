import * as React from 'react';

interface ConfettiContextProps {
    showConfetti: boolean
    setShowConfetti: React.Dispatch<React.SetStateAction<boolean>>
};

export const ConfettiContext = React.createContext<ConfettiContextProps>({showConfetti: false, setShowConfetti: () => null});

interface Props {
    children: React.ReactNode;
}

export const ConfettiContextProvider = ({children}: Props) => {
    const [showConfetti, setShowConfetti] = React.useState<boolean>(false);

    return (
        <ConfettiContext.Provider value={{showConfetti, setShowConfetti}}>
            {children}
        </ConfettiContext.Provider>
    );
};
