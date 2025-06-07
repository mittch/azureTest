import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { PrinciplesComponent } from './principles/principles.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'principles', component: PrinciplesComponent },
  { path: 'impressum', component: ImpressumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
