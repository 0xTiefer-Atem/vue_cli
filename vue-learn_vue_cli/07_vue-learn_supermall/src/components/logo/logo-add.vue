<template>
  <div>
    <!--  添加比赛信息的对话框-->
    <el-dialog
            :visible.sync="dialogFormVisible"
            width="50%"
            :close-on-click-modal="false"
            :close-on-press-escape="false">
      <el-form :model="dataForm" style="text-align:center">
        <el-form-item label="比赛选择">
          <!--        div用来显示选择成功后的信息-->
          <el-row v-if="isSelect">
            <el-col :span="4">
              {{dataForm.startTime}}
            </el-col >
            <el-col  :span="4">
              <img :src="dataForm.clogo" alt="" style="width: 50px;height: 50px">
            </el-col>
            <el-col :span="4">
              {{dataForm.cname}}
            </el-col>
            <el-col :span="4">
              {{dataForm.homeName}} VS {{dataForm.awayName}}
            </el-col>
          </el-row>
          <el-button @click="selectMatch()">选择比赛</el-button>
        </el-form-item>
        <el-form-item label="配置文案">
          <el-input style="width: 85%" v-model="dataForm.info" placeholder="比赛文案"></el-input>
        </el-form-item>
        <el-form-item label="显示时间">
          <el-date-picker
                  value-format= "yyyy-MM-dd HH:mm"
                  format="yyyy-MM-dd HH:mm:ss"
                  v-model="dataForm.showTime"
                  type="datetimerange"
                  range-separator="至"
                  style="width: 85%"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addNewLogo()">添 加</el-button>
      </div>
    </el-dialog>

    <!--  选择比赛的对话框-->
    <el-dialog width="90%"
               :visible.sync="selectMatchVisible"
               :close-on-click-modal="false"
               :close-on-press-escape="false">
      <el-form :model="selectMatchForm" style="text-align:center">

        <!--      用的el-ui里的布局-->
        <el-row :gutter="24">
          <el-col :span="6">
            <el-select v-model="selectMatchForm.sportValue" placeholder="请选择类型">
              <el-option
                      v-for="( item, index ) in sportsList"
                      :key="index"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-form-item label="比赛时间区间">
              <el-date-picker
                      value-format= "yyyy-MM-dd HH:mm"
                      format="yyyy-MM-dd HH:mm:ss"
                      style="width: 60%"
                      v-model="selectMatchForm.selectTime"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col  :span="4">
            <el-input placeholder="赛事名/球队名/赛事ID" v-model="selectMatchForm.findInfo"></el-input>
          </el-col>
          <el-col :span="6">
            <el-button @click="findMatch()">查询</el-button>
          </el-col>
        </el-row>

        <el-table :data="dataList">
          <el-table-column
                  prop="startTime"
                  label="比赛开始时间"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="clogo"
                  label="赛事logo\n(底部logo样式)"
                  width="180">
            <!--插入图片链接的代码-->
            <template slot-scope="scope">
              <img  :src="scope.row.clogo" alt="" style="width: 50px;height: 50px">
            </template>
          </el-table-column>
          <el-table-column
                  prop="cname"
                  label="赛事信息">
          </el-table-column>
          <el-table-column
                  prop=""
                  label="比赛对阵">
            <template slot-scope="scope">
              {{scope.row.homeName}} VS {{scope.row.awayName}}
            </template>
          </el-table-column>
          <el-table-column
                  label="是否选择">
            <template slot-scope="scope">
              <el-button @click="addMatchMethod(scope.row , scope.$index)">选择</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </el-dialog>

  </div>

</template>

<script>
  export default {
    data () {
      return {

        //绑定选择器的列表
        sportsList: [
          {
            label: '足球',
            value: '1'
          },
          {
            label: '篮球',
            value: '2'
          }
        ],


        //是否显示选择后的详细信息
        isSelect: false,

        //赛事选择对话框是否可以显示
        dialogFormVisible: false,

        //赛事添加对话框是否可以显示
        selectMatchVisible: false,


        //保存新添加的比赛信息
        dataForm: {
          //选择的比赛信息
          startTime: '',
          clogo: '',
          cname: '',
          homeName: '',
          awayName: '',
          info: '',

          //添加比赛信息的对话框里的显示时间字段(我不知道是哪个就先自己定义一个，要改记得改完)
          showTime: ''
        },

        //选择比赛的对象字段
        selectMatchForm: {
          //选择体育类型的字段
          sportValue: '',

          //比赛时间区间
          selectTime: '',

          //  赛事名/球队名/赛事Id
          findInfo: ''
        },

        //查询的比赛列表都在这里面
        dataList: [
          {
            startTime: '123123123',
            clogo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583818574856&di=90fb538b674ae4e39c6d2b0da9f88e02&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F08%2F20%2F2357b8781a8b798.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
            cname: 'xxx',
            homeName: 'aaa',
            awayName: 'bbb',
          }
        ]

      }
    },
    methods: {
      init() {
        this.dialogFormVisible = true;
      },

      //添加新logo http请求函数
      addNewLogo() {
        //http请求
        console.log(this.dataForm);
      },

      //选择具体比赛信息
      selectMatch() {

        this.dialogFormVisible = false;

        this.selectMatchVisible = true;

      },

      //添加比赛
      addMatchMethod(item, index) {
        console.log(item);
        this.dataForm = item;
        this.selectMatchVisible = false;
        this.dialogFormVisible = true;
        this.isSelect = true;
      },

      //绑定的添加比赛对话框的查询按钮
      findMatch() {
        //查询比赛接口
        console.log(this.selectMatchForm);
      }
    }
  }
</script>

<style scoped>

</style>
