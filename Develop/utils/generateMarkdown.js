// function to generate markdown for README
function generateMarkdown(userResponse, userInfo) {
  // Generate table of contents conditionally based on user response for optional questions
  let Toc = `## Table of Contents`;

  if (userResponse.installation !== '') {
    Toc += `*[Installation](#installation)`
  };

  if (userResponse.usage !== '') {
    Toc += `*[Usage](#usage)`
  };

  if (userResponse.contributing !== '') {
    Toc += `*[Contributing](#contributing)`
  };

  if (userResponse.tests !== '') {
    Toc += `*[Tests](#tests)`
  };

  // Create markdown for the badge & top required portion of readme.md
  let markDown =
  `# ${userResponse.title}

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponse.username}/${userResponse.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponse.username}/${userResponse.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  ## Description

  *The what, why, and how:*

  ${userResponse.description}

  `

  // Add table of contents to markdown
  markDown += Toc;

  // Add license section to the table of content
  markDown += `
  * [License](#license)`;

  // optional installation section
  if (userResponse.installation !== '') {
  markDown +=

  `
  ## Installation
    
  *Steps required to install project and how to get the development environment running:*
    
  ${userResponse.installation}`

  };


  // Optional Usage section
  if (userResponse.usage !== '') {

    draftMarkdown +=

    `
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${userResponse.usage}`
  };


  // Optional Contributing section
  if (userResponse.contributing !== '') {
    `
    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${userResponse.contributing}`
  };


  // Optional Tests section
  if (userResponse.tests !== '') {

    draftMarkdown +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${userResponse.tests}`
  };

  // license section is required
  markDown +=
  `## License

  ${userResponse.license}`;

  // Questions/ about developer part
  let developer =

  `
  ---
  
  ## Questions?
  
  For any questions, please contact me with information below
  
  GitHub: [@${userResponse.username}](https://github.com/${userResponse.username})

  Email: ${userResponse.email}`;

  // add developer section to markdown
  markDown += developer;

  return markDown;

}

module.exports = generateMarkdown;
