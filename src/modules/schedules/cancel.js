import { schedulesDay } from "./load";
import { scheduleCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll(".period");

// biome-ignore lint/complexity/noForEach: <explanation>
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");

      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});
