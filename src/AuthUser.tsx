export function AuthUser(props : any){
    return (
        <div>
            <h3>Utilsateur: {props.isLogged ? "Connecté avec succés" : "Non connecté"}</h3>
        </div>
    );
}