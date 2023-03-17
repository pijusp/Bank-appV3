import { createContext, useEffect } from "react";
import { useMessages } from "../functions/useMessages";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
    const [response, setCreate, setEdit, setDelete] = useWrite();
    const [list, setUpdate] = useRead();
    const [
        deleteModal,
        setDeleteModal,
        addModal,
        setAddModal,
        remModal,
        setRemModal,
    ] = useModal();
    const [messages, setMessage] = useMessages([]);

    useEffect(() => {
        setUpdate(Date.now());
        if (null !== response) {
            setMessage({
                text: response.message.text,
                type: response.message.type,
            });
        }
    }, [response]);

    return (
        <Global.Provider
            value={{
                // start modals
                // end modals
                messages,
            }}
        >
            {children}
        </Global.Provider>
    );
};
