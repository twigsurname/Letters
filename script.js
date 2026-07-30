// Random hug messages
const hugs=[
"🫂 قلبي معاج لو اني مب عندج الحين",
"🫂 كل شي بيهون، اوعدج",
"🫂 تعالي خذي نفس عميق، وانا باخذه وياج",
"🫂 احبج اكثر من اي شعور مضايقج الحين",
"🫂 لو اقدر جان حضنتج الحين بدون كلام",
"🫂 اذا تحسين الدنيا ثقيله، اعطيج دنيتي كلها",
"🫂 لا تضغطين على نفسج، ارتاحي شوي",
"🫂 انتي اغلى شخص عندي",
"🫂 ما يحتاي تكونين قويه كل يوم",
"🫂 انا فخوره فيج أكثر من ما تتخيلين",
"🫂 اذا تحسين انج بروحج، تذكري ان قلبي وياج",
"🫂 احبج احبج احبج احبج احبج",
"🫂 باقي شوي واحضنج صدق",
"🫂 ها حضن مؤقت لين اعطيج حضن صدقي"
];

const love=[
"انتي احلى جزء في يومي. كل يوم.",
"وجودج فحياتي نعمه احمد ربي عليها كل يوم.",
"حتا و انتي مب وياي و نايمه اكلمج في مخي.",
"انتي تستحقين الحب كله",
"كل شي بيكون بخير. احبج",
"اموت عليج فطيم",
"ايامي بدونج ما احسبها.",
"ابيع الدنيا كلها و اشتريج والله"
];

function random(arr){return arr[Math.floor(Math.random()*arr.length)];}

document.addEventListener("DOMContentLoaded",()=>{
 const hugBtn=document.getElementById("hugButton");
 const hugMsg=document.getElementById("hugMessage");
 if(hugBtn&&hugMsg){
   hugBtn.onclick=()=>{hugMsg.textContent=random(hugs);};
 }

 const loveBtn=document.getElementById("reassuranceButton");
 const loveOut=document.getElementById("reassuranceOutput");
 if(loveBtn&&loveOut){
   loveBtn.onclick=()=>{loveOut.textContent=random(love);};
 }

 const erase=document.getElementById("eraseThoughts");
 const thoughts=document.getElementById("thoughts");
 if(erase&&thoughts){
   erase.onclick=()=>{
      thoughts.value="";
      thoughts.placeholder="All gone 🤍";
   };
 }

 const stars=document.getElementById("stars");
 if(stars){
   for(let i=0;i<120;i++){
      const s=document.createElement("span");
      s.style.position="fixed";
      s.style.left=Math.random()*100+"vw";
      s.style.top=Math.random()*100+"vh";
      s.style.width=s.style.height=(Math.random()*2+1)+"px";
      s.style.background="white";
      s.style.borderRadius="50%";
      s.style.opacity=(Math.random()*0.8+0.2).toFixed(2);
      s.style.pointerEvents="none";
      s.style.animation=`twinkle ${2+Math.random()*5}s ease-in-out infinite alternate`;
      stars.appendChild(s);
   }
 }
});
