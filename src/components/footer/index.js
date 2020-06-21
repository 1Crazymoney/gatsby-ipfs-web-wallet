import React from "react"
import "./footer.css"
class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <center>
        <a href="https://psfoundation.cash/" target="_blank" rel="noreferrer">
          Produced by the Permissionless Software Foundation
        </a>

        <br /><br />
        <p>Ways to access this web-app:</p>
        <ul>
          <li>
            Web: <a href="https://wallet.fullstack.cash">wallet.fullstack.cash</a>
          </li>

          <li>
            Tor: <a href="http://puh2fyj2ly5b4p5m.onion/">puh2fyj2ly5b4p5m.onion</a>
          </li>

          <li>
            IPFS: <a href="https://ipfs.io/ipfs/QmTMpYt66SGSjckXTHF6bPip6h1V5fXT23tEUJgy7pyTkf/">QmTMpYt66SGSjckXTHF6bPip6h1V5fXT23tEUJgy7pyTkf</a>
          </li>
        </ul>
        <br />

        <a href="https://github.com/Permissionless-Software-Foundation/gatsby-ipfs-web-wallet" target="_blank" rel="noreferrer">
          Source Code
        </a>
        </center>
      </section>
    )
  }
}

export default Footer
