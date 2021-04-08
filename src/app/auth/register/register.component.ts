import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
 
})

export class RegisterComponent implements OnInit {
  public formSubmited = false;
  public registerForm =this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    apellido:['',[Validators.required, Validators.minLength(3)]],
    doctoIdent:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    clave:['',Validators.required],
    password2:['',Validators.required],
    cia:['10']


  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService,private router:Router ) { }


  crearUsuario(){
  
    this.formSubmited=true;
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
      
    }
    this.usuarioService.crearUsuario(this.registerForm.value).subscribe((resp:any) =>{
      console.log(resp);
      if (resp.token!=null) {
        this.router.navigateByUrl('/')
        
      }
      console.log('usuario creado');
    }, (err) => console.warn(err));
  
  }

  campoNoValido(campo:string):boolean {
    if (this.registerForm.get(campo).invalid && this.formSubmited) {
      return true;
      
    } return false;
  }
  contrasenasNoValidas():boolean {
    const pass1= this.registerForm.get('clave').value;
    const pass2= this.registerForm.get('password2').value;
    if ((pass1 !== pass2) && this.formSubmited) {
      return true;
      
    } return false;
  }


  ngOnInit() {
  }

}
