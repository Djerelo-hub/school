// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Добавляем тень на навбар при прокрутке
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    if (video) {
        video.autoplay = false;
        video.pause();
        
        // Дополнительная защита от автовоспроизведения
        video.removeAttribute('autoplay');
        video.setAttribute('data-autoplay', 'false');
    }
});

// Обработчик для всех кнопок консультации Binotel
document.addEventListener('DOMContentLoaded', function() {
    // Находим ВСЕ кнопки консультации по ссылке
    const consultButtons = document.querySelectorAll('a[href="https://telegram.me/Bulanova_school_bot?start=consult"]');
    
    consultButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем переход по ссылке
            
            // Ищем кнопку Binotel
            const binotelButton = document.getElementById('bingc-phone-button');
            
            if (binotelButton) {
                // Эмулируем клик по кнопке Binotel
                binotelButton.click();
                console.log('Клик по кнопке Binotel выполнен');
            } else {
                console.log('Кнопка Binotel не найдена');
                // Если кнопка Binotel не найдена, перенаправляем в Telegram как запасной вариант
                window.location.href = 'https://telegram.me/Bulanova_school_bot?start=consult';
            }
        });
    });
});

function recolorBinatelCircles() {
    const color = '#AFC36A';
    const opacity = 0.9;
    const rgba = `rgba(175, 195, 106, ${opacity})`;
    
    const observer = new MutationObserver(function() {
        const button = document.getElementById('bingc-phone-button');
        if (button) {
            observer.disconnect();
            
            // Перекрашиваем ТОЛЬКО круги
            const outside = button.querySelector('.bingc-phone-button-circle-outside');
            const inside = button.querySelector('.bingc-phone-button-circle-inside');
            
            if (outside) {
                outside.style.fill = color;
                outside.style.setProperty('fill', color, 'important');
            }
            
            if (inside) {
                inside.style.fill = rgba;
                inside.style.setProperty('fill', rgba, 'important');
            }
            
            console.log('✅ Круги Бинателя перекрашены в #AFC36A');
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

recolorBinatelCircles();

(function(){
 var RU = (window.DZCB_LANG==='ru') || (!window.DZCB_LANG && location.pathname.indexOf('/ru')===0);
 var WD = RU ? {1:'Понедельник',2:'Вторник',3:'Среда',4:'Четверг',5:'Пятница',6:'Суббота',7:'Воскресенье'}
             : {1:'Понеділок',2:'Вівторок',3:'Середа',4:'Четвер',5:'Пʼятниця',6:'Субота',7:'Неділя'};
 var L = RU ? {lbl:'Перезвонить',h1:'Перезвоним за 2 минуты',p1:'Оставьте номер, и специалист перезвонит вам в течение 2 минут. Бесплатно и анонимно.',g1:'Перезвоните мне сейчас',
   ch:'Сейчас нерабочее время',ch2:'Выберите удобное время',cp:'Хотите, перезвоним вам в:',g2:'Жду звонка',hlab:'Часы',mlab:'Минуты',toSched:'🕐 Заказать звонок на конкретное время',toNow:'← Перезвонить сейчас',
   err:'Введите корректный номер телефона',
   okt:'Перезвоним в течение 2 минут. Держите телефон под рукой.',okh:'Готово! Мы вам перезваниваем',
   sb:'Записали!',st:function(x){return 'Перезвоним '+x+'. Держите телефон под рукой.';}}
  : {lbl:'Передзвонити',h1:'Передзвонимо за 2 хвилини',p1:'Залиште номер, і спеціаліст передзвонить вам протягом 2 хвилин. Безкоштовно та анонімно.',g1:'Передзвоніть мені зараз',
   ch:'Зараз неробочий час',ch2:'Оберіть зручний час',cp:'Хочете, зателефонуємо вам о:',g2:'Чекаю на дзвінок',hlab:'Година',mlab:'Хвилина',toSched:'🕐 Замовити дзвінок на конкретний час',toNow:'← Передзвонити зараз',
   err:'Введіть коректний номер телефону',
   okt:'Передзвонимо протягом 2 хвилин. Тримайте телефон поруч.',okh:'Готово! Ми вам передзвонюємо',
   sb:'Записали!',st:function(x){return 'Передзвонимо '+x+'. Тримайте телефон поруч.';}};
 var API='https://ninarkotikam.com/wp-json/dz/v1/';
 var $=function(id){return document.getElementById(id);};
 $('dzcb-lbl').textContent=L.lbl;$('dzcb-h1').textContent=L.h1;$('dzcb-p1').textContent=L.p1;$('dzcb-g1').textContent=L.g1;
 $('dzcb-ch').textContent=L.ch;$('dzcb-cp').textContent=L.cp;$('dzcb-g2').textContent=L.g2;$('dzcb-e1').textContent=L.err;$('dzcb-e2').textContent=L.err;$('dzcb-tt').textContent=L.okt;$('dzcb-hlab').textContent=L.hlab;$('dzcb-mlab').textContent=L.mlab;$('dzcb-toSched').textContent=L.toSched;$('dzcb-toNow').textContent=L.toNow;
 var ov=$('dzcb-ov');
 function show(id){['dzcb-open','dzcb-closed','dzcb-ring','dzcb-sched'].forEach(function(x){$(x).style.display=(x===id?(x==='dzcb-ring'||x==='dzcb-sched'?'block':'block'):'none');});}
 function close(){ov.classList.remove('on');}
 var minH=9,maxH=21,ch=9,cm=0,slots=[];
 function pad(n){return (n<10?'0':'')+n;}
 function render(){$('dzcb-hh').textContent=pad(ch);$('dzcb-mm').textContent=pad(cm);}
 function buildSlots(st){
   var ot=(st.open_time||'09:00').split(':'), ctm=(st.close_time||'21:00').split(':');
   minH=parseInt(ot[0],10); maxH=parseInt(ctm[0],10); ch=minH; cm=parseInt(ot[1],10)||0;
   slots=st.slots||[];
   var sel=$('dzcb-day'); sel.innerHTML='';
   slots.forEach(function(s,i){var o=document.createElement('option');o.value=s.date;o.textContent=(WD[s.wd]||'')+', '+pad(s.d)+'.'+pad(s.m);sel.appendChild(o);});
   render();
 }
 function open(){
   ov.classList.add('on'); show('dzcb-open'); $('dzcb-g1').disabled=false; $('dzcb-g1').textContent=L.g1;
   fetch(API+'cb-status').then(function(r){return r.json();}).then(function(st){
     buildSlots(st);
     if(st.open){ $('dzcb-ch').textContent=L.ch2; $('dzcb-toNow').style.display='block'; show('dzcb-open'); setTimeout(function(){$('dzcb-ph1').focus();},60); }
     else { $('dzcb-ch').textContent=L.ch; $('dzcb-toNow').style.display='none'; show('dzcb-closed'); setTimeout(function(){$('dzcb-ph2').focus();},60); }
   }).catch(function(){ show('dzcb-open'); });
 }
 $('dzcb-btn').onclick=open; $('dzcb-x').onclick=close;
 $('dzcb-toSched').onclick=function(){ $('dzcb-ch').textContent=L.ch2; $('dzcb-toNow').style.display='block'; show('dzcb-closed'); setTimeout(function(){$('dzcb-ph2').focus();},60); };
 $('dzcb-toNow').onclick=function(){ show('dzcb-open'); setTimeout(function(){$('dzcb-ph1').focus();},60); };
 var _bub=$('dzcb-bubble'), _fab=$('dzcb-fab');
 var PH = RU ? ['Хотите, перезвоним в удобное время?','Бесплатная консультация, анонимно','Оставьте номер, перезвоним за минуту']
             : ['Хочете, зателефонуємо у зручний час?','Безкоштовна консультація, анонімно','Залиште номер, передзвонимо за хвилину'];
 var _pi=0;
 function _showBub(){ _bub.textContent=PH[_pi%PH.length]; _fab.classList.add('show-bubble'); }
 function _hideBub(){ _fab.classList.remove('show-bubble'); }
 _fab.addEventListener('mouseenter',_showBub);
 _fab.addEventListener('mouseleave',_hideBub);
 _bub.addEventListener('click',open);
 setTimeout(function(){ _showBub(); setTimeout(_hideBub,5000); }, 3500);
 setInterval(function(){ _pi++; _showBub(); setTimeout(_hideBub,5000); }, 16000);
 ov.addEventListener('click',function(e){if(e.target===ov)close();});
 // степперы
 document.querySelectorAll('.dzcb-stp button').forEach(function(b){ b.onclick=function(){
   var d=parseInt(b.getAttribute('data-d'),10);
   if(b.getAttribute('data-t')==='h'){ ch+=d; if(ch<minH)ch=maxH; if(ch>maxH)ch=minH; }
   else { cm+=d*5; if(cm<0)cm=55; if(cm>55)cm=0; }
   render();
 };});
 function valid(v){return (v||'').replace(/[^0-9]/g,'').length>=9;}
 // отправка: сейчас
 $('dzcb-g1').onclick=function(){
   var v=$('dzcb-ph1').value; if(!valid(v)){$('dzcb-e1').style.display='block';return;}
   $('dzcb-e1').style.display='none';$('dzcb-g1').disabled=true;$('dzcb-g1').textContent='...';
   fetch(API+'callback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone:v,lang:RU?'ru':'ua',page:location.href,source:location.hostname})})
   .then(function(r){return r.json();}).then(function(){
     show('dzcb-ring');$('dzcb-tt').textContent=L.okt;
     function fmtN(x){return Math.floor(x/60)+':'+(x%60<10?'0':'')+(x%60);}
     var n=120;$('dzcb-n').textContent=fmtN(n);
     var t=setInterval(function(){n--;if(n<=0){clearInterval(t);$('dzcb-n').innerHTML='✅';$('dzcb-tt').textContent=L.okh;return;}$('dzcb-n').textContent=fmtN(n);},1000);
   }).catch(function(){$('dzcb-g1').disabled=false;$('dzcb-g1').textContent=L.g1;});
 };
 // отправка: на время
 $('dzcb-g2').onclick=function(){
   var v=$('dzcb-ph2').value; if(!valid(v)){$('dzcb-e2').style.display='block';return;}
   var date=$('dzcb-day').value; var when=date+' '+pad(ch)+':'+pad(cm);
   $('dzcb-e2').style.display='none';$('dzcb-g2').disabled=true;$('dzcb-g2').textContent='...';
   fetch(API+'callback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone:v,lang:RU?'ru':'ua',page:location.href,scheduled_at:when,source:location.hostname})})
   .then(function(r){return r.json();}).then(function(){
     var opt=$('dzcb-day').options[$('dzcb-day').selectedIndex]; var lbl=(opt?opt.textContent:date)+' о '+pad(ch)+':'+pad(cm);
     show('dzcb-sched');$('dzcb-sb').textContent=L.sb;$('dzcb-st').textContent=L.st(lbl);
   }).catch(function(){$('dzcb-g2').disabled=false;$('dzcb-g2').textContent=L.g2;});
 };
})();
// // Отслеживание кликов по кнопкам "Пройти безкоштовний курс"
// document.addEventListener('DOMContentLoaded', function() {
//     const courseButtons = document.querySelectorAll('a.btn-accent');
    
//     courseButtons.forEach(button => {
//         if (button.textContent.trim() === 'Пройти безкоштовний курс' || 
//             button.textContent.trim() === 'Пройти курс')  {
//             button.addEventListener('click', function() {
//                 if (typeof fbq === 'function') {
//                     fbq('track', 'Lead');
//                     console.log('Course button tracked as Lead');
//                 }
//             });
//         }
//     });
// });

// // Отслеживание кликов по кнопке Binotel (по тексту)
// setTimeout(function() {
//     const binotelButton = document.querySelector('.bingc-phone-button');
    
//     if (binotelButton && !binotelButton.hasAttribute('data-fb-tracked')) {
//         binotelButton.setAttribute('data-fb-tracked', 'true');
//         binotelButton.addEventListener('click', function() {
//             if (typeof fbq === 'function') {
//                 fbq('track', 'Lead');
//             }
//         });
//     }
// }, 1000);