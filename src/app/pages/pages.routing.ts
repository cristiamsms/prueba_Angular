import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavComponent } from './fav/fav.component';
import { InfoComponent } from './info/info.component';
import { ProggressComponent } from './proggress/proggress.component';


const routes: Routes = [
   
    {path: 'dashboard', component: PagesComponent,
    children:[
       
      {path: '', component: DashboardComponent},
      {path: 'fav', component: FavComponent},
      {path: 'info', component: InfoComponent},
      {path: 'proggress', component: ProggressComponent}
     
       
     ]
  
  }

 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
