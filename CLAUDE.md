# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for "Accel" premium earphones, showcasing product images in a carousel and featuring The IDOLM@STER music gallery. The site is built with vanilla HTML, CSS, and JavaScript for deployment on GitHub Pages.

## Brand Guidelines

- **Primary Color**: #4D8BFF (bright blue)
- **Secondary Color**: #FE9E64 (orange)
- **Accent Grey**: #575757
- **Standard Colors**: Black and white are welcomed
- **Primary Font**: Noto Sans SC

## Architecture

### File Structure
- `index.html` - Main page with product carousel and music showcase
- `styles.css` - Responsive CSS with mobile-first design
- `script.js` - Carousel functionality and audio controls
- `gallery/` - Accel product images (5 photos: main, front, rear, cable, plug views)
- `music/` - Song folders with album art and audio files
- `logo.png` - Mythmaker logo in root directory

### Key Components

**Product Carousel**: Auto-advancing image gallery with:
- Navigation arrows and dot indicators
- Keyboard and touch controls
- 5-second auto-advance timer

**Music Gallery**: Grid layout displaying:
- Album artwork from each song folder
- HTML5 audio players with FLAC source files
- Automatic pause of other tracks when one plays

### Music Folder Convention
Each song in `music/` follows this structure:
```
music/[song-name]/
├── albumart.jpg
└── [audio-file].flac
```

## Development Commands

This is a static site with no build process. Open `index.html` directly in a browser for local development.

For GitHub Pages deployment:
1. Push to main branch
2. Enable Pages in repository settings
3. Site will be available at `https://username.github.io/repository-name`

## Audio Compatibility Notes

FLAC files may not play in all browsers. For better web compatibility, consider converting to MP3 format using:
```bash
ffmpeg -i "input.flac" -t 30 -codec:a libmp3lame -b:a 128k "output.mp3"
```

## Design Principles

- Mobile-responsive design with CSS Grid and Flexbox
- Gradient backgrounds and glassmorphism effects
- Smooth animations and hover states
- Accessible audio controls that prevent simultaneous playback