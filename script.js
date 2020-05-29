window.onload = () => 
{
    "use strict";

    input.onchange = () => 
    {
        const file = input.files[0];

        const imgURL  = URL.createObjectURL(file);
        image.src     = imgURL;
        download.href = imgURL;

        image.style.display = "block";
        document.querySelector(".telecharger").style.display = "block";

        image.onclick = () => divImg.classList.toggle("fullscreen");
  };
 
};