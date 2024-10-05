document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const svijecaId = urlParams.get('id');

    // Simuliramo dohvaćanje podataka o svijeći (u stvarnoj aplikaciji, ovo bi došlo s servera)
    const svijece = {
        1: {
            naziv: "Mirisna Svijeća - Vanilija",
            opis: "Opustite se uz nježan miris vanilije. Savršeno za ugodne večeri.",
            cijena: "50 kn",
            slike: ["/images/vanilija1.jpg", "/images/vanilija2.jpg"]
        },
        2: {
            naziv: "Dekorativna Svijeća - Zvjezdano nebo",
            opis: "Dodajte dašak elegancije vašem domu s ovom prekrasnom svijećom.",
            cijena: "75 kn",
            slike: ["/images/zvjezdano1.jpg", "/images/zvjezdano2.jpg"]
        }
    };

    const svijeca = svijece[svijecaId];

    if (svijeca) {
        document.getElementById('naziv-svijece').textContent = svijeca.naziv;
        document.getElementById('opis-svijece').textContent = svijeca.opis;
        document.getElementById('cijena-svijece').textContent = `Cijena: ${svijeca.cijena}`;

        const slikeContainer = document.getElementById('slike-svijeca');
        svijeca.slike.forEach(slika => {
            const imgElement = document.createElement('img');
            imgElement.src = slika;
            imgElement.alt = svijeca.naziv;
            slikeContainer.appendChild(imgElement);
        });
    } else {
        document.getElementById('detalji-svijece').innerHTML = '<p>Svijeća nije pronađena.</p>';
    }

    document.getElementById('kupi').addEventListener('click', function() {
        alert('Funkcionalnost kupnje će biti implementirana uskoro!');
    });

    document.getElementById('dodaj-u-kosaricu').addEventListener('click', function() {
        alert('Proizvod dodan u košaricu!');
    });
});
