import { RandomUserType } from './../../interface/RandonUserInterface';
import { Component, inject, input } from '@angular/core';
import pdfMake from '../../utils/pdfmake-wrapper';
import { getBase64FromUrl } from '../../utils/ImagenBase64';

@Component({
  selector: 'app-boton-pdf',
  imports: [],
  templateUrl: './Boton-Pdf.component.html',
  styleUrl: './Boton-Pdf.component.css',
})

export class BotonPdfComponent {

  TipoDeVista=input.required<string>();

  usuarios=input.required<RandomUserType[]>()

  async GenerarPDF(tipoArchivo:string){

    if (tipoArchivo === "listado"){

      const definicion = await this.GenerarTabla(this.usuarios());
      pdfMake.createPdf(definicion).download('RegistroDeUsuarios.pdf');
      // pdfMake.createPdf(this.GenerarTabla(this.usuarios())).download('RegistroDeUsuarios.pdf');

    }else{

    }

  }

  async GenerarTabla(userList:RandomUserType[]){

     const base64Logo = await getBase64FromUrl('/user.png');

      const tableDefinicion ={
        content:[
          {
			        image: base64Logo,
              width:30,
              alignment: 'center'
		      },
          { text: 'Registro de usuarios', style: 'header' },
          { text:" "},
          { text:" "},
          {
            table:{
              body:[
                    [
                      {text: 'Ciudad', style: 'tableHeader'},
                      {text: 'Nombre', style: 'tableHeader'},
                      {text: 'Correo', style: 'tableHeader'},
                      {text: 'País', style: 'tableHeader'},
                    ],
                    ...userList.map(user=>[
                             user.ciudad,
                             user.nombre,
                             user.email,
                             user.pais
                    ])
              ]
            }
          }
        ],
        styles:{
          header:{
            decoration: 'underline',
            fontSize: 18,
            alignment:'center'
          },
          tableHeader:{
            fillColor: '#DFFFE4',
          }
        }
      }

    return tableDefinicion

  }

}
