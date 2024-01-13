export default function videoTranscript() {
  const transcript = document.getElementById("transcript")
  const summary = document.getElementById("summary")
  const summaryStatus = document.getElementById("summary-status")

  transcript.addEventListener("toggle", () => {
    if (transcript.open) {
      summary.setAttribute("aria-expanded", "true")
      summaryStatus.textContent = "Close"
    } else {
      summary.setAttribute("aria-expanded", "false")
      summaryStatus.textContent = "Open"
    }
  })
}
