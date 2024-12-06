import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css");

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
  font-family: "Pretendard";
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
