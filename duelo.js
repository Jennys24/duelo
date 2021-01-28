
    class Card {
      constructor(name, cost) {
        this.name = name;
        this.cost = cost;
      }
    }

    class Unit extends Card {
      constructor(name, cost, power, resistance) {
        super(name, cost);
        this.power = power;
        this.resistance = resistance;
      }

      attack(target) {
        if (!(target instanceof Unit)) {
          console.log('ERROR!!! Se está atacando algo que no es una Unidad');
          return;
        }
        //reduce target resistence by power
        target.resistance -= this.power;

        if (target.resistance <= 0) {
          console.log(target.name + ' MURIOOOO!');
        }
      }
    }

    class Effect extends Card {
      constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
      }

      affect(unit) {
        if (this.stat == 'power') {
          unit.power += this.magnitude;
        } else {
          unit.resistance += this.magnitude;
        }
      }
    }

    //target of unit
    //const ninja_red = new Unit ('ninja_red', 3, 3, 4)
    //const ninja_black = new Unit ('ninja_black', 4, 5, 4)
    //efects
    //const hard_algorithm = new Effect('hard_algorithm', 2, 'aumentar la resistencia del objetivo en 3', 'resilience', 3)
    //const not_promise = new Effect('not_promise', 1, 'reducir la resistencia del objetivo en 2', 'resilience', -2)
    //const pair_programming = new Effect('pair_programming', 3, 'aumentar el poder del objetivo en 2', 'power', 2)

    // escenario
    // PASO 1
    console.log('Jugador 1 convoca a Ninja_Red');
    const ninja_red = new Unit('Ninja Rojo', 3, 3, 4);
    // PASO 2
    console.log('El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"');
    const algoritmo = new Effect('Algoritmo Dificil', 2, 'aumentar la resistencia del objetivo en 3', 'resistencia', 3);
    algoritmo.affect(ninja_red);
    // PASO 3
    console.log('El jugador 2 convoca a "Ninja Cinturón Negro"');
    const ninja_black = new Unit('Ninja Negro', 4, 5, 4);
    // PASO 4
    console.log('El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"');
    const not_promise = new Effect('Rechazo de promesa no manejado', 1, 'reducir la resistencia del objetivo en 2', 'resistencia', -2);
    not_promise.affect(ninja_red);
    // PASO 5
    console.log('El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"');
    const pair_programming = new Effect('Programación en pareja', 3, 'aumentar el poder del objetivo en 2', 'poder', 2);
  pair_programming.affect(ninja_red);   
    // PASO 6
    console.log('"Ninja Cinturón Rojo" ataca a "Ninja Cinturón Negro"');
    ninja_red.attack(ninja_black);