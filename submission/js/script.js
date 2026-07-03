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
    li.innerHTML = `<strong>${service.name}</strong> - ${service.description}`;
    servicesList.appendChild(li);
});

// Feature 3 : Wishlist Functionality
//const wishlistInput = document.getElementById('wishlist-input');
//const wishlistAddBtn = document.getElementById('wishlist-add-btn');
//const wishlist = document.getElementById('wishlist');

//wishlistAddBtn.addEventListener('click', function() {
    //const itemText  = wishlistInput.value.trim();
    //if (itemText === "") {
     //   return; // Do not add empty items
    //}

    //Create a new list item and append it to the wishlist
    //const li = document.createElement('li');

    //Create a span to hold ths text
    //const span = document.createElement('span');
    //span.textContent = itemText;

    //Create a remove button
    //const removeBtn = document.createElement('button');
    //removeBtn.textContent = "Remove";
    //removeBtn.classList.add('remove-btn');

    //removeBtn.addEventListener('click', function() {
     //   li.remove();
    //});

    //li.appendChild(removeBtn);
    //li.appendChild(span);


    //wishlist.appendChild(li);
  //  wishlistInput.value = ""; // Clear the input field after adding     
//});

//feature 4 : Form handling and validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission  

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    // Basic validation
    if (nameValue === "" || emailValue === "" || messageValue === "") {
        formFeedback.textContent = "Please fill in all fields.";
        formFeedback.className = "error";
        formFeedback.style.color = "red";
        return;
    }
    formFeedback.textContent = "Message sent successfully!";
    formFeedback.className = "success";
    formFeedback.style.color = "green";
    contactForm.reset();
    return;
});

// Feature 5 : local storage persistence for wishlist items
const wishlistInput = document.getElementById('wishlist-input');
const wishlistAddBtn = document.getElementById('wishlist-add-btn');
const wishlist = document.getElementById('wishlist');

// Load wishlist items from local storage on page load or start with an empty array if none exist
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

//Renders one <li> for  a given item text
function renderWishlistItem(itemText) {
    const li = document.createElement('li');

    //Create a span to hold ths text
    const span = document.createElement('span');
    span.textContent = itemText;

    //Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');

    removeBtn.addEventListener('click', function() {
        li.remove();

        // Remove the item from the wishlistItems array then resave to local storage
        wishlistItems = wishlistItems.filter(function(item) {
            return item !== itemText;
        });

        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        
    });

    li.appendChild(removeBtn);
    li.appendChild(span);

    wishlist.appendChild(li);
}

// Render all wishlist items on page load
wishlistItems.forEach(function(itemText) {
    renderWishlistItem(itemText);
});

wishlistAddBtn.addEventListener('click', function() {
    const itemText  = wishlistInput.value.trim();
    if (itemText === "") {
        return; // Do not add empty items
    }

    // Add the item to the wishlistItems array and update local storage
    wishlistItems.push(itemText);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

    // Render the new item
    renderWishlistItem(itemText);

    // Clear the input field
    wishlistInput.value = "";
});