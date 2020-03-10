<template>
  <div>
    <!--  添加比赛信息的对话框-->
    <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form :model="dataForm" style="text-align:center">
        <el-form-item label="比赛选择">
          <!--        div用来显示选择成功后的信息-->
          <div v-if="isSelect">

          </div>
          <el-button @click="selectMatch()">选择比赛</el-button>
        </el-form-item>
        <el-form-item label="配置文案">
          <el-input v-model="dataForm.info" placeholder="比赛文案"></el-input>
        </el-form-item>
        <el-form-item label="显示时间">
          <el-date-picker
                  v-model="dataForm.showTime"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="display:flex;justify-content:space-around;">
        <el-button type="primary" @click="addNewLogo()">添 加</el-button>
      </div>
    </el-dialog>

    <!--  选择比赛的对话框-->
    <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form :model="selectMatchForm" style="text-align:center">

        <!--      用的el-ui里的布局-->
        <el-row type="flex" justify="space-around">
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
          <el-col :span="6">
            <el-form-item label="比赛时间区间">
              <el-date-picker
                      v-model="selectMatchForm.selectTime"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="赛事名/球队名/赛事ID" v-model="selectMatchForm.findInfo"></el-input>
          </el-col>
        </el-row>

        <el-table>

        </el-table>
      </el-form>
      <div slot="footer" class="dialog-footer" style="display:flex;justify-content:space-around;">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteData()">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>
  export default {
    data () {
      return {

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

        dialogFormVisible: false,
        selectMatchVisible: false,



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
          sportValue: -1,

          //比赛时间区间
          selectTime: '',

          //  赛事名/球队名/赛事Id
          findInfo: ''

        }

      }
    },
    methods: {
      init() {
        this.dialogFormVisible = true;
      },

      //添加新logo
      addNewLogo() {
        //http请求
      },

      //选择具体比赛信息
      selectMatch() {

        this.dialogFormVisible = false;

        this.selectMatchVisible = true;

      }
    }
  }
</script>

<style scoped>

</style>
