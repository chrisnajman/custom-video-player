export default function videoPlayer() {
  const video = document.getElementById("video")

  // Hide the default controls
  // ============================
  video.controls = false

  // Progress bar
  // ============================
  const progress = document.getElementById("progress")
  const progressBar = document.getElementById("progress-bar")
  video.addEventListener("loadedmetadata", () => {
    progress.setAttribute("max", video.duration)
  })

  video.addEventListener("timeupdate", () => {
    if (!progress.getAttribute("max")) {
      progress.setAttribute("max", video.duration)
    }
    // Update the progress bar and video's current time
    updateProgressBar()
  })

  // Skip ahead (click inside progress bar)
  progress.addEventListener("click", (e) => {
    const rect = progress.getBoundingClientRect()
    const pos = (e.pageX - rect.left) / progress.offsetWidth
    video.currentTime = pos * video.duration
  })

  // Add an event listener for keyboard input on the progress element
  progress.addEventListener("keydown", (e) => {
    // Check if Shift key is pressed
    if (e.shiftKey) {
      // Shift + ArrowRight: Move forward by a specific time (e.g., 10 seconds)
      if (e.key === "ArrowRight") {
        video.currentTime += 10
      }
      if (e.key === "ArrowLeft") {
        // Shift + ArrowLeft: Move backward by a specific time (e.g., 10 seconds)
        video.currentTime -= 10
      }
      // Update the progress bar and video's current time
      updateProgressBar()
    }
  })

  // Update the progress bar based on the video's current time
  function updateProgressBar() {
    progress.value = video.currentTime
    progressBar.style.width = `${Math.floor(
      (video.currentTime * 100) / video.duration
    )}%`
  }

  // Play / Pause:
  // ============================

  // Button
  const playpause = document.getElementById("playpause")
  const playpauseText = document.getElementById("playpause-text")
  const iconPlay = document.querySelector("[data-play]")
  const iconPause = document.querySelector("[data-pause]")
  playpause.addEventListener("click", playPauseFunc)

  // Video
  const videoWrapper = document.getElementById("video-wrapper")
  videoWrapper.addEventListener("click", playPauseFunc)

  function playPauseFunc() {
    if (video.paused || video.ended) {
      video.play()
    } else {
      video.pause()
    }

    playpauseText.textContent === "Play"
      ? (playpauseText.textContent = "Pause")
      : (playpauseText.textContent = "Play")

    videoWrapper.classList.toggle("paused")
    iconPlay.classList.toggle("hide")
    iconPause.classList.toggle("hide")
  }

  // Timer:
  // ============================
  const videoCurrentTime = document.getElementById("current-time")
  const videoDuration = document.getElementById("duration")
  video.addEventListener("loadedmetadata", () => {
    videoDuration.textContent = formatVideoTime(video.duration)
  })
  video.addEventListener("timeupdate", () => {
    videoCurrentTime.textContent = formatVideoTime(video.currentTime)
  })

  function formatVideoTime(s) {
    let m = Math.floor(s / 60)
    m = m >= 10 ? m : "0" + m
    s = Math.floor(s % 60)
    s = s >= 10 ? s : "0" + s
    return m + ":" + s
  }

  // Skip:
  // ============================
  const skipButtons = document.querySelectorAll("[data-skip]")
  skipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      video.currentTime += parseFloat(button.dataset.skip)
    })
  })

  // Volume:
  // ============================

  // Set video to mute on page load
  video.muted = true

  // Set initial volume level
  video.volume = 0.15

  const btnVolume = document.getElementById("btn-volume")
  const btnVolumeTxt = document.getElementById("btn-volume-text")
  const rangeVolume = document.getElementById("range-volume")

  btnVolume.addEventListener("click", (e) => {
    if (video.volume === 0) {
      video.volume = 0.15 // Set volume to initial value if it was muted
      rangeVolume.value = video.volume // Update range input value
    } else {
      video.muted = !video.muted // Toggle mute/unmute if not at zero
    }
    e.target.classList.toggle("unmute")

    if (btnVolumeTxt.textContent === "Muted") {
      btnVolumeTxt.textContent = "Unmuted"
    } else {
      btnVolumeTxt.textContent = "Muted"
    }
  })

  rangeVolume.addEventListener("change", handleRangeUpdate)
  // rangeVolume.addEventListener("mousemove", handleRangeUpdate)

  function handleRangeUpdate() {
    const volume = parseFloat(rangeVolume.value)
    video[rangeVolume.name] = volume
    if (volume === 0) {
      btnVolume.classList.remove("unmute")
      btnVolumeTxt.textContent = "Muted"
    } else {
      btnVolume.classList.add("unmute")
      btnVolumeTxt.textContent = "Unmuted"
    }
  }

  // Full Screen
  // ============================
  const videoContainer = document.getElementById("videoContainer")
  const fullscreen = document.getElementById("fs")
  const fullscreenText = document.getElementById("fullscreen-text")
  const iconFullscreen = document.querySelector("[data-fullscreen]")
  const iconExitFullscreen = document.querySelector("[data-exit-fullscreen]")
  if (!document?.fullscreenEnabled) {
    fullscreen.style.display = "none"
  }
  fullscreen.addEventListener("click", () => {
    handleFullscreen()
  })
  function handleFullscreen() {
    if (document.fullscreenElement !== null) {
      // The document is in fullscreen mode
      document.exitFullscreen()
      setFullscreenData(false)
      fullscreenText.textContent = "Fullscreen"
    } else {
      // The document is not in fullscreen mode
      videoContainer.requestFullscreen()
      setFullscreenData(true)
      fullscreenText.textContent = "Exit fullscreen"
    }

    iconFullscreen.classList.toggle("hide")
    iconExitFullscreen.classList.toggle("hide")
  }

  document.addEventListener("fullscreenchange", () => {
    setFullscreenData(!!document.fullscreenElement)
  })

  function setFullscreenData(state) {
    videoContainer.setAttribute("data-fullscreen", !!state)
  }
}
