// ...existing code...
  
      document.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Stop observing once visible
              }
            });
          },
          {
            threshold: 0.1, // Trigger when 10% of the element is visible
          }
        );

        // Find all elements to animate and start observing them
        const targets = document.querySelectorAll(".scroll-animate");
        targets.forEach((target) => {
          observer.observe(target);
        });
      });
   
