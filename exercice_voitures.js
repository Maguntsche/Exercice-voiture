class voiture {
    constructor (marque, modele, couleur, annee) {
        this.marque = marque; 
        this.modele = modele; 
        this.annee = annee; 
        this.couleur = couleur; 
    }
    afficherDetails() {
        console.log("Bonjour ! Votre voiture est un/e "+marque+", le modele est un/e"+modele+ " de couleur "+couleur+ "et date de "+annee)
    }
}

class garage {
    constructor (listevoiture){
        this.listvoiture = listevoiture ;
    }
        searchannee(annee){
            if (voiture.annee === annee) {
                console.log(afficherDetails);
        }
        searchmarque(marque);
            if (voiture.marque === marque) {
                console.log(afficherDetails);
        }
        searchmarquefiltre(troislettres);
            for (let i = 0; i < voitures.length; i++) {
                if (voiture.marque.includes(troislettres)) {
                    console.log(voiture.afficherDetails);
            }
        }
}
}