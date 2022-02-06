# TypeScript Essencial


## Introdução ao TypeScript por Willian Justen
[Link Playlist](https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_)

### O que é o TypeScript?

- É um superset do JavaScript
- Adiciona novas features ao JavaScript
- Basicamente, tipagem estática.
- Compila para JavaScript
- Permite adoção gradual (arquivos `.ts` convivem com `.js`)

### Por que usar o TypeScript?

- Evita resultados inesperados

```javascript
function sum(a, b) {
    return a + b
}

sum(1, 2) // 3
sum('1', '2') // 12 opa!
```
- Avisa se estiver fazendo algo errado
- Já funciona como uma espécie de documentação

```typescript
type Platform = 'Windows' | 'Mac OS' | 'Linux'
type Feature = 'Single Player' | 'Multiplayer' | 'Co-op'

interface GameDetails {
    id: string
    title: string
    description: string
    platfforms: Platform[]
    features: Feature[]
}
```
- Deixa sua IDE extremamente poderosa!

### Desvantagens do TypeScript

- Necessita ser compilao (mais passos no tooling)
- Aprendizado inicial dos tipos e boas práticas
- Erros nem sempre muito claros, ou muito grandes

### Instalando o compilador

[TypeScript Official Page](https://www.typescriptlang.org/download)

Para rodar o compilador com watch:

`tsc script.ts --watch`

### Criando e Configurando TSconfig

O arquivo `tsconfig.json` contém as regras de compilação. Para criar o arquivo rode o comando:

`tsc --init`

-----------------------
### Programação Orientada a Objetos com TypeScript

