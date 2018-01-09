import { FeedbackComponent } from './feedback.component';
import { CertificateComponent } from './certificate.component';
import { SecurityInjectionComponent } from './security-injection.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LearningObjectComponent} from './learning-object.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningObjectComponent,
    SecurityInjectionComponent,
    CertificateComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
