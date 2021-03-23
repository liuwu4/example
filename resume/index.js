/**
 * 将子节点添加到父节点下
 * @param {*} parent
 * @param {*} childrens
 */
function add(parent, childrens) {
  childrens.forEach((item) => {
    parent.appendChild(item);
  });
}
/**
 * 渲染节点
 * @param {*} title 标题
 * @param {*} key 唯一标识
 * @param {*} proficiency 熟练程度
 */
function node(title, key, proficiency) {
  const container = document.createElement('div');
  container.setAttribute('class', 'item');
  const titles = document.createElement('span');
  titles.setAttribute('class', key);
  titles.innerText = title;
  const skilled = document.createElement('div');
  const copySkilled = skilled.cloneNode(false);
  copySkilled.style.width = `${proficiency}%`;
  copySkilled.setAttribute('class', 'proficiency');
  skilled.appendChild(copySkilled);
  container.appendChild(titles);
  container.appendChild(skilled);
  return container;
}
/**
 * 渲染项目描述
 * @param {*} parentNode
 * @param {*} data
 */
function renderDescription(parentNode, data) {
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'description-list');
  data.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
  });
  parentNode.appendChild(ul);
}
/**
 * 渲染项目问题
 * @param {*} parentNode
 * @param {*} data
 */
function renderQuestion(parentNode, data) {
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'question-ul');
  data.forEach((item) => {
    const { question, answer } = item;
    const li = document.createElement('li');
    li.setAttribute('class', 'question-li');
    li.innerHTML = question;
    const result = document.createElement('div');
    result.setAttribute = 'answer-li';
    result.innerHTML = answer;
    li.appendChild(result);
    ul.appendChild(li);
  });
  parentNode.appendChild(ul);
}

/**
 * 渲染项目节点
 * @param {*} item 项目信息
 */
function project(item) {
  const { value, skills, date, description, qaq } = item;
  const columns = document.createElement('div');
  columns.setAttribute('class', 'columns');
  const title = document.createElement('div');
  title.setAttribute('class', 'title');
  title.innerText = `项目名称：${value}`;
  const time = document.createElement('div');
  time.setAttribute('class', 'time');
  time.innerText = `项目时间：${date}`;
  // 技能
  // const skillColumns = document.createElement('div');
  // skillColumns.setAttribute('class', 'skillColumns');
  const skillNode = document.createElement('div');
  skillNode.setAttribute('class', 'skill');
  skillNode.innerText = `使用技术：${skills.join('，')}`;
  // 描述
  const descriptionNode = document.createElement('div');
  descriptionNode.setAttribute('class', 'description');
  descriptionNode.innerText = `项目描述`;
  // QAQ
  const QAQNode = document.createElement('span');
  QAQNode.setAttribute('class', 'question');
  QAQNode.innerText = `项目问题`;
  renderDescription(descriptionNode, description);
  qaq && renderQuestion(QAQNode, qaq);
  add(columns, [title, time, skillNode, descriptionNode]);
  qaq && add(columns, [QAQNode]);
  return columns;
}
/**
 * 侧边栏信息
 */
function sidebar() {
  const side = document.querySelector('#person');
  personInfo.forEach((item) => {
    const container = document.createElement('div');
    container.setAttribute('class', 'item');
    const title = document.createElement('span');
    title.setAttribute('class', 'person-title');
    title.innerText = item.key;
    const value = document.createElement('span');
    value.setAttribute('class', 'person-value');
    value.innerText = item.value;
    add(container, [title, value]);
    side.appendChild(container);
  });
}

function start() {
  const parent = document.querySelector('#skill');
  skills.forEach((item) => {
    parent.appendChild(node(item.value, item.key, item.proficiency));
  });
  const projectContainer = document.querySelector('#projects');
  projects.forEach((item) => {
    projectContainer.appendChild(project(item));
  });
  sidebar();
}
start();
