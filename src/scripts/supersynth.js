function supersynth() {
  let synth = new Tone.Synth().toMaster()

  let keyText = document.getElementById('noteName')

  let key = null
  let level = null

  document.onkeydown = checkKey

  function playNote(a) {
    synth.triggerAttackRelease(a, '8n')
  }

  // looks at keypresses

  function checkKey(e) {
    e = e || window.event

    if(e.keyCode == '65') {
      key = 'A'
      keyText.innerHTML = key+level
      playNote(key+level)
    }
    else if(e.keyCode == '83') {
      key = 'B'
      keyText.innerHTML = key+level
      playNote(key+level)
    }
    else if(e.keyCode == '68') {
      key = 'C'
      keyText.innerHTML = key+level
      playNote(key+level)
    }
    else if(e.keyCode == '49') {
      level = '1'
    }
    else if(e.keyCode == '50') {
      level = '2'
    }
    else if(e.keyCode == '51') {
      level = '3'
    }
    else if(e.keyCode == '52') {
      level = '4'
    }
    else if(e.keyCode == '16') {
      playNote(key+level)
    }
  }
}
