document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    const leftArrow = document.querySelector(".arrow-circle:first-child");
    const rightArrow = document.querySelector(".arrow-circle:last-child");
    
 

    let images = [
        "Mathias.png",
        "Adam.png",
        "Mohamed_S.png",
        "Mohamed_A.png",
        "Suvin.png"
    ];

    function updateImages(newOrder) {
        // Assigne correctement les images aux cercles
        circles.forEach((circle, index) => {
            circle.style.backgroundImage = `url(${newOrder[index]})`;
        });
    }

    function rotateRight() {

        circles.forEach(circle => {
            circle.classList.add("moving"); // Ajoute l'effet de flou
        });
        
        // Décale les images vers la droite en conservant leur bon ordre
        images.unshift(images.pop());

        let newOrder = [...images]; // On crée un nouvel ordre correct

   

        let classes = [...circles].map(circle => circle.classList[1]);

        // Réassigner les classes pour provoquer l'animation fluide
        circles[0].classList.replace(classes[0], classes[4]); 
        circles[1].classList.replace(classes[1], classes[0]); 
        circles[2].classList.replace(classes[2], classes[1]); 
        circles[3].classList.replace(classes[3], classes[2]); 
        circles[4].classList.replace(classes[4], classes[3]); 

        setTimeout(() => {
            circles.forEach(circle => {
                circle.classList.remove("moving"); // Supprime le flou après la transition
            });
        }, 200);

    }

    function rotateLeft() {

        circles.forEach(circle => {
            circle.classList.add("moving"); // Ajoute l'effet de flou
        });
        
    
        // Décale les images vers la gauche
        

        updateImages(images); // 🔥 Mise à jour des images avant l'animation


        let newOrder = [...images]; // On crée un nouvel ordre correct

        // 🔥 Met à jour immédiatement les images
        updateImages(newOrder);

        let classes = [...circles].map(circle => circle.classList[1]);

        circles[0].classList.replace(classes[0], classes[1]); 
        circles[1].classList.replace(classes[1], classes[2]); 
        circles[2].classList.replace(classes[2], classes[3]); 
        circles[3].classList.replace(classes[3], classes[4]); 
        circles[4].classList.replace(classes[4], classes[0]); 

        setTimeout(() => {
            circles.forEach(circle => {
                circle.classList.remove("moving"); // Supprime le flou après la transition
            });
        }, 200);
        
    }

    leftArrow.addEventListener("click", rotateLeft);
    rightArrow.addEventListener("click", rotateRight);

    updateImages(images); // Initialisation correcte des images

    function toggleMenu() {
        document.querySelector(".nav-links").classList.toggle("active");
    }
    

});



