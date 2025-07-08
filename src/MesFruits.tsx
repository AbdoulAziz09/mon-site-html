export function MesFruits(props : any){
    return(
       <div>
        <h1>Mes Fruits</h1>
           <ul>
            <li>Banane: Taille = {props.Taille}</li>
            <li>Mangue: Couleur = {props.Couleur}</li>
            <li>Orange: Origine = {props.Origine}</li>
           </ul>
       </div>
    );
}