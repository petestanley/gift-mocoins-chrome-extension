'use strict';

const movemberFacts = [
    "1 in 7 men will be diagnosed with prostate cancer. 1 in 8 women will be diagnosed with breast cancer.",
    "Over 6 million men are diagnosed with depression each year.",
    "A new case of prostate cancer is diagnosed every 2.2 minutes.",
    "70% of men either never have or don’t regularly check their nuts.",
    "The Movember Foundation focuses on three areas that we know need the most work: Prostate Cancer, Testicular Cancer and Mental health.",
    "Testicular cancer rates have doubled over the last 50 years.",
    "If you catch prostate cancer early - when the cancer is still isolated just to the prostate - there is a 98% chance of survival (98%!!!).",
    "For Canadian men between the ages of 15-44, suicide is the leading cause of death. Globally, a man dies by suicide every minute."
];


var showFact = movemberFacts[Math.floor(Math.random() * Math.floor(8))];
// Show modal when balance is more than 500
chrome.storage.sync.get('balance', (data) => {
    if (data.balance >= 100) {
        document.body.innerHTML += `
            <dialog class="dialog__window">
                <p id='close-button-wrapper'>
                <button id="close-button" class="popup-button popup-button-raised">Close</button>
                </p>
                <img src="https://1zbuhu1t3cn216t5533fsizp-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/MOV_FOUND_Proud-Partner_Horizontal_Black_RGB-740x232.jpg">
                <p class="dialog__content-text">Movember Foundation is the leading charity changing the face of men’s health.</p>
                <h1 class="dialog__content-title">Did you know?</h1>
                <p class="dialog__content-text">${showFact} Donate today to have an everlasting impact on the face of men\'s health.</p>
                <p id="redeem-button">
                    <button id="redeem-donate" class="redeem-donate-button popup-button popup-button-raised">Donate / Redeem</button>
                </p>
            </dialog>
        `;
        var dialog = document.querySelector("dialog");
        dialog.querySelector("#close-button").addEventListener("click", function() {
            dialog.close();
        })
        dialog.querySelector("#redeem-donate").addEventListener("click", function() {
            dialog.close();
            window.open("http://movember.webflow.io/");
        })
        dialog.showModal();
    }
});