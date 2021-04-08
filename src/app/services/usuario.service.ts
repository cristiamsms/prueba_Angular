import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  crearUsuario(formData:RegisterForm){
    return this.http.post('https://pruebas.midasoft.co:5443/Apis_DLLO/Seleccion/api/SOL/RegistroInicialSolicitante', formData);
  }
  login(formData:LoginForm){
    return this.http.post('https://pruebas.midasoft.co:5443/Apis_DLLO/Security/api/SEG', formData);
  }
}
