```markdown
# 🧱 Builder Pattern

Este repositório contém um exemplo prático de implementação do **Design Pattern Builder** usando JavaScript moderno (ES6+).

## 📌 O que é o Padrão Builder?

O **Builder** é um padrão de projeto criacional que permite construir objetos complexos passo a passo. Ele separa a construção de um objeto da sua representação, permitindo que o mesmo processo de construção crie diferentes representações.

> 📖 **Definição (GoF):** “Separa a construção de um objeto complexo da sua representação, de modo que o mesmo processo de construção possa criar diferentes representações.”

---

## 📐 Estrutura do Projeto

- `OrderBuilder.js`: a classe responsável por construir o objeto `Order`.
- `Director.js`: encapsula lógicas de construção específicas (ex: pedido simples, pedido com desconto).
- `index.js`: ponto de entrada e execução dos exemplos.

---

## 🧠 Como funciona

A construção do objeto é feita por meio de métodos encadeáveis:

```js
const order = new OrderBuilder()
  .withClient("Felipe")
  .withItem({ product: "Mouse", amount: 1 })
  .withPaymentMethod("Pix")
  .withDiscount("discount10")
  .build();
```

Ou com a ajuda de um "Diretor":

```js
const director = new Director();
const order = director.createSimpleOrder(new OrderBuilder());
```

---

## 🧰 Por que usar o Builder?

✅ Quando há muitos parâmetros opcionais  
✅ Quando queremos evitar **construtores longos e confusos**  
✅ Quando há **diferentes variações** de um objeto  
✅ Quando queremos um **código mais legível e fluente**

---

## 📎 Convenções usadas

- Prefixo `with` para métodos que definem propriedades (ex: `withClient`)
- Prefixo `add` para coleções, se aplicável (ex: `addItem`)
- Método `build()` retorna o objeto final construído

---

## 🧪 Executando

```bash
node index.js
```

---

## 📂 Exemplo de saída

```json
{
  "client": "Felipe",
  "items": [],
  "paymentMethod": "Pix",
  "discount": null
}
```

---

## 📚 Referências

- [Refactoring.Guru – Builder](https://refactoring.guru/design-patterns/builder)
- *Design Patterns: Elements of Reusable Object-Oriented Software* – GoF

```
