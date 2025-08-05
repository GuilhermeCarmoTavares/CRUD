# 📦 CRUD com Cadastro de Clientes

## 💻 Aplicação CRUD

Este é um projeto **full-stack simples** com foco didático, que exemplifica os fundamentos de uma aplicação CRUD (Create, Read, Update, Delete). Ele permite o cadastro, visualização, atualização e exclusão de dados de clientes em um banco de dados relacional.

---

## 🎯 Objetivo do Projeto

O projeto foi desenvolvido como parte da disciplina **Desenvolvimento Web** do curso de Ciência da Computação, com os seguintes objetivos principais:

- 🔁 Realizar requisições HTTP (GET, POST, PUT, DELETE)  
- 🔗 Estabelecer comunicação entre front-end e back-end  
- 🗃️ Integrar uma aplicação com banco de dados relacional  

Com essa aplicação, é possível:

- 📋 **Listar** todos os clientes cadastrados  
- 📌 **Cadastrar** um novo cliente  
- 📝 **Editar** informações de um cliente  
- 🗑️ **Excluir** um cliente da base de dados  

---

## 🧠 Sobre a Modelagem

A modelagem do banco de dados é simples e direta, ideal para fins didáticos. A estrutura se baseia em uma única tabela chamada `pessoas`, com os campos:

```sql
CREATE TABLE pessoas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(15) NOT NULL
);
```

Essa tabela armazena os dados dos clientes: nome, email e telefone.

---

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
├── backend
│   ├── server.js               # Lógica do servidor com Node.js e Express
│
├── frontend
│   ├── index.html              # Estrutura HTML da interface
│   ├── style.css               # Estilos visuais
│   ├── script.js               # Lógica de interação com a API
│
├── banco de dados.docx         # Script de criação da tabela no MySQL
```

---

## 🛠 Tecnologias Utilizadas

### 🔙 Backend

- **Node.js**  
- **Express.js**  
- **MySQL**

### 🌐 Frontend

- **HTML5**  
- **CSS3**  
- **JavaScript (puro)**

---

## 🌍 Hospedagem e Deploy

A aplicação pode ser facilmente hospedada em plataformas como:

- **Render**
- **Railway**

---

## ⚠️ Observações

> A execução local da aplicação exige ambiente com Node.js, MySQL e configuração das rotas no `server.js`.
