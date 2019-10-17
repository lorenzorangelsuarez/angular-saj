import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PARA CONSUMO DE SERVICIOS EXTERNOS
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTES DE LA APLICACIÓN
import { AsuntosComponent } from './components/asuntos/asuntos.component';
import { LoginComponent } from './components/login-components/login/login.component';
import { MenuBienvenidaComponent } from './components/menu-bienvenida/menu-bienvenida.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { MenuLateralComponent } from './components/shared/menu-lateral/menu-lateral.component'
import { LoginToolbarComponent } from './components/login-components/login-toolbar/login-toolbar.component';

// CHARTS
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { DetalleTurnoComponent } from './components/detalle-turno/detalle-turno.component';

@NgModule({
  declarations: [
    AppComponent,
    AsuntosComponent,
    LoginToolbarComponent,
    LoginComponent,
    ToolbarComponent, 
    MenuLateralComponent,
    PieChartComponent,
    MenuBienvenidaComponent,
    TurnosComponent,
    RespuestaComponent,
    DetalleTurnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatToolbarModule,
    MaterialModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    ToolbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
