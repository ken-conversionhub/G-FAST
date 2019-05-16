# G-FAST

This is the source code for the frontend of G-FAST.

## Getting Started

These instructions will get you a copy of this project up and running on your local machine for development purposes. Cloning this repository into your local environment is recommended in order to avoid conflicts in concurrent changes, access backup in a public domain, and trace previous changes for bug tracking.

For testing purposes, upload the files to Conversion Hub's dev server via FTP before or after committing and pushing to this repository.

### Prerequisites
+ Text Editor (e.g. [VSCode](https://code.visualstudio.com/), [Brackets](http://brackets.io/), [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/))
+ [Sass](https://sass-lang.com/install)
+ [Git](https://git-scm.com/downloads)
+ [Github Account](https://github.com/join)

Before anything else, you must first install these prerequisites.

### Cloning the repository

In order to clone this website to your local environment, create a separate folder where you wish to place the files. Right click the folder you created then select `Git Bash Here`. The command line will appear.

Scroll up on this repository and click the **Clone or download** button, where a dropdown will appear with a link provided. Copy that link. Go back to the command line then type `git clone (link you just copied)`. For example:

```
git clone https://github.com/ken-conversionhub/G-FAST.git
```

This command will do the entire cloning process. After waiting for a few minutes, you should be notified that the cloning process is done and all of the files in this repository are now accessible in your local server. You are free to modify the files with the text editor of your choice.

### Creating your separate SCSS file and importing it to the base Sass file

This site uses Sass to make our stylesheets more organised. The base code of our styles is located in `sass/style.sass` which compiles to `css/style.css`, so it is highly recommended to avoid manually updating the CSS files and instead write your CSS in the Sass files. In order to compile Sass files into CSS, there are two options:

+ Termainal
+ Koala

#### Terminal
Once Sass is installed, compile your ass by opening the terminal in your directory and type:

```
sass --watch scss/style.scss css/style.css
```

That should do the trick. For further instructions and information, check out the Sass official [guide](https://sass-lang.com/guide), under the Preprocessing section.

#### Koala
You can download and install Koala on their [main website](http://koala-app.com/).

Once you have downloaded and installed Koala, open it and add the root path to your project by clicking the **+** button. It will automatically scan the directory for Sass and CSS files. Once the scan is finished, right click on the base Sass file (i.e. `sass/style.scss`) and select `Set Output Path`, then select `css/style.css`. Right click once again and select `Compile`.

This will auto-compile your Sass file into CSS. Make sure to do these steps every time you have to modify the files.

### Updating the repository



## Authors

* **Ken Samonte**
