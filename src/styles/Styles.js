import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --appbackgroundcolor: #fff;
    --menubackgroundcolor: #fff;
    --primary_text_color: #323232;
    --black_text: #444444;
    --faint_text_black: #1212129d;
    --white_text: #efefef;
    --white_text_faint: #efefefcd;
    --secondary_text: #333;
    --black_bacground: #555;
    --black_bacground_hover: #555e;
    --profile_text: #666666cc;
    --sigin_placeholder_text: #66666688;
    --bios_background: #eaeaea;
    --search_background:#d5d5d55c;
    --search_background_hover: #d5d5d5cc;
    --sideBar_text: #555;
    --subnav_background: #ffffff30;
    --box_shadow: #0001;
    --subtle_background: rgb(217, 217, 217, 10%);
    --balance_background: rgb(217, 217, 217, 20%);
    --border: rgb(217, 217, 217, 50%);
    --light_faint: #f4f4f4;
    --profile_faint: #d9d9d9;
    --error_text: #f66;
    --blue_btn: #217FD7;
    --blue_background_hover:#2273beaa;
    --blue_btn_hover: rgb(33, 127, 215,90%);
    --btn_hover: #ececec;
    --overlay_background: #0003;
    --nav_background: #444444bb;
    --nav_background_hover: #444444;
    --secondary_text_faint: #3333335e;
    --tertiary_text_faint: #22222224;
    --modal_background: #00000065;
    --pagination_faint: #bdbdbd3e;
    --input_Icon_color: #3d3d3db5;
    --star_Icon_color: #33333335;
    --inputField_border: #12121238;
    --feature_background: #eef7ff;
    --padding_btn_small: 0.5rem 1.5rem;
    --padding_btn_medium: .8rem 1.8rem;
    --padding_btn_big: 1rem 2rem;
}
html {
    font-size: 62.5%;
}
body {
    font-family: "IBM PLe?x Sans", sans-serif;
    line-height: 1.2;
}
*,*::before,*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    /* outline: 2px solid #f00; */
}
::-webkit-scrollbar-thumb {
    background-color: var(--nav_background);
    border-radius: 1rem;
}        
::-webkit-scrollbar {
    background-color:transparent;
    width: 0.5vw;
}

.swiper {
    position: static !important;
    width:  112rem !important;
    overflow: hidden !important;
    padding: 0 1.8rem 3rem 0.5rem !important;
    @media (min-width: 1300px) {
        width: 135rem !important;
    }
    @media (min-width: 1400px) {
        width: 145rem !important;
    }
}

.swiper-button-prev {
    background: none;
    top: 6% !important;
    left: 0 !important;
    height: 92% !important;
    padding: 0 2.4rem;
    border-radius: 1.5rem;
    display: flex !important;
    &:hover {
        background: #b6b6b666 ;
    }
    &::after {
        color: var(--black_text);
    }
    @media (max-width: 980px) {
        display: none !important;
    }
}
.swiper-button-next {
    background: none;
    top: 6% !important;
    right: 0 !important;
    height: 92% !important;
    padding: 0 2.4rem;
    border-radius: 1.5rem;
    display: flex !important;
    &:hover {
        background: #b6b6b666;
    }
    &::after {
        color: var(--black_text)
    }
    @media (max-width: 980px) {
        display: none !important;
    }
}

.swiper-button-disabled {
    background: #c7c7c7ff !important;
    &::after {
        color: var(--faint_text_black)
    }
}
.swiper-wrapper {
    width: 90vw !important;
}


.verticalSlide .swiper-wrapper {
    width: fit-content !important;
    height: 50rem !important;
}
.verticalSlide {
    display: inline !important;
    width: 100% !important;
    height: 100% !important;
    padding: 0  !important;;
    @media (min-width: 1300px) {
        width: fit-content !important;
    }
    @media (min-width: 1400px) {
        width: fit-content !important;
    }
}

.profileActive {
    border: 0.1rem solid var(--faint_text_black) !important;
}
.default {
    background: #0000;
    transition: all .25s;
}
.defaultSearch {
    transition: all .25s;
    background-color: var(--nav_background);
    &:hover {
        background: var(--nav_background_hover);
    }
}
.adapt {
    transition: all .25s;
    background: var(--appbackgroundcolor);
    border-bottom: 1px solid var(--inputField_border);
}
.adaptSearch {
    transition: all .25s;
    border: 1px solid var(--inputField_border);
    background-color:inherit;
}

.adaptColor {
    color: var(--sideBar_text);
}

.skeleton {
    animation: skeletonAnimate all 2s linear infinite;
}

@keyframes skeletonAnimate {
    0% {
        background: #ff0;
    }
    100% {
        background: #f00;
    }
}

.withBorder {
    background: inherit;
    &:hover {
        background: var(--btn_hover);
    }
}
.withoutBorder {
    background: var(--btn_hover);
    &:hover {
        background: var(--tertiary_text_faint);
    }
}
.blue {
    background: var(--blue_btn);
    &:hover {
        background: var(--blue_btn_hover);
    }
}
.nav {
    background: var(--nav_background);
    &:hover {
        background: var(--nav_background_hover);
    }
}
.navBorder {
    background: inherit;
    &:hover {
        background: var(--btn_hover);
    }
}
.paginationStop {
    background: inherit;
    color: var(--secondary_text_faint) !important;
}
.activeTransaction {
  background: var(--appbackgroundcolor);
}
.activeToggle {
    background: var(--blue_btn);
    transform: translateX(100%);
}
.notToggle {
    background: var(--black_bacground);
}

.hideFileUpload {
  display: none;
}

.activeSubNav {
    background: var(--subnav_background);
}

.signUpActive {
    z-index: 1;
}
.signUpInActive {
    z-index: -1;
}

.loginInActive {
    z-index: -10;
}
.loginActive {
    z-index: 10;
}

.errorField {
    border: 1.34px solid var(--error_text);
}
.dummy {
    border-radius: 1.5rem;
}
.buyImage {
    border-radius: 1.5rem;
    height: 42rem;
}


`;
export default GlobalStyle;
