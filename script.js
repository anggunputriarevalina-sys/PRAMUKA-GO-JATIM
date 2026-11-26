// TOMBOL JELAJAHI MATERI
const startButton = document.getElementById("startButton");

if (startButton) {
  startButton.addEventListener("click", function () {
    document.getElementById("materi").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// TOMBOL KARTU MATERI DASHBOARD
document.querySelectorAll(".material-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".material-card");
    const title = card.querySelector("h3").textContent;

    if (title.includes("Materi Dasar Pramuka")) {
      document.getElementById("materi-dasar")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } else if (title.includes("Perkemahan")) {
      document.getElementById("perkemahan")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
} else if (title.includes("Sandi Pramuka")) {
  document.getElementById("sandi-pramuka")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  } else if (title.includes("Semaphore")) {
  document.getElementById("semaphore-section")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

} else if (title.includes("Tali-Temali") || title.includes("Tali Temali")) {
  document.getElementById("rope-section")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

} else if (title.includes("Penjelajahan")) {
  document.getElementById("exploration-section")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
} else {
      alert("Kamu memilih: " + title +
        "\nMateri lengkap akan kita buat bertahap!");
    }
  });
});
// TOMBOL PROFIL
const profileButton = document.querySelector(".profile-button");

if (profileButton) {
  profileButton.addEventListener("click", function () {
    const profileSection = document.getElementById("profil");

    if (profileSection) {
      profileSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

// TAMPILKAN MATERI SESUAI TINGKAT
const levelContent = document.getElementById("level-content");
const levelTitle = document.getElementById("level-title");
const levelDescription = document.getElementById("level-description");
const topicList = document.getElementById("topic-list");

document.querySelectorAll(".level-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedLevel = button.dataset.level;
    const data = learningData[selectedLevel];

    if (!data) return;

    levelTitle.textContent = data.title;
    levelDescription.textContent = data.description;
    topicList.replaceChildren();

    data.topics.forEach(function (topic) {
      const article = document.createElement("article");
      article.className = "topic-item";

      const icons = ["🌿", "🏕️", "🧭", "⚜️", "🔦", "🪢", "🚩", "📚", "⭐", "🎒"];

const icon = document.createElement("div");
icon.className = "topic-icon";
icon.textContent = icons[topicList.children.length % icons.length];

const heading = document.createElement("h3");
heading.textContent = topic[0];

const paragraph = document.createElement("p");
paragraph.textContent = topic[1];

article.append(icon, heading, paragraph);
      topicList.appendChild(article);
    });

    levelContent.hidden = false;

    levelContent.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// TOMBOL TUTUP MATERI
const closeLevel = document.getElementById("close-level");

if (closeLevel) {
  closeLevel.addEventListener("click", function () {
    levelContent.hidden = true;
  });
}
// DETAIL MATERI PRAMUKA
const topicDetails = {
  "1. Mengenal Pramuka": {
    content: "Pramuka adalah singkatan dari Praja Muda Karana, yang berarti jiwa muda yang suka berkarya.",
    points: [
      "Melatih kemandirian dan kedisiplinan.",
      "Membangun sikap tanggung jawab.",
      "Menumbuhkan kepedulian terhadap sesama dan lingkungan."
    ]
  },

  "2. Sejarah Singkat Pramuka": {
    content: "Gerakan Pramuka Indonesia resmi diperkenalkan pada 14 Agustus 1961.",
    points: [
      "Pramuka berkembang dari gerakan kepanduan.",
      "Tanggal 14 Agustus diperingati sebagai Hari Pramuka.",
      "Pramuka menjadi wadah pendidikan karakter."
    ]
  },

  "3. Lambang Tunas Kelapa": {
    content: "Lambang Gerakan Pramuka adalah tunas kelapa yang memiliki makna kiasan tentang anggota Pramuka.",
    points: [
      "Dapat tumbuh di berbagai lingkungan.",
      "Mampu menyesuaikan diri.",
      "Bermanfaat bagi masyarakat."
    ]
  },

  "4. Salam Pramuka": {
    content: "Salam Pramuka merupakan bentuk penghormatan dan persaudaraan antaranggota Pramuka.",
    points: [
      "Menghormati sesama anggota.",
      "Menunjukkan sikap sopan.",
      "Mempererat persaudaraan."
    ]
  }, 
  "5. Dwi Satya dan Dwi Darma": {
    content: "Kode kehormatan Pramuka merupakan pedoman sikap dan perilaku setiap anggota Pramuka dalam kehidupan sehari-hari.",
    points: [
        "Kode kehormatan Pramuka terdiri dari Satya dan Darma.",
        "Satya merupakan janji seorang anggota Pramuka.",
        "Darma merupakan ketentuan moral yang harus diamalkan.",
        "Anggota Pramuka harus menerapkannya di rumah, sekolah, dan masyarakat."
    ]
},

"6. Tri Satya dan Dasa Darma": {
    content: "Tri Satya adalah janji dan tiga kewajiban yang harus dijalankan oleh anggota Pramuka sesuai golongannya.",
    points: [
        "Menjalankan kewajiban terhadap Tuhan dan Negara Kesatuan Republik Indonesia.",
        "Menolong sesama hidup dan ikut serta membangun masyarakat.",
        "Menepati Dasa Darma Pramuka."
    ]
},

"7. Tri Satya dan Dasa Darma": {
    content: "Dasa Darma adalah sepuluh ketentuan moral yang menjadi pedoman perilaku anggota Gerakan Pramuka.",
    points: [
        "Takwa kepada Tuhan Yang Maha Esa.",
        "Cinta alam dan kasih sayang sesama manusia.",
        "Patriot yang sopan dan kesatria.",
        "Patuh dan suka bermusyawarah.",
        "Rela menolong dan tabah.",
        "Rajin, terampil, dan gembira.",
        "Hemat, cermat, dan bersahaja.",
        "Disiplin, berani, dan setia.",
        "Bertanggung jawab dan dapat dipercaya.",
        "Suci dalam pikiran, perkataan, dan perbuatan."
    ]
},

"8. Salam Pramuka": {
    content: "Salam Pramuka merupakan bentuk penghormatan dan persaudaraan antaranggota Pramuka.",
    points: [
        "Salam Pramuka menunjukkan sikap hormat dan persaudaraan.",
        "Salam diberikan dengan sikap yang sopan.",
        "Salam digunakan dalam kegiatan kepramukaan sesuai ketentuan.",
        "Setiap anggota harus memahami makna salam Pramuka."
    ]
}, 
"9. Sejarah Kepanduan Dunia": {
    content: "Gerakan kepanduan dunia berkembang dari kegiatan pendidikan karakter bagi kaum muda yang dipelopori oleh Robert Baden-Powell.",
    points: [
        "Robert Baden-Powell dikenal sebagai Bapak Pandu Dunia.",
        "Pada tahun 1907, Baden-Powell mengadakan perkemahan percobaan di Pulau Brownsea, Inggris.",
        "Pada tahun 1908, ia menerbitkan buku Scouting for Boys.",
        "Gerakan kepanduan kemudian berkembang ke berbagai negara.",
        "Kepanduan mengajarkan kemandirian, kedisiplinan, kerja sama, dan kepedulian."
    ]
},

"10. Sejarah Gerakan Pramuka": {
    content: "Gerakan Pramuka Indonesia merupakan organisasi pendidikan nonformal yang menyelenggarakan pendidikan kepramukaan bagi kaum muda.",
    points: [
        "Kepanduan di Indonesia telah berkembang sejak masa sebelum kemerdekaan.",
        "Presiden Soekarno mencanangkan Gerakan Pramuka pada 9 Maret 1961.",
        "Gerakan Pramuka diperkenalkan secara resmi pada 14 Agustus 1961.",
        "Tanggal 14 Agustus diperingati sebagai Hari Pramuka.",
        "Gerakan Pramuka bertujuan membentuk generasi yang berkarakter, mandiri, dan bertanggung jawab."
    ]
}, 
"11. Organisasi Gerakan Pramuka": {
    content: "Gerakan Pramuka merupakan organisasi pendidikan nonformal yang menyelenggarakan pendidikan kepramukaan di Indonesia.",
    points: [
        "Gerakan Pramuka memiliki organisasi dari tingkat nasional hingga gugus depan.",
        "Kwartir Nasional (Kwarnas) merupakan tingkat nasional.",
        "Kwartir Daerah (Kwarda) berada di tingkat provinsi.",
        "Kwartir Cabang (Kwarcab) berada di tingkat kabupaten atau kota.",
        "Kwartir Ranting (Kwarran) berada di tingkat kecamatan.",
        "Gugus Depan (Gudep) merupakan satuan pendidikan kepramukaan yang berpangkalan di sekolah atau komunitas."
    ]
},

"12. Satuan Karya Pramuka": {
    content: "Satuan Karya Pramuka atau Saka merupakan wadah pendidikan kepramukaan untuk meningkatkan pengetahuan dan keterampilan dalam bidang tertentu.",
    points: [
        "Saka Bahari: bidang kebaharian.",
        "Saka Bakti Husada: bidang kesehatan.",
        "Saka Bhayangkara: bidang keamanan dan ketertiban masyarakat.",
        "Saka Dirgantara: bidang kedirgantaraan.",
        "Saka Kencana: bidang keluarga berencana.",
        "Saka Taruna Bumi: bidang pertanian.",
        "Saka Wana Bakti: bidang kehutanan.",
        "Saka Wirakartika: bidang pertahanan dan bela negara."
    ]
},

"13. Golongan Pramuka": {
    content: "Anggota Gerakan Pramuka dikelompokkan berdasarkan usia dan perkembangan peserta didik.",
    points: [
        "Pramuka Siaga: usia 7–10 tahun.",
        "Pramuka Penggalang: usia 11–15 tahun.",
        "Pramuka Penegak: usia 16–20 tahun.",
        "Pramuka Pandega: usia 21–25 tahun.",
        "Setiap golongan memiliki kegiatan dan metode pembinaan yang disesuaikan dengan perkembangan anggotanya."
    ]
},

"14. Tingkatan dalam Setiap Golongan": {
    content: "Setiap golongan memiliki tingkatan kecakapan umum yang dapat dicapai melalui proses belajar dan latihan.",
    points: [
        "Siaga: Mula, Bantu, dan Tata.",
        "Penggalang: Ramu, Rakit, dan Terap.",
        "Penegak: Bantara dan Laksana.",
        "Pandega: tidak memiliki tingkatan SKU seperti golongan sebelumnya.",
        "Pencapaian tingkatan dilakukan melalui penyelesaian Syarat Kecakapan Umum (SKU) dan proses pelantikan."
    ]
}, 
"15. Syarat Kecakapan Umum (SKU)": {
    content: "SKU adalah syarat kecakapan yang wajib dipenuhi oleh anggota Pramuka untuk memperoleh Tanda Kecakapan Umum sesuai golongannya.",
    points: [
        "SKU menjadi pedoman pencapaian kemampuan dasar kepramukaan.",
        "SKU disesuaikan dengan golongan Siaga, Penggalang, Penegak, dan Pandega.",
        "Anggota mempelajari dan mempraktikkan materi yang tercantum dalam SKU.",
        "Penilaian dilakukan oleh pembina atau penguji sesuai ketentuan.",
        "Setelah memenuhi persyaratan, anggota dapat memperoleh Tanda Kecakapan Umum (TKU)."
    ]
},

"16. Syarat Kecakapan Khusus (SKK)": {
    content: "SKK merupakan syarat yang harus dipenuhi anggota Pramuka untuk mendapatkan kecakapan khusus dalam bidang tertentu.",
    points: [
        "SKK membantu anggota mengembangkan minat dan bakat.",
        "Bidangnya dapat meliputi keterampilan, kesehatan, teknologi, seni, dan lingkungan.",
        "Anggota harus mempelajari serta mempraktikkan keterampilan yang dipilih.",
        "Pencapaian SKK dinilai sesuai ketentuan yang berlaku."
    ]
},

"17. Tanda Kecakapan Khusus (TKK)": {
    content: "TKK adalah tanda yang diberikan kepada anggota Pramuka setelah memenuhi persyaratan kecakapan khusus.",
    points: [
        "TKK menjadi tanda pengakuan atas kecakapan khusus anggota.",
        "TKK memiliki berbagai bidang keterampilan.",
        "TKK dipasang pada seragam sesuai ketentuan Gerakan Pramuka.",
        "Anggota hendaknya terus mengembangkan keterampilan yang telah diperoleh."
    ]
}, 
"18. Pertemuan Pramuka": {
    content: "Pertemuan Pramuka merupakan kegiatan bersama untuk belajar, berlatih, bermain, dan mengembangkan keterampilan kepramukaan.",
    points: [
        "Pertemuan rutin dapat dilaksanakan di gugus depan.",
        "Kegiatan dapat berupa latihan keterampilan, permainan edukatif, diskusi, dan penjelajahan.",
        "Peserta harus mengikuti arahan pembina.",
        "Setiap kegiatan mengutamakan kedisiplinan, kerja sama, dan keselamatan."
    ]
},

"19. Upacara Pembukaan dan Penutupan Latihan": {
    content: "Upacara pembukaan dan penutupan latihan merupakan kegiatan untuk membangun kedisiplinan serta rasa tanggung jawab anggota Pramuka.",
    points: [
        "Upacara pembukaan dilaksanakan sebelum kegiatan latihan dimulai.",
        "Upacara penutupan dilaksanakan setelah kegiatan selesai.",
        "Peserta mengikuti susunan acara sesuai petunjuk pembina.",
        "Petugas upacara belajar bertanggung jawab dan bekerja sama.",
        "Sikap tertib dan hormat harus dijaga selama upacara."
    ]
},

"20. Upacara Hari Pramuka": {
    content: "Hari Pramuka diperingati setiap tanggal 14 Agustus untuk mengenang peresmian Gerakan Pramuka Indonesia.",
    points: [
        "Hari Pramuka diperingati setiap 14 Agustus.",
        "Peringatan dapat diisi dengan upacara dan kegiatan kepramukaan.",
        "Anggota Pramuka mengenang semangat persatuan dan pengabdian.",
        "Kegiatan peringatan dapat dilakukan di tingkat gugus depan hingga nasional."
    ]
}, 
"21. Pakaian Seragam Pramuka": {
    content: "Pakaian seragam Pramuka merupakan pakaian resmi yang digunakan anggota Gerakan Pramuka dalam kegiatan kepramukaan sesuai ketentuan yang berlaku.",
    points: [
        "Seragam Pramuka memiliki ciri khas warna cokelat muda dan cokelat tua.",
        "Seragam digunakan untuk menunjukkan identitas anggota Gerakan Pramuka.",
        "Seragam harus dikenakan dengan rapi dan sesuai aturan.",
        "Jenis seragam disesuaikan dengan golongan dan kegiatan kepramukaan.",
        "Anggota harus menjaga kebersihan dan kerapian seragam."
    ]
},

"22. Atribut Seragam Pramuka": {
    content: "Atribut seragam merupakan tanda pengenal yang menunjukkan identitas, satuan, dan pencapaian anggota Pramuka.",
    points: [
        "Tanda tutup kepala menunjukkan identitas sesuai ketentuan seragam.",
        "Tanda pandu dunia menunjukkan keanggotaan dalam gerakan kepanduan dunia.",
        "Tanda lokasi menunjukkan wilayah atau kwartir.",
        "Tanda gugus depan menunjukkan identitas satuan.",
        "Tanda pelantikan dan tanda kecakapan menunjukkan pencapaian anggota.",
        "Pemasangan setiap atribut harus mengikuti petunjuk resmi."
    ]
},

"23. Makna Warna Seragam Pramuka": {
    content: "Warna seragam Pramuka Indonesia memiliki makna filosofis yang berkaitan dengan karakter dan kepribadian anggota.",
    points: [
        "Warna cokelat muda dan cokelat tua menjadi ciri khas seragam Pramuka.",
        "Warna seragam mengingatkan anggota pada kesederhanaan dan kedekatan dengan alam.",
        "Seragam menjadi simbol persatuan dan identitas anggota Pramuka.",
        "Anggota harus mengenakan seragam dengan rasa tanggung jawab."
    ]
}, 
"24. Perlengkapan Pribadi Pramuka": {
    content: "Perlengkapan pribadi adalah barang yang dibawa setiap anggota untuk menunjang kegiatan kepramukaan.",
    points: [
        "Pakaian ganti secukupnya.",
        "Alat mandi dan perlengkapan kebersihan pribadi.",
        "Alat tulis dan buku catatan.",
        "Botol minum dan bekal makanan.",
        "Jas hujan atau perlengkapan pelindung cuaca.",
        "Obat pribadi yang telah disetujui orang tua atau pendamping.",
        "Senter dan perlengkapan penerangan."
    ]
},

"25. Perlengkapan Regu": {
    content: "Perlengkapan regu merupakan peralatan bersama yang digunakan anggota untuk mendukung kegiatan kelompok.",
    points: [
        "Tenda dan perlengkapan pendukungnya.",
        "Alas tidur dan perlengkapan istirahat.",
        "Peralatan memasak yang aman dan sesuai arahan pembina.",
        "Peralatan makan dan minum.",
        "Kotak P3K yang dikelola pendamping.",
        "Tali untuk kegiatan kepramukaan.",
        "Peralatan kebersihan lingkungan.",
        "Bendera regu dan perlengkapan identitas regu."
    ]
},

"26. Cara Merawat Perlengkapan Pramuka": {
    content: "Perlengkapan Pramuka harus dirawat agar tetap bersih, aman, dan dapat digunakan kembali.",
    points: [
        "Bersihkan perlengkapan setelah digunakan.",
        "Keringkan tenda dan alas tidur sebelum disimpan.",
        "Simpan barang sesuai tempatnya.",
        "Periksa kondisi perlengkapan sebelum kegiatan.",
        "Laporkan kepada pembina jika terdapat peralatan yang rusak.",
        "Jangan menggunakan peralatan berbahaya tanpa pendampingan."
    ]
},
"27. Keterampilan Observasi": {
    content: "Observasi adalah kemampuan mengamati keadaan sekitar dengan teliti untuk memperoleh informasi.",
    points: [
        "Mengamati kondisi lingkungan sekitar.",
        "Mengenali arah, bentuk, dan tanda di lingkungan.",
        "Memperhatikan perubahan cuaca.",
        "Mencatat informasi penting selama kegiatan.",
        "Menggunakan hasil pengamatan untuk mengambil keputusan yang tepat."
    ]
},

"28. Komunikasi dalam Regu": {
    content: "Komunikasi merupakan kemampuan menyampaikan informasi dan mendengarkan anggota lain agar kegiatan regu berjalan baik.",
    points: [
        "Berbicara dengan jelas dan sopan.",
        "Mendengarkan pendapat anggota lain.",
        "Menyampaikan informasi secara benar.",
        "Menghargai perbedaan pendapat.",
        "Melakukan koordinasi dengan pembina dan sesama anggota."
    ]
},

"29. Kerja Sama dan Kepemimpinan": {
    content: "Kerja sama dan kepemimpinan merupakan keterampilan penting untuk mencapai tujuan bersama dalam kegiatan kepramukaan.",
    points: [
        "Membagi tugas sesuai kemampuan anggota.",
        "Saling membantu dan menghargai.",
        "Bertanggung jawab terhadap tugas.",
        "Mengambil keputusan melalui musyawarah.",
        "Pemimpin harus memberikan contoh yang baik.",
        "Keberhasilan regu merupakan hasil usaha bersama."
    ]
},
"30. Pengertian P3K": {
    content: "P3K adalah pertolongan pertama yang diberikan kepada seseorang yang mengalami cedera atau gangguan kesehatan sebelum mendapatkan bantuan tenaga medis.",
    points: [
        "P3K bertujuan memberikan bantuan awal.",
        "Utamakan keselamatan penolong dan orang yang membutuhkan bantuan.",
        "Segera panggil pembina atau orang dewasa yang bertanggung jawab.",
        "Hubungi layanan darurat jika kondisi membutuhkan bantuan medis segera.",
        "Jangan memberikan obat sembarangan."
    ]
},

"31. Isi Kotak P3K": {
    content: "Kotak P3K berisi perlengkapan pertolongan pertama yang digunakan sesuai kebutuhan dan kemampuan penolong.",
    points: [
        "Kasa steril.",
        "Perban dan plester luka.",
        "Sarung tangan sekali pakai.",
        "Kain bersih.",
        "Gunting khusus P3K yang digunakan oleh pendamping.",
        "Cairan pembersih luka yang sesuai petunjuk penggunaan.",
        "Daftar nomor telepon darurat."
    ]
},

"32. Sikap Saat Terjadi Kecelakaan": {
    content: "Anggota Pramuka harus tetap tenang dan segera meminta bantuan ketika terjadi kecelakaan.",
    points: [
        "Jangan panik dan jangan membuat kerumunan.",
        "Pastikan lokasi aman sebelum mendekati korban.",
        "Panggil pembina atau orang dewasa.",
        "Jangan memindahkan korban jika dicurigai mengalami cedera serius, kecuali ada bahaya langsung.",
        "Jangan melakukan tindakan medis di luar kemampuan.",
        "Dengarkan arahan petugas medis."
    ]
},
"33. Etika Anggota Pramuka": {
    content: "Etika merupakan pedoman perilaku yang menunjukkan sikap sopan, saling menghormati, dan bertanggung jawab.",
    points: [
        "Menghormati pembina, sesama anggota, dan masyarakat.",
        "Berbicara dengan bahasa yang sopan.",
        "Tidak merendahkan atau mengejek orang lain.",
        "Menjaga nama baik Gerakan Pramuka.",
        "Menghargai perbedaan pendapat dan latar belakang."
    ]
},

"34. Disiplin dalam Kepramukaan": {
    content: "Disiplin adalah sikap menaati aturan dan melaksanakan tanggung jawab dengan sungguh-sungguh.",
    points: [
        "Datang tepat waktu.",
        "Mengikuti aturan kegiatan.",
        "Memakai seragam sesuai ketentuan.",
        "Menyelesaikan tugas yang diberikan.",
        "Menjaga kebersihan dan kerapian.",
        "Menghargai waktu dan tanggung jawab."
    ]
},

"35. Keselamatan Kegiatan Pramuka": {
    content: "Keselamatan merupakan hal utama yang harus diperhatikan sebelum, selama, dan setelah kegiatan kepramukaan.",
    points: [
        "Mengikuti arahan pembina atau pendamping.",
        "Memeriksa kondisi tempat kegiatan.",
        "Menggunakan perlengkapan sesuai fungsinya.",
        "Tidak melakukan kegiatan berisiko tanpa pengawasan.",
        "Mengetahui lokasi berkumpul jika terjadi keadaan darurat.",
        "Melaporkan kondisi berbahaya kepada pembina.",
        "Menjaga keselamatan diri sendiri dan anggota lainnya."
    ]
},
"36. Sejarah Lambang Tunas Kelapa": {
    content: "Lambang Gerakan Pramuka Indonesia adalah Tunas Kelapa. Lambang ini ditetapkan berdasarkan keputusan Kwarnas Nomor 06/KN/72 Tahun 1972 dan diciptakan oleh Soenardjo Atmodipuro.",
    points: [
        "Tunas Kelapa menjadi lambang resmi Gerakan Pramuka Indonesia.",
        "Pencipta lambang adalah Soenardjo Atmodipuro.",
        "Lambang menggambarkan harapan agar anggota Pramuka tumbuh menjadi pribadi yang berguna.",
        "Lambang digunakan sebagai identitas Gerakan Pramuka."
    ]
},

"37. Makna Lambang Tunas Kelapa": {
    content: "Tunas Kelapa memiliki makna filosofis yang menggambarkan karakter dan cita-cita anggota Gerakan Pramuka.",
    points: [
        "Buah kelapa dapat dimanfaatkan dalam berbagai kebutuhan kehidupan.",
        "Pohon kelapa dapat tumbuh di berbagai lingkungan.",
        "Pohon kelapa memiliki daya tahan dan kemampuan beradaptasi.",
        "Kelapa memiliki banyak manfaat bagi kehidupan.",
        "Anggota Pramuka diharapkan menjadi pribadi yang kuat, mandiri, dan berguna bagi masyarakat."
    ]
},

"38. Penggunaan Lambang Pramuka": {
    content: "Lambang Gerakan Pramuka digunakan sebagai identitas organisasi dalam berbagai kegiatan dan perlengkapan kepramukaan.",
    points: [
        "Digunakan pada tanda pengenal Gerakan Pramuka sesuai ketentuan.",
        "Digunakan dalam dokumen dan media resmi kepramukaan.",
        "Harus ditampilkan dengan bentuk dan penggunaan yang benar.",
        "Penggunaannya harus menghormati identitas organisasi."
    ]
},
"39. Pengertian Baris-Berbaris": {
    content: "Peraturan Baris-Berbaris (PBB) merupakan aturan tentang tata cara berbaris yang digunakan untuk membentuk sikap disiplin, tertib, dan kerja sama.",
    points: [
        "Melatih kedisiplinan anggota Pramuka.",
        "Meningkatkan kekompakan regu.",
        "Membiasakan anggota mengikuti instruksi.",
        "Melatih tanggung jawab dan konsentrasi.",
        "Dilaksanakan dengan memperhatikan keselamatan peserta."
    ]
},

"40. Sikap Dasar dalam PBB": {
    content: "Sikap dasar merupakan posisi dan gerakan awal yang dipelajari dalam latihan baris-berbaris.",
    points: [
        "Sikap sempurna.",
        "Sikap istirahat di tempat.",
        "Sikap hormat.",
        "Sikap siap menerima instruksi.",
        "Setiap gerakan dilakukan sesuai aba-aba pelatih."
    ]
},

"41. Gerakan Dasar PBB": {
    content: "Gerakan dasar PBB digunakan untuk melatih keteraturan dan koordinasi anggota dalam barisan.",
    points: [
        "Hadap kanan dan hadap kiri.",
        "Balik kanan.",
        "Lencang kanan sesuai arahan pelatih.",
        "Berhitung dalam barisan.",
        "Jalan di tempat.",
        "Berjalan dan berhenti sesuai aba-aba.",
        "Gerakan dilatih secara bertahap dan tidak dipaksakan."
    ]
},
"42. Tepuk Pramuka": {
    content: "Tepuk Pramuka merupakan kegiatan sederhana yang menggunakan pola tepukan tangan untuk membangun semangat dan kekompakan.",
    points: [
        "Tepuk dilakukan mengikuti pola dan irama.",
        "Dapat digunakan sebagai pembuka kegiatan.",
        "Melatih konsentrasi dan koordinasi.",
        "Dilakukan bersama-sama dengan tertib.",
        "Pola tepuk dapat dikembangkan secara kreatif."
    ]
},

"43. Yel-Yel Regu": {
    content: "Yel-yel merupakan seruan atau nyanyian singkat yang dibuat oleh regu untuk membangun semangat dan identitas kelompok.",
    points: [
        "Yel-yel dapat berisi nama dan identitas regu.",
        "Menggunakan kata-kata yang positif dan sopan.",
        "Dapat disertai gerakan sederhana.",
        "Melibatkan seluruh anggota regu.",
        "Tidak boleh mengandung ejekan atau merendahkan kelompok lain."
    ]
},

"44. Lagu-Lagu Pramuka": {
    content: "Lagu Pramuka merupakan bagian dari kegiatan kepramukaan yang dapat membangun semangat, persatuan, dan rasa cinta tanah air.",
    points: [
        "Lagu dapat dinyanyikan saat latihan dan perkemahan.",
        "Lagu nasional dapat digunakan untuk menumbuhkan rasa cinta tanah air.",
        "Lagu kepramukaan dapat dinyanyikan bersama anggota regu.",
        "Bernyanyi bersama melatih kekompakan dan kebersamaan.",
        "Setiap lagu harus dinyanyikan dengan sikap yang baik."
    ]
},
"45. Pengertian Peta": {
    content: "Peta adalah gambaran permukaan bumi pada bidang datar dengan skala tertentu yang digunakan untuk menunjukkan lokasi dan kondisi suatu wilayah.",
    points: [
        "Peta membantu mengenali letak suatu tempat.",
        "Peta memiliki judul dan legenda.",
        "Peta menggunakan simbol untuk menunjukkan objek tertentu.",
        "Skala menunjukkan perbandingan jarak pada peta dengan jarak sebenarnya.",
        "Peta dapat digunakan untuk kegiatan belajar dan penjelajahan."
    ]
},

"46. Mengenal Kompas": {
    content: "Kompas adalah alat navigasi yang digunakan untuk menunjukkan arah mata angin berdasarkan medan magnet bumi.",
    points: [
        "Utara disingkat U atau N.",
        "Timur disingkat T atau E.",
        "Selatan disingkat S.",
        "Barat disingkat B atau W.",
        "Arah antara mata angin utama disebut arah mata angin tambahan.",
        "Gunakan kompas sesuai petunjuk dan arahan pembina."
    ]
},

"47. Navigasi Darat": {
    content: "Navigasi darat merupakan kemampuan menentukan posisi dan memahami arah perjalanan di lingkungan daratan.",
    points: [
        "Mengenali tanda-tanda alam dan lingkungan.",
        "Memahami simbol pada peta.",
        "Mengenali arah mata angin.",
        "Menggunakan kompas dengan benar.",
        "Memperhatikan keselamatan selama penjelajahan.",
        "Selalu mengikuti rute yang telah ditentukan pembina."
    ]
},
"48. Mengenal Cuaca dan Iklim": {
    content: "Cuaca adalah keadaan udara pada suatu tempat dalam waktu tertentu, sedangkan iklim merupakan pola rata-rata cuaca dalam jangka waktu panjang.",
    points: [
        "Cuaca dapat berubah dalam waktu singkat.",
        "Unsur cuaca meliputi suhu, angin, kelembapan, dan curah hujan.",
        "Kenali tanda-tanda perubahan cuaca sebelum kegiatan luar ruangan.",
        "Perhatikan informasi prakiraan cuaca dari sumber resmi.",
        "Tunda kegiatan luar ruangan jika kondisi cuaca membahayakan."
    ]
},

"49. Menjaga Kelestarian Alam": {
    content: "Kelestarian alam perlu dijaga agar lingkungan tetap sehat dan dapat dimanfaatkan oleh generasi berikutnya.",
    points: [
        "Tidak membuang sampah sembarangan.",
        "Mengurangi penggunaan plastik sekali pakai.",
        "Menghemat air dan energi.",
        "Menjaga tumbuhan dan tidak merusak habitat hewan.",
        "Mengikuti kegiatan penghijauan.",
        "Menggunakan sumber daya alam secara bijaksana."
    ]
},

"50. Konservasi Lingkungan": {
    content: "Konservasi lingkungan adalah upaya melindungi, merawat, dan menggunakan sumber daya alam secara berkelanjutan.",
    points: [
        "Melakukan penghijauan di lingkungan sekitar.",
        "Menjaga kebersihan sungai dan sumber air.",
        "Melindungi keanekaragaman hayati.",
        "Mengurangi pencemaran lingkungan.",
        "Mengelola sampah dengan prinsip mengurangi, menggunakan kembali, dan mendaur ulang.",
        "Mengajak masyarakat berpartisipasi menjaga lingkungan."
    ]
},
"51. Pengertian Tanda Jejak": {
    content: "Tanda jejak adalah simbol atau petunjuk yang digunakan dalam kegiatan penjelajahan untuk memberikan informasi kepada peserta mengenai rute yang telah ditentukan.",
    points: [
        "Tanda jejak membantu peserta mengenali petunjuk perjalanan.",
        "Tanda dapat dibuat menggunakan bahan yang aman dan tidak merusak alam.",
        "Setiap tanda harus memiliki arti yang dipahami seluruh peserta.",
        "Peserta harus mengikuti rute yang ditentukan pembina.",
        "Jangan meninggalkan tanda yang dapat membahayakan orang lain."
    ]
},

"52. Jenis-Jenis Tanda Jejak": {
    content: "Tanda jejak memiliki berbagai bentuk dan simbol yang digunakan untuk menyampaikan informasi selama kegiatan penjelajahan.",
    points: [
        "Tanda arah untuk menunjukkan arah perjalanan.",
        "Tanda peringatan untuk memberi informasi tentang kondisi tertentu.",
        "Tanda berhenti untuk menunjukkan tempat berkumpul.",
        "Tanda informasi untuk menyampaikan pesan kepada peserta.",
        "Arti setiap tanda harus dijelaskan sebelum kegiatan dimulai."
    ]
},

"53. Penjelajahan Pramuka": {
    content: "Penjelajahan merupakan kegiatan kepramukaan di luar ruangan yang menggabungkan keterampilan, pengamatan, kerja sama, dan kepedulian terhadap lingkungan.",
    points: [
        "Dilaksanakan dengan perencanaan dan pengawasan pembina.",
        "Peserta mengikuti rute yang telah disetujui.",
        "Setiap regu menjaga kekompakan.",
        "Peserta membawa perlengkapan sesuai kebutuhan.",
        "Menjaga kebersihan dan tidak merusak lingkungan.",
        "Mengutamakan keselamatan seluruh peserta."
    ]
},
"54. Pengertian Bakti Masyarakat": {
    content: "Bakti masyarakat merupakan kegiatan yang dilakukan anggota Pramuka untuk membantu masyarakat dan memberikan manfaat bagi lingkungan sekitar.",
    points: [
        "Menumbuhkan rasa peduli terhadap sesama.",
        "Melatih tanggung jawab sosial.",
        "Membangun hubungan baik dengan masyarakat.",
        "Dilaksanakan secara sukarela dan sesuai kemampuan.",
        "Mengutamakan keselamatan dan arahan pembina."
    ]
},

"55. Bentuk Kegiatan Bakti Masyarakat": {
    content: "Bakti masyarakat dapat dilakukan melalui berbagai kegiatan sosial dan lingkungan yang bermanfaat.",
    points: [
        "Kerja bakti membersihkan lingkungan.",
        "Penghijauan dan penanaman pohon.",
        "Pengumpulan buku untuk kegiatan pendidikan.",
        "Membantu kegiatan sosial di lingkungan sekitar.",
        "Kampanye menjaga kebersihan dan kesehatan.",
        "Menggalang bantuan melalui pendamping dan lembaga yang terpercaya."
    ]
},

"56. Nilai Pengabdian Pramuka": {
    content: "Pengabdian merupakan salah satu bentuk penerapan nilai-nilai kepramukaan dalam kehidupan sehari-hari.",
    points: [
        "Ikhlas membantu sesama.",
        "Mengutamakan kepentingan bersama.",
        "Bertanggung jawab terhadap tugas.",
        "Menghargai masyarakat yang dibantu.",
        "Menjaga persatuan dan gotong royong.",
        "Melakukan kegiatan secara berkelanjutan."
    ]
},
"57. Pengertian Musyawarah": {
    content: "Musyawarah adalah kegiatan berdiskusi bersama untuk mencapai keputusan yang disepakati dengan mempertimbangkan pendapat seluruh anggota.",
    points: [
        "Setiap anggota berhak menyampaikan pendapat.",
        "Mendengarkan pendapat orang lain dengan baik.",
        "Tidak memaksakan kehendak pribadi.",
        "Mengutamakan kepentingan bersama.",
        "Menghormati keputusan yang telah disepakati."
    ]
},

"58. Demokrasi dalam Regu": {
    content: "Demokrasi dalam regu merupakan penerapan sikap saling menghargai dan memberikan kesempatan kepada setiap anggota untuk berpartisipasi.",
    points: [
        "Memberikan kesempatan yang sama kepada anggota.",
        "Memilih pemimpin regu melalui proses yang disepakati.",
        "Menghargai perbedaan pendapat.",
        "Membagi tugas secara adil.",
        "Melaksanakan keputusan bersama dengan tanggung jawab."
    ]
},

"59. Kepemimpinan Regu": {
    content: "Kepemimpinan regu adalah kemampuan mengarahkan dan mengajak anggota bekerja sama untuk mencapai tujuan bersama.",
    points: [
        "Memberikan contoh perilaku yang baik.",
        "Bersikap adil kepada seluruh anggota.",
        "Mampu berkomunikasi dengan jelas.",
        "Mendengarkan masukan dari anggota.",
        "Bertanggung jawab terhadap tugas.",
        "Membantu anggota yang mengalami kesulitan.",
        "Mengutamakan keselamatan dan kekompakan regu."
    ]
},
"60. Persaudaraan Pramuka": {
    content: "Persaudaraan Pramuka adalah hubungan persahabatan dan kebersamaan yang terjalin di antara anggota Pramuka tanpa membedakan latar belakang.",
    points: [
        "Saling menghormati dan menghargai.",
        "Membantu sesama anggota.",
        "Menjaga hubungan baik dalam regu.",
        "Tidak melakukan perundungan.",
        "Mengutamakan kebersamaan dan kepedulian."
    ]
},

"61. Persatuan dalam Kepramukaan": {
    content: "Persatuan merupakan sikap menjaga kebersamaan dan bekerja sama untuk mencapai tujuan bersama.",
    points: [
        "Mengutamakan kepentingan bersama.",
        "Menjaga kekompakan regu.",
        "Menghargai perbedaan.",
        "Menghindari perselisihan.",
        "Menjaga semangat Bhinneka Tunggal Ika."
    ]
},

"62. Toleransi Antaranggota": {
    content: "Toleransi adalah sikap menghormati perbedaan dan memberikan kesempatan kepada orang lain untuk menjalankan keyakinan serta menyampaikan pendapatnya.",
    points: [
        "Menghormati perbedaan pendapat.",
        "Tidak mengejek atau merendahkan orang lain.",
        "Bekerja sama tanpa membeda-bedakan teman.",
        "Menghormati perbedaan budaya dan kebiasaan.",
        "Menyelesaikan perbedaan melalui komunikasi yang baik."
    ]
},
"63. Kepanduan Dunia": {
    content: "Kepanduan dunia merupakan gerakan pendidikan kaum muda yang berkembang di berbagai negara dengan tujuan membentuk karakter, keterampilan, dan kepedulian sosial.",
    points: [
        "Gerakan kepanduan dipelopori oleh Robert Baden-Powell.",
        "Perkemahan percobaan Brownsea dilaksanakan pada tahun 1907.",
        "Buku Scouting for Boys diterbitkan pada tahun 1908.",
        "Kepanduan berkembang menjadi gerakan internasional.",
        "Gerakan kepanduan mendorong persaudaraan dan perdamaian dunia."
    ]
},

"64. Organisasi Kepanduan Dunia": {
    content: "World Organization of the Scout Movement (WOSM) merupakan organisasi kepanduan dunia yang menaungi organisasi kepanduan nasional anggotanya.",
    points: [
        "WOSM merupakan singkatan dari World Organization of the Scout Movement.",
        "Organisasi ini mendukung perkembangan kepanduan di berbagai negara.",
        "WOSM mendorong pendidikan karakter dan kepemimpinan kaum muda.",
        "WOSM memiliki simbol internasional berupa fleur-de-lis.",
        "Gerakan kepanduan dunia mengembangkan persaudaraan lintas negara."
    ]
},

"65. Persaudaraan Pandu Dunia": {
    content: "Persaudaraan pandu dunia merupakan semangat persahabatan, kerja sama, dan saling menghormati di antara anggota kepanduan dari berbagai negara.",
    points: [
        "Menghormati perbedaan budaya dan bahasa.",
        "Membangun persahabatan antarnegara.",
        "Menumbuhkan kepedulian terhadap sesama.",
        "Mendorong perdamaian dan kerja sama.",
        "Menjadi generasi muda yang bertanggung jawab secara global."
    ]
},
"66. Jambore Pramuka": {
    content:"Jambore merupakan pertemuan besar Pramuka Penggalang yang diisi dengan kegiatan pendidikan, keterampilan, persahabatan, dan petualangan.",
    points: [
        "Jambore diikuti oleh Pramuka Penggalang.",
        "Jambore dapat diselenggarakan pada tingkat ranting, cabang, daerah, nasional, dan internasional.",
        "Peserta mengikuti kegiatan sesuai jadwal.",
        "Kegiatan dapat berupa keterampilan, permainan, budaya, dan penjelajahan.",
        "Jambore mempererat persaudaraan antaranggota."
    ]
},

"67. Raimuna Pramuka": {
    content: "Raimuna merupakan pertemuan besar Pramuka Penegak dan Pandega untuk mengembangkan kepemimpinan, keterampilan, dan pengabdian.",
    points: [
        "Diikuti oleh golongan Penegak dan Pandega.",
        "Menjadi wadah bertukar pengalaman.",
        "Mengembangkan kemampuan kepemimpinan.",
        "Mendorong kreativitas dan kemandirian.",
        "Memperkuat persaudaraan antardaerah."
    ]
},

"68. Pesta Siaga": {
    content: "Pesta Siaga merupakan kegiatan pertemuan Pramuka Siaga yang dilaksanakan dengan suasana menyenangkan, edukatif, dan penuh persahabatan.",
    points: [
        "Diikuti oleh anggota Pramuka Siaga.",
        "Kegiatan disesuaikan dengan usia peserta.",
        "Dapat berisi permainan edukatif dan keterampilan sederhana.",
        "Mengembangkan keberanian dan rasa percaya diri.",
        "Mengajarkan kerja sama dan persahabatan."
    ]
},
"69. Fungsi dan Tujuan Satuan Karya": {
    content: "Satuan Karya Pramuka merupakan wadah pendidikan kepramukaan untuk meningkatkan pengetahuan dan keterampilan praktis dalam bidang tertentu.",
    points: [
        "Mengembangkan minat dan bakat anggota Pramuka.",
        "Memberikan pengalaman keterampilan praktis.",
        "Mempersiapkan anggota agar mampu berkontribusi kepada masyarakat.",
        "Mengembangkan kerja sama dengan instansi atau lembaga terkait.",
        "Mendorong anggota menjadi pribadi mandiri dan bertanggung jawab."
    ]
},

"70. Kegiatan Satuan Karya": {
    content: "Setiap Satuan Karya memiliki kegiatan yang disesuaikan dengan bidang keterampilan dan tujuan pembinaannya.",
    points: [
        "Saka Bahari: mengenal bidang kebaharian dan kelautan.",
        "Saka Bakti Husada: mempelajari kesehatan masyarakat.",
        "Saka Bhayangkara: mempelajari keamanan dan ketertiban masyarakat.",
        "Saka Dirgantara: mengenal bidang kedirgantaraan.",
        "Saka Kencana: mempelajari keluarga berencana dan kependudukan.",
        "Saka Taruna Bumi: mengenal pertanian.",
        "Saka Wana Bakti: mempelajari kehutanan dan lingkungan.",
        "Saka Wirakartika: mempelajari keterampilan bela negara."
    ]
},

"71. Keanggotaan Satuan Karya": {
    content: "Keanggotaan Satuan Karya diperuntukkan bagi anggota Pramuka yang memenuhi persyaratan sesuai ketentuan masing-masing Saka.",
    points: [
        "Anggota memilih Saka sesuai minat dan ketertarikan.",
        "Mengikuti persyaratan keanggotaan yang berlaku.",
        "Mengikuti pembinaan dan kegiatan secara bertanggung jawab.",
        "Mengembangkan keterampilan sesuai bidang Saka.",
        "Tetap menjalankan kewajiban sebagai anggota Gerakan Pramuka."
    ]
},
"72. Jenis-Jenis Satuan Karya Pramuka": {
  content: "Satuan Karya Pramuka (Saka) adalah wadah kegiatan bagi anggota Pramuka Penegak dan Pandega untuk mengembangkan keterampilan serta pengetahuan khusus sesuai bidang tertentu.",
  points: [
    "Saka Bahari: bidang kebaharian dan kelautan.",
    "Saka Bhayangkara: bidang keamanan dan ketertiban masyarakat.",
    "Saka Bakti Husada: bidang kesehatan.",
    "Saka Dirgantara: bidang kedirgantaraan.",
    "Saka Tarunabumi: bidang pertanian.",
    "Saka Wanabakti: bidang kehutanan.",
    "Saka lainnya memiliki bidang keterampilan khusus sesuai ketentuan Gerakan Pramuka."
  ]
},

"73. Contoh Kegiatan Satuan Karya": {
  content: "Setiap Satuan Karya memiliki kegiatan yang disesuaikan dengan bidang keterampilannya. Kegiatan dilakukan melalui latihan, praktik, pembinaan, dan pengabdian masyarakat.",
  points: [
    "Saka Bahari: mengenal lingkungan laut dan pelestarian pesisir.",
    "Saka Bhayangkara: belajar tentang keselamatan dan ketertiban masyarakat.",
    "Saka Bakti Husada: belajar perilaku hidup bersih dan sehat.",
    "Saka Dirgantara: mengenal ilmu kedirgantaraan.",
    "Saka Tarunabumi: belajar pertanian dan ketahanan pangan.",
    "Saka Wanabakti: mengenal pelestarian hutan dan lingkungan."
  ]
},

"74. Manfaat Mengikuti Satuan Karya": {
  content: "Mengikuti Satuan Karya membantu anggota Pramuka mengembangkan kemampuan khusus, memperluas pengalaman, dan menerapkan nilai-nilai kepramukaan dalam kehidupan sehari-hari.",
  points: [
    "Menambah pengetahuan dan keterampilan.",
    "Melatih kemandirian dan tanggung jawab.",
    "Mengembangkan kerja sama dan kepemimpinan.",
    "Mengenal bidang pekerjaan dan pengabdian masyarakat.",
    "Meningkatkan kepedulian terhadap lingkungan dan sesama."
  ]
},
"75. Peran Pembina Pramuka": {
  content: "Pembina Pramuka adalah orang dewasa yang bertugas membimbing, mendampingi, dan membantu peserta didik dalam kegiatan kepramukaan.",
  points: [
    "Memberikan bimbingan sesuai usia dan perkembangan peserta didik.",
    "Merencanakan kegiatan latihan yang mendidik dan menarik.",
    "Menanamkan nilai Tri Satya dan Dasa Darma.",
    "Menjaga keselamatan peserta didik selama kegiatan.",
    "Memberikan teladan dalam sikap dan perilaku."
  ]
},

"76. Dewan Ambalan": {
  content: "Dewan Ambalan merupakan wadah kepemimpinan bagi Pramuka Penegak di tingkat gugus depan. Anggotanya membantu merencanakan, mengatur, dan melaksanakan kegiatan ambalan bersama pembina.",
  points: [
    "Membantu menyusun rencana kegiatan ambalan.",
    "Mengembangkan tanggung jawab dan kepemimpinan.",
    "Mendorong musyawarah dalam mengambil keputusan.",
    "Membantu menjaga kekompakan anggota ambalan.",
    "Melaksanakan tugas sesuai kesepakatan dan aturan."
  ]
},

"77. Dewan Racana": {
  content: "Dewan Racana merupakan wadah kepemimpinan bagi Pramuka Pandega di tingkat gugus depan. Wadah ini membantu anggota mengelola kegiatan dan mengembangkan kemandirian.",
  points: [
    "Merencanakan kegiatan Racana.",
    "Mengembangkan kemampuan organisasi.",
    "Melaksanakan musyawarah dan mengambil keputusan bersama.",
    "Mendorong pengabdian kepada masyarakat.",
    "Menumbuhkan kemandirian dan tanggung jawab."
  ]
},
"78. Administrasi Gugus Depan": {
  content: "Administrasi Gugus Depan adalah kegiatan pencatatan dan pengelolaan dokumen untuk mendukung penyelenggaraan organisasi dan kegiatan kepramukaan.",
  points: [
    "Mencatat data anggota.",
    "Menyimpan program kerja dan jadwal latihan.",
    "Membuat catatan kegiatan.",
    "Mengelola surat masuk dan surat keluar.",
    "Menyimpan dokumentasi kegiatan dengan rapi."
  ]
},

"79. Buku dan Catatan Kegiatan Pramuka": {
  content: "Buku dan catatan kegiatan digunakan untuk merekam proses latihan, perkembangan anggota, serta hasil kegiatan Pramuka.",
  points: [
    "Buku daftar hadir untuk mencatat kehadiran.",
    "Buku kegiatan untuk mencatat pelaksanaan latihan.",
    "Buku inventaris untuk mencatat perlengkapan.",
    "Catatan keuangan untuk mencatat pemasukan dan pengeluaran.",
    "Dokumentasi foto sebagai arsip kegiatan."
  ]
},

"80. Perencanaan Kegiatan Pramuka": {
  content: "Perencanaan kegiatan Pramuka adalah proses menyusun tujuan, jadwal, pembagian tugas, kebutuhan perlengkapan, dan langkah keselamatan sebelum kegiatan dilaksanakan.",
  points: [
    "Menentukan tujuan kegiatan.",
    "Menentukan waktu dan tempat.",
    "Menyusun susunan acara.",
    "Membagi tugas anggota dan pendamping.",
    "Memeriksa perlengkapan dan kebutuhan keselamatan.",
    "Melakukan evaluasi setelah kegiatan."
  ]
},
"81. Evaluasi Kegiatan Pramuka": {
  content: "Evaluasi kegiatan Pramuka adalah proses menilai pelaksanaan kegiatan untuk mengetahui hal yang sudah berjalan baik dan hal yang perlu diperbaiki.",
  points: [
    "Memeriksa apakah tujuan kegiatan tercapai.",
    "Mendengarkan pendapat peserta dan pembina.",
    "Mencatat keberhasilan dan kendala.",
    "Menentukan perbaikan untuk kegiatan berikutnya.",
    "Menghargai kontribusi seluruh anggota."
  ]
},

"82. Refleksi Diri Anggota Pramuka": {
  content: "Refleksi diri adalah kegiatan melihat kembali pengalaman, sikap, dan pembelajaran yang diperoleh selama mengikuti kegiatan Pramuka.",
  points: [
    "Mengenali kemampuan yang sudah berkembang.",
    "Menyadari hal yang masih perlu dipelajari.",
    "Belajar bertanggung jawab atas tugas.",
    "Menghargai pendapat dan bantuan orang lain.",
    "Menyusun tujuan pengembangan diri."
  ]
},

"83. Pengembangan Keterampilan Pramuka": {
  content: "Pengembangan keterampilan Pramuka dilakukan melalui latihan, pengalaman, dan kegiatan yang sesuai dengan kemampuan serta usia anggota.",
  points: [
    "Melatih keterampilan kepramukaan secara bertahap.",
    "Mengembangkan kreativitas dan pemecahan masalah.",
    "Meningkatkan kemampuan berkomunikasi.",
    "Melatih kerja sama dan kepemimpinan.",
    "Menerapkan pengetahuan dalam kegiatan sehari-hari."
  ]
},
"84. Komunikasi Efektif dalam Pramuka": {
  content: "Komunikasi efektif adalah proses menyampaikan dan menerima informasi dengan jelas, sopan, dan saling menghargai. Kemampuan ini membantu anggota bekerja sama dalam kegiatan regu.",
  points: [
    "Menyampaikan pesan dengan bahasa yang jelas.",
    "Mendengarkan ketika orang lain berbicara.",
    "Menghargai pendapat anggota lain.",
    "Bertanya apabila informasi belum dipahami.",
    "Menghindari perkataan yang merendahkan orang lain."
  ]
},

"85. Teknologi Informasi dalam Kepramukaan": {
  content: "Teknologi informasi dapat membantu kegiatan kepramukaan, misalnya untuk membuat dokumentasi, menyusun jadwal, mencari bahan belajar, dan berkomunikasi secara bertanggung jawab.",
  points: [
    "Menggunakan perangkat digital untuk belajar.",
    "Membuat dokumentasi kegiatan dengan izin.",
    "Memeriksa kebenaran informasi.",
    "Menjaga privasi dan data pribadi anggota.",
    "Menggunakan internet secara bijak dan aman."
  ]
},

"86. Dokumentasi Kegiatan Pramuka": {
  content: "Dokumentasi kegiatan Pramuka adalah proses merekam dan menyimpan informasi tentang kegiatan sebagai bahan laporan, arsip, dan evaluasi.",
  points: [
    "Mencatat nama dan tujuan kegiatan.",
    "Mencatat waktu dan tempat pelaksanaan.",
    "Mengumpulkan foto atau video dengan izin.",
    "Menyusun laporan kegiatan secara teratur.",
    "Menyimpan dokumen agar mudah ditemukan kembali."
  ]
},
"87. Kemandirian Anggota Pramuka": {
  content: "Kemandirian adalah kemampuan seseorang untuk melakukan tugas dan mengambil keputusan secara bertanggung jawab sesuai kemampuan serta situasi.",
  points: [
    "Mempersiapkan perlengkapan pribadi.",
    "Menyelesaikan tugas yang menjadi tanggung jawabnya.",
    "Berani mencoba hal baru dengan pendampingan yang sesuai.",
    "Meminta bantuan ketika menghadapi kesulitan.",
    "Mempertimbangkan akibat sebelum mengambil keputusan."
  ]
},

"88. Kepedulian Sosial Anggota Pramuka": {
  content: "Kepedulian sosial merupakan sikap memperhatikan kebutuhan orang lain dan lingkungan serta bersedia membantu melalui tindakan yang bermanfaat.",
  points: [
    "Menghormati dan membantu sesama.",
    "Berpartisipasi dalam kegiatan sosial.",
    "Menjaga kebersihan lingkungan bersama.",
    "Menghargai perbedaan.",
    "Melakukan kegiatan bantuan sesuai kemampuan dan arahan pendamping."
  ]
},

"89. Pengabdian Pramuka kepada Masyarakat": {
  content: "Pengabdian kepada masyarakat adalah penerapan nilai kepramukaan melalui kegiatan positif yang memberikan manfaat bagi lingkungan dan masyarakat.",
  points: [
    "Mengikuti kegiatan kerja bakti.",
    "Membantu kegiatan sosial di lingkungan sekitar.",
    "Berpartisipasi dalam kegiatan pelestarian alam.",
    "Menyebarkan informasi yang bermanfaat.",
    "Melaksanakan kegiatan dengan izin dan koordinasi pihak terkait."
  ]
},
"90. Pengertian Kesiapsiagaan Bencana": {
  content: "Kesiapsiagaan bencana adalah upaya mempersiapkan diri agar dapat merespons keadaan darurat dengan lebih tenang, aman, dan terarah.",
  points: [
    "Mengenali potensi bahaya di lingkungan sekitar.",
    "Mengetahui jalur evakuasi dan titik kumpul.",
    "Memahami informasi peringatan dari pihak berwenang.",
    "Mengetahui cara menghubungi petugas darurat.",
    "Mengikuti latihan kesiapsiagaan bersama pembina."
  ]
},

"91. Mitigasi Bencana di Lingkungan Pramuka": {
  content: "Mitigasi bencana merupakan upaya mengurangi risiko dan dampak bencana melalui pengetahuan, perencanaan, serta tindakan pencegahan.",
  points: [
    "Menjaga lingkungan agar tidak menjadi sumber bahaya.",
    "Memeriksa keamanan lokasi sebelum kegiatan.",
    "Menyimpan perlengkapan darurat di tempat yang diketahui.",
    "Mempelajari prosedur keselamatan sesuai jenis kegiatan.",
    "Mengikuti arahan pembina dan petugas berwenang."
  ]
},

"92. Evakuasi dan Keselamatan Bersama": {
  content: "Evakuasi adalah proses berpindah dari lokasi berbahaya menuju tempat yang lebih aman. Dalam kegiatan Pramuka, keselamatan seluruh peserta harus menjadi prioritas.",
  points: [
    "Tetap tenang dan dengarkan instruksi.",
    "Ikuti jalur evakuasi yang telah ditentukan.",
    "Jangan berpisah dari kelompok tanpa arahan.",
    "Bantu teman sesuai kemampuan tanpa membahayakan diri.",
    "Laporkan anggota yang membutuhkan bantuan kepada pembina atau petugas."
  ]
},
"1. Tri Satya dan Dasa Darma": {
    content: "Tri Satya dan Dasa Darma merupakan kode kehormatan Pramuka yang menjadi pedoman sikap, perilaku, dan tanggung jawab anggota Pramuka.",
    points: [
      "Tri Satya merupakan janji dan komitmen anggota Pramuka.",
      "Dasa Darma terdiri dari sepuluh ketentuan moral Pramuka.",
      "Mengamalkan nilai keimanan dan ketakwaan.",
      "Menjaga persatuan, kedisiplinan, dan tanggung jawab.",
      "Menerapkan kode kehormatan dalam kehidupan sehari-hari."
    ]
  },

  "2. Sejarah dan Perkembangan Pramuka": {
    content: "Gerakan Pramuka merupakan organisasi pendidikan nonformal yang berkembang dari gerakan kepanduan dunia dan Indonesia.",
    points: [
      "Mempelajari sejarah kepanduan dunia.",
      "Mengenal perkembangan kepanduan di Indonesia.",
      "Memahami lahirnya Gerakan Pramuka Indonesia.",
      "Mengenal tokoh-tokoh penting dalam sejarah Pramuka.",
      "Menghargai perjuangan para tokoh kepanduan."
    ]
  },

  "3. Kepemimpinan dan Organisasi": {
    content: "Kepemimpinan dan organisasi merupakan kemampuan mengarahkan, mengelola, serta bekerja sama dalam suatu kelompok.",
    points: [
      "Mengenal berbagai gaya kepemimpinan.",
      "Memahami struktur organisasi Pramuka.",
      "Mempelajari pembagian tugas dan tanggung jawab.",
      "Mengembangkan kemampuan mengambil keputusan.",
      "Melatih komunikasi dan kerja sama tim."
    ]
  },

  "4. Manajemen Kegiatan": {
    content: "Manajemen kegiatan adalah proses merencanakan, mengorganisasi, melaksanakan, dan mengevaluasi kegiatan kepramukaan.",
    points: [
      "Menentukan tujuan dan tema kegiatan.",
      "Menyusun jadwal dan susunan acara.",
      "Membagi tugas kepada anggota.",
      "Mengelola perlengkapan dan kebutuhan kegiatan.",
      "Melakukan evaluasi setelah kegiatan selesai."
    ]
  },

  "5. Navigasi dan Penjelajahan": {
    content: "Navigasi dan penjelajahan merupakan keterampilan menentukan arah, membaca peta, serta memahami kondisi lingkungan selama perjalanan.",
    points: [
      "Mengenal jenis dan simbol peta.",
      "Memahami penggunaan kompas.",
      "Mengenal arah mata angin.",
      "Mempelajari teknik membaca koordinat.",
      "Merencanakan perjalanan dengan memperhatikan keselamatan."
    ]
  },

  "6. Sandi dan Komunikasi": {
    content: "Sandi dan komunikasi merupakan keterampilan menyampaikan serta menerima pesan melalui berbagai metode komunikasi kepramukaan.",
    points: [
      "Mempelajari sandi Morse.",
      "Mempelajari semaphore.",
      "Mengenal sandi kotak dan sandi lainnya.",
      "Melatih ketepatan dalam mengirim pesan.",
      "Mengembangkan komunikasi dan koordinasi kelompok."
    ]
  },

  "7. Tali-Temali dan Pioneering": {
    content: "Tali-temali dan pioneering merupakan keterampilan menggunakan tali, simpul, ikatan, dan tongkat untuk membuat konstruksi sederhana.",
    points: [
      "Mengenal berbagai jenis simpul.",
      "Mempelajari berbagai jenis ikatan.",
      "Memahami fungsi dan kegunaan setiap simpul.",
      "Membuat konstruksi sederhana menggunakan tongkat.",
      "Memperhatikan kekuatan dan keselamatan konstruksi."
    ]
  },

  "8. Kesiapsiagaan dan P3K": {
    content: "Kesiapsiagaan dan P3K merupakan pengetahuan untuk menghadapi keadaan darurat serta memberikan pertolongan pertama secara tepat.",
    points: [
      "Mengenali potensi bahaya di lingkungan sekitar.",
      "Memahami langkah kesiapsiagaan bencana.",
      "Mengenal perlengkapan pertolongan pertama.",
      "Memahami tindakan awal saat terjadi kecelakaan.",
      "Menghubungi petugas yang berwenang ketika diperlukan."
    ]
  },

  "9. Pengabdian Masyarakat": {
    content: "Pengabdian masyarakat merupakan bentuk kepedulian anggota Pramuka melalui kegiatan sosial dan tindakan nyata yang bermanfaat bagi lingkungan.",
    points: [
      "Melaksanakan kegiatan bakti sosial.",
      "Berpartisipasi dalam pelestarian lingkungan.",
      "Membantu masyarakat sesuai kemampuan.",
      "Mengembangkan sikap gotong royong.",
      "Menumbuhkan kepedulian terhadap permasalahan sosial."
    ]
  },

  "10. Kewirausahaan dan Kreativitas": {
    content: "Kewirausahaan dan kreativitas merupakan kemampuan menciptakan ide, mengembangkan inovasi, serta mengelola kegiatan usaha secara bertanggung jawab.",
    points: [
      "Mengembangkan ide usaha kreatif.",
      "Mengenal peluang usaha di lingkungan sekitar.",
      "Mempelajari perencanaan modal dan biaya.",
      "Mengembangkan produk yang memiliki nilai guna.",
      "Melatih kerja sama, inovasi, dan tanggung jawab."
    ]
  },
};
// DETAIL TAMBAHAN MATERI SD, SMP, DAN SMA
Object.assign(topicDetails, {

  // ================= SD =================

  "6. Barung dan Perindukan": {
    content: "Dalam Pramuka Siaga, peserta didik dibagi menjadi kelompok kecil yang disebut barung. Beberapa barung kemudian bergabung menjadi satuan yang lebih besar bernama perindukan. Sistem ini mengajarkan kebersamaan, tanggung jawab, dan kerja sama sejak dini.",
    points: [
      "Barung merupakan kelompok kecil dalam Pramuka Siaga.",
      "Setiap barung memiliki nama yang biasanya menggunakan warna.",
      "Pemimpin barung disebut Sulung.",
      "Beberapa barung bergabung membentuk perindukan.",
      "Perindukan dipimpin oleh Pembina Siaga.",
      "Setiap anggota belajar saling membantu dan bekerja sama.",
      "Kegiatan barung melatih keberanian, kedisiplinan, dan tanggung jawab."
    ]
  },

  "7. Kegiatan Pramuka Siaga": {
    content: "Kegiatan Pramuka Siaga merupakan kegiatan pendidikan yang disesuaikan dengan usia anak-anak. Kegiatan dilaksanakan melalui permainan, cerita, nyanyian, keterampilan sederhana, dan pengenalan lingkungan agar peserta didik belajar dengan menyenangkan.",
    points: [
      "Permainan edukatif untuk melatih kecerdasan dan kerja sama.",
      "Menyanyi bersama untuk membangun semangat.",
      "Mengenal alam dan lingkungan sekitar.",
      "Melakukan keterampilan sederhana.",
      "Melaksanakan kegiatan kebersihan.",
      "Belajar kedisiplinan dan tanggung jawab.",
      "Mengembangkan keberanian dan rasa percaya diri."
    ]
  },

  "8. Sikap Seorang Pramuka": {
    content: "Seorang Pramuka harus memiliki sikap dan perilaku yang baik dalam kehidupan sehari-hari. Sikap tersebut mencerminkan nilai-nilai Dwi Satya dan Dwi Darma bagi Siaga serta Tri Satya dan Dasa Darma bagi golongan lainnya.",
    points: [
      "Jujur dalam perkataan dan perbuatan.",
      "Disiplin dalam menjalankan kegiatan.",
      "Rajin belajar dan berlatih.",
      "Bertanggung jawab terhadap tugas.",
      "Suka menolong sesama.",
      "Menghormati orang tua, pembina, dan teman.",
      "Menjaga kebersihan lingkungan.",
      "Bersikap sopan dan tidak merugikan orang lain."
    ]
  },

  // ================= SMP =================

  "3. Sandi Pramuka": {
    content: "Sandi Pramuka merupakan cara menyampaikan pesan menggunakan simbol, huruf, angka, atau tanda tertentu. Sandi digunakan dalam kegiatan kepramukaan untuk melatih ketelitian, konsentrasi, kemampuan berpikir, dan kerja sama.",
    points: [
      "Sandi Morse menggunakan kombinasi titik dan garis.",
      "Sandi Kotak menggunakan simbol berbentuk kotak.",
      "Sandi Rumput menggunakan bentuk simbol menyerupai rumput.",
      "Sandi Angka menggunakan angka sebagai pengganti huruf.",
      "Sandi dapat digunakan dalam permainan dan kegiatan kepramukaan.",
      "Setiap sandi memiliki aturan membaca yang berbeda.",
      "Anggota Pramuka perlu berlatih agar mampu memahami pesan dengan tepat."
    ]
  },

  "4. Semaphore": {
    content: "Semaphore adalah salah satu cara berkomunikasi dalam kepramukaan dengan menggunakan dua bendera kecil yang digerakkan melalui posisi tertentu. Setiap posisi bendera mewakili huruf atau angka sehingga dapat digunakan untuk menyampaikan pesan.",
    points: [
      "Semaphore menggunakan dua buah bendera.",
      "Setiap posisi tangan dan bendera memiliki arti tertentu.",
      "Semaphore digunakan untuk menyampaikan huruf dan pesan.",
      "Pengirim dan penerima harus memahami kode semaphore.",
      "Penyampaian pesan membutuhkan konsentrasi dan ketelitian.",
      "Latihan semaphore membantu meningkatkan komunikasi dan koordinasi.",
      "Kegiatan dilakukan dengan memperhatikan arahan pembina."
    ]
  },

  "5. Tali-Temali": {
    content: "Tali-temali merupakan keterampilan kepramukaan yang mempelajari berbagai jenis simpul dan ikatan serta kegunaannya. Keterampilan ini bermanfaat dalam kegiatan sehari-hari, perkemahan, dan kegiatan kelompok.",
    points: [
      "Simpul mati digunakan untuk menyambung dua tali yang sama besar.",
      "Simpul hidup digunakan untuk ikatan yang mudah dilepaskan.",
      "Simpul pangkal digunakan sebagai awal suatu ikatan.",
      "Simpul jangkar digunakan untuk mengikat tali pada benda tertentu.",
      "Ikatan palang digunakan untuk menghubungkan dua tongkat yang bersilangan tegak lurus.",
      "Ikatan silang digunakan untuk menghubungkan dua tongkat yang bersilangan.",
      "Setiap simpul dan ikatan harus dipelajari sesuai kegunaannya.",
      "Keselamatan harus diutamakan saat melakukan praktik tali-temali."
    ]
  },

  "6. Peta dan Kompas": {
    content: "Peta dan kompas merupakan alat bantu navigasi yang digunakan untuk memahami arah dan mengenali suatu wilayah. Peta memberikan gambaran permukaan bumi, sedangkan kompas membantu menunjukkan arah mata angin berdasarkan medan magnet bumi.",
    points: [
      "Peta merupakan gambaran permukaan bumi pada bidang datar.",
      "Peta memiliki judul, skala, simbol, dan legenda.",
      "Skala menunjukkan perbandingan jarak pada peta dengan jarak sebenarnya.",
      "Kompas digunakan untuk menunjukkan arah mata angin.",
      "Arah mata angin utama terdiri dari utara, timur, selatan, dan barat.",
      "Navigasi darat menggabungkan pemahaman peta dan arah perjalanan.",
      "Penggunaan peta dan kompas harus mengikuti rute yang ditentukan pembina.",
      "Keselamatan menjadi prioritas selama kegiatan penjelajahan."
    ]
  },

  "7. Tanda Jejak": {
    content: "Tanda jejak adalah simbol atau petunjuk yang digunakan dalam kegiatan penjelajahan Pramuka untuk memberikan informasi mengenai arah perjalanan, tempat berkumpul, dan kondisi tertentu. Tanda jejak membantu peserta mengikuti rute yang telah ditentukan.",
    points: [
      "Tanda arah menunjukkan petunjuk perjalanan.",
      "Tanda peringatan memberikan informasi mengenai kondisi tertentu.",
      "Tanda berhenti menunjukkan tempat untuk berkumpul atau berhenti.",
      "Tanda informasi menyampaikan pesan kepada peserta.",
      "Setiap tanda harus dipahami oleh seluruh anggota.",
      "Tanda jejak harus dibuat menggunakan bahan yang aman.",
      "Tidak boleh merusak tumbuhan atau lingkungan saat membuat tanda.",
      "Peserta harus mengikuti rute yang telah ditentukan pembina."
    ]
  },

  "8. Perkemahan": {
    content: "Perkemahan merupakan salah satu kegiatan kepramukaan yang dilakukan di luar ruangan untuk melatih kemandirian, kedisiplinan, tanggung jawab, dan kerja sama. Dalam kegiatan perkemahan, anggota Pramuka belajar mempersiapkan perlengkapan, menjaga kebersihan, serta memperhatikan keselamatan.",
    points: [
      "Mempersiapkan perlengkapan pribadi dan perlengkapan regu.",
      "Mengenal fungsi tenda dan perlengkapan tidur.",
      "Memilih lokasi perkemahan yang aman sesuai arahan pembina.",
      "Menjaga kebersihan lingkungan perkemahan.",
      "Membagi tugas antaranggota regu.",
      "Mengatur perlengkapan makanan dan minuman.",
      "Memeriksa kondisi perlengkapan sebelum dan sesudah digunakan.",
      "Mengikuti seluruh arahan pembina selama kegiatan.",
      "Mengutamakan keselamatan seluruh peserta."
    ]
  },

  "9. P3K Dasar": {
    content: "Pertolongan Pertama Pada Kecelakaan (P3K) merupakan bantuan awal yang diberikan kepada seseorang yang mengalami cedera atau gangguan kesehatan sebelum memperoleh pertolongan tenaga medis. Anggota Pramuka perlu memahami keselamatan diri, penggunaan perlengkapan P3K, dan pentingnya meminta bantuan orang dewasa.",
    points: [
      "P3K bertujuan memberikan bantuan awal kepada orang yang membutuhkan.",
      "Mengutamakan keselamatan penolong dan orang yang membutuhkan bantuan.",
      "Mengenal perlengkapan kotak P3K seperti kasa steril, perban, dan plester.",
      "Menjaga kebersihan perlengkapan pertolongan pertama.",
      "Memanggil pembina atau orang dewasa ketika terjadi kecelakaan.",
      "Menghubungi tenaga medis apabila diperlukan.",
      "Tidak memberikan obat sembarangan.",
      "Tidak melakukan tindakan medis di luar kemampuan.",
      "Mengikuti arahan petugas kesehatan."
    ]
  },

  "10. Kepemimpinan Regu": {
    content: "Kepemimpinan regu adalah kemampuan seorang pemimpin untuk mengarahkan, membimbing, dan mengajak seluruh anggota bekerja sama dalam mencapai tujuan bersama. Dalam Pramuka Penggalang, kepemimpinan melatih tanggung jawab, keberanian, komunikasi, dan kemampuan mengambil keputusan.",
    points: [
      "Pemimpin regu bertanggung jawab terhadap tugas dan kegiatan regu.",
      "Memberikan contoh sikap disiplin dan tanggung jawab.",
      "Membagi tugas sesuai kemampuan anggota.",
      "Menghargai pendapat seluruh anggota.",
      "Mengutamakan musyawarah dalam mengambil keputusan.",
      "Membantu anggota yang mengalami kesulitan.",
      "Menjaga kekompakan dan persaudaraan.",
      "Mengutamakan keselamatan seluruh anggota regu."
    ]
  },

  // ================= SMA =================

  "2. Sejarah dan Perkembangan Pramuka": {
    content: "Sejarah dan perkembangan Pramuka berkaitan dengan lahirnya gerakan kepanduan dunia yang dipelopori Robert Baden-Powell serta perkembangan gerakan kepanduan di Indonesia hingga terbentuknya Gerakan Pramuka. Gerakan ini menjadi wadah pendidikan karakter bagi generasi muda.",
    points: [
      "Robert Baden-Powell dikenal sebagai Bapak Pandu Dunia.",
      "Pada tahun 1907 dilaksanakan perkemahan percobaan di Pulau Brownsea, Inggris.",
      "Pada tahun 1908 diterbitkan buku Scouting for Boys.",
      "Gerakan kepanduan kemudian berkembang ke berbagai negara.",
      "Kepanduan di Indonesia berkembang sejak masa sebelum kemerdekaan.",
      "Presiden Soekarno mencanangkan Gerakan Pramuka pada 9 Maret 1961.",
      "Gerakan Pramuka diperkenalkan secara resmi pada 14 Agustus 1961.",
      "Tanggal 14 Agustus diperingati sebagai Hari Pramuka.",
      "Gerakan Pramuka bertujuan membentuk generasi muda yang mandiri, disiplin, dan bertanggung jawab.",
      "Pramuka masa kini berperan dalam pendidikan karakter, kepemimpinan, dan pengabdian masyarakat."
    ]
  },
  "2. Sejarah Gerakan Pramuka": {
  content: "Gerakan Pramuka Indonesia merupakan organisasi pendidikan nonformal yang bertujuan membentuk karakter generasi muda. Gerakan ini berkembang dari berbagai organisasi kepanduan yang ada di Indonesia sebelum kemerdekaan hingga disatukan menjadi Gerakan Pramuka.",
  points: [
    "Kepanduan dunia dipelopori oleh Robert Baden-Powell.",
    "Pada tahun 1907 dilaksanakan perkemahan percobaan di Pulau Brownsea, Inggris.",
    "Pada tahun 1908 diterbitkan buku Scouting for Boys.",
    "Gerakan kepanduan mulai berkembang di Indonesia pada masa penjajahan Belanda.",
    "Setelah Indonesia merdeka, berbagai organisasi kepanduan berkembang di tanah air.",
    "Pada 9 Maret 1961, Presiden Soekarno mencanangkan pembentukan Gerakan Pramuka.",
    "Pada 14 Agustus 1961, Gerakan Pramuka diperkenalkan secara resmi.",
    "Tanggal 14 Agustus diperingati sebagai Hari Pramuka.",
    "Gerakan Pramuka menjadi wadah pendidikan karakter, kedisiplinan, dan kepemimpinan."
  ]
},

});
// DATA MATERI SD, SMP, SMA
const learningData = {
  SD: {
  title: "Pramuka Siaga — Tingkat SD",
  description: "Belajar kepramukaan melalui kegiatan menyenangkan, kreativitas, kedisiplinan, dan kerja sama.",

  topics: [
    ["1. Mengenal Pramuka",
      "Pramuka adalah singkatan dari Praja Muda Karana, yang berarti jiwa muda yang suka berkarya. Pramuka mengajarkan kemandirian, tanggung jawab, dan kepedulian."],

    ["2. Sejarah Singkat Pramuka",
      "Gerakan Pramuka Indonesia resmi diperkenalkan pada 14 Agustus 1961. Tanggal tersebut diperingati sebagai Hari Pramuka."],

    ["3. Lambang Tunas Kelapa",
      "Lambang Gerakan Pramuka adalah tunas kelapa. Lambang ini menggambarkan anggota Pramuka yang dapat tumbuh, kuat, dan bermanfaat bagi masyarakat."],

    ["4. Salam Pramuka",
      "Salam Pramuka merupakan bentuk penghormatan dan persaudaraan antaranggota Pramuka."],

    ["5. Dwi Satya dan Dwi Darma",
      "Dwi Satya merupakan janji Pramuka Siaga, sedangkan Dwi Darma merupakan ketentuan moral yang menjadi pedoman perilakunya."],

    ["6. Barung dan Perindukan",
      "Pramuka Siaga berkelompok dalam satuan kecil bernama barung. Kumpulan beberapa barung disebut perindukan."],

    ["7. Kegiatan Pramuka Siaga",
      "Contoh kegiatan meliputi permainan edukatif, menyanyi, mengenal alam, keterampilan sederhana, dan kegiatan kebersihan."],

    ["8. Sikap Seorang Pramuka",
      "Seorang Pramuka belajar bersikap jujur, disiplin, rajin, bertanggung jawab, suka menolong, dan menghormati orang lain."]
  ]
},

  SMP: {
  title: "Pramuka Penggalang — Tingkat SMP",
  description: "Mengembangkan keterampilan, kedisiplinan, kepemimpinan, dan kerja sama regu.",

  topics: [
    ["1. Tri Satya dan Dasa Darma",
      "Mempelajari janji dan ketentuan moral Pramuka Penggalang sebagai pedoman dalam kehidupan sehari-hari."],

    ["2. Sejarah Gerakan Pramuka",
      "Mengenal perkembangan kepanduan dunia dan sejarah terbentuknya Gerakan Pramuka Indonesia."],

    ["3. Sandi Pramuka",
      "Mengenal berbagai bentuk komunikasi rahasia dalam kegiatan kepramukaan, seperti sandi Morse dan sandi kotak."],

    ["4. Semaphore",
      "Mengenal cara menyampaikan pesan menggunakan dua bendera dengan posisi tertentu."],

    ["5. Tali-Temali",
      "Mempelajari jenis simpul dan ikatan serta kegunaannya dalam kegiatan sehari-hari dan kepramukaan."],

    ["6. Peta dan Kompas",
      "Mengenal arah mata angin, simbol peta, dan penggunaan kompas untuk memahami lingkungan."],

    ["7. Tanda Jejak",
      "Mengenal simbol-simbol sederhana yang digunakan untuk memberikan petunjuk dalam kegiatan penjelajahan."],

    ["8. Perkemahan",
      "Mengenal perlengkapan berkemah, pemilihan lokasi yang aman, kebersihan, dan kerja sama regu."],

    ["9. P3K Dasar",
      "Mengenal pertolongan pertama sederhana, menjaga keselamatan, dan meminta bantuan orang dewasa atau petugas kesehatan."],

    ["10. Kepemimpinan Regu",
      "Belajar membagi tugas, bermusyawarah, mengambil keputusan, dan bertanggung jawab dalam kelompok."]
  ]
},

  SMA: {
  title: "Pramuka Penegak — Tingkat SMA",
  description: "Mengembangkan kepemimpinan, kemandirian, keterampilan, dan pengabdian kepada masyarakat.",

  topics: [
    ["1. Tri Satya dan Dasa Darma",
      "Memahami dan menerapkan kode kehormatan Pramuka dalam kehidupan pribadi, organisasi, dan masyarakat."],

    ["2. Sejarah dan Perkembangan Pramuka",
      "Mempelajari sejarah kepanduan dunia, perkembangan Gerakan Pramuka Indonesia, dan peran Pramuka masa kini."],

    ["3. Kepemimpinan dan Organisasi",
      "Mengenal gaya kepemimpinan, struktur organisasi, pembagian tugas, serta tanggung jawab seorang pemimpin."],

    ["4. Manajemen Kegiatan",
      "Belajar merencanakan kegiatan, menyusun jadwal, membagi tugas, melaksanakan, dan mengevaluasi kegiatan."],

    ["5. Navigasi dan Penjelajahan",
      "Memahami peta, kompas, arah mata angin, serta perencanaan penjelajahan yang aman."],

    ["6. Sandi dan Komunikasi",
      "Mengembangkan kemampuan komunikasi menggunakan Morse, semaphore, dan berbagai sandi kepramukaan."],

    ["7. Tali-Temali dan Pioneering",
      "Mengenal simpul, ikatan, serta prinsip keselamatan dalam kegiatan pioneering."],

    ["8. Kesiapsiagaan dan P3K",
      "Mempelajari kesiapsiagaan menghadapi keadaan darurat, pertolongan pertama dasar, dan cara meminta bantuan."],

    ["9. Pengabdian Masyarakat",
      "Mengenal kegiatan bakti sosial, pelestarian lingkungan, dan kontribusi Pramuka bagi masyarakat."],

    ["10. Kewirausahaan dan Kreativitas",
      "Mengembangkan ide kreatif, kerja sama, dan kemampuan membuat proyek sederhana yang bermanfaat."]
  ]
}
};

// KLIK KARTU UNTUK MEMBUKA DETAIL
const topicDetail = document.getElementById("topic-detail");
const detailTitle = document.getElementById("detail-title");
const detailContent = document.getElementById("detail-content");
const detailPoints = document.getElementById("detail-points");
const backTopic = document.getElementById("back-topic");

document.addEventListener("click", function (event) {
  const card = event.target.closest(".topic-item");

  if (!card) return;

  const heading = card.querySelector("h3");
  if (!heading) return;

  const title = heading.textContent.trim();

// Cari detail berdasarkan judul yang sama
const matchingTopic = Object.values(learningData)
  .flatMap(level => level.topics)
  .find(([topicTitle]) => topicTitle.trim() === title);

// Jika detail lengkap belum tersedia,
// gunakan deskripsi dari learningData
const detail = topicDetails[title] || (
  matchingTopic
    ? {
        content: matchingTopic[1],
        points: []
      }
    : null
);
  if (!detail) {
    alert("Penjelasan lengkap untuk materi ini akan segera ditambahkan!");
    return;
  }

  detailTitle.textContent = title;
  detailContent.textContent = detail.content;
  detailPoints.replaceChildren();
// Mencatat materi yang sudah dibuka
let learnedMaterials = JSON.parse(
  localStorage.getItem("learnedMaterials")
) || [];

if (!learnedMaterials.includes(title)) {
  learnedMaterials.push(title);

  localStorage.setItem(
    "learnedMaterials",
    JSON.stringify(learnedMaterials)
  );
renderLearningHistory();

  // Tambahkan 1 materi yang dipelajari
  pramukaStats.material = learnedMaterials.length;

  // Berikan 10 poin untuk materi baru
  pramukaStats.points += 10;

  updatePramukaStats();

  alert("Hebat! Kamu mendapatkan 10 poin Pramuka!");
}
  detail.points.forEach(function (point) {
    const item = document.createElement("li");
    item.textContent = point;
    detailPoints.appendChild(item);
  });

  topicList.hidden = true;
  topicDetail.hidden = false;

  topicDetail.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// TOMBOL KEMBALI KE DAFTAR MATERI
if (backTopic) {
  backTopic.addEventListener("click", function () {
    topicDetail.hidden = true;
    topicList.hidden = false;

    topicList.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
/* STEP 38 - SCROLL REVEAL */

const revealElements = document.querySelectorAll(
  ".dashboard-section, .learning-section, .honor-section, .adventure-section, .section-heading, .material-card, .level-card"
);

revealElements.forEach(function (element) {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});
/* STEP 39 - MENUTUP LOADING SCREEN */

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");

  if (loadingScreen) {
    loadingScreen.classList.add("loading-hidden");
  }
});
/* MENGHAPUS LATAR HITAM MASKOT */
window.addEventListener("load", function () {
  const mascot = document.querySelector(".mascot-image");

  if (!mascot) return;

  const processMascot = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = mascot.naturalWidth;
    canvas.height = mascot.naturalHeight;

    ctx.drawImage(mascot, 0, 0);

    const imageData = ctx.getImageData(
      0, 0, canvas.width, canvas.height
    );

    const pixels = imageData.data;

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      const brightness = Math.max(r, g, b);

      if (brightness < 25) {
        pixels[i + 3] = 0;
      } else if (brightness < 55) {
        pixels[i + 3] *= (brightness - 25) / 30;
      }
    }

    ctx.putImageData(imageData, 0, 0);

    mascot.src = canvas.toDataURL("image/png");
  };

  if (mascot.complete && mascot.naturalWidth > 0) {
    processMascot();
  } else {
    mascot.addEventListener("load", processMascot, { once: true });
  }
});
/* STEP 42 - MENYIMPAN JENJANG PROFIL */

const profileLevelValue = document.getElementById(
  "profile-level-value"
);

const savedLevel = localStorage.getItem("pramukaLevel");

if (profileLevelValue && savedLevel) {
  profileLevelValue.textContent = savedLevel;
}

document.querySelectorAll(".level-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedLevel = button.dataset.level;

    const levelNames = {
      SD: "Siaga (SD)",
      SMP: "Penggalang (SMP)",
      SMA: "Penegak (SMA)"
    };

    const levelName = levelNames[selectedLevel];

    if (!levelName) return;

    localStorage.setItem("pramukaLevel", levelName);

    if (profileLevelValue) {
      profileLevelValue.textContent = levelName;
    }
  });
});
/* STEP 43 - MENYIMPAN NAMA PROFIL */

const nameInput = document.getElementById("name-input");
const saveNameButton = document.getElementById("save-name");
const profileName = document.getElementById("profile-name");

const savedName = localStorage.getItem("pramukaName");

if (savedName && profileName) {
  profileName.textContent = savedName;
}

if (saveNameButton) {
  saveNameButton.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (!name) {
      alert("Silakan masukkan nama terlebih dahulu!");
      return;
    }

    localStorage.setItem("pramukaName", name);
    profileName.textContent = name;
    nameInput.value = "";

    alert("Nama profil berhasil disimpan!");
  });
}
const profilePhoto = document.getElementById("profile-photo");
const avatarImage = document.getElementById("profile-avatar-image");
const avatarIcon = document.getElementById("profile-avatar-icon");

if (profilePhoto) {
  profilePhoto.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Silakan pilih file gambar!");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
      const image = new Image();

      image.onload = function () {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = 300;
        canvas.height = 300;

        context.drawImage(image, 0, 0, 300, 300);

        const compressedPhoto = canvas.toDataURL("image/jpeg", 0.75);

        try {
          localStorage.setItem("pramukaPhoto", compressedPhoto);
          avatarImage.src = compressedPhoto;
          avatarImage.hidden = false;
          avatarIcon.hidden = true;
          alert("Foto profil berhasil dipasang!");
        } catch (error) {
          alert("Foto terlalu besar untuk disimpan. Coba gambar lain.");
        }
      };

      image.src = event.target.result;
    };

    reader.readAsDataURL(file);
  });
}

const savedPhoto = localStorage.getItem("pramukaPhoto");

if (savedPhoto && avatarImage && avatarIcon) {
  avatarImage.src = savedPhoto;
  avatarImage.hidden = false;
  avatarIcon.hidden = true;
}
const removePhotoButton = document.getElementById("remove-photo");

if (removePhotoButton) {
  removePhotoButton.addEventListener("click", function () {
    localStorage.removeItem("pramukaPhoto");

    if (avatarImage && avatarIcon) {
      avatarImage.src = "";
      avatarImage.hidden = true;
      avatarIcon.hidden = false;
    }

    if (profilePhoto) {
      profilePhoto.value = "";
    }

    alert("Foto profil berhasil dihapus!");
  });
}
// STATISTIK PROFIL PRAMUKA-GO JATIM

const materialStat = document.getElementById("stat-material");
const missionStat = document.getElementById("stat-mission");
const pointsStat = document.getElementById("stat-points");

let pramukaStats = JSON.parse(
  localStorage.getItem("pramukaStats")
) || {
  material: 0,
  mission: 0,
  points: 0
};

function updatePramukaStats() {
  if (materialStat) {
    materialStat.textContent = pramukaStats.material;
  }

  if (missionStat) {
    missionStat.textContent = pramukaStats.mission;
  }

  if (pointsStat) {
    pointsStat.textContent = pramukaStats.points;
  }

  localStorage.setItem(
    "pramukaStats",
    JSON.stringify(pramukaStats)
  );
  if (typeof updateMemberLevel === "function") {
  updateMemberLevel();
  if (typeof updateBadges === "function") {
  updateBadges();
}
if (typeof updateAchievements === "function") {
  updateAchievements();
}
}
}

// SISTEM LEVEL ANGGOTA

const memberLevel = document.getElementById("member-level");
const levelNextInfo = document.getElementById("level-next-info");

function updateMemberLevel() {
  const points = pramukaStats.points;

  let level = "Penjelajah Pemula";
  let currentTarget = 0;
  let nextTarget = 50;

  if (points >= 200) {
    level = "Penjelajah Elite";
    currentTarget = 200;
    nextTarget = 200;
  } else if (points >= 100) {
    level = "Penjelajah Hebat";
    currentTarget = 100;
    nextTarget = 200;
  } else if (points >= 50) {
    level = "Penjelajah Muda";
    currentTarget = 50;
    nextTarget = 100;
  }

  if (memberLevel) {
    memberLevel.textContent = level;
  }

  const remaining = Math.max(0, nextTarget - points);

  if (levelNextInfo) {
    levelNextInfo.textContent =
      points >= 200
        ? "Level tertinggi berhasil dicapai!"
        : `Kumpulkan ${remaining} poin lagi untuk naik level!`;
  }

  const progressPercent = points >= 200
    ? 100
    : ((points - currentTarget) / (nextTarget - currentTarget)) * 100;

  const progressFill = document.getElementById("level-progress-fill");
  const progressText = document.getElementById("level-progress-percent");

  if (progressFill) {
    progressFill.style.width = `${progressPercent}%`;
  }

  if (progressText) {
    progressText.textContent = `${Math.round(progressPercent)}%`;
  }
}


// Perbarui level saat halaman dibuka
updateMemberLevel();
// SISTEM BADGE PENGHARGAAN

function updateBadges() {
  const points = pramukaStats.points;

  const badgeRules = [
    { id: "badge-beginner", required: 0 },
    { id: "badge-explorer", required: 50 },
    { id: "badge-expert", required: 100 },
    { id: "badge-elite", required: 200 }
  ];

  badgeRules.forEach(function (badge) {
    const element = document.getElementById(badge.id);

    if (!element) return;

    if (points >= badge.required) {
      element.classList.remove("locked");
    } else {
      element.classList.add("locked");
    }
  });
}

updateBadges();
// RIWAYAT AKTIVITAS BELAJAR

function renderLearningHistory() {
  const historyList = document.getElementById(
    "learning-history-list"
  );

  if (!historyList) return;

  const learnedMaterials = JSON.parse(
    localStorage.getItem("learnedMaterials")
  ) || [];

  historyList.replaceChildren();

  if (learnedMaterials.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.textContent =
      "Belum ada materi yang dipelajari.";

    historyList.appendChild(emptyMessage);
    return;
  }

  learnedMaterials.forEach(function (material, index) {
    const item = document.createElement("li");

    item.textContent = `${index + 1}. ${material}`;

    historyList.appendChild(item);
  });
}

renderLearningHistory();
// SISTEM PENCAPAIAN DAN NOTIFIKASI

function updateAchievements() {
  const learnedMaterials = JSON.parse(
    localStorage.getItem("learnedMaterials")
  ) || [];

  const total = learnedMaterials.length;

  const achievements = [
    {
      id: "achievement-first",
      target: 1,
      name: "Langkah Pertama"
    },
    {
      id: "achievement-five",
      target: 5,
      name: "Rajin Belajar"
    },
    {
      id: "achievement-ten",
      target: 10,
      name: "Pramuka Aktif"
    }
  ];

  const notification = document.getElementById(
    "achievement-notification"
  );

  let earned = JSON.parse(
    localStorage.getItem("earnedAchievements")
  );

  // Catat pencapaian yang sudah terbuka sebelumnya
  if (!Array.isArray(earned)) {
    earned = achievements
      .filter(item => total >= item.target)
      .map(item => item.id);

    localStorage.setItem(
      "earnedAchievements",
      JSON.stringify(earned)
    );
  }

  const newAchievements = [];

  achievements.forEach(function (achievement) {
    const element = document.getElementById(achievement.id);

    if (total >= achievement.target) {
      if (element) {
        element.classList.remove("locked");
      }

      if (!earned.includes(achievement.id)) {
        earned.push(achievement.id);
        newAchievements.push(achievement.name);
      }
    } else {
      if (element) {
        element.classList.add("locked");
      }
    }
  });

  localStorage.setItem(
    "earnedAchievements",
    JSON.stringify(earned)
  );

  if (notification && newAchievements.length > 0) {
    notification.textContent =
      "🎉 Pencapaian baru terbuka: " +
      newAchievements.join(", ") + "!";

    notification.hidden = false;
  }
}

updateAchievements();
// TOMBOL DETAIL PENCAPAIAN

const achievementDetailButton = document.getElementById(
  "achievement-detail-button"
);

const achievementDetailContent = document.getElementById(
  "achievement-detail-content"
);

if (achievementDetailButton && achievementDetailContent) {
  achievementDetailButton.addEventListener("click", function () {
    const isHidden = achievementDetailContent.hidden;

    achievementDetailContent.hidden = !isHidden;

    achievementDetailButton.textContent = isHidden
      ? "Tutup Detail Pencapaian"
      : "Lihat Detail Pencapaian";
  });
}
// MENUTUP LOADING SCREEN
function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");

  if (loadingScreen) {
    loadingScreen.classList.add("loading-hidden");
  }
}

if (document.readyState === "complete") {
  hideLoadingScreen();
} else {
  window.addEventListener("load", hideLoadingScreen);
}
// STEP 92 - SISTEM MATERI PERKEMAHAN

const campingTopics = [
  {
    title: "1. Pengenalan Perkemahan",
    content: `
      <p>Perkemahan merupakan kegiatan pendidikan di alam terbuka
      untuk mengembangkan kemandirian, kedisiplinan, kerja sama,
      dan tanggung jawab anggota Pramuka.</p>

      <h3>Tujuan Perkemahan</h3>
      <ul>
        <li>Melatih kemandirian dan kedisiplinan.</li>
        <li>Meningkatkan kerja sama regu.</li>
        <li>Mengenal dan mencintai alam.</li>
        <li>Mengembangkan keterampilan kepramukaan.</li>
        <li>Melatih kepemimpinan dan tanggung jawab.</li>
      </ul>

      <h3>Jenis Perkemahan</h3>
      <ul>
        <li>Perkemahan satu hari.</li>
        <li>Perkemahan menginap.</li>
        <li>Perkemahan besar atau jambore.</li>
        <li>Perkemahan bakti.</li>
      </ul>
    `
  },
  {
  title: "2. Perlengkapan Perkemahan",
  content: `
    <h3>Pengertian Perlengkapan Perkemahan</h3>
    <p>
      Perlengkapan perkemahan adalah berbagai barang
      yang dibutuhkan untuk mendukung kegiatan Pramuka
      selama berada di lokasi perkemahan.
    </p>

    <h3>A. Perlengkapan Pribadi</h3>
    <ul>
      <li>Pakaian Pramuka dan pakaian ganti.</li>
      <li>Alat mandi dan perlengkapan kebersihan pribadi.</li>
      <li>Perlengkapan tidur yang sesuai dengan cuaca.</li>
      <li>Botol minum dan perlengkapan makan.</li>
      <li>Obat pribadi yang telah disetujui orang tua atau pembina.</li>
      <li>Senter dan perlengkapan hujan.</li>
      <li>Kantong untuk menyimpan sampah pribadi.</li>
    </ul>

    <h3>B. Perlengkapan Regu</h3>
    <ul>
      <li>Tenda dan perlengkapan pendukungnya.</li>
      <li>Tikar atau alas kegiatan.</li>
      <li>Peralatan memasak yang aman dan diawasi pembina.</li>
      <li>Perlengkapan kebersihan regu.</li>
      <li>Perlengkapan pertolongan pertama yang dikelola pembina.</li>
      <li>Alat komunikasi untuk keadaan darurat.</li>
    </ul>

    <h3>C. Cara Mengatur Perlengkapan</h3>
    <ol>
      <li>Buat daftar barang sebelum berangkat.</li>
      <li>Pilih barang sesuai lama dan lokasi kegiatan.</li>
      <li>Masukkan barang ke dalam tas secara teratur.</li>
      <li>Pisahkan pakaian bersih dan pakaian kotor.</li>
      <li>Beri nama pada barang pribadi.</li>
      <li>Periksa kembali perlengkapan bersama pembina.</li>
    </ol>

    <h3>D. Prinsip Keselamatan</h3>
    <ul>
      <li>Jangan membawa barang berbahaya atau tidak diperlukan.</li>
      <li>Gunakan perlengkapan sesuai petunjuk.</li>
      <li>Mintalah bantuan pembina untuk peralatan khusus.</li>
      <li>Jaga barang agar tidak mengganggu jalur berjalan.</li>
      <li>Pastikan air minum dan makanan disimpan dengan bersih.</li>
    </ul>

    <h3>Kesimpulan</h3>
    <p>
      Perlengkapan yang tepat membantu kegiatan perkemahan
      berlangsung lebih tertib, nyaman, dan aman.
      Persiapkan semuanya bersama regu dan pembina.
    </p>
  `
},
  {
  title: "3. Mendirikan Tenda",
  content: `
    <h3>Pengertian Mendirikan Tenda</h3>
    <p>
      Mendirikan tenda adalah kegiatan menyiapkan tempat
      berlindung sementara selama perkemahan. Kegiatan ini
      membutuhkan kerja sama, ketelitian, dan pengawasan pembina.
    </p>

    <h3>A. Bagian-Bagian Tenda</h3>
    <ul>
      <li>Atap atau badan tenda.</li>
      <li>Rangka atau tiang tenda.</li>
      <li>Tali pengikat.</li>
      <li>Patok tenda.</li>
      <li>Alas atau lembar dasar tenda.</li>
      <li>Penutup atau lapisan pelindung hujan jika tersedia.</li>
    </ul>

    <h3>B. Persiapan Lokasi</h3>
    <ul>
      <li>Pilih lokasi yang diizinkan oleh pengelola perkemahan.</li>
      <li>Pastikan lokasi tidak berada di jalur kendaraan.</li>
      <li>Hindari area rawan banjir dan genangan air.</li>
      <li>Jauhi pohon rapuh dan cabang yang berpotensi jatuh.</li>
      <li>Pastikan tersedia jalur keluar yang aman.</li>
      <li>Periksa lokasi bersama pembina sebelum digunakan.</li>
    </ul>

    <h3>C. Tahapan Mendirikan Tenda</h3>
    <ol>
      <li>Siapkan perlengkapan tenda dan periksa kelengkapannya.</li>
      <li>Dengarkan arahan pembina mengenai lokasi dan pembagian tugas.</li>
      <li>Bentangkan alas tenda pada lokasi yang telah disetujui.</li>
      <li>Kenali rangka dan bagian tenda berdasarkan petunjuk produsennya.</li>
      <li>Pasang bagian-bagian tenda bersama anggota regu sesuai petunjuk.</li>
      <li>Mintalah pembina memeriksa kestabilan dan keamanan tenda.</li>
      <li>Rapikan perlengkapan setelah pemasangan selesai.</li>
    </ol>

    <h3>D. Pembagian Tugas Regu</h3>
    <ul>
      <li>Ketua regu mengatur pembagian tugas.</li>
      <li>Anggota memeriksa kelengkapan tenda.</li>
      <li>Anggota lain membantu menyiapkan alas dan perlengkapan.</li>
      <li>Semua anggota bekerja sesuai arahan pembina.</li>
    </ul>

    <h3>E. Keselamatan Saat Mendirikan Tenda</h3>
    <ul>
      <li>Jangan bermain atau berlari di area pemasangan.</li>
      <li>Gunakan peralatan sesuai petunjuk dan pengawasan.</li>
      <li>Jangan memanjat pohon atau struktur di sekitar tenda.</li>
      <li>Jangan mendirikan tenda ketika cuaca berbahaya.</li>
      <li>Segera laporkan kepada pembina jika lokasi tidak aman.</li>
    </ul>

    <h3>Kesimpulan</h3>
    <p>
      Mendirikan tenda bukan hanya tentang membangun tempat
      berlindung, tetapi juga melatih kerja sama, tanggung jawab,
      kedisiplinan, dan kepedulian terhadap keselamatan.
    </p>
  `
},
  {
  title: "4. Kegiatan Perkemahan",
  content: `
    <h3>Pengertian Kegiatan Perkemahan</h3>
    <p>
      Kegiatan perkemahan merupakan rangkaian aktivitas
      pendidikan di alam terbuka untuk mengembangkan
      kemandirian, kedisiplinan, kepemimpinan, dan kerja sama.
    </p>

    <h3>A. Kegiatan Pagi</h3>
    <ul>
      <li>Bangun sesuai jadwal yang ditentukan.</li>
      <li>Melaksanakan ibadah sesuai keyakinan masing-masing.</li>
      <li>Menjaga kebersihan diri dan lingkungan.</li>
      <li>Mengikuti olahraga atau kegiatan pagi bersama.</li>
      <li>Merapikan perlengkapan pribadi dan tenda.</li>
    </ul>

    <h3>B. Kegiatan Siang</h3>
    <ul>
      <li>Mengikuti materi kepramukaan.</li>
      <li>Melaksanakan permainan edukatif.</li>
      <li>Berlatih keterampilan kepramukaan.</li>
      <li>Melakukan kegiatan penjelajahan sesuai arahan pembina.</li>
      <li>Beristirahat dan menjaga kebutuhan air minum.</li>
    </ul>

    <h3>C. Kegiatan Sore dan Malam</h3>
    <ul>
      <li>Melaksanakan kegiatan kebersihan lingkungan.</li>
      <li>Mengikuti evaluasi kegiatan bersama regu.</li>
      <li>Mengikuti acara kebersamaan yang diawasi pembina.</li>
      <li>Beristirahat sesuai jadwal.</li>
    </ul>

    <h3>D. Kerja Sama Regu</h3>
    <ol>
      <li>Membagi tugas secara adil.</li>
      <li>Menghargai pendapat setiap anggota.</li>
      <li>Saling membantu ketika ada kesulitan.</li>
      <li>Menjaga komunikasi dengan ketua regu dan pembina.</li>
      <li>Bertanggung jawab terhadap tugas masing-masing.</li>
    </ol>

    <h3>E. Menjaga Kebersihan Lingkungan</h3>
    <ul>
      <li>Membuang sampah pada tempat yang disediakan.</li>
      <li>Memisahkan sampah sesuai jenisnya.</li>
      <li>Menghemat penggunaan air.</li>
      <li>Tidak merusak tumbuhan dan fasilitas lokasi.</li>
      <li>Menjaga kebersihan area tenda.</li>
    </ul>

    <h3>F. Keselamatan Kegiatan</h3>
    <ul>
      <li>Ikuti jadwal dan arahan pembina.</li>
      <li>Jangan meninggalkan area perkemahan tanpa izin.</li>
      <li>Hindari kegiatan di lokasi yang tidak diizinkan.</li>
      <li>Laporkan kondisi tidak aman kepada pembina.</li>
      <li>Jangan melakukan kegiatan berisiko tanpa pengawasan.</li>
    </ul>

    <h3>Kesimpulan</h3>
    <p>
      Kegiatan perkemahan mengajarkan Pramuka untuk hidup
      disiplin, mandiri, peduli lingkungan, dan bekerja sama
      dalam kehidupan sehari-hari.
    </p>
  `
},
  {
  title: "5. Penutupan Perkemahan",
  content: `
    <h3>Pengertian Penutupan Perkemahan</h3>
    <p>
      Penutupan perkemahan merupakan kegiatan akhir untuk
      mengakhiri seluruh rangkaian kegiatan secara tertib,
      mengevaluasi pengalaman, dan memastikan lokasi kembali bersih.
    </p>

    <h3>A. Persiapan Penutupan</h3>
    <ul>
      <li>Periksa kembali seluruh perlengkapan pribadi.</li>
      <li>Pastikan semua anggota regu hadir.</li>
      <li>Rapikan area tenda dan perlengkapan regu.</li>
      <li>Ikuti arahan ketua regu dan pembina.</li>
    </ul>

    <h3>B. Upacara Penutupan</h3>
    <ul>
      <li>Peserta berkumpul sesuai arahan panitia.</li>
      <li>Ikuti susunan upacara yang telah ditentukan.</li>
      <li>Dengarkan amanat pembina.</li>
      <li>Ikuti doa dan penutupan kegiatan.</li>
    </ul>

    <h3>C. Evaluasi Kegiatan</h3>
    <ol>
      <li>Diskusikan pengalaman selama perkemahan.</li>
      <li>Catat keterampilan yang sudah dipelajari.</li>
      <li>Kenali hal-hal yang perlu diperbaiki.</li>
      <li>Berikan apresiasi kepada anggota regu.</li>
    </ol>

    <h3>D. Pembongkaran Tenda</h3>
    <ul>
      <li>Lakukan pembongkaran setelah mendapat izin pembina.</li>
      <li>Ikuti petunjuk penggunaan perlengkapan tenda.</li>
      <li>Pastikan semua bagian tenda terkumpul.</li>
      <li>Bersihkan dan keringkan perlengkapan sesuai kondisi.</li>
      <li>Simpan perlengkapan dengan rapi.</li>
    </ul>

    <h3>E. Kebersihan Lokasi</h3>
    <ul>
      <li>Pungut sampah di sekitar area perkemahan.</li>
      <li>Pisahkan sampah sesuai jenisnya.</li>
      <li>Pastikan tidak ada barang pribadi yang tertinggal.</li>
      <li>Jangan merusak tanaman atau fasilitas lokasi.</li>
      <li>Periksa kembali lokasi bersama pembina.</li>
    </ul>

    <h3>F. Nilai yang Dipelajari</h3>
    <ul>
      <li>Tanggung jawab.</li>
      <li>Kedisiplinan.</li>
      <li>Kerja sama.</li>
      <li>Kepedulian terhadap lingkungan.</li>
      <li>Rasa syukur dan kebersamaan.</li>
    </ul>

    <h3>Kesimpulan</h3>
    <p>
      Penutupan perkemahan mengajarkan bahwa setiap kegiatan
      harus diakhiri dengan tertib, penuh tanggung jawab,
      dan meninggalkan lingkungan dalam keadaan bersih.
    </p>
  `
},
  {
  title: "6. Keselamatan Perkemahan",
  content: `
    <h3>Pengertian Keselamatan Perkemahan</h3>
    <p>
      Keselamatan perkemahan adalah upaya menjaga seluruh
      peserta agar kegiatan berlangsung tertib, nyaman,
      dan terhindar dari bahaya.
    </p>

    <h3>A. Keselamatan Pribadi</h3>
    <ul>
      <li>Ikuti arahan pembina dan panitia.</li>
      <li>Jangan pergi sendirian tanpa izin.</li>
      <li>Gunakan pakaian dan alas kaki yang sesuai.</li>
      <li>Minum air yang cukup dan beristirahat.</li>
      <li>Jaga kebersihan makanan dan perlengkapan.</li>
    </ul>

    <h3>B. Keselamatan Lokasi</h3>
    <ul>
      <li>Kenali batas area perkemahan.</li>
      <li>Jauhi tebing, sungai berarus deras, dan area terlarang.</li>
      <li>Hindari pohon rapuh atau cabang yang berpotensi jatuh.</li>
      <li>Perhatikan perubahan cuaca.</li>
      <li>Ketahui lokasi berkumpul saat keadaan darurat.</li>
    </ul>

    <h3>C. Menghadapi Cuaca Buruk</h3>
    <ul>
      <li>Segera laporkan perubahan cuaca kepada pembina.</li>
      <li>Hentikan kegiatan luar ruang jika kondisi tidak aman.</li>
      <li>Ikuti arahan menuju tempat perlindungan yang ditentukan.</li>
      <li>Jangan berteduh di bawah pohon saat terjadi petir.</li>
      <li>Tunggu izin pembina sebelum melanjutkan kegiatan.</li>
    </ul>

    <h3>D. Kebersihan dan Kesehatan</h3>
    <ul>
      <li>Cuci tangan sebelum makan.</li>
      <li>Gunakan air bersih.</li>
      <li>Simpan makanan dengan tertutup.</li>
      <li>Jaga kebersihan toilet dan tempat mencuci.</li>
      <li>Segera beri tahu pembina jika merasa tidak sehat.</li>
    </ul>

    <h3>E. Keadaan Darurat</h3>
    <ol>
      <li>Tetap tenang dan jangan bertindak terburu-buru.</li>
      <li>Segera beri tahu pembina atau petugas.</li>
      <li>Ikuti jalur evakuasi yang telah ditentukan.</li>
      <li>Berkumpul di titik aman.</li>
      <li>Pastikan seluruh anggota regu terdata oleh pembina.</li>
    </ol>

    <h3>F. Peran Pembina</h3>
    <ul>
      <li>Memeriksa keamanan lokasi kegiatan.</li>
      <li>Memberikan arahan keselamatan.</li>
      <li>Mengawasi kegiatan peserta.</li>
      <li>Mengatur penanganan keadaan darurat.</li>
    </ul>

    <h3>Kesimpulan</h3>
    <p>
      Keselamatan merupakan tanggung jawab bersama.
      Setiap anggota Pramuka harus disiplin, saling menjaga,
      dan selalu mengikuti arahan pembina.
    </p>
  `
}
];

document.querySelectorAll(".camping-topic-button").forEach(
  function (button, index) {
    button.addEventListener("click", function () {
      const topic = campingTopics[index];

      if (!topic) return;

      document.getElementById("camping-detail-title").textContent =
        topic.title;
        updateCampingCompleteButton();
      document.getElementById("camping-detail").style.display = "block";  
const campingDetail = document.getElementById("camping-detail");

campingDetail.classList.remove("show-detail");

void campingDetail.offsetWidth;

campingDetail.classList.add("show-detail");
      document.getElementById("camping-detail-content").innerHTML =
        topic.content;

      document.getElementById("camping-detail").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
);
// STEP 93 - TOMBOL KEMBALI MATERI PERKEMAHAN

document.getElementById("camping-back-button")?.addEventListener(
  "click",
  function () {
    document.getElementById("camping-detail").style.display = "none";

    document.querySelector(".camping-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
);
// STEP 99 - PENYIMPANAN STATUS MATERI

const campingCompleteButton = document.getElementById(
  "camping-complete-button"
);

const campingCompleteMessage = document.getElementById(
  "camping-complete-message"
);

const campingCompleted = JSON.parse(
  localStorage.getItem("campingCompleted") || "[]"
);

function updateCampingCompleteButton() {
  if (!campingCompleteButton) return;

  const title = document.getElementById(
    "camping-detail-title"
  )?.textContent;

  const isCompleted = campingCompleted.includes(title);

  campingCompleteButton.classList.toggle(
    "completed",
    isCompleted
  );

  campingCompleteButton.textContent = isCompleted
    ? "✓ Materi Sudah Selesai"
    : "✓ Tandai Materi Selesai";

  campingCompleteMessage.textContent = isCompleted
    ? "Materi ini sudah selesai kamu pelajari."
    : "";
}

campingCompleteButton?.addEventListener("click", function () {
  const title = document.getElementById(
    "camping-detail-title"
  )?.textContent;

  if (!title || campingCompleted.includes(title)) return;

  campingCompleted.push(title);

  localStorage.setItem(
    "campingCompleted",
    JSON.stringify(campingCompleted)
  );

  updateCampingCompleteButton();
  updateCampingProgress();
  updateCampingProgress();
  updateCampingCompletedList();
});

updateCampingCompleteButton();
// STEP 100 - UPDATE PROGRES PERKEMAHAN

function updateCampingProgress() {
  const total = 6;
  const completed = campingCompleted.length;
  const percentage = Math.round((completed / total) * 100);

  const progressText = document.getElementById(
    "camping-progress-text"
  );

  const progressFill = document.getElementById(
    "camping-progress-fill"
  );

  const progressCount = document.getElementById(
    "camping-progress-count"
  );

  if (progressText) {
    progressText.textContent = percentage + "%";
  }

  if (progressFill) {
    progressFill.style.width = percentage + "%";
  }

  if (progressCount) {
    progressCount.textContent =
      completed + " dari " + total + " materi selesai";
  }
}

updateCampingProgress();
// STEP 101 - SISTEM POIN PERKEMAHAN

function updateCampingPoints() {
  const points = campingCompleted.length * 10;

  const pointsElement = document.getElementById(
    "camping-points-total"
  );

  if (pointsElement) {
    pointsElement.textContent = points;
  }
}

updateCampingPoints();
// STEP 102 - TAMPILKAN DAFTAR MATERI SELESAI

function updateCampingCompletedList() {
  const list = document.getElementById(
    "camping-completed-items"
  );

  if (!list) return;

  list.innerHTML = "";

  if (campingCompleted.length === 0) {
    list.innerHTML =
      "<li>Belum ada materi yang diselesaikan.</li>";
    return;
  }

  campingCompleted.forEach(function (title) {
    const item = document.createElement("li");
    item.textContent = "✓ " + title;
    list.appendChild(item);
  });
}

updateCampingCompletedList();
// STEP 108 - SISTEM KUIS PERKEMAHAN

const campingQuizQuestions = [
  {
    question: "Apa tujuan utama kegiatan perkemahan?",
    options: [
      "Hanya untuk bermain",
      "Melatih kemandirian dan kerja sama",
      "Menghindari kegiatan belajar",
      "Berkumpul tanpa aturan"
    ],
    answer: 1
  },
  {
    question: "Siapa yang harus memberikan arahan keselamatan?",
    options: [
      "Pembina atau petugas yang bertanggung jawab",
      "Pengunjung",
      "Orang yang tidak dikenal",
      "Tidak perlu ada arahan"
    ],
    answer: 0
  },
  {
    question: "Apa yang harus dilakukan sebelum mendirikan tenda?",
    options: [
      "Langsung memasang tenda",
      "Bermain di lokasi",
      "Memeriksa lokasi bersama pembina",
      "Meninggalkan regu"
    ],
    answer: 2
  },
  {
    question: "Bagaimana cara menjaga kebersihan perkemahan?",
    options: [
      "Membuang sampah sembarangan",
      "Meninggalkan sampah",
      "Membakar semua sampah",
      "Membuang dan memilah sampah dengan benar"
    ],
    answer: 3
  },
  {
    question: "Apa yang dilakukan jika cuaca menjadi berbahaya?",
    options: [
      "Tetap bermain di luar",
      "Mengikuti arahan pembina menuju tempat aman",
      "Pergi sendirian",
      "Mengabaikan keadaan"
    ],
    answer: 1
  }
];

let campingQuizIndex = 0;
let campingQuizScore = 0;
let campingQuizStarted = false;

const campingQuestion = document.getElementById(
  "camping-question"
);

const campingOptions = document.getElementById(
  "camping-options"
);

const campingFeedback = document.getElementById(
  "camping-quiz-feedback"
);

const campingNextButton = document.getElementById(
  "camping-next-question"
);

const campingScoreElement = document.getElementById(
  "camping-quiz-score"
);

function showCampingQuestion() {
  const question = campingQuizQuestions[campingQuizIndex];

  campingQuestion.textContent = question.question;
  campingOptions.innerHTML = "";
  campingFeedback.textContent = "";

  question.options.forEach(function (option, index) {
    const button = document.createElement("button");

    button.className = "camping-option";
    button.textContent = option;

    button.addEventListener("click", function () {
      const allOptions = campingOptions.querySelectorAll("button");

      allOptions.forEach(function (item) {
        item.disabled = true;
      });

      if (index === question.answer) {
        campingQuizScore += 20;
        campingFeedback.textContent = "Benar! Hebat!";
      } else {
        campingFeedback.textContent =
          "Belum tepat. Jawaban benar: " +
          question.options[question.answer];
      }

      campingScoreElement.textContent =
        "Skor: " + campingQuizScore;
    });

    campingOptions.appendChild(button);
  });

  campingNextButton.textContent = "Pertanyaan Berikutnya";
}

campingNextButton?.addEventListener("click", function () {
  if (!campingQuizStarted) {
  campingQuizStarted = true;
  campingQuizIndex = 0;
  campingQuizScore = 0;

  campingScoreElement.textContent = "Skor: 0";

  // Sembunyikan evaluasi dari kuis sebelumnya
  const evaluation = document.getElementById("camping-evaluation");

  if (evaluation) {
    evaluation.style.display = "none";
  }

  campingFeedback.textContent = "";
  campingNextButton.textContent = "Pertanyaan Berikutnya";

  showCampingQuestion();
  return;
}

  if (campingQuizIndex < campingQuizQuestions.length - 1) {
    campingQuizIndex++;
    showCampingQuestion();
  } else {
  campingQuestion.textContent = "Kuis Selesai! 🎉";
  campingOptions.innerHTML = "";
  campingFeedback.textContent =
    "Kamu mendapatkan " + campingQuizScore + " dari 100 poin.";

  const evaluation = document.getElementById(
    "camping-evaluation"
  );

  const evaluationScore = document.getElementById(
    "camping-evaluation-score"
  );

  const evaluationCategory = document.getElementById(
    "camping-evaluation-category"
  );

  const evaluationMessage = document.getElementById(
    "camping-evaluation-message"
  );

  let category = "";
  let message = "";

  if (campingQuizScore >= 80) {
    category = "Sangat Baik";
    message = "Hebat! Kamu memahami materi perkemahan dengan baik.";
  } else if (campingQuizScore >= 60) {
    category = "Baik";
    message = "Bagus! Terus tingkatkan pemahamanmu.";
  } else {
    category = "Perlu Belajar Lagi";
    message = "Jangan menyerah. Pelajari kembali materi dan coba lagi.";
  }

  evaluationScore.textContent =
    "Nilai: " + campingQuizScore + "/100";

  evaluationCategory.textContent =
    "Kategori: " + category;

  evaluationMessage.textContent = message;

  evaluation.style.display = "block";

  campingNextButton.textContent = "Ulangi Kuis";
  campingQuizStarted = false;
  campingQuizIndex = 0;

  evaluation.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
});
// STEP 112 - MATERI SANDI MORSE

const cipherTopics = [
  {
    title: "1. Sandi Morse",
    content: `
      <div class="cipher-lesson">

        <span class="eyebrow">SCOUTING CODE LESSON</span>

        <h3>📡 Pengertian Sandi Morse</h3>

        <p>
          Sandi Morse adalah sistem komunikasi yang menggunakan
          kombinasi tanda titik (.) dan garis (-) untuk mewakili
          huruf, angka, serta tanda baca.
        </p>

        <h3>📖 Sejarah Singkat</h3>

        <p>
          Kode Morse dikembangkan pada abad ke-19 dan digunakan
          dalam komunikasi telegraf. Sistem ini kemudian dikenal
          luas sebagai salah satu bentuk komunikasi menggunakan
          sinyal.
        </p>

        <h3>🔤 Simbol Dasar Morse</h3>

        <div class="morse-table">
          <div><b>A</b><span>.-</span></div>
          <div><b>B</b><span>-...</span></div>
          <div><b>C</b><span>-.-.</span></div>
          <div><b>D</b><span>-..</span></div>
          <div><b>E</b><span>.</span></div>
          <div><b>F</b><span>..-.</span></div>
          <div><b>G</b><span>--.</span></div>
          <div><b>H</b><span>....</span></div>
          <div><b>I</b><span>..</span></div>
          <div><b>J</b><span>.---</span></div>
          <div><b>K</b><span>-.-</span></div>
          <div><b>L</b><span>.-..</span></div>
          <div><b>M</b><span>--</span></div>
          <div><b>N</b><span>-.</span></div>
          <div><b>O</b><span>---</span></div>
          <div><b>P</b><span>.--.</span></div>
          <div><b>Q</b><span>--.-</span></div>
          <div><b>R</b><span>.-.</span></div>
          <div><b>S</b><span>...</span></div>
          <div><b>T</b><span>-</span></div>
          <div><b>U</b><span>..-</span></div>
          <div><b>V</b><span>...-</span></div>
          <div><b>W</b><span>.--</span></div>
          <div><b>X</b><span>-..-</span></div>
          <div><b>Y</b><span>-.--</span></div>
          <div><b>Z</b><span>--..</span></div>
        </div>
<h3>🔢 Kode Angka Morse</h3>

<div class="morse-table">
  <div><b>0</b><span>-----</span></div>
  <div><b>1</b><span>.----</span></div>
  <div><b>2</b><span>..---</span></div>
  <div><b>3</b><span>...--</span></div>
  <div><b>4</b><span>....-</span></div>
  <div><b>5</b><span>.....</span></div>
  <div><b>6</b><span>-....</span></div>
  <div><b>7</b><span>--...</span></div>
  <div><b>8</b><span>---..</span></div>
  <div><b>9</b><span>----.</span></div>
</div>

<h3>✏️ Beberapa Tanda Baca Morse</h3>

<div class="morse-table">
  <div><b>Titik (.)</b><span>.-.-.-</span></div>
  <div><b>Koma (,)</b><span>--..--</span></div>
  <div><b>Tanya (?)</b><span>..--..</span></div>
  <div><b>Garis miring (/)</b><span>-..-.</span></div>
</div>
        <h3>💡 Contoh Penggunaan</h3>

        <p>
          Huruf SOS dalam kode Morse ditulis:
        </p>

        <div class="morse-example">
          <strong>... --- ...</strong>
          <p>Tiga titik, tiga garis, tiga titik.</p>
        </div>
<h3>📨 Contoh Membaca Pesan</h3>

<div class="morse-example">
  <strong>PRAMUKA</strong>
  <p>.--. .-. .- -- ..- -.- .-</p>
</div>

<p>
  Contoh tersebut menunjukkan bahwa setiap huruf dalam kata
  PRAMUKA memiliki susunan kode Morse yang berbeda.
</p>
        <h3>🎯 Tujuan Mempelajari Morse</h3>

        <ul>
          <li>Melatih konsentrasi dan ketelitian.</li>
          <li>Mengenal sistem komunikasi menggunakan kode.</li>
          <li>Melatih kemampuan mengingat simbol.</li>
          <li>Mengenal salah satu keterampilan kepramukaan.</li>
        </ul>

      </div>
    `
 },

  // STEP 115 - MATERI SANDI KOTAK 1
  {
    title: "2. Sandi Kotak 1",
    content: `
      <div class="cipher-lesson">

        <span class="eyebrow">SCOUTING CODE LESSON</span>

        <h3>🔲 Pengertian Sandi Kotak 1</h3>

        <p>
          Sandi Kotak 1 merupakan salah satu sandi kepramukaan
          yang menggunakan bentuk-bentuk geometris sebagai
          pengganti huruf alfabet.
        </p>

        <h3>📖 Bentuk Dasar</h3>

        <p>
          Sandi ini menggunakan susunan garis berbentuk kotak
          dan tanda silang. Setiap bagian memiliki simbol
          yang mewakili huruf tertentu.
        </p>
<h3>🗺️ Ilustrasi Bentuk Dasar</h3>

<div class="cipher-pattern">

  <div class="pattern-card">
    <h4>Pola Kotak</h4>
    <div class="pattern-symbol">
      <svg viewBox="0 0 120 120" role="img"
        aria-label="Ilustrasi pola kotak">
        <path d="M20 20 H100 V100 H20 Z"
          fill="none" stroke="#174B35"
          stroke-width="5"/>
        <path d="M60 20 V100 M20 60 H100"
          fill="none" stroke="#174B35"
          stroke-width="5"/>
      </svg>
    </div>
    <p>Garis membentuk bagian-bagian kotak.</p>
  </div>

  <div class="pattern-card">
    <h4>Pola Silang</h4>
    <div class="pattern-symbol">
      <svg viewBox="0 0 120 120" role="img"
        aria-label="Ilustrasi pola silang">
        <path d="M60 10 V110 M10 60 H110"
          fill="none" stroke="#B95735"
          stroke-width="5"/>
      </svg>
    </div>
    <p>Garis silang menjadi salah satu bentuk dasar.</p>
  </div>

</div>

<p class="pattern-note">
  Catatan: Diagram ini merupakan ilustrasi bentuk geometris,
  bukan tabel pasangan huruf dan simbol yang lengkap.
  Gunakan tabel sandi yang sesuai dengan versi Sandi Kotak 1
  yang dipelajari.
</p>
        <h3>🧩 Cara Mempelajarinya</h3>

        <ul>
          <li>Kenali susunan bentuk dasar sandi.</li>
          <li>Pelajari posisi setiap huruf pada pola.</li>
          <li>Perhatikan pembeda simbol yang memiliki tanda titik.</li>
          <li>Latih membaca simbol menggunakan tabel sandi.</li>
        </ul>

        <h3>🎯 Tujuan Pembelajaran</h3>

        <ul>
          <li>Melatih ketelitian.</li>
          <li>Mengenali pola dan simbol.</li>
          <li>Melatih kemampuan memecahkan pesan.</li>
        </ul>

        <div class="morse-example">
          <strong>INGAT!</strong>
          <p>
            Cocokkan setiap simbol dengan tabel sandi
            yang digunakan agar tidak salah membaca pesan.
          </p>
        </div>

      </div>
    `
  },

  // STEP 117 - MATERI SANDI KOTAK 2
  {
    title: "3. Sandi Kotak 2",
    content: `
      <div class="cipher-lesson">

        <span class="eyebrow">SCOUTING CODE LESSON</span>

        <h3>🔳 Pengertian Sandi Kotak 2</h3>

        <p>
          Sandi Kotak 2 merupakan variasi sandi kotak
          yang menggunakan pola geometris sebagai dasar
          pembentukan simbol huruf.
        </p>

        <h3>📖 Ciri-Ciri Sandi Kotak 2</h3>

        <ul>
          <li>Menggunakan bentuk geometris.</li>
          <li>Memiliki susunan simbol berdasarkan pola tertentu.</li>
          <li>Setiap simbol mewakili huruf sesuai tabel sandi.</li>
          <li>Perlu ketelitian saat membedakan posisi simbol.</li>
        </ul>
<h3>🗺️ Mengenal Pola Geometris</h3>

<div class="cipher-pattern">

  <div class="pattern-card">
    <h4>Susunan Kotak</h4>
    <div class="pattern-symbol">
      <svg viewBox="0 0 120 120">
        <path d="M20 20 H100 V100 H20 Z"
          fill="none" stroke="#174B35" stroke-width="5"/>
        <path d="M20 60 H100"
          fill="none" stroke="#174B35" stroke-width="5"/>
      </svg>
    </div>
    <p>Contoh bentuk geometris yang dapat dipelajari.</p>
  </div>

  <div class="pattern-card">
    <h4>Susunan Silang</h4>
    <div class="pattern-symbol">
      <svg viewBox="0 0 120 120">
        <path d="M60 10 V110 M10 60 H110"
          fill="none" stroke="#B95735" stroke-width="5"/>
        <circle cx="60" cy="60" r="7" fill="#E6A23C"/>
      </svg>
    </div>
    <p>Perhatikan posisi dan bentuk setiap bagian.</p>
  </div>

</div>

<p class="pattern-note">
  Ilustrasi ini hanya memperkenalkan bentuk geometris,
  bukan tabel simbol resmi Sandi Kotak 2.
</p>
        <h3>🧩 Cara Mempelajari</h3>

        <ol>
          <li>Pelajari tabel Sandi Kotak 2 dari pembina atau buku kepramukaan.</li>
          <li>Kenali posisi setiap huruf dalam pola.</li>
          <li>Perhatikan bentuk dan arah setiap simbol.</li>
          <li>Latih membaca pesan sederhana.</li>
        </ol>

        <h3>🎯 Manfaat Mempelajari Sandi Kotak 2</h3>

        <ul>
          <li>Melatih kemampuan mengenali pola.</li>
          <li>Meningkatkan konsentrasi.</li>
          <li>Melatih pemecahan masalah.</li>
          <li>Menambah pengetahuan tentang sandi kepramukaan.</li>
        </ul>

        <div class="morse-example">
          <strong>SCOUTING CHALLENGE</strong>
          <p>
            Bisakah kamu membedakan simbol-simbol
            Sandi Kotak 1 dan Sandi Kotak 2?
          </p>
        </div>

      </div>
    `
  },

  // STEP 119 - MATERI SANDI KOTAK 3
  {
    title: "4. Sandi Kotak 3",
    content: `
      <div class="cipher-lesson">

        <span class="eyebrow">SCOUTING CODE LESSON</span>

        <h3>🧩 Pengertian Sandi Kotak 3</h3>

        <p>
          Sandi Kotak 3 adalah salah satu variasi sandi
          kepramukaan yang menggunakan simbol geometris
          untuk mewakili huruf dalam sebuah pesan.
        </p>

        <h3>📖 Hal yang Perlu Dipahami</h3>

        <ul>
          <li>Mengenali susunan pola yang digunakan.</li>
          <li>Memahami posisi simbol dalam tabel sandi.</li>
          <li>Membedakan simbol yang bentuknya hampir serupa.</li>
          <li>Mencocokkan simbol dengan huruf yang tepat.</li>
        </ul>
<h3>🗺️ Ilustrasi Pola Geometris</h3>

<div class="cipher-pattern">

  <div class="pattern-card">
    <h4>Pola Geometris A</h4>
    <div class="pattern-symbol">
      <svg viewBox="0 0 120 120">
        <path d="M20 20 H100 V100 H20 Z"
          fill="none"
          stroke="#174B35"
          stroke-width="5"/>
        <path d="M20 20 L100 100"
          fill="none"
          stroke="#B95735"
          stroke-width="5"/>
      </svg>
    </div>
    <p>Contoh bentuk garis dan sudut.</p>
  </div>

  <div class="pattern-card">
    <h4>Pola Geometris B</h4>
    <div class="pattern-symbol">
      <svg viewBox="0 0 120 120">
        <path d="M60 10 L110 60 L60 110 L10 60 Z"
          fill="none"
          stroke="#174B35"
          stroke-width="5"/>
        <circle cx="60" cy="60" r="7"
          fill="#E6A23C"/>
      </svg>
    </div>
    <p>Contoh bentuk belah ketupat.</p>
  </div>

</div>

<p class="pattern-note">
  Ilustrasi ini hanya contoh bentuk geometris,
  bukan tabel pasangan huruf resmi Sandi Kotak 3.
</p>
        <h3>🔍 Langkah Mempelajari</h3>

        <ol>
          <li>Amati tabel Sandi Kotak 3 dari sumber pembelajaran.</li>
          <li>Pelajari kelompok dan posisi huruf.</li>
          <li>Bandingkan bentuk simbol satu dengan lainnya.</li>
          <li>Latih membaca pesan secara bertahap.</li>
        </ol>

        <h3>🎯 Manfaat Mempelajari</h3>

        <ul>
          <li>Melatih ketelitian dan konsentrasi.</li>
          <li>Mengembangkan kemampuan berpikir logis.</li>
          <li>Meningkatkan keterampilan memecahkan kode.</li>
        </ul>

        <div class="morse-example">
          <strong>SCOUTING CHALLENGE</strong>
          <p>
            Cobalah mengenali perbedaan pola Sandi Kotak 1,
            2, dan 3 menggunakan tabel yang benar.
          </p>
        </div>

      </div>
    `
  },

  // STEP 121 - MATERI SANDI RUMPUT
  {
    title: "5. Sandi Rumput",
    content: `
      <div class="cipher-lesson">

        <span class="eyebrow">SCOUTING CODE LESSON</span>

        <h3>🌿 Pengertian Sandi Rumput</h3>

        <p>
          Sandi Rumput merupakan salah satu bentuk sandi
          kepramukaan yang menggunakan gambaran garis-garis
          menyerupai rumput sebagai simbol pesan.
        </p>

        <h3>📖 Ciri-Ciri Sandi Rumput</h3>

        <ul>
          <li>Menggunakan bentuk garis yang menyerupai rumput.</li>
          <li>Memiliki susunan simbol berdasarkan aturan tertentu.</li>
          <li>Setiap kelompok simbol mewakili huruf.</li>
          <li>Perlu ketelitian untuk membedakan tinggi dan susunan garis.</li>
        </ul>
<h3>🌱 Ilustrasi Bentuk Sandi Rumput</h3>

<div class="grass-pattern">

  <div class="grass-card">
    <h4>Garis Pendek</h4>
    <svg viewBox="0 0 160 100">
      <path d="M20 85 L25 65 M55 85 L60 65
               M90 85 L95 65 M125 85 L130 65"
        stroke="#174B35"
        stroke-width="5"
        stroke-linecap="round"
        fill="none"/>
      <path d="M10 88 H145"
        stroke="#B95735"
        stroke-width="3"/>
    </svg>
    <p>Contoh garis pendek sebagai ilustrasi.</p>
  </div>

  <div class="grass-card">
    <h4>Garis Tinggi</h4>
    <svg viewBox="0 0 160 100">
      <path d="M20 85 L30 20 M60 85 L70 20
               M100 85 L110 20 M130 85 L140 20"
        stroke="#174B35"
        stroke-width="5"
        stroke-linecap="round"
        fill="none"/>
      <path d="M10 88 H150"
        stroke="#B95735"
        stroke-width="3"/>
    </svg>
    <p>Contoh garis tinggi sebagai ilustrasi.</p>
  </div>

</div>

<p class="pattern-note">
  Ilustrasi ini hanya memperkenalkan bentuk garis.
  Tinggi dan susunan simbol resmi harus mengikuti
  tabel Sandi Rumput yang dipakai dalam pembelajaran.
</p>
        <h3>🔍 Cara Mempelajari</h3>

        <ol>
          <li>Pelajari tabel Sandi Rumput yang digunakan pembina.</li>
          <li>Kenali perbedaan bentuk setiap simbol.</li>
          <li>Perhatikan pengelompokan simbol.</li>
          <li>Latih membaca pesan sederhana.</li>
        </ol>

        <h3>🎯 Manfaat Mempelajari</h3>

        <ul>
          <li>Melatih ketelitian dalam membaca simbol.</li>
          <li>Mengembangkan kemampuan mengenali pola.</li>
          <li>Menambah pengetahuan tentang sandi kepramukaan.</li>
        </ul>

        <div class="morse-example">
          <strong>SCOUTING CHALLENGE 🌱</strong>
          <p>
            Amati bentuk setiap kelompok garis dan cocokkan
            dengan tabel Sandi Rumput yang benar.
          </p>
        </div>

      </div>
    `
  },

  // STEP 123 - MATERI SANDI BATU
  {
    title: "6. Sandi Batu",
    content: `
      <div class="cipher-lesson">

        <span class="eyebrow">SCOUTING CODE LESSON</span>

        <h3>🪨 Pengertian Sandi Batu</h3>

        <p>
          Sandi Batu adalah materi pengenalan sandi kepramukaan
          yang menggunakan gambaran atau susunan simbol menyerupai
          batu sebagai media penyampaian pesan.
        </p>

        <h3>📖 Hal yang Perlu Dipahami</h3>

        <ul>
          <li>Mengenali bentuk simbol yang digunakan.</li>
          <li>Memahami aturan penyusunan pesan.</li>
          <li>Memperhatikan posisi dan pengelompokan simbol.</li>
          <li>Mencocokkan simbol dengan tabel sandi yang dipelajari.</li>
        </ul>
<h3>🪨 Ilustrasi Bentuk Batu</h3>

<div class="stone-pattern">

  <div class="stone-card">
    <svg viewBox="0 0 160 120">
      <path d="M25 85 L35 45 L65 25 L105 35
               L135 65 L125 95 L45 100 Z"
        fill="#A9A9A0"
        stroke="#174B35"
        stroke-width="4"/>
      <path d="M35 45 L80 65 L135 65"
        fill="none"
        stroke="#FFFFFF"
        stroke-width="3"/>
    </svg>
    <h4>Bentuk Batu A</h4>
    <p>Ilustrasi bentuk batu pertama.</p>
  </div>

  <div class="stone-card">
    <svg viewBox="0 0 160 120">
      <path d="M20 80 L45 35 L90 20
               L135 50 L145 90 L60 105 Z"
        fill="#C2B8A3"
        stroke="#174B35"
        stroke-width="4"/>
      <path d="M45 35 L75 75 L135 50"
        fill="none"
        stroke="#FFFFFF"
        stroke-width="3"/>
    </svg>
    <h4>Bentuk Batu B</h4>
    <p>Ilustrasi bentuk batu kedua.</p>
  </div>

</div>

<p class="pattern-note">
  Ilustrasi ini hanya dekorasi pembelajaran, bukan
  simbol atau tabel pasangan huruf resmi Sandi Batu.
</p>
        <h3>🔍 Cara Mempelajari</h3>

        <ol>
          <li>Pelajari contoh Sandi Batu dari pembina atau buku panduan.</li>
          <li>Amati bentuk dan susunan simbolnya.</li>
          <li>Pelajari aturan membaca pesan.</li>
          <li>Latih membaca contoh pesan sederhana.</li>
        </ol>

        <h3>🎯 Manfaat Mempelajari</h3>

        <ul>
          <li>Melatih ketelitian.</li>
          <li>Mengembangkan kemampuan berpikir logis.</li>
          <li>Mengenal variasi pembelajaran sandi.</li>
        </ul>

        <div class="morse-example">
          <strong>SCOUTING CHALLENGE 🪨</strong>
          <p>
            Amati simbol dan susunannya, kemudian cocokkan
            dengan tabel sandi yang benar.
          </p>
        </div>

      </div>
    `
  }
];
// STEP 113 - FUNGSI MEMBUKA MATERI SANDI

const cipherDetail = document.getElementById("cipher-detail");
const cipherDetailTitle = document.getElementById("cipher-detail-title");
const cipherDetailContent = document.getElementById("cipher-detail-content");

document.querySelectorAll(".cipher-topic-button").forEach(function(button, index) {

  button.addEventListener("click", function() {

    const topic = cipherTopics[index];

    if (!topic) return;

    cipherDetailTitle.textContent = topic.title;
    cipherDetailContent.innerHTML = topic.content;
    updateCipherCompletionButton();

    cipherDetail.style.display = "block";

    cipherDetail.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});
// STEP 113 - TOMBOL KEMBALI MATERI SANDI

document.getElementById("cipher-back-button")?.addEventListener("click", function() {

  cipherDetail.style.display = "none";

  document.querySelector(".cipher-grid")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

});
// STEP 125 - LOGIKA PENERJEMAH MORSE

const morseAlphabet = {
  A: ".-", B: "-...", C: "-.-.", D: "-..",
  E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-",
  U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",

  0: "-----", 1: ".----", 2: "..---",
  3: "...--", 4: "....-", 5: ".....",
  6: "-....", 7: "--...", 8: "---..",
  9: "----.",

  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "/": "-..-.",
  "!": "-.-.--"
};

const morseInput = document.getElementById("morse-input");
const morseOutput = document.getElementById("morse-output");
const morseMessage = document.getElementById("morse-translator-message");

function translateTextToMorse(text) {
  return text.toUpperCase().split("").map(function(character) {
    if (character === " ") return "/";

    return morseAlphabet[character] || "?";
  }).join(" ");
}

function translateMorseToText(code) {
  const reverseMorse = {};

  Object.keys(morseAlphabet).forEach(function(character) {
    reverseMorse[morseAlphabet[character]] = character;
  });

  return code.trim().split(/\s*\/\s*/).map(function(word) {
    return word.trim().split(/\s+/).map(function(symbol) {
      if (!symbol) return "";

      return reverseMorse[symbol] || "?";
    }).join("");
  }).join(" ");
}

// TEKS MENJADI MORSE
document.getElementById("text-to-morse")?.addEventListener("click", function() {
  const text = morseInput.value.trim();

  if (!text) {
    morseMessage.textContent = "Masukkan teks terlebih dahulu.";
    return;
  }

  morseOutput.textContent = translateTextToMorse(text);
  morseMessage.textContent = "Berhasil diterjemahkan menjadi kode Morse.";
});

// MORSE MENJADI TEKS
document.getElementById("morse-to-text")?.addEventListener("click", function() {
  const code = morseInput.value.trim();

  if (!code) {
    morseMessage.textContent = "Masukkan kode Morse terlebih dahulu.";
    return;
  }

  if (!/^[.\-/\s]+$/.test(code)) {
    morseMessage.textContent = "Format kode Morse tidak valid.";
    return;
  }

  morseOutput.textContent = translateMorseToText(code);
  morseMessage.textContent = "Berhasil diterjemahkan menjadi teks.";
});

// HAPUS INPUT DAN HASIL
document.getElementById("morse-clear")?.addEventListener("click", function() {
  morseInput.value = "";
  morseOutput.textContent = "Hasil akan muncul di sini.";
  morseMessage.textContent = "";
});

// SALIN HASIL
document.getElementById("morse-copy")?.addEventListener("click", async function() {
  const result = morseOutput.textContent;

  if (!result || result === "Hasil akan muncul di sini.") {
    morseMessage.textContent = "Belum ada hasil untuk disalin.";
    return;
  }

  try {
    await navigator.clipboard.writeText(result);
    morseMessage.textContent = "Hasil berhasil disalin.";
  } catch (error) {
    morseMessage.textContent = "Penyalinan otomatis tidak tersedia di browser ini.";
  }
});
// STEP 127 - INTERAKSI LATIHAN SANDI KOTAK 1

const kotakAnswer = document.getElementById("kotak-answer");
const kotakCheckButton = document.getElementById("kotak-check-button");
const kotakFeedback = document.getElementById("kotak-practice-feedback");

kotakCheckButton?.addEventListener("click", function() {
  const answer = kotakAnswer.value.trim().toUpperCase();

  if (!answer) {
    kotakFeedback.textContent = "Masukkan jawaban terlebih dahulu.";
    return;
  }

  if (!/^[A-Z]$/.test(answer)) {
    kotakFeedback.textContent = "Masukkan satu huruf A sampai Z.";
    return;
  }

  kotakFeedback.textContent =
    "Jawaban tercatat: " + answer +
    ". Cocokkan dengan kunci Sandi Kotak 1 dari pembina.";
});
// STEP 128 - LOGIKA KUIS SANDI PRAMUKA

const cipherQuestions = [
  {
    question: "Apa kepanjangan dari SOS dalam penggunaan kode Morse?",
    answers: [
      "Save Our Ship",
      "Sistem Operasi Sandi",
      "Scout Organization System",
      "Signal Of Scout"
    ],
    correct: 0
  },
  {
    question: "Simbol Morse untuk huruf A adalah?",
    answers: [".-", "-...", "---", ".."],
    correct: 0
  },
  {
    question: "Apa fungsi utama sandi Pramuka?",
    answers: [
      "Menghias buku",
      "Menyampaikan pesan menggunakan kode",
      "Menghitung jumlah anggota",
      "Mengukur jarak"
    ],
    correct: 1
  },
  {
    question: "Sandi Rumput menggunakan bentuk dasar berupa?",
    answers: [
      "Gambar lingkaran",
      "Garis menyerupai rumput",
      "Angka Romawi",
      "Gambar bintang"
    ],
    correct: 1
  },
  {
    question: "Apa yang perlu diperhatikan ketika membaca sandi?",
    answers: [
      "Warna kertas saja",
      "Ukuran buku",
      "Kunci atau petunjuk sandi",
      "Nama pembuat kertas"
    ],
    correct: 2
  }
];

let cipherQuestionIndex = 0;
let cipherQuizScore = 0;
let cipherQuizStarted = false;

const cipherQuestionElement =
  document.getElementById("cipher-question");

const cipherAnswersElement =
  document.getElementById("cipher-answers");

const cipherFeedbackElement =
  document.getElementById("cipher-feedback");

const cipherNextButton =
  document.getElementById("cipher-next-button");

const cipherScoreElement =
  document.getElementById("cipher-score");

function showCipherQuestion() {
  const question = cipherQuestions[cipherQuestionIndex];

  cipherQuestionElement.textContent = question.question;
  cipherAnswersElement.innerHTML = "";
  cipherFeedbackElement.textContent = "";

  question.answers.forEach(function(answer, index) {
    const button = document.createElement("button");

    button.className = "cipher-answer-button";
    button.textContent = answer;

    button.addEventListener("click", function() {
      const buttons = cipherAnswersElement.querySelectorAll("button");

      buttons.forEach(function(item) {
        item.disabled = true;
      });

      if (index === question.correct) {
        cipherQuizScore += 20;
        cipherFeedbackElement.textContent = "Benar! Hebat!";
      } else {
        cipherFeedbackElement.textContent =
          "Belum tepat. Yuk pelajari kembali materinya!";
      }

      cipherScoreElement.textContent =
        "Skor: " + cipherQuizScore;

      cipherNextButton.textContent =
        cipherQuestionIndex === cipherQuestions.length - 1
          ? "Lihat Hasil"
          : "Pertanyaan Berikutnya";
    });

    cipherAnswersElement.appendChild(button);
  });
}

cipherNextButton?.addEventListener("click", function() {
  if (!cipherQuizStarted) {
    cipherQuizStarted = true;
    cipherQuestionIndex = 0;
    cipherQuizScore = 0;

    cipherScoreElement.textContent = "Skor: 0";
    cipherNextButton.textContent = "Pilih Jawaban";

    showCipherQuestion();
    return;
  }

  const answered =
    cipherAnswersElement.querySelector("button:disabled");

  if (!answered) {
    cipherFeedbackElement.textContent =
      "Pilih salah satu jawaban terlebih dahulu.";
    return;
  }

  cipherQuestionIndex++;

  if (cipherQuestionIndex < cipherQuestions.length) {
    showCipherQuestion();
  } else {
  cipherQuestionElement.textContent = "Kuis Selesai! 🎉";
  cipherAnswersElement.innerHTML = "";

  cipherFeedbackElement.textContent =
    "Nilai akhir kamu: " + cipherQuizScore + "/100";

  saveCipherQuizResult();

  cipherNextButton.textContent = "Ulangi Kuis";
  cipherQuizStarted = false;
}
});
// STEP 129 - PENYIMPANAN RIWAYAT KUIS SANDI

function saveCipherQuizResult() {
  let history = JSON.parse(
    localStorage.getItem("cipherQuizHistory") || '{"best":0,"attempts":0}'
  );

  history.attempts++;

  if (cipherQuizScore > history.best) {
    history.best = cipherQuizScore;
  }

  localStorage.setItem(
    "cipherQuizHistory",
    JSON.stringify(history)
  );

  updateCipherQuizHistory();
}

function updateCipherQuizHistory() {
  const history = JSON.parse(
    localStorage.getItem("cipherQuizHistory") || '{"best":0,"attempts":0}'
  );

  const bestScore = document.getElementById("cipher-best-score");
  const attempts = document.getElementById("cipher-attempts");
  const message = document.getElementById("cipher-history-message");

  if (bestScore) {
    bestScore.textContent = history.best;
  }

  if (attempts) {
    attempts.textContent = history.attempts;
  }

  if (message) {
    message.textContent = history.attempts > 0
      ? "Terus berlatih! Nilai terbaikmu tersimpan."
      : "Selesaikan kuis untuk mulai mencatat riwayatmu.";
  }
  updateCipherBadges(history);
}

updateCipherQuizHistory();
updateCipherLeaderboard();
updateCipherStatistics();
// STEP 130 - SISTEM LENCANA PENGHARGAAN

function updateCipherBadges(history) {
  const bronze = document.getElementById("cipher-bronze");
  const silver = document.getElementById("cipher-silver");
  const gold = document.getElementById("cipher-gold");

  function setBadge(element, earned) {
    if (!element) return;

    element.classList.toggle("earned", earned);

    const status = element.querySelector(".cipher-badge-status");

    if (status) {
      status.textContent = earned
        ? "✓ Berhasil diperoleh"
        : "Belum diperoleh";
    }
  }

  setBadge(bronze, history.attempts > 0);
  setBadge(silver, history.best >= 60);
  setBadge(gold, history.best >= 100);
}

// TAMPILKAN LENCANA SAAT HALAMAN DIBUKA
updateCipherQuizHistory();
// STEP 131 - DATA LEADERBOARD SANDI

function updateCipherLeaderboard() {
  const history = JSON.parse(
    localStorage.getItem("cipherQuizHistory") ||
    '{"best":0,"attempts":0}'
  );

  const scoreElement = document.getElementById(
    "cipher-Leaderboard-score"
  );

  const messageElement = document.getElementById(
    "cipher-Leaderboard-message"
  );

  if (scoreElement) {
    scoreElement.textContent = history.best;
  }

  if (messageElement) {
    messageElement.textContent =
      history.attempts > 0
        ? "Kamu sudah mencoba kuis sebanyak " +
          history.attempts + " kali."
        : "Selesaikan kuis untuk melihat pencapaianmu.";
  }
}

updateCipherLeaderboard();
// STEP 132 - PENYIMPANAN NAMA PESERTA

const cipherPlayerName =
  document.getElementById("cipher-player-name");

const cipherPlayerInput =
  document.getElementById("cipher-player-input");

const cipherSaveName =
  document.getElementById("cipher-save-name");

const cipherNameMessage =
  document.getElementById("cipher-name-message");

function loadCipherPlayerName() {
  const savedName =
    localStorage.getItem("cipherPlayerName") || "";

  if (savedName && cipherPlayerName) {
    cipherPlayerName.textContent = savedName;
  }

  if (savedName && cipherPlayerInput) {
    cipherPlayerInput.value = savedName;
  }
}

cipherSaveName?.addEventListener("click", function() {
  const name = cipherPlayerInput.value.trim();

  if (!name) {
    cipherNameMessage.textContent =
      "Silakan masukkan nama terlebih dahulu.";
    return;
  }

  localStorage.setItem("cipherPlayerName", name);

  cipherPlayerName.textContent = name;

  cipherNameMessage.textContent =
    "Nama peserta berhasil disimpan!";
});

loadCipherPlayerName();
// STEP 133 - LOGIKA STATISTIK PESERTA

function updateCipherStatistics() {
  const history = JSON.parse(
    localStorage.getItem("cipherQuizHistory") ||
    '{"best":0,"attempts":0}'
  );

  const badgeCount =
    (history.attempts > 0 ? 1 : 0) +
    (history.best >= 60 ? 1 : 0) +
    (history.best >= 100 ? 1 : 0);

  const attemptsElement =
    document.getElementById("cipher-stat-attempts");

  const bestElement =
    document.getElementById("cipher-stat-best");

  const badgesElement =
    document.getElementById("cipher-stat-badges");

  const statusElement =
    document.getElementById("cipher-stat-status");

  if (attemptsElement) {
    attemptsElement.textContent = history.attempts;
  }

  if (bestElement) {
    bestElement.textContent = history.best;
  }

  if (badgesElement) {
    badgesElement.textContent = badgeCount + "/3";
  }

  if (statusElement) {
    statusElement.textContent =
      history.attempts > 0
        ? "Peserta sudah aktif mengikuti pembelajaran sandi."
        : "Belum ada aktivitas kuis.";
  }
}

updateCipherStatistics();
// STEP 134 - LOGIKA PENCARIAN MATERI SANDI

const cipherSearchInput =
  document.getElementById("cipher-search-input");

const cipherSearchClear =
  document.getElementById("cipher-search-clear");

const cipherSearchMessage =
  document.getElementById("cipher-search-message");

function searchCipherMaterials() {
  const keyword = cipherSearchInput.value
    .toLowerCase()
    .trim();

  const cards = document.querySelectorAll(".cipher-card");

  let visibleCount = 0;

  cards.forEach(function(card) {
    const content = card.textContent.toLowerCase();
    const matched = content.includes(keyword);

    card.classList.toggle("search-hidden", !matched);

    if (matched) {
      visibleCount++;
    }
  });

  if (keyword === "") {
    cipherSearchMessage.textContent = "";
  } else if (visibleCount === 0) {
    cipherSearchMessage.textContent =
      "Materi tidak ditemukan.";
  } else {
    cipherSearchMessage.textContent =
      visibleCount + " materi ditemukan.";
  }
}

cipherSearchInput?.addEventListener(
  "input",
  searchCipherMaterials
);

cipherSearchClear?.addEventListener("click", function() {
  cipherSearchInput.value = "";
  searchCipherMaterials();
  cipherSearchInput.focus();
});
// STEP 135 - LOGIKA FILTER KATEGORI SANDI

const cipherFilterButtons = document.querySelectorAll(
  ".cipher-filter-button"
);

let activeCipherFilter = "all";

function applyCipherFilters() {
  const keyword = (
    document.getElementById("cipher-search-input")?.value || ""
  ).toLowerCase().trim();

  const cards = document.querySelectorAll(".cipher-card");

  let visibleCount = 0;

  cards.forEach(function(card) {
    const content = card.textContent.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch = content.includes(keyword);
    const matchesCategory =
      activeCipherFilter === "all" ||
      category === activeCipherFilter;

    const visible = matchesSearch && matchesCategory;

    card.classList.toggle("search-hidden", !visible);

    if (visible) visibleCount++;
  });

  const message = document.getElementById("cipher-search-message");

  if (message) {
    if (keyword || activeCipherFilter !== "all") {
      message.textContent = visibleCount +
        " materi ditemukan.";
    } else {
      message.textContent = "";
    }
  }
}

cipherFilterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    activeCipherFilter = button.dataset.filter;

    cipherFilterButtons.forEach(function(item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

    applyCipherFilters();
  });
});

// GANTI PENCARIAN LAMA DENGAN FILTER GABUNGAN
document.getElementById("cipher-search-input")?.removeEventListener(
  "input",
  searchCipherMaterials
);

document.getElementById("cipher-search-input")?.addEventListener(
  "input",
  applyCipherFilters
);

document.getElementById("cipher-search-clear")?.addEventListener(
  "click",
  function() {
    document.getElementById("cipher-search-input").value = "";
    applyCipherFilters();
  }
);
// STEP 136 - PENYIMPANAN MATERI SANDI SELESAI

const cipherCompleteButton =
  document.getElementById("cipher-complete-button");

const cipherCompleteStatus =
  document.getElementById("cipher-complete-status");

const cipherCompletedTopics = JSON.parse(
  localStorage.getItem("cipherCompletedTopics") || "[]"
);

function updateCipherCompletionButton() {
  if (!cipherCompleteButton || !cipherCompleteStatus) return;

  const title = document.getElementById(
    "cipher-detail-title"
  )?.textContent;

  const completed = cipherCompletedTopics.includes(title);

  cipherCompleteButton.classList.toggle(
    "completed",
    completed
  );

  cipherCompleteButton.textContent = completed
    ? "✓ Materi Sudah Selesai"
    : "✓ Tandai Materi Selesai";

  cipherCompleteStatus.textContent = completed
    ? "Hebat! Materi ini sudah kamu selesaikan."
    : "Materi belum diselesaikan.";
}

cipherCompleteButton?.addEventListener("click", function () {
  const title = document.getElementById(
    "cipher-detail-title"
  )?.textContent;

  if (!title || cipherCompletedTopics.includes(title)) return;

  cipherCompletedTopics.push(title);

  localStorage.setItem(
    "cipherCompletedTopics",
    JSON.stringify(cipherCompletedTopics)
  );

  updateCipherCompletionButton();
  updateCipherProgress();
  updateCipherCompletedList();
  updateCipherPoints();
});

updateCipherCompletionButton();
// STEP 137 - UPDATE PROGRES BELAJAR SANDI

function updateCipherProgress() {
  const total = 6;
  const completed = Math.min(cipherCompletedTopics.length, total);
  const percentage = Math.round((completed / total) * 100);

  const percentElement = document.getElementById(
    "cipher-progress-percent"
  );

  const fillElement = document.getElementById(
    "cipher-progress-fill"
  );

  const countElement = document.getElementById(
    "cipher-progress-count"
  );

  if (percentElement) {
    percentElement.textContent = percentage + "%";
  }

  if (fillElement) {
    fillElement.style.width = percentage + "%";
  }

  if (countElement) {
    countElement.textContent =
      completed + " dari " + total + " materi selesai";
  }
}

updateCipherProgress();
// STEP 138 - UPDATE DAFTAR MATERI SELESAI

function updateCipherCompletedList() {
  const list = document.getElementById(
    "cipher-completed-items"
  );

  if (!list) return;

  list.innerHTML = "";

  if (cipherCompletedTopics.length === 0) {
    list.innerHTML =
      "<li>Belum ada materi yang diselesaikan.</li>";
    return;
  }

  cipherCompletedTopics.forEach(function (title) {
    const item = document.createElement("li");
    item.textContent = "✓ " + title;
    list.appendChild(item);
  });
}

updateCipherCompletedList();
// STEP 139 - UPDATE POIN BELAJAR SANDI

function updateCipherPoints() {
  const points = cipherCompletedTopics.length * 10;

  const pointsElement = document.getElementById(
    "cipher-points-total"
  );

  if (pointsElement) {
    pointsElement.textContent = points;
  }
}

updateCipherPoints();
// STEP 140 - KONTROL LAMPU MORSE

const morseLampLight = document.getElementById(
  "morse-lamp-light"
);

const morseLampStatus = document.getElementById(
  "morse-lamp-status"
);

const morseDotButton = document.getElementById(
  "morse-dot-button"
);

const morseDashButton = document.getElementById(
  "morse-dash-button"
);

const morseLampClear = document.getElementById(
  "morse-lamp-clear"
);

function showMorseLampSignal(type) {
  const lamp = document.getElementById("morse-lamp-light");
  const status = document.getElementById("morse-lamp-status");

  if (!lamp || !status) return;

  lamp.classList.add("active");

  status.textContent =
    type === "dot"
      ? "Lampu menyala: TITIK (•)"
      : "Lampu menyala: GARIS (—)";

  clearTimeout(morseLampTimer);

  morseLampTimer = setTimeout(function () {
    lamp.classList.remove("active");
    status.textContent = "Lampu siap digunakan.";
  }, type === "dot" ? 200 : 600);
}
function turnOffMorseLamp() {
  if (!morseLampLight || !morseLampStatus) return;

  morseLampLight.classList.remove("active");
  morseLampStatus.textContent = "Lampu dalam keadaan mati.";
}

morseDotButton?.addEventListener("click", function () {
  showMorseLampSignal("dot");
});

morseDashButton?.addEventListener("click", function () {
  showMorseLampSignal("dash");
});

morseLampClear?.addEventListener("click", turnOffMorseLamp);
// STEP 141 - ANIMASI OTOMATIS LAMPU MORSE

const morseLampInput = document.getElementById(
  "morse-lamp-input"
);

const morseLampPlay = document.getElementById(
  "morse-lamp-play"
);

const morseAutoStatus = document.getElementById(
  "morse-auto-status"
);

let morseLampTimer = null;

function playMorseLamp() {
  const text = morseLampInput?.value.trim().toUpperCase();

  if (!text) {
    morseAutoStatus.textContent = "Masukkan teks terlebih dahulu.";
    return;
  }

  if (morseLampTimer) {
    clearTimeout(morseLampTimer);
    morseLampTimer = null;
  }

  const code = text
    .split("")
    .map(function (character) {
      if (character === " ") return "/";
      return morseAlphabet[character] || "";
    })
    .filter(Boolean)
    .join(" ");

  const signals = code.split("");
  let index = 0;
  const speed = Number(
  document.getElementById("morse-lamp-speed")?.value || 1
);

function wait(duration) {
  return duration / speed;
}

  morseLampPlay.disabled = true;
  morseLampPlay.textContent = "Sedang memutar...";

  function nextSignal() {
    if (index >= signals.length) {
      turnOffMorseLamp();
      morseLampTimer = null;
      morseLampPlay.disabled = false;
      morseLampPlay.textContent = "▶ Putar Sinyal Morse";
      morseAutoStatus.textContent = "Sinyal selesai diputar.";
      return;
    }

    const signal = signals[index];

    if (signal === ".") {
      showMorseLampSignal("dot");
      index++;
      morseLampTimer=setTimeout(nextSignal,wait(250));
      
    } else if (signal === "-") {
      showMorseLampSignal("dash");
      index++;
      morseLampTimer = setTimeout(nextSignal, wait(700));
    } else {
      turnOffMorseLamp();
      index++;
      morseLampTimer = setTimeout(nextSignal, wait(350));
    }
  }

  morseAutoStatus.textContent = "Mengirim sinyal: " + text;
  nextSignal();
}

morseLampPlay?.addEventListener("click", playMorseLamp);
// STEP 142 - BERHENTIKAN ANIMASI LAMPU MORSE

const morseLampStop = document.getElementById(
  "morse-lamp-stop"
);

morseLampStop?.addEventListener("click", function () {
  if (morseLampTimer) {
    clearTimeout(morseLampTimer);
    morseLampTimer = null;
  }

  turnOffMorseLamp();

  if (morseLampPlay) {
    morseLampPlay.disabled = false;
    morseLampPlay.textContent = "▶ Putar Sinyal Morse";
  }

  if (morseAutoStatus) {
    morseAutoStatus.textContent = "Sinyal dihentikan.";
  }
});
// STEP 143 - AUDIO KODE MORSE

const morseSoundInput = document.getElementById(
  "morse-sound-input"
);

const morseSoundPlay = document.getElementById(
  "morse-sound-play"
);

const morseSoundStop = document.getElementById(
  "morse-sound-stop"
);

const morseSoundStatus = document.getElementById(
  "morse-sound-status"
);

let morseAudioContext = null;
let morseSoundTimer = null;
let morseSoundPlaying = false;

function stopMorseSound() {
  morseSoundPlaying = false;

  if (morseSoundTimer) {
    clearTimeout(morseSoundTimer);
    morseSoundTimer = null;
  }

  if (morseAudioContext &&
      morseAudioContext.state !== "closed") {
    morseAudioContext.close();
  }

  morseAudioContext = null;

  if (morseSoundStatus) {
    morseSoundStatus.textContent = "Suara dihentikan.";
  }

  if (morseSoundPlay) {
    morseSoundPlay.disabled = false;
    morseSoundPlay.textContent = "▶ Putar Suara Morse";
  }
}

async function playMorseSound() {
  const text = morseSoundInput?.value.trim().toUpperCase();

  if (!text) {
    morseSoundStatus.textContent =
      "Masukkan teks terlebih dahulu.";
    return;
  }

  stopMorseSound();

  morseSoundPlaying = true;

  const code = text
    .split("")
    .map(function (character) {
      if (character === " ") return "/";
      return morseAlphabet[character] || "";
    })
    .filter(Boolean)
    .join(" ");

  const signals = code.split("");
const volume = Number(
  document.getElementById("morse-volume")?.value || 0.12
);

const speed = Number(
  document.getElementById("morse-sound-speed")?.value || 1
);
  morseAudioContext = new (
    window.AudioContext || window.webkitAudioContext
  )();

  await morseAudioContext.resume();

  morseSoundPlay.disabled = true;
  morseSoundPlay.textContent = "Sedang memutar...";

  let index = 0;

  function nextSound() {
    if (!morseSoundPlaying) return;

    if (index >= signals.length) {
      morseSoundPlaying = false;
      morseSoundPlay.disabled = false;
      morseSoundPlay.textContent = "▶ Putar Suara Morse";
      morseSoundStatus.textContent = "Suara Morse selesai diputar.";
      morseAudioContext.close();
      morseAudioContext = null;
      return;
    }

    const signal = signals[index];
    index++;

    if (signal === "." || signal === "-") {
      const oscillator = morseAudioContext.createOscillator();
      const gain = morseAudioContext.createGain();

      oscillator.frequency.value = 600;
      gain.gain.value = volume;

      oscillator.connect(gain);
      gain.connect(morseAudioContext.destination);

      const duration = (signal === "." ? 0.12 : 0.36) / speed;

      oscillator.start();
      oscillator.stop(morseAudioContext.currentTime + duration);

      morseSoundTimer = setTimeout(
        nextSound,
        (signal === "." ? 250 : 500) / speed
      );
    } else {
      morseSoundTimer = setTimeout(nextSound, 350/speed);
    }
  }

  morseSoundStatus.textContent =
    "Memutar suara untuk: " + text;

  nextSound();
}

morseSoundPlay?.addEventListener(
  "click",
  playMorseSound
);

morseSoundStop?.addEventListener(
  "click",
  stopMorseSound
);
// STEP 147A - KONEKSI PANEL KONTROL MORSE

const unifiedMorseInput = document.getElementById("morse-unified-input");
const unifiedLampButton = document.getElementById("morse-unified-lamp");
const unifiedSoundButton = document.getElementById("morse-unified-sound");
const unifiedStopButton = document.getElementById("morse-unified-stop");
const unifiedStatus = document.getElementById("morse-unified-status");
const unifiedMorseOutput = document.getElementById("morse-unified-output");
const unifiedCopyButton = document.getElementById("morse-unified-copy");
const morseCopyStatus = document.getElementById("morse-copy-status");
// STEP 152 - PENYIMPANAN RIWAYAT MORSE
const morseHistoryList = document.getElementById("morse-history-list");

let morseHistory = JSON.parse(
  localStorage.getItem("morseHistory") || "[]"
);

function updateMorseHistory() {
  if (!morseHistoryList) return;

  morseHistoryList.innerHTML = "";

  if (morseHistory.length === 0) {
    morseHistoryList.innerHTML =
      "<li>Belum ada riwayat pesan.</li>";
    return;
  }

  morseHistory.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    morseHistoryList.appendChild(li);
  });
}

function saveMorseHistory(message) {
  if (!message) return;
// STEP 155 - HITUNG PENGGUNAAN MORSE
let morseTotalUsage = Number(
  localStorage.getItem("morseTotalUsage") || 0
);

function updateMorseUsage() {
  const totalElement =
    document.getElementById("morse-total-usage");

  if (totalElement) {
    totalElement.textContent = morseTotalUsage;
  }
}

function increaseMorseUsage() {
  morseTotalUsage++;

  localStorage.setItem(
    "morseTotalUsage",
    morseTotalUsage
  );

  updateMorseUsage();
}

updateMorseUsage();
  morseHistory.unshift(message);
  increaseMorseUsage();
  morseHistory = morseHistory.slice(0, 10);

  localStorage.setItem(
    "morseHistory",
    JSON.stringify(morseHistory)
  );

  updateMorseHistory();
}

updateMorseHistory();

const unifiedClearButton = document.getElementById("morse-unified-clear");

unifiedClearButton?.addEventListener("click", function () {  unifiedMorseInput.value = "";
  unifiedMorseOutput.textContent =
    "Kode Morse akan muncul di sini.";

  unifiedStatus.textContent =
    "Panel sudah dibersihkan.";
});
// TAMPILKAN HASIL KODE MORSE
unifiedMorseInput?.addEventListener("input", function () {
  const message = unifiedMorseInput.value.trim();

  if (!message) {
    unifiedMorseOutput.textContent =
      "Kode Morse akan muncul di sini.";
      saveMorseHistory(message);
    return;
  }

  unifiedMorseOutput.textContent = encodeMorse(message);
});
// UJI LAMPU
unifiedLampButton?.addEventListener("click", function () {
  const message = unifiedMorseInput?.value.trim();

  if (!message) {
    unifiedStatus.textContent = "Masukkan pesan terlebih dahulu.";
    return;
  }

  const lampInput = document.getElementById("morse-lamp-input");

  if (lampInput) {
    lampInput.value = message;
  }

  if (typeof playMorseLamp === "function") {
    playMorseLamp();
    unifiedStatus.textContent = "Simulasi lampu Morse dimulai.";
  }
});

// UJI SUARA
unifiedSoundButton?.addEventListener("click", function () {
  const message = unifiedMorseInput?.value.trim();

  if (!message) {
    unifiedStatus.textContent = "Masukkan pesan terlebih dahulu.";
    return;
  }

  const soundInput = document.getElementById("morse-sound-input");

  if (soundInput) {
    soundInput.value = message;
  }

  if (typeof playMorseSound === "function") {
    playMorseSound();
    unifiedStatus.textContent = "Simulasi suara Morse dimulai.";
  }
});

// HENTIKAN SEMUA
unifiedStopButton?.addEventListener("click", function () {
  if (typeof stopMorseSound === "function") {
    stopMorseSound();
  }

  if (typeof turnOffMorseLamp === "function") {
    turnOffMorseLamp();
  }

  if (typeof morseLampTimer !== "undefined") {
    clearTimeout(morseLampTimer);
  }

  unifiedStatus.textContent = "Semua simulasi dihentikan.";
});
// STEP 153 - HAPUS RIWAYAT MORSE
const morseHistoryClearButton =
  document.getElementById("morse-history-clear");

morseHistoryClearButton?.addEventListener("click", function () {
  morseHistory = [];

  localStorage.removeItem("morseHistory");

  updateMorseHistory();
});
// STEP 157 - FUNGSI SALIN KODE MORSE
unifiedCopyButton?.addEventListener("click", async function () {
  const morseText = unifiedMorseOutput?.textContent.trim();

  if (!morseText || morseText === "Kode Morse akan muncul di sini.") {
    unifiedCopyStatus.textContent = "Belum ada kode Morse untuk disalin.";
    return;
  }

  try {
    await navigator.clipboard.writeText(morseText);
    unifiedCopyStatus.textContent = "Kode Morse berhasil disalin!";
  } catch (error) {
    unifiedCopyStatus.textContent = "Gagal menyalin. Silakan salin secara manual.";
  }
});
// STEP 159 - TERJEMAHAN BALIK MORSE

const morseReverseInput =
  document.getElementById("morse-reverse-input");

const morseReverseButton =
  document.getElementById("morse-reverse-button");

const morseReverseOutput =
  document.getElementById("morse-reverse-output");

morseReverseButton?.addEventListener("click", function () {
  const code = morseReverseInput.value.trim();

  if (!code) {
    morseReverseOutput.textContent =
      "Masukkan kode Morse terlebih dahulu.";
    return;
  }

  morseReverseOutput.textContent = decodeMorse(code);
});
// STEP 160 - BERSIHKAN TERJEMAHAN BALIK

const morseReverseClear =
  document.getElementById("morse-reverse-clear");

morseReverseClear?.addEventListener("click", function () {
  morseReverseInput.value = "";

  morseReverseOutput.textContent =
    "Hasil terjemahan akan muncul di sini.";
});
// STEP 165 - KUIS MORSE
const morseQuizQuestions = [
  { question: "Apa kode Morse untuk huruf A?", answer: ".-", options: [".-", "-...", "...", "--"] },
  { question: "Apa kode Morse untuk huruf B?", answer: "-...", options: ["--", "-...", ".-", "..."] },
  { question: "Apa kode Morse untuk huruf S?", answer: "...", options: ["---", ".-", "...", "-..."] },
  { question: "Apa kode Morse untuk huruf O?", answer: "---", options: ["...", "--", "---", ".-"] },
  { question: "Apa kode Morse untuk angka 1?", answer: ".----", options: ["-----", ".----", "..---", "...--"] }
];

let morseQuizIndex = 0;
let morseQuizScore = 0;
let morseQuizAnswered = false;

const morseQuestionText = document.getElementById("morse-question-text");
const morseQuizFeedback = document.getElementById("morse-quiz-feedback");
const morseQuizScoreDisplay = document.getElementById("morse-quiz-score");
const morseNextQuestion = document.getElementById("morse-next-question");
const morseAnswerButtons = document.querySelectorAll(".morse-answer");

function showMorseQuizQuestion() {
  const question = morseQuizQuestions[morseQuizIndex];

  morseQuestionText.textContent = question.question;
  morseQuizFeedback.textContent = "";
  morseQuizAnswered = false;

  question.options.forEach((option, index) => {
    morseAnswerButtons[index].textContent = option;
    morseAnswerButtons[index].dataset.answer = option;
    morseAnswerButtons[index].disabled = false;
  });

  morseQuizScoreDisplay.textContent =
    `Skor: ${morseQuizScore}`;
}

morseAnswerButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (morseQuizAnswered) return;

    morseQuizAnswered = true;

    const correct =
      button.dataset.answer === morseQuizQuestions[morseQuizIndex].answer;

    if (correct) {
      morseQuizScore++;
      morseQuizFeedback.textContent = "Benar! Hebat!";
    } else {
      morseQuizFeedback.textContent =
        "Belum tepat. Jawaban: " +
        morseQuizQuestions[morseQuizIndex].answer;
    }

    morseAnswerButtons.forEach(answerButton => {
      answerButton.disabled = true;
    });

    morseQuizScoreDisplay.textContent =
      `Skor: ${morseQuizScore}`;
  });
});

morseNextQuestion.addEventListener("click", () => {
  morseQuizIndex++;

  if (morseQuizIndex >= morseQuizQuestions.length) {
    morseQuestionText.textContent =
      "Kuis selesai! Skor akhir: " +
      morseQuizScore + " dari " +
      morseQuizQuestions.length;

    morseQuizFeedback.textContent =
      "Terima kasih sudah berlatih kode Morse!";

    morseAnswerButtons.forEach(button => {
      button.disabled = true;
    });

    morseNextQuestion.disabled = true;
    morseNextQuestion.textContent = "Kuis Selesai";
    return;
  }

  showMorseQuizQuestion();
});

showMorseQuizQuestion();
// STEP 166 - KUIS MORSE LANJUTAN
const morseAdvancedQuestions = [
  {
    question: "Apa kode Morse untuk angka 5?",
    answer: ".....",
    options: [".....", "----.", "..---", "-...."]
  },
  {
    question: "Apa kode Morse untuk angka 8?",
    answer: "---..",
    options: ["---..", "...--", "----.", "-----"]
  },
  {
    question: "Apa kode Morse untuk huruf C?",
    answer: "-.-.",
    options: ["-.-.", ".-.", "--.", "-..."]
  },
  {
    question: "Apa kode Morse untuk huruf M?",
    answer: "--",
    options: ["--", "---", ".-", "-."]
  },
  {
    question: "Apa kode Morse untuk angka 9?",
    answer: "----.",
    options: ["-----", "----.", ".----", "..---"]
  }
];

let morseAdvancedIndex = 0;
let morseAdvancedScore = 0;
let morseAdvancedAnswered = false;

const advancedQuestionText =
  document.getElementById("morse-advanced-question-text");

const advancedFeedback =
  document.getElementById("morse-advanced-feedback");

const advancedScoreDisplay =
  document.getElementById("morse-advanced-score");

const advancedNextButton =
  document.getElementById("morse-advanced-next");

const advancedAnswerButtons =
  document.querySelectorAll(".morse-advanced-answer");

function showMorseAdvancedQuestion() {
  const question = morseAdvancedQuestions[morseAdvancedIndex];

  advancedQuestionText.textContent = question.question;
  advancedFeedback.textContent = "";
  morseAdvancedAnswered = false;

  question.options.forEach((option, index) => {
    advancedAnswerButtons[index].textContent = option;
    advancedAnswerButtons[index].dataset.answer = option;
    advancedAnswerButtons[index].disabled = false;
  });

  advancedScoreDisplay.textContent =
    `Skor: ${morseAdvancedScore}`;
}

advancedAnswerButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (morseAdvancedAnswered) return;

    morseAdvancedAnswered = true;

    const correct =
      button.dataset.answer ===
      morseAdvancedQuestions[morseAdvancedIndex].answer;

    if (correct) {
      morseAdvancedScore++;
      advancedFeedback.textContent = "Benar! Jawaban tepat!";
    } else {
      advancedFeedback.textContent =
        "Belum tepat. Jawaban benar: " +
        morseAdvancedQuestions[morseAdvancedIndex].answer;
    }

    advancedAnswerButtons.forEach(item => {
      item.disabled = true;
    });

    advancedScoreDisplay.textContent =
      `Skor: ${morseAdvancedScore}`;
  });
});

advancedNextButton.addEventListener("click", () => {
  morseAdvancedIndex++;

  if (morseAdvancedIndex >= morseAdvancedQuestions.length) {
    advancedQuestionText.textContent =
      "Kuis selesai! Skor akhir: " +
      morseAdvancedScore + " dari " +
      morseAdvancedQuestions.length;

    advancedFeedback.textContent =
      "Kamu telah menyelesaikan kuis Morse lanjutan!";

    advancedAnswerButtons.forEach(button => {
      button.disabled = true;
    });

    advancedNextButton.disabled = true;
    advancedNextButton.textContent = "Kuis Selesai";
    return;
  }

  showMorseAdvancedQuestion();
});

showMorseAdvancedQuestion();
// STEP 167 - TANTANGAN TERJEMAH MORSE
const morseTranslationChallenges = [
  { code: "... --- ...", answer: "SOS" },
  { code: ".- -. -..", answer: "AND" },
  { code: "-.-. .- -", answer: "CAT" },
  { code: "-.. --- --.", answer: "DOG" },
  { code: "-.-. --- -.. .", answer: "CODE" }
];

let morseChallengeIndex = 0;
let morseChallengeScore = 0;
let morseChallengeChecked = false;

const challengeCode =
  document.getElementById("morse-challenge-code");

const challengeInput =
  document.getElementById("morse-challenge-input");

const challengeCheck =
  document.getElementById("morse-challenge-check");

const challengeNext =
  document.getElementById("morse-challenge-next");

const challengeFeedback =
  document.getElementById("morse-challenge-feedback");

const challengeScore =
  document.getElementById("morse-challenge-score");

function showMorseChallenge() {
  const item = morseTranslationChallenges[morseChallengeIndex];

  challengeCode.textContent = item.code;
  challengeInput.value = "";
  challengeInput.disabled = false;
  challengeCheck.disabled = false;
  challengeFeedback.textContent = "";
  morseChallengeChecked = false;

  challengeScore.textContent =
    `Skor: ${morseChallengeScore}`;
}

challengeCheck.addEventListener("click", () => {
  if (morseChallengeChecked) return;

  const userAnswer = challengeInput.value.trim().toUpperCase();
  const correctAnswer =
    morseTranslationChallenges[morseChallengeIndex].answer;

  if (!userAnswer) {
    challengeFeedback.textContent =
      "Masukkan jawaban terlebih dahulu.";
    return;
  }

  morseChallengeChecked = true;

  if (userAnswer === correctAnswer) {
    morseChallengeScore++;
    challengeFeedback.textContent = "Benar! Hebat!";
  } else {
    challengeFeedback.textContent =
      `Belum tepat. Jawaban: ${correctAnswer}`;
  }

  challengeInput.disabled = true;
  challengeCheck.disabled = true;

  challengeScore.textContent =
    `Skor: ${morseChallengeScore}`;
});

challengeNext.addEventListener("click", () => {
  morseChallengeIndex++;

  if (morseChallengeIndex >= morseTranslationChallenges.length) {
    challengeCode.textContent = "TANTANGAN SELESAI";
    challengeInput.value = "";
    challengeInput.disabled = true;
    challengeCheck.disabled = true;
    challengeNext.disabled = true;

    challengeFeedback.textContent =
      `Skor akhir: ${morseChallengeScore} dari ${morseTranslationChallenges.length}`;

    return;
  }

  showMorseChallenge();
});

showMorseChallenge();
// STEP 168 - TANTANGAN MENULIS MORSE
const morseWritingChallenges = [
  { word: "PRAMUKA", answer: ".--. .-. .- -- ..- -.- .-" },
  { word: "REGU", answer: ".-. . --. ..-" },
  { word: "TUNAS", answer: "- ..- -. .- ..." },
  { word: "BANGSA", answer: "-... .- -. --. ... .-" },
  { word: "JATIM", answer: ".--- .- - .. --" }
];

let morseWritingIndex = 0;
let morseWritingScore = 0;
let morseWritingChecked = false;

const writingWord =
  document.getElementById("morse-writing-word");

const writingInput =
  document.getElementById("morse-writing-input");

const writingCheck =
  document.getElementById("morse-writing-check");

const writingNext =
  document.getElementById("morse-writing-next");

const writingFeedback =
  document.getElementById("morse-writing-feedback");

const writingScore =
  document.getElementById("morse-writing-score");

function showMorseWritingChallenge() {
  const item = morseWritingChallenges[morseWritingIndex];

  writingWord.textContent = item.word;
  writingInput.value = "";
  writingInput.disabled = false;
  writingCheck.disabled = false;
  writingFeedback.textContent = "";
  morseWritingChecked = false;
}

writingCheck.addEventListener("click", () => {
  if (morseWritingChecked) return;

  const userAnswer = writingInput.value
    .trim()
    .replace(/\s+/g, " ");

  const correctAnswer =
    morseWritingChallenges[morseWritingIndex].answer;

  if (!userAnswer) {
    writingFeedback.textContent =
      "Masukkan kode Morse terlebih dahulu.";
    return;
  }

  morseWritingChecked = true;

  if (userAnswer === correctAnswer) {
    morseWritingScore++;
    writingFeedback.textContent = "Benar! Kode Morse tepat!";
  } else {
    writingFeedback.textContent =
      "Belum tepat. Jawaban: " + correctAnswer;
  }

  writingInput.disabled = true;
  writingCheck.disabled = true;

  writingScore.textContent =
    `Skor: ${morseWritingScore}`;
});

writingNext.addEventListener("click", () => {
  morseWritingIndex++;

  if (morseWritingIndex >= morseWritingChallenges.length) {
    writingWord.textContent = "TANTANGAN SELESAI";
    writingInput.disabled = true;
    writingCheck.disabled = true;
    writingNext.disabled = true;

    writingFeedback.textContent =
      `Skor akhir: ${morseWritingScore} dari ${morseWritingChallenges.length}`;
    return;
  }

  showMorseWritingChallenge();
});

showMorseWritingChallenge();
// STEP 169 - REKAP NILAI MORSE
const morseEvaluationButton =
  document.getElementById("morse-evaluation-button");

function updateMorseEvaluation() {
  const basic = morseQuizScore;
  const advanced = morseAdvancedScore;
  const translation = morseChallengeScore;
  const writing = morseWritingScore;

  const total = basic + advanced + translation + writing;

  document.getElementById("morse-result-basic").textContent =
    `${basic} / 5`;

  document.getElementById("morse-result-advanced").textContent =
    `${advanced} / 5`;

  document.getElementById("morse-result-translation").textContent =
    `${translation} / 5`;

  document.getElementById("morse-result-writing").textContent =
    `${writing} / 5`;

  document.getElementById("morse-result-total").textContent =
    `${total} / 20`;

  let message = "Terus berlatih kode Morse!";

  if (total === 20) {
    message = "Luar biasa! Semua latihan berhasil diselesaikan!";
  } else if (total >= 15) {
    message = "Bagus! Pemahaman Morse kamu semakin baik.";
  } else if (total >= 10) {
    message = "Cukup baik. Terus tingkatkan latihanmu.";
  }

  document.getElementById("morse-result-message").textContent =
    message;
}

morseEvaluationButton.addEventListener(
  "click",
  updateMorseEvaluation
);
// STEP 182 - SIMULASI GERAKAN SEMAPHORE

function moveSemaphore(direction) {
  const leftArm = document.getElementById("movement-left");
  const rightArm = document.getElementById("movement-right");
  const status = document.getElementById("movement-status");

  if (!leftArm || !rightArm || !status) return;

  if (direction === "left") {
    leftArm.style.transform = "rotate(-65deg)";
    rightArm.style.transform = "rotate(25deg)";
    status.textContent = "Gerakan ke kiri";
  }

  else if (direction === "right") {
    leftArm.style.transform = "rotate(-25deg)";
    rightArm.style.transform = "rotate(65deg)";
    status.textContent = "Gerakan ke kanan";
  }

  else {
    leftArm.style.transform = "rotate(-25deg)";
    rightArm.style.transform = "rotate(25deg)";
    status.textContent = "Posisi awal";
  }
}
// STEP 183 - PENGATUR KECEPATAN SEMAPHORE

const semaphoreSpeed = document.getElementById("semaphore-speed");
const semaphoreSpeedValue = document.getElementById(
  "semaphore-speed-value"
);

function updateSemaphoreSpeed() {
  if (!semaphoreSpeed || !semaphoreSpeedValue) return;

  const speed = Number(semaphoreSpeed.value);

  semaphoreSpeedValue.textContent = speed;

  const duration = 1.1 - (speed - 1) * 0.1;

  document.querySelectorAll(
    ".semaphore-movement .movement-arm"
  ).forEach(arm => {
    arm.style.transitionDuration = duration + "s";
  });
}

if (semaphoreSpeed) {
  semaphoreSpeed.addEventListener(
    "input",
    updateSemaphoreSpeed
  );

  updateSemaphoreSpeed();
}
// STEP 187 - PENERJEMAH TEKS SEMAPHORE

function translateSemaphore() {
  const input = document.getElementById("semaphore-input");
  const result = document.getElementById("semaphore-result");

  const message = input.value.trim().toUpperCase();

  if (!message) {
    result.innerHTML = "<p>Masukkan pesan terlebih dahulu.</p>";
    return;
  }

  result.innerHTML = "";

  [...message].forEach((character) => {
    const letter = document.createElement("div");

    letter.className = "semaphore-result-letter";
    letter.textContent = character === " " ? "—" : character;

    result.appendChild(letter);
  });
}
// STEP 188 - PENILAIAN KUIS SEMAPHORE

function checkSemaphoreQuiz() {
  const answers = {
    sq1: "a",
    sq2: "b",
    sq3: "a",
    sq4: "b",
    sq5: "c"
  };

  let score = 0;
  let unanswered = 0;

  for (const question in answers) {
    const selected = document.querySelector(
      `input[name="${question}"]:checked`
    );

    if (!selected) {
      unanswered++;
    } else if (selected.value === answers[question]) {
      score++;
    }
  }

  const result = document.getElementById(
    "semaphore-quiz-result"
  );

  if (unanswered > 0) {
    result.textContent =
      `Masih ada ${unanswered} soal yang belum dijawab.`;
    return;
  }

  const finalScore = score * 20;

  result.innerHTML = `
    Hasil Kuis: ${score} dari 5 benar<br>
    Nilai: ${finalScore}<br>
    ${
      finalScore >= 80
        ? "Hebat! Pemahaman semaphore kamu sudah baik."
        : "Tetap semangat! Pelajari kembali materi semaphore."
    }
  `;
}
// STEP 197 - KUIS TALI-TEMALI

(() => {
  const quiz = document.getElementById("rope-quiz");

  if (!quiz || quiz.dataset.initialized === "true") return;
  quiz.dataset.initialized = "true";

  const questions = [
    {
      question: "Apa yang dimaksud dengan simpul?",
      options: [
        "Cara menghubungkan atau membentuk ikatan pada tali",
        "Alat untuk memotong tongkat",
        "Jenis perlengkapan berkemah",
        "Cara membaca peta"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi utama ikatan dalam Pramuka?",
      options: [
        "Mengukur panjang tali",
        "Menghubungkan dua atau lebih tongkat",
        "Menghitung jumlah anggota",
        "Menentukan arah mata angin"
      ],
      answer: 1
    },
    {
      question: "Ikatan palang umumnya digunakan untuk menghubungkan tongkat yang...",
      options: [
        "Sejajar",
        "Melengkung",
        "Bersilangan membentuk sudut siku-siku",
        "Terpisah jauh"
      ],
      answer: 2
    },
    {
      question: "Manakah yang termasuk jenis bahan tali?",
      options: [
        "Kertas",
        "Kaca",
        "Keramik",
        "Nilon"
      ],
      answer: 3
    },
    {
      question: "Apa yang harus dilakukan saat latihan tali-temali?",
      options: [
        "Menggunakan tali untuk menopang tubuh",
        "Mengikuti arahan pembina dan mengutamakan keselamatan",
        "Mencoba semua ikatan pada beban berat",
        "Berlatih tanpa pengawasan"
      ],
      answer: 1
    }
  ];

  const number = document.getElementById("rope-quiz-number");
  const scoreText = document.getElementById("rope-quiz-score");
  const fill = document.getElementById("rope-quiz-fill");
  const questionText = document.getElementById("rope-quiz-question");
  const optionsBox = document.getElementById("rope-quiz-options");
  const feedback = document.getElementById("rope-quiz-feedback");
  const nextButton = document.getElementById("rope-quiz-next");
  const restartButton = document.getElementById("rope-quiz-restart");

  let current = 0;
  let score = 0;
  let answered = false;

  function showQuestion() {
    const item = questions[current];

    answered = false;
    number.textContent = `Soal ${current + 1} dari ${questions.length}`;
    scoreText.textContent = `Skor: ${score}`;
    fill.style.width = `${((current + 1) / questions.length) * 100}%`;
    questionText.textContent = item.question;
    feedback.textContent = "";
    optionsBox.innerHTML = "";
    nextButton.disabled = true;
    nextButton.hidden = false;
    restartButton.hidden = true;

    item.options.forEach((option, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "rope-quiz-option";
      button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

      button.addEventListener("click", () => {
        if (answered) return;

        answered = true;

        const buttons = optionsBox.querySelectorAll("button");

        buttons.forEach((btn, i) => {
          btn.disabled = true;

          if (i === item.answer) {
            btn.classList.add("correct");
          }
        });

        if (index === item.answer) {
          score++;
          feedback.textContent = "Benar! Jawabanmu tepat.";
        } else {
          button.classList.add("wrong");
          feedback.textContent =
            `Belum tepat. Jawaban yang benar: ${item.options[item.answer]}.`;
        }

        scoreText.textContent = `Skor: ${score}`;
        nextButton.disabled = false;
      });

      optionsBox.appendChild(button);
    });
  }

  function finishQuiz() {
    number.textContent = "Kuis selesai";
    scoreText.textContent = `Skor: ${score}`;
    fill.style.width = "100%";
    questionText.textContent =
      `Kamu memperoleh ${score} dari ${questions.length} jawaban benar!`;

    optionsBox.innerHTML = "";
    feedback.textContent =
      score === questions.length
        ? "Hebat! Semua jawabanmu benar."
        : "Tetap semangat! Pelajari kembali materi dan coba lagi.";

    nextButton.hidden = true;
    restartButton.hidden = false;
  }

  nextButton.addEventListener("click", () => {
    if (!answered) return;

    current++;

    if (current < questions.length) {
      showQuestion();
    } else {
      finishQuiz();
    }
  });

  restartButton.addEventListener("click", () => {
    current = 0;
    score = 0;
    showQuestion();
  });

  showQuestion();
})();
// STEP 205 - KUIS PENJELAJAHAN
(() => {
  const quiz = document.getElementById("exploration-quiz");

  if (!quiz || quiz.dataset.initialized === "true") return;
  quiz.dataset.initialized = "true";

  const questions = [
    {
      question: "Apa tujuan utama kegiatan penjelajahan dalam Pramuka?",
      options: [
        "Mengenal lingkungan dan melatih kemandirian",
        "Berlomba tanpa aturan",
        "Menghindari kerja sama",
        "Berjalan tanpa tujuan"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi kompas dalam kegiatan penjelajahan?",
      options: [
        "Mengukur suhu",
        "Menentukan arah",
        "Mengukur berat barang",
        "Menentukan waktu"
      ],
      answer: 1
    },
    {
      question: "Apa kegunaan peta dalam penjelajahan?",
      options: [
        "Sebagai hiasan",
        "Untuk mencatat nilai",
        "Membantu memahami lokasi dan jalur",
        "Menggantikan pembina"
      ],
      answer: 2
    },
    {
      question: "Apa yang harus dilakukan saat penjelajahan bersama regu?",
      options: [
        "Berjalan sendiri",
        "Meninggalkan kelompok",
        "Mengabaikan arahan pembina",
        "Tetap bersama kelompok"
      ],
      answer: 3
    },
    {
      question: "Siapa yang harus mendampingi kegiatan penjelajahan anggota Pramuka?",
      options: [
        "Tidak perlu pendamping",
        "Pembina atau orang dewasa yang bertanggung jawab",
        "Orang yang tidak dikenal",
        "Hanya peserta yang paling muda"
      ],
      answer: 1
    }
  ];

  const questionEl = document.getElementById("exploration-quiz-question");
  const optionsEl = document.getElementById("exploration-quiz-options");
  const numberEl = document.getElementById("exploration-quiz-number");
  const scoreEl = document.getElementById("exploration-quiz-score");
  const progressEl = document.getElementById("exploration-quiz-progress-bar");
  const feedbackEl = document.getElementById("exploration-quiz-feedback");
  const nextButton = document.getElementById("exploration-quiz-next");
  const resultEl = document.getElementById("exploration-quiz-result");
  const finalScoreEl = document.getElementById("exploration-quiz-final-score");
  const messageEl = document.getElementById("exploration-quiz-message");
  const restartButton = document.getElementById("exploration-quiz-restart");
  const contentEl = quiz.querySelector(".exploration-quiz-content");

  if (
    !questionEl || !optionsEl || !numberEl || !scoreEl ||
    !progressEl || !feedbackEl || !nextButton || !resultEl ||
    !finalScoreEl || !messageEl || !restartButton || !contentEl
  ) return;

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function showQuestion() {
    const item = questions[currentQuestion];
    answered = false;

    questionEl.textContent = item.question;
    numberEl.textContent =
      `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;
    scoreEl.textContent = `Skor: ${score}`;
    progressEl.style.width =
      `${((currentQuestion + 1) / questions.length) * 100}%`;

    feedbackEl.textContent = "";
    nextButton.disabled = true;
    nextButton.textContent =
      currentQuestion === questions.length - 1
        ? "Lihat Hasil"
        : "Pertanyaan Berikutnya";

    optionsEl.innerHTML = "";

    item.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "exploration-quiz-option";
      button.textContent = option;

      button.addEventListener("click", () => {
        if (answered) return;
        answered = true;

        const correct = index === item.answer;

        if (correct) {
          score += 20;
          feedbackEl.textContent = "Benar! Jawabanmu tepat.";
          feedbackEl.style.color = "#27834F";
          button.classList.add("correct");
        } else {
          feedbackEl.textContent =
            `Belum tepat. Jawaban yang benar: ${item.options[item.answer]}`;
          feedbackEl.style.color = "#B95735";
          button.classList.add("wrong");
          optionsEl.children[item.answer].classList.add("correct");
        }

        Array.from(optionsEl.children).forEach(optionButton => {
          optionButton.disabled = true;
        });

        scoreEl.textContent = `Skor: ${score}`;
        nextButton.disabled = false;
      });

      optionsEl.appendChild(button);
    });
  }

  function showResult() {
    contentEl.hidden = true;
    resultEl.hidden = false;

    finalScoreEl.textContent =
      `Nilai akhir kamu: ${score} dari 100`;

    if (score === 100) {
      messageEl.textContent =
        "Luar biasa! Semua jawabanmu benar.";
    } else if (score >= 60) {
      messageEl.textContent =
        "Bagus! Terus tingkatkan pengetahuan penjelajahanmu.";
    } else {
      messageEl.textContent =
        "Tetap semangat! Pelajari kembali materi dan coba lagi.";
    }

    progressEl.style.width = "100%";
    numberEl.textContent = "Kuis selesai";
  }

  nextButton.addEventListener("click", () => {
    if (!answered) return;

    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      showResult();
    }
  });

  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultEl.hidden = true;
    contentEl.hidden = false;
    showQuestion();
  });

  showQuestion();
})();