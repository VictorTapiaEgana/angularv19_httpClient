import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { RandomUserType, RandonUserResponse } from '../interface/RandonUserInterface';
import { RandomUserMapper } from '../mapper/RandonUserMapper';

@Injectable({
  providedIn: 'root'
})
export class RandonUserServiceService {

  private http = inject(HttpClient)
  ListadoUsers = signal<RandomUserType[]>([])
  cargandoSignal= signal<boolean>(false)

  constructor() {
    this.CargarUsersFromWeb(1)
   }


   CargarUsersFromWeb(pagina:number){
    this.cargandoSignal.set(true)

    this.http.get<RandonUserResponse>(`${environment.API_URL}`,
                    {params:{
                        results:10,
                        page:pagina,
                        // nat:'es'
                    }}
                  ).subscribe((resp)=>{

                    const ArrayUSers = RandomUserMapper.ResponseUserConvert(resp.results)
                    this.ListadoUsers.set(ArrayUSers)
                    this.cargandoSignal.set(false)

                  })

   }

}
