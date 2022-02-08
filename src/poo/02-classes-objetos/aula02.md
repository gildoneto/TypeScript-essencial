# Aula 02

## OBJETO

Coisa material ou abstrata que pode ser percebida pelos sentidos e descrita por meio das suas **características**, **comportamentos** e **estado** atual.

### Exemplo da aula 02

- CANETA
    - várias canetas podem ser criadas a partir de um mesmo molde
    - a caneta em si é o **objeto**
    - o molde representa a **classe**

![Classe Caneta em Portugol](ClasseCaneta.png?raw=true "Classe Caneta")

### Seguindo os passos em TS

1. **Criar o arquivo main.ts**

2. **Criar o arquivo Caneta.ts**

3. **No arquivo Caneta criar os atributos:**
    - `modelo: string`
    - `cor: string`
    - `ponta: number`
    - `carga: number`
    - `tampada: boolean`

4. **No arquivo Caneta criar os métodos (funções):**
    - `rabiscar(): void`
    - `tampar(): void`
    - `destampar(): void`

5. **No arquivo main instanciar uma caneta c1:**
    - `c1: Caneta`
    - `c1 = new Caneta()`

6. **No arquivo main setar os atributos:**
    - `c1.cor = 'Azul'`
    - `c1.ponta = 0.5`
    - `c1.tampada = false`

7. **Rodar main**
    - erro na classe caneta
    - roda sem retorno

8. **Implementa método status() pra exibir**
    - cor
    - this = auto referência
    - roda: mostra cor azul no console

9. **Adiciona atributo no método status()**
    - tampada
    - roda: mostra cor e tampada

10. **Adiciona atributos no método status()**
    - modelo
    - ponta
    - carga
    - roda:
    - modelo == undefined (JAVA == null)
    - carga == undefined (JAVA == 0)

11. **Implementa método tampar() e destampar()**
    - tampada = true
    - tampada = false

12. **Troca**
    - c1.tampada = false
    - c1.tampar()
    - rodar

13. **Explicar**
    - método()
    - Quem chamou o método tampar? => c1
    - this == c1

14. **Implementa método rabiscar()**
    - se tampada == true
    - console.log('ERRO! Não posso rabiscar')
    - senao console.log('Estou rabiscando')
    - Lógica: ao chamar o método rabiscar, não é possível rabiscar se a caneta estiver tampada

15. **Chama método rabiscar() na main**
    - c1.tampar() / c1.rabiscar()
    - roda main
    - c1.destampar() / c1.rabiscar()
    - roda main

16. **Overview Código**
    - Criamos uma caneta c1
    - ler o código da main
    - Uma vez que a classe estiver bem estabelecida, no futuro só precisa se preocupar em instanciar
    - Nada nos impede de criar uma nova caneta

17. **Instancia c2 na main**
    - c1.tampar() X c2.destampar()
    - comportamento diferente entre cada caneta, entre essas duas instâncias
    - c1.status() X c2.status()

18. **Overview OO**
    - Todos os objetos da mesma classe tem:
        - os mesmos atributos
        - os mesmos métodos
    - Porém não compartilham do mesmo estado
    - c1 e c2 têm o mesmo atributo
    - c1 e c2 não tem o mesmo valor de atributo (não tem o mesmo estado)

```
c1 = nova Caneta
c1.cor = "Azul"
c1.ponta = 0.5
c1.tampada = falso
c1.rabiscar

c2 = nova Caneta
c2.cor = "Vermelho"
c2.ponta = 1.0
c2.tampada = falso
c2.rabiscar
```

### Sugestão Exercício - Aula 02

