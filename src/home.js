const homeText = {
    title: "Fancy Restaurant",
    subtitle: "Only the best for the fancy!",
    heroListItem1: "Gourmet food",
    heroListItem2: "Perfect ambiance",
    heroListItem3: "Impeccable service",
    heroListItem4: "Lasting memories",
    quote: "'There is no better place to be for a dinner.'",
    critic: "- Food Critic",
    hours: "Hours",
    hourListItem1: "Monday - 4pm-12am",
    hourListItem2: "Tuesday - 4pm-12am",
    hourListItem3: "Wednesday - 4pm-12am",
    hourListItem4: "Thursday - 4pm-12am",
    hourListItem5: "Friday - 4pm-12am",
    hourListItem6: "Saturday - 4pm-12am",
    hourListItem7: "Sunday - 4pm-12am",
    address: "123 Fancy Street Fake Town, State 12345"
};

const createHomeContent = () => {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = homeText.title;

    const subtitle = document.createElement("p");
    subtitle.textContent = homeText.subtitle;

    const hero = document.createElement("div");
    hero.classList.add("hero");
    const heroList = document.createElement("ul");
    for (let i = 1; i <= 4; i++) {
        const li = document.createElement("li");
        const em = document.createElement("em");
        em.textContent = homeText["heroListItem" + i];
        li.append(em);
        heroList.append(li);
    }
    hero.append(heroList);

    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("quote-container")
    const quote = document.createElement("p");
    quote.classList.add("quote");
    quote.textContent = homeText.quote;
    const critic = document.createElement("p");
    critic.classList.add("critic");
    critic.textContent = homeText.critic;
    quoteContainer.append(quote, critic);

    const hours = document.createElement("div");
    hours.classList.add("hours");
    const hoursTitle = document.createElement("p");
    hoursTitle.textContent = homeText.hours;
    const hoursList = document.createElement("ul");
    for (let i = 1; i <= 7; i++) {
        const li = document.createElement("li");
        li.textContent = homeText["hourListItem" + i];
        hoursList.append(li);
    }
    hours.append(hoursList);

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("address-container");
    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = homeText.address;
    addressContainer.append(address);

    content.append(title, subtitle, hero, quoteContainer, hours, addressContainer);
}


export default createHomeContent;