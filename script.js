document.getElementById("os-mode").addEventListener("click", () => {
    document.body.classList.remove("main-body", "dark");
    document.body.classList.add("OS");
});

document.getElementById("dark-mode").addEventListener("click", () => {
    document.body.classList.remove("main-body", "OS");
    document.body.classList.add("dark");
});

document.getElementById("light-mode").addEventListener("click", () => {
    document.body.classList.remove("dark", "OS");
    document.body.classList.add("main-body");
});