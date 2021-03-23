// 项目经历
const projects = [
  {
    value: '全面激励报告-管理端',
    skills: ['react', 'typescript', 'javascript', 'antd-pro', 'nginx', 'eslint', 'shell'],
    date: '2021/03-至今',
    description: [
      '与全面激励报告-报告端对应。其中包括九个模块（主页，晋升激励，绩效激励长期激励，荣誉激励，认可激励，福利激励，培训激励， 数据发布）除数据发布外每一个模块包括（高管，员工）两种角色',
      '每一个模块都是由管理员通过富文本编辑编辑展示内容，excel导入数据。富文本编辑器导入的内容即时生效。excel导入的数据需要数据发布才能够使用，同时如果管理端关闭了本年的报告报告端将不有今年的报告'
    ],
    qaq: [
      '为什么使用antd-pro模版创建项目',
      '这个项目是已经在运营的项目，所以不太清楚当时为什么选用antd-pro（猜测：也许是为了方便）',
      '为什么会用到Nginx？',
      '因为本地服务和服务端交互的时候会出现跨域问题。由于以前调试方式都是发布到服务器调试这样效率太低为了提高效率所以使用nginx转发了请求解决跨域请求问题，实现本地调试。',
      '为什么会有用到shell？',
      '因为没有CI/CD持续集成都是手动将build后的内容复制到报告端中发布。由于以前都是手动复制，现在为了减少工作量使用shell脚本完成这一过程。'
    ]
  },
  {
    value: '全面激励报告-报告端',
    skills: ['javascript', 'jquery', 'css', 'html', 'nginx', 'eslint'],
    date: '2021/03-至今',
    description: [
      '与全面激励报告-管理端对应。展示上级对下级上一年的工作考核， 奖励等。其中包括十一个模块',
      '寄语，企业文化，结束语充分的描述了公司的理念，对未来的规划，对员工的激励',
      '报告总览统计了员工自入职以来与集团共同走过的岁月。和获得了多少奖励并且和上一年做比较在那一方面奖励增加减少',
      '晋升激励通过集团实施的晋升体系，展示晋升结果，晋升原因，成长路径。同时有上级领导对员工未来发展建议。',
      '绩效激励（绩效管理｜绩效薪酬）。绩效管理中以表格的形式展示了每一个月的考核结果，绩效薪酬统计员工应该获得薪酬的总数',
      '长期激励报告给长期为公司提供贡献的员工提供长期的回报。统计了员工从限制性股票、股票期权、股票增值权、员工持股中获得的激励',
      '荣誉激励报告充分发挥荣誉表彰政策，鼓励员工为岗位建功立业。根据不同的荣誉发放奖励',
      '认可激励为有效牵引员工行为与公司管理导向保持一致，进一步激发员工活力，公司建立认可激励体系。员工可获得任何激励点在内部兑换系统兑换奖励',
      '培训激励展示了员工参加了工资组织的培训，所花费用并且获得的培训激励极点',
      '福利激励展示了公司为员工购买的五险一金，发放各种生活补贴。'
    ],
    qaq: [
      '为什么使用Jquery，没有使用React或Vue？',
      '这个项目是已经在运营的项目，所以不太清楚当时为什么选用Jquery',
      '为什么会用到Nginx？',
      '因为本地服务和服务端交互的时候会出现跨域问题。由于以前调试方式都是发布到服务器调试这样效率太低为了提高效率所以使用nginx转发了请求解决跨域请求问题，实现本地调试。'
    ]
  },
  {
    value: '组件库',
    skills: ['react', 'typescript', 'javascript', 'html', 'less', 'eslint'],
    date: '2020/12-2021/06',
    description: [
      '为了符合某些业务场景的特殊需求，而antd无法满足这一系列场景。所以参考antd设计规则设计了对应的一系列组件。',
      '数字输入框（InputNumber）组件，树选择（TreeSelect）组件， 树组件（Tree）'
    ],
    qaq: [
      '如何处理树组件（复选框）情况父子级联动问题？',
      '将选中的节点当作一条路径来处理，向上：递归的查找兄弟节点更新父节点复选框状态。向下：将当前节点下的所有节点选中。'
    ]
  },
  {
    value: '中汇文具-管理端',
    skills: ['react', 'typescript', 'javascript', 'antd', 'RESTful', 'graphql', 'less', 'node', 'd3', 'eslint'],
    date: '2020/09-2020/11',
    description: [
      '用于订单管理，客户管理，业务员管理，管理员角色分配， 产品信息，系统管理，系统预设信息',
      '订单管理用于处理订单物流信息， 订单状态更新， 订单退货审批，订单状态维护，查看订单历史记录',
      '客户管理用于升级客户，禁用客户访问，统计客户浏览情况， 搜索统计，未注册客户查看，客户反馈，客户是否有对应业务员',
      '业务员管理处理业务员账号问题，销售团队分配， 业务员工作分析，不同业务设置不同折扣',
      '系统管理处理分配系统管理员，给管理员分配不同角色展示不同菜单栏， 自定义推送消息管理',
      '系统预设信息处理产品的折扣信息，产品含税价格设置， 客户起订量设置，游客权限设置'
    ],
    qaq: [
      '为什么会使用d3？',
      '为了更好的预览销售团队组织架构。',
      '为什么自己手动实现组织架构，而不使用开源？',
      '销售团队组织架构不断的有人员信息更新导致开源库中UI不统一，所以选择自己使用d3自己实现。'
    ]
  },
  {
    value: '标签管理',
    skills: ['react', 'typescript', 'javascript', 'antd', 'less', 'node', 'eslint'],
    date: '2020/04-2020/07',
    description: '',
    qaq: ''
  },
  {
    value: '人力2.0-(高管/中层)绩效考核',
    skills: ['react', 'typescript', 'javascript', 'antd', 'less', 'node', 'eslint', 'RESTful'],
    date: '2019/07-2019/10',
    description: [
      '考核模版设置：可选择模版应用范围，考核周期（年度/半年度/季度/月度）考核模版，设置名称， 开始时间，结束时间。',
      '考核内容设置：根据提供的模版选项，勾选设置模版名称，模版数据录入。',
      '处理考核工作：管理员对设置启动协管员工作，生成匿名考核账号，启动考核评分，实时监控考核进度， 结束评分。',
      '协管员工作：确定考核方案，设置考核对象，设置评价人，通过匿名账号打分， 审核考核名单生成代办事项，查看打分情况。',
      '代办处理： 对接第三方数据接口，是否同意当前审核流程，查看审核历史，审核流程图。'
    ],
    qaq: ''
  },

  {
    value: '中汇文具-销售端',
    skills: ['react-native', 'javascript', 'typescript', 'java', 'object-c', 'graphql', 'RESTful', 'node'],
    date: '2019/05-至今',
    description: '',
    qaq: ''
  }
];
// 侧边栏
const skills = [
  {
    key: 'Java',
    value: 'Java',
    proficiency: 50
  },
  {
    key: 'Mysql',
    value: 'Mysql',
    proficiency: 40
  },
  {
    key: 'JavaScript',
    value: 'JavaScript',
    proficiency: 60
  },
  {
    key: 'Node',
    value: 'Node',
    proficiency: 60
  },
  {
    key: 'html',
    value: 'html',
    proficiency: 70
  },
  {
    key: 'Jquery',
    value: 'Jquery',
    proficiency: 50
  },
  {
    key: 'Css',
    value: 'Css/Less',
    proficiency: 70
  },
  {
    key: 'Android',
    value: 'Android',
    proficiency: 40
  },
  {
    key: 'Vue',
    value: 'Vue',
    proficiency: 40
  },
  {
    key: 'React/React-Native',
    value: 'React/React-Native',
    proficiency: 80
  },
  {
    key: 'Webpack',
    value: 'Webpack',
    proficiency: 40
  },
  {
    key: 'Jest',
    value: 'Jest',
    proficiency: 40
  },
  {
    key: 'Git',
    value: 'Git',
    proficiency: 60
  },
  {
    key: 'Nginx',
    value: 'Nginx',
    proficiency: 20
  },
  {
    key: 'Shell',
    value: 'Shell',
    proficiency: 20
  }
];

const personInfo = [
  {
    key: '姓名',
    value: 'xxx'
  },
  {
    key: '性别',
    value: 'xxx'
  },
  {
    key: '年龄',
    value: 'xxx'
  },
  {
    key: '工作年限',
    value: 'xxx'
  },
  {
    key: '意向',
    value: 'xxx'
  },
  {
    key: '联系电话',
    value: 'xxx'
  },
  {
    key: '邮箱',
    value: 'xxx'
  },
  {
    key: '学历',
    value: 'xxx'
  },
  {
    key: '毕业时间',
    value: 'xxx'
  }
];
