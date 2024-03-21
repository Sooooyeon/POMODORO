document.addEventListener('DOMContentLoaded', () => {
  
  const addBtn = document.querySelector('.add-btn');
  const todoInput = document.querySelector('.todo-input');
  const todoList = document.querySelector('.todo-list');

  function addTodo() {
    // trim 사용해 좌우의 불필요한 여백 제거
    const todoText = todoInput.value.trim();
    console.log(todoText);

    if(todoText !== '') {

      // todoText에 내용이 있을 경우 todoItem 이라는 li요소 생성
      const todoItem = document.createElement('li');

      // 생성한 todoItem에 클래스 추가
      todoItem.classList.add('todo-item');

      // todoItem의 체크 박스 생성
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.id = `ch-box${todoList.children.length + 1}`;

      // 체크박스와 연결되는 라벨 생성 후 todoText내용 넣어줌
      const label = document.createElement('label');
      label.setAttribute('for', checkbox.id);
      label.textContent = todoText;

      // todoItem에 자식요소로 체크박스와 라벨 붙여줌
      todoItem.appendChild(checkbox);
      todoItem.appendChild(label);

      // todoList에 todoItem를 자식요소로 붙임
      todoList.appendChild(todoItem);

      // 다음 일벽을 위해 입력창 초기화
      todoInput.value = ''; 
    }
  }

  // 할 일 추가하기 버튼 click 이벤트 생성
  addBtn.addEventListener('click', addTodo);

  // enter키를 눌러도 할일이 추가되도록 keypress 이벤트 추가
  todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  });
});
