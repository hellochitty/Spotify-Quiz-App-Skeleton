
var holder = [];
> newarr.forEach((e) => {
... if (e.track.preview_url){
..... holder.push({url:e.track.preview_url, name: e.track.name})
..... }
... }
... )
