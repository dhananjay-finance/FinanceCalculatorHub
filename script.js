function searchCalculators() {

    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();

    let cards = document.querySelectorAll(".card-link");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if (text.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

}