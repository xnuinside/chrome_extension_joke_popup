var msg = "Somebody Joke on You!!! Don't forget lock you laptop, when you are away from it!\n \n \
To remove Cats from your Web Browser Pages and this Pop Up window - go to Chrome Plugins and remove Joke PopUp plugin";
alert(msg)

var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}
