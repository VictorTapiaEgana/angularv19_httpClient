import { CommonModule } from '@angular/common';
import { RandomUserType } from './../../interface/RandonUserInterface';
import { Component, input } from '@angular/core';
import pdfMake from '../../utils/pdfmake-wrapper';
import { getBase64FromUrl } from '../../utils/ImagenBase64';

@Component({
  selector: 'app-boton-pdf',
  imports: [CommonModule],
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

    }

  }

  async GenerarTabla(userList:RandomUserType[]){

     const base64Logo = await getBase64FromUrl('/user.png');
     const Logogithub = await getBase64FromUrl('/github.png');

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
        },

       footer: {
        columns: [
          {
            image: Logogithub,
            width: 20,
            margin: [0, -5, 20, 0]
          },
          {
            text: 'https://github.com/VictorTapiaEgana',
            fontSize: 12,
            alignment: 'left',
            verticalAlignment: 'center',
            margin: [10, 0, 0, 0]
          }
        ],
        margin: [40, 10]
       }
     }

    return tableDefinicion

  }

}
