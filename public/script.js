const BRANDS=["Apple","Samsung","Sony","Logitech","Dell","HP","Lenovo","Asus","Acer","Xiaomi"];
const COLORS=["Black","Silver","Blue","Red","White","Gray","Green","Gold"];
const NAMES=["Smartphone","Laptop","Headphones","Keyboard","Mouse","Camera","Smart Watch","Speaker","Tablet","Drone","SSD","Monitor","Router","Microphone","Webcam","Tripod","Projector","Hard Drive","Smart TV","Power Bank","Gaming Chair","Cooling Pad","Desk Lamp","Stylus Pen","Graphics Tablet","Mini PC","USB Hub","HDMI Switch","Smart Lock","Security Camera","Electric Scooter","Car Dashcam","Wireless Charger","Bluetooth Adapter","Smart Plug","VR Headset","VR Controller","Portable Speaker","Laptop Stand","Smart Ring","Fitness Band","Portable Monitor","LED Strip","Stream Deck","Thermostat","Gaming Controller","Smart Bulb","Action Camera","Noise Headphones","Portable SSD"];
const IMGS=["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300","https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300","https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300","https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300","https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300","https://images.unsplash.com/photo-1546868871-7041f2a55e12","https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300","https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=300","https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=300","https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300","https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300","https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=300","https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300","https://images.unsplash.com/photo-1623949556303-b0d17d198863?w=300","https://www.bhphotovideo.com/images/images2500x2500/benro_a673tmbs8_s8_dual_stage_video_1156966.jpg","https://www.xbsasia.ph/wp-content/uploads/2023/01/download-1-1.jpg","https://cdn.mos.cms.futurecdn.net/Z9b79bGsddCAitdZ47cboV.jpg","https://images.unsplash.com/photo-1593359677879-a4bb92f829d1","https://m.media-amazon.com/images/I/612FGkTS29L.jpg","https://tse3.mm.bing.net/th/id/OIP.9EuCNHRN7MTXE4WQdRhuQAAAAA?pid=Api&P=0&h=180","https://tse3.mm.bing.net/th/id/OIP.haDpaCzvy5eeNzJcQpEPAQHaHa?pid=Api&P=0&h=180","https://tse4.mm.bing.net/th/id/OIP.qe9-27kgfcA43WavmFHuxQHaHa?pid=Api&P=0&h=180","https://tse3.mm.bing.net/th/id/OIP.KepFVGxnZs1oaAHgjpMsjgHaHa?pid=Api&P=0&h=180","https://tse1.mm.bing.net/th/id/OIP.geucSBkaYGA5kUME7PpvgQHaHa?pid=Api&P=0&h=180","https://tse2.mm.bing.net/th/id/OIP._TyF11LWtKkzraro1uScxQHaGq?pid=Api&P=0&h=180","https://tse2.mm.bing.net/th/id/OIP.2v6d4Ds6Zlovs8A8gYZXJgAAAA?pid=Api&P=0&h=180","https://tse1.mm.bing.net/th/id/OIP.KDkSw49aItSZkl0i21IaOwHaHR?pid=Api&P=0&h=180","https://images.unsplash.com/photo-1558002038-1055907df827?w=300","https://tse2.mm.bing.net/th/id/OIP.2BCCvEhkvdHyu5xLqRTs-gHaHa?pid=Api&P=0&h=180","https://tse4.mm.bing.net/th/id/OIP.5AkJObS0uOedAuIQ__wsPAHaHa?pid=Api&P=0&h=180","https://tse4.mm.bing.net/th/id/OIP.YNuGnHGTRJpZk4WN0Ya8JgAAAA?pid=Api&P=0&h=180","https://pakistanstore.pk/wp-content/uploads/2023/07/MagSafe-Wireless-Mobile-Charger.jpg","https://tse3.mm.bing.net/th/id/OIP.LyflkgG_imT5DHVUYgB_TAHaHH?pid=Api&P=0&h=180","https://tse1.mm.bing.net/th/id/OIP.R3HnyrH0Fpemb3l6Qjj1mQHaGy?pid=Api&P=0&h=180","https://tse4.mm.bing.net/th/id/OIP.a7vLbnFg8wYjXtRyVnoMLAHaHa?pid=Api&P=0&h=180","https://tse1.mm.bing.net/th/id/OIP.hm7wgLwPg8cCWSSzL4_lGgHaEt?pid=Api&P=0&h=180","https://tse1.mm.bing.net/th/id/OIP.N0Q5MVUTUbnBHTLb5kTi9gHaHa?pid=Api&P=0&h=180","https://tse3.mm.bing.net/th/id/OIP.NFZMfYBMJx9JOihNQYHoXAHaHa?pid=Api&P=0&h=180","https://tse1.mm.bing.net/th/id/OIP.BY_PdHZegjYXF1HyacFBwAHaHF?pid=Api&P=0&h=180","https://tse2.mm.bing.net/th/id/OIP.OddGcdtnp4I58wEFhzRcjwHaHa?pid=Api&P=0&h=180","https://tse1.mm.bing.net/th/id/OIP.s3Mq79UnsWwQA0OJ7WOB5gHaFq?pid=Api&P=0&h=180","https://up.yimg.com/ib/th/id/OIP.Sli0O68aL3SuYeMbvnWobQHaHa?pid=Api&rs=1&c=1&qlt=95&w=180&h=180","https://tse2.mm.bing.net/th/id/OIP.GRcjG642A-D2qB1fnkfAkwHaFA?pid=Api&P=0&h=180","https://tse2.mm.bing.net/th/id/OIP.l1Wl5L9M-9Wx8JYIEkgNuQHaI4?pid=Api&P=0&h=180","https://tse1.mm.bing.net/th/id/OIP.XZCes5AivLvBCNMitH53JQHaHa?pid=Api&P=0&h=180","https://tse2.mm.bing.net/th/id/OIP.UrSo8Vm-_9Fi1-xtYEFDtQHaHa?pid=Api&P=0&h=180","https://tse3.mm.bing.net/th/id/OIP.LXKRtMyY9ylBoFEEsERn4wHaHa?pid=Api&P=0&h=180","https://tse1.mm.bing.net/th/id/OIP.IEckVZCZ1xx3csFtlrDUugHaHa?pid=Api&P=0&h=180","https://tse3.mm.bing.net/th/id/OIP.X10VgX3Mqfa_hgMq1XXdTgHaHa?pid=Api&P=0&h=180"];

// Category mapping for each product name
const NAME_CAT={"Smartphone":"Mobile Phones","Laptop":"Laptops","Headphones":"Headphones","Keyboard":"Accessories","Mouse":"Accessories","Camera":"Cameras","Smart Watch":"Smart Watches","Speaker":"Speakers","Tablet":"Accessories","Drone":"Cameras","SSD":"Storage","Monitor":"Accessories","Router":"Accessories","Microphone":"Accessories","Webcam":"Accessories","Tripod":"Cameras","Projector":"Accessories","Hard Drive":"Storage","Smart TV":"Smart TVs","Power Bank":"Accessories","Gaming Chair":"Gaming","Cooling Pad":"Gaming","Desk Lamp":"Accessories","Stylus Pen":"Accessories","Graphics Tablet":"Accessories","Mini PC":"Accessories","USB Hub":"Accessories","HDMI Switch":"Accessories","Smart Lock":"Accessories","Security Camera":"Cameras","Electric Scooter":"Accessories","Car Dashcam":"Cameras","Wireless Charger":"Accessories","Bluetooth Adapter":"Accessories","Smart Plug":"Accessories","VR Headset":"Gaming","VR Controller":"Gaming","Portable Speaker":"Speakers","Laptop Stand":"Accessories","Smart Ring":"Smart Watches","Fitness Band":"Smart Watches","Portable Monitor":"Accessories","LED Strip":"Accessories","Stream Deck":"Accessories","Thermostat":"Accessories","Gaming Controller":"Gaming","Smart Bulb":"Accessories","Action Camera":"Cameras","Noise Headphones":"Headphones","Portable SSD":"Storage"};

// Seeded pseudo-random for consistent values
function seededRand(seed){let x=Math.sin(seed)*10000;return x-Math.floor(x);}

// Category-based specs & features templates
const SPEC_TEMPLATES={
  "Mobile Phones":[["Display","6.5\" AMOLED, 120Hz"],["Processor","Octa-core, up to 3.2GHz"],["RAM","8GB"],["Storage","128GB"],["Battery","5000mAh, fast charging"],["Camera","50MP + 12MP + 8MP"]],
  "Laptops":[["Display","15.6\" FHD IPS"],["Processor","Intel Core i7, 12th Gen"],["RAM","16GB DDR5"],["Storage","512GB SSD"],["Battery","Up to 10 hours"],["Graphics","Dedicated graphics card"]],
  "Smart TVs":[["Screen size","55\" 4K UHD"],["Display type","LED, HDR10+"],["Smart platform","Built-in smart OS"],["Connectivity","3x HDMI, 2x USB, Wi-Fi"],["Sound","20W stereo speakers"]],
  "Headphones":[["Type","Over-ear, wireless"],["Battery life","Up to 40 hours"],["Connectivity","Bluetooth 5.3"],["Noise cancellation","Active (ANC)"],["Charging","USB-C, fast charge"]],
  "Smart Watches":[["Display","1.4\" AMOLED touchscreen"],["Battery life","Up to 7 days"],["Water resistance","5 ATM"],["Sensors","Heart rate, SpO2, GPS"],["Compatibility","Android & iOS"]],
  "Cameras":[["Sensor","24MP APS-C"],["Video","4K @ 30fps"],["Lens mount","Interchangeable"],["Stabilization","In-body image stabilization"],["Connectivity","Wi-Fi & Bluetooth"]],
  "Gaming":[["Compatibility","PC & console"],["Connectivity","Wired / wireless"],["Build","Ergonomic design"],["Special features","RGB lighting, programmable buttons"]],
  "Speakers":[["Output power","30W RMS"],["Battery life","Up to 20 hours"],["Connectivity","Bluetooth 5.0, AUX"],["Water resistance","IPX7"]],
  "Storage":[["Capacity","1TB"],["Interface","USB 3.2 / NVMe"],["Read speed","Up to 1050MB/s"],["Durability","Shock resistant"]],
  "Accessories":[["Material","Premium build quality"],["Compatibility","Universal fit"],["Connectivity","Bluetooth / USB-C"],["Warranty","Manufacturer backed"]]
};
const FEATURE_TEMPLATES={
  "Mobile Phones":["Edge-to-edge display with slim bezels","All-day battery with fast charging support","Triple camera system for stunning photos","5G ready for lightning-fast connectivity"],
  "Laptops":["Sleek, portable metal chassis","Backlit keyboard for low-light typing","Fast SSD storage for quick boot times","Long battery life for all-day productivity"],
  "Smart TVs":["Vivid 4K picture with HDR support","Built-in streaming apps and voice control","Slim bezel design for immersive viewing","Multiple ports for all your devices"],
  "Headphones":["Industry-leading noise cancellation","Plush ear cushions for all-day comfort","Multi-device Bluetooth pairing","Foldable design for easy travel"],
  "Smart Watches":["Continuous health & fitness tracking","Bright always-on display","Smart notifications on your wrist","Durable, water-resistant build"],
  "Cameras":["Professional-grade image quality","Fast & accurate autofocus","Weather-sealed body","Compact and travel-friendly"],
  "Gaming":["Precision-tuned for competitive play","Durable switches rated for millions of clicks","Customizable RGB lighting effects","Plug-and-play compatibility"],
  "Speakers":["Rich, room-filling sound","Rugged, water-resistant design","Long-lasting rechargeable battery","Easy pairing with any device"],
  "Storage":["Blazing fast read/write speeds","Compact and pocket-friendly","Reliable long-term data storage","Plug-and-play with no drivers needed"],
  "Accessories":["Durable, premium construction","Effortless setup and pairing","Sleek design that fits any workspace","Reliable everyday performance"]
};
const REVIEW_NAMES=["Ravi Kumar","Priya Singh","Arjun Mehta","Sneha Rao","Karan Patel","Ananya Iyer","Vikram Nair","Divya Reddy","Rohan Gupta","Meera Joshi"];
const REVIEW_TEMPLATES=[
  "Great value for the price, works exactly as described.",
  "Really happy with this purchase, quality feels premium.",
  "Does the job well, delivery was quick too.",
  "Good product overall, would recommend to others.",
  "Solid build quality and performs better than expected.",
  "Exactly what I needed, no complaints so far.",
  "Impressed with the quality, will buy again.",
  "Decent product, matches the description accurately."
];
const WARRANTIES=["6 Months Warranty","1 Year Manufacturer Warranty","2 Year Extended Warranty"];

function pickColors(seed){
  const pool=[...COLORS];
  const chosen=[];
  let s=seed;
  while(chosen.length<3&&pool.length){
    const idx=Math.floor(seededRand(s)*pool.length);
    chosen.push(pool.splice(idx,1)[0]);
    s+=6;
  }
  return chosen;
}

const PRODS=NAMES.map((name,i)=>{
  const brand=BRANDS[Math.floor(seededRand(i*3+1)*BRANDS.length)];
  const colors=pickColors(i*31+9);
  const color=colors[0];
  const price=Math.floor(seededRand(i*11+3)*900+100);
  const sold=Math.floor(seededRand(i*13+4)*300)+20;
  const rating=+(3.8+seededRand(i*17+5)*1.1).toFixed(1);
  const badges=["Best seller","New","Sale","Top rated","Premium",null,null,null];
  const badge=badges[Math.floor(seededRand(i*19+6)*badges.length)]||null;
  const cat=NAME_CAT[name]||"Accessories";
  const marketPrice=Math.floor(price*1.35); // realistic original market price
  const discount=Math.round((1-price/marketPrice)*100);
  const inStock=seededRand(i*37+13)>0.08;
  const stockQty=inStock?Math.floor(seededRand(i*41+17)*45)+5:0;
  const warranty=WARRANTIES[Math.floor(seededRand(i*43+19)*WARRANTIES.length)];
  const delDays=2+Math.floor(seededRand(i*47+23)*5);
  const revCount=sold*3+Math.floor(seededRand(i*23+7)*500);
  const specs=SPEC_TEMPLATES[cat]||SPEC_TEMPLATES["Accessories"];
  const features=FEATURE_TEMPLATES[cat]||FEATURE_TEMPLATES["Accessories"];
  const reviews=[0,1,2].map(r=>{
    const nIdx=Math.floor(seededRand(i*53+29+r*2)*REVIEW_NAMES.length);
    const tIdx=Math.floor(seededRand(i*59+31+r*3)*REVIEW_TEMPLATES.length);
    const rRating=Math.max(3,Math.min(5,Math.round(rating+(seededRand(i*61+37+r)-0.5)*1.5)));
    return{name:REVIEW_NAMES[nIdx],rating:rRating,text:REVIEW_TEMPLATES[tIdx]};
  });
  return{
    id:i+1,
    name,
    brand,
    color,
    colors,
    cat,
    price,
    old:Math.floor(price*1.12),
    marketPrice,
    discount,
    rating,
    rev:revCount,
    sold,
    inStock,
    stockQty,
    warranty,
    delDays,
    specs,
    features,
    description:`The ${brand} ${name} combines outstanding performance with a sleek, modern design — built to deliver reliable quality for everyday use, backed by ${warranty.toLowerCase()}.`,
    reviews,
    img:IMGS[i]
    +(IMGS[i].includes('unsplash')&&!IMGS[i].includes('?w=')?"?w=300":""),
    badge
  };
});
const CATS=[
  {name:"Mobile Phones",icon:"📱",count:342},
  {name:"Laptops",icon:"💻",count:218},
  {name:"Smart TVs",icon:"📺",count:156},
  {name:"Headphones",icon:"🎧",count:289},
  {name:"Smart Watches",icon:"⌚",count:124},
  {name:"Cameras",icon:"📷",count:198},
  {name:"Gaming",icon:"🎮",count:167},
  {name:"Accessories",icon:"🖱️",count:432},
  {name:"Speakers",icon:"🔊",count:89},
  {name:"Storage",icon:"💾",count:203},
];

/* ── ADMIN: default users & sellers ── */
const FIRST_NAMES=["Ravi","Priya","Arjun","Sneha","Karan","Ananya","Vikram","Divya","Rohan","Meera","Aditya","Kavya","Suresh","Neha","Rahul","Pooja","Amit","Riya","Sanjay","Isha","Manoj","Tanvi","Deepak","Shreya"];
const LAST_NAMES=["Kumar","Singh","Mehta","Rao","Patel","Iyer","Nair","Reddy","Gupta","Joshi","Sharma","Verma","Chopra","Bose","Kapoor","Desai","Pillai","Menon","Bansal","Agarwal","Malhotra","Chauhan","Trivedi","Bhat"];
const AV_GRADS=["linear-gradient(135deg,var(--c1),var(--c2))","linear-gradient(135deg,#f59e0b,#ef4444)","linear-gradient(135deg,#10b981,var(--c3))","linear-gradient(135deg,#8b5cf6,#ec4899)","linear-gradient(135deg,#06b6d4,#3b82f6)"];
const MONTHS_SHORT=["Jan","Feb","Mar","Apr","May","Jun"];

const USERS=Array.from({length:1248},(_,i)=>{
  const fn=FIRST_NAMES[i%FIRST_NAMES.length];
  const ln=LAST_NAMES[Math.floor(i/FIRST_NAMES.length)%LAST_NAMES.length];
  const name=fn+' '+ln;
  const month=MONTHS_SHORT[Math.floor(seededRand(i*3+2)*MONTHS_SHORT.length)];
  const day=1+Math.floor(seededRand(i*5+4)*28);
  const emailNum=Math.floor(i/(FIRST_NAMES.length*LAST_NAMES.length));
  return {
    id:i+1,
    name,
    initials:(fn[0]+ln[0]).toUpperCase(),
    grad:AV_GRADS[i%AV_GRADS.length],
    email:fn.toLowerCase()+'.'+ln.toLowerCase()+(emailNum>0?emailNum:'')+'@gmail.com',
    joined:month+' '+day,
    status:seededRand(i*7+11)>0.06?'Active':'Suspended'
  };
});

const SHOP_WORD1=["Tech","Gadget","Digital","Electro","Byte","Circuit","NextGen","Prime","Quantum","Urban","Smart","Pixel"];
const SHOP_WORD2=["Store","World","Dreams","Hub","Traders","Point","Zone"];
const SELLERS=[];
{
  let sid=0;
  for(let i=0;i<SHOP_WORD1.length;i++){
    for(let j=0;j<SHOP_WORD2.length;j++){
      const shop=SHOP_WORD1[i]+' '+SHOP_WORD2[j];
      const slug=shop.toLowerCase().replace(/[^a-z]+/g,'');
      const products=8+Math.floor(seededRand(sid*9+1)*80);
      const revenueL=(0.3+seededRand(sid*17+5)*6.5).toFixed(1);
      SELLERS.push({
        id:sid+1,
        shop,
        email:slug+'@example.com',
        products,
        revenue:'₹'+revenueL+'L',
        status:seededRand(sid*7+11)>0.06?'Active':'Suspended'
      });
      sid++;
    }
  }
}

const ADMIN_ORDERS=Array.from({length:40},(_,i)=>{
  const fn=FIRST_NAMES[(i*5+2)%FIRST_NAMES.length];
  const ln=LAST_NAMES[(i*7+3)%LAST_NAMES.length];
  const customer=fn+' '+ln;
  const prod=PRODS[i%PRODS.length];
  const month=MONTHS_SHORT[Math.floor(seededRand(i*3+41)*MONTHS_SHORT.length)];
  const day=1+Math.floor(seededRand(i*5+43)*28);
  const r=seededRand(i*11+47);
  const status=r>0.6?'Delivered':r>0.35?'Shipped':r>0.12?'Processing':'Cancelled';
  return {
    id:'#ORD-'+String(i+1).padStart(3,'0'),
    customer,
    product:prod.brand+' '+prod.name,
    amount:prod.price*90,
    date:month+' '+day,
    status
  };
});


let role='user',wishSet=new Set(),cart=[],activeCat='all';
let ORDERS=[],orderSeq=1,currentDetail=null,selectedColor=null;
let sellerProducts=[],currentPost=null,npImgData='',editingProductId=null;

/* ── PROFILE PERSISTENCE ── */
const PROFILE_KEY='eh_user_profile';
const DEFAULT_PROFILE={name:'Ugge Maheesh Varma',email:'maheeshvarmau@gmail.com',phone:'+91 98765 43210',city:'Hyderabad',address:'123 Tech Street, Madhapur, Hyderabad 500081'};

function initials(name){
  return (name||'').trim().split(/\s+/).map(w=>w[0]||'').join('').slice(0,2).toUpperCase()||'JD';
}

function loadProfile(){
  let p=DEFAULT_PROFILE;
  try{
    const raw=localStorage.getItem(PROFILE_KEY);
    if(raw)p=Object.assign({},DEFAULT_PROFILE,JSON.parse(raw));
  }catch(e){}
  const nameEl=document.getElementById('pf-name');
  if(nameEl){
    document.getElementById('pf-name').value=p.name;
    document.getElementById('pf-email').value=p.email;
    document.getElementById('pf-phone').value=p.phone;
    document.getElementById('pf-city').value=p.city;
    document.getElementById('pf-address').value=p.address;
  }
  applyProfileToUI(p);
  return p;
}

function applyProfileToUI(p){
  const ini=initials(p.name);
  const set=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=val;};
  set('sb-uname-u',p.name);set('sb-uemail-u',p.email);set('sb-av-u',ini);
  set('tb-av-u',ini);set('prof-av',ini);set('prof-name-disp',p.name);set('prof-email-disp',p.email);
}

function saveProfile(){
  const p={
    name:document.getElementById('pf-name').value.trim()||DEFAULT_PROFILE.name,
    email:document.getElementById('pf-email').value.trim()||DEFAULT_PROFILE.email,
    phone:document.getElementById('pf-phone').value.trim(),
    city:document.getElementById('pf-city').value.trim(),
    address:document.getElementById('pf-address').value.trim()
  };
  try{
    localStorage.setItem(PROFILE_KEY,JSON.stringify(p));
  }catch(e){}
  applyProfileToUI(p);
  renderAU();
  toast('Profile saved');
}

/* ── SELLER SHOP PROFILE PERSISTENCE ── */
const SELLER_PROFILE_KEY='eh_seller_profile';
const DEFAULT_SELLER_PROFILE={shop:'Tech Store India',contact:'+91 98765 43210',email:'seller@electrohub.com',city:'Hyderabad',address:'456 Electronics Zone, Secunderabad 500003'};

function loadSellerProfile(){
  let p=DEFAULT_SELLER_PROFILE;
  try{
    const raw=localStorage.getItem(SELLER_PROFILE_KEY);
    if(raw)p=Object.assign({},DEFAULT_SELLER_PROFILE,JSON.parse(raw));
  }catch(e){}
  const nameEl=document.getElementById('s-shopname');
  if(nameEl){
    document.getElementById('s-shopname').value=p.shop;
    document.getElementById('s-shopcontact').value=p.contact;
    document.getElementById('s-shopemail').value=p.email;
    document.getElementById('s-shopcity').value=p.city;
    document.getElementById('s-shopaddress').value=p.address;
  }
  applySellerProfileToUI(p);
  return p;
}

function applySellerProfileToUI(p){
  const ini=initials(p.shop);
  const set=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=val;};
  set('sb-uname-s',p.shop);set('sb-uemail-s',p.email);set('sb-av-s',ini);
}

function saveSellerProfile(){
  const p={
    shop:document.getElementById('s-shopname').value.trim()||DEFAULT_SELLER_PROFILE.shop,
    contact:document.getElementById('s-shopcontact').value.trim(),
    email:document.getElementById('s-shopemail').value.trim()||DEFAULT_SELLER_PROFILE.email,
    city:document.getElementById('s-shopcity').value.trim(),
    address:document.getElementById('s-shopaddress').value.trim()
  };
  try{
    localStorage.setItem(SELLER_PROFILE_KEY,JSON.stringify(p));
  }catch(e){}
  applySellerProfileToUI(p);
  renderAS();
  toast('Shop profile saved');
}

/* ── ADMIN MESSAGES ── */
const MESSAGES_KEY='eh_messages';
let MESSAGES=[];

function loadMessages(){
  try{
    const raw=localStorage.getItem(MESSAGES_KEY);
    MESSAGES=raw?JSON.parse(raw):[];
  }catch(e){MESSAGES=[];}
}

function saveMessages(){
  try{localStorage.setItem(MESSAGES_KEY,JSON.stringify(MESSAGES));}catch(e){}
}

function toggleMsgRecipient(){
  const to=document.getElementById('msg-to').value;
  const row=document.getElementById('msg-recipient-row');
  if(row)row.style.display=(to==='user'||to==='seller')?'block':'none';
  const label=document.getElementById('msg-recipient-label');
  const dl=document.getElementById('msg-recipient-datalist');
  if(to==='user'){
    if(label)label.textContent='User name';
    if(dl){
      const profile=loadProfile();
      const names=[profile.name,...USERS.map(u=>u.name)];
      dl.innerHTML=[...new Set(names)].map(n=>`<option value="${n}">`).join('');
    }
  }else if(to==='seller'){
    if(label)label.textContent='Seller / shop name';
    if(dl){
      const sp=loadSellerProfile();
      const names=[sp.shop,...SELLERS.map(s=>s.shop)];
      dl.innerHTML=[...new Set(names)].map(n=>`<option value="${n}">`).join('');
    }
  }
}

function sendAdminMessage(){
  const to=document.getElementById('msg-to').value;
  const recipient=document.getElementById('msg-recipient').value.trim();
  const type=document.getElementById('msg-type').value;
  const subject=document.getElementById('msg-subject').value.trim();
  const body=document.getElementById('msg-body').value.trim();
  if(!subject||!body){toast('Please fill in subject and message');return;}
  if((to==='user'||to==='seller')&&!recipient){toast('Please enter a recipient name');return;}
  if(to==='user'){
    const profile=loadProfile();
    const known=recipient.toLowerCase()===profile.name.toLowerCase()||USERS.some(u=>u.name.toLowerCase()===recipient.toLowerCase());
    if(!known){toast('No user found with that name');return;}
  }
  if(to==='seller'){
    const sp=loadSellerProfile();
    const known=recipient.toLowerCase()===sp.shop.toLowerCase()||SELLERS.some(s=>s.shop.toLowerCase()===recipient.toLowerCase());
    if(!known){toast('No seller found with that name');return;}
  }
  MESSAGES.unshift({
    id:Date.now(),
    to,
    recipient,
    type,
    subject,
    body,
    date:new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'})
  });
  saveMessages();
  document.getElementById('msg-subject').value='';
  document.getElementById('msg-body').value='';
  document.getElementById('msg-recipient').value='';
  renderAdminMsgLog();
  renderUserMessages();
  renderSellerMessages();
  const dest=to==='all_users'?'all users':to==='all_sellers'?'all sellers':(to==='user'?'user ':'seller ')+recipient;
  toast('Message sent to '+dest);
}

function renderAdminMsgLog(){
  const el=document.getElementById('a-msglog');
  if(!el)return;
  if(!MESSAGES.length){
    el.innerHTML='<div style="padding:16px;color:var(--txt3);font-size:12px">No messages sent yet.</div>';
    return;
  }
  el.innerHTML=MESSAGES.slice(0,20).map(m=>{
    const dest=m.to==='all_users'?'All users':m.to==='all_sellers'?'All sellers':(m.to==='user'?'User — ':'Seller — ')+m.recipient;
    return `<div style="padding:12px 16px;border-bottom:1px solid var(--border-g)">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
        <strong style="font-size:13px;color:var(--txt)">${m.subject}</strong>
        <span style="font-size:11px;color:var(--txt3);white-space:nowrap">${m.date}</span>
      </div>
      <div style="font-size:12px;color:var(--txt2);margin-top:2px">To: ${dest} · ${m.type}</div>
      <div style="font-size:12px;color:var(--txt2);margin-top:4px">${m.body}</div>
    </div>`;
  }).join('');
}

function msgBadgeClass(type){
  if(type==='Warning'||type==='Suspension notice')return's-err';
  if(type==='Approval')return's-ok';
  return's-info';
}

function renderUserMessages(){
  const profile=loadProfile();
  const list=MESSAGES.filter(m=>m.to==='all_users'||(m.to==='user'&&m.recipient.toLowerCase()===profile.name.toLowerCase()));
  const cnt=document.getElementById('u-msgcount');
  if(cnt)cnt.textContent=list.length;
  const badge=document.getElementById('u-msgbadge');
  if(badge)badge.textContent=list.length;
  const tb=document.getElementById('u-msglist');
  if(!tb)return;
  if(!list.length){
    tb.innerHTML='<div class="tcard" style="padding:30px;text-align:center;color:var(--txt3)">No messages from the admin yet.</div>';
    return;
  }
  tb.innerHTML=list.map(m=>`
    <div class="tcard" style="margin-bottom:12px;padding:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:6px">
        <strong style="color:var(--txt)">${m.subject}</strong>
        <span class="sbadge ${msgBadgeClass(m.type)}">${m.type}</span>
      </div>
      <div style="font-size:13px;color:var(--txt2);line-height:1.5">${m.body}</div>
      <div style="font-size:11px;color:var(--txt3);margin-top:8px">From Admin · ${m.date}</div>
    </div>`).join('');
}

function renderSellerMessages(){
  const sp=loadSellerProfile();
  const list=MESSAGES.filter(m=>m.to==='all_sellers'||(m.to==='seller'&&m.recipient.toLowerCase()===sp.shop.toLowerCase()));
  const cnt=document.getElementById('s-msgcount');
  if(cnt)cnt.textContent=list.length;
  const badge=document.getElementById('s-msgbadge');
  if(badge)badge.textContent=list.length;
  const tb=document.getElementById('s-msglist');
  if(!tb)return;
  if(!list.length){
    tb.innerHTML='<div class="tcard" style="padding:30px;text-align:center;color:var(--txt3)">No messages from the admin yet.</div>';
    return;
  }
  tb.innerHTML=list.map(m=>`
    <div class="tcard" style="margin-bottom:12px;padding:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:6px">
        <strong style="color:var(--txt)">${m.subject}</strong>
        <span class="sbadge ${msgBadgeClass(m.type)}">${m.type}</span>
      </div>
      <div style="font-size:13px;color:var(--txt2);line-height:1.5">${m.body}</div>
      <div style="font-size:11px;color:var(--txt3);margin-top:8px">From Admin · ${m.date}</div>
    </div>`).join('');
}

/* ── ORDERS PERSISTENCE ── */
const ORDERS_KEY='eh_user_orders';

function loadOrders(){
  try{
    const raw=localStorage.getItem(ORDERS_KEY);
    if(raw){
      const d=JSON.parse(raw);
      ORDERS=Array.isArray(d.orders)?d.orders:[];
      orderSeq=d.seq||ORDERS.length;
    }
  }catch(e){}
}

function saveOrders(){
  try{
    localStorage.setItem(ORDERS_KEY,JSON.stringify({orders:ORDERS,seq:orderSeq}));
  }catch(e){}
}

function cancelOrder(id){
  const o=ORDERS.find(o=>o.id===id);
  if(!o)return;
  if(o.status==='Shipped'||o.status==='Delivered'){
    toast('This order can no longer be cancelled');
    return;
  }
  if(o.status==='Cancelled'){
    toast('Order is already cancelled');
    return;
  }
  o.status='Cancelled';
  saveOrders();
  renderOrders();
  renderSellerOrders();
  toast('Order cancelled');
}

/* ── SELLER PRODUCT POSTS (shared across user/seller dashboards) ── */
const SELLER_PRODUCTS_KEY='eh_seller_products';

function loadSellerProducts(){
  try{
    const raw=localStorage.getItem(SELLER_PRODUCTS_KEY);
    sellerProducts=raw?JSON.parse(raw):[];
  }catch(e){sellerProducts=[];}
}

function saveSellerProductsStore(){
  try{localStorage.setItem(SELLER_PRODUCTS_KEY,JSON.stringify(sellerProducts));}catch(e){}
}

function previewNPImg(e){
  const file=e.target.files&&e.target.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=function(ev){
    npImgData=ev.target.result;
    document.getElementById('np-imgprev').innerHTML=`<img src="${npImgData}" style="width:100%;height:150px;object-fit:cover;border-radius:10px">`;
  };
  reader.readAsDataURL(file);
}

function togglePay(el){
  el.classList.toggle('on');
}

function resetNPForm(){
  document.getElementById('np-name').value='';
  document.getElementById('np-desc').value='';
  document.getElementById('np-rating').value='';
  document.getElementById('np-price').value='';
  document.getElementById('np-contact').value='';
  npImgData='';
  document.getElementById('np-imgprev').innerHTML='<i class="ti ti-upload" style="font-size:22px;display:block;margin-bottom:6px;color:var(--c1)" aria-hidden="true"></i>Click to upload product image';
  document.querySelectorAll('#np-payrow [data-pay]').forEach(b=>{
    const on=['PhonePe','Google Pay','Paytm','UPI'].includes(b.dataset.pay);
    b.classList.toggle('on',on);
  });
  editingProductId=null;
  const btn=document.getElementById('np-savebtn');
  if(btn)btn.innerHTML='<i class="ti ti-device-floppy" aria-hidden="true"></i>Save &amp; publish';
}

function editSellerProduct(id){
  loadSellerProducts();
  const p=sellerProducts.find(x=>x.id===id);
  if(!p)return;
  editingProductId=id;
  sw('s','saddprod',document.getElementById('ni-saddprod'));
  document.getElementById('np-name').value=p.name||'';
  document.getElementById('np-desc').value=p.description||'';
  document.getElementById('np-rating').value=p.rating||'';
  document.getElementById('np-price').value=p.price||'';
  document.getElementById('np-contact').value=p.contact||'';
  npImgData=p.img||'';
  document.getElementById('np-imgprev').innerHTML=npImgData?`<img src="${npImgData}" style="width:100%;height:150px;object-fit:cover;border-radius:10px">`:'<i class="ti ti-upload" style="font-size:22px;display:block;margin-bottom:6px;color:var(--c1)" aria-hidden="true"></i>Click to upload product image';
  document.querySelectorAll('#np-payrow [data-pay]').forEach(b=>{
    b.classList.toggle('on',(p.payments||[]).includes(b.dataset.pay));
  });
  const btn=document.getElementById('np-savebtn');
  if(btn)btn.innerHTML='<i class="ti ti-device-floppy" aria-hidden="true"></i>Update product';
  renderSellerPostedTable();
  window.scrollTo(0,0);
  toast('Editing product — update the fields and save');
}

function saveNewProduct(){
  const name=document.getElementById('np-name').value.trim();
  const desc=document.getElementById('np-desc').value.trim();
  const ratingRaw=parseFloat(document.getElementById('np-rating').value);
  const price=parseFloat(document.getElementById('np-price').value);
  const contact=document.getElementById('np-contact').value.trim();
  if(!name||!desc||!price||!contact){toast('Please fill in all required fields');return;}
  const rating=isNaN(ratingRaw)?4.5:Math.max(1,Math.min(5,ratingRaw));
  const payments=Array.from(document.querySelectorAll('#np-payrow [data-pay].on')).map(b=>b.dataset.pay);
  if(!payments.length){toast('Select at least one payment option');return;}
  const shopEl=document.getElementById('s-shopname');
  if(editingProductId){
    const idx=sellerProducts.findIndex(p=>p.id===editingProductId);
    if(idx>-1){
      sellerProducts[idx]={
        ...sellerProducts[idx],
        name,
        description:desc,
        rating:+rating.toFixed(1),
        price,
        contact,
        payments,
        img:npImgData||sellerProducts[idx].img||'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500'
      };
    }
    saveSellerProductsStore();
    resetNPForm();
    renderSellerPostedTable();
    renderSP();
    renderRecentOrders();
    renderPostsGrid();
    toast('Product updated');
    return;
  }
  const prod={
    id:Date.now(),
    name,
    description:desc,
    rating:+rating.toFixed(1),
    price,
    contact,
    payments,
    img:npImgData||'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500',
    seller:shopEl?shopEl.value.trim()||'Tech Store India':'Tech Store India'
  };
  sellerProducts.unshift(prod);
  saveSellerProductsStore();
  resetNPForm();
  renderSellerPostedTable();
  renderSP();
  renderRecentOrders();
  renderPostsGrid();
  toast('Product published — now visible to all users');
}

function renderSellerPostedTable(){
  loadSellerProducts();
  const tb=document.getElementById('sp-posted-tbody');
  if(!tb)return;
  if(!sellerProducts.length){
    tb.innerHTML='<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--txt3)">You haven\'t posted any products yet.</td></tr>';
    return;
  }
  tb.innerHTML=sellerProducts.map(p=>`
    <tr>
      <td><div style="display:flex;align-items:center;gap:8px"><img src="${p.img}" style="width:32px;height:32px;object-fit:cover;border-radius:7px" loading="lazy">${p.name}</div></td>
      <td style="color:var(--txt)">₹${Number(p.price).toLocaleString('en-IN')}</td>
      <td style="color:#fbbf24">★ ${p.rating}</td>
      <td style="color:var(--txt2)">${p.contact}</td>
      <td><button class="btn btn-d btn-sm" onclick="deleteSellerProduct(${p.id})"><i class="ti ti-trash" aria-hidden="true"></i>Delete</button></td>
    </tr>`).join('');
}

function deleteSellerProduct(id){
  sellerProducts=sellerProducts.filter(p=>p.id!==id);
  saveSellerProductsStore();
  renderSellerPostedTable();
  renderPostsGrid();
  renderSP();
  renderRecentOrders();
  if(editingProductId===id)resetNPForm();
  toast('Product deleted');
}

function postCard(p){
  return `<div class="pcard" onclick="openPostDetail(${p.id})" style="cursor:pointer">
    <div class="pimg"><img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?w=500'"></div>
    <div class="pinfo">
      <div class="pname">${p.name}</div>
      <div class="pbrand">Seller listing</div>
      <div class="prow">
        <span class="pprice">₹${Number(p.price).toLocaleString('en-IN')}</span>
        <span class="pstars"><b>★</b> ${p.rating}</span>
      </div>
    </div>
  </div>`;
}

function renderPostsGrid(){
  loadSellerProducts();
  const g=document.getElementById('posts-grid');
  const e=document.getElementById('posts-empty');
  if(!g)return;
  if(!sellerProducts.length){g.innerHTML='';if(e)e.style.display='block';return;}
  if(e)e.style.display='none';
  g.innerHTML=sellerProducts.map(p=>postCard(p)).join('');
}

function openPostDetail(id){
  currentPost=sellerProducts.find(p=>p.id===id);
  if(!currentPost)return;
  renderPostDetail();
  sw('u','postdetail',null);
  window.scrollTo(0,0);
}

function renderPostDetail(){
  const p=currentPost;
  if(!p)return;
  const fullStars=Math.round(p.rating);
  const stars='★'.repeat(fullStars)+'☆'.repeat(5-fullStars);
  document.getElementById('postdetail-content').innerHTML=`
    <div style="display:grid;grid-template-columns:340px 1fr;gap:28px;align-items:start;flex-wrap:wrap">
      <div class="tcard" style="padding:0;overflow:hidden">
        <img src="${p.img}" alt="${p.name}" style="width:100%;height:320px;object-fit:cover" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?w=500'">
      </div>
      <div>
        <div style="font-size:11px;color:var(--txt3);text-transform:uppercase;letter-spacing:.6px;margin-bottom:4px">Seller listing${p.seller?' · '+p.seller:''}</div>
        <div style="font-size:22px;font-weight:800;color:var(--txt);margin-bottom:8px">${p.name}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
          <span style="color:#fbbf24;font-size:14px">${stars} <b style="color:var(--txt2);font-weight:600">${p.rating}</b></span>
        </div>
        <div style="font-family:var(--ffd);font-size:26px;font-weight:800;background:linear-gradient(90deg,var(--c1),var(--c3));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:18px">₹${Number(p.price).toLocaleString('en-IN')}</div>
        <div style="margin-bottom:18px">
          <span class="sh-title" style="margin-bottom:8px;display:block">Description</span>
          <div style="font-size:13px;color:var(--txt2);line-height:1.6">${p.description}</div>
        </div>
        <div class="scard" style="padding:14px;margin-bottom:14px;max-width:340px">
          <div style="font-size:11px;color:var(--txt3);margin-bottom:4px">Seller contact</div>
          <div style="font-size:14px;font-weight:700;color:var(--txt)"><i class="ti ti-phone" aria-hidden="true"></i> ${p.contact}</div>
        </div>
        <div style="margin-bottom:22px">
          <div style="font-size:12px;font-weight:700;color:var(--txt2);text-transform:uppercase;letter-spacing:.4px;margin-bottom:8px">Accepted payment methods</div>
          <div class="fbar" style="margin-bottom:0">${p.payments.map(pm=>`<span class="chip on" style="cursor:default">${pm}</span>`).join('')}</div>
        </div>
        <div class="frow" style="max-width:280px;margin-bottom:16px">
          <label>Pay with</label>
          <select id="pd-paymethod">${p.payments.map(pm=>`<option value="${pm}">${pm}</option>`).join('')}</select>
        </div>
        <button class="btn btn-p" onclick="placePostOrder(${p.id})"><i class="ti ti-shopping-cart" aria-hidden="true"></i>Place order</button>
      </div>
    </div>
  `;
}

function addDaysStr(days){
  const d=new Date();
  d.setDate(d.getDate()+days);
  return d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
}

function placePostOrder(id){
  const p=sellerProducts.find(x=>x.id===id)||currentPost;
  if(!p)return;
  const profile=loadProfile();
  const paySel=document.getElementById('pd-paymethod');
  const payment=paySel?paySel.value:(p.payments&&p.payments[0])||'—';
  const dateStr=new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'});
  orderSeq++;
  ORDERS.unshift({
    id:'#ORD-'+String(orderSeq).padStart(3,'0'),
    product:p.name,
    amount:p.price,
    date:dateStr,
    deliveryDate:addDaysStr(5),
    status:'Processing',
    customer:profile.name,
    address:profile.address,
    payment,
    seller:p.seller||'',
    source:'sellerpost'
  });
  saveOrders();
  renderOrders();
  renderSellerOrders();
  toast('Order placed — the seller will contact you shortly');
  sw('u','uorders',document.getElementById('ni-uorders'));
}

loadProfile();
loadSellerProfile();
loadOrders();
loadSellerProducts();
loadMessages();

function selRole(el,r){
  document.querySelectorAll('.role-btn').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');role=r;
}

function doLogin(){
  const e=document.getElementById('lemail').value;
  const p=document.getElementById('lpass').value;
  if(!e||!p){toast('Enter email and password');return;}
  document.getElementById('ls').classList.remove('active');
  const map={user:'us',seller:'ss',admin:'as'};
  const sc=document.getElementById(map[role]);
  sc.classList.add('active');
  toast('Signed in as '+role.charAt(0).toUpperCase()+role.slice(1));
  if(role==='user'){renderHP();renderAllP();renderCats();renderOrders();renderPostsGrid();renderUserMessages();}
  if(role==='seller'){renderSP();buildRevChart();renderSellerPostedTable();renderRecentOrders();renderSellerOrders();renderSellerMessages();}
  if(role==='admin'){renderAP();renderACats();renderAU();renderAS();renderAO();renderAdminMsgLog();renderCatRevenue();}
}

function logout(){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('ls').classList.add('active');
  toast('Signed out');
}

function sw(prefix,page,el){
  const map={u:'us',s:'ss',a:'as'};
  const scr=document.getElementById(map[prefix]);
  scr.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  const target=document.getElementById(prefix+'-'+page);
  if(target)target.classList.add('on');
  if(el){
    scr.querySelectorAll('.ni').forEach(n=>n.classList.remove('on'));
    el.classList.add('on');
  }
}

function pcard(p,showFull){
  const inW=wishSet.has(p.id);
  return`<div class="pcard" onclick="openDetail(${p.id})" style="cursor:pointer">
    <div class="pimg">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300'">
      ${p.badge?`<span class="pbadge">${p.badge}</span>`:''}
      <button class="pwish${inW?' on':''}" onclick="event.stopPropagation();toggleW(${p.id},this)" aria-label="${inW?'Remove from':'Add to'} wishlist">
        <i class="ti ti-heart${inW?'':''}" aria-hidden="true">${inW?'♥':'♡'}</i>
      </button>
    </div>
    <div class="pinfo">
      <div class="pname">${p.name}</div>
      <div class="pbrand">${p.brand} · ${p.color||p.cat}</div>
      <div class="prow">
        <span class="pprice">$${p.price}</span>
        <span class="pstars"><b>★</b> ${p.rating}</span>
      </div>
      <div style="font-size:11px;color:var(--txt3);margin-top:5px;margin-bottom:2px">Sold: <b style="color:var(--txt2)">${p.sold}</b></div>
      <button class="pcart" onclick="event.stopPropagation();addCart(${p.id})">Add to cart</button>
    </div>
  </div>`;
}

function renderHP(cat,q){
  let ps=PRODS.filter(p=>{
    const c=!cat||cat==='all'||p.cat===cat;
    const s=!q||p.name.toLowerCase().includes(q.toLowerCase())||p.brand.toLowerCase().includes(q.toLowerCase());
    return c&&s;
  }).slice(0,8);
  document.getElementById('hp-grid').innerHTML=ps.map(p=>pcard(p)).join('');
}

function renderAllP(cat,q){
  let ps=PRODS.filter(p=>{
    const c=!cat||cat==='all'||p.cat===cat;
    const s=!q||p.name.toLowerCase().includes(q.toLowerCase());
    return c&&s;
  });
  document.getElementById('all-grid').innerHTML=ps.map(p=>pcard(p)).join('');
}

function renderCats(){
  document.getElementById('cats-grid').innerHTML=CATS.map(c=>`
    <div class="cat-card" onclick="toast('Browsing '+c.name)">
      <div style="font-size:32px;margin-bottom:9px">${c.icon}</div>
      <div style="font-size:13px;font-weight:700;color:var(--txt)">${c.name}</div>
      <div style="font-size:11px;color:var(--txt3);margin-top:4px">${c.count} products</div>
    </div>`).join('');
}

function fcat(cat,el){
  activeCat=cat;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
  renderHP(cat);renderAllP(cat);
}

function filterP(q){renderHP(activeCat,q);renderAllP(activeCat,q);}

function sortP(v){
  let ps=[...PRODS];
  if(v==='pl')ps.sort((a,b)=>a.price-b.price);
  else if(v==='ph')ps.sort((a,b)=>b.price-a.price);
  else if(v==='r')ps.sort((a,b)=>b.rating-a.rating);
  document.getElementById('all-grid').innerHTML=ps.map(p=>pcard(p)).join('');
}

function toggleW(id,btn){
  if(wishSet.has(id)){wishSet.delete(id);btn.innerHTML='♡';btn.classList.remove('on');}
  else{wishSet.add(id);btn.innerHTML='♥';btn.classList.add('on');toast('Added to wishlist');}
  document.getElementById('wc').textContent=wishSet.size;
  renderWish();
}

function renderWish(){
  const ps=PRODS.filter(p=>wishSet.has(p.id));
  const g=document.getElementById('wish-grid');
  const e=document.getElementById('wish-empty');
  if(!ps.length){g.innerHTML='';e.style.display='block';}
  else{e.style.display='none';g.innerHTML=ps.map(p=>pcard(p)).join('');}
}

function addCart(id,color){
  const p=PRODS.find(x=>x.id===id);
  const chosenColor=color||p.color;
  const ex=cart.find(x=>x.id===id&&x.color===chosenColor);
  if(ex)ex.qty++;else cart.push({...p,color:chosenColor,qty:1});
  document.getElementById('cc').textContent=cart.reduce((a,c)=>a+c.qty,0);
  toast(p.name+' ('+chosenColor+') added to cart');
  renderCart();
}

function openDetail(id){
  currentDetail=PRODS.find(p=>p.id===id);
  if(!currentDetail)return;
  selectedColor=currentDetail.colors[0];
  renderDetail();
  sw('u','pdetail',null);
  window.scrollTo(0,0);
}

function selectColor(c,el){
  selectedColor=c;
  document.querySelectorAll('.color-swatch').forEach(s=>{
    s.classList.remove('on');
    s.style.borderColor='var(--border-g)';
    s.style.background='var(--glass2)';
  });
  el.classList.add('on');
  el.style.borderColor='var(--c1)';
  el.style.background='rgba(99,102,241,0.18)';
}

function addCartFromDetail(){
  if(!currentDetail)return;
  addCart(currentDetail.id,selectedColor);
}

function toggleWFromDetail(id,btn){
  toggleW(id,btn);
  renderDetail();
}

function renderDetail(){
  const p=currentDetail;
  if(!p)return;
  const inW=wishSet.has(p.id);
  const fullStars=Math.round(p.rating);
  const stars='★'.repeat(fullStars)+'☆'.repeat(5-fullStars);
  document.getElementById('pdetail-content').innerHTML=`
    <div style="display:grid;grid-template-columns:340px 1fr;gap:28px;align-items:start;flex-wrap:wrap">
      <div>
        <div class="tcard" style="padding:0;overflow:hidden">
          <img src="${p.img}" alt="${p.name}" style="width:100%;height:320px;object-fit:cover" onerror="this.src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300'">
        </div>
      </div>
      <div>
        <div style="font-size:11px;color:var(--txt3);text-transform:uppercase;letter-spacing:.6px;margin-bottom:4px">${p.brand} · ${p.cat}</div>
        <div style="font-size:22px;font-weight:800;color:var(--txt);margin-bottom:8px">${p.name}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">
          <span style="color:#fbbf24;font-size:14px">${stars} <b style="color:var(--txt2);font-weight:600">${p.rating}</b></span>
          <span style="font-size:12px;color:var(--txt3)">(${p.rev} reviews)</span>
          <span style="font-size:12px;color:var(--txt3)">· ${p.sold} sold</span>
        </div>
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px;flex-wrap:wrap">
          <span style="font-family:var(--ffd);font-size:26px;font-weight:800;background:linear-gradient(90deg,var(--c1),var(--c3));-webkit-background-clip:text;-webkit-text-fill-color:transparent">$${p.price}</span>
          <span style="font-size:15px;color:var(--txt3);text-decoration:line-through">$${p.marketPrice}</span>
          <span style="font-size:13px;font-weight:700;color:#34d399">${p.discount}% off</span>
        </div>
        <div style="font-size:12px;color:var(--txt3);margin-bottom:18px">Inclusive of all taxes</div>

        <div style="margin-bottom:18px">
          <div style="font-size:12px;font-weight:700;color:var(--txt2);text-transform:uppercase;letter-spacing:.4px;margin-bottom:8px">Select color</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${p.colors.map(c=>`<button class="color-swatch${c===selectedColor?' on':''}" onclick="selectColor('${c}',this)" style="padding:8px 16px;border-radius:10px;border:1px solid ${c===selectedColor?'var(--c1)':'var(--border-g)'};background:${c===selectedColor?'rgba(99,102,241,0.18)':'var(--glass2)'};color:var(--txt);font-size:12px;font-weight:600;cursor:pointer">${c}</button>`).join('')}
          </div>
        </div>

        <div style="display:flex;gap:10px;margin-bottom:22px;align-items:center">
          <button class="btn btn-p" onclick="addCartFromDetail()" ${p.inStock?'':'disabled style="opacity:.5;cursor:not-allowed"'}><i class="ti ti-shopping-cart" aria-hidden="true"></i>Add to cart</button>
          <button class="pwish${inW?' on':''}" style="position:static;width:44px;height:44px" onclick="toggleWFromDetail(${p.id},this)" aria-label="Toggle wishlist"><i class="ti ti-heart" aria-hidden="true">${inW?'♥':'♡'}</i></button>
        </div>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:22px">
          <div class="scard" style="padding:12px"><div style="font-size:11px;color:var(--txt3)">Stock</div><div style="font-size:13px;font-weight:700;color:${p.inStock?'#34d399':'var(--c4)'}">${p.inStock?p.stockQty+' available':'Out of stock'}</div></div>
          <div class="scard" style="padding:12px"><div style="font-size:11px;color:var(--txt3)">Warranty</div><div style="font-size:13px;font-weight:700;color:var(--txt)">${p.warranty}</div></div>
          <div class="scard" style="padding:12px"><div style="font-size:11px;color:var(--txt3)">Delivery</div><div style="font-size:13px;font-weight:700;color:var(--txt)">${p.delDays} days, free</div></div>
        </div>

        <div style="margin-bottom:22px">
          <span class="sh-title" style="margin-bottom:8px;display:block">Description</span>
          <div style="font-size:13px;color:var(--txt2);line-height:1.6">${p.description}</div>
        </div>

        <div style="margin-bottom:22px">
          <span class="sh-title" style="margin-bottom:10px;display:block">Key features</span>
          <ul style="margin:0;padding-left:18px;color:var(--txt2);font-size:13px;line-height:1.9">
            ${p.features.map(f=>`<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-bottom:22px">
          <span class="sh-title" style="margin-bottom:10px;display:block">Specifications</span>
          <div class="tcard">
            <table class="dtbl">
              <tbody>
                ${p.specs.map(s=>`<tr><td style="width:160px;color:var(--txt3)">${s[0]}</td><td style="color:var(--txt)">${s[1]}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <span class="sh-title" style="margin-bottom:10px;display:block">Customer reviews</span>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${p.reviews.map(r=>`
              <div class="tcard" style="padding:14px 16px">
                <div style="display:flex;justify-content:space-between;margin-bottom:6px">
                  <span style="font-size:13px;font-weight:700;color:var(--txt)">${r.name}</span>
                  <span style="color:#fbbf24;font-size:12px">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
                </div>
                <div style="font-size:12px;color:var(--txt2)">${r.text}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function placeOrder(){
  if(!cart.length){toast('Your cart is empty');return;}
  const profile=loadProfile();
  const dateStr=new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'});
  cart.forEach(item=>{
    orderSeq++;
    ORDERS.unshift({
      id:'#ORD-'+String(orderSeq).padStart(3,'0'),
      product:item.name+' ('+item.color+')'+(item.qty>1?' x'+item.qty:''),
      amount:item.price*item.qty,
      date:dateStr,
      deliveryDate:addDaysStr(5),
      status:'Processing',
      customer:profile.name,
      address:profile.address,
      payment:'Cash on Delivery',
      source:'catalog'
    });
  });
  cart=[];
  document.getElementById('cc').textContent='0';
  renderCart();
  saveOrders();
  renderOrders();
  renderSellerOrders();
  toast('Order placed — delivery in 3–5 days');
  sw('u','uorders',document.getElementById('ni-uorders'));
}

function orderBadgeClass(status){
  if(status==='Delivered')return's-ok';
  if(status==='Shipped')return's-warn';
  if(status==='Cancelled')return's-err';
  return's-info';
}

function renderOrders(){
  const tb=document.getElementById('orders-tbody');
  if(!tb)return;
  if(!ORDERS.length){
    tb.innerHTML='<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--txt3)">No orders yet — your placed orders will show up here.</td></tr>';
    return;
  }
  tb.innerHTML=ORDERS.map(o=>{
    const eligible=o.status!=='Shipped'&&o.status!=='Delivered'&&o.status!=='Cancelled';
    const action=eligible
      ?`<button class="btn btn-d btn-sm" onclick="cancelOrder('${o.id}')">Cancel order</button>`
      :`<span style="font-size:11px;color:var(--txt3)">${o.status==='Cancelled'?'Cancelled':'Not eligible'}</span>`;
    return `<tr><td>${o.id}</td><td>${o.product}</td><td>$${o.amount}</td><td>${o.date}</td><td><span class="sbadge ${orderBadgeClass(o.status)}">${o.status}</span></td><td>${action}</td></tr>`;
  }).join('');
}

function renderSellerOrders(){
  const tb=document.getElementById('s-orders-tbody');
  const cnt=document.getElementById('s-ordercount');
  const badge=document.getElementById('s-orderbadge');
  const sellerOrders=ORDERS.filter(o=>o.source==='sellerpost');
  if(cnt)cnt.textContent='Orders ('+sellerOrders.length+')';
  if(badge)badge.textContent=sellerOrders.filter(o=>o.status==='Processing').length;
  if(!tb)return;
  if(!sellerOrders.length){
    tb.innerHTML='<tr><td colspan="10" style="text-align:center;padding:30px;color:var(--txt3)">No orders yet — orders placed against your posted products will show up here.</td></tr>';
    return;
  }
  tb.innerHTML=sellerOrders.map(o=>{
    let action;
    if(o.status==='Processing')action=`<button class="btn btn-s btn-sm" onclick="updateOrderStatus('${o.id}','Shipped')">Ship</button>`;
    else if(o.status==='Shipped')action=`<button class="btn btn-s btn-sm" onclick="updateOrderStatus('${o.id}','Delivered')">Deliver</button>`;
    else action=`<span style="font-size:11px;color:var(--txt3)">${o.status==='Cancelled'?'Cancelled':'Done'}</span>`;
    return `<tr>
      <td>${o.id}</td>
      <td>${o.customer||'—'}</td>
      <td>${o.product}</td>
      <td>₹${Number(o.amount).toLocaleString('en-IN')}</td>
      <td style="max-width:180px;white-space:normal;font-size:12px;color:var(--txt2)">${o.address||'—'}</td>
      <td>${o.date}</td>
      <td>${o.deliveryDate||'—'}</td>
      <td>${o.payment||'—'}</td>
      <td><span class="sbadge ${orderBadgeClass(o.status)}">${o.status}</span></td>
      <td>${action}</td>
    </tr>`;
  }).join('');
}

function updateOrderStatus(id,status){
  const o=ORDERS.find(x=>x.id===id);
  if(!o)return;
  o.status=status;
  saveOrders();
  renderOrders();
  renderSellerOrders();
  toast('Order marked as '+status);
}

function clearAllOrders(){
  const sellerOrders=ORDERS.filter(o=>o.source==='sellerpost');
  if(!sellerOrders.length){toast('No orders to clear');return;}
  ORDERS=ORDERS.filter(o=>o.source!=='sellerpost');
  saveOrders();
  renderOrders();
  renderSellerOrders();
  toast('All orders cleared');
}

function renderCart(){
  const cl=document.getElementById('cart-list');
  const ce=document.getElementById('cart-empty');
  const cs=document.getElementById('cart-sum');
  if(!cart.length){cl.innerHTML='';ce.style.display='block';cs.style.display='none';return;}
  ce.style.display='none';cs.style.display='block';
  cl.innerHTML=cart.map(c=>`
    <div class="cart-item">
      <img class="cart-thumb" src="${c.img}" alt="${c.name}" onerror="this.src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300'">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600;color:var(--txt)">${c.name}</div>
        <div style="font-size:11px;color:var(--txt3)">${c.brand}</div>
        <div style="font-size:14px;font-weight:800;margin-top:4px;background:linear-gradient(90deg,var(--c1),var(--c3));-webkit-background-clip:text;-webkit-text-fill-color:transparent">$${c.price}</div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="chgQty(${c.id},-1)" aria-label="Decrease">−</button>
        <span style="font-size:13px;font-weight:700;color:var(--txt);min-width:20px;text-align:center">${c.qty}</span>
        <button class="qty-btn" onclick="chgQty(${c.id},1)" aria-label="Increase">+</button>
        <button class="qty-btn" style="color:var(--c4);border-color:rgba(244,63,94,0.2)" onclick="rmCart(${c.id})" aria-label="Remove">✕</button>
      </div>
    </div>`).join('');
  const tot=cart.reduce((a,c)=>a+c.price*c.qty,0);
  document.getElementById('csubt').textContent='$'+tot;
  document.getElementById('ctot').textContent='$'+tot;
}

function chgQty(id,d){
  const i=cart.find(c=>c.id===id);
  if(i){i.qty+=d;if(i.qty<=0)rmCart(id);else{document.getElementById('cc').textContent=cart.reduce((a,c)=>a+c.qty,0);renderCart();}}
}
function rmCart(id){
  cart=cart.filter(c=>c.id!==id);
  document.getElementById('cc').textContent=cart.reduce((a,c)=>a+c.qty,0);
  renderCart();
}

function renderSP(){
  loadSellerProducts();
  const cnt=document.getElementById('s-prodcount');
  if(cnt)cnt.textContent='My products ('+sellerProducts.length+')';
  const tb=document.getElementById('s-ptbl');
  if(!tb)return;
  if(!sellerProducts.length){
    tb.innerHTML='<tr><td colspan="5" style="text-align:center;padding:30px;color:var(--txt3)">You haven\'t posted any products yet — use "Add product" to publish your first listing.</td></tr>';
    return;
  }
  tb.innerHTML=sellerProducts.map(p=>`
    <tr>
      <td><div style="display:flex;align-items:center;gap:8px"><img src="${p.img}" style="width:32px;height:32px;object-fit:cover;border-radius:7px" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?w=500'">${p.name}</div></td>
      <td style="color:var(--txt)">₹${Number(p.price).toLocaleString('en-IN')}</td>
      <td style="color:#fbbf24">★ ${p.rating}</td>
      <td style="color:var(--txt2)">${p.contact||'—'}</td>
      <td style="display:flex;gap:6px;padding:12px 0">
        <button class="btn btn-g btn-sm" onclick="editSellerProduct(${p.id})"><i class="ti ti-edit" aria-hidden="true"></i>Edit</button>
        <button class="btn btn-d btn-sm" onclick="deleteSellerProduct(${p.id})"><i class="ti ti-trash" aria-hidden="true"></i>Delete</button>
      </td>
    </tr>`).join('');
}

function renderRecentOrders(){
  loadSellerProducts();
  const tb=document.getElementById('s-recorders-tbody');
  if(!tb)return;
  if(!sellerProducts.length){
    tb.innerHTML='<tr><td colspan="3" style="text-align:center;padding:24px;color:var(--txt3)">No products posted yet — add one to see it here.</td></tr>';
    return;
  }
  tb.innerHTML=sellerProducts.slice(0,5).map(p=>`
    <tr><td>${p.name}</td><td>₹${Number(p.price).toLocaleString('en-IN')}</td><td><span class="sbadge s-ok">Live</span></td></tr>`).join('');
}

let userPage=1;
const USERS_PER_PAGE=50;

function renderAU(resetPage){
  if(resetPage)userPage=1;
  const q=(document.getElementById('a-usersearch')?.value||'').toLowerCase().trim();
  const list=q?USERS.filter(u=>u.name.toLowerCase().includes(q)||u.email.toLowerCase().includes(q)):USERS;
  const cnt=document.getElementById('a-usercount');
  if(cnt)cnt.textContent='All users ('+USERS.length.toLocaleString('en-IN')+')'+(q?' — '+list.length+' matching':'');
  const tb=document.getElementById('a-utbl');
  if(!tb)return;
  if(!list.length){
    tb.innerHTML='<tr><td colspan="5" style="text-align:center;padding:30px;color:var(--txt3)">No users match your search.</td></tr>';
    const pg=document.getElementById('a-userpager');
    if(pg)pg.innerHTML='';
    return;
  }
  const totalPages=Math.max(1,Math.ceil(list.length/USERS_PER_PAGE));
  if(userPage>totalPages)userPage=totalPages;
  const start=(userPage-1)*USERS_PER_PAGE;
  const pageItems=list.slice(start,start+USERS_PER_PAGE);
  let meRow='';
  if(userPage===1&&!q){
    const profile=loadProfile();
    meRow=`<tr style="background:rgba(99,102,241,0.08)">
      <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--c1),var(--c2));display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#fff">${initials(profile.name)}</div>${profile.name}<span style="font-size:9px;font-weight:800;color:var(--c1);background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:10px;padding:2px 7px;letter-spacing:.4px">YOU</span></div></td>
      <td>${profile.email}</td>
      <td>—</td>
      <td><span class="sbadge s-ok">Active</span></td>
      <td style="font-size:11px;color:var(--txt3);padding:12px 0">Account owner</td>
    </tr>`;
  }
  tb.innerHTML=meRow+pageItems.map(u=>{
    const active=u.status==='Active';
    const action=active
      ?`<button class="btn btn-d btn-sm" onclick="adminSetUserStatus(${u.id},'Suspended')">Suspend</button>`
      :`<button class="btn btn-s btn-sm" onclick="adminSetUserStatus(${u.id},'Active')">Restore</button>`;
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:${u.grad};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#fff">${u.initials}</div>${u.name}</div></td>
      <td>${u.email}</td>
      <td>${u.joined}</td>
      <td><span class="sbadge ${active?'s-ok':'s-err'}">${u.status}</span></td>
      <td style="display:flex;gap:6px;padding:12px 0">${action}<button class="btn btn-d btn-sm" onclick="adminDeleteUser(${u.id})">Delete</button></td>
    </tr>`;
  }).join('');
  const pg=document.getElementById('a-userpager');
  if(pg){
    pg.innerHTML=`
      <button class="btn btn-g btn-sm" ${userPage<=1?'disabled':''} onclick="userPage--;renderAU()">← Prev</button>
      <span style="font-size:12px;color:var(--txt2)">Page ${userPage} of ${totalPages} · showing ${start+1}–${Math.min(start+USERS_PER_PAGE,list.length)} of ${list.length}</span>
      <button class="btn btn-g btn-sm" ${userPage>=totalPages?'disabled':''} onclick="userPage++;renderAU()">Next →</button>
    `;
  }
}

function adminSetUserStatus(id,status){
  const u=USERS.find(x=>x.id===id);
  if(!u)return;
  u.status=status;
  renderAU();
  toast('User '+(status==='Active'?'restored':'suspended'));
}

function adminDeleteUser(id){
  const idx=USERS.findIndex(x=>x.id===id);
  if(idx>-1)USERS.splice(idx,1);
  renderAU();
  toast('User deleted');
}

let sellerPage=1;
const SELLERS_PER_PAGE=25;

function renderAS(resetPage){
  if(resetPage)sellerPage=1;
  const cnt=document.getElementById('a-sellercount');
  if(cnt)cnt.textContent='Sellers ('+SELLERS.length+')';
  const tb=document.getElementById('a-stbl');
  if(!tb)return;
  if(!SELLERS.length){
    tb.innerHTML='<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--txt3)">No sellers yet.</td></tr>';
    const pg=document.getElementById('a-sellerpager');
    if(pg)pg.innerHTML='';
    return;
  }
  const totalPages=Math.max(1,Math.ceil(SELLERS.length/SELLERS_PER_PAGE));
  if(sellerPage>totalPages)sellerPage=totalPages;
  const start=(sellerPage-1)*SELLERS_PER_PAGE;
  const pageItems=SELLERS.slice(start,start+SELLERS_PER_PAGE);
  let meRow='';
  if(sellerPage===1){
    const sp=loadSellerProfile();
    meRow=`<tr style="background:rgba(245,158,11,0.08)">
      <td><strong style="color:var(--txt);display:flex;align-items:center;gap:8px">${sp.shop}<span style="font-size:9px;font-weight:800;color:#fbbf24;background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.3);border-radius:10px;padding:2px 7px;letter-spacing:.4px">YOUR SHOP</span></strong></td>
      <td>${sp.email}</td>
      <td>${sellerProducts.length}</td>
      <td>—</td>
      <td><span class="sbadge s-ok">Active</span></td>
      <td style="font-size:11px;color:var(--txt3);padding:12px 0">Account owner</td>
    </tr>`;
  }
  tb.innerHTML=meRow+pageItems.map(s=>{
    const active=s.status==='Active';
    const action=active
      ?`<button class="btn btn-d btn-sm" onclick="adminSetSellerStatus(${s.id},'Suspended')">Suspend</button>`
      :`<button class="btn btn-s btn-sm" onclick="adminSetSellerStatus(${s.id},'Active')">Restore</button>`;
    return `<tr>
      <td><strong style="color:var(--txt)">${s.shop}</strong></td>
      <td>${s.email}</td>
      <td>${s.products}</td>
      <td>${s.revenue}</td>
      <td><span class="sbadge ${active?'s-ok':'s-err'}">${s.status}</span></td>
      <td style="display:flex;gap:6px;padding:12px 0">${action}<button class="btn btn-d btn-sm" onclick="adminDeleteSeller(${s.id})">Delete</button></td>
    </tr>`;
  }).join('');
  const pg=document.getElementById('a-sellerpager');
  if(pg){
    pg.innerHTML=`
      <button class="btn btn-g btn-sm" ${sellerPage<=1?'disabled':''} onclick="sellerPage--;renderAS()">← Prev</button>
      <span style="font-size:12px;color:var(--txt2)">Page ${sellerPage} of ${totalPages} · showing ${start+1}–${Math.min(start+SELLERS_PER_PAGE,SELLERS.length)} of ${SELLERS.length}</span>
      <button class="btn btn-g btn-sm" ${sellerPage>=totalPages?'disabled':''} onclick="sellerPage++;renderAS()">Next →</button>
    `;
  }
}

function adminSetSellerStatus(id,status){
  const s=SELLERS.find(x=>x.id===id);
  if(!s)return;
  s.status=status;
  renderAS();
  toast('Seller '+(status==='Active'?'restored':'suspended'));
}

function adminDeleteSeller(id){
  const idx=SELLERS.findIndex(x=>x.id===id);
  if(idx>-1)SELLERS.splice(idx,1);
  renderAS();
  toast('Seller deleted');
}

let adminOrderPage=1;
const ADMIN_ORDERS_PER_PAGE=20;

function renderAO(resetPage){
  if(resetPage)adminOrderPage=1;
  const cnt=document.getElementById('a-ordercount');
  if(cnt)cnt.textContent='All orders (892)'+(ADMIN_ORDERS.length?' — '+ADMIN_ORDERS.length+' shown':'');
  const tb=document.getElementById('a-otbl');
  if(!tb)return;
  if(!ADMIN_ORDERS.length){
    tb.innerHTML='<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--txt3)">No orders yet.</td></tr>';
    const pg=document.getElementById('a-orderpager');
    if(pg)pg.innerHTML='';
    return;
  }
  const totalPages=Math.max(1,Math.ceil(ADMIN_ORDERS.length/ADMIN_ORDERS_PER_PAGE));
  if(adminOrderPage>totalPages)adminOrderPage=totalPages;
  const start=(adminOrderPage-1)*ADMIN_ORDERS_PER_PAGE;
  const pageItems=ADMIN_ORDERS.slice(start,start+ADMIN_ORDERS_PER_PAGE);
  tb.innerHTML=pageItems.map(o=>{
    let action;
    if(o.status==='Delivered')action=`<button class="btn btn-d btn-sm" onclick="adminSetOrderStatus('${o.id}','Cancelled')">Cancel</button><button class="btn btn-g btn-sm" onclick="adminSetOrderStatus('${o.id}','Refunded')">Refund</button>`;
    else if(o.status==='Shipped')action=`<button class="btn btn-d btn-sm" onclick="adminSetOrderStatus('${o.id}','Cancelled')">Cancel</button><button class="btn btn-s btn-sm" onclick="adminSetOrderStatus('${o.id}','Delivered')">Deliver</button>`;
    else if(o.status==='Processing')action=`<button class="btn btn-d btn-sm" onclick="adminSetOrderStatus('${o.id}','Cancelled')">Cancel</button>`;
    else action=`<span style="font-size:11px;color:var(--txt3)">${o.status}</span>`;
    return `<tr>
      <td>${o.id}</td>
      <td>${o.customer}</td>
      <td>${o.product}</td>
      <td>₹${Number(o.amount).toLocaleString('en-IN')}</td>
      <td><span class="sbadge ${orderBadgeClass(o.status)}">${o.status}</span></td>
      <td style="display:flex;gap:6px;padding:12px 0">${action}</td>
    </tr>`;
  }).join('');
  const pg=document.getElementById('a-orderpager');
  if(pg){
    pg.innerHTML=`
      <button class="btn btn-g btn-sm" ${adminOrderPage<=1?'disabled':''} onclick="adminOrderPage--;renderAO()">← Prev</button>
      <span style="font-size:12px;color:var(--txt2)">Page ${adminOrderPage} of ${totalPages} · showing ${start+1}–${Math.min(start+ADMIN_ORDERS_PER_PAGE,ADMIN_ORDERS.length)} of ${ADMIN_ORDERS.length}</span>
      <button class="btn btn-g btn-sm" ${adminOrderPage>=totalPages?'disabled':''} onclick="adminOrderPage++;renderAO()">Next →</button>
    `;
  }
}

function adminSetOrderStatus(id,status){
  const o=ADMIN_ORDERS.find(x=>x.id===id);
  if(!o)return;
  o.status=status;
  renderAO();
  toast('Order '+status.toLowerCase());
}

let catRevPeriod='monthly';

function setCatRevPeriod(p){
  catRevPeriod=p;
  const mBtn=document.getElementById('catrev-btn-monthly');
  const yBtn=document.getElementById('catrev-btn-yearly');
  if(mBtn)mBtn.className='btn btn-sm '+(p==='monthly'?'btn-p':'btn-g');
  if(yBtn)yBtn.className='btn btn-sm '+(p==='yearly'?'btn-p':'btn-g');
  renderCatRevenue();
}

function renderCatRevenue(){
  const el=document.getElementById('a-catrev');
  if(!el)return;
  const totals={};
  PRODS.forEach(p=>{
    const rev=p.price*p.sold;
    totals[p.cat]=(totals[p.cat]||0)+rev;
  });
  let entries=Object.entries(totals);
  if(catRevPeriod==='monthly'){
    // Yearly totals broken down into a representative month's run-rate, with slight per-category variance
    entries=entries.map(([cat,rev],i)=>{
      const variance=0.75+seededRand(i*29+7)*0.5;
      return [cat,Math.round(rev/12*variance)];
    });
  }
  entries.sort((a,b)=>b[1]-a[1]);
  if(!entries.length){
    el.innerHTML='<div style="padding:16px;color:var(--txt3);font-size:12px">No product data available.</div>';
    return;
  }
  const colors=['#22d3ee','#8b5cf6','#34d399','#ec4899','#f59e0b','#60a5fa','#f87171','#a3e635','#fb7185','#2dd4bf'];
  const max=entries[0][1]||1;
  const W=Math.max(760,entries.length*90),H=360;
  const padL=54,padR=20,padT=24,padB=64;
  const plotW=W-padL-padR,plotH=H-padT-padB;
  const gridLines=5;
  const niceMax=Math.ceil(max/100000)*100000||100000;
  const barSlot=plotW/entries.length;
  const barW=Math.min(56,barSlot*0.5);
  let gridSvg='';
  for(let g=0;g<=gridLines;g++){
    const y=padT+plotH-(plotH*g/gridLines);
    const val=niceMax*g/gridLines;
    gridSvg+=`<line x1="${padL}" y1="${y}" x2="${W-padR}" y2="${y}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${padL-10}" y="${y+4}" font-size="11" fill="var(--txt3)" text-anchor="end" font-family="var(--ff)">₹${(val/100000).toFixed(1)}L</text>`;
  }
  let barsSvg='',legendSvg='';
  entries.forEach(([cat,rev],i)=>{
    const cx=padL+barSlot*i+barSlot/2;
    const bh=Math.max(4,(rev/niceMax)*plotH);
    const y=padT+plotH-bh;
    const color=colors[i%colors.length];
    const label=rev>=100000?'₹'+(rev/100000).toFixed(1)+'L':'₹'+rev.toLocaleString('en-IN');
    barsSvg+=`
      <rect x="${cx-barW/2}" y="${y}" width="${barW}" height="${bh}" rx="4" fill="${color}22" stroke="${color}" stroke-width="1.6" filter="url(#glow-${i%colors.length})"/>
      <text x="${cx}" y="${y-8}" font-size="11" fill="${color}" text-anchor="middle" font-weight="700" font-family="var(--ff)">${label}</text>
      <text x="${cx}" y="${H-padB+18}" font-size="10.5" fill="var(--txt2)" text-anchor="middle" font-family="var(--ff)">${cat.length>12?cat.slice(0,11)+'…':cat}</text>`;
  });
  const filters=colors.map((c,i)=>`
    <filter id="glow-${i}" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>`).join('');
  const legendHtml=entries.map(([cat],i)=>{
    const color=colors[i%colors.length];
    return `<span style="display:inline-flex;align-items:center;gap:6px;font-size:11.5px;color:var(--txt2)"><span style="width:11px;height:11px;border-radius:3px;background:${color};display:inline-block"></span>${cat}</span>`;
  }).join('');
  const caption=catRevPeriod==='monthly'?'Current month run-rate by category':'Full year total by category';
  el.innerHTML=`<div style="font-size:11px;color:var(--txt3);margin-bottom:10px">${caption}</div>
    <div style="display:flex;flex-wrap:wrap;gap:16px;margin-bottom:14px">${legendHtml}</div>
    <div style="overflow-x:auto"><svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;min-width:${W}px">
    <defs>${filters}</defs>
    ${gridSvg}
    <line x1="${padL}" y1="${padT+plotH}" x2="${W-padR}" y2="${padT+plotH}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    ${barsSvg}
  </svg></div>`;
}

function renderAP(){
  const cnt=document.getElementById('a-prodcount');
  if(cnt)cnt.textContent='All products ('+PRODS.length+')';
  const tb=document.getElementById('a-ptbl');
  if(!tb)return;
  if(!PRODS.length){
    tb.innerHTML='<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--txt3)">No products left.</td></tr>';
    return;
  }
  tb.innerHTML=PRODS.map(p=>{
    const hidden=!!p.adminHidden;
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:8px"><img src="${p.img}" style="width:32px;height:32px;object-fit:cover;border-radius:7px" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?w=500'">${p.name}</div></td>
      <td style="color:var(--txt2)">Tech Store</td>
      <td style="color:var(--txt2)">${p.cat}</td>
      <td style="color:var(--txt)">₹${p.price.toLocaleString('en-IN')}</td>
      <td><span class="sbadge ${hidden?'s-warn':'s-ok'}">${hidden?'Hidden':'Active'}</span></td>
      <td style="display:flex;gap:6px;padding:12px 0">
        <button class="btn btn-g btn-sm" onclick="adminToggleProductHidden(${p.id})">${hidden?'Unhide':'Hide'}</button>
        <button class="btn btn-d btn-sm" onclick="adminDeleteProduct(${p.id})">Delete</button>
      </td>
    </tr>`;
  }).join('');
}

function adminToggleProductHidden(id){
  const p=PRODS.find(x=>x.id===id);
  if(!p)return;
  p.adminHidden=!p.adminHidden;
  renderAP();
  toast(p.adminHidden?'Product hidden':'Product unhidden');
}

function adminDeleteProduct(id){
  const idx=PRODS.findIndex(x=>x.id===id);
  if(idx>-1)PRODS.splice(idx,1);
  renderAP();
  renderCatRevenue();
  toast('Product deleted');
}

function renderACats(){
  document.getElementById('a-catsGrid').innerHTML=CATS.map(c=>`
    <div class="cat-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:28px">${c.icon}</span>
        <div style="display:flex;gap:6px">
          <button class="btn btn-g btn-sm" onclick="toast('Edit category')">Edit</button>
          <button class="btn btn-d btn-sm" onclick="toast('Category deleted')">Del</button>
        </div>
      </div>
      <div style="font-size:13px;font-weight:700;color:var(--txt)">${c.name}</div>
      <div style="font-size:11px;color:var(--txt3);margin-top:3px">${c.count} products</div>
    </div>`).join('');
}

function buildRevChart(){
  const months=['Jan','Feb','Mar','Apr','May','Jun'];
  const vals=[45,62,38,71,58,84];
  const mx=Math.max(...vals);
  document.getElementById('s-revchart').innerHTML=vals.map((v,i)=>`<div class="rev-bar" style="height:${Math.round(v/mx*100)}%" data-v="₹${v}K"></div>`).join('');
  document.getElementById('s-revlbls').innerHTML=months.map(m=>`<div class="rev-m">${m}</div>`).join('');
}

function openAddProd(){editingProductId=null;resetNPForm();sw('s','saddprod',document.getElementById('ni-saddprod'));renderSellerPostedTable();}
function closeAddProd(){sw('s','sdash',document.querySelector('#ss .ni'));} 
function saveProd(){closeAddProd();toast('Product published');}

let _tid;
function toast(msg){
  const el=document.getElementById('toastEl');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(_tid);_tid=setTimeout(()=>el.classList.remove('show'),3200);
}
