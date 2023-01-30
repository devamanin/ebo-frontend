document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

let profileButton = document.getElementsByClassName("user-p-cont")[0];
profileButton.addEventListener("click", function(event){
    let profilePopup = document.getElementsByClassName("usr-profile-popup")[0];
    profilePopup.style.display = "block";
    document.getElementsByClassName("blur")[0].style.display = "block";
    event.preventDefault();
    document.body.style.overflow = "hidden";
    let loginButton = document.getElementsByClassName("login-but")[0];
    loginButton.addEventListener("click", function(){
        profilePopup.style.display = "none";
        document.body.innerHTML += 
        `
        <div class="login-container flex-col center" style="width: 100%; height: 100%; position: absolute; z-index: 10; top: 0">
            <div class="login-box flex-col" style="width: 320px; height: 320px; background-color: white; border-radius: 11px; overflow: hidden; box-shadow: 0 0 116px 4px rgba(0, 0, 0, 0.22);">
                <div class="header flex-row" style="background-color: #0048CD; height: 60px; align-items: center;">
                    <img src="./assets/logo.png" width="77px" height="45px" >
                    <span style="margin-left: auto; margin-right: 20px; font-size: 30; color: white;">X</span>
                </div>
                <div class="login-or-signup-text flex-col " style="padding-left: 20px; padding-top: 10px;">
                    <span style="font-size: 22px; font-weight: 600;">Quick Login</span>
                    <span>or <span style="color: #0048CD; cursor: hand;">Create and account<span></span>
                </div>
                <div class="phone-number-container flex-col" style="background-color: rgba(0, 0, 0, 0); margin-top: 10px; margin-left: 20px; margin-right: 20px; margin-bottom: 20px; border: solid 1px black; border-radius: 4px; height: 60px; padding: 8px;">
                    <span style="font-size: 18px; font-weight: 500; color: #565050;">Phone Number</span>
                    <input type="number" name="phone-number" id="phone-number" style="width: 100%; height: 40px; font-size: 18px; margin-top: 5px;">
                </div>
                <div class="send-otp button-blue" style="margin-left: 20px; margin-right: 20px; height: 40px; border-radius: 6px;">
                    <button class="sent-otp-but" style="width: 100%; height: 100%; border-radius: 6px; font-size: 16px; font-weight: 600; color: white; background-color: #0646CB;">SEND OTP</button>
                </div>
                <div style="padding: 20px;">
                    <span style="font-size: 11px;">By clicking continue, you agree with our <span>Privacy Policy</span></span>
                </div>
            </div>
        </div>
        `;
    });
})

profileButton.addEventListener("click", function(){
    // profilePopup.style.display = "none"; 
    document.body.innerHTML += 
    `
    <div class="login-container flex-col center" style="width: 100%; height: 100%; position: absolute; z-index: 10; top: 0">
        <div class="login-box flex-col" style="width: 320px; min-height: 320px; background-color: white; border-radius: 11px; overflow: hidden; box-shadow: 0 0 116px 4px rgba(0, 0, 0, 0.22);">
            <div class="header flex-row" style="background-color: #0048CD; height: 60px; align-items: center;">
                <img src="./assets/logo.png" width="77px" height="45px" >
                <span style="margin-left: auto; margin-right: 20px; font-size: 30; color: white;">X</span>
            </div>
            <div class="login-or-signup-text flex-col " style="padding-left: 20px; padding-top: 10px;">
                <span style="font-size: 22px; font-weight: 600;">Quick Login</span>
                <span>or <span style="color: #0048CD; cursor: hand;">Create and account<span></span>
            </div>
            <div class="phone-number-container flex-col" style="background-color: rgba(0, 0, 0, 0); margin-top: 10px; margin-left: 20px; margin-right: 20px; margin-bottom: 20px; border: solid 1px black; border-radius: 4px; height: 60px; padding: 8px;">
                <span style="font-size: 18px; font-weight: 500; color: #565050;">Phone Number</span>
                <input type="number" name="phone-number" id="phone-number" style="width: 100%; height: 40px; font-size: 18px; margin-top: 5px;">
            </div>
            <div class="otp-container flex-col" style="background-color: rgba(0, 0, 0, 0);">
            </div>
            <div class="send-otp button-blue" style="margin-left: 20px; margin-right: 20px; height: 40px; border-radius: 6px;">
                <button class="sent-otp-but" style="width: 100%; height: 100%; border-radius: 6px; font-size: 16px; font-weight: 600; color: white; background-color: #0646CB;">SEND OTP</button>
            </div>
            <div style="padding: 20px;">
                <span style="font-size: 11px;">By clicking continue, you agree with our <span>Privacy Policy</span></span>
            </div>
        </div>
    </div>
    `;
    document.getElementsByClassName("send-otp")[0].addEventListener("click", function(){
        let OTPContainer = document.getElementsByClassName("otp-container")[0];
        OTPContainer.style.marginLeft = "20px";
        OTPContainer.style.marginBottom = "20px";
        OTPContainer.style.marginRight = "20px";
        OTPContainer.style.border = "solid 1px black";
        OTPContainer.style.padding = "8px";
        OTPContainer.style.height = "60px";
        OTPContainer.style.borderRadius = "4px";
        document.getElementsByClassName("otp-container")[0].innerHTML = 
        `
            <span style="font-size: 18px; font-weight: 500; color: #565050;">One Time Password</span>
            <input type="number" name="otp" id="otp" style="width: 100%; height: 40px; font-size: 18px; margin-top: 5px;">
        `
    })
});