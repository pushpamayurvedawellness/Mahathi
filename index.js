const track = document.getElementById("testimonialTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const total = document.querySelectorAll(".testimonial").length;

    function updateCarousel() {
      const screenWidth = window.innerWidth;
      let visibleCards = 3;

      if (screenWidth <= 1024 && screenWidth > 768) visibleCards = 2;
      else if (screenWidth <= 768) visibleCards = 1;

      const cardWidth = track.querySelector(".testimonial").offsetWidth + 20;
      const maxIndex = total - visibleCards;
      if (index < 0) index = maxIndex;
      if (index > maxIndex) index = 0;

      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    prevBtn.addEventListener("click", () => {
      index--;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      index++;
      updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);