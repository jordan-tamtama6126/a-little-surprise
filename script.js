const albumData = {
  memories: {
    title: "Our Memories",
    description: "Ucapkan terimakasih untuk mereka karena sudah mengukir cerita indah di hidup kamu ♡",
    photos: [
      { src: "images/our-memories-1.jpg.jpeg", caption: "sosok sahabatmu yang sudah memulai jenjang baru dalam kehidupannya ♡" },
      { src: "images/our-memories-2.jpg.jpeg", caption: "berisiknya, nakalnya, nangisnya, dan semua hal tentang mereka, banyak adek-adek yang merindu setelah kita pergi  " },
      { src: "images/our-memories-3.jpg.jpeg", caption: "mungkin kita bisa mendatangani tempat ini lagi, tapi tidak dengan orang-orangnya, semoga hal baik memihak kita dan mereka" },
      { src: "images/our-memories-4.jpg.jpeg", caption: "dulu lebaran ini terasa biasa aja, kita sibuk tertawa,  makan bersama, dan bercanda tanpa tahu bahwa suatu hari, hal-hal sederhana itu justru menjadi kenangan yang paling kita rindukan" },
      { src: "images/our-memories-5.jpg.jpeg", caption: "mungkin suatu hari kita akan lupa detail perayaannya, siapa yang memberi hadiah, atau siapa yang paling ramai tertawa. namun semoga kita tak pernah lupa bagaimana rasanya menjadi bagian dari kebersamaan itu ♡" },
      { src: "images/our-memories-6.jpg.jpeg", caption: "pernah menjadi orang-orang yang sibuk di balik meriahnya sebuah perlombaan. tidak selalu terlihat, tidak selalu mendapat sorotan, tetapi tahu betapa banyak cerita yang tumbuh selama perjalanan itu ♡" },
      { src: "images/our-memories-7.jpg.jpeg", caption: "siapa sangka, sebuah perjalanan ke tempat ini menjadi awal persaudaraan yang tak pernah kita rencanakan ♡" },
      { src: "images/our-memories-8.jpg.jpeg", caption: "tempat ini akan selalu punya cerita untuk dikenang, tentang kita semua yang awalnya tak begitu dekat, hingga perlahan menjadi begitu berarti. barangkali itulah alasan mengapa setiap sudutnya akan selalu mengingatkan kita pada awal mula segalanya ♡" }

    ]
  },

  foryou: {
    title: "For You",
    description: "A little collection made especially for you ♡",
    photos: [
      { src: "images/for-you-1.jpg.jpeg", caption: "burger sederhana, rasa ala kadarnya, tapi koki-kokinya luar biasa bahagia. sayang...resepnya bisa diulang, tapi kebersamaan kita belum tentu ♡" },
      { src: "images/for-you-2.jpg.jpeg", caption: "dulu menunggu air mendidih saja bisa jadi bahan cerita. sekarang, air bisa mendidih kapan saja, tapi menunggu kita berkumpul lagi ternyata sesulit itu" },
      { src: "images/for-you-3.jpg.jpeg", caption: "" },
      { src: "images/for-you-4.jpg.jpeg", caption: "" },
      { src: "images/for-you-5.jpg.jpeg", caption: "" },
      { src: "images/for-you-6.jpg.jpeg", caption: "" },
      { src: "images/for-you-7.jpg.jpeg", caption: "esnya mungkin sudah mencair sejak hari itu, tapi kenangannya masih menetap sampai sekarang. Ironisnya...yang sulit dibekukan justru waktu" },
      { src: "images/for-you-8.jpg.jpeg", caption: "tempat ini masih sama, mungkin juga masih menyimpan cerita kita. hanya saja, orang-orang yang dulu meramaikannya kini sibuk berjalan di arah yang berbeda" }
    ]
  },

  playlist: {
    title: "Our Little Playlist",
    description: "beberapa musik yang mungkin bikin mbak lis inget sesuatu♡",
    photos: [
      { src: "images/playlist-1.jpg.jpeg", caption: "song memories ♡" },
      { src: "images/playlist-2.jpg.jpeg", caption: "a song for you" },
      { src: "images/playlist-3.jpg.jpeg", caption: "listen with your heart" },
      { src: "images/playlist-4.jpg.jpeg", caption: "our little soundtrack" },
      { src: "images/playlist-5.jpg.jpeg", caption: "one more song" }
    ]
  },

  littlethings: {
    title: "Little Things",
    description: "tentang orang yang banyak istimewanya di kehidupanmu ♡",
    photos: [
      { src: "images/little-things-1.jpg.jpeg", caption: "Dia tempat cerita saat kamu capek, ketika kamu lelah kamu akan berpulang ke dia, katamu pelukannya sangat menenangkan  ♡" },
      { src: "images/little-things-2.jpg.jpeg", caption: "Katamu: dia datang tanpa diminta, ketika kamu ragu untuk memulai bertukar cerita, tiba-tiba dia memulainya. nasehatnya, tutur katanya, bagimu sangat menenangkan, dan dia juga pendengar setia obrolan-obrolanmu yang entah ke mana arahnya" },
      { src: "images/little-things-3.jpg.jpeg", caption: "jangan lupakan dia, sesekali jenguklah ke rumahnya, ajak dia jajan atau sekedar motor-motoran agar dia bisa merasakan kembali hari-hari denganmu" },
      { src: "images/little-things-4.jpg.jpeg", caption: "sosok adik kecil yang akhir-akhir ini ini mau boyong, setiap kali mendengar sirine ambulance saya masih teringat momen malam itu, apakah kamu juga?" }
    ]
  }
};

function showPage(pageId) {
  const target = document.getElementById(pageId);

  if (!target) {
    console.error("Halaman tidak ditemukan:", pageId);
    return;
  }

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.add("hidden");
  });

  target.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageId === "playlistPage") {
    resetCassette();
  }
}
function resetCassette() {
  document.querySelectorAll(".cassette-reel").forEach((reel) => {
    reel.style.animationPlayState = "paused";
  });
}

function playCassette(songTitle) {
  const label = document.getElementById("cassetteNowPlaying");

  if (label) {
    label.textContent = "SEDANG DIPUTAR: " + songTitle;
  }

  document.querySelectorAll(".cassette-reel").forEach((reel) => {
    reel.style.animationPlayState = "running";
  });
}

function openAlbum(albumKey) {
  // Album tulisan diarahkan ke halaman khususnya.
  
  if (albumKey === "playlist") {
    showPage("playlistPage");
    return;
  }

  const album = albumData[albumKey];

  if (!album) return;

  document.getElementById("albumHeading").textContent = album.title;
  document.getElementById("albumDescription").textContent = album.description;

  const photoGrid = document.getElementById("photoGrid");
  photoGrid.innerHTML = "";

  album.photos.forEach((photo) => {
    const card = document.createElement("article");
    card.className = "photo-card";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.caption;
    image.loading = "lazy";

    const caption = document.createElement("p");
    caption.className = "photo-caption";
    caption.textContent = photo.caption;

    // Jika nama atau lokasi foto belum cocok, tampilkan petunjuk.
    image.onerror = function () {
      image.remove();

      const placeholder = document.createElement("div");
      placeholder.className = "photo-placeholder";
      placeholder.textContent =
        "Foto belum ditemukan ♡ Periksa nama file dan folder images.";
      card.insertBefore(placeholder, caption);
    };

    card.appendChild(image);
    card.appendChild(caption);
    photoGrid.appendChild(card);
  });

   showPage("memoriesPage");
}

function openForYou() {
  const album = albumData.foryou;
  const photoGrid = document.getElementById("forYouPhotoGrid");

  if (!album || !photoGrid) return;

  photoGrid.innerHTML = "";

  album.photos.forEach((photo) => {
    const card = document.createElement("article");
    card.className = "photo-card";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.caption;
    image.loading = "lazy";

    const caption = document.createElement("p");
    caption.className = "photo-caption";
    caption.textContent = photo.caption;

    image.onerror = function () {
      image.remove();
      const placeholder = document.createElement("div");
      placeholder.className = "photo-placeholder";
      placeholder.textContent = "Foto belum ditemukan ♡ Periksa folder images.";
      card.insertBefore(placeholder, caption);
    };

    card.appendChild(image);
    card.appendChild(caption);
    photoGrid.appendChild(card);
  });

  showPage("forYouPage");
}

function openLittleThings() {
  const album = albumData.littlethings;
  const photoGrid = document.getElementById("littleThingsPhotoGrid");

  if (!album || !photoGrid) return;

  photoGrid.innerHTML = "";

  album.photos.forEach((photo) => {
    const card = document.createElement("article");
    card.className = "photo-card";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.caption;
    image.loading = "lazy";

    const caption = document.createElement("p");
    caption.className = "photo-caption";
    caption.textContent = photo.caption;

    image.onerror = function () {
      image.remove();
      const placeholder = document.createElement("div");
      placeholder.className = "photo-placeholder";
      placeholder.textContent = "Foto belum ditemukan ♡ Periksa folder images.";
      card.insertBefore(placeholder, caption);
    };

    card.appendChild(image);
    card.appendChild(caption);
    photoGrid.appendChild(card);
  });

  showPage("littleThingsPage");
}

// Mulai dari halaman cover.
showPage("fishingPage");


// ======================================
// SISTEM MUSIK SCRAPBOOK
// ======================================

const backgroundMusic = document.getElementById("backgroundMusic");
const reminderMusic = document.getElementById("reminderMusic");

// MUSIK PEMBUKA

function openBook() {
  showPage("introPage");

  if (!backgroundMusic) {
    console.error("backgroundMusic tidak ditemukan!");
    return;
  }

  if (reminderMusic) {
    reminderMusic.pause();
    reminderMusic.currentTime = 0;
  }

  backgroundMusic.volume = 0.5;
  backgroundMusic.currentTime = 0;

  backgroundMusic.play().catch((error) => {
    console.error("Musik pembuka gagal diputar:", error);
  });
}

// MUSIK A LITTLE REMINDER


/* ===== NAVIGASI A LITTLE GAME CORNER ===== */

function openGamePage() {
  showPage("gamePage");
}

function backFromGamePage() {
  showPage("coverPage");
}

function playReminderMusic() {
  const newMusic = document.getElementById("reminderMusic");

  // Hentikan semua musik selain musik kedua
  document.querySelectorAll("audio").forEach(music => {
    if (music !== newMusic) {
      music.pause();
      music.currentTime = 0;
    }
  });

  // Pindah ke halaman A Little Message
  showPage("messagePage");

  // Putar musik kedua
  if (newMusic) {
    newMusic.pause();
    newMusic.currentTime = 0;
    newMusic.volume = 0.5;

    newMusic.play().catch(error => {
      console.log("Musik belum bisa diputar:", error);
    });
  }
}

function sendToWhatsApp(event) {
  event.preventDefault();

  // GANTI DENGAN NOMOR WHATSAPP-MU
  const whatsappNumber = "083848221145";

  const getValue = (id) => {
    return document.getElementById(id).value.trim();
  };

  // Mengambil jawaban pilihan ganda
  const memory = document.querySelector(
    'input[name="memory"]:checked'
  );

  // Mengambil semua jawaban checkbox
  const selfCare = Array.from(
    document.querySelectorAll('input[name="selfCare"]:checked')
  ).map(input => input.value);

  const feeling = getValue("feeling");
  const pastSelf = getValue("pastSelf");
  const pondokDrama = getValue("pondokDrama");
  const littleThing = getValue("littleThing");
  const unsaid = getValue("unsaid");
  const finalMessage = getValue("finalMessage");

  const message =
`Haii, ini jawaban dari Mbak Lis ♡

1. Perasaan setelah membaca scrapbook:
${feeling}

2. Hal yang paling dikangenin dari masa pondok:
${memory ? memory.value : "Tidak dijawab"}

3. Waktu untuk diri sendiri:
${selfCare.length > 0 ? selfCare.map(item => "• " + item).join("\n") : "Tidak dijawab"}

4. Pesan untuk diri sendiri di masa lalu:
${pastSelf || "Tidak dijawab"}

5. Drama pondok yang masih diingat:
${pondokDrama || "Tidak dijawab"}

6. Hal kecil yang masih diingat:
${littleThing || "Tidak dijawab"}

7. Cerita yang belum sempat disampaikan:
${unsaid || "Tidak dijawab"}

8. Pesan terakhir:
${finalMessage || "Tidak dijawab"}

Terima kasih sudah membuat scrapbook ini! ♡`;

  const whatsappURL =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}

/* =====================================
   UNDERWATER FISHING GAME
===================================== */


const fishingLine = document.getElementById("fishingLine");
const fishingGame = document.getElementById("fishingGame");
const pullButton = document.getElementById("pullButton");
const fishingIntro = document.getElementById("fishingIntro");
const fishingSurprise = document.getElementById("fishingSurprise");

let fishingFinished = false;
let isAiming = false;
let isThrowing = false;
let aimX = 50;
let aimY = 70;

const fishingHook = fishingLine.querySelector(".fishing-hook");

// Posisi kail mengikuti arah mouse atau jari
function aimFishing(event) {
  if (fishingFinished || isThrowing) return;

  const rect = fishingGame.getBoundingClientRect();

  aimX = Math.max(5, Math.min(95,
    ((event.clientX - rect.left) / rect.width) * 100
  ));

  aimY = Math.max(15, Math.min(90,
    ((event.clientY - rect.top) / rect.height) * 100
  ));

  fishingLine.style.left = aimX + "%";
  fishingLine.style.height = aimY + "%";
}

fishingGame.addEventListener("pointermove", (event) => {
  if (isAiming) aimFishing(event);
});

fishingGame.addEventListener("pointerdown", (event) => {
  if (fishingFinished || isThrowing) return;
  isAiming = true;
  aimFishing(event);
});

window.addEventListener("pointerup", () => {
  isAiming = false;
});

// Tombol tarik
pullButton.textContent = "TARIK! ♡";

pullButton.addEventListener("click", () => {
  if (fishingFinished || isThrowing) return;

  isThrowing = true;
  pullButton.disabled = true;
  pullButton.textContent = "KAIL MELUNCUR...";

  const gameRect = fishingGame.getBoundingClientRect();

  const targets = [...fishingGame.querySelectorAll(".sea-target")];

  const target = targets.find((item) => {
    const rect = item.getBoundingClientRect();

    const targetX = rect.left + rect.width / 2 - gameRect.left;
    const targetY = rect.top + rect.height / 2 - gameRect.top;

    const hookX = gameRect.width * aimX / 100;
    const hookY = gameRect.height * aimY / 100;

    return Math.hypot(targetX - hookX, targetY - hookY) < 65;
  });

  const hookStartX = fishingGame.clientWidth / 2;
  const hookStartY = 0;

  const hookEndX = fishingGame.clientWidth * aimX / 100;
  const hookEndY = fishingGame.clientHeight * aimY / 100;

  fishingLine.animate([
  {
    height: "0px",
    left: "50%"
  },
  {
    height: aimY + "%",
    left: aimX + "%"
  }
], {
  duration: 650,
  easing: "ease-out",
  fill: "forwards"
});

  fishingLine.style.left = aimX + "%";
  fishingLine.style.height = aimY + "%";

  setTimeout(() => {
    isThrowing = false;

    if (target) {
      target.animate([
        { transform: "scale(1) rotate(0deg)" },
        { transform: "scale(1.5) rotate(15deg)" },
        { transform: "scale(0) rotate(40deg)" }
      ], {
        duration: 450,
        fill: "forwards"
      });

      setTimeout(showFishingSurprise, 500);
    } else {
  // Kembalikan kail ke posisi awal
  fishingLine.getAnimations().forEach(animation => {
    animation.cancel();
  });

  fishingLine.style.transition = "none";
  fishingLine.style.left = "50%";
  fishingLine.style.height = "190px";

  aimX = 50;
  aimY = 70;

  // Izinkan pemain mengarahkan ulang
  isThrowing = false;
  isAiming = false;

  pullButton.disabled = false;
  pullButton.textContent = "MELSET! COBA LAGI ♡";

  setTimeout(() => {
    if (!fishingFinished) {
      pullButton.textContent = "TARIK! ♡";
    }
  }, 1300);
}
  }, 650);
});

// Kejutan ketika berhasil
function showFishingSurprise() {
  fishingFinished = true;

  fishingIntro.style.display = "none";
  fishingGame.style.display = "none";
  pullButton.style.display = "none";

  fishingSurprise.style.display = "block";

  createOceanConfetti();
}

// Hujan dekorasi laut yang lebih ramai dan lama
function createOceanConfetti() {
  const decorations = [
    "🐚", "⭐", "🪸", "♡", "✧", "🫧",
    "🐠", "🌟", "🪼", "🐟", "💗", "🌊"
  ];

  // 6 gelombang, masing-masing 35 ornamen
  for (let wave = 0; wave < 6; wave++) {
    setTimeout(() => {
      for (let i = 0; i < 35; i++) {
        const item = document.createElement("span");

        item.textContent =
          decorations[Math.floor(Math.random() * decorations.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-60px";
        item.style.zIndex = "999";
        item.style.pointerEvents = "none";
        item.style.fontSize = (20 + Math.random() * 27) + "px";

        document.body.appendChild(item);

        const duration = 6500 + Math.random() * 5000;
        const drift = (Math.random() - 0.5) * 180;
        const rotation = 360 + Math.random() * 720;

        item.animate([
          {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: 1
          },
          {
            transform: `translate(${drift}px, 110vh) rotate(${rotation}deg)`,
            opacity: 0.15
          }
        ], {
          duration,
          easing: "linear",
          fill: "forwards"
        });

        setTimeout(() => item.remove(), duration);
      }
    }, wave * 1800);
  }
}

// Buka scrapbook dengan ilustrasi ombak
function openScrapbookFromFishing() {
  const music = document.getElementById("backgroundMusic");
  const transition = document.getElementById("oceanBookTransition");

  if (!transition) {
    showPage("coverPage");
    return;
  }

  transition.classList.remove("active");
  void transition.offsetWidth;
  transition.classList.add("active");

  // Putar musik pembuka
  if (music) {
    music.currentTime = 0;
    music.play().catch(error => {
      console.log("Musik belum bisa diputar:", error);
    });
  }

  // Tampilkan cover setelah ombak menutupi layar
  setTimeout(() => {
    showPage("coverPage");
  }, 1680);

  // Selesaikan transisi ombak
  setTimeout(() => {
    transition.classList.remove("active");
  }, 3000);
}


// =================================
// MESSAGE IN A BOTTLE
// =================================

const bottleMessages = [
  {
    title: "A Little Reminder",
    message: "Jangan lupa untuk memberikan apresisasi kepada dirimu sendiri. Hidupmu itu sudah sulit... Mungkin saja ada kebaikan yang tidak akan pernah lahir jika kamu tidak ada, mungkin saja ada hal indah yang tidak jadi tercipta kalo tanpa kamu..."
  },
  {
    title: "You Are Appreciated",
    message: "Tidak perlu menjadi laut yang menerima semua sungai...Sesekali jadilah seseorang yang hanya ingin duduk di tepiannya dan menikmati angin. Sebab mungkin yang kita butuhkan bukan kehidupan yang lebih besar, hanya kehidupan yang lebih teduh..."
  },
  {
    title: "Don't Forget",
    message: "Karena sembuh tidak selalu tentang kembali seperti semula, tetapi juga tentang terbiasa melanjutkan hidup dengan bekas-bekas pecahannya..."
  },
  {
    title: "For Your Journey",
    message: "Dan semoga dikemudian hari kamu tidak harus mengalah untuk siapapun, jadilan pemenang untuk segala yang datang. Hargailah pencapaian di hidupmu meski itu hanya pencapaian kecil..."
  },
  {
    title: "One More Thing",
    message: "Ada ketenangan yang mulai tumbuh ketika kita tidak lagi merasa harus memenangkan setiap penilaian tentang diri sendiri..."
  }
];

function openBottle(index) {
  const modal = document.getElementById("bottleModal");
  const title = document.getElementById("bottleLetterTitle");
  const message = document.getElementById("bottleLetterMessage");

  if (!modal || !title || !message) return;

  title.textContent = bottleMessages[index].title;
  message.textContent = bottleMessages[index].message;

  modal.classList.remove("hidden");
}

function closeBottle() {
  const modal = document.getElementById("bottleModal");

  if (modal) {
    modal.classList.add("hidden");
  }
}

// SISTEM TUJUH BINTANG

// SISTEM TUJUH BINTANG

const starQuestions = [
  {
    question: "Apa yang membuat bintang dapat terlihat bercahaya?",
    options: [
      "A. Memantulkan cahaya Bulan",
      "B. Menghasilkan cahayanya sendiri",
      "C. Terkena cahaya Matahari"
    ],
    correct: 1
  },
  {
    question: "Matahari termasuk benda langit jenis apa?",
    options: [
      "A. Planet",
      "B. Satelit",
      "C. Bintang"
    ],
    correct: 2
  },
  {
    question: "Apa nama bintang yang paling dekat dengan Bumi?",
    options: [
      "A. Matahari",
      "B. Sirius",
      "C. Polaris"
    ],
    correct: 0
  },
  {
    question: "Apa sebutan untuk kumpulan bintang yang membentuk pola tertentu di langit?",
    options: [
      "A. Galaksi",
      "B. Rasi bintang",
      "C. Tata surya"
    ],
    correct: 1
  },
  {
    question: "Apa sebenarnya yang kita sebut sebagai bintang jatuh?",
    options: [
      "A. Bintang yang keluar dari orbit",
      "B. Planet yang terbakar",
      "C. Meteoroid yang terbakar di atmosfer"
    ],
    correct: 2
  },
  {
    question: "Apa arti satu tahun cahaya?",
    options: [
      "A. Jarak yang ditempuh cahaya selama satu tahun",
      "B. Waktu yang dibutuhkan bintang untuk bersinar",
      "C. Umur sebuah bintang"
    ],
    correct: 0
  },
  {
    question: "Warna bintang dapat menunjukkan apa?",
    options: [
      "A. Ukuran galaksi",
      "B. Suhu permukaan bintang",
      "C. Jarak bintang dari Bulan"
    ],
    correct: 1
  }
];

let nextStarIndex = 0;
let currentStarIndex = null;

function discoverStar(index) {
  const modal = document.getElementById("starModal");
  const message = document.getElementById("starMessage");
  const optionsBox = document.getElementById("starOptions");
  const feedback = document.getElementById("starFeedback");

  if (index !== nextStarIndex) {
    message.textContent =
      index > nextStarIndex
        ? `Nyalakan bintang nomor ${nextStarIndex + 1} terlebih dahulu!`
        : "Bintang ini sudah berhasil dinyalakan! ✨";

    optionsBox.innerHTML = "";
    feedback.textContent = "";
    modal.classList.remove("hidden");
    currentStarIndex = null;
    return;
  }

  currentStarIndex = index;

  message.textContent =
    `BINTANG ${index + 1} DARI 7\n\n${starQuestions[index].question}`;

  feedback.textContent = "";
  optionsBox.innerHTML = "";

  starQuestions[index].options.forEach((option, optionIndex) => {
    const button = document.createElement("button");

    button.className = "star-answer-option";
    button.textContent = option;
    button.onclick = () => chooseStarAnswer(optionIndex);

    optionsBox.appendChild(button);
  });

  modal.classList.remove("hidden");
}

function chooseStarAnswer(answerIndex) {
  if (currentStarIndex === null) return;

  const feedback = document.getElementById("starFeedback");
  const question = starQuestions[currentStarIndex];

  if (answerIndex !== question.correct) {
    feedback.textContent =
      "Belum tepat! Coba pikirkan lagi dan pilih jawaban lainnya ✨";
    return;
  }

  const stars = document.querySelectorAll(".universe-star");

  stars[currentStarIndex].classList.add("lit");

  nextStarIndex++;

  document.getElementById("starProgress").textContent =
    `${nextStarIndex} dari 7 bintang sudah menyala`;

  closeStarModal();

  if (nextStarIndex === 7) {
    showStarEnding();
  }
}

function showStarEnding() {
  const message = document.getElementById("starMessage");
  const options = document.getElementById("starOptions");
  const feedback = document.getElementById("starFeedback");

  message.innerHTML = `
    <div class="star-victory">
      <div class="big-shining-star">✦</div>

      <h2>Bintang Kecil di Alam Semestamu</h2>

      <p>
        Setiap bintang punya cahayanya masing-masing. 
        Begitu juga kamu, Mbak Lis. Teruslah berjalan dengan caramu sendiri, 
        tanpa harus menjadi orang lain untuk terlihat istimewa. 
        Semoga kamu selalu ingat betapa berharganya dirimu, 
        karena dari sekian banyak bintang di alam semesta kecil ini,
      </p>

      <h3>Bintang itu adalah kamu Mbak Lis. ♡</h3>
    </div>
  `;

  options.innerHTML = "";
  feedback.textContent = "";

  document.getElementById("starModal").classList.remove("hidden");
  const shower = document.getElementById("starShower");

shower.innerHTML = "";

for (let i = 0; i < 50; i++) {
  const star = document.createElement("span");

  star.textContent = ["✦", "✧", "⋆", "✶"][i % 4];

  star.style.left = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 5 + "s";
  star.style.animationDuration = (4 + Math.random() * 4) + "s";
  star.style.fontSize = (14 + Math.random() * 20) + "px";

  shower.appendChild(star);
}
  document.getElementById("starShower").classList.remove("hidden");

  document.getElementById("gardenNextButton").disabled = false;

  document.querySelector(".star-modal-content").classList.add("star-victory-modal");
}

function closeStarModal() {
  document.getElementById("starModal").classList.add("hidden");
  currentStarIndex = null;
}

let selectedSeed = null;

const gardenPlants = Array.from({ length: 3 }, () => ({
  seed: null,
  stage: 0,
  water: false,
  sunlight: false,
  timer: null
}));

const flowerTypes = {
  daisy: ["🌼", "🌱", "🌼"],
  tulip: ["🌷", "🌿", "🌷"],
  sunflower: ["🌻", "🌿", "🌻"]
};

let selectedGardenTool = null;
let gardenDragGhost = null;
let activeGardenDrag = null;

function startGardenDrag(event, tool) {
  event.preventDefault();

  activeGardenDrag = tool;

  gardenDragGhost = document.createElement("div");
  gardenDragGhost.className = "garden-drag-ghost";
  gardenDragGhost.textContent = tool === "water" ? "💧" : "☀️";

  document.body.appendChild(gardenDragGhost);

  moveGardenDrag(event);

  document.addEventListener("pointermove", moveGardenDrag);
  document.addEventListener("pointerup", endGardenDrag);
  document.addEventListener("pointercancel", endGardenDrag);
}

function moveGardenDrag(event) {
  if (!gardenDragGhost) return;

  gardenDragGhost.style.left = event.clientX + "px";
  gardenDragGhost.style.top = event.clientY + "px";
}

function endGardenDrag(event) {
  if (!gardenDragGhost) return;

  const target = document.elementFromPoint(
    event.clientX,
    event.clientY
  );

  const pot = target?.closest(".garden-pot");

  if (pot) {
    const index = Number(pot.id.replace("pot", ""));
    const plant = gardenPlants[index];

    if (!plant || !plant.seed) {
      document.getElementById("gardenStatus").textContent =
        "Benihnya belum ditanam di sini. Tanam dulu, yuk! 🌱";
    } else if (plant.stage < 2) {
      if (activeGardenDrag === "water") {
        plant.water = true;
        pot.querySelector(".pot-water").textContent =
          "💧 Sudah disiram";
        document.getElementById("gardenStatus").textContent =
          "Nah, sudah dapat air. Sekarang jangan lupa cahaya mataharinya, yaa!";
      }

      if (activeGardenDrag === "sun") {
        plant.sunlight = true;
        pot.querySelector(".pot-sun").textContent =
          "☀️ Sudah terkena matahari";
        document.getElementById("gardenStatus").textContent =
          "Sudah dapat cahaya matahari juga. Kita tunggu bunganya tumbuh, yaa!";
      }

      growPlants();
    } else {
      document.getElementById("gardenStatus").textContent =
        "Bunganya sudah mekar. Cantik, yaa! 🌸";
    }
  }

  gardenDragGhost.remove();
  gardenDragGhost = null;
  activeGardenDrag = null;

  document.removeEventListener("pointermove", moveGardenDrag);
  document.removeEventListener("pointerup", endGardenDrag);
  document.removeEventListener("pointercancel", endGardenDrag);
}

function applyGardenTool(event, index) {
  if (!selectedGardenTool) return;

  if (event.target.closest("button")) return;

  const plant = gardenPlants[index];

  if (!plant.seed) {
    document.getElementById("gardenStatus").textContent =
      "Tanam bunganya dulu, yaa!";
    return;
  }

  if (plant.stage >= 2) return;

  if (selectedGardenTool === "water") {
    plant.water = true;
    document.querySelector("#pot" + index + " .pot-water").textContent =
      "💧 Sudah disiram";
  }

  if (selectedGardenTool === "sun") {
    plant.sunlight = true;
    document.querySelector("#pot" + index + " .pot-sun").textContent =
      "☀️ Sudah terkena matahari";
  }

  selectedGardenTool = null;
  growPlants();
}

function selectSeed(seed) {
  selectedSeed = seed;

  document.getElementById("flowerQuote").classList.add("hidden");
  document.getElementById("waterStatus").textContent = "💧 Air: Belum diberikan";
  document.getElementById("sunStatus").textContent = "☀️ Matahari: Belum diberikan";

  const flowerNames = {
    daisy: "Daisy",
    tulip: "Tulip",
    sunflower: "Bunga matahari"
  };

  document.getElementById("gardenStatus").textContent =
    "Kamu pilih " + flowerNames[seed] + ", yaa! Sekarang cari pot yang cocok untuk menanamnya 🌱";
}

function plantSeed(index) {
  if (!selectedSeed) {
    document.getElementById("gardenStatus").textContent =
      "Pilih benih yang kamu suka dulu, yaa 🌱";
    return;
  }

  if (gardenPlants[index].seed) {
    document.getElementById("gardenStatus").textContent =
      "Pot ini sudah ada tanamannya. Coba pot yang lain, yuk!";
    return;
  }

  gardenPlants[index].seed = selectedSeed;

  document.getElementById("plant" + index).textContent = "🌱";
  document.getElementById("progress" + index).style.width = "10%";
  document.getElementById("stage" + index).textContent =
    "Benihnya sudah ditanam 🌱";

  const potButton = document.querySelector(
    "#pot" + index + " button"
  );

  potButton.textContent = "Sudah ditanam ✓";
  potButton.disabled = true;

  document.getElementById("gardenStatus").textContent =
    "Nah, benihnya sudah ditanam! Sekarang bantu kasih air dan cahaya matahari, yaa 💧☀️";
}

function waterPlants() {
  gardenPlants.forEach((plant, index) => {
    if (plant.seed && plant.stage < 2) {
      plant.water = true;

      document.querySelector(
        "#pot" + index + " .pot-water"
      ).textContent = "💧 Sudah disiram";
    }
  });

  document.getElementById("gardenStatus").textContent =
    "Your little plants have been watered! 💧";
    
    growPlants();
}

function giveSunlight() {
  gardenPlants.forEach((plant, index) => {
    if (plant.seed && plant.stage < 2) {
      plant.sunlight = true;

      document.querySelector(
        "#pot" + index + " .pot-sun"
      ).textContent = "☀️ Sudah terkena matahari";
    }
  });

  growPlants();
}

function growPlants() {
  gardenPlants.forEach((plant, index) => {
    if (
      plant.seed &&
      plant.water &&
      plant.sunlight &&
      plant.stage === 0
    ) {
      plant.stage = 1;

      document.getElementById("progress" + index).style.width = "55%";
      document.getElementById("stage" + index).textContent =
        "Pelan-pelan mulai tumbuh 🌿";

      document.getElementById("plant" + index).textContent =
        flowerTypes[plant.seed][1];

      document.getElementById("gardenStatus").textContent =
        "Nah, sekarang bunganya mulai tumbuh. Kita tunggu sebentar, yaa 🌱";

      plant.timer = setTimeout(() => {
        if (plant.stage !== 1) return;

        plant.stage = 2;

        document.getElementById("progress" + index).style.width = "100%";
        document.getElementById("stage" + index).textContent =
          "Akhirnya mekar! ✿";

        document.getElementById("plant" + index).textContent =
          flowerTypes[plant.seed][2];

        document.getElementById("plant" + index).classList.add("bloomed");

        document.getElementById("gardenStatus").textContent =
          "Lihat, bunganya sudah mekar! Cantik, yaa 🌸";

        showFlowerQuote(plant.seed, index);
      }, 15000);
    }
  });
}

function showFlowerQuote(seed, index) {
  const quotes = {
    daisy: "Ternyata hal-hal kecil yang dirawat dengan sabar bisa tumbuh seindah ini. Sama seperti kamu, jangan lupa menghargai setiap prosesmu, yaa. 🤍",

    tulip: "Nggak harus selalu cepat untuk bisa sampai tujuan. Pelan-pelan saja, yang penting kamu tetap mau bertumbuh. 🌷",

    sunflower: "Terus cari hal-hal baik yang bisa bikin kamu tumbuh. Kalau hari ini terasa mendung, semoga besok ada lebih banyak alasan untuk tersenyum. 🌻"
  };

  const pot = document.getElementById("pot" + index);

  if (!pot) return;

  const oldQuote = pot.querySelector(".flower-quote-pop");
  if (oldQuote) oldQuote.remove();

  const quote = document.createElement("div");
  quote.className = "flower-quote-pop";
  quote.textContent = quotes[seed];

  pot.appendChild(quote);
}

function resetPot(index) {

  if (gardenPlants[index].timer) {
    clearTimeout(gardenPlants[index].timer);
  }

  gardenPlants[index] = {
    seed: null,
    stage: 0,
    water: false,
    sunlight: false
  };

  document.getElementById("plant" + index).textContent = "🪴";
  document.getElementById("progress" + index).style.width = "0%";
  document.getElementById("stage" + index).textContent = "Belum ada benih";
  document.getElementById("plant" + index).classList.remove("bloomed");

  document.querySelector("#pot" + index + " button").textContent = "Tanam benih";
  document.querySelector("#pot" + index + " button").disabled = false;

  document.querySelector("#pot" + index + " .pot-water").textContent = "💧 Belum disiram";
  document.querySelector("#pot" + index + " .pot-sun").textContent = "☀️ Belum kena matahari";

  document.querySelector("#pot" + index + " .flower-quote-pop")?.remove();
  document.getElementById("gardenStatus").textContent =
    "Yuk, kita mulai lagi dari awal. Pilih benih yang kamu suka! 🌱";
}

function highlightGardenPot(event) {
  event.preventDefault();
  event.currentTarget.classList.add("drag-over");
}

function removeGardenHighlight(event) {
  event.currentTarget.classList.remove("drag-over");
}


const crosswordWords = [
  { word: "AUSTRALIA", direction: "down", row: 0, col: 15, clue: "Negara yang penduduk lokalnya sering disebut punya kanguru sebagai tetangga." },
  { word: "PRANCIS", direction: "down", row: 5, col: 11, clue: "Negara yang punya menara romantis, tapi naiknya bikin kaki olahraga." },
  { word: "THAILAND", direction: "down", row: 6, col: 8, clue: "Negara yang terkenal dengan gajah, pantai, dan kuliner pedas." },
  { word: "BRASIL", direction: "across", row: 6, col: 10, clue: "Negara yang kalau bicara sepak bola, suasananya langsung meriah." },
  { word: "MESIR", direction: "down", row: 7, col: 6, clue: "Negara yang punya piramida dan kisah para Firaun." },
  { word: "KOREASELATAN", direction: "across", row: 8, col: 0, clue: "Negara asal K-pop, drama, dan antrean skincare." },
  { word: "AMERIKA", direction: "down", row: 8, col: 4, clue: "Negara yang punya Patung Liberty dan Hollywood." },
  { word: "RUSIA", direction: "down", row: 4, col: 13, clue: "Negara yang wilayahnya sangat luas sampai melintasi dua benua." },
  { word: "KANADA", direction: "down", row: 11, col: 2, clue: "Negara yang benderanya punya daun maple." },
  { word: "SWISS", direction: "across", row: 11, col: 11, clue: "Negara yang terkenal dengan cokelat dan jam tangan." },
  { word: "ITALIA", direction: "across", row: 12, col: 0, clue: "Negara yang bentuk petanya mirip sepatu bot." },
  { word: "MALAYSIA", direction: "down", row: 12, col: 10, clue: "Negara tetangga Indonesia yang punya Menara Petronas." },
  { word: "INDIA", direction: "across", row: 13, col: 6, clue: "Negara asal Taj Mahal dan film Bollywood." },
  { word: "JEPANG", direction: "across", row: 15, col: 7, clue: "Negara yang terkenal dengan anime, sushi, dan bunga sakura." },
  { word: "BELANDA", direction: "across", row: 19, col: 4, clue: "Negara yang identik dengan tulip, kincir angin, dan sepatu kayu." }
];

let activeCrosswordWord = null;

function createCrossword() {
  const board = document.getElementById("crosswordBoard");
  const across = document.getElementById("acrossClues");
  const down = document.getElementById("downClues");

  if (!board || !across || !down) return;

  board.innerHTML = "";
  across.innerHTML = "";
  down.innerHTML = "";

  const totalRows = 20;
  const totalCols = 16;

  board.style.gridTemplateColumns = `repeat(${totalCols}, 30px)`;

  const cells = {};
  const starts = [...new Set(
    crosswordWords.map(item => `${item.row}-${item.col}`)
  )].sort((a, b) => {
    const [r1, c1] = a.split("-").map(Number);
    const [r2, c2] = b.split("-").map(Number);
    return r1 - r2 || c1 - c2;
  });

  const numbers = {};
  starts.forEach((key, index) => {
    numbers[key] = index + 1;
  });

  crosswordWords.forEach(item => {
    const startKey = `${item.row}-${item.col}`;
    const clueBox = document.createElement("button");

    clueBox.type = "button";
    clueBox.className = "crossword-clue";
    clueBox.textContent = `${numbers[startKey]}. ${item.clue}`;

    clueBox.addEventListener("click", () => {
      activeCrosswordWord = item;
      highlightCrosswordWord(item);

      document.querySelector(
        `#crosswordBoard input[data-row="${item.row}"][data-col="${item.col}"]`
      )?.focus();
    });

    if (item.direction === "across") {
      across.appendChild(clueBox);
    } else {
      down.appendChild(clueBox);
    }

    for (let i = 0; i < item.word.length; i++) {
      const row = item.row + (item.direction === "down" ? i : 0);
      const col = item.col + (item.direction === "across" ? i : 0);
      const key = `${row}-${col}`;

      if (!cells[key]) {
        cells[key] = {
          letter: item.word[i],
          number: null
        };
      }

      if (i === 0) {
        cells[key].number = numbers[startKey];
      }
    }
  });

  for (let row = 0; row < totalRows; row++) {
    for (let col = 0; col < totalCols; col++) {
      const key = `${row}-${col}`;
      const cell = document.createElement("div");

      if (cells[key]) {
        cell.className = "crossword-cell";

        if (cells[key].number) {
          const number = document.createElement("span");
          number.className = "cell-number";
          number.textContent = cells[key].number;
          cell.appendChild(number);
        }

        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.autocomplete = "off";
        input.dataset.row = row;
        input.dataset.col = col;
        input.dataset.answer = cells[key].letter;

        input.addEventListener("click", () => {
          const matchingWords = crosswordWords.filter(item => {
            if (item.direction === "across") {
              return row === item.row &&
                col >= item.col &&
                col < item.col + item.word.length;
            }

            return col === item.col &&
              row >= item.row &&
              row < item.row + item.word.length;
          });

          if (!matchingWords.length) return;

          if (!matchingWords.includes(activeCrosswordWord)) {
            activeCrosswordWord = matchingWords[0];
          } else if (matchingWords.length > 1) {
            const currentIndex = matchingWords.indexOf(activeCrosswordWord);
            activeCrosswordWord =
              matchingWords[(currentIndex + 1) % matchingWords.length];
          }

          highlightCrosswordWord(activeCrosswordWord);
        });

        input.addEventListener("input", () => {
          input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "");

          if (!input.value || !activeCrosswordWord) return;

          const nextRow =
            row + (activeCrosswordWord.direction === "down" ? 1 : 0);
          const nextCol =
            col + (activeCrosswordWord.direction === "across" ? 1 : 0);

          document.querySelector(
            `#crosswordBoard input[data-row="${nextRow}"][data-col="${nextCol}"]`
          )?.focus();
        });

        input.addEventListener("keydown", event => {
          if (!activeCrosswordWord) return;

          let nextRow = row;
          let nextCol = col;

          if (event.key === "ArrowRight" &&
              activeCrosswordWord.direction === "across") nextCol++;
          else if (event.key === "ArrowLeft" &&
              activeCrosswordWord.direction === "across") nextCol--;
          else if (event.key === "ArrowDown" &&
              activeCrosswordWord.direction === "down") nextRow++;
          else if (event.key === "ArrowUp" &&
              activeCrosswordWord.direction === "down") nextRow--;
          else return;

          event.preventDefault();

          document.querySelector(
            `#crosswordBoard input[data-row="${nextRow}"][data-col="${nextCol}"]`
          )?.focus();
        });

        cell.appendChild(input);
      } else {
        cell.className = "crossword-empty";
      }

      board.appendChild(cell);
    }
  }

  activeCrosswordWord = null;

  const status = document.getElementById("crosswordStatus");
  if (status) {
    status.textContent = "Pilih petunjuk untuk mulai bermain! 🌍";
  }
}

function highlightCrosswordWord(item) {
  document.querySelectorAll("#crosswordBoard input").forEach(input => {
    input.parentElement.classList.remove("selected-cell");
  });

  document.querySelectorAll(".crossword-clue").forEach(clue => {
    clue.classList.remove("active-clue");
  });

  if (!item) return;

  const clues = item.direction === "across"
    ? document.querySelectorAll("#acrossClues .crossword-clue")
    : document.querySelectorAll("#downClues .crossword-clue");

  const sameDirection = crosswordWords.filter(
    word => word.direction === item.direction
  );

  const index = sameDirection.indexOf(item);
  clues[index]?.classList.add("active-clue");

  for (let i = 0; i < item.word.length; i++) {
    const row = item.row + (item.direction === "down" ? i : 0);
    const col = item.col + (item.direction === "across" ? i : 0);

    document.querySelector(
      `#crosswordBoard input[data-row="${row}"][data-col="${col}"]`
    )?.parentElement.classList.add("selected-cell");
  }
}

function checkCrossword() {
  const inputs = document.querySelectorAll("#crosswordBoard input");
  const status = document.getElementById("crosswordStatus");
  const success = document.getElementById("crosswordSuccess");

  let allCorrect = true;

  inputs.forEach(input => {
    const correct =
      input.value.toUpperCase() === input.dataset.answer;

    if (correct) {
      input.parentElement.style.background = "#e1f0df";
    } else {
      input.parentElement.style.background = "";
      allCorrect = false;
    }
  });

  if (allCorrect) {
    status.textContent = "Hebat! Semua negara berhasil kamu tebak! 🎉";
    success.classList.remove("hidden");
  } else {
    status.textContent =
      "Masih ada jawaban yang belum tepat. Coba lagi, ya! ✏️";
    success.classList.add("hidden");
  }
}

createCrossword();


function addQuotesDecorations() {
  const page = document.getElementById("quotesSecondPage");

  if (!page || page.querySelector(".floating-decoration")) return;

  
const decorations = [
  ["🐈", "cute-cat"],
  ["🐈‍⬛", "cute-cat cat-two"],
  ["🐱", "cute-cat cat-three"],
  ["🐈", "cute-cat cat-four"],
  ["🕊️", "white-bird"],
  ["🌸", "falling-flower"],
  ["🌷", "falling-flower flower-two"],
  ["🌼", "falling-flower flower-three"],
  ["✦", "twinkle-star"],
  ["✧", "twinkle-star"]
];

  decorations.forEach(([symbol, className], index) => {
    const item = document.createElement("span");

    item.className = `floating-decoration ${className}`;
    item.textContent = symbol;

    if (className.includes("twinkle")) {
      item.style.left = index === 6 ? "12%" : "85%";
      item.style.top = index === 6 ? "35%" : "65%";
    } else if (className.includes("falling")) {
      item.style.left = index === 3 ? "15%" : "";
    }

    page.appendChild(item);
  });
}

addQuotesDecorations();
