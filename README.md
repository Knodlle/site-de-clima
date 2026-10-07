# Weather App

Aplicação web simples de previsão do tempo desenvolvida com **Node.js, Express, EJS e Axios**.

O projeto consome a API do [Open-Meteo](https://open-meteo.com/) para obter as condições climáticas atuais do Rio de Janeiro e exibe as informações em uma interface visual.

## Tecnologias

* Node.js
* Express
* EJS
* Axios
* HTML5
* CSS3
* Open-Meteo API

## Funcionalidades

* Exibição da temperatura atual
* Exibição da condição climática
* Exibição da data e horário
* Ícones diferentes para dia e noite
* Ícones específicos para condições climáticas
* Interface responsiva

## Como executar

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Entre na pasta

```bash
cd weather
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
node index.js
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## Estrutura do projeto

```text
weather/
├── public/
│   ├── imgs/
│   │   ├── sun.svg
│   │   ├── noite.svg
│   │   ├── nublado.svg
│   │   ├── noitenublada.png
│   │   └── chuva.svg
│   │
│   └── styles/
│       └── style.css
│
├── views/
│   └── index.ejs
│
├── index.js
├── package.json
└── README.md
```

## API

Os dados meteorológicos são obtidos através da API **Open-Meteo**.

A aplicação utiliza os seguintes dados:

* `temperature_2m` — temperatura atual
* `weather_code` — código da condição climática
* `is_day` — indica se é dia ou noite
* `time` — horário da medição

## Códigos climáticos

A aplicação converte alguns códigos da API em descrições:

| Código | Condição             |
| -----: | -------------------- |
|      0 | Céu limpo            |
|      1 | Parcialmente nublado |
|      2 | Nublado              |
|      3 | Muito nublado        |
|     61 | Chuva                |
|     95 | Tempestade           |

## Objetivo

Projeto desenvolvido como prática de desenvolvimento web utilizando **Node.js e Express**, trabalhando com consumo de API externa, tratamento de dados e renderização dinâmica com EJS.
