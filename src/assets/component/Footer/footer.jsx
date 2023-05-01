import React from "react";
import {
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialGithub,
} from "react-icons/sl";
import "./footer.css";

export default function Footer() {
  return (
    <main className="footer">
      <section>
        <aside className="line"></aside>
        <aside className="footerText">
          <h1>copyright@2023</h1>
          <p>
            <span>
              <a href="https://www.instagram.com/_vader07/">
                <SlSocialInstagram />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/_vader07">
                <SlSocialTwitter />
              </a>
            </span>
            <span>
              {" "}
              <a
                href="www.linkedin.com/in/
ayomide-shittu-a499081a9
"
              >
                <SlSocialLinkedin />
              </a>
            </span>
            <span>
              {" "}
              <a href="https://github.com/vader-js">
                <SlSocialGithub />
              </a>
            </span>
          </p>
        </aside>
        <aside className="line"></aside>
      </section>
    </main>
  );
}
