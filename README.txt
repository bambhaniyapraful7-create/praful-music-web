PRAFUL BAMBHANIYA KI MUSIC WEB — FREE PUBLIC STARTER

WHAT THIS VERSION DOES
- Public website. No visitor login and no admin panel.
- Search Bollywood songs through YouTube Data API v3.
- Show YouTube search results with thumbnails and song/channel names.
- Play selected videos in an official YouTube embedded player on the same website.
- Quick searches for new Bollywood, old classics and popular singers.
- Responsive colorful design.

IMPORTANT: API KEY SETUP IS REQUIRED FOR AUTOMATIC SEARCH
Google's YouTube Data API v3 has a free quota allocation, but the API key must be created by you.
1. Open https://console.cloud.google.com/
2. Create/select a Google Cloud project.
3. Enable "YouTube Data API v3".
4. Go to APIs & Services > Credentials > Create Credentials > API key.
5. Restrict the key to YouTube Data API v3 and, after deployment, your website's HTTP referrers/domain.
6. Open config.js and replace PASTE_YOUTUBE_DATA_API_KEY_HERE with your key.
7. Upload the folder to a static hosting service.

FREE LIMITS
- Google provides a limited daily YouTube Data API quota. Search requests consume quota; very heavy searches may stop until quota resets or a quota increase is approved.
- Hosting may have free tiers/limits. Your previous Netlify credits may be exhausted, so this ZIP does not claim that deployment is already done.
- YouTube videos are played by the official YouTube embedded player. Some videos may not allow embedding or may be unavailable in some regions.
- This site does not download, rip, or convert YouTube videos to MP3.

MP3
- This starter does not contain a ready-made MP3 catalog. A separate authorized/licensed MP3 streaming catalog is required for MP3 playback.
- Do not copy YouTube audio into MP3. Only stream MP3 audio when you have the rights and an authorized source.

100,000 SONG GOAL
- Search can discover many public YouTube videos, but it does not mean this website owns or stores 100,000 songs.
- There is no guaranteed free legal source that supplies 100,000 commercial Bollywood MP3s for unrestricted redistribution.

FILES
index.html, style.css, app.js, config.js
