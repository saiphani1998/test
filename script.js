  function share() {
        console.log("in share");
        if (!("share" in navigator)) {
            alert('Web Share API not supported.');
            return;
          }
            navigator.share({
                title: 'Mypl',
                text: 'Check out MyPL for best fantasy game ever!!! — it rocks! -- https://mypl.in/play'
               
            })
              .then(() => console.log('Successful share'))
              .catch((error) => console.log('Error sharing', error));
              console.log("ins If");
  }
  function intent() {
        if (!("Intent" in window)) {
     alert('Web Intents API not supported.');
     return;
   }

   var intent = new Intent('http://webintents.org/share',
     'text/uri-list',
     'https://whatwebcando.today');
   navigator.startActivity(intent, function () {
     console.log('Successful share')
   }, function (error) {
     console.log('Error sharing:', error);
   });
    }
