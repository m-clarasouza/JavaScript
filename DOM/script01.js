//Ex 01
const studentName = document.getElementById("studentName");
const welcomeMessage = document.getElementById("pageTitle");

pageTitle.textContent = "Olá, turma!";
studentName.textContent = "Ex. 01";

// Ex 02
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const feedbackMessage = document.getElementById("feedbackMessage");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  feedbackMessage.textContent = `Olá, ${nameInput.value}!`;
});

//Ex 03
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Quando o formulário é enviado, executa esta função
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); //evita recarregar a página

  // Obtém o texto escrito no input e remove os espaços
  // que possam existir no início e no fim
  const taskText = taskInput.value.trim();

   // Verifica se o input está vazio; se estiver, termina a função
  if (taskText === "") return;

  // Cria um elemento HTML <li> para representar uma tarefa
  const taskItem = document.createElement("li");
  // Cria um elemento HTML <span> para guardar o texto da tarefa
  const taskLabel = document.createElement("span");

  // Coloca o texto escrito pelo utilizador dentro do span
  taskLabel.textContent = taskText;

  // Cria um elemento HTML <button> para o botão de remover
  const removeButton = document.createElement("button");

  // Define o tipo do botão como button
  // para não enviar o formulário
  removeButton.type = "button";

  // Define o texto que aparece no botão
  removeButton.textContent = "Remover";

// Quando o botão for clicado, executa esta função
  removeButton.addEventListener("click", () => {
     // Remove a tarefa correspondente da lista
    taskItem.remove();
  });

  // Adiciona o texto e o botão dentro do elemento <li>
  taskItem.append(taskLabel, removeButton); //adicionar botão de excluir e span
  taskList.append(taskItem);

  taskInput.value = "";//limpar input
});
