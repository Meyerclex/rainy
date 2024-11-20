  // 图片文件名数组
const images = [
  '/bluecoach/chair.gif',
  '/bluecoach/chair1.gif',
  '/bluecoach/chair2.gif',
  '/bluecoach/chair3.gif',
  '/bluecoach/chair4.gif',
  '/bluecoach/chair5.gif',
  '/bluecoach/chair6.gif'
];

// 随机选择一个图片
const randomImage = images[Math.floor(Math.random() * images.length)];

// 设置背景图片
document.querySelector('.nav-title').style.backgroundImage = `url('${randomImage}')`;
