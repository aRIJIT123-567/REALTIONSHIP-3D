const flowers = ["🌸","🌺","🌼","💮","🌷"];

function sprinkleFlowers(){
    const layer = document.getElementById("flowerLayer");

    for(let i=0;i<80;i++){
        let flower = document.createElement("div");
        flower.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];
        flower.style.position="absolute";
        flower.style.fontSize = (20 + Math.random()*25) + "px";
        flower.style.left = Math.random()*100 + "vw";
        flower.style.top = "-50px";
        flower.style.transition = "top 3s linear";
        layer.appendChild(flower);

        setTimeout(()=>{ flower.style.top="100vh"; },50);
        setTimeout(()=>{ flower.remove(); },3000);
    }
}

function yesClicked(){
    document.getElementById("result").innerHTML =
    "💞 Congratulations! She is interested 💞";
    document.getElementById("result").style.color="#00c853";

    document.getElementById("answer").innerHTML =
    "Her answer: YES 💍";

    sprinkleFlowers();
      // 📲 Send WhatsApp message to you
    fetch("http://localhost:3000/sendYesSMS", {
        method: "POST"
    })
    .then(res => console.log("WhatsApp request sent"))
    .catch(err => console.log(err));

}

function noClicked(){
    document.getElementById("result").innerHTML =
    "😢 Sorry... She is not interested";
    document.getElementById("result").style.color="#d50000";

    document.getElementById("answer").innerHTML =
    "Her answer: NO 💔";
    document.getElementById("answer").style.color="#d50000";
}