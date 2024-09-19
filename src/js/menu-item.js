export function getMenuItems(menuListArray, menuElement) {

    menuListArray.forEach((item) => {
        let count = 1;

        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.classList.add('swiper-slide');
        menuItem.innerHTML = `
        <div class="menu-item-info">
            <div class="menu-item-img">
                <img src="./menu/${item.image}.png" alt="sushi">
            </div>
            <div class="menu-item-title">${item.title}</div>
            <div class="menu-item-desc">Состав: ${item.desc}</div>
            <div class="menu-item-weight">Масса: ${item.weight} г</div>
            <div class="menu-item-price">Цена: ${item.price} руб.</div>
        </div>
        <div class="menu-item-actions">
            <div class="menu-item-counter">
                <div class="menu-item-counter-btn" id="decrement">-</div>
                <div class="menu-item-counter-value" id="counter">1</div>
                <div class="menu-item-counter-btn" id="increment">+</div>
            </div>
            <div class="menu-item-btn btn">Заказать</div>
        </div>
        `;

        const counterValue = menuItem.querySelector('#counter');
        const incrementBtn = menuItem.querySelector('#increment');
        const decrementBtn = menuItem.querySelector('#decrement');
        incrementBtn.addEventListener('click', () => {
            count++;
            counterValue.textContent = count;
        });
        decrementBtn.addEventListener('click', () => {
            if (count > 0) {
                count--;
                counterValue.textContent = count;
            }
        });

        menuElement.append(menuItem);
    })
}


