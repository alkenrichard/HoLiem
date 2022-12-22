let button = document.querySelector("button");
    let t1 = gsap.timeline({ paused: true, reversed: true });
    let watch = false;

    button.addEventListener("click", (e) => {
      t1.play();
      watch = true;
      setTimeout(reverse, 5000);
      function reverse() {
        t1.reverse();
        watch = false;
      }
    });

    t1.to("button svg", {
      ease: "power1.out",
      rotate: 45,
    });

    t1.to("button svg", {
      ease: "power1.out",
      xPercent: -100,
    });

    t1.to(
      ".send",
      {
        x: -80,
        opacity: 0,
        duration: 1.4,
        ease: "power1.inOut",
      },
      0.2
    );

    t1.to("button svg", {
      ease: "elastic.in(2, 0.5)",
      x: 210,
      duration: 2,
    });

    t1.from(".done", {
      yPercent: -100,
      opacity: 0,
      duration: 2,
      ease: "bounce.out",
    });