const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const cv = document.querySelector("#cv");

const mainCli = document.querySelector("#main-cli");
const mainHeaderTyper = typer(mainCli);
const aboutCli = document.querySelector("#about-cli");
const aboutTyper = typer(aboutCli);
const contactCli = document.querySelector("#contact-cli");
const contactTyper = typer(contactCli);

const CV_URL =
  "https://docs.google.com/document/d/13BhmwhsK5ezqRN55Rw3WtmcraGHEvymuVR8p62qO_tk/";
const ABOUT_LINE_1 = `I am a self-taught full-stack web developer with a passion for creating beautiful and intuitive user experiences. I have a strong background in both front-end and back-end development, and I have a strong passion for learning new technologies and frameworks.`;
const ABOUT_LINE_2 =
  "My Stack includes: React, Node.js, Express, MongoDB, TypeScript and more.";
const CONTACT_LINE_1 =
  "I am currently looking for a part-time remote position in the MERN Stack. If you are interested in working with me, please contact me at:";
const CONTACT_LINE_2 = "Email: talhaapcoms@gmail.com";
const CONTACT_LINE_3 = "0330-5850-871";

const isMobileWidth = function () {
  return window.innerWidth <= 700;
};

const onBlur = function () {
  this.setBackground("#777");
  mainHeaderTyper.resume();
};
const onFocus = function () {
  this.setBackground("#00aa00");
  mainHeaderTyper.halt();
  aboutTyper.line(ABOUT_LINE_1).pause(1200).line(ABOUT_LINE_2).end();
  contactTyper
    .line(CONTACT_LINE_1)
    .pause(1200)
    .line(CONTACT_LINE_2)
    .pause(1200)
    .line(CONTACT_LINE_3)
    .end();
};

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "400px",
    height: "450px",
    top: 50,
    left: isMobileWidth() ? 0 : 50,
    right: 50,
    left: isMobileWidth() ? 0 : 50,
    mount: aboutContent,
    onfocus: onFocus,
    onblur: onBlur,
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "400px",
    height: "400px",
    top: 150,
    left: 50,
    right: 50,
    left: isMobileWidth() ? 10 : 250,
    mount: contactContent,
    onfocus: onFocus,
    onblur: onBlur,
  });
});

cv.addEventListener("click", () => {
  const cvContentBox = new WinBox({
    title: "Talha's Resume",
    width: "90%",
    height: "700px",
    onfocus: onFocus,
    onblur: onBlur,
    url: CV_URL,
  });
});

// * MAIN HEADER TYPER
const MAIN_LINE_OPTIONS = {}; //min: 30, max: 100
//   .cursor({ color: "cyan", blink: "hard" })
mainHeaderTyper
  .line("React!", MAIN_LINE_OPTIONS)
  .pause(1200)
  .back("all")
  .continue("TypeScript!", MAIN_LINE_OPTIONS)
  .back("all")
  .continue("Node!", MAIN_LINE_OPTIONS)
  .pause(1200)
  .back("all")
  .continue("Express!", MAIN_LINE_OPTIONS)
  .back("all")
  .continue("MongoDB!", MAIN_LINE_OPTIONS)
  .pause(1200)
  .back("all")
  .continue("Angular!", MAIN_LINE_OPTIONS)
  .back("all")
  .repeat(5);

mainCli.addEventListener("mouseover", () => {
  mainHeaderTyper.halt();
});
mainCli.addEventListener("mouseout", () => {
  mainHeaderTyper.resume();
});
