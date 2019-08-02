import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { PresenteComponent } from './components/presente/presente.component';
import { ModalContatoComponent } from './components/modal-contato/modal-contato.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MascaraTelefoneDirective } from './directives/mascara-telefone.directive';

@NgModule({
  declarations: [
    AppComponent,
    PresenteComponent,
    ModalContatoComponent,
    MascaraTelefoneDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalContatoComponent]
})
export class AppModule { }
