import { Component, OnInit } from '@angular/core';
import {Ecole, FormEcole, Matiere, SuperAdmin} from "../../model/model/general.model";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import {EcoleService} from "../../service/ecole.service";

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.scss']
})
export class EcoleComponent implements OnInit {
  formM: FormGroup;
  update: any;
  idEcole;
  matieres: Matiere[] = [];
  ecole: Ecole[] = [];
  filteredMatieres: Matiere[] = [];
  filteredEcoles: Ecole[] = [];
  selectedMatiere: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  sortDirection: 'asc' | 'desc' = 'asc';
  pagedMatieres: Matiere[] = []; // Ajoutez cette propriété
  pagedEcole: Ecole[] = []; // Ajoutez cette propriété

  formEcole: FormEcole = {
    telephone: '',
    email: '',
    nom: '',
    adresse: '',
  }

  constructor(
    private serviceMatiere: EcoleService,
    public fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.formM = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.getAllEcoles();
  }

  getAllEcoles(){
    this.serviceMatiere.getAllEcole().subscribe(
      (result:Ecole[])=>{
        console.log(result)
         this.filteredEcoles = this.ecole = result;

      },
      (err) => {
        console.log(err);
      }
    )
  }




  AddEcole(){
    this.formEcole.nom= this.formM.value.nom;
    this.formEcole.adresse= this.formM.value.adresse;
    this.formEcole.telephone= this.formM.value.telephone;
    this.formEcole.email= this.formM.value.email;
    console.log(this.formEcole)
    this.serviceMatiere.addEcole(this.formEcole).subscribe(
      (result)=>{
        this.getAllEcoles();
        this.formM.reset()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'École ajoutée avec succès',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (err)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Erreur lors de l\'ajout de l\'ecole : '+err,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    )
  }




  UpdateEcole(ecole) {
    this.update = true;
    console.log(ecole)
    this.idEcole=ecole.id;
    this.formM.setValue({
      nom:ecole.nom,
      email:ecole.email,
      adresse:ecole.adresse,
      telephone:ecole.telephone
    });
  }

  ModifierEcole() {
    const updatedEcole:FormEcole ={
     nom: this.formM.value.nom,
      adresse: this.formM.value.adresse,
      telephone: this.formM.value.telephone,
      email: this.formM.value.email
    }

    console.log(updatedEcole)

    this.serviceMatiere.modifierEcole(updatedEcole,this.idEcole).subscribe(
      (result)=>{
        this.getAllEcoles();
        this.formM.reset()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'École modifiée avec succès',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (err)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Erreur lors de la modification de l\'ecole : '+err,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    )
  }

  Annuler() {
    this.update = false;
    this.formM.reset();
  }





  print() {
    window.print();
  }

  DeleteEcole(nom: string) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, continuer!',
    }).then((result) => {
      if (result.value) {
        this.serviceMatiere.deleteEcole(nom).subscribe({
          next: (response) => {

          },
          error: (err) => {
            console.error(err);
            this.getAllEcoles();
          }
        });

        Swal.fire('Suppression!', 'L\'école a été supprimée avec succès.', 'success');

  }});

    this.getAllEcoles();

  }





  imprimerMatieres() {
    const printContents = document.getElementById('table-container').innerHTML; // Obtenez le contenu HTML de la table
    const originalContents = document.body.innerHTML; // Obtenez le contenu HTML de la page

    // Créez une balise title pour définir le titre de la page d'impression
    const pageTitle = "<title>Liste de toutes les matières</title>";

    // Remplacez le contenu actuel de la page par le contenu de la table avec la balise title
    document.body.innerHTML = pageTitle + printContents;

    // Appelez la fonction window.print() pour imprimer la table
    window.print();

    // Restaurez le contenu original de la page
    document.body.innerHTML = originalContents;
  }


}
