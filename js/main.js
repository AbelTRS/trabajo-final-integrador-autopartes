document.addEventListener("DOMContentLoaded", () => {

    const carouselImage = document.getElementById("carouselImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (carouselImage && prevBtn && nextBtn) {

        const images = [
            "img/banner1.webp",
            "img/banner2.webp",
            "img/banner3.webp"
        ];

        let currentIndex = 0;

        function showImage(index) {
            carouselImage.src = images[index];
        }

        showImage(currentIndex);

        prevBtn.addEventListener("click", () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            showImage(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        });
    }
});