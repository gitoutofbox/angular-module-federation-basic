import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'mfe1',
    loadChildren: () => import('HomeModule/HomeModule').then(m => m.HomeModule)
    // loadChildren: () =>
    //   loadRemoteModule({
    //     type: 'module',
    //     remoteEntry: 'http://localhost:5001/remoteEntry.js',
    //     exposedModule: './HomeModule'
    //   }).then(m => m.HomeModule)
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5002/remoteEntry.js',
        exposedModule: './UsersModule'
      }).then(m => m.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
