<template>
  <div class="app-container">
    <h2 style="text-align: center;">发布新课程</h2>
    <el-steps :active="1" process-status="wait" align-center style="margin-bottom: 40px;">
      <el-step title="填写课程基本信息"/>
      <el-step title="创建课程大纲"/>
      <el-step title="提交审核"/>
    </el-steps>
    <el-form label-width="120px">
      <el-form-item label="课程标题">
        <el-input v-model="courseInfo.title" placeholder=" 示例：机器学习项目课：从基础到搭建项目视频课程。专业名称注意大小写"/>
      </el-form-item>
      <!-- 所属分类：级联下拉列表 -->
      <!-- 一级分类 -->
      <el-form-item label="课程类别">
        <el-select
          filterable
          @focus="initSubjectList"
          @change="subjectLevelOneChanged"
          v-model="courseInfo.subjectParentId"
          placeholder="请选择">
          <el-option
            v-for="subject in subjectNestedList"
            :key="subject.id"
            :label="subject.title"
            :value="subject.id"/>
        </el-select>
        <!-- 二级分类 -->
        <el-select 
          @focus="initSubjectListSecond"
          v-model="courseInfo.subjectId" 
          placeholder="请选择">
          <el-option
            v-for="subject in subSubjectList"
            :key="subject.value"
            :label="subject.title"
            :value="subject.id"/>
        </el-select>
      </el-form-item>
      <!-- 课程讲师 -->
      <el-form-item label="课程讲师">
        <el-select
          @focus="initTeacher"
          v-model="courseInfo.teacherId"
          placeholder="请选择">
          <el-option
            v-for="teacher in teacherList"
            :key="teacher.id"
            :label="teacher.name"
            :value="teacher.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="课程详情描述">
         <el-input
            type="textarea"
            :autosize="{ minRows: 10, maxRows: 20}"
            placeholder="请输入内容"
            v-model="courseInfo.description">
          </el-input>
      </el-form-item> 
      <el-form-item label="上传封面">
        <el-upload
          class="upload-demo"
          action="http://localhost:9529/admin/edu/course/upload"
          :on-success="uploadSuccess">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">请选择封面</div>
        </el-upload>
      </el-form-item>
      <!-- 所属分类 TODO -->
      <!-- 课程讲师 TODO -->
      <el-form-item label="总课时">
        <el-input-number :min="0" v-model="courseInfo.lessonNum" controls-position="right" placeholder="请填写课程的总课时数"/>
      </el-form-item>
      <!-- 课程简介 TODO -->
      <!-- 课程封面 TODO -->
      <el-form-item label="课程价格">
        <el-input-number :min="0" v-model="courseInfo.price" controls-position="right" placeholder="免费课程请设置为0元"/> 元
      </el-form-item>
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="next">保存并下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import course from '@/api/edu/course'
import subject from '@/api/edu/subject'
import teacher from '@/api/edu/teacher'
const defaultForm = {
  title: '',
  subjectId: '',
  teacherId: '',
  lessonNum: 0,
  description: '',
  cover: '',
  price: 0
}

export default {
  data() {
    return {
      courseInfo: defaultForm,
      saveBtnDisabled: false ,// 保存按钮是否禁用
      subjectNestedList: [],//一级分类列表
      subSubjectList: [],//二级分类列表
      teacherList: [],//讲师列表
      
    }
  },
  watch: {
    $route(to, from) {
      console.log('watch $route')
      this.init()
    }
  },
  created() {
    console.log('info created')
    this.init()
  },
  methods: {
    init() {
      if (this.$route.params && this.$route.params.id) {
        const id = this.$route.params.id
        //根据id获取课程基本信息
        this.fetchCourseInfoById(id)
      } 
    },
    //回显数据
    fetchCourseInfoById(id) {
      course.getCourseInfoById(id).then(response => {
        this.courseInfo = response.data.item
      }).catch((response) => {
        this.$message({
          type: 'error',
          message: response.message
        })
      })
    },
    //一级下拉框初始化效果
    initSubjectList() {
      subject.getNestedTreeList().then(response => {
        this.subjectNestedList = response.data.list;
      })
    },
    //二级下拉框初始化效果
    initSubjectListSecond(){
      this.courseInfo.subjectId="";
    },
    //讲师选择初始化
    initTeacher(){
      teacher.getList().then(response=>{
        console.log(response.data.items);
        this.teacherList=response.data.items;
      });
    },
    //一级下拉框内容改变时触发的动作
    subjectLevelOneChanged(value) {
        subject.getListByParentId(value).then(response=>{
          this.subSubjectList = response.data.list;
        });
    },
    //下一步按钮
    next() {
      console.log('next')
      this.saveBtnDisabled = true
      if (!this.courseInfo.id) {
        this.saveData()
      } else {
        this.updateData()
      }
    },
    // 保存
    saveData() {
      console.log(this.courseInfo);
      course.saveCourseInfo(this.courseInfo).then(response => {
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
        return response
      }).then(response => {
        this.$router.push({ path: '/edu/course/chapter/' + response.data.courseId })
      }).catch((response) => {
        this.$message({
          type: 'error',
          message: response.message
        })
      })
    },
    // 完成之后页面跳转
    updateData() {
      this.$router.push({ path: '/edu/course/chapter/1' })
    },
    //文件上传
    uploadSuccess(file){
      console.log(file.data.cover)
      this.courseInfo.cover=file.data.cover;
    },
  }
}
</script>