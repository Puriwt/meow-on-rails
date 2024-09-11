import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['input'];

  format(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3 && value.length <= 6) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 6) {
      value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
    }
    e.target.value = value;
  }
}
