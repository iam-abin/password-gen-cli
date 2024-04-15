import fs from "fs/promises";
import path from "path";
import os from "os";
import chalk from "chalk";

import { fileURLToPath } from 'url';

// Convert the current module's file URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const savePassword = async (password) => {
    try {
        // Define the path to the passwords.txt file
        const filePath = path.join(__dirname, "../", 'passwords.txt');
        
        // This will create the file and Append the password to the file if it doesn't exist else append.
        await fs.appendFile(filePath, password + os.EOL, { encoding: 'utf-8', mode: 0o666 });
        console.log(chalk.green("Password saved to passwords.txt"));
    } catch (error) {
        console.error(chalk.red("Error saving password:", error));
    }
};
