  const images = [
    "./images/01.jpg",
    "./images/02.jpg",
    "./images/03.jpg",
    "./images/04.jpg",
    "./images/05.jpg",
    "./images/06.jpg",
    "./images/07.jpg",
    "./images/08.jpg",
    "./images/09.jpg",
  ];
  
  // Feliratok a képekhez
  const captions = [
    "Belinszki Bence 11. M",
    "Tugya Dominik 11. M",
    "Barna István 11. M",
    "Sóss Roland 11. M",
    "Rácz Csaba 11. M",
    "Nagy Dávid 12. N",
    "Dobos Dávid 12. N",
    "Polyák András Marcell 12. N",
    "Nagy Levente 10. N"

  ];
  
  const gallery = document.getElementById("gallery");
  
 
  images.forEach((src, index) => {
    const card = document.createElement("div");
    card.className = "card";
  
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => openModal(src);
  
    const caption = document.createElement("div");
    caption.className = "caption";
    caption.innerText = captions[index] || "Kép leírás";
  
    const actions = document.createElement("div");
    actions.className = "actions";
  
    const voteBtn = document.createElement("button");
    const voteCount = document.createElement("span");
  
    const storageKey = `voted_${index}`;
    const countKey = `count_${index}`;
  
  /*  let count = localStorage.getItem(countKey) || 0;
    voteCount.innerText = count;
  */
    const alreadyVoted = localStorage.getItem(storageKey);
  /*
    if (alreadyVoted) {
      voteBtn.innerText = "Szavazva";
      voteBtn.disabled = true;
    } else {
      voteBtn.innerText = "👍 Szavazat";
    }
  */
 /*
    voteBtn.onclick = () => {
      if (!localStorage.getItem(storageKey)) {
        count++;
        localStorage.setItem(countKey, count);
        localStorage.setItem(storageKey, true);
  
        voteCount.innerText = count;
        voteBtn.innerText = "Szavazva";
        voteBtn.disabled = true;
      }
    };
  */
    actions.appendChild(voteBtn);
    actions.appendChild(voteCount);
  
    card.appendChild(img);
    card.appendChild(caption);
    card.appendChild(actions);
  
    gallery.appendChild(card);
  });
  
  function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = src;
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  };
  