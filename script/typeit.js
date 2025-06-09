new TypeIt("#typeEffectHeader", {
  speed: 75,
  waitUntilVisible: true,
  loop: true
})
.type("Victor Marin.")
.pause(1500)
.delete()
.type("Developer.")
.pause(1500)
.go();