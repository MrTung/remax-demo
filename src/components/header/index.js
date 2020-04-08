Component({
  properties: {
    title: {
      type: String,
      value: 'default value',
      observer(newVal,oldVal,changgePath){
        
      }
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  lifetimes: {
    // 组件的生命周期函数，用于声明组件的生命周期
    attached () {
      
    },
    ready () {
      
    },
  },
  pageLifetimes: {
    show() {
      
    },
  },
  methods: {
   
  }
})
