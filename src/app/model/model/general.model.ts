export class Classe {
    libelle:string;
    niveau:string;
    montant_inscription:string;
    montant_mensuel:string;
    }
    export class Matiere {
        libelle:string;
    }
export class FormEcole {
  nom:string;
  adresse:string;
  telephone:string;
  email:string;

}
    export class Ecole {
      nom:string;
      adresse:string;
      telephone:string;
      email:string;
      description:string;
      reference:string
    }
    export class UsersFirstCon{
        login: string;
        password: string;
        confirmPass : string;
        ancienPass:string;
    }
    export class Personnel {
        nom:string;
        prenom:string;
        dateNaissance:string;
        lieuDeNaissance:string;
        adresse:string;
        email:string;
        telephone:string;
        sexe:string;
        login:string;

    }
export class SuperAdmin {
  username:string;
  email:string;
  telephone:string;
  password:string;
}
export class Professeur {
    nom:string;
    prenom:string;
    dateNaissance:string;
    lieuDeNaissance:string;
    adresse:string;
    email:string;
    telephone:string;
    sexe:string;
    login:string;
    classeId:string;
    matiereId:string;

}
export class Inscription {
    id:string;
    nom:string;
    prenom:string;
    dateNaissance:string;
    nationalite:string;
    lieuDeNaissance:string;
    adresse:string;
    telephone:string;
    email:string;
    classeId:string;
    sexe:string;
    nomParent:string;
    prenomParent:string;
    emailParent:string;
    telephoneParent:string;
    sexeParent:string;
    fonctionParent:string;
    montant:number;
    avance:number;
  mensualite:number;
    typeDePayement:number;
  montantTotal:number;
  reductionIns:number;
  ReductionMens:number;
  offreIns:boolean;
  offreInsMois:boolean;

}

export class Mensualite{
  eleveId:string;
  moisId:string;
  montant:number;
  reduction:number;
  reliquat:number;
  userId:string;
}

export class HistoriqueDetteIns{
  idIns:string;
  montantApayer:number;
  montantRecu:number;
  montantResttant:number;
}

export class Historique{
  eleveId:string;
  moisId:string;
  classeId:string;
  mensualiteId:string;
  montant:number;
  montantTotal:number;
  reduction:number;
  recu:number;
  reliquat:number;
  restant:number;
  anneescolaireId:string;
}

export class Mois{
  id:string;
  libelle:string;
}


export class Reinscription {
    matricule:string;
    montant:string;
    avance:string;
    userId:string;
    typeDePayement:string;
    caisseId:string;
    classeId:string;
}

export class General {
}


export class ClasseYol {

    libelle: string;
}
export class Users {
  password: string;
  identifiant: string;
}
export class Contenue {
    idClasse: string;
    idMatiere: string;
    idEleve: string;
    noteEleve: string;
}

export class ContenuePaiement {
  idClasse: string;
  idMois: string;

}
export class Particulier {
    telephone: string;
    nom: string;
    prenom: string;
    adresse: string;
}
export class Entreprise {
    telephone: string;
    raisonSocial: string;
    adresse: string;
}

          export class AddAbsence {
              idClasse:string;
            date_debut:string;
            date_fin:string;

            matiere_id:string;
            user_ida:string;
             }

export class Note {

    noteEleve:string;
    idEleve:string;
}
