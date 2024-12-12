function litPhrase(phrase) {
    let caractere = 0;
    let mots = 0;
    let voyelles = 0;
    for (let i = 0; i < phrase.length; i++) {
        const char = phrase[i];
        caractere++; 
        
        if (char === " " && i > 0 && phrase[i - 1] !== " ") {
            mots++;
        }
        
        if (/[aeiou]/i.test(char)) {
            voyelles++; 
        }
        
    }
    // Vérifier si le dernier caractère est un point
    const lastCharIsPoint = phrase[phrase.length - 1] === ".";
    if (!lastCharIsPoint) {
        console.log("Le dernier caractère n'est pas un point.");
        return;
    }
    mots++;
    console.log(`Caractères : ${caractere} , Mots : ${mots} et Voyelles : ${voyelles}`);

}

litPhrase("je suis ghada.");
