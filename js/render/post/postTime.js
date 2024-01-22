export function postTime(data, parent) {
  const time = document.createElement("time");
  time.setAttribute("datetime", data.date);
  time.classList.add("card-time");
  time.textContent = data.date.replace("T", " ");
  parent.append(time);
}
