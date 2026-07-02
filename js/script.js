// Feature 1 : Click to reveal banner caption
console.log("Script loaded successfully.");// to verify that the script is linked correctly and running

const bannerImg = document.getElementById('banner-img');
const bannerCaption = document.getElementById('banner-caption');

bannerImg.addEventListener('click', function() {
  bannerCaption.classList.toggle('hidden');
});

//Feature 2 :Loop Rendered Dynamic Content
const services = [
  { name: "Web Development", description: "Custom websites built for performance and growth." },
  { name: "Mobile App Development", description: "Native and cross-platform apps for iOS and Android." },
  { name: "UI/UX Design", description: "User-centered design that turns visitors into customers." },
  { name: "Cloud Solutions", description: "Scalable infrastructure hosted on modern cloud platforms." },
  { name: "Software Consulting", description: "Strategic guidance for your technical roadmap." },
  { name: "Maintenance and Support", description: "Ongoing updates and reliability for your systems." },
  { name: "Custom Software Development", description: "Bespoke tools built around your workflow." },
  { name: "Digital Marketing", description: "Campaigns that get your product in front of the right people." },
  { name: "SEO Optimization", description: "Higher visibility, better rankings, more organic traffic." },
  { name: "Content Creation", description: "Copy and media that communicate your brand clearly." },
  { name: "AI Integration", description: "Practical AI features woven into your existing product." },
  { name: "Data Analytics", description: "Turning your raw data into actionable business insight." },
  { name: "Cybersecurity", description: "Protecting your systems and your customers' trust." },
  { name: "Blockchain Development", description: "Decentralized solutions built on proven protocols." },
  { name: "Internet of Things (IoT)", description: "Connected hardware and software working together." }
];

const servicesList = document.getElementById('services-list');
services.forEach(service => {
    const li =  document.createElement('li');
    li.innerHTML = `<strong>${service.name}</strong>`;
    servicesList.appendChild(li);
});