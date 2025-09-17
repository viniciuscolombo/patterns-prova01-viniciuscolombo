// Padrao Abstract Factory
class Button {
    render() {
        throw new Error("Este método deve ser sobrescrito");
    }
}

class Window {
    render() {
        throw new Error("Este método deve ser sobrescrito");
    }
}

class LightButton extends Button {
    render() {
        return "Botão branco criado";
    }
}
class LightWindow extends Window {
    render() {
        return "Janela clara aberta";
    }
}

class DarkButton extends Button {
    render() {
        return "Botão preto criado";
    }
}
class DarkWindow extends Window {
    render() {
        return "Janela escura aberta";
    }
}

class UIFactory {
    createButton() {
        throw new Error("Este método deve ser sobrescrito");
    }
    createWindow() {
        throw new Error("Este método deve ser sobrescrito");
    }
}

class LightThemeFactory extends UIFactory {
    createButton() {
        return new LightButton();
    }
    createWindow() {
        return new LightWindow();
    }
}

class DarkThemeFactory extends UIFactory {
    createButton() {
        return new DarkButton();
    }
    createWindow() {
        return new DarkWindow();
    }
}

console.log("--- Exemplo com Abstract Factory ---");

function createApp(factory) {
    const button = factory.createButton();
    const windowUI = factory.createWindow();

    console.log(button.render());
    console.log(windowUI.render());
}

console.log("Criando UI com o tema claro:");
createApp(new LightThemeFactory());

console.log("\nCriando UI com o tema escuro:");
createApp(new DarkThemeFactory());