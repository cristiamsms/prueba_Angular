import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({

    password:['',Validators.required],
    companyId:['10'],
    username:['',[Validators.required, Validators.email]],
    desdeMs:[true]

    


  });



  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.loginForm.value);
    this.usuarioService.login(this.loginForm.value).subscribe((resp:any) =>{console.log(resp.token); if(resp.token !== null) {
      this.router.navigateByUrl('/')
      
    };}, (err)=>{console.warn(err)});
    
  }

}
