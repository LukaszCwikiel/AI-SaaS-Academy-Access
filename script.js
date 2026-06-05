console.log("AI SaaS loaded");

function setPaid() {
    localStorage.setItem("paid", "true");
    localStorage.setItem("paid_at", Date.now().toString());
    console.log("PAID SET =", localStorage.getItem("paid"));
}

function goDashboard() {
    window.location.href = "dashboard.html";
}

document.addEventListener("DOMContentLoaded", () => {

    const buyButtons = ["buyButton", "buyButtonBottom"];

    buyButtons.forEach(id => {
        const el = document.getElementById(id);

        if (el) {
            el.addEventListener("click", () => {
                setPaid();
                goDashboard();
            });
        }
    });

});
