# Language Guesser

> Code of a very basic NodeJS project that I did along side a web development course.

**Generic:** This code has be run using NodeJS, it is not meant to be a website. It was made for didactical reasons and uses a bunch of different NodeJS packages to work. The purpose of this code is to consolidate all the things I´ve been shown in the course so far.

**Specific:** This code works and should be run in the NodeJS REPL. It allows the user to write a few lines of text in any language and the program identifies which language was used. To accomplish this project I relied on the Franc, Langs, Figlet, and Colors packages. No NLP was done by me, all this heavylifting was done with Franc.

## Technical details

To run this code first run the following command while on this directory level:

```shell
npm install
```

This will download all required packages based on the package.json file contained in this repository. To run npm commands you have to download [NodeJS](https://nodejs.org/en/).

Used packages:
- Franc
- Langs
- Colors
- Figlet

Once you've got the project in your computer run the program as follows for a quick example.

```shell
node index.js "This is a brief example parameter that should detect the language as English."
```
