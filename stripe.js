document.addEventListener("DOMContentLoaded",()=>{

const link="https://buy.stripe.com/test_8x2eVc2Zgduv0HBbwQ38400";

document.querySelectorAll("#buyButton,#buyButtonBottom").forEach(btn=>{
  btn.onclick=()=>{
    localStorage.setItem("ai_saas_access_v1","true");
    window.location.href=link;
  };
});

});
