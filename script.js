function updateText(id, message, cssClass = "success") {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = `<span class='${cssClass}'>${message}</span>`;
    }
}

function runTest() {
    updateText("wifi", "✔ WPA3 Encryption Successfully Enabled");
    updateText("segment", "✔ Main Network, Guest Network and IoT Network Successfully Segmented");
    updateText("auth", "✔ Unauthorized Users Blocked");
    updateText("security", "Network Security Level : HIGH");
}

function setupQuiz(formId, resultId, inputName, correctValue, correctMessage, incorrectMessage) {
    const form = document.getElementById(formId);
    const result = document.getElementById(resultId);

    if (!form || !result) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const selected = form.querySelector(`input[name='${inputName}']:checked`);

        if (!selected) {
            result.innerHTML = "<span class='medium'>Please select an answer.</span>";
            return;
        }

        if (selected.value === correctValue) {
            result.innerHTML = `<span class='good'>${correctMessage}</span>`;
        } else {
            result.innerHTML = `<span class='bad'>Error! ${incorrectMessage}</span>`;
        }
    });
}

function setupQuizForms() {
    setupQuiz("wifiForm", "wifiResult", "wifi-answer", "wpa3", "Correct! WPA3 is the strongest modern Wi-Fi encryption.", "Not quite. WPA3 is the strongest modern Wi-Fi encryption.");
    setupQuiz("segmentForm", "segmentStatus", "segment-answer", "segmentation", "Correct! Network segmentation keeps devices separated.", "Not quite. Network segmentation is the correct approach.");
    setupQuiz("authForm", "authStatus", "auth-answer", "blocked", "Correct! Unauthorized devices should be blocked.", "Not quite. Unauthorized devices should be blocked.");
    setupQuiz("securityForm", "securityStatus", "security-answer", "high", "Correct! A secure home network is best described as high security.", "Not quite. High security is the correct description.");
}

function evaluateNetwork() {
    const wifiResult = document.getElementById("wifiResult");
    if (wifiResult) {
        wifiResult.innerHTML = "<span class='good'>✔ WPA3 Encryption Enabled Successfully</span>";
    }

    updateText("segmentStatus", "✔ Main, Guest and IoT Networks Successfully Segmented", "good");
    updateText("authStatus", "✔ Authentication Passed. Unauthorized Devices Blocked.", "good");
    updateText("securityStatus", "HIGH SECURITY", "good");

    const evaluation = document.getElementById("evaluation");
    if (evaluation) {
        evaluation.innerHTML =
            "Overall Result:<br><br>" +
            "✔ Wireless communication is encrypted using WPA3.<br>" +
            "✔ Sensitive devices are protected.<br>" +
            "✔ Guest devices cannot access private devices.<br>" +
            "✔ IoT devices are isolated.<br>" +
            "✔ Firewall protection is active.<br><br>" +
            "<b>Final Security Rating : 98%</b>";
    }
}

setupQuizForms();

if (document.getElementById("clock")) {
    setInterval(function () {
        document.getElementById("clock").innerHTML = new Date().toLocaleString();
    }, 1000);
}

window.runTest = runTest;
window.evaluateNetwork = evaluateNetwork;
