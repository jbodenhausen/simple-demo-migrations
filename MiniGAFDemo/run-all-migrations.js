const spaces = [
    //ADD ALL SPACE IDs HERE, ex:
    //"[SPACE ID 1]",
    //"[SPACE ID 2]",
    //"[SPACE ID X]"
]

const migrations = [
    "01-add-banner-type.js",
    "02-update-featured-to-allow-banner-links.js"
]

const { exec } = require("child_process");


for(var space of spaces){
    for( var migration of migrations){
        var command = 'contentful space migration --space-id '+space + ' --yes ' + migration;
        
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }
}


