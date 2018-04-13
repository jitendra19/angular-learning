import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';


//created by me only so, I will mention in declarations only
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMainLayoutComponent } from './app-main-layout/app-main-layout.component';


import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';


// If a component, directive, or pipe belongs to a module in the imports array, ​don't​ re-declare it in the declarations array.
// If you wrote it and it should belong to this module, ​do​ declare it in the declarations array.

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    AppFooterComponent,
    AppMainLayoutComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
