import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'RixYeoljeongdo';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'esamanru OTF';
  src: url('https://cdn.jsdelivr.net/gh/fontbee/font@main/Gonggames/GongGothicBold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'esamanru OTF';
  src: url('https://cdn.jsdelivr.net/gh/fontbee/font@main/Gonggames/GongGothicMedium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

  @font-face {
  font-family: 'esamanru OTF';
  src: url('https://cdn.jsdelivr.net/gh/fontbee/font@main/Gonggames/GongGothicLight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  }

html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
ul {
  list-style: none;
  padding: 0;
}
button,
input,
select {
  margin: 0;
}
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Pretendard";
  font-display: swap;
  color: ${(props) => props.theme.colors["-grayscale-800"]};
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
img,
video {
  height: auto;
  max-width: 100%;
}
iframe {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
/* custom */
a {
  text-decoration: none;
  color: #000;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

input {
  border: none;
  outline: none;
}

li {
  list-style: none;
}`;

export default GlobalStyle;
