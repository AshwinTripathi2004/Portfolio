let btns = document.querySelectorAll(".btn");
let submit = document.getElementById("submit");

btns.forEach(function (button) {
    button.addEventListener("click", function () {
        let id = button.getAttribute("id");

        if (id === "ui") {
            showSection("uiDesign");
        } else if (id === "web") {
            showSection("webDesign");
        } else if (id === "mobile") {
            showSection("android");
        } else if (id === "all") {
            showAllSections();
        }
    });
});

function showSection(sectionId) {
    let sections = document.querySelectorAll(".serviceCard");
    sections.forEach(function (section) {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

function showAllSections() {
    let sections = document.querySelectorAll(".serviceCard");
    sections.forEach(function (section) {
        section.style.display = "block";
    });
}

function downlodeBtn() {
    alert("CV Downloaded");
}

submit.addEventListener("click", function () {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let msg = document.getElementById("msg");

    if (name.value === "" || email.value === "" || msg.value === "") {
        alert("Please Fill in All Details");
    } else {
        alert("Thanks for Connecting!");
    }
});