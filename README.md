# CAHNRS News Plugin
v1.1.0
## Overview
This plugin creates custom blocks and other functionality for the [CAHNRS News](https://news.cahnrs.wsu.edu) website.

## Requires
- [WSUWP Plugin Gutenberg](https://github.com/wsuwebteam/wsuwp-plugin-gutenberg)
## Functionality
- Custom Post Types
    - Videos
    - Podcast
    - News Articles
- Video List Gutenberg Block
    - Pulls in list of videos (custom post type) that offers a modal when clicked on. 
    - In the dashboard, user needs to provide video title, description, featured image, and link.
        - Link is stripped of everything except for the video ID
- Custom archive page for videos
- Image size (300x200) used for video featured image
- Archive Post Status
- Cron that will archive News Articles older than 60 days
- Search option for user to include archived posts