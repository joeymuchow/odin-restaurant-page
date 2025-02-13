const contactText = {
    title: "Contact us",
    phoneMessage: "Call us to make your reservation today!",
    phone: "123-456-7890",
    emailMessage: "For questions about careers at Fancy Restaurant, please send an email to:",
    email: "fancyrestaurant@fakeemail.com"
};

const createContactContent = () => {
    const content = document.querySelector("#content");
    //clear content before adding new elements
    content.replaceChildren();

    const title = document.createElement("h1");
    title.textContent = contactText.title;

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const phoneMessage = document.createElement("p");
    phoneMessage.textContent = contactText.phoneMessage;

    const phone = document.createElement("p");
    phone.textContent = contactText.phone;

    const emailMessage = document.createElement("p");
    emailMessage.textContent = contactText.emailMessage;

    const email = document.createElement("p");
    email.textContent = contactText.email;

    contactContainer.append(phoneMessage, phone, emailMessage, email);

    content.append(title, contactContainer);
}

export default createContactContent;