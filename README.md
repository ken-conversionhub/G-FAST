# G-FAST

This is the source code for the frontend of G-FAST.

## Getting Started

These instructions will get you a copy of this project up and running on your local machine for development purposes. Cloning this repository into your local environment is recommended in order to avoid conflicts in concurrent changes, access backup in a public domain, and trace previous changes for bug tracking.

### Prerequisites
+ Text Editor (e.g. [VSCode](https://code.visualstudio.com/), [Brackets](http://brackets.io/), [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/))
+ [Sass](https://sass-lang.com/install)
+ [Git](https://git-scm.com/downloads)
+ [Github Account](https://github.com/join)
+ [FileZilla Client](https://filezilla-project.org/)

Before anything else, you must first install these prerequisites.

### Cloning the repository

In order to clone this website to your local environment, create a separate folder where you wish to place the files. Right click the folder you created then select **Git Bash Here**. The command line will appear.

Scroll up on this repository and click the **Clone or download** button, where a dropdown will appear with a link provided. Copy that link. Go back to the command line then type `git clone (link you just copied)`. For example:

```
git clone https://github.com/ken-conversionhub/G-FAST.git
```

This command will do the entire cloning process. After waiting for a few minutes, you should be notified that the cloning process is done and all of the files in this repository are now accessible in your local server. You are free to modify the files with the text editor of your choice.

### Compiling Sass

This site uses Sass to make our stylesheets more organised. The base code of our styles is located in `sass/style.sass` which compiles to `css/style.css`, so it is highly recommended to avoid manually updating the CSS files and instead write your CSS in the Sass files. In order to compile Sass files into CSS, I recommend choosing between these two options:

+ Terminal
+ Koala

#### Terminal
Once Sass is installed, compile your Sass by opening the terminal in your directory. Type:

```
sass --watch scss/style.scss css/style.css
```

That should do the trick. For further instructions and information, check out the Sass official [guide](https://sass-lang.com/guide) under the Preprocessing section.

#### Koala
You can download and install Koala from their [main website](http://koala-app.com/).

Once you have downloaded and installed Koala, open it and add the root path of your project by clicking the **+** button. It will automatically scan the directory for Sass and CSS files. Once the scan is finished, right click on the base Sass file (i.e. `sass/style.scss`) and select **Set Output Path**, then select `css/style.css`. Right click once again and select **Compile**.

This will auto-compile your Sass file into CSS. Make sure to do these steps every time you have to modify the stylesheets to render changes upon refreshing the pages.

### Creating your separate SCSS file and importing it to the base Sass file

If you wish to avoid messing up the website's CSS, it is highly suggested to create your own separate Sass file and write all of your CSS there.

To do this, simply create a new **.scss file** (the file name is entirely up to you) but make sure that an underscore precedes the file name (e.g. `_custom.scss`). Import it by writing `@import "(file name without the underscore)"`. For example, write this at the top of `style.scss`, next to the previously imported Sass files:

```
@import "custom"
```

### Updating the repository

In order for you to be able to push files and directly contribute to this project, your GitHub account must be assigned as a collaborator of this repository. Contact me at [ken@conversion-hub.com](mailto:ken@conversion-hub.com) so I can grant you access.

If someone has made changes to the files, you can download all of their changes by opening Git in your project's directory (assuming it was cloned from this repository) and type:

```
git pull
```

That should automatically update your files to the latest changes.

If you wish to check the status of your modified files and whether they have been pushed to the repository or not, type: `git status` in your Git Bash terminal.

If you wish to push your changes to the repository, you may use the git commands `add`, `commit`, and `push`. Here is an example:

```
git add .
git commit -m 'Modified the CSS file'
git push
```

**Important:** You must set your name and email on Git before pushing to the repository. Type the following in your git bash terminal (replace John Doe with your own name):

```
git config --global user.name 'John Doe'
git config --global user.email 'johndoe@jconversion-hub.com
```

## Online Preview

To preview the website in Conversion Hub's dev server, open FileZilla and add the server in your Site Manager. Request the `host`, `user`, and `password` credentials from Eugene. The dev server path of this site is located in https://conversion-hub.com/projects/on-going/gfast-html/

Make sure you push all of your changes to this GitHub repository after you have uploaded your files into the dev server.

## Authors

+ **Ken Samonte** wrote majority of the code for the website and wrote the entire documentation.
+ **Ralph Montevirgen** helped modify the initial design of the layout.

Feel free to insert your name here if you made contributions to this website.