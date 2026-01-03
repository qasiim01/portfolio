const text = "Code, Coffee, and Creativity - That's How I Build!";
let index = 0;
function type() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
type();

// dark theme
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

//  Immediately apply theme from localStorage
 (function() {
  const savedTheme = localStorage.getItem('theme');
   if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }
})();

// Toggle and save preference
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
