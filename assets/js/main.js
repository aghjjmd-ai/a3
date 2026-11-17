(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var sq=$('sr-q');if(sq){var bx=[].slice.call(sq.querySelectorAll('input')),sm=$('sr-m');
 var M={author:'Find out who wrote it and what they know about the subject.',evidence:'Look for the original data or study behind the claim.',date:'Check the date; older information may be out of date.',tone:'Strong emotional language is a reason to slow down.',agree:'Search for the same claim from an independent source.'};
 on(bx.concat([sm]),function(){var s=0,miss=[];bx.forEach(function(b){if(b.checked)s++;else miss.push(M[b.value]);});if(sm.value==='1')s=Math.max(0,s-1);var pct=s/5*100,lvl=s>=4?'Likely reliable':s>=2?'Treat with caution':'Weak source';
  $('sr-o').innerHTML='<strong>'+lvl+' ('+s+'/5)</strong><div class="tk-meter"><i style="width:'+pct+'%'+'"></i></div>'+(miss.length?'<ul>'+miss.slice(0,3).map(function(m){return '<li>'+m+'</li>';}).join('')+'</ul>':'<p>It passes every check. Still, look at the evidence yourself.</p>')+(sm.value==='1'?'<p>Someone gains if you believe it, so look for confirmation elsewhere.</p>':'');});}
var fa=$('fs-a');if(fa){
 var F={adhom:['Attacking the person','The argument is about her view, but the reply is about her clothes. Who makes a claim does not decide whether it is true.','What reasons did she give, and are they good ones?'],cause:['False cause','Two things happened around the same time. Headaches often come and go for many reasons; the bracelet may have nothing to do with it.','Did anything else change? Would the headaches have stopped anyway?'],band:['Appeal to popularity','How many people use something says little about whether it works. Popular ideas have often turned out to be wrong.','What does careful testing show?'],false:['False choice','Only two options are offered when there are many more. You can care about the town and still question one plan.','What other positions are possible?'],straw:['Straw man','Her actual point has been exaggerated into something easier to attack.','What did she actually propose, and what are its real costs and benefits?'],slope:['Slippery slope','It assumes one small change must lead to an extreme outcome, without showing why.','What rules or limits could stop that happening?'],auth:['Appeal to false authority','The person is famous, but not an expert on diet. Their fame does not make the claim true.','What do qualified experts and good studies say?']};
 on([fa],function(){var f=F[fa.value];$('fs-o').innerHTML='<strong>'+f[0]+'</strong><p>'+f[1]+'</p><p><b>Better question:</b> '+f[2]+'</p>';});}
var pt=$('pb-t');if(pt){var pd=$('pb-d');
 var P={time:['List every task with a rough time estimate.','Mark the two that matter most for the deadline.','Cut, delay or ask for help with one task.','Block time in your calendar for the top two first.'],study:['Write the exact topic you do not understand.','Find one worked example and copy it step by step.','Try a similar problem without looking.','Ask a specific question about the step where you got stuck.'],decision:['Write the decision as a single question.','List the options, including “do nothing”.','Pick three criteria that matter and score each option.','Decide what new information would change your choice.'],group:['Agree on one sentence that defines the problem.','Have everyone write ideas privately before sharing.','Score options against criteria the group agrees on.','Choose one to try, with a date to review it.'],stuck:['Break the task into a first step under ten minutes.','Do just that step now, with a timer.','Remove one distraction from your workspace.','Schedule the next small step before you stop.']};
 on([pt,pd],function(){var s=P[pt.value],d=pd.value;$('pb-o').innerHTML='<strong>Your first four steps</strong><ol>'+s.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ol><p>'+(d==='day'?'With a day, do steps one and two in the next hour.':d==='week'?'With a week, aim for one step a day and review on day five.':'With a month, plan weekly checkpoints so it does not drift.')+'</p>';});}
})();
