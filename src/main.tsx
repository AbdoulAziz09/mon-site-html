import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{HelloWorld} from "./HelloWorld.tsx" 
import { MonButton } from './MonBoutton.tsx'
import{MesFruits} from "./MesFruits.tsx"
import { AuthUser } from './AuthUser.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <AuthUser isLogged={true}/>
    <MonButton/>
    <HelloWorld/>
    <MesFruits Taille={23} Couleur={"Orange"} Origine={"Guinee"}/> */}
     <BrowserRouter>
         <Routes>
             <Route path="/" element={< AuthUser isLogged={true} />}></Route>
             <Route path="/hello" element={<HelloWorld />}></Route>
             <Route path="/fruits" element={<MesFruits taille={23} couleur={"Orange"} origine={"Guinée"}/>}></Route>
             <Route path="/monbutton" element={<MonButton />}></Route>
         </Routes>
      </BrowserRouter>
  </StrictMode>,
)
