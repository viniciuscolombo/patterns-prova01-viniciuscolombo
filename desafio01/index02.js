// Padrao: Factory Method

class Bicicleta {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
  class Patinete {
    move() {
      return "Andando de patinete pelo estacionamento da UNISATC";
    }
  }
  
  class Onibus {
    move() {
      return "Andando de ônibus e chegando na UNISATC";
    }
  }
  
  class TransporteFactory {
    static createTransporte(tipo) {
      switch (tipo) {
        case "bicicleta":
          return new Bicicleta();
        case "patinete":
          return new Patinete();
        case "onibus":
          return new Onibus();
        default:
          throw new Error("Tipo de transporte não suportado.");
      }
    }
  }
  
  console.log("\n--- Exemplo com Factory Method ---");
  
  try {
    const transporte1 = TransporteFactory.createTransporte("bicicleta");
    console.log(transporte1.move());
  
    const transporte2 = TransporteFactory.createTransporte("onibus");
    console.log(transporte2.move());
  
    const transporte3 = TransporteFactory.createTransporte("patinete");
    console.log(transporte3.move());
  } catch (error) {
    console.error(error.message);
  }