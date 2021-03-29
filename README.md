
# Orba One Demo
<p align="center">
  </br>

  <a href="https://github.com/orbaone/verify#contribute" target="_blank">
    <img alt="Contributors" src="https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square">
  </a>

  <a href="https://standardjs.com" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square">
  </a>
</p>
<hr>

# Table of contents

- [Usage](#usage)
- [Installation](#installation)
- [Contribute](#contribute)


# Usage

Access the latest demo at [demo.orbaone.com](https://demo.orbaone.com), to start integration check out our [documentation](https://docs.orbaone.com).


# Installation

*For **development only**.*

Clone this repository and navigate inside the project folder and install the dependencies by running:

```sh
npm install
```

### Environmental Variables
Before running a build or the development server, be sure to create **two** [dotenv](https://github.com/motdotla/dotenv) files in the root directory.

```sh
touch .env.development.local
touch .env.production.local
```

After add the following
- `VUE_APP_ORBA_ONE_ENDPOINT` 
- `API_KEY`
- `SECRET_KEY`

environmental variables to each for development and production, respectively.

After installing the dependencies and create environmental variables, build the project by executing:

```sh
npm run build
```

Run the tests

```sh
npm run test
```

Run the development server

```sh
npm run serve
```

