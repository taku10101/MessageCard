const Letter = `
うなさんへ

うなさんのおかげで、たくさんの元気をもらいました。
心地よい中低音ボイスや、ぬいぐるみをとんとんする音
配信を聞いてる間、これ以上ないくらい心穏やかで落ち着いた時間を過ごせました。
本当に素敵な時間をありがとう。

うなさんはこどもっぽいところもたくさんあるけど、大人っぽさもあって心から尊敬してます。
配信中も誰よりもみんなが楽しくすごせるように気を回してくれていて、本当にひとりひとりを大事にしてくれているのが伝わってきました
優しすぎて負担になってしまったり、損をするようなことがないか心配になってしまうけれど、そんな優しいうなさんだからこそみんなに愛されてきたのかなと思います。


色々な感情が込み上げてきてうまくまとめられないからこれくらいで締めようと思います。
改めて、約1年半うなさんにたくさん元気をもらいました。
少しでもお返しできてたら嬉しいな
推させてくれてありがとう

うなさんの体調が少しでも良くなりますように
だいすきだよ

たくと𝐔*̣̩より
`;

const letterElement = document.getElementById("Letter");
let index = 0;
let fontSize = 1.8; // Initial font size in rem

function typeLetter() {
  if (index < Letter.length) {
    letterElement.innerHTML += Letter[index];
    index++;

    // Gradually shrink the font size as the content grows
    if (index > Letter.length * 0.3) {
      fontSize -= 0.002; // Shrink rate (adjust for smoother transition)
      letterElement.style.fontSize = `${Math.max(fontSize, 1)}rem`; // Prevent shrinking below 1rem
    }

    setTimeout(typeLetter, 50); // Typing speed
  }
}

typeLetter();

// Generate Stars
const canvas = document.querySelector(".stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStars() {
  const numStars = 200; // Number of stars
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

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStars();
});
