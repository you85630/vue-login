export default {
  count: 0,
  activelist: {},
  // 表单数据
  tablelist: [
    {
      id: 0,
      name: 'lily',
      age: '30',
      from: 'shanghai'
    }, {
      id: 1,
      name: 'john',
      age: '40',
      from: 'beijin'
    }, {
      id: 2,
      name: 'tom',
      age: '50',
      from: 'guanghzou'
    }, {
      id: 3,
      name: 'anna',
      age: '20',
      from: 'shenzhen'
    }, {
      id: 4,
      name: 'david',
      age: '10',
      from: 'nanjin'
    }
  ],
  listlabel: false,
  labellist: {},
  // 图表数据
  charts: {
    width: 500,
    height: 400,
    options: {
      title: '标题111'
    },
    canvasId: 'myCanvas',       // canvas的id
    type: 'bar',                // 图表类型
    data: [                     // 数据
      { name: '2014', value: 1342 },
      { name: '2015', value: 2123 },
      { name: '2016', value: 1654 },
      { name: '2017', value: 1795 }
    ]
  },
  charts1: {
    width: 500,
    height: 400,
    options: {
      title: '标题111'
    },
    canvasId: 'myCanvas1',       // canvas的id
    type: 'pie',                // 图表类型
    data: [                     // 数据
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' },
      { value: 135, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }
    ]
  }
}
