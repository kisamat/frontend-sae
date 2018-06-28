import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl } from '@angular/forms';
import { SimpleModalService } from 'ngx-simple-modal';
import { ConfirmComponent } from '../confirm/confirm.component';
import {BuscarService} from '../../services/buscar.service';
import {AsignaturasService} from '../../services/asignaturas.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-asignaturasruta',
  templateUrl: './asignaturasruta.component.html',
  styles: []
})
export class AsignaturasrutaComponent implements OnInit {
  loading:boolean=true;
  confirmResult = null;
  searchTerm : FormControl = new FormControl();
  searchResult = [];
  id:any;
  asignaturas: any =[];



  constructor(private _buscar:BuscarService,private _asignaturas:AsignaturasService,private activatedRoute:ActivatedRoute,private router: Router,private SimpleModalService: SimpleModalService) {

    this.searchTerm.valueChanges
        .debounceTime(400)
        .subscribe(data => {
            this._buscar.search_word(data).subscribe(response =>{
              //console.log(response);
                this.searchResult = response
            })
        })
        this.activatedRoute.params.subscribe(parametros=>{
              //console.log(parametros);
              this.id=parametros['id'];
              this._asignaturas.listarAsigUsuarios(this.id)
                              .subscribe(data=>{
                                  setTimeout(()=>{
                                    this.loading=false
                                    console.log(data);
                                    this.asignaturas=data;
                                    //this.like = 0;
                                  });

                             });
        })


  }

  ngOnInit() {
  }
  public onFormSubmit(){
    this.asignaturas.push(this.searchTerm.value);
     //console.log(this.asignaturas);
  }
  public eliminarItem(idAsig:number){
     //console.log(id);
     this.SimpleModalService.addModal(ConfirmComponent, {
       title: 'Confirmación',
       message: '¿Desea eliminar este item?'})
       .subscribe((isConfirmed) => {
         //console.log(idAsig);
         //console.log(this.asignaturas[idAsig]);
         let splitted = this.asignaturas[idAsig].split("-", 1)
         //console.log(splitted[0]);
         this.asignaturas.splice(idAsig, 1);
         this._asignaturas.eliminarAsigUsuario(splitted[0],this.id)
                     .subscribe(data=>{
                        setTimeout(()=>{
                          this.loading=false
                          console.log(data);
                          //this.like = 0;
                        })
                     })
         this.confirmResult = isConfirmed;
     });

  }
  public guardarLista(){
     //console.log(this.asignaturas);
      this._asignaturas.agregarAsigUsuario(this.asignaturas,this.id)
                       .subscribe(data=>{
                           setTimeout(()=>{
                             this.loading=false
                             console.log(data);
                               //this.like = 0;
                           });

                      });
      //this.router.navigate(['/rutasusuarios/misrutas']);
  }





}
