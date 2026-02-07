const { exec } = require ("child_process");

// auto showdown
exec("shutdown /s /t 3", (err) => {
    if (err) console.error(err);
});