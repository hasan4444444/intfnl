import { Soru } from './../models/soru';
import { ogrt } from './../models/ogrt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ogr } from '../models/ogr';
@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    apiUrl = "http://localhost:55223//api/";
  
    constructor(
      public http: HttpClient
    ) { }

    tokenAl(kadi: string, parola: string) {
        var data = "username=" + kadi + "&password=" + parola + "&grant_type=password";
        var reqHeader = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
        return this.http.post(this.apiUrl + "/token", data, { headers: reqHeader });
      }

      oturumKontrol() {
        if (localStorage.getItem("token")) {
          return true;
        }
        else {
          return false;
        }
      }



      

    OgrenciListe(){
        return this.http.get("ogrenciliste");
    }
    OgrenciEkle(){
        return this.http.post("ogrenciekle",ogr);
    }
    OgrenciDuzenle(){
        return this.http.put("ogrencidüzenle",ogr);
    }
    OgrenciById(ogrId:string){
        return this.http.get("ogrencibyid"+ogrId);

    }
    OgrenciSil(ogrId:string){
        return this.http.delete("ogrencisil"+ogrId);

    }

    OgretmenListe(){
        return this.http.get("ogretmenliste");
    }
    OgretmenEkle(){
        return this.http.post("ogretmenekle",ogrt);
    }
    OgretmenDuzenle(){
        return this.http.put("ogretmendüzenle",ogrt);
    }
    OgretmenById(ogrtId:string){
        return this.http.get("ogretmenbyid"+ ogrtId);

    }
    OgretmenSil(ogrtId:string){
        return this.http.delete("ogrencisil"+ogrtId);

    }

    soruId(soruId:string){
        return this.http.get("sorubyid"+ soruId);

    }
    soruEkle(){
        return this.http.post("soruekle",Soru);
    }

    soruDuzenle(){
        return this.http.put("sorudüzenle",Soru);
    }





  

 }
 
  