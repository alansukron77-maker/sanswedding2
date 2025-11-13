function showMenu(id) {
  document.querySelectorAll(".menu").forEach(m => m.style.display = "none");
  document.getElementById("menu-" + id).style.display = "block";
}
async function loadHero() {
  let data = await fetch("../data/content.json").then(r => r.json());

  document.getElementById("hero_judul").value = data.hero.judul;
  document.getElementById("hero_pasangan").value = data.hero.pasangan;
  document.getElementById("hero_tanggal").value = data.hero.tanggal;
  document.getElementById("hero_bg").value = data.hero.background;
}

window.onload = loadHero;

async function saveHero() {

  const newData = {
    hero: {
      judul: document.getElementById("hero_judul").value,
      pasangan: document.getElementById("hero_pasangan").value,
      tanggal: document.getElementById("hero_tanggal").value,
      background: document.getElementById("hero_bg").value
    }
  };

  await fetch("save.php", {
    method: "POST",
    body: JSON.stringify(newData)
  });

  alert("Hero berhasil disimpan!");
}

