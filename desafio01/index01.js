// Padrao: Singleton

class Config {
    constructor() {
      if (Config.instance) {
        return Config.instance;
      }
      this.settings = {};
      Config.instance = this;
    }
  
    setConfig(key, value) {
      this.settings[key] = value;
    }
  
    getConfig(key) {
      return this.settings[key];
    }
  }
  
  console.log("--- Exemplo com Singleton ---");
  
  const c1 = new Config();
  c1.setConfig("lang", "pt-BR");
  console.log("Config 'lang' definida como 'pt-BR' na primeira instância.");
  
  const c2 = new Config();
  console.log("Acessando 'lang' na segunda instância:", c2.getConfig("lang")); 
  
  const saoAMesmaInstancia = c1 === c2;
  console.log(`c1 e c2 são a mesma instância? ${saoAMesmaInstancia}`); 