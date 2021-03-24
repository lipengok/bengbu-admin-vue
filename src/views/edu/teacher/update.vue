<template>
  <div class="box">
      <!--添加讲师的表单-->
      <div class="app-container">
        <el-form label-width="120px">
          <el-form-item>
            <el-row>
              <svg-icon icon-class="paixu" />排序
            </el-row>
            <el-input-number v-model="teacherdb.sort" controls-position="right" :min="0"/>
          </el-form-item>
          <el-form-item>
            <el-row>
              <svg-icon icon-class="touxian" />头衔
            </el-row>
            <el-select v-model="teacherdb.level" clearable placeholder="请选择">
              <el-option :value="1" label="高级讲师"/>
              <el-option :value="2" label="首席讲师"/>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-row>
              <svg-icon icon-class="jiangshi" />讲师的名称
            </el-row>
            <el-input placeholder="讲师的名称" v-model="teacherdb.name" @focus="focusName" :disabled="disName"/>
          </el-form-item>
          <el-form-item>
            <el-row>
              <svg-icon icon-class="zili" />讲师的资历
            </el-row>
            <el-input placeholder="讲师的资历" v-model="teacherdb.career"/>
          </el-form-item>
          <el-form-item>
            <el-row>
              <svg-icon icon-class="jianjie" />讲师的简介
            </el-row>
            <el-input placeholder="讲师的简介" v-model="teacherdb.intro" rows="10" type="textarea"/>
          </el-form-item>
          <!-- 讲师头像：TODO -->
          <el-form-item>
            <el-button  style="primary" :disabled="saveBtnDisabled" @click="updateData">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
import teacher from '@/api/edu/teacher'
export default {
  data() {
    return {
      teacherdb: {
        name: "",
        sort: 0,
        level: 1,
        career: "",
        intro: "",
        avatar: "",
      },
      saveBtnDisabled: false, // 保存按钮是否禁用,
      id: 0,
    }
  },
  created() {
    const id = this.$route.query.id
    this.fetchDataById(id)
  },
  methods: {
    // 根据id查询记录
    fetchDataById(id) {
        this.id=id;
        teacher.getById(id).then(response => {
            this.teacherdb = response.data.item
            console.log("查询成功")
        }).catch((response) => {
            this.$message({
                type: 'error',
                message: '获取数据失败'
            })
        })
    },
    //根据id修改讲师的信息    
    // 根据id更新记录
    updateData() {
        this.saveBtnDisabled = true
        teacher.updateById(this.id,this.teacherdb).then(response => {
            return this.$message({
                type: 'success',
                message: '修改成功!'
            })
        }).then(resposne => {
            this.$router.push({ path: '/edu/teacher' })
        }).catch((response) => {
            // console.log(response)
            this.$message({
                type: 'error',
                message: '保存失败'
            })
        })
    },
  }
}
</script>