// ====================
// Reminders Data
// ====================
const reminders = [
  { subject: "Math Homework", date: "2025-09-05", details: "Breathe and school ends", icon: "📘" },
  { subject: "Science Project", date: "2025-09-07", details: "Bring materials for lab", icon: "🔬" },
  { subject: "History Quiz", date: "2025-09-10", details: "Breathe and school ends", icon: "📜" },
  { subject: "English Essay", date: "2025-09-15", details: "Breathe and school ends", icon: "✍️" }
];

// ====================
// Functions
// ====================

// Countdown
function getCountdown(date) {
  const now = new Date();
  const due = new Date(date);
  const diff = due - now;
  if (diff < 0) return "✅ Completed";
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return `⏳ Due in ${days} day${days > 1 ? "s" : ""}`;
}

// Render reminders
function renderReminders() {
  const container = document.getElementById("reminders");
  container.innerHTML = "";
  reminders.forEach(reminder => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${reminder.icon} ${reminder.subject}</h2>
      <p><strong>Due:</strong> ${new Date(reminder.date).toDateString()}</p>
      <p>${reminder.details}</p>
      <p class="countdown">${getCountdown(reminder.date)}</p>
    `;
    container.appendChild(card);
  });
}

// Footer auto-update
document.getElementById("last-updated").textContent =
  "Last updated: " + new Date().toDateString();

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.getElementById("theme-toggle").textContent =
    document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Initial render
renderReminders();
