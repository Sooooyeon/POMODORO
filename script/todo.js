document.addEventListener('DOMContentLoaded', () => {
  
  const addBtn = document.querySelector('.add-btn');
  const todoInput = document.querySelector('.todo-input');
  const todoList = document.querySelector('.todo-list');

  function addTodo() {
    // trim 사용해 좌우의 불필요한 여백 제거
    const todoText = todoInput.value.trim();

    if(todoText !== '') {

      const todoContainer = document.createElement('div');
      const btnContainer = document.createElement('div');

      // todoItem 이라는 li요소 생성
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

      const editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn')
      const editImg = document.createElement('img');
      editImg.setAttribute('src',"./img/icon-edit.svg");

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn')
      const deleteImg = document.createElement('img');
      deleteImg.setAttribute('src',"./img/icon-delete.svg");

      // todoContainer에 자식요소로 체크박스와 라벨 붙여줌
      todoContainer.appendChild(checkbox);
      todoContainer.appendChild(label);

      // 버튼에 자식요소로 이미지를 붙여줌
      editBtn.appendChild(editImg);
      deleteBtn.appendChild(deleteImg);

      // btnContainer에 자식요소로 수정버튼과 삭제버튼 붙여줌
      btnContainer.appendChild(editBtn);
      btnContainer.appendChild(deleteBtn);

      // todoItem에 todoContainer를 자식요소로 붙임
      todoItem.appendChild(todoContainer);

      // todoItem에 btnContainer 자식요소로 붙임
      todoItem.appendChild(btnContainer);

      // todoList에 자식요소로 todoItem붙임
      todoList.appendChild(todoItem);

      // 다음 일벽을 위해 입력창 초기화
      todoInput.value = ''; 

      deleteBtn.addEventListener('click', function() {
        todoList.removeChild(todoItem);
      });

      // 수정 버튼 이벤트 리스너 추가
      editBtn.addEventListener('click', function() {
        // 입력창에 현재 텍스트 삽입
        todoInput.value = label.textContent;
        // 수정할 때 해당 항목 삭제
        todoList.removeChild(todoItem);
        // 입력창에 포커스
        todoInput.focus();
      });
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
