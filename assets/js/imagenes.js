console.log('loging...')

const nuevaImagen = document.getElementById('nueva__imagen');
nuevaImagen.addEventListener('click', async () => {
  try {
    console.log('clicking!!!')
    const imgToRand = document.getElementById('imageRandom')
    imgToRand.src = `../images/image-bank/${Math.floor(Math.random() * 50)}.jpg`
    console.log(imgToRand)

  } catch(error) {
    console.error('Error: ', error);
  }
})
