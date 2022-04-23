$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    var p = $( ".piano" ).first();
    var percentage = p.innerWidth()/2;
    $( ".piano" ).scrollLeft(percentage);
  })

function musePiano(frecuency){
  //const synth = new Tone.Synth().toDestination();
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  synth.triggerAttackRelease(frecuency, "8n");
}
