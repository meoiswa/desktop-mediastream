function getDisplayMedia() {
  return navigator.mediaDevices.getDisplayMedia({ video: true });
}

async function start() {
  const stream = await getDisplayMedia();
  const video = document.querySelector("video");
  video.srcObject = stream;
}

start();
