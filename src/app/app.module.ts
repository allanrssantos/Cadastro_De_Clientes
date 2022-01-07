
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { HttpClientModule } from '@angular/common/http';
  import { CommonModule } from '@angular/common';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import {MatTableModule} from '@angular/material/table';
  import { registerLocaleData } from '@angular/common';
  import localePT from '@angular/common/locales/pt';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import {MatButtonModule} from '@angular/material/button';

  import { NgxMaskModule, IConfig } from 'ngx-mask';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
  import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
  import { DeleteCadastroComponent } from './delete-cadastro/delete-cadastro.component';

  registerLocaleData(localePT);

  @NgModule({
    declarations: [
                AppComponent,
                FormularioCadastroComponent,
                ListaCadastroComponent,
                DeleteCadastroComponent
    ],
    imports: [
                BrowserModule,
                AppRoutingModule,
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                NgxMaskModule.forRoot(),
                BrowserAnimationsModule,
                MatTableModule,
                MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }


