import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClasseService } from 'src/app/layouts/service/classe.service';
import { Classe } from 'src/app/layouts/service/general.model';
import Swal from 'sweetalert2';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})



export class ClasseComponent implements OnInit {

  formClasse : FormGroup
  update: any;
 idClasse;
  modif: string;
  searchTerm: any;

  constructor(private route: Router,private serviceClasse : ClasseService, public fb: FormBuilder, private modalService : NgbModal) { 
    this.formClasse = this.fb.group({
      nom: ['', Validators.required],
      nomEcole: ['', Validators.required]
    });
   }
   public classes:any = [] ;
    classe : Classe = {
    nom:'',
    nomEcole:''
    };
  

  ngOnInit(): void {
    this.serviceClasse.listeClasses().subscribe(
      (result)=>{
        console.log(result)
        this.classes=result
      },
      err =>{
        console.log(err)
      }
    );
  }

  searchFilter(e) {
    const searchStr = e.target.value;
    if (searchStr.length === 0) {
      this.serviceClasse.listeClasses().subscribe(
        (result) => {
          this.classes = result;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.classes = this.classes.filter((classe) => {
        return classe.libelle.toLowerCase().startsWith(searchStr.toLowerCase())  ||
        classe.libelle.toLowerCase() === searchStr;
      });
    }
  }

  currentPage = 1;
  pageSize = 6;

  get startIndex() {
    return (this.currentPage - 1) * this.pageSize;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.pageSize, this.classes.length);
  }

}
