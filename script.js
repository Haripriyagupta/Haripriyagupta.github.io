/* Haripriya Gupta — chess portfolio animation and interaction */
(function(){
var N=10,C={n:'#2A2440',r:'#E8303F',g:'#F2A93B',c:'#F1E2CA',t:'#14574A',p:'#E58A8A'},rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var LITE=matchMedia('(pointer:coarse)').matches||innerWidth<=820;if(LITE)document.body.classList.add('lite');
var svg=document.getElementById('st'),$=function(i){return document.getElementById(i)},bg=['#171428',C.r,C.t,'#4A4272',C.g,'#141218',C.n,C.r,'#5B5380',C.n];
function U(id,s,f){return '<use href="#'+id+'" width="100" height="130" fill="'+f+'" transform="translate('+(-50*s)+' '+(-65*s)+') scale('+s+')"/>'}
function K(x){return Math.max(0,Math.min(1,x))}
function E(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
function tr(id,s){$(id).setAttribute('transform',s)}
var B=[
 function(){var s='<g id="hs"><circle cx="270" cy="-70" r="330" fill="'+C.r+'"/><circle cx="-430" cy="270" r="175" fill="'+C.g+'"/><path d="M300 -450L800 -205" stroke="'+C.hd+'" stroke-width="9"/><path d="M270 -405L800 -145" stroke="'+C.g+'" stroke-width="5"/><path d="M245 -360L800 -90" stroke="'+C.hd+'" stroke-width="3"/><circle cx="480" cy="-215" r="66" fill="'+C.hd+'"/></g><g id="fl">'+F(C.f1,C.f2)+'</g>',i;
  for(i=0;i<7;i++)s+='<g class="hp">'+V(['rook','knight','queen','king','bishop','knight','rook'][i],C.pa)+'</g>';
  for(i=0;i<7;i++)s+='<g class="hw">'+V('pawn',C.pb)+'</g>';
  return s+'<g id="hn">'+V('knight',C.r,C.c)+'</g>'+'<g id="tw">'+TW.map(function(q,j){return '<path d="M0-16Q2-2 16 0Q2 2 0 16Q-2 2-16 0Q-2-2 0-16Z" fill="'+(j%2?C.hd:C.g)+'"/>'}).join('')+'</g><g id="stk" opacity="0"><polygon points="-600,350 600,-300 600,-230" fill="'+C.r+'"/><polygon points="-600,370 600,-240 600,-205" fill="'+C.hd+'"/></g><defs><radialGradient id="vg"><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="'+C.vg+'" stop-opacity="'+C.vo+'"/></radialGradient></defs><rect x="-1600" y="-900" width="3200" height="1800" fill="url(#vg)"/><g id="ot"><text text-anchor="middle" y="0" font-family="DM Sans,sans-serif" font-weight="700" font-size="46" fill="'+C.tx+'">A <tspan fill="'+C.r+'">HARIPRIYA GUPTA</tspan> ORIGINAL PORTFOLIO</text><path d="M-170 26Q0 46 170 16" stroke="'+C.r+'" stroke-width="6" fill="none" stroke-linecap="round"/></g>'},
 function(){return '<g id="k1"><polygon points="0,0 -1100,-150 -1100,150" fill="'+C.g+'"/>'+U('knight',2.8,C.n)+'</g>'},
 function(){var s='<g id="sp">',i,a,r,z,col=[C.r,C.p,C.v,C.g,C.n,C.m];for(i=0;i<64;i++){a=i*.45;r=70+i*8;z=26+i*1.3;s+='<rect x="'+(-z/2)+'" y="'+(-z/2)+'" width="'+z+'" height="'+z+'" fill="'+col[i%6]+'" transform="translate('+(r*Math.cos(a))+' '+(r*Math.sin(a))+') rotate('+(a*57.3+90)+')"/>'}
  return s+'</g><circle r="46" fill="'+C.r+'"/><g id="k2">'+U('pawn',.7,C.c)+'</g>'},
 function(){return '<circle id="cc" r="300" fill="'+C.r+'"/><rect id="ln" x="-3" y="-1000" width="6" height="0" fill="'+C.r+'"/><g id="k3">'+U('queen',5.5,C.n)+'</g>'+H(2.6,'qh')},
 function(){var s='',x,y;for(y=0;y<8;y++)for(x=0;x<8;x++)s+='<rect class="sq" x="-37" y="-37" width="74" height="74" fill="'+((x+y)%2?C.bd:C.fc)+'"/>';return '<g id="bd">'+s+'</g>'},
 function(){var s='<g id="ry">',i;for(i=0;i<12;i++)s+='<rect x="170" y="-9" width="1000" height="18" fill="'+C.rg+'" transform="rotate('+i*30+')"/>';
  return s+'</g><g id="rg"><circle r="310" fill="none" stroke="'+C.rg+'" stroke-width="70"/><circle r="200" fill="'+C.t+'"/></g><g id="k5">'+U('rook',1.7,C.c)+'</g>'},
 function(){return '<circle r="300" fill="'+C.g+'"/><circle id="pr" r="300" fill="none" stroke="'+C.r+'" stroke-width="12"/><g id="k6">'+U('king',3.3,C.n)+'</g>'}
];
function F(a,b){var s='',r,k;function q(r){return .6+.3*r}function y(r){return 190+r*r*7+r*20}
 for(r=0;r<6;r++)for(k=-22;k<22;k++)s+='<polygon points="'+k*80*q(r)+','+y(r)+' '+(k+1)*80*q(r)+','+y(r)+' '+(k+1)*80*q(r+1)+','+y(r+1)+' '+k*80*q(r+1)+','+y(r+1)+'" fill="'+((r+k)%2?a:b)+'"/>';return s}
B.splice(1,0,function(){var s='<g id="ab">',i;for(i=0;i<5;i++)s+='<polygon points="0,0 1500,-210 1500,210" fill="'+C.p+'" transform="rotate('+i*72+')"/>';
 return s+'</g><circle cx="-190" cy="-70" r="200" fill="'+C.g+'"/><circle cx="270" cy="150" r="115" fill="'+C.n+'"/><path d="M-520 -300L-190 -110M-500 -250L-210 -90" stroke="'+C.n+'" stroke-width="7"/>'+F(C.n,C.fc)+'<g id="k7">'+U('queen',4.6,C.n)+'</g>'});
B.splice(5,0,function(){var cl=C.s,L='CHESS',pc=['pawn','king','queen','rook','knight'],ps=[1.7,3,2.5,2.1,2.4],s='<g id="sw">',k;
 for(k=0;k<5;k++)s+='<g class="stp"><rect x="-72" y="-110" width="144" height="700" fill="'+cl[k]+'"/><text y="-96" text-anchor="middle" font-family="Alfa Slab One,serif" font-size="176" fill="'+cl[k]+'">'+L[k]+'</text><g transform="translate(0 250)">'+U(pc[k],ps[k],C.sk)+'</g></g>';
 return s+'</g>'});
B.splice(8,0,function(){return '<circle id="sun" cx="-230" cy="-170" r="270" fill="'+C.r+'"/>'+F(C.n,C.fc)+'<polygon points="-70,200 70,200 260,520 -260,520" fill="'+C.bm+'" opacity=".75"/><g id="hk"><g transform="translate(0 70)">'+U('king',3,C.n)+'</g>'+H(1.7,'hh8')+'</g>'});
var TW=[[420,-330],[600,-60],[200,-340],[700,-250],[540,-410],[340,10]],HX=[-690,-460,-230,0,230,460,690],HS=[1.5,1.65,1.85,2.25,1.9,1.65,1.5],HPe,HWe,FL,t0=0,IO=0,R=[[-420,330],[-250,385],[-80,340],[90,395],[260,345],[420,390],[250,350],[40,330]];
function V(id,c,r){return '<ellipse cx="0" cy="60" rx="46" ry="7" fill="#000" opacity=".32"/><use href="#'+id+'" width="100" height="130" fill="'+(c||C.pc)+'" stroke="'+(r||C.ps)+'" stroke-width="1.8" transform="translate(-50 -65)"/>'}
function q2(r){return .6+.3*r}function y2(r){return 190+r*r*7+r*20}
function HD(){return '<g id="hand" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M66 -420H134L142 120H58Z" stroke="none"/><path d="M52 110C34 160 42 215 72 240H132C168 214 166 158 148 110Z" stroke="none"/><path d="M72 215C66 255 78 295 98 320" fill="none" stroke-width="27"/><path d="M128 215C138 255 122 295 104 320" fill="none" stroke-width="27"/><path d="M150 190C182 208 178 252 138 258" fill="none" stroke-width="24"/><rect x="46" y="30" width="108" height="30" rx="8" fill="'+C.g+'" stroke="none"/></g>'}
function H(sc,id){return '<g id="'+id+'"><use href="#hand" color="'+C.hc+'" transform="scale('+sc+') translate(-100 -320)"/></g>'}
var defs,h,i,FP,FE,sq;
function build(){var fx,z;if($('world'))$('world').remove();defs=HD();h='';FP=[];
for(i=0;i<N;i++){defs+='<clipPath id="k'+i+'x"><circle id="r'+i+'" r="0"/></clipPath>';
 h+='<g id="s'+i+'"'+(i?' clip-path="url(#k'+i+'x)"':'')+'><rect x="-1400" y="-900" width="2800" height="1800" fill="'+C.bg[i]+'"/><g id="c'+i+'">'+B[i]()+'</g></g>'}

var ids=['pawn','knight','rook','queen','king'];fx='<g id="fx" style="mix-blend-mode:'+C.bl+';pointer-events:none"><g id="sl" opacity="0">';
for(i=0;i<28;i++)fx+='<line x1="260" x2="1500" stroke="'+C.fx+'" stroke-width="3" transform="rotate('+i*12.86+')"/>';
fx+='</g><circle id="ir" r="0" fill="none" stroke="'+C.fx+'" opacity="0"/>';
for(i=0;i<(LITE?5:16);i++){var z=.4+Math.random()*.8;FP.push({x0:Math.random()*2-1,y0:Math.random(),z:z,s:.3*z,ph:Math.random()*6});fx+='<g class="fp" opacity=".55">'+U(ids[i%5],1,C.pf[i%C.pf.length])+'</g>'}
svg.insertAdjacentHTML('beforeend','<g id="world"><defs>'+defs+'</defs>'+h+fx+'</g></g>');FE=[].slice.call(document.querySelectorAll('.fp'));sq=[].slice.call(document.querySelectorAll('.sq'));HPe=HWe=FL=null;CL=[];CD=[]}
var MV=['e4','Nf3','Bb5','d4','Qd4','Rxe5','Nxe5','O-O','Qxh7+','Qh7#'],NM=['Opening','About me','Projects','Tournament record','Titles earned','Off the board','The game so far','My pieces','My next move','Checkmate'];
var Tx=[].slice.call(document.querySelectorAll('.t')),dots=$('dots'),D=[];
for(i=0;i<N;i++)(function(i){var b=document.createElement('button');b.setAttribute('aria-label','Go to scene '+(i+1));b.onclick=function(){scrollTo({top:(i?(i+.6)/N:0)*(document.documentElement.scrollHeight-innerHeight),behavior:rm?'auto':'smooth'})};dots.appendChild(b);D.push(b)})(i);
var sq=[].slice.call(document.querySelectorAll('.sq')),OX,OY,mx=0,my=0,P=0,SX=0,SY=0,la=-1;
function lay(){OX=innerWidth>innerHeight*1.1?290:0;OY=OX?0:-150;var sc=Math.max(innerWidth/1600,innerHeight/900);HW=innerWidth/sc/2;HH=innerHeight/sc/2}var HW,HH;lay();addEventListener('resize',lay);
addEventListener('mousemove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')});
var A=[
 function(t,f){var tm=performance.now()/1000,o=(tm*.6+f*2)%2,xm=OX?1:.4,sm=OX?1:.62,iv,i=0,r,kk,u,st,w,a,b,x,y;
 if(!HPe){HPe=[].slice.call(document.querySelectorAll('.hp'));HWe=[].slice.call(document.querySelectorAll('.hw'));FL=[].slice.call(document.querySelectorAll('#fl polygon'))}
 if(document.body.classList.contains('rdy')&&!t0)t0=performance.now()+(rm?-9999:200);
 var d=t0?performance.now()-t0:-1e4,p=K((d-1200)/1300),ia=K((d-1500)/900);
 iv=K((d-2000)/2400);IO=K((d-2300)/700);
 $('ot').setAttribute('opacity',K(1-(d-1100)/500));$('stk').setAttribute('opacity',p>0&&p<1?1:0);tr('stk','translate('+(p*3400-1700)+' 0)');
 $('fl').setAttribute('opacity',ia);$('hs').setAttribute('opacity',ia);[].forEach.call($('tw').children,function(g,j){var q=.5+.5*Math.sin(tm*2.3+j*1.7);g.setAttribute('transform','translate('+TW[j][0]*xm+' '+TW[j][1]+') scale('+(.25+q)*(OX?1:.6)+') rotate('+q*40+')');g.setAttribute('opacity',ia*(.3+.7*q))});
 tr('c0','translate('+mx*18+' '+(OX?0:-40)+')');tr('hs','translate('+(-mx*30)+' '+(-my*20)+')');
 var kl=Math.min(22,Math.ceil((HW+Math.abs(OX)+80)/48)+2);for(r=0;r<6;r++)for(kk=-22;kk<22;kk++){if(kk<-kl||kk>=kl){i++;continue}FL[i++].setAttribute('points',(kk+o)*80*q2(r)+','+y2(r)+' '+(kk+1+o)*80*q2(r)+','+y2(r)+' '+(kk+1+o)*80*q2(r+1)+','+y2(r+1)+' '+(kk+o)*80*q2(r+1)+','+y2(r+1))}
 HPe.forEach(function(g,k){g.setAttribute('transform','translate('+(HX[k]*xm+mx*25)+' '+(318+(1-E(K(iv*1.6-k*.12)))*520)+') rotate('+K(f*1.5-k*.13)*88+') scale('+HS[k]*sm*(1+.018*Math.sin(tm*1.7+k))+') translate(0 -59)')});
 HWe.forEach(function(g,k){g.setAttribute('transform','translate('+(HX[k]*xm+mx*55)+' '+(430+(1-E(K(iv*1.6-.5-k*.1)))*520)+') rotate('+K(f*1.5-.2-k*.13)*-88+') scale('+1.15*sm+') translate(0 -59)')});
 u=tm/1.1;st=Math.floor(u)%R.length;w=u%1;a=R[st];b=R[(st+1)%R.length];x=a[0]+(b[0]-a[0])*w;y=a[1]+(b[1]-a[1])*w-Math.sin(w*Math.PI)*90;
 tr('hn','translate('+x*xm+' '+y+') rotate('+(w-.5)*30+') scale('+.62*sm+') translate(0 -59)');},
 function(t){tr('k1','translate('+(t-.5)*760+' '+(60-Math.sin(t*Math.PI)*190)+') rotate('+(t-.5)*60+')')},
 function(t){tr('sp','rotate('+t*540+') scale('+(1+t*.5)+')');tr('k2','scale('+Math.cos(t*Math.PI*6)+' 1)')},
 function(t){tr('k3','translate(0 '+(380-300*K(t*2))+') scale('+Math.cos(t*Math.PI*4)+' 1)');$('cc').setAttribute('r',285+25*Math.sin(t*14));$('ln').setAttribute('height',700*K(t*1.5));tr('qh','translate(0 '+(80-300*K(t*2)-460*(1-E(K(t*2.2))))+') rotate('+Math.sin(t*9)*3+')')},
 function(t){var k=0,x,y,s;for(y=0;y<8;y++)for(x=0;x<8;x++){s=K(t*2.2-(x+y)*.07);sq[k++].setAttribute('transform','translate('+(x-3.5)*76+' '+(y-3.5)*76+') rotate('+(1-s)*180+') scale('+s+')')}tr('bd','rotate('+(-t*25+12)+')')},
 function(t,f){tr('ry','rotate('+f*180+')');tr('rg','rotate('+(-f*120)+')');tr('k5','scale('+Math.cos(t*Math.PI*6)+' 1)')},
 function(t){var a=90*(1-Math.pow(1-K(t*1.6),3));tr('k6','translate(0 215) rotate('+a+') translate(0 -215)');$('pr').setAttribute('r',300+K(t-.4)*400);$('pr').setAttribute('opacity',1-K((t-.4)*1.6))}
];
A.splice(1,0,function(t,f){tr('ab','rotate('+f*40+')');tr('k7','translate(0 '+(-30-40*t)+') scale('+(1+t*.1)+')')});
A.splice(5,0,function(t){[].forEach.call(document.querySelectorAll('.stp'),function(g,k){var o=(1-E(K(t*2.4-k*.28)))*900;g.setAttribute('transform','translate('+(k-2)*156+' '+(o-190+Math.sin(t*8+k)*6)+')')});tr('sw','scale('+(OX?1:.55)+')')});
A.splice(8,0,function(t){tr('hk','translate(0 '+(-170*E(K((t-.35)*1.6)))+')');tr('hh8','translate(0 '+(-70-600*(1-E(K(t*2.2))))+') rotate('+Math.sin(t*8)*2+')');$('sun').setAttribute('r',270+20*Math.sin(t*10))});
var CL=[],CD=[],TO=[];
function frame(){
 var max=document.documentElement.scrollHeight-innerHeight,T=K(scrollY/max);SX+=(mx-SX)*.08;SY+=(my-SY)*.08;
 var nw=performance.now(),dt=Math.min(64,nw-(frame.l||nw));frame.l=nw;P+=(T-P)*(rm?1:1-Math.pow(1-(LITE?.12:.07),dt/16.67));var f=Math.min(P*N,N-1e-4),i,rv,e,t,o,act=0;
 for(i=0;i<N;i++){
  rv=i?K((f-i)/.45):1;e=E(rv);t=K(f-i);
  if(i){var fu=rv>=1;if(fu!==CL[i]){CL[i]=fu;if(fu)$('s'+i).removeAttribute('clip-path');else $('s'+i).setAttribute('clip-path','url(#k'+i+'x)')}if(!fu||!CD[i]){$('r'+i).setAttribute('r',e*1500);CD[i]=fu}$('s'+i).style.display=(rv>0&&f<i+1.5)?'':'none'}
  if(rv>0&&f<i+1.5){tr('c'+i,'translate('+(OX+mx*18)+' '+(OY+my*12)+') rotate('+(1-e)*-140+') scale('+(.55+.45*e)+')');A[i](t,f)}
  o=i==0?K((.9-t)/.12)*IO:i==N-1?K((t-.22)/.15):K(Math.min((t-.22)/.15,(.96-t)/.12));
  if(f<i)o=0;
  if(o>0||TO[i]>0){TO[i]=o;Tx[i].style.opacity=o;Tx[i].style.setProperty('--o',o);Tx[i].style.transform=LITE?'translate3d(0,'+(1-o)*40+'px,0)':'perspective(1000px) translateY('+(1-o)*40+'px) rotateY('+SX*6*o+'deg) rotateX('+(-SY*4*o)+'deg)';Tx[i].classList.toggle('on',o>.5)}
  if(f>=i)act=i}
 D.forEach(function(b,j){b.classList.toggle('on',j==act)});
 $('hint').style.opacity=f<.15?1:0;$('pg').style.transform='scaleX('+P+')';

 var ir=$('ir'),on=0,j,q,tm=performance.now()/1000,span=2*HH+240;
 for(j=1;j<N;j++){q=K((f-j)/.45);if(q>0&&q<1){ir.setAttribute('r',E(q)*1500);ir.setAttribute('stroke-width',34*Math.sin(q*Math.PI));on=1}}
 ir.style.opacity=on;
 svg.style.transform='skewY('+Math.max(-4,Math.min(4,(T-P)*N*30))+'deg) scale(1.04)';
 $('sl').setAttribute('opacity',K(Math.abs(T-P)*N*2.5-.1)*.55);tr('sl','rotate('+f*60+')');
 FP.forEach(function(p,k){var y=((p.y0*span-f*520*p.z)%span+span)%span-HH-120;FE[k].setAttribute('opacity',.55*K((f-.6)/.6));FE[k].setAttribute('transform','translate('+(p.x0*HW+Math.sin(tm+p.ph)*30)+' '+y+') rotate('+(f*140*p.z+p.ph*50)+') scale('+p.s+')')});
 $('mv').textContent=(act+1)+'. '+MV[act];$('nm').textContent=NM[act];if(act!==la){la=act;var hb=$('mv');hb.classList.remove('pp');void hb.offsetWidth;hb.classList.add('pp')}cnt();
 requestAnimationFrame(frame)}
var pre=$('pre'),pn=$('pn'),v=0;
if(rm){pre.remove();document.body.classList.add('rdy')}else(function s(){v+=(100-v)*.05+.5;if(v>=100){pn.textContent=100;setTimeout(function(){pre.classList.add('done');document.body.classList.add('rdy');setTimeout(function(){pre.remove()},1100)},250);return}pn.textContent=Math.floor(v);requestAnimationFrame(s)})();
var cu=$('cu');
if(!rm&&matchMedia('(hover:hover) and (pointer:fine)').matches){document.body.classList.add('hc');var cx=0,cy=0,cX=0,cY=0;addEventListener('mousemove',function(e){cX=e.clientX;cY=e.clientY});document.addEventListener('mouseover',function(e){cu.classList.toggle('h',!!e.target.closest('a,button'))});(function m(){cx+=(cX-cx)*.2;cy+=(cY-cy)*.2;cu.style.transform='translate('+cx+'px,'+cy+'px) translate(-50%,-50%)';requestAnimationFrame(m)})()}else cu.remove();
[].forEach.call(document.querySelectorAll('[data-go]'),function(a){a.onclick=function(e){e.preventDefault();D[+a.dataset.go].click()}});
var tb=$('tb'),PL={l:{pa:'#2A2440',pb:'#2A2440',ps:'#F2A93B',v:'#7A3FC9',m:'#E0457B',pf:['#fff'],fc:'#FFF6E4',hc:'#2A2440',n:'#2A2440',r:'#E8303F',g:'#F2A93B',c:'#FFF6E4',t:'#2F8F78',p:'#EE9A9A',f1:'#4A4272',f2:'#EAD9BC',s:['#EF5B50','#F6A04D','#F3C14B','#7FC8A9','#6C8EBF'],sk:'#2A2440',bd:'#2A2440',bm:'#8C84B0',fx:'#fff',bl:'difference',pc:'#2A2440',hd:'#2A2440',tx:'#2A2440',vg:'#8A6F4A',vo:'.3',rg:'#E8303F',bg:['#F1E2CA','#F4D3CB','#CDE7DA','#E4DCF2','#F7E1A8','#F1E8D6','#D9E6F5','#F8D9C0','#F1E2CA','#F4D3CB']},
 d:{pa:'#1B1340',pb:'#C41428',ps:'#F6ECDA',v:'#7B3FE4',m:'#E8457F',pf:['#F1E2CA','#F2A93B','#F06A5A','#7FC8A9','#7B3FE4'],fc:'#2E2752',hc:'#F1E2CA',n:'#0D0B18',r:'#E8303F',g:'#F2A93B',c:'#F1E2CA',t:'#1F7A66',p:'#F06A5A',f1:'#2C2650',f2:'#100E1E',s:['#EF5B50','#F6A04D','#F3C14B','#F1E2CA','#7FC8A9'],sk:'#07060C',bd:'#14112A',bm:'#3A3366',fx:'#F1E2CA',bl:'normal',pc:'#F1E2CA',hd:'#F1E2CA',tx:'#F1E2CA',vg:'#000',vo:'.7',rg:'#F2A93B',bg:['#0B0916','#8E1B2C','#0B4A3C','#1B0630','#0A0C14','#08070E','#14112A','#6B1428','#241D4D','#0B0916']}};
function setTheme(m){Object.assign(C,PL[m]);if(LITE)C.bl='normal';document.body.classList.toggle('dk',m=='d');tb.textContent=m=='d'?'Light mode':'Dark mode';tb.setAttribute('aria-pressed',m=='d');build();
 Tx.forEach(function(el,k){el.style.setProperty('--bg',PL[m].bg[k]);el.classList.toggle('gl',m=='d'&&[0,5,6,8,9].indexOf(k)>-1);el.style.setProperty('--fg',m=='d'?'#F1E2CA':'#2A2440')});document.documentElement.style.background=document.body.style.background=PL[m].bg[0];try{localStorage.setItem('th',m)}catch(e){}}
tb.onclick=function(){setTheme(document.body.classList.contains('dk')?'l':'d')};
var m0='d';try{m0=localStorage.getItem('th')||'d'}catch(e){}
setTheme(m0=='l'?'l':'d');
Tx.forEach(function(el){[].forEach.call(el.children,function(c,j){c.style.setProperty('--i',j)})});
var SB=[].slice.call(document.querySelectorAll('.stats b')),SV=SB.map(function(b){return parseInt(b.textContent)}),SU=SB.map(function(b){return b.textContent.replace(/\d+/,'')}),cs=0;
function cnt(){if(!cs&&document.body.classList.contains('rdy'))cs=performance.now();var k=rm?1:cs?K((performance.now()-cs-1100)/1500):0;SB.forEach(function(b,j){if(SV[j]!==SV[j])return;b.textContent=Math.round(SV[j]*E(k))+SU[j]})}
frame();
})();
