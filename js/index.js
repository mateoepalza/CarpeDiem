
window.onload = function(){
  const getRemainTime = deadline =>{
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000)/1000,
    remainSeconds = ('0'+Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0'+Math.floor(remainTime /60  % 60)).slice(-2),
    remainHours = ('0'+Math.floor(remainTime / 3600 % 24)).slice(-2);
    remainDays = (Math.floor(remainTime / (3600 * 24)));

    return {
      remainTime,
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays
    }
  };

  const countDown = (deadline,elem, finalMessage) => {
    const d = document.getElementById(elem[0]);
    const h = document.getElementById(elem[1]);
    const m = document.getElementById(elem[2]);
    const s = document.getElementById(elem[3]);

    const timerUpdate = setInterval( () => {

      let t = getRemainTime(deadline);
      d.innerHTML = t.remainDays;
      h.innerHTML = t.remainHours;
      m.innerHTML = t.remainMinutes;
      s.innerHTML = t.remainSeconds;

      if(t.remainTime <= 1){
        clearInterval(timerUpdate);
      }
    },1000)
  }

  countDown('Oct 10 2019 23:59:59 GMT-0500',new Array('dias','horas','minutos','segundos'), 'Mensaje');

  setInterval(() => {
    document.getElementById("load").style.opacity = "0";
  },1000);
  setInterval(() => {

    document.getElementById("load").style.display = "none";
  },2000);


}
