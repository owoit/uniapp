module.exports = {
    types: [
        {value: '特性',     name: '特性:    一个新的特性'},
        {value: '修复',      name: '修复:    修复一个Bug'},
        {value: '官方更新',      name: '官方更新:    合并uni-app的官方更新'},
        {value: '文档',     name: '文档:    变更的只有文档'},
        {value: '格式',    name: '格式:    空格, 分号等格式修复'},
        {value: '重构', name: '重构:    代码重构，注意和特性、修复区分开'},
        {value: '性能',     name: '性能:    提升性能'},
        {value: '测试',     name: '测试:    添加一个测试'},
        {value: '工具',    name: '工具:    开发工具变动(构建、脚手架工具等)'},
        {value: '回滚',   name: '回滚:    代码回退'}
    ],
    scopes: [{ name: '合并官方' }, { name: '新增组件' }, { name: '规范' },{name:'框架修改'},{name:'其他优化'}],
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: '选择一种你的提交类型:',
        scope: '选择一个scope (可选)`scope`说明`commit`影响的范围。`scope`依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。该值可以省略\n:',
        // used if allowCustomScopes is true
        customScope: '自定义scope:',
        subject: '短说明:\n',
        body: '长说明，使用"|"换行(可选):\n',
        breaking: '非兼容性说明 (可选):\n',
        footer: '关联关闭的issue，例如:#31, #34(可选):\n',
        confirmCommit: '确定提交说明?'
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['特性', '修复'],
    // skip any questions you want
    skipQuestions: ['body', 'footer'],

    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:', // default value
};