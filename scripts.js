function RollDIce(){
  const NoDice = parseInt(document.getElementById('NoDice').value);
  const imageDisplay = document.querySelector('.imageDisplay');
  const NoDisplay = document.getElementById('NoDisplay');
  let ImageCollector = [];
  let NoCollector = [];


  for (let i = 0; i < NoDice; i++){
    let Nos = Math.floor(Math.random() * 6) + 1;
    NoCollector.push(Nos);
    let Imgs = `<img src="dice_images/${Nos}.png" alt="No: ${Nos}" width="50" >`
    ImageCollector.push(Imgs);

  }
  console.log('NoDice:', NoDice);
  NoDisplay.textContent = `Dice: ${NoCollector.join(', ')}`;
  imageDisplay.innerHTML = ImageCollector.join(' ');
}