const createGrid = (galleryData) => {
  const x1 = [2, 3, 4];
  let p;
  for (let i = 0; i < galleryData.length; i += 1) {
    const pos = x1.indexOf(i);

    if(pos !== -1) {
    // Change x1 item
      x1[pos] += 5;
      p = 'one-third';
    } else{
      p = 'half';
    }
    console.log(`${galleryData[i]} ${p}`);
  }
};

const a = [...Array(99).keys()];

createGrid(a);
