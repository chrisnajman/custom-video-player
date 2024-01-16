# Custom Video Player

This project showcases a custom-built video player created using HTML and JavaScript. It provides a more tailored user experience compared to standard video players by implementing custom controls and functionalities.

- [Features](#features)
  - [1. Custom Controls](#1-custom-controls)
  - [2. Progress Bar](#2-progress-bar)
  - [3. Play / Pause Functionality](#3-play--pause-functionality)
  - [4. Time Display](#4-time-display)
  - [5. Skip Functionality](#5-skip-functionality)
  - [6. Volume Controls](#6-volume-controls)
  - [7. Full Screen Mode](#7-full-screen-mode)
  - [8. Closed Captions](#8-closed-captions)
  - [9. Transcript](#9-transcript)
- [Accessibility](#accessibility)
  - [Screenreader-Friendly Labels and ARIA Attributes](#screenreader-friendly-labels-and-aria-attributes)
  - [Keyboard Navigation](#keyboard-navigation)
  - [WAVE Web Accessibility Evaluation Tools Report](#wave-web-accessibility-evaluation-tools-report)
- [Bug Report: Volume Slider and Mute Button Icon Sync Issue](#bug-report-volume-slider-and-mute-button-icon-sync-issue)
  - [Description](#description)
  - [Resolution](#resolution)
- [Testing](#testing)

---

## Features

### 1. Custom Controls

- The default video controls are hidden to showcase a custom-designed control interface for an improved user experience.

### 2. Progress Bar

- A customized progress bar indicates the video's playback progress visually.
- Users can click within the progress bar to navigate to specific video timepoints.
- Keyboard navigation allows users to use the Shift key along with the left and right arrow keys for skipping backward and forward.

### 3. Play / Pause Functionality

- The player allows users to toggle between play and pause states using a dedicated button or by clicking on the video itself.
- The play/pause button visually updates and displays the appropriate state.

### 4. Time Display

- Displays the current time and total duration of the video in a user-friendly format (e.g., "00:00").

### 5. Skip Functionality

- Offers buttons to skip backward and forward by specific time intervals (e.g., 10 seconds, 25 seconds).

### 6. Volume Controls

- Provides volume adjustment through a slider interface.
- Offers a mute/unmute toggle functionality.

### 7. Full Screen Mode

- Allows users to toggle the video player to full screen for an immersive viewing experience.
- Changes the icon and functionality depending on the fullscreen state.

### 8. Closed Captions

- Users can click a button to display closed captions during video playback.

### 9. Transcript

- A `details` element with a `summary` tag is used to provide a transcript of the video.
- Accompanied by JavaScript to manage opening and closing behavior.

## Accessibility

### Screenreader-Friendly Labels and ARIA Attributes

- ARIA attributes (`aria-pressed`, `aria-describedby`, `aria-label`) have been implemented to ensure accessibility for screen readers.
  - Non-visual elements have the `aria-hidden="true"` attribute to hide them from screenreaders.
- Essential controls have descriptive labels for screenreader users.
  - For example, the play/pause button has a visually hidden text label for screen readers: `<span id="playpause-text" class="visually-hidden">Play</span>`.
- Similarly, time indicators have descriptive labels such as `<span class="visually-hidden" id="video-current-time">Current time</span>` and `<span class="visually-hidden" id="video-duration">Video duration</span>`.

### Keyboard Navigation

- The player controls are navigable using keyboard shortcuts for enhanced accessibility.
- Users can interact with the progress bar by clicking inside it or using keyboard navigation with the Shift key and arrow keys (left and right) for seeking backward and forward, respectively.

### WAVE Web Accessibility Evaluation Tools Report

- [Automated accessibility analysis results](https://wave.webaim.org/report#/https://chrisnajman.github.io/custom-video-player/)

---

## Bug Report: Volume Slider and Mute Button Icon Sync Issue

### Description

When the user drags the volume slider to zero while the mute button is still in the mute state, an issue occurs where the mute button icon goes out of sync with the actual mute status of the video player.

### Resolution

This issue is acknowledged and will be addressed in a future version of the application.

---

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

The page has been tested in both browser and device views.
