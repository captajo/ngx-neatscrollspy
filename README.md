# ngx-scrollspys
This is an extension for Angular 2+ applications, for smooth scroll-spy experience

# Installation
Install this extension from npm repository using

      - npm i ngx-scrollspys --save

# Setting Up
Setup in your angular project by importing, `NeatScrollspyModule` into your `app.module.ts`

          import { NeatScrollspyModule } from 'ngx-scrollspys'; 

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

1. Set the point in your HTML you want to monitor scroll 

        <div [neatScrollSpy]="{ id: 'uniqueID', selector: 'mains'}">
              // Place code you want to spy on scroll here with assigned selector as class
              // Example <h2 class="mains"></h2>
        </div>
              
2. Set where to display scroll options and responses 

        <neat-scrollspy-template [neatScrollspyOptions]="{ id: 'uniqueID' }"></neat-scrollspy-template>


# neatScrollSpy (directive)
This is the marker used to tell the extension to listen for elements within its span. The available options for this directive are as follows:

| Option | Description |
| ------ | ----------- |
| id     | This is a unique field used by the extension template to identify its marker. Note: This field must be unique |
| selector | This is a class field, used by the extension |


# neat-scrollspy-template (template)
This is the template for neat-scrollspy, which display the scroll options. Available directives within this template are:



# highlightOptions (directive)
This option is used for editing the highlighting style of the neatScrollSpy extension. Example of usage:

        <neat-scrollspy-template [highlightOptions]="{ type: 'bold' }" [neatScrollspyOptions]="{ id: 'uniqueID' }"></neat-scrollspy-template>

| Option | Description |
| ------ | ----------- |
| type   | Uses this option to indicate the type of highlight you want. Available options are: "bold" and "background-color". Default is "bold" |
| highlightColor | This is the color taken by the currently displayed element within view. It is used to indicate which element is currently within view. Default is "blue" |
| defaultColor | This is the default color used by all other elements outside the current view. Default is "black" |
| highlightTextColor | This is the text color used by all elements within the current view. Default is "white" |



# selectionOrder (directive)
This option is used for editing the number of items highlighted on a page. Example of usage:

        <neat-scrollspy-template [selectionOrder]="{ type: 'first' }" [neatScrollspyOptions]="{ id: 'uniqueID' }"></neat-scrollspy-template>

| Option | Description |
| ------ | ----------- |
| type   | This is used to indicate which element(s) within view is highlighted. Available options are; "first" and "all". `first` - This highlights the first element within vie. `all` - This highlights all element within view |



# alignOption (directive)
This option is used for editing the alignment structure on the page. Example of usage:

        <neat-scrollspy-template [alignOption]="{ type: 'straight' }" [neatScrollspyOptions]="{ id: 'uniqueID' }"></neat-scrollspy-template>

| Option | Description |
| ------ | ----------- |
| type   | This is set alignment for the scrollspy options. The Available options are: "straight", "auto", "manual". `straight` - This aligns all scrollspy options in a straight line (Default). `auto` - This aligns the scrollspy options in a tree manner, using regular [h1 - h5]. `manual` - This aligns the scrollspy options as set by the users. Users can set indentation using the "data-align" attribute. |
| topMargin | This accepts an integer as value, indicating the distance from the top of the page to the selected item when clicked |


# TODO

 - Unit Test
 - Publish Example Page