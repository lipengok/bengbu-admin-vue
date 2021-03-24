<template>
<div class="box">
<div class="table">
<!-- Table -->
<el-button type="primary" @click="dialogTableVisible = true">选择已有的收货地址</el-button>
<el-dialog title="收货地址" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
    <el-table-column property="phone" label="手机号"></el-table-column>
  </el-table>
</el-dialog>
</div>
<br>
<div class="form">
<!-- Form -->
<el-button type="primary" @click="dialogFormVisible = true">设置活动</el-button>
<el-dialog title="活动的设定" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="安徽" value="anhui"></el-option>
        <el-option label="江苏" value="jiangsu"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
<br>
<div>
  <el-tooltip :disabled="disabled" content="欢迎使用提示功能" placement="right" effect="dark">
    <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
  </el-tooltip>
</div>
<br>
<div>
   <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">hover 激活</el-button>
  </el-popover>

  <el-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">click 激活</el-button>
  </el-popover>

  <el-popover
    ref="popover"
    placement="right"
    title="标题"
    width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  </el-popover>
  <el-button v-popover:popover>focus 激活</el-button>

  <el-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible">
    <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
  </el-popover>
</div>
<br>
<div>
  <el-popconfirm
  confirm-button-text='好的'
  cancel-button-text='不用了'
  icon="el-icon-info"
  icon-color="red"
  title="这是一段内容,确定删除吗？">
  <el-button slot="reference">删除</el-button>
</el-popconfirm>
</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        disabled:false,
        visible: false,
        gridData: [{
          date: '2021-05-02',
          name: '李鹏',
          address: '安徽省淮北市濉溪县 玉兰路 3412号',
          phone: '17355279001'
        }, {
          date: '2021-05-04',
          name: 'jack',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '17355279001'
        }, {
          date: '2021-05-01',
          name: 'docker',
          address: '安徽省淮北市濉溪县 玉兰路 3412号',
          phone: '17355279001'
        }, {
          date: '2021-05-03',
          name: 'rose',
          address: '安徽省淮北市濉溪县 玉兰路 3412号',
          phone: '17355279001'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      
    }
  };
</script>