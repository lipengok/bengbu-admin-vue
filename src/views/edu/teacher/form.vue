<template>
  <div>
    <div class="box">
      <!--添加讲师的表单-->
      <div class="app-container">
        <el-form label-width="120px">
          <el-form-item>
            <!--min之前要加上：不然会报错-->
            <svg-icon icon-class="paixu" />
            <br>
            <el-input-number v-model="teacherdb.sort" controls-position="right" :min="0"/>
          </el-form-item>
          <el-form-item>
            <svg-icon icon-class="touxian" />
            <br>
            <el-select v-model="teacherdb.level" clearable placeholder="请选择">
              <!--
                数据类型一定要和取出的json中的一致，否则没法回填
                因此，这里value使用动态绑定的值，保证其数据类型是number
              -->
              <el-option :value="1" label="高级讲师"/>
              <el-option :value="2" label="首席讲师"/>
            </el-select>
          </el-form-item>
          <el-form-item>
            <svg-icon icon-class="jiangshi" />
            <span style="color:red;">{{styleNameValue}}</span>
            <span style="color:green;">{{styleNameValueSuccess}}</span>
            <el-input placeholder="讲师的名称" v-model="teacherdb.name" @focus="focusName" :disabled="disName"/>
          </el-form-item>
          <el-form-item>
            <svg-icon icon-class="zili" />
            <span style="color:red;">{{styleCareerValue}}</span>
            <span style="color:green;">{{styleCareerValueSuccess}}</span>
            <el-input placeholder="讲师的资历" v-model="teacherdb.career" @focus="focusCareer" :disabled="disCarrer"/>
          </el-form-item>
          <el-form-item>
            <svg-icon icon-class="jianjie" />
            <span style="color:red;">{{styleIntroValue}}</span>
            <span style="color:green;">{{styleIntroValueSuccess}}</span>
            <el-input placeholder="讲师的简介" v-model="teacherdb.intro" rows="10" @focus="focusIntro" :disabled="disIntro" type="textarea"/>
          </el-form-item>
          <!-- 讲师头像：TODO -->
          <el-form-item class="button">
            <button :style="styleSub" class="submit" :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate" @mouseover="saveAndCheck" @mouseout="saveAndCheckOut">提交</button>
            <el-button class="reset" :disabled="checkBtnDisabled" @click="check">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box{
    width: 1095px;
    height: 550px;
    overflow: auto;
  }
  .box::-webkit-scrollbar{
    display: none;
  }
  .reset{
    float: right;
  }
  .submit{
    width:70px;
    height: 41px;
    background: green;
    float: left;
    border-radius: 5px;
  }
</style>
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
      // 保存按钮是否禁用,(true:禁用，false：非禁用)
      saveBtnDisabled: false ,
      checkBtnDisabled: false,
      disName: false,
      disCarrer: false,
      disIntro: false,
      
      //控制讲师的信息提示样式
      styleNameValue: "",
      styleCareerValue: "",
      styleIntroValue: "",
      styleNameValueSuccess: "",
      styleCareerValueSuccess: "",
      styleIntroValueSuccess: "",

      styleSub: "",
    }
  },
  methods: {
    saveOrUpdate() {
      //点击按钮之后按钮禁用，目的是防止用户多次点击
      this.saveBtnDisabled = true
      this.saveData()
    },

    // 提交
    saveData() {
      teacher.save(this.teacherdb).then(response => {
        // console.log(JSON.stringify(this.teacherdb))
        return this.$message({
          type: 'success',
          message: '保存成功!'
        })
      }).then(resposne => {
        this.$router.push({ path: '/edu/teacher' })
      }).catch((response) => {
        this.$message({
          type: 'error',
          message: '保存失败'
        })
      })
    },

    // 保存的相关方法
    check(){
      //点击绑定成功
      //console.log("ok");
      if(this.teacherdb.name==""){
        //console.log("ok");
        this.styleNameValue="讲师的名称不能为空";
      }else{
        this.styleNameValueSuccess="成功";
        this.disName=true;
      }
      if(this.teacherdb.career==""){
        this.styleCareerValue="讲师的资历不能为空";
      }else{
        this.styleCareerValueSuccess="成功";
        this.disCarrer=true;
      }
      if(this.teacherdb.intro==""){
        this.styleIntroValue="讲师的简介不能为空";
      }else{
        this.styleIntroValueSuccess="成功";
        this.disIntro=true;
      }
      if(this.teacherdb.career!=""&&this.teacherdb.intro!=""&&this.teacherdb.name!=""){
        console.log("表单可保存");
        this.checkBtnDisabled=true;
        this.saveBtnDisabled=false;
        this.styleSub="background:green";
      }
    },
    focusName(){
      this.styleNameValue="";
    },
    focusCareer(){
      this.styleCareerValue="";
    },
    focusIntro(){
      this.styleIntroValue="";
    },
    
    //当鼠标在提交按钮上的时候会自动校验，当前的表单是否有提交的资格
    saveAndCheck(){
      console.log("saveAndCheck");
      if(this.teacherdb.career==""||this.teacherdb.intro==""||this.teacherdb.name==""){
        console.log("表单不符合提交规则");
        this.saveBtnDisabled=true;
        this.styleSub="background:red";
      }
    },
    saveAndCheckOut(){
      this.saveBtnDisabled=true;
      console.log("saveAndCheckOut");
    },
  }
}
</script>