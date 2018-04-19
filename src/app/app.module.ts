import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { ChatComponent } from './chat/chat.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

//https://scotch.io/bar-talk/getting-to-know-angular-2s-module-ngmodule
@NgModule({
    imports: [ // put all your modules here 
      HttpClientModule,
      BrowserModule,
      FormsModule,
      NgSelectModule,
      RouterModule.forRoot([ // routes declaration
        {
          path: '',
          component: LandingComponent
        },
        {
          path: 'chat',
          component: ChatComponent
        },
        {
          path: 'dynamic-form',
          component: DynamicFormComponent
        }
      ])
  ],
  declarations: [ // put all your components / directives / pipes here
    AppComponent,
    LandingComponent,
    ChatComponent,
    DynamicFormComponent
  ],
  providers: [
        {
            provide: NG_SELECT_DEFAULT_CONFIG,
            useValue: {
                notFoundText: 'Items not found',
                addTagText: 'Add item',
                typeToSearchText: 'Type to search',
                loadingText: 'Loading...',
                clearAllText: 'Clear all'
            }
        }
  ],// put all your services here
  bootstrap: [AppComponent] // The main components to be bootstrapped in main.ts file, normally one only
})
export class AppModule { }
