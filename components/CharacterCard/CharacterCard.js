export function CharacterCard(result) {
  const cardElement = document.createElement("li");
  cardElement.classList.add("card");
  cardElement.innerHTML = `<div class="card__image-container">
            <img
              class="card__image"
              src=${result[2].image}
              alt=${result[0].name}
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${result[0].name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${result[0].status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description"${result[0].type}></dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${result[2].episode.length}</dd>
            </dl>
          </div>`;
  return cardElement;
}
