window.onload = () => 
{
    "use strict";

    input.onchange    = () => 
    {
      const divOverlay  = document.querySelector(".divOverlay");
      const telecharger = document.querySelector(".telecharger");
      const file        = input.files[0];

      if (input.files[0] != undefined) //continue l'execution uniquement si une photo a été choisi
      {
        const imgURL    = URL.createObjectURL(file);
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
};

