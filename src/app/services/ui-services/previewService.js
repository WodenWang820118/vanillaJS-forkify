import icons from 'url:../../../assets/icons.svg';

class PreviewService {
  constructor() {}

  generateMarkup(result) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="Test" crossorigin/>
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">
              ${result.title}
            </h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated ${result.key ? '' : 'hidden'}">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new PreviewService();
