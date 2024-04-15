## Installation

1. Clone the repository:

   ```
   git clone https://github.com/iam-abin/password-gen-cli.git
   ```

2. Navigate to the project directory:

   ```
   cd password-gen-cli
   ```

3. Install the dependencies ;

   ```
   npm install 
   ```

4. To generate a random password

   ```
   node index.js
   ```

## To see all other available options 

```
node index -h
```
![alt text](public/help.png)

options eg:-
To generate password of length 13, we can use as

```
node index -l 13
```

---

npm link
========

When you run `npm link` inside your package directory, it globally installs your package and creates a symbolic link from the global installation to your package directory.

To do that, from the project directory, run,

```
npm link
```
In ubuntu we need to use sudo before npm.

Now we can run out application globally using its name.
This application can be run as,
```
passwordgen
```

To unlink this,
```
npm unlink -g passwordgen
```
In ubuntu we need to use sudo command also.
