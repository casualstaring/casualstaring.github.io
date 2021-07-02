var modal = document.getElementById('Lightbox');
var isReady = false;
var click_handle;

function clicker(event) {
  if (!event.target.closest('img.zoom') && isReady) {
    closeImage();
    return;
  } else {
  }
  isReady = true;
}

function openImage(image_caller) {
  var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)

  var comp_image_path = image_caller.src;
  var image_expand_path = comp_image_path.substr(comp_image_path.lastIndexOf('/') + 1);
  image_expand_path = '../assets/' + image_expand_path;

  // If mobile, just return a link to the uncompressed photo.
  if (isMobile) {
    location.href = image_expand_path;
    return;
  }

  document.getElementById('sick').src = image_expand_path;
  document.getElementById('Lightbox').style.display = 'block';

  isReady = false;
  window.addEventListener('click', clicker);
}

function closeImage() {
  document.getElementById('Lightbox').style.display = 'none'
  window.removeEventListener('click', clicker);
  isReady = false;
}

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

preloadImage("../assets/the-lights_5.jpg");
