import icons from 'url:../../../img/icons.svg';

class ViewService {

  constructor() {
    
  }

  render(render = true, parentElement='', markup='') {
    if (!render || !parentElement) return markup;

    parentElement.innerHTML = '';
    parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  clear(parentElement) {
    parentElement.innerHTML = '';
  }

  renderSpinner(parentElement) {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this.clear(parentElement);
    parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(parentElement, message) {
    if (!parentElement) return;
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `
    try {
      this.clear(parentElement);
      parentElement.insertAdjacentHTML('afterbegin', markup);
    } catch (error) {
      console.error(error);
    }
    
  }

  renderMessage(parentElement, message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    try {
      this.clear(parentElement);
      parentElement.insertAdjacentHTML('afterbegin', markup);
    } catch (error) {
      console.error(error);
    }
    
  }
}

export default new ViewService();