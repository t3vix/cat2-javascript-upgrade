// Feature 1 : Click to reveal banner caption
const bannerImg = document.getElementById('banner-img');
const bannerCaption = document.getElementById('banner-caption');

bannerImg.addEventListener('click', function() {
  bannerCaption.classList.toggle('hidden');
});
