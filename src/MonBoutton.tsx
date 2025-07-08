import {useState} from 'react';
export function MonButton(){
    //On a declarer un tableau qui initialise l'etat des cliques
    //On a une var comment qui va stocker l'etat initial c-a-dire 0
    //On a une fonction setComment qui va nous permettre de manipuler la variable comment
    const [comment, setComment] = useState(0);

    //On declare une fonction qui va nous permettre d'utiliser setComment
    function handleComment(){
        setComment(comment + 1);
         setButtonClicked(name);
    }
    console.log(comment);
    function handleClick(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return(
       <div>
           <button onClick={handleComment}>{comment} Likes</button>
            <button onClick={() => handleClick("Home")}>Home</button>
            <button onClick={() => handleClick("Class")}>Class</button>

            {/* Affiche le nom du bouton cliqué */}
            <p>Vous avez cliqué sur : <strong></strong></p>
       </div>
    );
}

function setButtonClicked(name: void) {
    throw new Error('Function not implemented.');
}
