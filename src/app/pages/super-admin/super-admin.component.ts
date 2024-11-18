import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Classe, Ecole, Matiere, Professeur, SuperAdmin} from "../../model/model/general.model";
import {ServiceAdminService} from "../../service/service-admin.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit {


  listsuperadmin: SuperAdmin[] = [];
  formsuperadmin : FormGroup;

  modif;
  itemsPerPage = 12;
  allItems: any = [];

  idsuperadmin;




  superadmin: SuperAdmin = {
    username: '',
    email: '',
    telephone: '',
    password: '',
  }
  constructor(private route: Router,private modalService : NgbModal, private superadminService: ServiceAdminService,  public fb: FormBuilder) {
    this.formsuperadmin = this.fb.group({
      username: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });


  }

  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    if (!password) {
      return null;
    }
    // Vérifie les critères
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumeric = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 8;
    const hasNoSpaces = !/\s/.test(password);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && isValidLength && hasNoSpaces;

    return passwordValid ? null : { invalidPassword: true };
  }

  ngOnInit() {
    this.superadminService.getAllSuperAdmin().subscribe(
      (result:SuperAdmin[])=>{
        this.listsuperadmin=result;
        console.log(result)
      }, (err) => {
        console.log(err);
      }
    )

  }

  loadMore() {
    //
  }




  /**
   * Open extra large modal
   * @param exlargeModal extra large modal data
   */
  extraLarge(exlargeModal: any) {
    this.modalService.open(exlargeModal, { size: 'l', centered: true });

  }

  ModalUpdateAdmin(superadmin, centerModal?: any) {
      this.formsuperadmin.setValue({
        username:  superadmin.username,
        password : '',
        telephone : superadmin.telephone,
        email : superadmin.email
      });
       this.idsuperadmin=superadmin.id;
    console.log(this.formsuperadmin);

    this.modalService.open(centerModal, {size: 'l', centered: true });
  }

  annuler(){
    this.modalService.dismissAll();
    this.formsuperadmin.reset();
    this.superadmin = {
      username: '',
      email: '',
      telephone: '',
      password: '',
    };
  }

  updateSuperadmin() {
    this.superadmin.username = this.formsuperadmin.value.username;
    this.superadmin.telephone = this.formsuperadmin.value.telephone;
    this.superadmin.email = this.formsuperadmin.value.email;
    this.superadmin.password = this.formsuperadmin.value.password;
    console.log(this.superadmin)
    this.superadminService.updateSuperadmin(this.superadmin,this.idsuperadmin).subscribe(
      result => {
        console.log(result);
        this.modalService.dismissAll();
        if (result.status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: result.body['message'],
            showConfirmButton: false,
            timer: 1500
          });
          this.formsuperadmin.reset();
          this.superadminService.getAllSuperAdmin().subscribe(
            (result:SuperAdmin[])=>{
              this.listsuperadmin=result;
              console.log(result)
            }, (err) => {
              console.log(err);
            }
          )
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Erreur lors de la modification du super admin : '+ result,
            showConfirmButton: false,
            timer: 1500
          });
        }

        this.superadmin = {
          email: '',
          username: '',
          password: 'null',
          telephone: '',
        };
      },
      error => {
        console.log(error)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Erreur lors de l\'ajout du super admin : '+ error,
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }

  testEmail($event: any) {
  }
  testTelephone($event: any) {

  }

  AddSuperAdmin() {
    // console.log(this.professeur);
    this.superadmin.username = this.formsuperadmin.value.username;
    this.superadmin.password = this.formsuperadmin.value.password;
    this.superadmin.telephone = this.formsuperadmin.value.telephone;
    this.superadmin.email = this.formsuperadmin.value.email;
    console.log(this.superadmin);
    this.superadminService.addSuperadmin(this.superadmin).subscribe(
      result => {
        console.log(result);
        this.modalService.dismissAll();
        if (result.status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: result.body['message'],
            showConfirmButton: false,
            timer: 1500
          });
          this.formsuperadmin.reset();
          this.superadminService.getAllSuperAdmin().subscribe(
            (result:SuperAdmin[])=>{
              this.listsuperadmin=result;
              console.log(result)
            }, (err) => {
              console.log(err);
            }
          )
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Erreur lors de l\'ajout du super admin : '+ result,
            showConfirmButton: false,
            timer: 1500
          });
        }

        this.superadmin = {
          email: '',
          username: '',
          password: 'null',
          telephone: '',
        };
      },
      error => {
        console.log(error)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Erreur lors de l\'ajout du super admin : '+ error,
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }


  DeleteSperAdmin(id: string) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Oui, continuer!'
    }).then((result) => {
       if (result.value) {
        this.superadminService.delete(id).subscribe({
          next: (response) => {
            this.superadminService.getAllSuperAdmin().subscribe(
              (result:SuperAdmin[])=>{
                this.listsuperadmin=result;
                console.log(result)
              }, (err) => {
                console.log(err);
              }
            )
          },
          error: (err) => {
            console.error(err);
            this.superadminService.getAllSuperAdmin().subscribe(
              (result:SuperAdmin[])=>{
                this.listsuperadmin=result;
                console.log(result)
              }, (err) => {
                console.log(err);
              }
            )
          }
        });

         Swal.fire('Suppression!', 'Le super Admin a été supprimée avec succès.', 'success');
      }
    });
  }
}
