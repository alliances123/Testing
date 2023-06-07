



// get search

function search() {
    let searchbar = document.querySelector(".input-research").value.toUpperCase();
    let productList = document.querySelector(".choise-click-list-search-box");
    let product = document.querySelector(".product");
    let productName = document.querySelector(".h1");
    
    for ( let i = 0; i<productName.length; i++) {
        if (productName[i].innerHTML.toUpperCase().indexOf(searchbar) >= 0) {
            product[i].style.display = "";
        } else {
            product[i].style.display = "none";
        }
    }
}


// 



// search box

var input = document.querySelector(".put form");
var focusform = document.querySelector(".focus-form");
var choise = document.querySelector(".choise-click-list-search-box");
var shadow = document.querySelector(".shadow-body-search");
var discover = document.querySelector(".discover-btn");
var discovera = document.querySelector(".discover-btn a");
var discoverved = document.querySelector(".hero-media-asset");
var animationbtn = document.querySelector(".animation-btn");
var animationbtna = document.querySelector(".animation-btn a");
var animationved = document.querySelector(".Animation-media-asset");
var illustrationBtn = document.querySelector(".illustration-btn");
var illustrationBtna = document.querySelector(".illustration-btn a");
var containerCanvans = document.querySelector(".container-canvans");
var branding = document.querySelector(".branding-video");
var brandingVideo = document.querySelector(".branding-video video");
var brandingBtn = document.querySelector(".container ul .brand-btn");
var brandingBtna = document.querySelector(".container ul .brand-btn a");
var webDesignBtn = document.querySelector(".container ul .web-design-btn");
var webDesignBtna = document.querySelector(".container ul .web-design-btn a");
var webDesignVideo = document.querySelector(".web-design video");
var mobileVideo = document.querySelector(".mobile-video video");
var mobileBtn = document.querySelector(".container ul .mobile-btn");
var mobileBtna = document.querySelector(".container ul .mobile-btn a");
var typographyBtn = document.querySelector(".container ul .typography-btn");
var typographyBtna = document.querySelector(".container ul .typography-btn a");
var typographyVideo= document.querySelector(".typography-video video");
var productvideo= document.querySelector(".product-design-video video");
var productBtn= document.querySelector(".container ul .product-design-btn");
var productBtna= document.querySelector(".container ul .product-design-btn a");


productBtn.onclick = () => {
    productBtn.classList.add("productDesign");
    productBtna.classList.add("productDesign");
    productvideo.classList.add("productDesign");
    typographyVideo.classList.remove("typography");
    typographyBtn.classList.remove("typography");
    typographyBtna.classList.remove("typography");
    webDesignBtn.classList.remove("design");
    webDesignBtna.classList.remove("design");
    webDesignVideo.classList.remove("design");
    branding.classList.remove("branding");
    brandingVideo.classList.remove("branding");
    brandingBtn.classList.remove("branding");
    brandingBtna.classList.remove("branding");
    containerCanvans.classList.remove("illisturation");
    illustrationBtn.classList.remove("illisturation");
    illustrationBtna.classList.remove("illisturation");
    containerCanvans.classList.remove("illisturation");
    animationbtn.classList.remove("animation");
    animationbtna.classList.remove("animation");
    animationved.classList.remove("animation");
    discover.classList.remove("active");
    discovera.classList.remove("active");
    discoverved.classList.remove("active");
    mobileVideo.classList.remove("mobo");
    mobileBtna.classList.remove("mobo");
    mobileBtn.classList.remove("mobo");
}

typographyBtn.onclick = () => {
    typographyVideo.classList.add("typography");
    typographyBtn.classList.add("typography");
    typographyBtna.classList.add("typography");
    webDesignBtn.classList.remove("design");
    webDesignBtna.classList.remove("design");
    webDesignVideo.classList.remove("design");
    branding.classList.remove("branding");
    brandingVideo.classList.remove("branding");
    brandingBtn.classList.remove("branding");
    brandingBtna.classList.remove("branding");
    containerCanvans.classList.remove("illisturation");
    illustrationBtn.classList.remove("illisturation");
    illustrationBtna.classList.remove("illisturation");
    containerCanvans.classList.remove("illisturation");
    animationbtn.classList.remove("animation");
    animationbtna.classList.remove("animation");
    animationved.classList.remove("animation");
    discover.classList.remove("active");
    discovera.classList.remove("active");
    discoverved.classList.remove("active");
    productBtn.classList.remove("productDesign");
    productBtna.classList.remove("productDesign");
    productvideo.classList.remove("productDesign");
    mobileVideo.classList.remove("mobo");
    mobileBtna.classList.remove("mobo");
    mobileBtn.classList.remove("mobo");
}

mobileBtn.onclick = () => {
    mobileVideo.classList.add("mobo");
    mobileBtna.classList.add("mobo");
    mobileBtn.classList.add("mobo");
    webDesignBtn.classList.remove("design");
    webDesignBtna.classList.remove("design");
    webDesignVideo.classList.remove("design");
    branding.classList.remove("branding");
    brandingVideo.classList.remove("branding");
    brandingBtn.classList.remove("branding");
    brandingBtna.classList.remove("branding");
    containerCanvans.classList.remove("illisturation");
    illustrationBtn.classList.remove("illisturation");
    illustrationBtna.classList.remove("illisturation");
    containerCanvans.classList.remove("illisturation");
    animationbtn.classList.remove("animation");
    animationbtna.classList.remove("animation");
    animationved.classList.remove("animation");
    discover.classList.remove("active");
    discovera.classList.remove("active");
    discoverved.classList.remove("active");
    typographyVideo.classList.remove("typography");
    typographyBtn.classList.remove("typography");
    typographyBtna.classList.remove("typography");
    productBtn.classList.remove("productDesign");
    productBtna.classList.remove("productDesign");
    productvideo.classList.remove("productDesign");
}

webDesignBtn.onclick = () => {
    webDesignBtn.classList.add("design");
    webDesignBtna.classList.add("design");
    webDesignVideo.classList.add("design");
    branding.classList.remove("branding");
    brandingVideo.classList.remove("branding");
    brandingBtn.classList.remove("branding");
    brandingBtna.classList.remove("branding");
    containerCanvans.classList.remove("illisturation");
    illustrationBtn.classList.remove("illisturation");
    illustrationBtna.classList.remove("illisturation");
    containerCanvans.classList.remove("illisturation");
    animationbtn.classList.remove("animation");
    animationbtna.classList.remove("animation");
    animationved.classList.remove("animation");
    discover.classList.remove("active");
    discovera.classList.remove("active");
    discoverved.classList.remove("active");
    mobileVideo.classList.remove("mobo");
    mobileBtna.classList.remove("mobo");
    mobileBtn.classList.remove("mobo");
    typographyVideo.classList.remove("typography");
    typographyBtn.classList.remove("typography");
    typographyBtna.classList.remove("typography");
    productBtn.classList.remove("productDesign");
    productBtna.classList.remove("productDesign");
    productvideo.classList.remove("productDesign");
}


brandingBtn.onclick = () => {
    brandingVideo.classList.add("branding");
    brandingBtn.classList.add("branding");
    brandingBtna.classList.add("branding");
    containerCanvans.classList.remove("illisturation");
    illustrationBtn.classList.remove("illisturation");
    illustrationBtna.classList.remove("illisturation");
    containerCanvans.classList.remove("illisturation");
    animationbtn.classList.remove("animation");
    animationbtna.classList.remove("animation");
    animationved.classList.remove("animation");
    discover.classList.remove("active");
    discovera.classList.remove("active");
    discoverved.classList.remove("active");
    webDesignBtn.classList.remove("design");
    webDesignBtna.classList.remove("design");
    webDesignVideo.classList.remove("design");
    mobileVideo.classList.remove("mobo");
    mobileBtna.classList.remove("mobo");
    mobileBtn.classList.remove("mobo");
    typographyVideo.classList.remove("typography");
    typographyBtn.classList.remove("typography");
    typographyBtna.classList.remove("typography");
    productBtn.classList.remove("productDesign");
    productBtna.classList.remove("productDesign");
    productvideo.classList.remove("productDesign");
}

illustrationBtn.onclick = () => {
    containerCanvans.classList.add("illisturation");
    illustrationBtn.classList.add("illisturation");
    illustrationBtna.classList.add("illisturation");
    containerCanvans.classList.add("illisturation");
    animationbtn.classList.remove("animation");
    animationbtna.classList.remove("animation");
    animationved.classList.remove("animation");
    discover.classList.remove("active");
    discovera.classList.remove("active");
    discoverved.classList.remove("active");
    branding.classList.remove("branding");
    brandingVideo.classList.remove("branding");
    brandingBtn.classList.remove("branding");
    brandingBtna.classList.remove("branding");
    webDesignBtn.classList.remove("design");
    webDesignBtna.classList.remove("design");
    webDesignVideo.classList.remove("design");
    mobileVideo.classList.remove("mobo");
    mobileBtna.classList.remove("mobo");
    mobileBtn.classList.remove("mobo");
    typographyVideo.classList.remove("typography");
    typographyBtn.classList.remove("typography");
    typographyBtna.classList.remove("typography");
    productBtn.classList.remove("productDesign");
    productBtna.classList.remove("productDesign");
    productvideo.classList.remove("productDesign");
}

animationbtn.onclick = () => {
    animationbtn.classList.add("animation");
    animationbtna.classList.add("animation");
    animationved.classList.add("animation");
    discover.classList.remove("active");
    discovera.classList.remove("active");
    discoverved.classList.remove("active");
    containerCanvans.classList.remove("illisturation");
    illustrationBtn.classList.remove("illisturation");
    illustrationBtna.classList.remove("illisturation");
    containerCanvans.classList.remove("illisturation");
    branding.classList.remove("branding");
    brandingVideo.classList.remove("branding");
    brandingBtn.classList.remove("branding");
    brandingBtna.classList.remove("branding");
    webDesignBtn.classList.remove("design");
    webDesignBtna.classList.remove("design");
    webDesignVideo.classList.remove("design");
    mobileVideo.classList.remove("mobo");
    mobileBtna.classList.remove("mobo");
    mobileBtn.classList.remove("mobo");
    typographyVideo.classList.remove("typography");
    typographyBtn.classList.remove("typography");
    typographyBtna.classList.remove("typography");
    productBtn.classList.remove("productDesign");
    productBtna.classList.remove("productDesign");
    productvideo.classList.remove("productDesign");
}

discover.onclick = () => {
    discover.classList.add("active");
    discovera.classList.add("active");
    discoverved.classList.add("active");
    animationbtn.classList.remove("animation");
    animationbtna.classList.remove("animation");
    animationved.classList.remove("animation");
    containerCanvans.classList.remove("illisturation");
    illustrationBtn.classList.remove("illisturation");
    illustrationBtna.classList.remove("illisturation");
    containerCanvans.classList.remove("illisturation");
    branding.classList.remove("branding");
    brandingVideo.classList.remove("branding");
    brandingBtn.classList.remove("branding");
    brandingBtna.classList.remove("branding");
    webDesignBtn.classList.remove("design");
    webDesignBtna.classList.remove("design");
    webDesignVideo.classList.remove("design");
    mobileVideo.classList.remove("mobo");
    mobileBtna.classList.remove("mobo");
    mobileBtn.classList.remove("mobo");
    typographyVideo.classList.remove("typography");
    typographyBtn.classList.remove("typography");
    typographyBtna.classList.remove("typography");
    productBtn.classList.remove("productDesign");
    productBtna.classList.remove("productDesign");
    productvideo.classList.remove("productDesign");
}

input.onclick = () => {
    focusform.classList.add("active");
    input.classList.add("active");
    choise.classList.add("active");
    shadow.classList.add("active");
}

shadow.onclick = () => {
    focusform.classList.remove("active");
    input.classList.remove("active");
    choise.classList.remove("active");
    shadow.classList.remove("active");
}

// local storage like btn

let target = document.querySelector(".body2");
    let theme = localStorage.getItem("heart");
    if (theme !== null) {
    target.classList.toggle("heart-red");
    }
    function changeTheme() {
    let theme = localStorage.getItem("heart");

    if (theme !== null) {
        localStorage.removeItem("heart");
    }else{
        localStorage.setItem("heart","heart-red");
    }
        target.classList.toggle("heart-red");
    }


let target2 = document.querySelector(".body2");
    let theme2 = localStorage.getItem("heart2");
    if (theme2 !== null) {
    target2.classList.toggle("heart2-red");
    }
    function changeTheme2() {
    let theme2 = localStorage.getItem("heart2");

    if (theme2 !== null) {
        localStorage.removeItem("heart2");
    }else{
        localStorage.setItem("heart2","heart2-red");
    }
        target2.classList.toggle("heart2-red");
    }

let target3 = document.querySelector(".body3");
    let theme3 = localStorage.getItem("heart3");
    if (theme3 !== null) {
    target3.classList.toggle("heart3-red");
    }
    function changeTheme3() {
    let theme3 = localStorage.getItem("heart3");

    if (theme3 !== null) {
        localStorage.removeItem("heart3");
    }else{
        localStorage.setItem("heart3","heart3-red");
    }
        target3.classList.toggle("heart3-red");
    }


let target4 = document.querySelector(".body4");
    let theme4 = localStorage.getItem("heart4");
    if (theme4 !== null) {
    target4.classList.toggle("heart4-red");
    }
    function changeTheme4() {
    let theme4 = localStorage.getItem("heart4");

    if (theme4 !== null) {
        localStorage.removeItem("heart4");
    }else{
        localStorage.setItem("heart4","heart4-red");
    }
        target4.classList.toggle("heart4-red");
    }


let target5 = document.querySelector(".body5");
    let theme5 = localStorage.getItem("heart5");
    if (theme5 !== null) {
    target5.classList.toggle("heart5-red");
    }
    function changeTheme5() {
    let theme5 = localStorage.getItem("heart5");

    if (theme5 !== null) {
        localStorage.removeItem("heart5");
    }else{
        localStorage.setItem("heart5","heart5-red");
    }
        target5.classList.toggle("heart5-red");
    }


let target6 = document.querySelector(".body6");
    let theme6 = localStorage.getItem("heart6");
    if (theme6 !== null) {
    target6.classList.toggle("heart6-red");
    }
    function changeTheme6() {
    let theme6 = localStorage.getItem("heart6");

    if (theme6 !== null) {
        localStorage.removeItem("heart6");
    }else{
        localStorage.setItem("heart6","heart6-red");
    }
        target6.classList.toggle("heart6-red");
    }


let target7 = document.querySelector(".body7");
    let theme7 = localStorage.getItem("heart7");
    if (theme7 !== null) {
    target7.classList.toggle("heart7-red");
    }
    function changeTheme7() {
    let theme7 = localStorage.getItem("heart7");

    if (theme7 !== null) {
        localStorage.removeItem("heart7");
    }else{
        localStorage.setItem("heart7","heart7-red");
    }
        target7.classList.toggle("heart7-red");
    }


let target8 = document.querySelector(".body8");
    let theme8 = localStorage.getItem("heart8");
    if (theme8 !== null) {
    target8.classList.toggle("heart8-red");
    }
    function changeTheme8() {
    let theme8 = localStorage.getItem("heart8");

    if (theme8 !== null) {
        localStorage.removeItem("heart8");
    }else{
        localStorage.setItem("heart8","heart8-red");
    }
        target8.classList.toggle("heart8-red");
    }


let target9 = document.querySelector(".body9");
    let theme9 = localStorage.getItem("heart9");
    if (theme9 !== null) {
    target9.classList.toggle("heart9-red");
    }
    function changeTheme9() {
    let theme9 = localStorage.getItem("heart9");
    if (theme9 !== null) {
        localStorage.removeItem("heart9");
    }else{
        localStorage.setItem("heart9","heart9-red");
    }
        target9.classList.toggle("heart9-red");
    }


let target10 = document.querySelector(".body10");
    let theme10 = localStorage.getItem("heart10");
    if (theme10 !== null) {
    target10.classList.toggle("heart10-red");
    }
    function changeTheme10() {
    let theme10 = localStorage.getItem("heart10");
    if (theme10 !== null) {
        localStorage.removeItem("heart10");
    }else{
        localStorage.setItem("heart10","heart10-red");
    }
        target10.classList.toggle("heart10-red");
    }


let target11 = document.querySelector(".body11");
    let theme11 = localStorage.getItem("heart11");
    if (theme11 !== null) {
    target11.classList.toggle("heart11-red");
    }
    function changeTheme11() {
    let theme11 = localStorage.getItem("heart11");

    if (theme11 !== null) {
        localStorage.removeItem("heart11");
    }else{
        localStorage.setItem("heart11","heart11-red");
    }
        target11.classList.toggle("heart11-red");
    }


    let target12 = document.querySelector(".body12");
    let theme12 = localStorage.getItem("heart12");
    if (theme12 != null) {
    target11.classList.toggle("heart12-red");
    }
    function changeTheme12() {
    let theme12 = localStorage.getItem("heart12");
    if (theme12 != null) {
        localStorage.removeItem("heart12");
    }else{
        localStorage.setItem("heart12","heart12-red");
    }
        target12.classList.toggle("heart12-red");
    }

    let target13 = document.querySelector(".body13");
    let theme13 = localStorage.getItem("heart13");
    if (theme13 != null) {
    target13.classList.toggle("heart13-red");
    }
    function changeTheme13() {
    let theme13 = localStorage.getItem("heart13");

    if (theme13 != null) {
        localStorage.removeItem("heart13");
    }else{
        localStorage.setItem("heart13","heart13-red");
    }
        target13.classList.toggle("heart13-red");
    }

// icon-up

var iconup = document.querySelector(".icon-up");

window.onscroll = () => {
    
    if (scrollY >= 100) {
        iconup.classList.add("active");
    } else {
        iconup.classList.remove("active");
    }
    if (scrollY >= 967) {
        iconup.classList.remove("active");
        iconup.classList.add("absolute");
    } else {
        iconup.classList.remove("absolute");
    }
    
}

iconup.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// bars

var bars = document.querySelector(".bars");
var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var div3 = document.querySelector(".div3");
var ulheader = document.querySelector(".ulheader");
var li1 = document.querySelector(".li1");
var li2 = document.querySelector(".li2");
var li3 = document.querySelector(".li3");
var li4 = document.querySelector(".li4");
var li5 = document.querySelector(".li5");
var border = document.querySelector(".border");
var ion = document.querySelector(".ion-icon");
var ion2 = document.querySelector(".ion-icon2");
var ion3 = document.querySelector(".ion-icon3");
var ion4 = document.querySelector(".ion-icon4");
var ion5 = document.querySelector(".ion-icon5");
var ion6 = document.querySelector(".ion-icon6");
var ion7 = document.querySelector(".ion-icon7");
var ion8 = document.querySelector(".ion-icon8");
var ion9 = document.querySelector(".ion-icon9");
var ion10 = document.querySelector(".ion-icon10");
var ion11 = document.querySelector(".ion-icon11");
var ion12 = document.querySelector(".ion-icon12");
var lilastheader = document.querySelector(".li-last-div-header");

var shadowList= document.querySelector(".shadow-list-bars-active");



bars.onclick = () => {
    div1.classList.toggle("active");
    div2.classList.toggle("active");
    div3.classList.toggle("active");
    ulheader.classList.toggle("active");
    li1.classList.toggle("active");
    li2.classList.toggle("active");
    li3.classList.toggle("active");
    li4.classList.toggle("active");
    li5.classList.toggle("active");
    border.classList.toggle("active");
    lilastheader.classList.toggle("active");
    shadowList.classList.toggle("active");
}

shadowList.onclick = () => {
    div1.classList.remove("active");
    div2.classList.remove("active");
    div3.classList.remove("active");
    ulheader.classList.remove("active");
    li1.classList.remove("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.remove("active");
    li5.classList.remove("active");
    border.classList.remove("active");
    lilastheader.classList.remove("active");
    shadowList.classList.remove("active");
}

ion.onclick = () => {
    ion.classList.toggle("active");
}

ion2.onclick = () => {
    ion2.classList.toggle("active");
}

ion3.onclick = () => {
    ion3.classList.toggle("active");
}

ion4.onclick = () => {
    ion4.classList.toggle("active");
}

ion5.onclick = () => {
    ion5.classList.toggle("active");
}

ion6.onclick = () => {
    ion6.classList.toggle("active");
}

ion7.onclick = () => {
    ion7.classList.toggle("active");
}

ion8.onclick = () => {
    ion8.classList.toggle("active");
}

ion9.onclick = () => {
    ion9.classList.toggle("active");
}

ion10.onclick = () => {
    ion10.classList.toggle("active");
}

ion11.onclick = () => {
    ion11.classList.toggle("active");
}

ion12.onclick = () => {
    ion12.classList.toggle("active");
}


// 
