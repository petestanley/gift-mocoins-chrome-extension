// Show modal when balance is more than 500
chrome.storage.sync.get('balance', (data) => {
    if (data.balance) {
        document.body.innerHTML += `
            <dialog class="dialog__window">
                <p id='close-button-wrapper'>
                <button id="close-button" class="popup-button popup-button-raised">Close</button>
                </p>
                <img src="https://1zbuhu1t3cn216t5533fsizp-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/MOV_FOUND_Proud-Partner_Horizontal_Black_RGB-740x232.jpg">
                <p class="dialog__content-text">Movember Foundation is the leading charity changing the face of men’s health.</p>
                <h1 class="dialog__content-title">Did you know?</h1>
                <p class="dialog__content-text">1 in 7 men will be diagnosed with prostate cancer.
                1 in 8 women will be diagnosed with breast cancer. Donate today to have an everlasting
                impact on the face of men’s health.</p>
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