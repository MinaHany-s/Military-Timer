const countDownDate = new Date("2027-05-25T00:00:00").getTime();


function setDate() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}
setDate()
setInterval(() => {
    setDate()
}, 1000);


const balloons = ["⏳", "🕰️", "🌙", "⭐", "☁️", "🍂"];
document.addEventListener("click", (e) => {
    for (let i = 0; i < 12; i++) {
        const balloon = document.createElement("div");

        balloon.classList.add("balloon");
        balloon.textContent =
            balloons[Math.floor(Math.random() * balloons.length)];

        balloon.style.left =
            e.clientX + (Math.random() * 100 - 50) + "px";

        balloon.style.top =
            e.clientY + (Math.random() * 100 - 50) + "px";

        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 3000);
    }
});