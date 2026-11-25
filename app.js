const $=id=>document.getElementById(id);
let nextPageToken="",lastQuery="";
function message(text){$("message").textContent=text;$("message").hidden=!text}
function safe(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function videoCard(v){
 const id=v.id?.videoId, sn=v.snippet||{};
 if(!id)return "";
 const thumb=sn.thumbnails?.medium?.url||sn.thumbnails?.default?.url||"";
 return `<article class="video"><img src="${safe(thumb)}" alt=""><div class="video-info"><b>${safe(sn.title||"Bollywood song")}</b><small>${safe(sn.channelTitle||"YouTube")}</small><button data-video="${safe(id)}" data-title="${safe(sn.title||"Bollywood song")}" data-channel="${safe(sn.channelTitle||"YouTube")}">▶ Play here</button></div></article>`;
}
async function searchSongs(query,append=false){
 const key=window.YOUTUBE_API_KEY||"";
 if(!key||key.startsWith("PASTE_")){message("Setup needed: add a free YouTube Data API key in config.js. See README.txt for simple steps.");return}
 if(!query.trim())return;
 if(!append){nextPageToken="";$("results").innerHTML=""}
 lastQuery=query;message("Searching YouTube for Bollywood songs…");
 const params=new URLSearchParams({part:"snippet",q:query+" Bollywood song",type:"video",videoCategoryId:"10",maxResults:"12",safeSearch:"strict",key});
 if(append&&nextPageToken)params.set("pageToken",nextPageToken);
 try{
  const res=await fetch("https://www.googleapis.com/youtube/v3/search?"+params.toString());
  const data=await res.json();
  if(!res.ok)throw new Error(data.error?.message||"YouTube search failed");
  nextPageToken=data.nextPageToken||"";
  $("results").insertAdjacentHTML(append?"beforeend":"afterbegin",(data.items||[]).map(videoCard).join(""));
  message(data.items?.length?"Choose a song and it will play here using the official YouTube player.":"No results found. Try another search.");
  $("more").hidden=!nextPageToken;
 }catch(e){message("Search issue: "+e.message+". Check the API key, API restrictions and quota in Google Cloud.");}
}
function playYouTube(id,title,channel){
 $("playing-title").textContent=title;
 $("playing-channel").textContent=channel;
 let old=document.getElementById("youtube-frame");if(old)old.remove();
 const frame=document.createElement("iframe");
 frame.id="youtube-frame";frame.title="YouTube music player";
 frame.src="https://www.youtube-nocookie.com/embed/"+encodeURIComponent(id)+"?autoplay=1&playsinline=1";
 frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
 frame.allowFullscreen=true;
 frame.style.cssText="position:fixed;right:16px;bottom:78px;width:min(420px,calc(100vw - 32px));height:236px;border:1px solid #ffffff35;border-radius:14px;z-index:9;background:#000;box-shadow:0 10px 45px #000b";
 document.body.appendChild(frame);
}
$("search-form").addEventListener("submit",e=>{e.preventDefault();searchSongs($("query").value)});
document.querySelectorAll("[data-query]").forEach(b=>b.addEventListener("click",()=>{
 const q=b.dataset.query;$("query").value=q;
 document.querySelectorAll(".tile").forEach(t=>t.classList.toggle("selected",t===b));
 searchSongs(q);
}));
$("more").addEventListener("click",()=>searchSongs(lastQuery,true));
$("results").addEventListener("click",e=>{
 const b=e.target.closest("[data-video]");if(b)playYouTube(b.dataset.video,b.dataset.title,b.dataset.channel);
});
searchSongs("Bollywood songs");
