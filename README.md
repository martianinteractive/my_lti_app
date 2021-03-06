# My App [![Build Status](https://travis-ci.org/atomicjolt/my_app.svg?branch=master)](https://travis-ci.org/atomicjolt/my_app) [![Coverage Status](https://coveralls.io/repos/github/atomicjolt/my_app/badge.svg?branch=master)](https://coveralls.io/github/atomicjolt/my_app?branch=master)
-----------------------
There are many starter kits that will help you get started with React and Redux.
This is the one created by, maintained by and used by [Atomic Jolt](http://www.atomicjolt.com).
Atomic Jolt uses this as application as a starting place for Ruby on Rails applications that
utilize React.



## Getting Started

### Build a new application using the My App Rails application template:
-----------
```
rails new my_app -m https://raw.githubusercontent.com/atomicjolt/my_app/master/template.rb
```

### Prerequisites
-----------
This application requires:

-   Ruby
-   Rails ([Info / Installation](http://railsapps.github.io/installing-rails.html))
-   PostGreSQL ([Info / Installation](https://wiki.postgresql.org/wiki/Detailed_installation_guides))
-   NodeJS  ([Info / Installation](https://github.com/creationix/nvm))
-   yarn ([Info / Installation](https://yarnpkg.com/lang/en/docs/install))

#### Canvas Developer ID and Key
You will need to [obtain a Developer ID and Key from an Account Admin for the instance of Canvas the tool will be installed in](#canvas_developer_key).

#### Default LTI Application
You will also need to setup a default lti application and lti application instance. See the [sections below](#setup) for information on setting up the default account.


## Running My App

After [setting up the My App](#setup), start Rails and the webpack server:
```
  rails server
  yarn hot
```


## <a name="setup"></a>Setting up My App

### File Modifications
-----------

#### Setup .env
Rename `.env.example` to `.env` and configure it to your liking.

Note: the App and Assets subdomains must be different.

#### Modify application name
1. Open application.rb and change `MyApp` to the name you choose.
2. Do a global search and replace for `my_app` and change it to the name you choose.
3. Do a global search and replace for `MyApp` (use only letters or numbers for this name. Special characters like '_' will result in errors).

#### Setup config files with bin/setup script (optional)

##### Change bin/bootstrap
In bin/bootstrap change the following line to point to a dropbox folder containing the correct config files for the project. For example:
```
DROPBOX_FOLDER=aj-dev/my_app
```

##### Setup script
Run the setup script to configure your local nginx and to setup symlinks to your configuration files (database.yml, secrets.yml, etc)
```
$ ./bin/setup
```


#### Secrets file
Rename `config/secrets.example.yml` to `config/secrets.yml` and rename `config/database.example.yml` to `config/database.yml`.

Note: If you ran ./bin/setup it calls to the ./bin/bootstrap script which symlinks the files located in the path that was specified as the DROPBOX_FOLDER. If the database.yml and secrets.yml are located in that location then you won't need to rename them from .example.yml.

Open the files and change each entry to values that are relevant for your application.

*These files should not be committed to your repository*


### <a name="database"></a>Setting up the Database
-----------
Setup an admin user and the default lti application with:
```
$ rake db:setup
```

If you have setup .env and the secrets.yml file then the seeds file shouldn't need to be changed. However, if you need to customize the values in the database or add addition records to the database, open db/seeds.rb and configuration a default account for development and production. Here's a summary of the values and their purpose:

- **code:** Uniquely identifies the account. This is used for the subdomain when running
applications on a single domain. By default this will be set to APP_SUBDOMAIN from the .env file.
- **domain:** Custom domain name. By default this is set to application_main_domain from the secrets.yml file.
- **name:** Name the account anything you'd like. By default this is set to application_name from the secrets.yml file.
- **lti_key:** A unique key for the LTI application you are building. This will be provided to Canvas. By default this will be set to APP_SUBDOMAIN from the .env file.
- **lti_secret:** The shared secret for your LTI application. This will be provided to Canvas and will be used to sign the LTI request. Generate this value using `rake secret`. Alternatively if you leave this field empty an LTI secret will be automatically generated for the account.
- **canvas_uri:** The URI of the Canvas institution to be associated with a specific account.

### <a name="canvas_developer_key"></a>Obtain a Canvas Developer Key
-----------
Only a Canvas Account Admin can create a developer key for your LTI Application. To create a key, go to Accounts, Developer Keys and enter the info described below below. Be sure to replace `MyApp.atomicjolt.xyz` with your domain. (atomicjolt.xyz will only work for AtomicJolt employees). Also, note that 'MyApp' is the subdomain specified in the .env file.

You will need an ID and secret for development and for production. The development URI will use atomicjolt.xyz while the production URI will use your domain (e.g. MyApp.herokuapp.com).

**Oauth2 Redirect URI:**
https://MyApp.atomicjolt.xyz/auth/[provider]/callback
**Key Name:**
Can be anything you choose (e.g. My App)

**Owner Email:***
Address that will receive email about technical issues related to the tool.

**Tool ID:**
Unique ID for the tool (e.g. MyApp)

**Redirect URI:**
https://MyApp.atomicjolt.xyz/users/auth/canvas/callback
OR
https://MyApp.herokuapp.com/users/auth/canvas/callback

**Icon URL:**
https://MyApp.atomicjolt.xyz/images/icon.png
OR
https://MyApp.herokuapp.com/images/icon.png

Once you press Save Key, a Developer ID and Key will be generated and displayed in the Details column of the Developer Keys table when you mouse over the row. Add these credentials to your .env file or `config/secrets.yml` file under CANVAS_DEVELOPER_ID and CANVAS_DEVELOPER_KEY (in .env) or `canvas_developer_id` and `canvas_developer_key` (in secrets.yml).

## Development

### Versions
We follow some conservative rules:

  1. Use what’s packaged by Debian/Ubuntu, whenever possible, except for Gems and NPM packages.
  2. For software not packaged by Debian/Ubuntu, use the oldest version that still receives security updates.
  3. Gems and NPM packages may use the newest version, as long as doing so does
  not conflict with other software adhering to the previous two rules.

## Canvas API

The LTI Starter app makes working with the Canvas API simple. See [Canvas](Canvas.md) for more information. Note that working with the Canvas API will require a server side proxy that is not part of this project.


## Admin Page

There is an admin page where one can setup the tools located at `/admin`.
In the settings for an Application Instance, Visibility can be configured to affect who can see the tool when it gets installed.

## Development Details

#### Webpack
Webpack is used to build the client side application. Configure the client application in client/config/settings.js

#### React
The React Rails Starter App uses React. All client side code can be found in the "client" directory. This project contains the code required to launch a React application. index.html.erb contains the following code which will launch a React application whose entry point is 'app.jsx'

```
<% content_for :head do -%>
  <%= webpack_styles_tag 'styles' %>
<% end -%>

<%= render 'shared/default_client_settings' %>
<%= webpack_manifest_script %>
<div id="main-app"></div>
<%= webpack_bundle_tag 'app' %>
```

##### Custom Build Settings
-----------
Default build settings can be overridden by adding an options.json file to the application directory.

###### Options:
-----------
* outName - Change the output directory for an application by specifying "outName" which will override the default name
used when generating a path.
* port - Hard code a port for the application to run. Typically, you won't need to set this value as the build process
will calculate one for you.
* onlyPack - If true don't generate html files. Instead, only run the webpack process and output the resulting files.
* noClean - If true then don't delete files before starting a new build.
* rootOutput - Dump the application directly into the root directory.

Example options.json
`
{
  "outName": "hello_world",
  "port": 8080,
  "onlyPack": true,
  "noClean": false,
  "rootOutput": false,
  "codeSplittingOff": true, // Turn off code splitting
  "extractCssOff": true     // Turn off css extraction
}
`

By default app.jsx is used as the webpack entry point. This can be overriden in webpack.json. Change the buildSuffix,
filename, chunkFilename and other settings:

In webpack.json
`
{
  "file": "app.js",         // The webpack entry. Default is app.jsx
  "buildSuffix": ".js",     // Change the build suffix. Default is _bundle.js
  "filename": "[name]",     // Change the output file name. Default is based on production/development
  "chunkFilename": "[id]",  // Change the chunkFilename. Default is based on production/development
}
`

#### Assets
Any files added to the assets directory can be used by in code and assigned to a variable. This allows for referring to assets using dynamically generated strings. The assets will be built according to the rules specified in your webpack configuration. Typically, this means that in production the names will be changed to include a SHA.

First importing the assets:
  `import assets from '../libs/assets';`

Then assign the assest to a variable:
  `const img = assets("./images/atomicjolt.jpg");`

The value can then be used when rendering:
  `render(){
    const img = assets("./images/atomicjolt.jpg");
    return<div>
    <img src={img} />
    </div>;
  }`

#### Static
Files added to the static directory will be copied directly into the build. These files will not be renamed.

#### Check for updates
Inside the client directory run:
```
yarn upgrade-interactive
```

#### Usage Guide

#### Tenants
Each application instance maintains it's own database schema. The LTI starter app uses the Apartment gem and these
are called "tenants". In some instances multiple application instances need to share the same tenant. It is possible
to do this in the seeds when creating application instances. To use this include a value on the application instance
being created in the seeds.rb file called "share_instance" and set it to the application key related to the
application instance it should share tenants with.


## Scripts:
-----------------------
The following scripts are available for testing, building and deploying applications

Run all tests:
  `yarn test`

Generate coverage report:
  `yarn coverage`

Run webpack hot reload server:
  `yarn hot`

Run reload server for a specific application:
  `yarn hot [app name]`

Serve production assets. Must run `yarn build` first:
  `yarn live`

Build development version including html pages:
  `yarn build_dev`

Only run the webpack build without generating html pages or subdirectories. This will output all results
directly into the build/dev directory
  `yarn build_dev_pack`

Build for production:
  `yarn build`

Only run the webpack build without generating html pages or subdirectories. This will output all results
directly into the build/prod directory
  `yarn build_pack`

After setting up .s3-website.json this will create a S3 bucket and set it as a website:
  `yarn create`

Release a production build to the S3 website bucket created by `yarn create`
  `yarn release`

Run a linter over the project:
  `yarn lint`

Wipe out all node modules:
  `yarn nuke`


#Deploy to S3:
-----------------------

## Deployment

### Heroku
-----------

Make sure you have signed up for a heroku account [Heroku](http://www.heroku.com). Then follow the instructions provided by Heroku to create your application.

Push secrets to production:
```
$ rake heroku:secrets RAILS_ENV=production
```

Deploy to Heroku:
```
$ git push heroku master
```

### Other Services
-----------
By default `config/unicorn.rb` is setup to deploy to Heroku. Open that file, comment out the Heroku section and uncomment the other configuration to setup unicorn for deployment to another service like AWS.

## Examples

Atomic Jolt has built a number of applications based on this source.

### Demo Arigato
-----------
This project was created for the Sales team at Instructure. It makes it simple to populate a sample Canvas course using values from Google Drive Spreadsheets.

Source Code: [https://github.com/atomicjolt/demo_arigato](https://github.com/atomicjolt/demo_arigato)


## Database

This application uses PostgreSQL with ActiveRecord.


## Tests

You may need to install chromedriver if you haven't already.

```
$ brew install chromedriver
```

To run Ruby tests:

```
$ rake spec
```

To run Karma and Jasmine tests run:

```
$ yarn test
```

## TODO

If an admin changes the developer key and secret then existing authentications are invalid. This will result in a 500 error. You will see the following in the log:
LMS::Canvas::InvalidRequestException (Status: 400 Error:  ....

To fix this remove all entries in the Authentications table. In the future we should detect an invalid api token and then remove the db record forcing a new OAuth dance.


questions

1. Does this work with other LMSes?
2. 2 tools installed?


https:
use ngrok or nginx
bundles application can share more than one app

canvas token: generate using a token from the profile section. That would have the permisison of that user. use: as_user_id would have the ability to id the user.


