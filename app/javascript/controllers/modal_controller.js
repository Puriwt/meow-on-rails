import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"
export default class extends Controller {
  static targets = ["delModal"]
  toggle() {
    this.delModalTarget.style.display = "block"
  }

  hide() {
    this.delModalTarget.style.display = "none";
  }
}
