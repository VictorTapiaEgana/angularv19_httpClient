import { RandonUserResponse, RandomUserType, Data } from './../interface/RandonUserInterface';
export class RandomUserMapper{

  ResponseMapper(item:Data):RandomUserType{

    return{
        id:item.login.uuid,
        nombre:`${item.name.first}  ${item.name.last}`,
        genero:item.gender,
        email:item.email,
        telefono:item.cell,
        imagen:item.picture.large,
        direccion:item.location.street.name,
        ciudad:item.location.city,
        pais:item.location.country,
        latitud:item.location.coordinates.latitude,
        longitud:item.location.coordinates.longitude
    }

  }

  ResponseUserConvert(userlist:Data[]):RandomUserType[]{
    return(
        userlist.map((item)=>this.ResponseMapper(item))
    )
  }

}
