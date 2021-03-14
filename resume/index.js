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
 * 渲染项目节点
 * @param {*} item 项目信息
 */
function project(item) {
  const { value, skills, date, description, qaq } = item;
  const columns = document.createElement('div');
  columns.setAttribute('class', 'columns');
  // title
  const titleBarColumns = document.createElement('div');
  titleBarColumns.setAttribute('class', 'titleBarColumns');
  const title = document.createElement('span');
  title.setAttribute('class', 'title');
  title.innerText = `项目名称：${value}`;
  const time = document.createElement('span');
  time.setAttribute('class', 'time');
  time.innerText = `项目时间：${date}`;
  // 技能
  const skillColumns = document.createElement('div');
  skillColumns.setAttribute('class', 'skillColumns');
  const skillNode = document.createElement('span');
  skillNode.setAttribute('class', 'skill');
  skillNode.innerText = `使用技术：${skills.join('，')}`;
  // 描述
  const descriptionColumns = document.createElement('div');
  descriptionColumns.setAttribute('class', 'descriptionColumns');
  const descriptionNode = document.createElement('span');
  descriptionNode.setAttribute('class', 'skill');
  descriptionNode.innerText = `项目描述：${description}`;
  // QAQ
  const QAQColumns = document.createElement('div');
  QAQColumns.setAttribute('class', 'QAQColumns');
  const QAQNode = document.createElement('span');
  QAQNode.setAttribute('class', 'QAQ');
  QAQNode.innerText = `QAQ：${qaq}`;
  add(titleBarColumns, [title, time]);
  add(skillColumns, [skillNode]);
  add(descriptionColumns, [descriptionNode]);
  add(QAQColumns, [QAQNode]);
  add(columns, [titleBarColumns, skillColumns, descriptionColumns, QAQColumns]);
  return columns;
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
}
start();
