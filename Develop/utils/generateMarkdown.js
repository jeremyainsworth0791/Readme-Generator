// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
  // if there's a license then render badge --> at top under title
  return `* [badge](https://img.shields.io/apm/l/vim-mode)`;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  // render license link --> to correct section
  
  return `
  ## Copyright <2021> <${data.username}>

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  [license link](https://opensource.org/licenses/MIT)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  // if there's a license, render entire section
    if(data.license != null){
     return ` 
    ## License
     ${renderLicenseBadge()}
     ${renderLicenseLink(data)}
     
     
     `;

    }else 
    return ` `;
  // return template literal for license section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projname}

  
  ${renderLicenseSection(data)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  
  ## Description
  ${data.description}
  ${data.projurl}
  [Demo here!](https://something.heroku.com) 

  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  





`;
}

module.exports = generateMarkdown;
