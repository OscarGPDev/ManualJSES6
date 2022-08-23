const data = [
    {
        "item_id": 5003965,
        "item_name": "Bearded Dragon",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/254002-Center-1",
        "type": 1
    },
    {
        "item_id": 5003961,
        "item_name": "Ball Python",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/2662964-Center-3",
        "type": 1
    },
    {
        "item_id": 5004154,
        "item_name": "Crested Gecko",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/542920-right-1",
        "type": 1
    },
    {
        "item_id": 5004153,
        "item_name": "Corn Snake",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/151033-Center-1",
        "type": 1
    },
    {
        "item_id": 5004760,
        "item_name": "Leopard Gecko",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/110981-Center-1",
        "type": 1
    },
    {
        "item_id": 5005420,
        "item_name": "Red Ear Slider",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/983039-center-1",
        "type": 1
    },
    {
        "item_id": 5005754,
        "item_name": "Veiled Chameleon",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/253537-Center-1",
        "type": 1
    },
    {
        "item_id": 5094369,
        "item_name": "Electric Blue Jack Dempsey",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/3271201-Center-1",
        "type": 2
    },
    {
        "item_id": 5094368,
        "item_name": "Flowerhorn Cichlid",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/3271199-right-1",
        "type": 2
    },
    {
        "item_id": 120882,
        "item_name": "Male Elephant Ear Betta",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/2137318-Center-1",
        "type": 2
    },
    {
        "item_id": 5000669,
        "item_name": "Male Halfmoon Betta",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/1031740-Center-1",
        "type": 2
    },
    {
        "item_id": 5027310,
        "item_name": "Male Rose Petal Betta",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/2843992-right-1",
        "type": 2
    },
    {
        "item_id": 5040015,
        "item_name": "Shubunkin Goldfish",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/3467415-center-1",
        "type": 2
    },
    {
        "item_id": 113333,
        "item_name": "Female Red Veiltail Betta",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/1397621-right-1",
        "type": 2
    },
    {
        "item_id": 5004149,
        "item_name": "Cockatiel",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/832448-center-1",
        "type": 3
    },
    {
        "item_id": 5004015,
        "item_name": "Blue Parakeet",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112160-left-2",
        "type": 3
    },
    {
        "item_id": 5004510,
        "item_name": "Green Cheek Conure",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/223972-Center-1",
        "type": 3
    },
    {
        "item_id": 5005418,
        "item_name": "Fancy Parakeet",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112178-right-2",
        "type": 3
    },
    {
        "item_id": 5005689,
        "item_name": "Sun Conure",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112631-Center-1",
        "type": 3
    },
    {
        "item_id": 5004511,
        "item_name": "Green Parakeet",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112151-center-1",
        "type": 3
    },
    {
        "item_id": 5006063,
        "item_name": "Zebra Finch",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112283-center-1",
        "type": 3
    },
    {
        "item_id": 5005623,
        "item_name": "Society Finch",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/112291-center-1",
        "type": 3
    },
    {
        "item_id": 5005415,
        "item_name": "Quaker Parakeet",
        "image": "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/180246-Center-1",
        "type": 3
    },
];
const petTypes = {
    reptil: 1,
    fish: 2,
    bird: 3
};
const getSpecie = (type) => {
    switch (type) {
        case petTypes.reptil:
            return "Reptil";
        case petTypes.fish:
            return "Fish";
        case petTypes.bird:
            return "Bird";
    }
}
window.onload = () => {
    const favorites = [];

    const domElements = {
        searchInput: document.getElementById("txtPetName"),
        inFavorites: document.getElementById("checkboxFavorites"),
        petType: document.getElementById("selectPetType"),
        resultsContainer: document.getElementById("results"),
        petItemTemplate: document.getElementById("petItemTemplate")
    }
    const filterData = (data) => data.filter((pet) => {
        let valid = true;
        if (valid && domElements.petType.value) {
            valid = +domElements.petType.value === pet.type;
        }
        if (valid && domElements.searchInput.value) {
            valid = pet.item_name.toLowerCase().includes(domElements.searchInput.value.toLowerCase());
        }
        return valid;
    });

    const handleFavoritesItemButton = (event) => {
        const id = +event.currentTarget.dataset.id;
        const favoritesIndex = favorites.findIndex(petItem => petItem.item_id === id);
        if (favoritesIndex >= 0) {
            favorites.splice(favoritesIndex, 1);
            event.target.parentElement.parentElement.remove();
        } else {
            favorites.push(data.find(petItem => petItem.item_id === id));
        }

    }
    const renderData = (data) => {

        domElements.resultsContainer.innerHTML = "";
        data.forEach((petItem) => {
            const templateClone = domElements.petItemTemplate.content.cloneNode(true);
            console.log(templateClone.querySelector("div"));
            templateClone.querySelector("div").id = petItem.item_id;
            templateClone.querySelector("h3").innerHTML = petItem.item_name;
            templateClone.querySelector("p").innerHTML = getSpecie(petItem.type);
            templateClone.querySelector("img").src = petItem.image;
            templateClone.querySelector("button").dataset.id = petItem.item_id;
            templateClone.querySelector("button").onclick = handleFavoritesItemButton;

            domElements.resultsContainer.append(templateClone);
        });
    }

    const triggers = () => {
        domElements.searchInput.onkeyup = () => renderData(
            filterData(domElements.inFavorites.checked ? favorites : data)
        );
        domElements.inFavorites.onchange = (event) => {
            if (event.target.checked) {
                renderData(filterData(favorites));
            } else {
                renderData(filterData(data));
            }
        };
        domElements.petType.onchange = () => renderData(
            filterData(domElements.inFavorites.checked ? favorites : data)
        );
    };
    const init = () => {
        triggers();
        renderData(data);
    };
    init();


};