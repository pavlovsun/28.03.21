class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price, img, quantity }) => {
            price = price * quantity;
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>

                        <td class="shopping-element__quantity"><span class="shopping-element__quantity">
                        <button class="btn-sub" onclick="btn_sub()" type="button">-</button>
                        <input class="btn-input" type="text" name="field" value="${quantity}" />
                        <button class="btn-sum" onclick="btn_sum()" type="button">+</button>
                        </span></td>

                        <td class="shopping-element__price">${price.toLocaleString()} RUB</td>
                        <td class="shopping-element__img"><img src="${img}"></td>
                    </tr>
                `;

                sumCatalog += price;
            }
        });



        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💥 Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} RUB</td>
                    </tr>
                </table>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
};
function btn_sum(){
    alert("+")
}
function btn_sub(){
    alert("-")
}
const shoppingPage = new Shopping();