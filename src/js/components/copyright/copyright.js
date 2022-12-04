export default class CopyRight extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = 
    `
    <p class="copyright">
      &copy; Copyright by
      <a
        class="twitter-link"
        target="_blank"
        href="https://twitter.com/jonasschmedtman"
        >Jonas Schmedtmann</a
      >. Code rearranged by 
      <a
        class="twitter-link"
        target="_blank"
        href=""
        >Guan Xin Wang</a
      >
    </p>
    `
  }
}
