// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

//remove active class from all menu items

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// Adding active class to sidebar item onclick
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem(); //Remove the active class from all others
    item.classList.add("active");
    // When notifications is clicked
    //1.remove notification count
    //2.Show notifications popup
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// Messages
const messagesNotification = document.querySelector("#messages-notifications");
// Getting the messages box in the sidechat
const messages = document.querySelector(".messages");

messagesNotification.addEventListener("click", () => {
  // removing the notification count
  messagesNotification.querySelector(".notification-count").style.display =
    "none";

  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  // make boxshadow disappear after 2 seconds
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 3000);
});

// Search and Filter Functionality
const message = messages.querySelectorAll(".message"); //all the messages
const messageSearch = document.querySelector("#message-search"); //the search input

// function to search chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase(); //grabs the value from search bar
  console.log(val);
  // run a for each loop for all the messages and grab the names in the h5
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      //meaning the item we are searching for must be in the list
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage); //calling the searchMessage function after every keystroke

// THEME CUSTOMIZATION
const theme = document.querySelector("#theme"); //theme menu item
const themeModal = document.querySelector(".customize-theme"); //popup

// opens modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
// closes modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

// FONT SIZES
var root = document.querySelector(":root");
const fontSizes = document.querySelectorAll(".choose-size span");

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

// looping throught the spans
fontSizes.forEach((size) => { 

  size.addEventListener("click", () => {

    removeSizeSelector();
    var fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty(" --sticky-top-left", "5.4rem");
      root.style.setProperty(" --sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "12px";
      root.style.setProperty(" --sticky-top-left", "5.4rem");
      root.style.setProperty(" --sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "13px";
      root.style.setProperty(" --sticky-top-left", "-2rem");
      root.style.setProperty(" --sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "15px";
      root.style.setProperty(" --sticky-top-left", "-5rem");
      root.style.setProperty(" --sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "17px";
      root.style.setProperty(" --sticky-top-left", "-10rem");
      root.style.setProperty(" --sticky-top-right", "-33rem");
    }
    // Change the font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// CHANGING PRIMARY COLORS

// function to remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
const colorPalette = document.querySelectorAll('.choose-color span');
colorPalette.forEach(color => {
    color.addEventListener('click', ()=>{
        let primaryHue;
        changeActiveColorClass();
        if (color.classList.contains("color-1")) {
          primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
          primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
          primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
          primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
          primaryHue = 202;
        }
        
        color.classList.add('active');
        // grab root
        root.style.setProperty("--primary-color-hue", primaryHue);
    })
})

// CHANGING BACKGROUNDS
// Just changing the lightness of the variables the L in HSL
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

var lightColorLightness;
var whiteColorLightness;
var darkColorLightness;

// Function to change bg color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener("click", () => {
  //add active class
  Bg1.classList.add("active");
  // remove active from the rest
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
//   remove customized changes from local storage
  window.location.reload();
});

Bg2.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    // remove active from the rest
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  //add active class
  Bg3.classList.add("active");
  // remove active from the rest
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
