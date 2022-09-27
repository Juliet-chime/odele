import {React, createContext, useContext, useState } from "react"

export const AppContext = createContext()


export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({children}) => {

    const [isactive, setIsActive] = useState(true)
    const [screenSize, setscreenSize] = useState(undefined)
    const [activeIndex , setActiveIndex] = useState(1)
    const [activeNftCard , setActiveNftCard] = useState(0)
    const [resizeSidebar, setResizeSideBar] = useState(true)

return (<AppContext.Provider value={{isactive,setIsActive,screenSize,setscreenSize,activeIndex,setActiveIndex,resizeSidebar,setResizeSideBar,activeNftCard,setActiveNftCard}}>
    {children}
</AppContext.Provider>)
}