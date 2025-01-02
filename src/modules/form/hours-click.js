export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  // biome-ignore lint/complexity/noForEach: <explanation>
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      selected.target.classList.add("hour-selected");
    });
  });
}
