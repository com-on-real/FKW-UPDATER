const uaup = require('uaup-js');


//This is Optional
const defaultStages = {
    Checking: "vérification...", // When Checking For Updates.
    Found: "On a trouvé une mise a jour :)",  // If an Update is Found.
    NotFound: "Pas de MàJ.", // If an Update is Not Found.
    Downloading: "téléchargement...", // When Downloading Update.
    Unzipping: "installation...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Finalisation...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Lancement..." // When Launching the Application.
};

const updateOptions = {
    gitRepo: "FKW-UPDATER", // [Required] Your Repo Name
    gitUsername: "com-on-real",  // [Required] Your GitHub Username.

    appName: "fkw", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "FKW.exe", //[Required] The Executable of the Application to be Run after updating.

    progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
};

uaup.Update(updateOptions);