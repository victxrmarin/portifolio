new TypeIt("#typeEffectHeader", {
  speed: 100,
  waitUntilVisible: true,
  loop: true
})
.type("Victor Marin.")
.pause(1500)
.delete()
.type("Developer.")
.pause(1500)
.go();