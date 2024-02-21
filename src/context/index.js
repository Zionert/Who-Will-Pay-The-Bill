import React, { createContext, useState } from "react";
import Toast from "react-native-toast-message";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [state, setState] = useState({
        stage: 1,
        players: [],
        result: ''
    });

    const addPlayerHandler = (name) => {
        setState((prevState) => ({
            ...prevState,
            players: [...prevState.players, name]
        }))
    }

    const removePlayerHandler = (id) => {
        const newArray = state.players;
        newArray.splice(id, 1);
        setState((prevState) => ({
            ...prevState,
            players: newArray
        }))
    }

    const nextHandler = () => {
        if (state.players.length < 2) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Sorry',
                text2: 'You need at least 2 players'
            })
        } else {
            setState((prevState) => ({
                ...prevState,
                stage: 2
            }))
            generateLooser();
        }
    }

    const generateLooser = () => {
        const lastLooser = state.result;
        let newLooser = state.players[Math.floor(Math.random() * state.players.length)]
        while (lastLooser === newLooser) {
            newLooser = state.players[Math.floor(Math.random() * state.players.length)]
        }
        setState((prevState) => ({
            ...prevState,
            result: newLooser
        }))
    }

    const resetGame = () => {
        setState({
            stage: 1,
            players: [],
            result: ''
        })
    }

    return (
        <MyContext.Provider value={{ state, addPlayerHandler, removePlayerHandler, nextHandler, generateLooser, resetGame }}>
            {children}
        </MyContext.Provider>
    );
};

export {
    MyProvider,
    MyContext
};
