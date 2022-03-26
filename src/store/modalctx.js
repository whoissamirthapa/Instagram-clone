import { createContext, useState } from "react";

const ModalContext = createContext({
    modal:false,
    files: [],
    changeModal: ()=>{},
    reverseModal: ()=>{},
    addUrl: ()=>{}
})

export const ModalContextProvider = (props)=>{
    const [modal, setModal] = useState(false);
    const [files, setFiles] = useState([]);
    
    const handleModal = (e)=>{
        setModal(true);
    }
    
    const reverseModal = (e)=>{
        setModal(false);
    }

    const addUrl = (filearray)=>{
        const arr = filearray;
        setFiles(arr);
        //console.log(files);
    }
    return (
        <ModalContext.Provider 
        value={{
            modal: modal, 
            changeModal: handleModal, 
            reverseModal: reverseModal,
            files:files, 
            addUrl: addUrl
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext;