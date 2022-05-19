# Language Guesser

> Code of a very basic website (that isn't published) that I did along side a web development course.

**Generic:** This code is not meant to be an actual website, it was made for didactical reasons and it uses Bootstrap as a CSS Framework to develop a—maybe not so—nice looking design. The purpose of this code is to consolidate all the things I´ve been shown in the course so far.

**Specific:** This code works and should be run in the NodeJS REPL. It allows the user to write a few lines of text in any language and the program identifies which language was used. To accomplish this project I relied heavily on the Franc, Langs, and Colors packages. No NLP was done by me, all this heavylifting was done by the Franc package.

## Technical details

To run this code first run the following command while on this directory level:

```shell
$ npm install
```

This will download all required packages based on the package.json file contained in this repository. To run npm commands you have to download [NodeJS](https://nodejs.org/en/).

Used packages:
- Franc
- Langs
- Colors