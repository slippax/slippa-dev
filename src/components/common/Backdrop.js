import Particles from "react-tsparticles";

export const Backdrop = () => {
    return(
<Particles width="98vw" height="100vh"
    params={{
        "interactivity": {
          "events": {
            "onHover": {
              "enable": true,
              "mode": "bubble"
            }
          },
          "modes": {
            "bubble": {
              "distance": 250,
              "duration": 2,
              "opacity": 0,
              "size": 0
            },
            "grab": {
              "distance": 400
            },
            "repulse": {
              "distance": 400
            }
          }
        },
        "particles": {
          "color": {
            "value": "#99aab5"
          },
          "links": {
            "color": {
              "value": "#ffffff"
            },
            "distance": 150,
            "opacity": 0.4
          },
          "move": {
            "direction": "top",
            "attract": {
              "rotate": {
                "x": 600,
                "y": 600
              }
            },
            "enable": true,
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": true,
            "speed": 0.1
          },
          "number": {
            "density": {
              "enable": true
            },
            "value": 60
          },
          "opacity": {
            "random": {
              "enable": true
            },
            "animation": {
              "enable": true,
              "speed": 0.5
            }
          },
          "shape": {
            "options": {
              "polygon": {
                "nb_sides": 5
              },
              "star": {
                "nb_sides": 5
              },
            }
          },
          "size": {
            "value": 1.5,
            "animation": {
              "minimumValue": 0.1,
              "speed": 2
            }
          },
          "stroke": {
            "color": {
              "value": "#000000",
              "animation": {
                "enable": false,
                "speed": 2,
                "sync": true
              }
            }
          },
        }
      }} />
    );
}