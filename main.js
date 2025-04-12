const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const responsiveCV = document.getElementById('responsiveCV');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        responsiveCV.classList.toggle('hidden');
    });

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let result = confirm("Apakah kamu yakin ingin mendownload CV ini?");

  if (result) {
    alert("Download CV berhasil");
  } else {
    alert("Download CV dibatalkan");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filter-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Ganti status tombol
      filterButtons.forEach(btn => btn.classList.remove('active', 'shadow-[0_0_25px_10px_rgba(34,197,94,0.5)]'));
      button.classList.add('active', 'shadow-[0_0_25px_10px_rgba(34,197,94,0.5)]');

      // Filter item
      filterItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      document.querySelectorAll('.filter-item').forEach(item => {
          const categories = item.getAttribute('data-category').split(' ');
          if (filter === 'all' || categories.includes(filter)) {
              item.style.opacity = '0';
              item.style.display = 'block';
              setTimeout(() => {
                  item.style.transition = 'opacity 0.5s ease-in-out';
                  item.style.opacity = '1';
              }, 10);
          } else {
              item.style.transition = 'opacity 0.5s ease-in-out';
              item.style.opacity = '0';
              setTimeout(() => {
                  item.style.display = 'none';
              }, 500);
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const allButton = document.querySelector("[data-filter='all']");

  filterButtons.forEach(button => {
      button.addEventListener("click", function() {
          filterButtons.forEach(btn => btn.classList.remove("bg-green-500", "text-black", "shadow-[0_0_25px_10px_rgba(34,197,94,0.5)]"));
          this.classList.add("bg-green-500", "text-black", "shadow-[0_0_25px_10px_rgba(34,197,94,0.5)]");

          if (this.dataset.filter !== "all" && allButton) {
              allButton.classList.remove("bg-green-500", "text-black", "shadow-[0_0_25px_10px_rgba(34,197,94,0.5)]");
              allButton.classList.add("bg-gray-700", "text-white");
          }
      });
  });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("responseMessage").innerText = "Pesan Anda telah terkirim!";
  document.getElementById("formTitle").innerText = "";
  
  // Mengosongkan formulir
  this.reset();
  
  setTimeout(function() {
      document.getElementById("responseMessage").innerText = "";
  }, 3000);
});