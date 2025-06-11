# GPA-Calculator
A software to calculate GPA score

<br>

# 🛠️ Installation
>Follow the steps below to set up and run this project on your local machine.

## 1. Clone the repository
```bash
git clone https://github.com/phathung2003/GPA-Calculator.git
```

<br>

## 2. Install dependencies
```bash
cd GPA-Calculator

npm install
# or
yarn install
```

<br>

> If you see this error:
```bash
'npm' is not recognized as an internal or external command, operable program or batch file.
```
> It means that Node.js (which includes npm) is either not installed or not added to your system PATH.
> 
> Follow the steps below to fix the issue.

<br>

### 🔍 Step 1: Check if Node.js is installed.
Open **Command Prompt (CMD)** and run:
```bash
node --version
npm --version
```
> If you get this error message like below or no version number is shown.
```bash
# For node --version
'npm' is not recognized as an internal or external command, operable program or batch file.

# For npm --version
'npm' is not recognized as an internal or external command, operable program or batch file.
```
✅ In that case, continue to **[Step 2](https://github.com/phathung2003/GPA-Calculator/edit/calculate-missing-score/README.md#-step-2-download-and-install-nodejs)**.

❌ If version numbers appear, skip to **[Step 3](https://github.com/phathung2003/GPA-Calculator/edit/calculate-missing-score/README.md#-step-3-if-nodejs-is-installed-but-still-not-recognized)**.

<br>

### 📥 Step 2: Download and Install Node.js
1. Go to https://nodejs.org and download the **NodeJS(LTS)** version.

2. Run the installer and keep all the default options (only change options if you know what you’re doing).

<br>

### 🔧 Step 3: Node.js is installed but not recognized
> You may need to manually add it to the system PATH:

1. Press **Windows + S** and search for: **Environment Variables**

2. Click **Edit the system environment variables** 

3. In the window, click **Environment Variables...**

4. Under **System variables** → Select **Path** → Click **Edit**

5. Click New and add:
```bash
# Default NodeJS installation.
C:\Program Files\nodejs\

# Or the path you used to install Node.js.
```
6. Click all the **OK** to save and close all the dialogs.

<br>

### 🔄 Final Step: Test Again
Open a new **Command Prompt (CMD)** window and repeat **Step 1**. This time, you should see the version numbers displayed, for example:
```bash
node --version
v22.16.0
    
npm --version
10.9.2
```
After verifying the versions, you can proceed to retry the **Install dependencies** process.

<br>

## 3. Run the project
```bash
npm start
```

<br>

# 📜 License
Apache License 2.0
