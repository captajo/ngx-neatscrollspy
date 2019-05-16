# ngx-neatscrollspy
This is an extension for Angular 2+ application, for smooth scroll-spy experience

# Installation
Install this extension from npm repository using

      - npm i ngx-neatscrollspy --save

# Setting Up
Setup in your angular project by importing, `NeatScrollspyModule` into your `app.module.ts`

          import { NeatScrollspyModule } from 'ngx-neatscrollspy'; 

          ...... 

          @NgModule({
            declarations: [ ... ],
            imports: [
              ....
              NeatScrollspyModule,
            ]
          })


# Getting Started
NeatScrollspy can be used real quick and easy, with just two basics. 

1. Step the point in your HTML you want to monitor scroll 

        <div [neatScrollSpy]="{ id: 'uniqueID', selector: 'mains'}">
              // Place code you want to spy on scroll here with assigned selector as class
              // Example <h2 class="mains"></h2>
        </div>
              
2. Step where to display scroll options and responses 

        <neat-scrollspy-template [neatScrollspyOptions]="{ id: 'uniqueID' }"></neat-scrollspy-template>
            

