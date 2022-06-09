import React from "react";
import "./Footer.css";
import tmdbIcon from "./assets/tmdb.svg";

function Footer() {
  return (
    <div className="footer">
			<img src={tmdbIcon} />
			<p>
				<a href="https://dashsantosh.ga">@dev_waliba </a> | <a href="https://github.com/williamslsy"> GitHub</a>
			</p>
		</div>
  )
}
export default Footer;
