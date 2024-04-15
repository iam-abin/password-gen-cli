#!/usr/bin/env node
import { program } from "commander";
import chalk from "chalk";
import clipboard from "clipboardy";
const log = console.log;
import { createAPassword } from "./utils/createPassword.js";
import { savePassword } from "./utils/savePassword.js";
import figlet from "figlet";

const styledDescriptionText = chalk.green(
    figlet.textSync("Password Generator", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: false,
    })
)
program.version("1.0.0").description(styledDescriptionText);

program
	.option("-l, --length <number>", "length of password", "8")
	.option("-s, --save", "save password to password.txt")
	.option("-nn, --no-numbers", "remove numbers")
	.option("-ns, --no-symbols", "remove symbols")
	.parse();

// Values of above provides options length is 8 by default and others are 'true'
const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createAPassword(length, numbers, symbols);

// To save password to file
if (save) savePassword(generatedPassword);

// Copy to clipboard
clipboard.writeSync(generatedPassword);

// Output the generated password
log(chalk.blue("Generated Password is: ") + chalk.bold(generatedPassword));

log(chalk.yellow("Password copied to clipboard"));
