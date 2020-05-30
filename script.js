window.onload = () => 
{
    "use strict";

    input.onchange    = () => 
    {
      const divOverlay  = document.querySelector(".divOverlay");
      const telecharger = document.querySelector(".telecharger");
      const file        = input.files[0];

      if (file != undefined) //continue l'execution uniquement si une photo a été choisi
      {
        const imgURL    = URL.createObjectURL(file); //creation URL pour l'image 
        const image     = document.createElement("img");
        image.src       = imgURL;
        image.className = "vignette";
        container.appendChild(image);

        image.onclick = () => 
        {
          divOverlay .classList.toggle("overlay");
          image      .classList.toggle("fullscreen");
          telecharger.classList.toggle("hidden");
          download.href = imgURL;
        };
      }
    };


  //*************Service Worker ******************/
  if('serviceWorker' in navigator) //Register service worker to control making site work offline
  {
    navigator.serviceWorker
             .register('/Camera-media/sw.js',{scope: '/Camera-media/'})
             .then(function() { console.log('Service Worker for Camera-Media Registered'); });
  }

  
};

