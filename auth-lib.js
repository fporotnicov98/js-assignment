
let allUsers = [];
let allGroup = [];
let allRight = [];

// Возвращает массив всех пользователей.
function users() {
    return allUsers;
}

//Создает нового пользователя с указанным логином username и паролем password, возвращает созданного пользователя.
function createUser(name, password) {
    let newUser = { name, password, groups: [] };
    allUsers.push(newUser);
    return newUser;
}

// Удаляет пользователя user
function deleteUser(user) {
    if (!user) { throw new Error('Вы ввели некорректное значение') };
    if (!allUsers.includes(user)) { throw new Error('Пользователь не найден или был удален') };
    allUsers.splice(allUsers.indexOf(user, 1));
}

// Возвращает массив групп, к которым принадлежит пользователь user
function userGroups(user) {
    return user;
}

// Добавляет пользователя user в группу group
function addUserToGroup(user, group) { }

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) { }

// Возвращает массив прав
function rights() {
    return allRight;
}

// Создает новое право с именем name и возвращает его
function createRight(name) {
    let newRight = name;
    allRight.push(newRight);
    return newRight;
}

// Удаляет право right
function deleteRight(right) {
    if (!right) { throw new Error('Вы ввели некорректное значение') };
    if (!allRight.includes(right)) { throw new Error('Право не найдено или было удалено') };
    allRight.splice(allRight.indexOf(right, 1));
}

// Возвращает массив групп
function groups() {
    return allGroup;
}

// Создает новую группу и возвращает её.
function createGroup(name) {
    let newGroup = { name, rights: [] };
    allGroup.push(newGroup);
    return newGroup;
}

// Удаляет группу group
function deleteGroup(group) { 
    if (!group) { throw new Error('Вы ввели некорректное значение') };
    if (!allGroup.includes(group)) { throw new Error('Группа не найдена или была удалена') };
    allGroup.splice(allGroup.indexOf(group, 1));
}

// Возвращает массив прав, которые принадлежат группе group
function groupRights() { }

// Добавляет право right к группе group
function addRightToGroup() { }

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup() { }

function login(username, password) { }

function currentUser() { }

function logout() { }

function isAuthorized(user, right) { }
