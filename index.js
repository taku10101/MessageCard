const Letter = `
うなさんへ
二周年おめでとう🎊
うなさんのおかげで、たくさんの元気をもらいました。
心地よい中低音ボイスや、ぬいぐるみをとんとんする音
配信を聞いてる間、これ以上ないくらい心穏やかで落ち着いた時間を過ごせました。
本当に素敵な時間をありがとう。

うなさんはこどもっぽいところもたくさんあるけど、大人っぽさもあって心から尊敬してます。
配信中も誰よりもみんなが楽しくすごせるように気を回してくれていて、本当にひとりひとりを大事にしてくれているのが伝わってきました
優しすぎて負担になってしまったり、損をするようなことがないか心配になってしまうけれど、そんな優しいうなさんだからこそみんなに愛されてきたのかなと思います。

改めて、約1年半推させてくれてありがとう
少しでもお返しできてたら嬉しいな
うなさんの体調が少しでも良くなりますように
だいすきだよ🫶

たくと𝐔*̣̩より
`;

const letterElement = document.getElementById("Letter");
let index = 0;
let fontSize = 1.8; // Initial font size in rem

function typeLetter() {
  if (index < Letter.length) {
    letterElement.innerHTML += Letter[index];
    index++;

    setTimeout(typeLetter, 80); // Typing speed
  }
}

typeLetter();

// Generate Stars
const canvas = document.querySelector(".stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStars() {
  const numStars = 500; // Number of stars
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2;
    const brightness = Math.random() * 0.8 + 0.2;

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
    ctx.fill();
  }
}

drawStars();

// Twinkling Effect
function twinkleStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
}

setInterval(twinkleStars, 1000); // Stars "twinkle" every second
