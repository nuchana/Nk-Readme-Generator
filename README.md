# Nk-Readme-Generator

## Description 
  
*The what, why, and how:* 
  
Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. 

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. Check out the [`exampleREADME.md`](https://github.com/nuchana/Nk-Readme-Generator/blob/main/exampleREADME.md) in this repo as an example. 




## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Methodology](#methodology)
* [License](#license)
  

## Installation

*Steps required to install project and how to get the development environment running:*

To generate your own README, first run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:
  * [`inquirer`](https://www.npmjs.com/package/inquirer) that will prompt you for your inputs from the command line 
  * [`axios`](https://www.npmjs.com/package/axios) to fetch your info from the GitHub API

The application itself can be invoked with `node index.js`.


## Usage 

*Instructions and examples for use:*

When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses `axios` to get your GitHub profile from the [GitHub API](https://developer.github.com/v3/), including your GitHub profile and email.

From there, the application will generate markdown and a table of contents for the README conditionally that will depend on your responses to the Inquirer prompts (so, if it's required questions, the default mode is set up. But if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo.

Last but not least, `fs.writeFile` is used to generate your project's README.md file. Check out the [`exampleREADME.md`] (https://github.com/nuchana/Nk-Readme-Generator/blob/main/exampleREADME.md) in this repo as an example. 


## Methodology

The application also utilizes, as much as possible, syntax and paradigms introduced in ES6 and beyond, including `arrow functions`, `const`, `let`, template literals, and `async/await` to handle the `inquirer`, `axios`, and `fs.writeFile` promises.

The application utilizes modularization by separating the GitHub API call and generation of the markdown into separate modules: `getUser.js` and `generateMarkdown.js`, respectively, inside the `utils` folder.


## License

MIT License

---

## Questions?

Please feel free to contact me with examples or any questions via the information below:

GitHub: [@nuchana](https://api.github.com/users/nuchana)

Email: nuchana@gmail.com