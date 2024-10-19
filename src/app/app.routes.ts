import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RealEstateFormComponent } from './real-estate-form/real-estate-form.component';
import { RealEstateDetailComponent } from './real-estate-detail/real-estate-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'real-estate-listings', component: HomeComponent},
    {path: 'real-estate-form', component: RealEstateFormComponent},
    {path: 'real-estate-detail/:id', component: RealEstateDetailComponent},
    {path: '', redirectTo: '/real-estate-listings', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
