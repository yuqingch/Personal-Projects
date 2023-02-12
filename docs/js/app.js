/**
 * WEB222 – Final Assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Yuqing Chen
 *      Student ID: 115285223
 *      Date:       2022-11-13
 */

function otherOption(event) {
    if (event.target.id === "Other") {
        if(!document.getElementById("oBox")) {
        const topic = document.createElement("textarea");
        topic.id = "oBox";
        const element = document.querySelector("#reason");
        element.appendChild(topic);
    }
}
    else if (event.target.id === "School" | event.target.id === "Job_Offer"){
        var element = document.getElementById("oBox");
        element.parentNode.removeChild(element);
    }
}

addEventListener("click", otherOption);
